/* [Imports] */
import { ConditionSet } from "../condition/conditionSet.js";
import { PermutationManager } from "./permutationManager.js";



/* [Exports] */
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
