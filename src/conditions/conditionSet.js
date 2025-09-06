import { Comparison } from "./comparison.js";
import { StringList } from "./stringList.js";

export class ConditionSet {
	// https://poe2db.tw/us/Items
	static CATEGORY = {
		// Rarity
		WEAPON_CLASS: new StringList("Fishing Rods", "Sceptres", "Wands"), // Witch weapons
		WEAPON_OTHER: new StringList("Bows", "Bucklers", "Claws", "Crossbows", "Daggers", "Flails",
			"Foci", "One Hand Axes", "One Hand Maces", "One Hand Swords", "Quarterstaves",
			"Quivers", "Shields", "Spears", "Staves", "Traps", "Two Hand Axes", "Two Hand Maces",
			"Two Hand Swords"),
		ARMOUR: new StringList("Body Armours", "Boots", "Gloves", "Helmets"),
		JEWELLERY: new StringList("Amulets", "Belts", "Rings"),
		CHARGED: new StringList("Charms", "Life Flasks", "Mana Flasks"),
		JEWEL: new StringList("Jewels"),
		RELIC: new StringList("Relics"),

		// No rarity
		CURRENCY: new StringList("Stackable Currency"),
		GEM_UNCUT: new StringList("Uncut Skill Gems", "Uncut Spirit Gems", "Uncut Support Gems"),
		GEM: new StringList("Skill Gems", "Support Gems"),
		SOCKETABLE: new StringList("Socketable"),
		COIN: new StringList("Trial Coins"),
		// WAYSTONE: new StringList("Map Fragments" "Misc Map Items" Waystones',
		QUEST: new StringList("Quest Items"),
		// OTHER: new StringList("Divination Cards" "Expedition Logbooks" "Hideout Doodads" Hideouts "Inscribed Ultimatums" Omens "Pinnacle Keys" Strongboxes Tablets'
	};
	static RARITY = {
		NORMAL: "Normal",
		MAGIC: "Magic",
		RARE: "Rare",
		UNIQUE: "Unique"
	};

	isContinue = false;

	// Multi-word names must be wrapped in double quotes
	names = null; // Comparison
	category = null; // Comparison
	rarity = null; // Comparison
	count = null; // Comparison

	quality = null; // Comparison
	sockets = null; // Comparison
	energyShield = null; // Comparison
	mods = null; // Comparison, with quantity

	getBlockEnd() {
		return this.isContinue ? "Continue" : null;
	}

	export() {
		let spans = [];

		if (this.names !== null) spans.push(this.names.export("BaseType"));
		if (this.category !== null) spans.push(this.category.export("Class"));
		if (this.rarity !== null) spans.push(this.rarity.export("Rarity"));
		if (this.count !== null) spans.push(this.count.export("StackSize"));

		if (this.quality !== null) spans.push(this.quality.export("Quality"));
		if (this.sockets !== null) spans.push(this.sockets.export("Sockets"));
		if (this.energyShield !== null) spans.push(this.energyShield.export("BaseEnergyShield"));
		if (this.mods !== null) spans.push(this.mods.export("HasExplicitMod"));

		if (spans.length === 0) {
			// Force empty line to represent where the set goes
			return ["#"];
		}
		return spans;
	}

	continue() {
		this.isContinue = true;
		return this;
	}

	hasQuality() {
		this.quality = new Comparison(0, Comparison.OPERATOR.GT);
		return this;
	}
	noQuality() {
		this.quality = new Comparison(0);
		return this;
	}
	hasSocket() {
		this.sockets = new Comparison(0, Comparison.OPERATOR.GT);
		return this;
	}
	socketless() {
		this.sockets = new Comparison(0);
		return this;
	}
	noQualitySocketless() {
		return this.noQuality().socketless();
	}
}
