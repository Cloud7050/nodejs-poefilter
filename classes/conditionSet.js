/* [Exports] */
export class ConditionSet {
	static RARITY = {
		NORMAL: "Normal",
		MAGIC: "Magic",
		RARE: "Rare",
		UNIQUE: "Unique"
	};

	rarity = null;
	isTripleLink = null;
	isRgb = null;
	isTripleBlueLink = null;

	#clone() {
		let conditionSet = new ConditionSet();

		conditionSet.rarity = this.rarity;

		return conditionSet;
	}

	#duplicateBoolean(property) {
		return [true, false].map(
			(boolean) => {
				let clone = this.#clone();
				clone[property] = boolean;
				return clone;
			}
		)
	}

	duplicateRarity() {
		return Object.values(ConditionSet.RARITY)
			.map(
				(rarity) => {
					let conditionSet = this.#clone();
					conditionSet.rarity = rarity;
					return conditionSet;
				}
			);
	}

	duplicateTripleLink() {
		return this.#duplicateBoolean("isTripleLink");
	}

	duplicateRgb() {
		return this.#duplicateBoolean("isRgb");
	}

	duplicateTripleBlueLink() {
		return this.#duplicateBoolean("isTripleBlueLink");
	}

	export() {
		let lines = [];

		if (this.rarity !== null) lines.push(`Rarity ${this.rarity}`);

		if (this.isTripleLink !== null) {
			let operator = this.isTripleLink ? ">=" : "<";
			lines.push(`SocketGroup ${operator} 3`);
		}

		if (this.isRgb !== null) {
			let operator = this.isRgb ? ">=" : "<";
			lines.push(`SocketGroup ${operator} 3RGB`);
		}

		if (this.isTripleBlueLink !== null) {
			let operator = this.isTripleBlueLink ? ">=" : "<";
			lines.push(`SocketGroup ${operator} 3BBB`);
		}

		return lines;
	}
}
