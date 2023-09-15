/* [Imports] */
import fs from "fs";
import { ConditionSet } from "./conditionSet.js";
import { EffectSet } from "./effectSet.js";



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
		console.log(`\n\n\noldPs: ${oldPs.length + 1}→${oldPs.length}`)

		for (let duplicator of ConditionSet.DUPLICATORS) {
			console.log(`\nTrying property ${duplicator.property}`)

			let cVariants = duplicator.callback(sourceP.c);
			cVariants = cVariants.filter((c) => !c.equals(sourceP.c));
			console.log(`Made ${cVariants.length} other variants`)

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
			console.log(`oldPs: ${oldPs.length + pVariants.length}→${oldPs.length}`)
			console.log(`Found ${pVariants.length} matching permutations`)

			//FIXME
			if (cVariants.length !== pVariants.length) {
				console.log(`Can't find enough, transferring`)
				this.ps.push(...pVariants);
				console.log(`this.ps: ${this.ps.length - pVariants.length}→${this.ps.length}`)
				continue;
			} else {
				// console.log("same")
			}

			// Check if all variants have same effects
			let isAllSame = pVariants.every(
				(pVariant) => pVariant.e.equals(sourceP.e)
			);

			// console.log(cVariants);
			// console.log(pVariants);
			// console.log(isAllSame);
			if (isAllSame) {
				console.log(`isAllSame, condensing!`)
				// console.log(pVariants.map(p => p.e));
				// console.log("YES");
				// If same, can condense using sourceP (skip its property check) and transfer
				// only it
				sourceP[duplicator.property] = null;
				this.ps.push(sourceP);
				console.log(`this.ps: ${this.ps.length - 1}→${this.ps.length}`)
				return;
			} else {
				console.log(`!isAllSame, transferring`)
				// If not same, must transfer all variants
				this.ps.push(...pVariants);
				console.log(`this.ps: ${this.ps.length - pVariants.length}→${this.ps.length}`)
			}
		}
		this.ps.push(sourceP);
	}

	#optimiseOnce() {
		let oldPs = this.ps;
		this.ps = [];

		while (oldPs.length > 0) {
			// console.log(`Condensing ${oldPs.length}→${this.ps.length}...`);
			this.#tryCondense(oldPs);
		}
		// console.log(`Condensed ${oldPs.length}→${this.ps.length}...`);
	}

	optimise() {
		let previousCount = this.ps.length;
		while (true) {
			// console.log(`Starting with ${previousCount} permutations...`);
			this.#optimiseOnce();
			let newCount = this.ps.length;

			if (newCount >= previousCount) {
				// Couldn't optimise further
				// console.log(`Ended with ${newCount} permutations`);
				break;
			}

			// console.log(`Ended with ${newCount} permutations`);
			previousCount = newCount;

			//FIXME
			// break;
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
