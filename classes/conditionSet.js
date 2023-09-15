/* [Main] */
class Duplicator {
	property;
	callback;

	constructor(_property, _callback) {
		this.property = _property;
		this.callback = _callback;
	}
}



/* [Exports] */
export class ConditionSet {
	static TYPE = {
		OTHER: 'Maps "Map Fragments" "Divination Cards" "Misc Map Items" Leaguestones Pieces Microtransactions Trinkets "Life Flasks" "Mana Flasks" "Hybrid Flasks" "Utility Flasks" "Quest Items" "Fishing Rods" "Hideout Doodads" "Labyrinth Items" "Labyrinth Trinkets" "Labyrinth Map Items" "Pantheon Souls" "Incursion Items" Incubators Shards "Shard Hearts" "Metamorph Samples" Contracts "Heist Gear" "Heist Tools" "Heist Cloaks" "Heist Brooches" Blueprints "Heist Targets" "Expedition Logbooks"',
		CURRENCY: "Currency",
		GEM: "Gems Jewels",
		UNUSED_WEAPON: 'Bows Staves "Two Hand Swords" "Two Hand Axes" "Two Hand Maces" Warstaves Claws Daggers "One Hand Swords" "One Hand Axes" "One Hand Maces" Sceptres Quivers',
		// 4 sockets on gloves/boots/helmets, 6 on body armour
		ARMOUR: 'Amulets Rings Belts Gloves Boots "Body Armours" Helmets',
		// 3 sockets
		USED_WEAPON: "Wands Shields"
	};
	static RARITY = {
		NORMAL: "Normal",
		MAGIC: "Magic",
		RARE: "Rare",
		UNIQUE: "Unique"
	};

	//TODO is there a better way
	static DUPLICATORS = [
		new Duplicator("type", (c) => c.duplicateEnum("type", ConditionSet.TYPE)),
		new Duplicator("rarity", (c) => c.duplicateEnum("rarity", ConditionSet.RARITY)),

		new Duplicator("isThreeLink", (c) => c.duplicateBoolean("isThreeLink")),
		new Duplicator("isWhite", (c) => c.duplicateBoolean("isWhite")),
		new Duplicator("isRgb", (c) => c.duplicateBoolean("isRgb")),
		new Duplicator("isFour", (c) => c.duplicateBoolean("isFour")),
		new Duplicator("isFourLink", (c) => c.duplicateBoolean("isFourLink")),

		new Duplicator("isQuality", (c) => c.duplicateBoolean("isQuality")),
		new Duplicator("isMirrored", (c) => c.duplicateBoolean("isMirrored")),
		new Duplicator("isCorrupted", (c) => c.duplicateBoolean("isCorrupted"))
	];

	type = null;
	rarity = null;

	isThreeLink = null;
	isWhite = null;
	isRgb = null;
	isFour = null;
	isFourLink = null;

	isQuality = null;
	isMirrored = null;
	isCorrupted = null;

	#clone() {
		let conditionSet = new ConditionSet();

		conditionSet.type = this.type;
		conditionSet.rarity = this.rarity;

		conditionSet.isThreeLink = this.isThreeLink;
		conditionSet.isWhite = this.isWhite;
		conditionSet.isRgb = this.isRgb;
		conditionSet.isFour = this.isFour;
		conditionSet.isFourLink = this.isFourLink;

		conditionSet.isQuality = this.isQuality;
		conditionSet.isMirrored = this.isMirrored;
		conditionSet.isCorrupted = this.isCorrupted;

		return conditionSet;
	}

	/**
	 * For each value, clone self and set the specified property to the value.
	 *
	 * @returns an array of ConditonSets
	 */
	#duplicateForValues(property, values) {
		return values.map(
			(value) => {
				let clone = this.#clone();
				clone[property] = value;
				return clone;
			}
		);
	}

	duplicateBoolean(property) {
		return this.#duplicateForValues(property, [true, false]);
	}

	duplicateEnum(property, enumObject) {
		return this.#duplicateForValues(property, Object.values(enumObject));
	}

	equals(other) {
		return (
			this.type === other.type
			&& this.rarity === other.rarity

			&& this.isThreeLink === other.isThreeLink
			&& this.isWhite === other.isWhite
			&& this.isRgb === other.isRgb
			&& this.isFour === other.isFour
			&& this.isFourLink === other.isFourLink

			&& this.isQuality === other.isQuality
			&& this.isMirrored === other.isMirrored
			&& this.isCorrupted === other.isCorrupted
		);
	}

	export() {
		let lines = [];

		if (this.type !== null) lines.push(`Class ${this.type}`);
		if (this.rarity !== null) lines.push(`Rarity ${this.rarity}`);

		if (this.isThreeLink !== null) {
			let operator = this.isThreeLink ? ">=" : "<";
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
		if (this.isFour !== null) {
			let operator = this.isFour ? ">=" : "<";
			lines.push(`Sockets ${operator} 4`);
		}
		if (this.isFourLink !== null) {
			let operator = this.isFourLink ? ">=" : "<";
			lines.push(`LinkedSockets ${operator} 4`);
		}

		if (this.isQuality !== null) {
			let operator = this.isQuality ? ">" : "<=";
			lines.push(`Quality ${operator} 0`);
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
