import { Comparison, OPERATOR } from "./comparison.js";

export class ConditionSet {
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
	ilvl = null // Comparison
	dropLevel = null // Comparison
	wisdomTier = null; // Comparison
	count = null; // Comparison
	height = null; // Comparison
	width = null; // Comparison

	quality = null; // Comparison
	sockets = null; // Comparison
	isCorrupted = null; // bool
	isEnchanted = null; // bool
	energyShield = null; // Comparison
	armour = null; // Comparison
	evasion = null; // Comparison
	mods = null; // Comparison, with quantity

	getBlockEnd() {
		return this.isContinue ? "Continue" : null;
	}

	export() {
		let spans = [];
		function handle(props, spanCallback) {
			if (props === null) return;

			if (!Array.isArray(props)) props = [props];
			for (let prop of props) spans.push(spanCallback(prop));
		}

		handle(this.names, (prop) => prop.export("BaseType"));
		handle(this.category, (prop) => prop.export("Class"));
		handle(this.rarity, (prop) => prop.export("Rarity"));
		handle(this.ilvl, (prop) => prop.export("ItemLevel"));
		handle(this.dropLevel, (prop) => prop.export("DropLevel"));
		handle(this.wisdomTier, (prop) => prop.export("UnidentifiedItemTier"));
		handle(this.count, (prop) => prop.export("StackSize"));
		handle(this.height, (prop) => prop.export("Height"));
		handle(this.width, (prop) => prop.export("Width"));

		handle(this.quality, (prop) => prop.export("Quality"));
		handle(this.sockets, (prop) => prop.export("Sockets"));
		handle(this.isCorrupted, (prop) => `Corrupted ${this.isCorrupted ? "True" : "False"}`);
		handle(this.isEnchanted, (prop) => `AnyEnchantment ${this.isEnchanted ? "True" : "False"}`);
		handle(this.energyShield, (prop) => prop.export("BaseEnergyShield"));
		handle(this.armour, (prop) => prop.export("BaseArmour"));
		handle(this.evasion, (prop) => prop.export("BaseEvasion"));
		handle(this.mods, (prop) => prop.export("HasExplicitMod"));

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

	categories(...stringLists) {
		this.category = new Comparison(stringLists);
		return this;
	}

	isLowTier(maximum = 4) {
		this.wisdomTier = new Comparison(maximum, OPERATOR.LTE);
		return this;
	}
	isMaxTier() {
		this.wisdomTier = new Comparison(5);
		return this;
	}

	hasQuality(minimum = 1) {
		this.quality = new Comparison(minimum, OPERATOR.GTE);
		return this;
	}

	hasSockets(minimum = 2) {
		this.sockets = new Comparison(minimum, OPERATOR.GTE);
		return this;
	}

	hasEnchant() {
		this.isCorrupted = true;
		this.isEnchanted = true;
		return this;
	}

	onlyEnergyShield() {
		this.energyShield = new Comparison(0, OPERATOR.GT);
		this.armour = new Comparison(0);
		this.evasion = new Comparison(0);
		return this;
	}
	hasArmour() {
		this.armour = new Comparison(0, OPERATOR.GT);
		return this;
	}
	hasEvasion() {
		this.evasion = new Comparison(0, OPERATOR.GT);
		return this;
	}

	hasModCount(count, operator = OPERATOR.EXACT) {
		const LETTERS = [..."abcdefghijklmnopqrstuvwxyz"];
		this.mods = new Comparison(LETTERS, operator, count);
		return this;
	}

	goodBase(includeOther = false) { //TODO
		// https://poe2db.tw/us/Items
		let phrases = [
			// x% increased Rarity of Items found
			"Gold Amulet", // Amulets
			"Gold Ring", // Rings
			"Golden Charm", // Charms

			// +x to Spirit
			"Solar Amulet", // Amulets
		];
		this.names = new Comparison(phrases);
		return this;
	}

	goodModMainhand(includeOther = false) {
		// https://poe2db.tw/us/Modifiers
		let phrases = [
			//// x% increased Spirit
			// Sceptres
			// "Lord's", // 30-36, IL1
			// "Baron's", // 27-32, IL8
			// "Viscount's", // 33-38, IL16
			// "Marquess'", // 39-44, IL33
			// "Count's", // 45-50, IL46
			// "Duke's", // 51-55, IL60
			"Prince's", // 56-60, IL75
			"King's", // 61-65, IL82
			////

			//// x% increased Spirit & +x to maximum Mana
			// Sceptres
			// "Advisor's", // 10-14 & 17-20, IL2
			// "Counselor's", // 15-18 & 21-24, IL11
			// "Emissary's", // 19-22 & 25-28, IL26
			// "Minister's", // 23-26 & 29-33, IL36
			// "Envoy's", // 27-30 & 34-37, IL48
			// "Diplomat's", // 31-34 & 38-41, IL58
			"Chancellor's", // 35-38 & 42-45, IL70
			////

			//// +x to Level of all Minion Skills
			// Sceptres
			// "of the Taskmaster", // 1, IL2
			// "of the Despot", // 2, IL25
			"of the Overseer", // 3, IL55
			"of the Slavedriver", // 4, IL78
			////
		];
		if (includeOther) phrases.push(
			//// +x to Level of all Spell Skills
			// Wands/staves
			// "of the Mage", // 2, IL5
			// "of the Enchanter", // 3, IL25
			"of the Sorcerer", // 4, IL55
			"of the Wizard", // 5-6, IL78
			////

			//// +x to Level of all Fire Spell Skills
			// Wands/staves
			// "of Coals", // 2, IL2
			// "of Cinders", // 3, IL18
			// "of Flames", // 4, IL36
			"of Immolation", // 5-6, IL55
			"of Inferno", // 7, IL81
			////

			//// +x to Level of all Cold Spell Skills
			// Wands/staves
			// "of Snow", // 2, IL2
			// "of Sleet", // 3, IL18
			// "of Ice", // 4, IL36
			"of Rime", // 5-6, IL55
			"of Frostbite", // 7, IL81
			////

			//// +x to Level of all Lightning Spell Skills
			// Wands/staves
			// "of Sparks", // 2, IL2
			// "of Static", // 3, IL18
			// "of Electricity", // 4, IL36
			"of Voltage", // 5-6, IL55
			"of Thunder", // 7, IL81
			////

			//// +x to Level of all Chaos Spell Skills
			// Wands/staves
			// "of Anarchy", // 2, IL2
			// "of Turmoil", // 3, IL18
			// "of Ruin", // 4, IL36
			"of Havoc", // 5-6, IL55
			"of Armageddon", // 7, IL81
			////

			//// +x to Level of all Physical Spell Skills
			// Wands/staves
			// "of Agony", // 2, IL2
			// "of Suffering", // 3, IL18
			// "of Torment", // 4, IL36
			"of Desolation", // 5-6, IL55
			"of Grief", // 7, IL81
			////

			//// +x to Level of all Melee Skills
			// Claws/daggers/spears/flails / one hand swords/axes/maces | quarterstaves / two hand swords/axes/maces
			// "of Combat", // 1 | 2, IL2
			// "of Dueling", // 2 | 3, IL18
			// "of Conflict", // 3 | 4, IL36
			"of Battle", // 4 | 5-6, IL55
			"of War", // 5 | 7, IL81
			////

			//// +x to Level of all Projectile Skills
			// Spears/bows | crossbows
			// "of the Archer", // 1 | 2, IL2
			// "of the Fletcher", // 2 | 3, IL18
			// "of the Sharpshooter", // 3 | 4, IL36
			"of the Marksman", // 4 | 5-6, IL55
			"of the Sniper", // 5 | 7, IL81
			////
		);
		this.mods = new Comparison(phrases, OPERATOR.GTE, 1);
		return this;
	}
	goodModOffhand(includeOther = false) {
		let phrases = [
			//// +x to Level of all Spell Skills
			// Foci
			// "of the Mage", // 1, IL5
			"of the Enchanter", // 2, IL41
			////
		];
		if (includeOther) phrases.push(
			//// +x to Level of all Projectile Skills
			// Quivers
			// "of the Archer", // 1, IL5
			"of the Fletcher", // 2, IL41
			////
		);
		this.mods = new Comparison(phrases, OPERATOR.GTE, 1);
		return this;
	}
	goodModArmour(includeOther = false) {
		let phrases = [
			//// +x to Level of all Minion Skills
			// Helmets
			// "of the Taskmaster", // 1, IL5
			"of the Despot", // 2, IL41
			////

			//// +x to Spirit
			// Body armours
			// "Lady's", // 30-33, IL16
			// "Baronness'", // 34-47, IL25
			// "Viscountess'", // 38-42, IL33
			// "Marchioness'", // 43-46, IL46
			// "Countess'", // 47-50, IL54
			// "Duchess'", // 51-53, IL60
			"Princess'", // 54-56, IL65
			"Queen's", // 57-61, IL78
			////

			//// x% increased Movement Speed
			// Boots
			// "Runner's", // 10, IL1
			// "Sprinter's", // 15, IL16
			// "Stallion's", // 20, IL33
			// "Gazelle's", // 25, IL46
			"Cheetah's", // 30, IL65
			"Hellion's", // 35, IL82
			////

			//// x% increased Rarity of Items found
			// Helmets
			// "Magpie's", // 8-11, IL10
			// "Collector's", // 12-15, IL29
			// "Hoarder's", // 16-19, IL47
			"Pirate's", // 20-22, IL65
			"Dragon's", // 23-25, IL81
			// Helmets/gloves/boots
			// "of Plunder", // 6-10, IL3
			// "of Raiding", // 11-14, IL24
			// "of Archaeology", // 15-18, IL40
			// "of Excavation", // 19-21, IL63
			"of Windfall", // 22-25, IL75
			////
		];
		if (includeOther) phrases.push(
			//// +x to Level of all Melee Skills
			// Gloves
			// "of Combat", // 1, IL5
			"of Dueling", // 2, IL41
			////
		);
		this.mods = new Comparison(phrases, OPERATOR.GTE, 1);
		return this;
	}
	goodModJewellery(includeOther = false) {
		let phrases = [
			//// +x to Spirit
			// Amulets
			// "Lady's", // 30-33, IL16
			// "Baronness'", // 34-47, IL25
			// "Viscountess'", // 38-42, IL33
			// "Marchioness'", // 43-46, IL46
			"Countess'", // 47-50, IL54
			////

			//// +x to Level of all Minion Skills
			// Amulets
			// "of the Taskmaster", // 1, IL5
			// "of the Despot", // 2, IL41
			"of the Overseer", // 3, IL75
			////

			//// x% increased Rarity of Items found
			// Amulets/rings
			// "Magpie's", // 8-11, IL10
			// "Collector's", // 12-15, IL29
			// "Hoarder's", // 16-19, IL47
			"Pirate's", // 20-22, IL65
			"Dragon's", // 23-25, IL81
			// Amulets/rings
			// "of Plunder", // 6-10, IL3
			// "of Raiding", // 11-14, IL24
			// "of Archaeology", // 15-18, IL40
			// "of Excavation", // 19-21, IL63
			"of Windfall", // 22-25, IL75
			////
		];
		if (includeOther) phrases.push(
			//// +x to Level of all Spell Skills
			// Amulets
			// "of the Mage", // 1, IL5
			// "of the Enchanter", // 2, IL41
			"of the Sorcerer", // 3, IL75
			////

			//// +x to Level of all Melee Skills
			// Amulets
			// "of Combat", // 1, IL5
			// "of Dueling", // 2, IL41
			"of Battle", // 3, IL75
			////

			//// +x to Level of all Projectile Skills
			// Amulets
			// "of the Archer", // 1, IL5
			// "of the Fletcher", // 2, IL41
			"of the Sharpshooter", // 3, IL75
			////
		);
		this.mods = new Comparison(phrases, OPERATOR.GTE, 1);
		return this;
	}
}
export const RARITY = ConditionSet.RARITY;
