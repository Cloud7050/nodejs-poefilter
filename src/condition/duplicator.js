/* [Exports] */
export class Duplicator {
	static TYPE = {
		BOOLEAN: "BOOLEAN",
		ENUM: "ENUM"
	};

	property;
	values;

	constructor(_property, type, enumObject = null) {
		this.property = _property;

		switch (type) {
			case Duplicator.TYPE.BOOLEAN:
				this.values = [true, false];
				break;
			case Duplicator.TYPE.ENUM:
				this.values = Object.values(enumObject);
				break;
		}
	}

	/**
	 * For each value, clone the specified ConditionSet and set the property to
	 * the value.
	 *
	 * @returns an array of ConditonSets
	 */
	generate(c) {
		return this.values.map(
			(value) => {
				let clone = c.clone();
				clone[this.property] = value;
				return clone;
			}
		);
	}
}
