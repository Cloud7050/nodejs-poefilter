import { NameManager } from "./nameManager.js";
import { OPERATOR } from "./operator.js";
import { StringList } from "./stringList.js";

export class Comparison {
	operator;
	quantity; // number (optional). Goes between the operator and value, eg the 2 in ">=2 Pirate's"
	value; // StringList or string/number

	constructor(value, operator = OPERATOR.EXACT, quantity = null) {
		if (!Object.values(OPERATOR).includes(operator)) {
			console.error("ERR Comparison constructor received invalid operator:");
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

	exportValue() {
		let stringList = this.value instanceof StringList ? this.value : new StringList(this.value.toString())
		return stringList.export();
	}

	export(name) {
		let value = this.exportValue();
		let quantity = this.quantity ?? "";
		return `${name} ${this.operator}${quantity} ${value}`;
	}
}
