import { EffectSet } from "../effect/effectSet.js";



/* [Exports] */
export class Permutation {
	isHideImmune = false;

	e;
	c;

	constructor(_c) {
		this.e = new EffectSet();
		this.c = _c;
	}
}
