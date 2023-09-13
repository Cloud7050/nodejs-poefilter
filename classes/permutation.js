/* [Imports] */
import { EffectSet } from "./effectSet.js";



/* [Exports] */
export class Permutation {
	static VALUE = {
		// Shrink, unmap
		LOW: 1,
		// May shrink, unmap
		MEDIUM: 2,
		// Never shrink, map
		HIGH: 3
	};

	effectSet = new EffectSet();
	value = Permutation.VALUE.LOW;

	conditionSet;

	constructor(_conditionSet) {
		this.conditionSet = _conditionSet;
	}

	certifyValue(_value) {
		// Keep whichever is higher
		this.value = Math.max(this.value, _value);
	}
}
