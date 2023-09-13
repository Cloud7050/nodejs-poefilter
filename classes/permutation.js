/* [Imports] */
import { EffectSet } from "./effectSet.js";



/* [Exports] */
export class Permutation {
	static VALUE = {
		// May shrink, may unmap
		LOW: 1,
		// Never shrink, may unmap
		MEDIUM: 2,
		// Never shrink, never unmap
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
