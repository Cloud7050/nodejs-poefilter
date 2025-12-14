export class StringList {
	values;

	constructor(...values) {
		this.values = values.reduce((accumulator, value) => {
			if (value instanceof StringList) accumulator.push(...value.values);
			else accumulator.push(value);
			return accumulator;
		}, []);
	}

	subtract(other) {
		return new StringList(
			...this.values.filter((value) => !other.values.includes(value))
		);
	}

	export() {
		let wrappedValues = this.values.map(value => {
			if (value.includes(" ")) return `"${value}"`;
			else return value;
		});
		return wrappedValues.join(" ");
	}
}
