/* [Imports] */
import { ConditionSet } from "./classes/conditionSet.js";
import { Permutation } from "./classes/permutation.js";



/* [Exports] */

/**
 * Generate all Permutations by duplicating ConditionSets.
 */
export function makePermutations() {
	/**
	 * For each value, clone the specified ConditionSet and set the specified
	 * property to the value.
	 *
	 * @returns an array of ConditonSets
	 */
	function conditionsForValues(c, property, values) {
		return values.map(
			(value) => {
				let clone = c.clone();
				clone[property] = value;
				return clone;
			}
		);
	}
	/**
	 * Duplicates the specified ConditionSets using the specified property and
	 * values. Destructively modifies the provided array.
	 */
	function duplicateConditions(cs, property, values) {
		let newCs = cs.flatMap(
			(c) => conditionsForValues(c, property, values)
		);
		cs.length = 0;
		cs.push(...newCs);
	}
	function duplicateBoolean(cs, property) {
		return duplicateConditions(cs, property, [true, false]);
	}
	function duplicateEnum(cs, property, enumObject) {
		return duplicateConditions(cs, property, Object.values(enumObject));
	}

	// Generate ConditionSets.
	// This array will get its contents continually replaced by the result of
	// each duplicate call
	let cs = [new ConditionSet()];

	duplicateEnum(cs, "type", ConditionSet.TYPE);
	duplicateEnum(cs, "rarity", ConditionSet.RARITY);

	duplicateBoolean(cs, "isTripleLink");
	duplicateBoolean(cs, "isWhite");
	duplicateBoolean(cs, "isRgb");
	duplicateBoolean(cs, "isTripleBlueLink");

	duplicateBoolean(cs, "isQuality");
	duplicateBoolean(cs, "isMirrored");
	duplicateBoolean(cs, "isCorrupted");

	// Convert ConditionSets into blank Permutations, which start with no
	// effects
	return cs.map(
		(c) => new Permutation(c)
	);
}

/**
 * Decides what effects should be applied based on each Permutation's
 * conditions.
 */
export function decideEffects(permutations) {

}
