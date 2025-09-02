import { Comparison } from "./comparison.js";

export class ConditionSet {
	// https://poe2db.tw/us/Items. Matches case-sensitive substrings
	static CATEGORY = {
		CURRENCY: '"Stackable Currency"',
		GEMS: '"Skill Gems" "Spirit Gems" "Support Gems"',
		RUNES: 'Socketable',
		// JEWELS: 'Jewels',
		// WAYSTONES: '"Map Fragments" "Misc Map Items" Waystones',
		// OTHER: '"Divination Cards" "Expedition Logbooks" "Hideout Doodads" Hideouts "Inscribed Ultimatums" Omens "Pinnacle Keys" "Quest Items" Relics Strongboxes Tablets "Trial Coins"',

		// Witch weapons
		WEAPON_USED: '"Fishing Rods" Sceptres Wands',
		WEAPON_UNUSED: 'Bows Bucklers Claws Crossbows Daggers Flails Foci "One Hand Axes" "One Hand Maces" "One Hand Swords" Quarterstaves Quivers Shields Spears Staves Traps "Two Hand Axes" "Two Hand Maces" "Two Hand Swords"',
		ARMOUR: '"Body Armours" Boots Gloves Helmets',
		JEWELLERY: "Amulets Belts Rings",
		CHARGED: 'Charms "Life Flasks" "Mana Flasks"'
	};
	static RARITY = {
		NORMAL: "Normal",
		MAGIC: "Magic",
		RARE: "Rare",
		UNIQUE: "Unique"
	};

	isContinue = false;

	// Multi-word names must be wrapped in double quotes
	names = null;
	category = null;
	rarity = null; // Comparison

	quality = null; // Comparison
	sockets = null; // Comparison
	energyShield = null; // Comparison

	getBlockEnd() {
		return this.isContinue ? "Continue" : null;
	}

	export() {
		let spans = [];

		if (this.names !== null) spans.push(`BaseType ${this.names}`);
		if (this.category !== null) spans.push(`Class ${this.category}`);
		if (this.rarity !== null) spans.push(this.rarity.export("Rarity"));

		if (this.quality !== null) spans.push(this.quality.export("Quality"));
		if (this.sockets !== null) spans.push(this.sockets.export("Sockets"));
		if (this.energyShield !== null) spans.push(this.energyShield.export("BaseEnergyShield"));

		// Force a blank line to represent where the set goes
		if (spans.length === 0) return [""];
		return spans;
	}

	continue() {
		this.isContinue = true;
		return this;
	}

	noQuality() {
		this.quality = new Comparison(Comparison.OPERATOR.EQUAL, 0);
		return this;
	}
	socketless() {
		this.sockets = new Comparison(Comparison.OPERATOR.EQUAL, 0);
		return this;
	}
	noQualitySocketless() {
		return this.noQuality().socketless();
	}
}
