import { Comparison } from "./comparison.js";
import { OPERATOR } from "./operator.js";

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

	shouldComment() {
		// Comment out the block if the filtered list of names is empty
		return this.names !== null && this.names.exportValue() === "";
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

	goodModMainhand(includeOther = false) {
		// https://poe2db.tw/us/Modifiers
		let phrases = [
			//// Allies in your Presence deal x% increased Damage
			// Sceptres
			// "Coercive", // 25-34, IL1
			// "Agitative", // 35-44, IL8
			// "Instigative", // 45-54, IL16
			// "Provocative", // 55-64, IL33
			// "Persuasive", // 65-74, IL46
			// "Motivating", // 75-84, IL60
			// "Inspirational", // 90-104, IL70
			"Empowering", // 105-119, IL82 //NOTE is also T4 ele damage on quarterstaves
			////

			//// x% increased Spirit
			// Sceptres
			// "Lord's", // 30-36, IL1
			// "Baron's", // 27-32, IL8
			// "Viscount's", // 33-38, IL16
			// "Marquess'", // 39-44, IL33
			// "Count's", // 45-50, IL46
			// "Duke's", // 51-55, IL60
			// "Prince's", // 56-60, IL75
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
			// "of the Overseer", // 3, IL55
			"of the Slavedriver", // 4, IL78
			////
		];
		if (includeOther) phrases.push(
			//// x% increased Spell Damage
			// Wands | Staves
			// "Apprentice's", // 25-34 | 35-49, IL1
			// "Adept's", // 35-44 | 50-64, IL8
			// "Scholar's", // 45-54 | 65-79, IL16
			// "Professor's", // 55-64 | 80-94, IL33
			// "Occultist's", // 65-74 | 95-109, IL46
			// "Incanter's", // 75-89 | 110-129, IL60
			// "Glyphic", // 90-104 | 130-149, IL70
			"Runic", // 105-119 | 150-169, IL80
			////

			//// x% increased Fire Damage
			// Wands
			// "Searing", // 25-34 | 35-49, IL2
			// "Sizzling", // 35-44 | 50-64, IL8
			// "Blistering", // 45-54 | 65-79, IL16
			// "Cauterising", // 55-64 | 80-94, IL33
			// "Smoldering", // 65-74 | 95-109, IL46
			// "Magmatic", // 75-89 | 110-129, IL60
			// "Volcanic", // 90-104 | 130-149, IL70
			"Pyromancer's", // 105-119 | 150-169, IL81
			////

			//// x% increased Cold Damage
			// Wands
			// "Bitter", // 25-34 | 35-49, IL2
			// "Biting", // 35-44 | 50-64, IL8
			// "Alpine", // 45-54 | 65-79, IL16
			// "Snowy", // 55-64 | 80-94, IL33
			// "Hailing", // 65-74 | 95-109, IL46
			// "Arctic", // 75-89 | 110-129, IL60
			// "Crystalline", // 90-104 | 130-149, IL70
			"Cryomancer's", // 105-119 | 150-169, IL81
			////

			//// x% increased Lightning Damage
			// Wands
			// "Charged", // 25-34 | 35-49, IL2
			// "Hissing", // 35-44 | 50-64, IL8
			// "Bolting", // 45-54 | 65-79, IL16
			// "Coursing", // 55-64 | 80-94, IL33
			// "Striking", // 65-74 | 95-109, IL46
			// "Smiting", // 75-89 | 110-129, IL60
			// "Ionising", // 90-104 | 130-149, IL70
			"Electromancer's", // 105-119 | 150-169, IL81
			////

			//// x% increased Chaos Damage
			// Wands
			// "Impure", // 25-34 | 35-49, IL2
			// "Tainted", // 35-44 | 50-64, IL8
			// "Clouded", // 45-54 | 65-79, IL16
			// "Darkened", // 55-64 | 80-94, IL33
			// "Malignant", // 65-74 | 95-109, IL46
			// "Vile", // 75-89 | 110-129, IL60
			// "Twisted", // 90-104 | 130-149, IL70
			"Malevolent", // 105-119 | 150-169, IL81
			////

			//// x% increased Spell Physical Damage
			// Wands
			// "Punishing", // 25-34 | 35-49, IL2
			// "Unforgiving", // 35-44 | 50-64, IL8
			// "Vengeful", // 45-54 | 65-79, IL16
			// "Sadistic", // 55-64 | 80-94, IL33
			// "Pitiless", // 65-74 | 95-109, IL46
			// "Agonising", // 75-89 | 110-129, IL60
			// "Oppressor's", // 90-104 | 130-149, IL70
			"Torturer's", // 105-119 | 150-169, IL81
			////

			//// +x to Level of all Spell Skills
			// Wands/staves
			// "of the Mage", // 2, IL5
			// "of the Enchanter", // 3, IL25
			// "of the Sorcerer", // 4, IL55
			"of the Wizard", // 5-6, IL78
			////

			//// +x to Level of all Fire Spell Skills
			// Wands/staves
			// "of Coals", // 2, IL2
			// "of Cinders", // 3, IL18
			// "of Flames", // 4, IL36
			// "of Immolation", // 5-6, IL55
			"of Inferno", // 7, IL81
			////

			//// +x to Level of all Cold Spell Skills
			// Wands/staves
			// "of Snow", // 2, IL2
			// "of Sleet", // 3, IL18
			// "of Ice", // 4, IL36
			// "of Rime", // 5-6, IL55
			"of Frostbite", // 7, IL81
			////

			//// +x to Level of all Lightning Spell Skills
			// Wands/staves
			// "of Sparks", // 2, IL2
			// "of Static", // 3, IL18
			// "of Electricity", // 4, IL36
			// "of Voltage", // 5-6, IL55
			"of Thunder", // 7, IL81
			////

			//// +x to Level of all Chaos Spell Skills
			// Wands/staves
			// "of Anarchy", // 2, IL2
			// "of Turmoil", // 3, IL18
			// "of Ruin", // 4, IL36
			// "of Havoc", // 5-6, IL55 //NOTE is also T5 crit chance on bows
			"of Armageddon", // 7, IL81
			////

			//// +x to Level of all Physical Spell Skills
			// Wands/staves
			// "of Agony", // 2, IL2
			// "of Suffering", // 3, IL18
			// "of Torment", // 4, IL36
			// "of Desolation", // 5-6, IL55
			"of Grief", // 7, IL81
			////

			//// Adds x to x Physical Damage
			// Spears/one hand maces/bows | quarterstaves/two hand maces/crossbows
			// "Glinting", // 1-2 - 4-5 | 2-3 - 5-7, IL1
			// "Burnished", // 4-6 - 7-11 | 5-8 - 10-15, IL8
			// "Polished", // 6-9 - 11-16 | 8-12 - 15-22, IL16
			// "Honed", // 8-12 - 14-21 | 11-17 - 20-30, IL33
			// "Gleaming", // 10-15 - 18-26 | 14-21 - 25-37, IL46
			// "Annealed", // 13-20 - 23-35 | 19-29 - 33-49, IL54
			// "Razor-sharp", // 16-24 - 28-42 | 23-35 - 39-59, IL60
			// "Tempered", // 21-31 - 36-53 | 29-44 - 50-75, IL65
			"Flaring", // 26-39 - 44-66 | 37-55 - 63-94, IL75
			////

			//// Adds x to x Fire Damage
			// Spears/one hand maces/bows | quarterstaves/two hand maces/crossbows
			// "Heated", // 1-2 - 3-5 | 2-4 - 5-7, IL1
			// "Smouldering", // 4-6 - 7-10 | 6-9 - 10-16, IL8
			// "Smoking", // 7-11 - 13-19 | 11-17 - 19-28, IL16
			// "Burning", // 13-19 - 21-29 | 19-27 - 30-42, IL33
			// "Flaming", // 20-24 - 32-37 | 30-37 - 45-56, IL46
			// "Scorching", // 25-33 - 38-54 | 39-53 - 59-80, IL54
			// "Incinerating", // 35-44 - 56-71 | 56-70 - 84-107, IL60
			// "Blasting", // 47-59 - 74-97 | 73-97 - 112-149, IL65
			// "Cremating", // 62-85 - 101-129 | 102-130 - 155-198, IL75
			"Carbonising", // 88-101 - 133-154 | 135-156 - 205-236, IL81
			////

			//// Adds x to x Cold Damage
			// Spears/one hand maces/bows | quarterstaves/two hand maces/crossbows
			// "Frosted", // 1-2 - 3-4 | 2-3 - 4-6, IL1
			// "Chilled", // 3-5 - 6-9 | 5-8 - 9-14, IL8
			// "Icy", // 6-9 - 10-16 | 10-14 - 15-23, IL16
			// "Frigid", // 11-15 - 17-24 | 16-23 - 25-35, IL33
			// "Freezing", // 17-20 - 26-32 | 25-30 -38-46, IL46
			// "Frozen", // 22-29 - 34-44 | 32-43 - 49-66, IL54
			// "Glaciated", // 31-38 - 47-59 | 46-57 - 70-88, IL60
			// "Polar", // 40-53 - 62-80 | 60-80 - 92-121, IL65
			// "Entombing", // 55-69 - 83-106 | 84-107 - 126-161, IL75
			"Crystalising", // 72-81 - 110-123 | 112-124 - 168-189, IL81
			////

			//// Adds x to x Lightning Damage
			// Spears/one hand maces/bows | quarterstaves/two hand maces/crossbows
			// "Humming", // 1 - 4-6 | 1 - 7-10, IL1
			// "Buzzing", // 1 - 13-19 | 1-2 - 19-27, IL8
			// "Snapping", // 1-2 - 20-30 | 1-3 - 31-43, IL16
			// "Crackling", // 1-2 - 36-52 | 1-4 - 53-76, IL33
			// "Sparking", // 1-3 - 55-60 | 1-4 - 80-88, IL46
			// "Arcing", // 1-4 - 63-82 | 1-6 - 93-122, IL54
			// "Shocking", // 1-6 - 85-107 | 1-8 - 128-162, IL60
			// "Discharging", // 1-8 - 111-152 | 1-13 - 168-231, IL65
			// "Electrocuting", // 1-10 - 157-196 | 1-16 - 239-300, IL75
			"Vapourising", // 1-12 - 202-234 | 1-19 - 310-358, IL81
			////

			//// x% increased Physical Damage
			// Spears/quarterstaves/bows/crossbows / one/two hand maces
			// "Heavy", // 40-49, IL1
			// "Serrated", // 50-64, IL8
			// "Wicked", // 65-84, IL16
			// "Vicious", // 85-109, IL33
			// "Bloodthirsty", // 110-134, IL46
			// "Cruel", // 135-154, IL60
			// "Tyrannical", // 155-169, IL75
			"Merciless", // 170-179, IL82
			////

			//// +x to Level of all Melee Skills
			// Spears/one hand maces | quarterstaves/two hand maces
			// "of Combat", // 1 | 2, IL2
			// "of Dueling", // 2 | 3, IL18
			// "of Conflict", // 3 | 4, IL36
			// "of Battle", // 4 | 5-6, IL55
			"of War", // 5 | 7, IL81
			////

			//// +x to Level of all Projectile Skills
			// Spears/bows | crossbows
			// "of the Archer", // 1 | 2, IL2
			// "of the Fletcher", // 2 | 3, IL18
			// "of the Sharpshooter", // 3 | 4, IL36
			// "of the Marksman", // 4 | 5-6, IL55
			"of the Sniper", // 5 | 7, IL81
			////

			//// Bow Attacks fire x additional Arrows
			// Bows
			// "of Splintering", // 1, IL55
			"of Many", // 2, IL82
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
			// "Princess'", // 54-56, IL65
			"Queen's", // 57-61, IL78
			////

			//// x% increased Movement Speed
			// Boots
			// "Runner's", // 10, IL1
			// "Sprinter's", // 15, IL16
			// "Stallion's", // 20, IL33
			// "Gazelle's", // 25, IL46
			// "Cheetah's", // 30, IL65
			"Hellion's", // 35, IL82
			////

			//// x% increased Rarity of Items found
			// Helmets
			// "Magpie's", // 8-11, IL10
			// "Collector's", // 12-15, IL29
			// "Hoarder's", // 16-19, IL47
			// "Pirate's", // 20-22, IL65
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
			// "Pirate's", // 20-22, IL65
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
