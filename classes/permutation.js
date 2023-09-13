/* [Imports] */
import { EffectSet } from "./effectSet.js";



/* [Exports] */
export class Permutation {
	effectSet = new EffectSet();

	conditionSet;

	constructor(_conditionSet) {
		this.conditionSet = _conditionSet;
	}
}
