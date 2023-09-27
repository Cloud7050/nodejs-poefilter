import { EffectSet } from "../effect/effectSet.js";



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
