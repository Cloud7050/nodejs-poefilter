import { Comparison } from "./comparison.js";
import { StringList } from "./stringList.js";

export class ConditionSet {
	// https://poe2db.tw/us/Items
	static CATEGORY = {
		// Rarity
		WEAPON_CLASS: new StringList("Foci", "Sceptres"), // Witch weapons
		WEAPON_OTHER: new StringList("Bows", "Bucklers", "Claws", "Crossbows", "Daggers", "Flails",
			"One Hand Axes", "One Hand Maces", "One Hand Swords", "Quarterstaves", "Quivers",
			"Shields", "Spears", "Staves", "Two Hand Axes", "Two Hand Maces", "Two Hand Swords",
			"Wands"),
		ARMOUR_TOP: new StringList("Body Armours", "Gloves", "Helmets"),
		BOOTS: new StringList("Boots"),
		JEWELLERY: new StringList("Amulets", "Rings"),
		BELT: new StringList("Belts"),
		FLASK: new StringList("Life Flasks", "Mana Flasks"),
		CHARM: new StringList("Charms"),
		JEWEL: new StringList("Jewels"),
		WAYSTONE: new StringList("Waystones"),
		TABLET: new StringList("Tablet"),
		RELIC: new StringList("Relics"),

		// No rarity
		CURRENCY: new StringList("Stackable Currency"),
		OMEN: new StringList("Omen"),
		GEM_UNCUT: new StringList("Uncut Skill Gems", "Uncut Spirit Gems"),
		SUPPORT_UNCUT: new StringList("Uncut Support Gems"),
		GEM: new StringList("Skill Gems", "Support Gems"),
		SOCKETABLE: new StringList("Socketable"),
		TICKET: new StringList("Trial Coins", "Inscribed Ultimatum", "Expedition Logbooks"),
		VAULT: new StringList("Vault Keys"),
		QUEST: new StringList("Quest Items"),
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
	wisdomTier = null; // Comparison
	count = null; // Comparison

	quality = null; // Comparison
	sockets = null; // Comparison
	energyShield = null; // Comparison
	armour = null; // Comparison
	evasion = null; // Comparison
	mods = null; // Comparison, with quantity

	getBlockEnd() {
		return this.isContinue ? "Continue" : null;
	}

	export() {
		let spans = [];

		if (this.names !== null) spans.push(this.names.export("BaseType"));
		if (this.category !== null) spans.push(this.category.export("Class"));
		if (this.rarity !== null) spans.push(this.rarity.export("Rarity"));
		if (this.wisdomTier !== null) spans.push(this.wisdomTier.export("UnidentifiedItemTier"));
		if (this.count !== null) spans.push(this.count.export("StackSize"));

		if (this.quality !== null) spans.push(this.quality.export("Quality"));
		if (this.sockets !== null) spans.push(this.sockets.export("Sockets"));
		if (this.energyShield !== null) spans.push(this.energyShield.export("BaseEnergyShield"));
		if (this.armour !== null) spans.push(this.armour.export("BaseArmour"));
		if (this.evasion !== null) spans.push(this.evasion.export("BaseEvasion"));
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

	hasQuality(minimum = 0) {
		this.quality = new Comparison(minimum, Comparison.OPERATOR.GT);
		return this;
	}
	hasSockets(minimum = 2) {
		this.sockets = new Comparison(minimum, Comparison.OPERATOR.GTE);
		return this;
	}
	onlyEnergyShield() {
		this.energyShield = new Comparison(0, Comparison.OPERATOR.GT);
		this.armour = new Comparison(0);
		this.evasion = new Comparison(0);
		return this;
	}
	hasArmour() {
		this.armour = new Comparison(0, Comparison.OPERATOR.GT);
		return this;
	}
	hasEvasion() {
		this.evasion = new Comparison(0, Comparison.OPERATOR.GT);
		return this;
	}

	goodMain() {
		// Spirit/rarity main stats - https://poe2db.tw/us/Items
		this.names = new Comparison(new StringList(
			// +x to spirit
			// "Corvus Mantle", "Conjurer Mantle", // Body armours (for other)
			"Solar Amulet", // Amulets

			// x% increased rarity of items found
			"Gold Amulet", // Amulets
			"Gold Ring", // Rings
			"Golden Obi", // Belts
			"Golden Charm" // Charms
		));
		return this;
	}
	goodMod() {
		// Level/spirit/rarity mods - https://poe2db.tw/us/Modifiers
		// Less effort is put into adding/listing mods for other class weapons
		this.mods = new Comparison(new StringList(
			// +x to level of all spell skills
			"of the Mage", "of the Enchanter", // Suffixes for wands/staves/foci/amulets
			"of the Sorcerer", // Higher suffixes for wands/staves/amulets
			"of the Wizard", // Higher suffixes for wands/staves
			// +x to level of all fire spell skills
			"of Coals", "of Cinders", "of Flames", "of Immolation", "of Inferno", // Suffixes for wands/staves
			// +x to level of all cold spell skills
			"of Snow", "of Sleet", "of Ice", "of Rime", "of Frostbite", // Suffixes for wands/staves
			// +x to level of all lightning spell skills
			"of Sparks", "of Static", "of Electricity", "of Voltage", "of Thunder", // Suffixes for wands/staves
			// +x to level of all chaos spell skills
			"of Anarchy", "of Turmoil", "of Ruin", "of Havoc", "of Armageddon", // Suffixes for wands/staves
			// +x to level of all physical spell skills
			"of Agony", "of Suffering", "of Torment", "of Desolation", "of Grief", // Suffixes for wands/staves
			// +x to level of all minion skills
			"of the Taskmaster", "of the Despot", // Suffixes for sceptres/helmets/amulets
			"of the Overseer", // Higher suffixes for sceptres/amulets
			"of the Slavedriver", // Higher suffixes for sceptres
			// +x to level of all melee skills
			"of Combat", "of Dueling", // Suffixes for claws/daggers/swords/axes/maces/spears/flails/quarterstaves/gloves/amulets
			"of Conflict",  // Higher suffixes for claws/daggers/swords/axes/maces/flails/spears/quarterstaves
			"of Battle",  // Higher suffixes for claws/daggers/swords/axes/maces/flails/spears/quarterstaves/amulets
			"of War", // Higher suffixes for claws/daggers/swords/axes/maces/flails/spears/quarterstaves
			// +x to level of all projectile skills
			"of the Archer", "of the Fletcher", "of the Sharpshooter", // Suffixes for spears/bows/crossbows/amulets
			"of the Marksman", "of the Sniper", // Higher suffixes for spears/bows/crossbows

			// +x to spirit
			"Lady's", "Baronness'", "Viscountess'", "Marchioness'", "Countess'", // Prefixes for body armours/amulets
			"Duchess'", "Princess'", "Queen's", // Higher prefixes for body armours
			// x% increased spirit
			"Lord's", "Baron's", "Viscount's", "Marquess'", "Count's", "Duke's", "Prince's", "King's", // Prefixes for sceptres
			// x% increased spirit & +x to maximum mana
			"Advisor's", "Counselor's", "Emissary's", "Minister's", "Envoy's", "Diplomat's", "Chancellor's", // Prefixes for sceptres

			// x% increased rarity of items found
			"Magpie's", "Collector's", "Hoarder's", "Pirate's", "Dragon's", // Prefixes for helmets/amulets/rings
			"of Plunder", "of Raiding", "of Archaeology", "of Excavation", "of Windfall" // Suffixes for gloves/boots/helmets/amulets/rings
		),
		Comparison.OPERATOR.GTE,
		1);
		return this;
	}
}
