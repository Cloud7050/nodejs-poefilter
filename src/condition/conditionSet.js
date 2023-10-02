import { Duplicator } from "./duplicator.js";



/* [Exports] */
export class ConditionSet {
	static TYPE_OTHER = {
		OTHER: '"Atlas Upgrade Items" Blueprints Breachstones Contracts "Expedition Logbooks" "Fishing Rods" "Heist Brooches" "Heist Cloaks" "Heist Gear" "Heist Targets" "Heist Tools" "Hideout Doodads" "Hybrid Flasks" Incubators "Incursion Items" Leaguestones "Life Flasks" "Mana Flasks" Memories "Metamorph Samples" Microtransactions "Pantheon Souls" Pieces Relics "Sanctum Research" Sentinels "Utility Flasks" "Vault Keys"',
		QUEST: '"Quest Items"',
		LABYRINTH: '"Labyrinth Items" "Labyrinth Trinkets"',
		GEM: 'Jewels "Skill Gems" "Support Gems"',
		CARD: '"Divination Cards"',
		MAP: '"Map Fragments" Maps "Misc Map Items"',
		CURRENCY: '"Delve Stackable Socketable Currency" "Stackable Currency"'
	};
	static TYPE_EQUIPMENT = {
		WEAPON_UNUSED: 'Bows Claws Daggers "One Hand Axes" "One Hand Maces" "One Hand Swords" Quivers Sceptres Staves "Two Hand Axes" "Two Hand Maces" "Two Hand Swords" Warstaves',
		// 4 sockets on gloves/boots/helmets, 6 on body armour
		GEAR: 'Amulets Belts "Body Armours" Boots Gloves Helmets Rings',
		// 3 sockets
		WEAPON_WITCH: "Shields Wands"
	};
	static RARITY = {
		NORMAL: "Normal",
		MAGIC: "Magic",
		RARE: "Rare",
		UNIQUE: "Unique"
	};

	static DUPLICATORS_OTHER = [
		new Duplicator("type", Duplicator.TYPE.ENUM, ConditionSet.TYPE_OTHER),
		new Duplicator("rarity", Duplicator.TYPE.ENUM, ConditionSet.RARITY),

		new Duplicator("isExpensive", Duplicator.TYPE.BOOLEAN)
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
		new Duplicator("isFractured", Duplicator.TYPE.BOOLEAN),
		new Duplicator("isMirrored", Duplicator.TYPE.BOOLEAN),
		new Duplicator("isCorrupted", Duplicator.TYPE.BOOLEAN)
	];

	type = null;
	rarity = null;

	isExpensive = null;
	isLootyBase = null;
	isLootyModifier = null;

	isThreeLink = null;
	isWhite = null;
	isFour = null;
	isFive = null;
	isRgb = null;
	isSix = null;

	isQuality = null;
	isFractured = null;
	isMirrored = null;
	isCorrupted = null;

	clone() {
		let conditionSet = new ConditionSet();

		conditionSet.type = this.type;
		conditionSet.rarity = this.rarity;

		conditionSet.isExpensive = this.isExpensive;
		conditionSet.isLootyBase = this.isLootyBase;
		conditionSet.isLootyModifier = this.isLootyModifier;

		conditionSet.isThreeLink = this.isThreeLink;
		conditionSet.isWhite = this.isWhite;
		conditionSet.isFour = this.isFour;
		conditionSet.isFive = this.isFive;
		conditionSet.isRgb = this.isRgb;
		conditionSet.isSix = this.isSix;

		conditionSet.isQuality = this.isQuality;
		conditionSet.isFractured = this.isFractured;
		conditionSet.isMirrored = this.isMirrored;
		conditionSet.isCorrupted = this.isCorrupted;

		return conditionSet;
	}

	equals(other) {
		return (
			this.type === other.type
			&& this.rarity === other.rarity

			&& this.isExpensive === other.isExpensive
			&& this.isLootyBase === other.isLootyBase
			&& this.isLootyModifier === other.isLootyModifier

			&& this.isThreeLink === other.isThreeLink
			&& this.isWhite === other.isWhite
			&& this.isFour === other.isFour
			&& this.isFive === other.isFive
			&& this.isRgb === other.isRgb
			&& this.isSix === other.isSix

			&& this.isQuality === other.isQuality
			&& this.isFractured === other.isFractured
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

		if (this.isExpensive === true) {
			lines.push('BaseType "Divine Orb"');
		}
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
			let operator = this.isQuality ? ">=" : "<";
			lines.push(`Quality ${operator} 20`);
		}
		if (this.isFractured !== null) {
			let booleanString = this.isFractured ? "True" : "False";
			lines.push(`FracturedItem ${booleanString}`);
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
