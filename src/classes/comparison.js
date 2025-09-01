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
	value;

	constructor(operator, value) {
		this.operator = operator;
		this.value = value;
	}

	export(name) {
		return `${name} ${this.operator} ${this.value}`;
	}
}
