/* [Imports] */
import { ConditionSet } from "./conditionSet.js";
import { EffectSet } from "./effectSet.js";



/* [Exports] */
export class Permutation {
	static VALUE = {
		LOW: 1, // Will shrink & unmap
		MEDIUM: 2, // May shrink, will unmap
		HIGH: 3 // Never shrink or unmap
	};

	e = new EffectSet();
	value = Permutation.VALUE.LOW;

	c;

	constructor(conditionSet) {
		this.c = conditionSet;
	}

	certifyValue(_value) {
		// Keep whichever is higher
		this.value = Math.max(this.value, _value);
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
		this.#duplicateBoolean("isTripleBlueLink");

		this.#duplicateBoolean("isQuality");
		this.#duplicateBoolean("isMirrored");
		this.#duplicateBoolean("isCorrupted");

		// Convert ConditionSets into blank Permutations, which start with no
		// effects
		return this.#cs.map(
			(c) => new Permutation(c)
		);
	}
}
