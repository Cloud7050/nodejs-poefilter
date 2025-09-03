export class StringList {
	values;

	constructor(...values) {
		this.values = values.reduce((accumulator, value) => {
			if (value instanceof StringList) accumulator.push(...value.values);
			else accumulator.push(value);
			return accumulator;
		}, []);
	}

	export() {
		let wrappedValues = this.values.map(value => {
			if (value.includes(" ")) return `"${value}"`;
			else return value;
		});
		return wrappedValues.join(" ");
	}
}
