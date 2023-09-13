/* [Exports] */
export class ConditionSet {
	static TYPE = {
		USED_WEAPON: "Wands Shields",
		UNUSED_WEAPON: 'Bows Staves "Two Hand Swords" "Two Hand Axes" "Two Hand Maces" Warstaves Claws Daggers "One Hand Swords" "Thrusting One Hand Swords" "One Hand Axes" "One Hand Maces" Sceptres "Rune Daggers" Quivers',
		ARMOUR: 'Amulets Rings Belts Gloves Boots "Body Armours" Helmets',
		OTHER: 'Currency Maps "Map Fragments" Jewel "Divination Card" "Misc Map Items" Leaguestones Piece "Abyss Jewel" Microtransactions Trinkets "Life Flasks" "Mana Flasks" "Hybrid Flasks" "Utility Flasks" "Stackable Currency" "Quest Items" "Critical Utility Flasks" "Fishing Rods" "Hideout Doodads" "Labyrinth Item" "Labyrinth Trinket" "Labyrinth Map Item" "Pantheon Soul" "Incursion Item" "Delve Socketable Currency" Incubator Shard "Shard Heart" "Delve Stackable Socketable Currency" "Metamorph Sample" Contract "Heist Gear" "Heist Tool" "Heist Cloak" "Heist Brooch" Blueprint "Heist Target" "Expedition Logbook"'
	};
	static RARITY = {
		NORMAL: "Normal",
		MAGIC: "Magic",
		RARE: "Rare",
		UNIQUE: "Unique"
	};

	type = null;
	rarity = null;

	isTripleLink = null;
	isWhite = null;
	isRgb = null;
	isTripleBlueLink = null;

	isMirrored = null;

	#clone() {
		let conditionSet = new ConditionSet();

		conditionSet.type = this.type;
		conditionSet.rarity = this.rarity;

		conditionSet.isTripleLink = this.isTripleLink;
		conditionSet.isWhite = this.isWhite;
		conditionSet.isRgb = this.isRgb;
		conditionSet.isTripleBlueLink = this.isTripleBlueLink;

		conditionSet.isMirrored = this.isMirrored;

		return conditionSet;
	}

	#duplicateEnum(property, enumObject) {
		let values = Object.values(enumObject);
		return values.map(
			(value) => {
				let clone = this.#clone();
				clone[property] = value;
				return clone;
			}
		);
	}

	#duplicateBoolean(property) {
		return [true, false].map(
			(boolean) => {
				let clone = this.#clone();
				clone[property] = boolean;
				return clone;
			}
		);
	}

	duplicateType() {
		return this.#duplicateEnum(
			"type",
			ConditionSet.TYPE
		);
	}

	duplicateRarity() {
		return this.#duplicateEnum(
			"rarity",
			ConditionSet.RARITY
		);
	}

	duplicateTripleLink() {
		return this.#duplicateBoolean("isTripleLink");
	}

	duplicateWhite() {
		return this.#duplicateBoolean("isWhite");
	}

	duplicateRgb() {
		return this.#duplicateBoolean("isRgb");
	}

	duplicateTripleBlueLink() {
		return this.#duplicateBoolean("isTripleBlueLink");
	}

	duplicateMirrored() {
		return this.#duplicateBoolean("isMirrored");
	}

	export() {
		let lines = [];

		if (this.type !== null) lines.push(`Class ${this.type}`);
		if (this.rarity !== null) lines.push(`Rarity ${this.rarity}`);

		if (this.isTripleLink !== null) {
			let operator = this.isTripleLink ? ">=" : "<";
			lines.push(`LinkedSockets ${operator} 3`);
		}
		if (this.isWhite !== null) {
			let operator = this.isWhite ? ">=" : "<";
			lines.push(`Sockets ${operator} 1W`);
		}
		if (this.isRgb !== null) {
			let operator = this.isRgb ? ">=" : "<";
			lines.push(`SocketGroup ${operator} 3RGB`);
		}
		if (this.isTripleBlueLink !== null) {
			let operator = this.isTripleBlueLink ? ">=" : "<";
			lines.push(`SocketGroup ${operator} 3BBB`);
		}

		if (this.isMirrored !== null) {
			let booleanString = this.isMirrored ? "True" : "False";
			lines.push(`Mirrored ${booleanString}`);
		}

		return lines;
	}
}
