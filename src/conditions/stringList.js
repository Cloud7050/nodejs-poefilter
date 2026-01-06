export class StringList {
	values;

	static #process(...ins) {
		let outs = [];
		for (let value of ins) {
			if (value instanceof StringList) {
				outs.push(...StringList.#process(...value.values));
			} else outs.push(value);
		}
		return outs;
	}

	constructor(...values) {
		this.values = StringList.#process(...values);
	}

	subtract(...others) {
		// Combine others
		let other = new StringList(...others);

		return new StringList(
			...this.values.filter((value) => !other.values.includes(value))
		);
	}

	containsLoose(other) {
		for (let otherValue of other.values) {
			for (let value of this.values) {
				if (value.includes(otherValue)) return true;
			}
		}

		return false;
	}

	export() {
		let wrappedValues = this.values.map(value => {
			if (value.includes(" ")) return `"${value}"`;
			else return value;
		});
		return wrappedValues.join(" ");
	}
}
