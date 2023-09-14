/* [Exports] */
export class ConditionSet {
	static TYPE = {
		OTHER: 'Maps "Map Fragments" "Divination Card" "Misc Map Items" Leaguestones Piece Microtransactions Trinkets "Life Flasks" "Mana Flasks" "Hybrid Flasks" "Utility Flasks" "Quest Items" "Critical Utility Flasks" "Fishing Rods" "Hideout Doodads" "Labyrinth Item" "Labyrinth Trinket" "Labyrinth Map Item" "Pantheon Soul" "Incursion Item" Incubator Shard "Shard Heart" "Metamorph Sample" Contract "Heist Gear" "Heist Tool" "Heist Cloak" "Heist Brooch" Blueprint "Heist Target" "Expedition Logbook"',
		CURRENCY: 'Currency "Stackable Currency" "Delve Socketable Currency" "Delve Stackable Socketable Currency"',
		GEM: 'Gems Jewels "Abyss Jewels"',
		UNUSED_WEAPON: 'Bows Staves "Two Hand Swords" "Two Hand Axes" "Two Hand Maces" Warstaves Claws Daggers "One Hand Swords" "Thrusting One Hand Swords" "One Hand Axes" "One Hand Maces" Sceptres "Rune Daggers" Quivers',
		ARMOUR: 'Amulets Rings Belts Gloves Boots "Body Armours" Helmets',
		USED_WEAPON: "Wands Shields"
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
	isCorrupted = null;

	#clone() {
		let conditionSet = new ConditionSet();

		conditionSet.type = this.type;
		conditionSet.rarity = this.rarity;

		conditionSet.isTripleLink = this.isTripleLink;
		conditionSet.isWhite = this.isWhite;
		conditionSet.isRgb = this.isRgb;
		conditionSet.isTripleBlueLink = this.isTripleBlueLink;

		conditionSet.isMirrored = this.isMirrored;
		conditionSet.isCorrupted = this.isCorrupted;

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

	duplicateCorrupted() {
		return this.#duplicateBoolean("isCorrupted");
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
		if (this.isCorrupted !== null) {
			let booleanString = this.isCorrupted ? "True" : "False";
			lines.push(`Corrupted ${booleanString}`);
		}

		return lines;
	}
}
