/* [Imports] */
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
