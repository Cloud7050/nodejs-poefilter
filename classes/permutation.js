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

	#tryCondense(psOld) {
		let pSource = psOld.shift();
		l("=".repeat(80));
		l("	psOld:   -1\n");
		let cSource = pSource.c;

		for (let duplicator of ConditionSet.DUPLICATORS) {
			if (cSource[duplicator.property] === null) {
				// The source ConditionSet must match one of the generated ConditionSets. This is
				// impossible when the value is null.
				// Eg it does not make sense to try to condense null + true + false for a boolean.
				// Instead, the source should be true/false and the variants would be the other
				// boolean.
				continue;
			}
			l(`[${duplicator.property}]`);

			let cVariants = duplicator.generate(cSource);
			let matchIndex = cVariants.findIndex((c) => c.equals(cSource));
			// If this throws an error, there is something wrong with the logic
			cVariants.splice(matchIndex, 1);

			// Find all variants
			let pVariants = [];
			for (let i = psOld.length - 1; i >= 0; i--) {
				let pOld = psOld[i];
				let isMatch = cVariants.some(
					(variant) => pOld.c.equals(variant)
				);
				if (isMatch) {
					pVariants.push(
						psOld.splice(i, 1)[0]
					);
				}
			}
			if (pVariants.length === 0) {
				// Nothing to condense due to no matches. Skip logging
				continue;
			}
			l(`	psOld:   -${pVariants.length} | Found ${pVariants.length}/${cVariants.length} matches`);

			if (pVariants.length !== cVariants.length) {
				// Not enough matches, cannot condense, must transfer all variants
				this.ps.push(...pVariants);
				l(`	this.ps: +${pVariants.length} | Transferred, not enough`);
				continue;
			}

			// Check if all variants & source have same effects
			let isAllSame = pVariants.every(
				(pVariant) => pVariant.e.equals(pSource.e)
			);

			if (isAllSame) {
				// Can condense. Transfer pSource after setting its property to null. By removing
				// all its variants and adding only it back with null, the property is skipped when
				// exporting
				cSource[duplicator.property] = null;
				this.ps.push(pSource);
				l("	this.ps: +1 | Condensed!");
				return;
			}

			// Not same, must transfer all variants
			this.ps.push(...pVariants);
			l(`	this.ps: +${pVariants.length} | Transferred, effects differ`);
		}

		this.ps.push(pSource);
		l("\n	this.ps: +1");
	}

	#optimiseOnce() {
		let psOld = this.ps;
		this.ps = [];

		while (psOld.length > 0) {
			this.#tryCondense(psOld);
		}
	}

	#sortBooleanFirst(property) {
		this.ps.sort((p1, p2) => {
			let c1 = p1.c[property];
			let c2 = p2.c[property];
			// 1 is "less than" 2, it needs to be first since its property is true
			if (c1 && !c2) return -1;
			// Similarly, 2 goes before 1
			if (!c1 && c2) return 1;
			return 0;
		});
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

	/**
	 * Must sort before saving, as conditions that have no inverse need to be at
	 * the top. Eg you can check if a BaseType matches, but can't realistically
	 * check if it doesn't match.
	 */
	sort() {
		// Run sorts in reverse order, most important group last
		this.#sortBooleanFirst("isLootyMod");
		this.#sortBooleanFirst("isLootyBase");
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
	#useDuplicator(duplicator) {
		this.#cs = this.#cs.flatMap(
			(c) => duplicator.generate(c)
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
			this.#useDuplicator(duplicator);
		}

		return new PermutationManager(this.#cs);
	}
}
