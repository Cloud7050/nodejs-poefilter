import { NameManager } from "./nameManager.js";
import { StringList } from "./stringList.js";

export class Comparison {
	static OPERATOR = {
		EQUAL: "=",
		NE: "!", // Or "!="
		LTE: "<=",
		GTE: ">=",
		LT: "<",
		GT: ">",
		EXACT: "=="
	};

	operator;
	quantity; // number (optional). Goes between the operator and value, eg the 2 in ">=2 Pirate's"
	value; // StringList or string/number

	constructor(value, operator = Comparison.OPERATOR.EXACT, quantity = null) {
		if (!Object.values(Comparison.OPERATOR).includes(operator)) {
			console.error("ERR Comparison received invalid operator:");
			console.error(operator);
			throw new Error();
		}

		this.operator = operator;
		this.quantity = quantity;

		if (Array.isArray(value)) {
			this.value = new StringList(...value);
		} else if (value instanceof NameManager) {
			this.value = value.export();
		} else {
			this.value = value;
		}
	}

	export(name) {
		let value = (this.value instanceof StringList ? this.value : new StringList(this.value.toString())).export();
		let quantity = this.quantity ?? "";
		return `${name} ${this.operator}${quantity} ${value}`;
	}
}
export const OPERATOR = Comparison.OPERATOR;
