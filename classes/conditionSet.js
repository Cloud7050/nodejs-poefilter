/* [Main] */
class Duplicator {
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



/* [Exports] */
export class ConditionSet {
	static TYPE = {
		OTHER: 'Maps "Map Fragments" "Misc Map Items" Leaguestones Pieces Microtransactions Trinkets "Life Flasks" "Mana Flasks" "Hybrid Flasks" "Utility Flasks" "Fishing Rods" "Hideout Doodads" "Labyrinth Items" "Labyrinth Trinkets" "Labyrinth Map Items" "Pantheon Souls" "Incursion Items" Incubators Shards "Shard Hearts" "Metamorph Samples" Contracts "Heist Gear" "Heist Tools" "Heist Cloaks" "Heist Brooches" Blueprints "Heist Targets" "Expedition Logbooks"',
		QUEST: '"Quest Items"',
		CURRENCY: "Currency",
		VALUABLE: '"Divination Cards"',
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

	static DUPLICATORS = [
		new Duplicator("type", Duplicator.TYPE.ENUM, ConditionSet.TYPE),
		new Duplicator("rarity", Duplicator.TYPE.ENUM, ConditionSet.RARITY),

		new Duplicator("isThreeLink", Duplicator.TYPE.BOOLEAN),
		new Duplicator("isWhite", Duplicator.TYPE.BOOLEAN),
		new Duplicator("isRgb", Duplicator.TYPE.BOOLEAN),
		new Duplicator("isFour", Duplicator.TYPE.BOOLEAN),
		new Duplicator("isFourLink", Duplicator.TYPE.BOOLEAN),

		new Duplicator("isQuality", Duplicator.TYPE.BOOLEAN),
		new Duplicator("isMirrored", Duplicator.TYPE.BOOLEAN),
		new Duplicator("isCorrupted", Duplicator.TYPE.BOOLEAN)
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

	clone() {
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
