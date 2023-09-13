/* [Exports] */
export class ConditionSet {
	static EQUIPMENT = {
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

	equipment = null;
	rarity = null;

	isTripleLink = null;
	isRgb = null;
	isTripleBlueLink = null;

	#clone() {
		let conditionSet = new ConditionSet();

		conditionSet.equipment = this.equipment;
		conditionSet.rarity = this.rarity;

		conditionSet.isTripleLink = this.isTripleLink;
		conditionSet.isRgb = this.isRgb;
		conditionSet.isTripleBlueLink = this.isTripleBlueLink;

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

	duplicateEquipment() {
		return this.#duplicateEnum(
			"equipment",
			ConditionSet.EQUIPMENT
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

	duplicateRgb() {
		return this.#duplicateBoolean("isRgb");
	}

	duplicateTripleBlueLink() {
		return this.#duplicateBoolean("isTripleBlueLink");
	}

	export() {
		let lines = [];

		if (this.equipment !== null) lines.push(`Class ${this.equipment}`);
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
