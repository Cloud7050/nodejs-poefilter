/* [Exports] */
export class Effecter {
	#permutationManager;

	constructor(permutationManager) {
		this.#permutationManager = permutationManager;
	}

	// eslint-disable-next-line no-empty-function, no-unused-vars
	decideOne(p) {}

	/**
	 * Decides what effects should be applied based on each Permutation's
	 * conditions.
	 */
	decide() {
		for (let p of this.#permutationManager.ps) {
			this.decideOne(p);
		}
	}
}
