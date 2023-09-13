/* [Exports] */
export class ConditionSet {
	static RARITY = {
		NORMAL: "Normal",
		MAGIC: "Magic",
		RARE: "Rare",
		UNIQUE: "Unique"
	};

	rarity = null;

	clone() {
		let conditionSet = new ConditionSet();

		conditionSet.rarity = this.rarity;

		return conditionSet;
	}

	duplicateRarity() {
		return Object.values(ConditionSet.RARITY)
			.map(
				(rarity) => {
					let conditionSet = this.clone();
					conditionSet.rarity = rarity;
					return conditionSet;
				}
			);
	}

	export() {
		let strings = [];

		if (this.rarity !== null) strings.push(`Rarity ${this.rarity}`);

		return strings;
	}
}
