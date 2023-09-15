/* [Imports] */
import fs from "fs";
import { ConditionSet } from "./conditionSet.js";
import { EffectSet } from "./effectSet.js";
import { Logger } from "../logger.js";



/* [Main] */
const l = Logger.l;



/* [Exports] */
export class Permutation {
	isHideImmune = false;
	/**
	 * Whether outline is unimportant enough that, if shrunk, outline should
	 * also be removed
	 */
	isFluffOutline = false;

	e;
	c;

	constructor(conditionSet) {
		this.e = new EffectSet();
		this.c = conditionSet;
	}
}

class PermutationManager {
	ps;

	constructor(cs) {
		// Convert ConditionSets into blank Permutations, which start with no
		// effects
		this.ps = cs.map(
			(c) => new Permutation(c)
		);
	}

	#tryCondense(oldPs) {
		let sourceP = oldPs.shift();
		l("\n\n\noldPs:   -1");

		for (let duplicator of ConditionSet.DUPLICATORS) {
			if (sourceP.c[duplicator.property] === null) continue;
			l(`[${duplicator.property}]`);

			let cVariants = duplicator.callback(sourceP.c);
			let i = cVariants.findIndex((c) => c.equals(sourceP.c));
			if (i === -1) continue;
			else cVariants.splice(i, 1);

			// Find all variants
			let pVariants = [];
			for (let i = oldPs.length - 1; i >= 0; i--) {
				let oldP = oldPs[i];
				let isMatch = cVariants.some(
					(variant) => oldP.c.equals(variant)
				);
				if (isMatch) {
					pVariants.push(
						oldPs.splice(i, 1)[0]
					);
				}
			}
			if (pVariants.length === 0) continue;
			l(`oldPs:   -${pVariants.length} | Found ${pVariants.length}/${cVariants.length} matches`);

			if (cVariants.length !== pVariants.length) {
				this.ps.push(...pVariants);
				l(`this.ps: +${pVariants.length} | Transferred, not enough`);
				continue;
			}

			// Check if all variants have same effects
			let isAllSame = pVariants.every(
				(pVariant) => pVariant.e.equals(sourceP.e)
			);

			if (isAllSame) {
				// If same, can condense using sourceP (skip its property check) and transfer
				// only it
				// l(sourceP.toString());
				// l(pVariants.toString());
				sourceP.c[duplicator.property] = null;
				// l(sourceP.toString());
				this.ps.push(sourceP);
				l("this.ps: +1 | Condensed!");
				return;
			}

			// If not same, must transfer all variants
			this.ps.push(...pVariants);
			l(`this.ps: +${pVariants.length} | Transferred, not same`);
		}
		this.ps.push(sourceP);
		l("\nthis.ps: +1");
	}

	#optimiseOnce() {
		let oldPs = this.ps;
		this.ps = [];

		while (oldPs.length > 0) {
			this.#tryCondense(oldPs);
		}
	}

	optimise() {
		let previousCount = this.ps.length;
		while (true) {
			this.#optimiseOnce();
			let newCount = this.ps.length;

			if (newCount >= previousCount) {
				// Couldn't optimise further
				break;
			}

			console.log(`Optimised ${previousCount} → ${newCount} permutations`);
			previousCount = newCount;
		}
	}

	save() {
		// Convert to lines
		let lines = [];
		let blockCount = 0;
		for (let p of this.ps) {
			let effectLines = p.e.export();
			if (effectLines.length <= 0) {
				// Skip useless blocks
				continue;
			}
			let conditionLines = p.c.export();

			lines.push("Show");

			for (let conditionLine of conditionLines) {
				lines.push(`	${conditionLine}`);
			}

			lines.push("");

			for (let effectLine of effectLines) {
				lines.push(`	${effectLine}`);
			}

			lines.push("");

			blockCount++;
		}

		// Save as filter files
		let filterBlocks = lines.join("\n");
		fs.writeFileSync("./Cloud.filter", filterBlocks);
		fs.writeFileSync("C:/Users/cloud/Documents/My Games/Path of Exile/Cloud.filter", filterBlocks);

		console.log(`Blocks: ${blockCount}/${this.ps.length}`);
		console.log(`Lines: ${lines.length}`);
	}
}

export class PermutationMaker {
	#cs = [];

	/**
	 * Duplicates existing ConditionSets using the specified property and
	 * values. Replaces ConditionSets with the new conditions.
	 */
	#duplicate(duplicator) {
		this.#cs = this.#cs.flatMap(
			(c) => duplicator.callback(c)
		);
	}

	/**
	 * Generates all Permutations by duplicating ConditionSets.
	 */
	generate() {
		// This is the seed used that will get replaced in the first duplicate
		// call
		this.#cs = [new ConditionSet()];

		for (let duplicator of ConditionSet.DUPLICATORS) {
			this.#duplicate(duplicator);
		}

		return new PermutationManager(this.#cs);
	}
}
