import { Duplicator } from "./duplicator.js";



/* [Exports] */
export class ConditionSet {
	static TYPE_OTHER = {
		OTHER: 'Maps "Map Fragments" "Misc Map Items" Leaguestones Pieces Microtransactions "Life Flasks" "Mana Flasks" "Hybrid Flasks" "Utility Flasks" "Fishing Rods" "Hideout Doodads" "Pantheon Souls" "Incursion Items" Incubators Shards "Shard Hearts" "Metamorph Samples" Contracts "Heist Gear" "Heist Tools" "Heist Cloaks" "Heist Brooches" Blueprints "Heist Targets" "Expedition Logbooks"',
		QUEST: '"Quest Items"',
		CURRENCY: "Currency",
		GEM: "Gems Jewels",
		CARD: '"Divination Cards"',
		LABYRINTH: '"Labyrinth Items" "Labyrinth Trinkets" "Labyrinth Map Items"'
	};
	static TYPE_EQUIPMENT = {
		WEAPON_UNUSED: 'Bows Staves "Two Hand Swords" "Two Hand Axes" "Two Hand Maces" Warstaves Claws Daggers "One Hand Swords" "One Hand Axes" "One Hand Maces" Sceptres Quivers',
		// 4 sockets on gloves/boots/helmets, 6 on body armour
		GEAR: 'Amulets Rings Belts Gloves Boots "Body Armours" Helmets',
		// 3 sockets
		WEAPON_WITCH: "Wands Shields"
	};
	static RARITY = {
		NORMAL: "Normal",
		MAGIC: "Magic",
		RARE: "Rare",
		UNIQUE: "Unique"
	};

	static DUPLICATORS_OTHER = [
		new Duplicator("type", Duplicator.TYPE.ENUM, ConditionSet.TYPE_OTHER)
	];
	static DUPLICATORS_EQUIPMENT = [
		new Duplicator("type", Duplicator.TYPE.ENUM, ConditionSet.TYPE_EQUIPMENT),
		new Duplicator("rarity", Duplicator.TYPE.ENUM, ConditionSet.RARITY),

		new Duplicator("isLootyBase", Duplicator.TYPE.BOOLEAN),
		new Duplicator("isLootyModifier", Duplicator.TYPE.BOOLEAN),

		new Duplicator("isThreeLink", Duplicator.TYPE.BOOLEAN),
		new Duplicator("isWhite", Duplicator.TYPE.BOOLEAN),
		new Duplicator("isFour", Duplicator.TYPE.BOOLEAN),
		new Duplicator("isFive", Duplicator.TYPE.BOOLEAN),
		new Duplicator("isRgb", Duplicator.TYPE.BOOLEAN),
		new Duplicator("isSix", Duplicator.TYPE.BOOLEAN),

		new Duplicator("isQuality", Duplicator.TYPE.BOOLEAN),
		new Duplicator("isMirrored", Duplicator.TYPE.BOOLEAN),
		new Duplicator("isCorrupted", Duplicator.TYPE.BOOLEAN)
	];

	type = null;
	rarity = null;

	isLootyBase = null;
	isLootyModifier = null;

	isThreeLink = null;
	isWhite = null;
	isFour = null;
	isFive = null;
	isRgb = null;
	isSix = null;

	isQuality = null;
	isMirrored = null;
	isCorrupted = null;

	clone() {
		let conditionSet = new ConditionSet();

		conditionSet.type = this.type;
		conditionSet.rarity = this.rarity;

		conditionSet.isLootyBase = this.isLootyBase;
		conditionSet.isLootyModifier = this.isLootyModifier;

		conditionSet.isThreeLink = this.isThreeLink;
		conditionSet.isWhite = this.isWhite;
		conditionSet.isFour = this.isFour;
		conditionSet.isFive = this.isFive;
		conditionSet.isRgb = this.isRgb;
		conditionSet.isSix = this.isSix;

		conditionSet.isQuality = this.isQuality;
		conditionSet.isMirrored = this.isMirrored;
		conditionSet.isCorrupted = this.isCorrupted;

		return conditionSet;
	}

	equals(other) {
		return (
			this.type === other.type
			&& this.rarity === other.rarity

			&& this.isLootyBase === other.isLootyBase
			&& this.isLootyModifier === other.isLootyModifier

			&& this.isThreeLink === other.isThreeLink
			&& this.isWhite === other.isWhite
			&& this.isFour === other.isFour
			&& this.isFive === other.isFive
			&& this.isRgb === other.isRgb
			&& this.isSix === other.isSix

			&& this.isQuality === other.isQuality
			&& this.isMirrored === other.isMirrored
			&& this.isCorrupted === other.isCorrupted
		);
	}

	isLooty() {
		return this.isLootyBase || this.isLootyModifier;
	}

	// eslint-disable-next-line complexity
	export() {
		let lines = [];

		if (this.type !== null) lines.push(`Class ${this.type}`);
		if (this.rarity !== null) lines.push(`Rarity ${this.rarity}`);

		if (this.isLootyBase === true) {
			lines.push('BaseType "Gold Amulet" "Gold Ring"');
		}
		if (this.isLootyModifier === true) lines.push('HasExplicitMod Magpie\'s "of Plunder" "of Raiding"');

		if (this.isThreeLink !== null) {
			let operator = this.isThreeLink ? ">=" : "<";
			lines.push(`LinkedSockets ${operator} 3`);
		}
		if (this.isWhite !== null) {
			let operator = this.isWhite ? ">=" : "<";
			lines.push(`Sockets ${operator} 1W`);
		}
		if (this.isFour !== null) {
			let operator = this.isFour ? ">=" : "<";
			lines.push(`Sockets ${operator} 4`);
		}
		if (this.isFive !== null) {
			let operator = this.isFive ? ">=" : "<";
			lines.push(`Sockets ${operator} 5`);
		}
		if (this.isRgb !== null) {
			let operator = this.isRgb ? ">=" : "<";
			lines.push(`SocketGroup ${operator} 3RGB`);
		}
		if (this.isSix !== null) {
			let operator = this.isSix ? ">=" : "<";
			lines.push(`Sockets ${operator} 6`);
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
