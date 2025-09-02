import { StringList } from "./stringList.js";

export class Comparison {
	static OPERATOR = {
		EQUAL: "=",
		NE: "!", // Or "!="
		LTE: "<=",
		MTE: ">=",
		LT: "<",
		MT: ">",
		EXACT: "=="
	};

	operator;
	value; // StringList or number. No direct strings as they may not be wrapped properly

	constructor(value, operator = Comparison.OPERATOR.EXACT) {
		this.operator = operator;
		this.value = value;
	}

	export(name) {
		let value = this.value instanceof StringList ? this.value.export() : this.value;
		return `${name} ${this.operator} ${value}`;
	}
}
