/* [Imports] */
import fs from "fs";
import { ConditionSet } from "./conditionSet.js";
import { EffectSet } from "./effectSet.js";



/* [Exports] */
export class Permutation {
	e = new EffectSet();

	isHideImmune = false;
	/**
	 * Whether outline is unimportant enough that, if shrunk, outline should
	 * also be removed
	 */
	isFluffOutline = false;

	c;

	constructor(conditionSet) {
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

	optimise() {
		//TODO
		// Remove the first permutation

		// Get its ConditionSet

		// For each property, generate its variants

		// Remove its variant from the list, if any

		// If all variants have the same effects, the property can be condensed by setting it to null

		// Repeat until the list is empty. Return the new list

		// Recurse until there were no changes between optimisation passes
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
	 * For each value, clone the specified ConditionSet and set the specified
	 * property to the value.
	 *
	 * @returns an array of ConditonSets
	 */
	static conditionsForValues(c, property, values) {
		return values.map(
			(value) => {
				let clone = c.clone();
				clone[property] = value;
				return clone;
			}
		);
	}

	/**
	 * Duplicates existing ConditionSets using the specified property and
	 * values. Replaces ConditionSets with the new conditions.
	 */
	#duplicateConditions(property, values) {
		this.#cs = this.#cs.flatMap(
			(c) => PermutationMaker.conditionsForValues(c, property, values)
		);
	}

	#duplicateBoolean(property) {
		return this.#duplicateConditions(property, [true, false]);
	}

	#duplicateEnum(property, enumObject) {
		return this.#duplicateConditions(property, Object.values(enumObject));
	}

	/**
	 * Generates all Permutations by duplicating ConditionSets.
	 */
	generate() {
		// This is the seed used that will get replaced in the first duplicate
		// call
		this.#cs = [new ConditionSet()];

		this.#duplicateEnum("type", ConditionSet.TYPE);
		this.#duplicateEnum("rarity", ConditionSet.RARITY);

		this.#duplicateBoolean("isTripleLink");
		this.#duplicateBoolean("isWhite");
		this.#duplicateBoolean("isRgb");
		this.#duplicateBoolean("isFour");
		this.#duplicateBoolean("isFourLink");

		this.#duplicateBoolean("isQuality");
		this.#duplicateBoolean("isMirrored");
		this.#duplicateBoolean("isCorrupted");

		return new PermutationManager(this.#cs);
	}
}
