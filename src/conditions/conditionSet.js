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
	category = null; // Comparison
	names = null; // Comparison
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
	isCorruptedTwice = null; // bool
	isIncursionMod = null; // bool
	energyShield = null; // Comparison
	armour = null; // Comparison
	evasion = null; // Comparison
	mods = null; // Comparison, with quantity

	getBlockEnd() {
		return this.isContinue ? "Continue" : null;
	}

	shouldComment() {
		// Comment out the block if a list is blank once filtered
		if (this.names !== null && this.names.exportValue() === "") return true;
		if (this.mods !== null && this.mods.exportValue() === "") return true;

		// Comment out the block if the count says <0 which should never match
		if (this.count !== null && this.count.operator === OPERATOR.LT && this.count.value === 0) return true;

		return false;
	}

	export() {
		let spans = [];
		function handle(props, spanCallback) {
			if (props === null) return;

			if (!Array.isArray(props)) props = [props];
			for (let prop of props) spans.push(spanCallback(prop));
		}

		handle(this.category, (prop) => prop.export("Class"));
		handle(this.names, (prop) => prop.export("BaseType"));
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
		handle(this.isCorruptedTwice, (prop) => `TwiceCorrupted ${this.isCorruptedTwice ? "True" : "False"}`);
		handle(this.isIncursionMod, (prop) => `HasVaalUniqueMod ${this.isIncursionMod ? "True" : "False"}`);
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

	// onlyEnergyShield() {
	// 	this.energyShield = new Comparison(0, OPERATOR.GT);
	// 	this.armour = new Comparison(0);
	// 	this.evasion = new Comparison(0);
	// 	return this;
	// }
	// hasArmour() {
	// 	this.armour = new Comparison(0, OPERATOR.GT);
	// 	return this;
	// }
	// hasEvasion() {
	// 	this.evasion = new Comparison(0, OPERATOR.GT);
	// 	return this;
	// }

	hasModCount(count, operator = OPERATOR.EXACT) {
		const LETTERS = [..."abcdefghijklmnopqrstuvwxyz"];
		this.mods = new Comparison(LETTERS, operator, count);
		return this;
	}

	goodModMainhand(includeOther = false) {
		// https://poe2db.tw/us/Modifiers
		let phrases = [
			//// Adds x to x Physical Damage
			// One hand maces/spears/bows | crossbows/quarterstaves/talismans/two hand maces
			// "Glinting", // IL1
			// "Burnished", // IL8
			// "Polished", // IL16
			// "Honed", // IL33
			// "Gleaming", // IL46
			// "Annealed", // IL54
			// "Razor-sharp", // IL60
			// "Tempered", // IL65
			"Flaring", // IL75
			////

			//// Adds x to x Fire Damage
			// One hand maces/spears/bows | crossbows/quarterstaves/talismans/two hand maces
			// "Heated", // IL1
			// "Smouldering", // IL8
			// "Smoking", // IL16
			// "Burning", // IL33
			// "Flaming", // IL46
			// "Scorching", // IL54
			// "Incinerating", // IL60
			// "Blasting", // IL65
			// "Cremating", // IL75
			"Carbonising", // IL81
			////

			//// Adds x to x Cold Damage
			// One hand maces/spears/bows | crossbows/quarterstaves/talismans/two hand maces
			// "Frosted", // IL1
			// "Chilled", // IL8
			// "Icy", // IL16
			// "Frigid", // IL33
			// "Freezing", // IL46
			// "Frozen", // IL54
			// "Glaciated", // IL60
			// "Polar", // IL65
			// "Entombing", // IL75
			"Crystalising", // IL81
			////

			//// Adds x to x Lightning Damage
			// One hand maces/spears/bows | crossbows/quarterstaves/talismans/two hand maces
			// "Humming", // IL1
			// "Buzzing", // IL8
			// "Snapping", // IL16
			// "Crackling", // IL33
			// "Sparking", // IL46
			// "Arcing", // IL54
			// "Shocking", // IL60
			// "Discharging", // IL65
			// "Electrocuting", // IL75
			"Vapourising", // IL81
			////

			//// x% increased Physical Damage
			// Spears/bows/crossbows/quarterstaves/talismans / one/two hand maces
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
			// One hand maces/spears | quarterstaves/talismans/two hand maces
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
		];
		if (includeOther) phrases.push(
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

			//// x% increased Spell Damage
			// Wands | staves
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

			//// +x% Surpassing chance to fire an additional Arrow
			// Bows
			// "of Surplus", // 25-50, IL46
			// "of Splintering", // 75-100, IL55
			// "of Shards", // 125-150, IL66
			"of Many", // 175-200, IL82
			////
		);
		this.mods = new Comparison(phrases, OPERATOR.GTE, 1);
		return this;
	}
	goodModOffhand(includeOther = false) {
		let phrases = [
			//// +x% to Chaos Resistance
			// Bucklers/shields/foci
			// "of the Lost", // IL16
			// "of Banishment", // IL30
			// "of Eviction", // IL44
			// "of Expulsion", // IL56
			// "of Exile", // IL68
			"of Bameth", // IL81
			////

			//// +x% to Maximum Chaos Resistance
			// Bucklers/shields
			// "of Regularity", // IL68
			// "of Concord", // IL75
			"of Harmony", // IL81
			////

			//// +x% to all Maximum Elemental Resistances
			// Bucklers/shields
			// "of the Deathless", // IL75
			"of the Everlasting", // IL81
			////
		];
		if (includeOther) phrases.push(
			//// x% increased Spell Damage
			// Foci
			// "Apprentice's", // IL1
			// "Adept's", // IL8
			// "Scholar's", // IL16
			// "Professor's", // IL33
			// "Occultist's", // IL46
			"Incanter's", // IL60
			////

			//// x% increased Fire Damage
			// Foci
			// "Searing", // IL2
			// "Sizzling", // IL8
			// "Blistering", // IL16
			// "Cauterising", // IL33
			// "Smoldering", // IL46
			"Magmatic", // IL60
			////

			//// x% increased Cold Damage
			// Foci
			// "Bitter", // IL2
			// "Biting", // IL8
			// "Alpine", // IL16
			// "Snowy", // IL33
			// "Hailing", // IL46
			"Arctic", // IL60
			////

			//// x% increased Lightning Damage
			// Foci
			// "Charged", // IL2
			// "Hissing", // IL8
			// "Bolting", // IL16
			// "Coursing", // IL33
			// "Striking", // IL46
			"Smiting", // IL60
			////

			//// x% increased Chaos Damage
			// Foci
			// "Impure", // IL2
			// "Tainted", // IL8
			// "Clouded", // IL16
			// "Darkened", // IL33
			// "Malignant", // IL46
			"Vile", // IL60
			////

			//// x% increased Spell Physical Damage
			// Foci
			// "Punishing", // IL2
			// "Unforgiving", // IL8
			// "Vengeful", // IL16
			// "Sadistic", // IL33
			// "Pitiless", // IL46
			"Agonising", // IL60
			////

			//// +x to Level of all Spell Skills
			// Foci
			// "of the Mage", // 1, IL5
			"of the Enchanter", // 2, IL41
			////

			//// Adds x to x Physical Damage
			// Quivers
			// "Glinting", // IL1
			// "Burnished", // IL8
			// "Polished", // IL16
			// "Honed", // IL33
			// "Gleaming", // IL46
			// "Annealed", // IL54
			// "Razor-sharp", // IL60
			// "Tempered", // IL65
			"Flaring", // IL75
			////

			//// Adds x to x Fire Damage
			// Quivers
			// "Heated", // IL1
			// "Smouldering", // IL8
			// "Smoking", // IL16
			// "Burning", // IL33
			// "Flaming", // IL46
			// "Scorching", // IL54
			// "Incinerating", // IL60
			// "Blasting", // IL65
			"Cremating", // IL75
			////

			//// Adds x to x Cold Damage
			// Quivers
			// "Frosted", // IL1
			// "Chilled", // IL8
			// "Icy", // IL16
			// "Frigid", // IL33
			// "Freezing", // IL46
			// "Frozen", // IL54
			// "Glaciated", // IL60
			// "Polar", // IL65
			"Entombing", // IL75
			////

			//// Adds x to x Lightning Damage
			// Quivers
			// "Humming", // IL1
			// "Buzzing", // IL8
			// "Snapping", // IL16
			// "Crackling", // IL33
			// "Sparking", // IL46
			// "Arcing", // IL54
			// "Shocking", // IL60
			// "Discharging", // IL65
			"Electrocuting", // IL75
			////

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
			//// x% increased Rarity of Items found
			// Helmets
			// "Magpie's", // 8-11, IL10
			// "Collector's", // 12-15, IL29
			"Hoarder's", // 16-19, IL47
			// Helmets/gloves/boots
			// "of Plunder", // 6-10, IL3
			// "of Raiding", // 11-14, IL24
			"of Archaeology", // 15-18, IL40
			////

			//// +x% to Chaos Resistance
			// Helmets/body armours/gloves/boots
			// "of the Lost", // IL16
			// "of Banishment", // IL30
			// "of Eviction", // IL44
			// "of Expulsion", // IL56
			// "of Exile", // IL68
			"of Bameth", // IL81
			////

			//// Adds x to x Physical Damage
			// Gloves
			// "Glinting", // IL1
			// "Burnished", // IL8
			// "Polished", // IL16
			// "Honed", // IL33
			// "Gleaming", // IL46
			// "Annealed", // IL54
			// "Razor-sharp", // IL60
			// "Tempered", // IL65
			"Flaring", // IL75
			////

			//// Adds x to x Fire Damage
			// Gloves
			// "Heated", // IL1
			// "Smouldering", // IL8
			// "Smoking", // IL16
			// "Burning", // IL33
			// "Flaming", // IL46
			// "Scorching", // IL54
			// "Incinerating", // IL60
			// "Blasting", // IL65
			"Cremating", // IL75
			////

			//// Adds x to x Cold Damage
			// Gloves
			// "Frosted", // IL1
			// "Chilled", // IL8
			// "Icy", // IL16
			// "Frigid", // IL33
			// "Freezing", // IL46
			// "Frozen", // IL54
			// "Glaciated", // IL60
			// "Polar", // IL65
			"Entombing", // IL75
			////

			//// Adds x to x Lightning Damage
			// Gloves
			// "Humming", // IL1
			// "Buzzing", // IL8
			// "Snapping", // IL16
			// "Crackling", // IL33
			// "Sparking", // IL46
			// "Arcing", // IL54
			// "Shocking", // IL60
			// "Discharging", // IL65
			"Electrocuting", // IL75
			////

			//// +x to Level of all Melee Skills
			// Gloves
			// "of Combat", // 1, IL5
			"of Dueling", // 2, IL41
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
		];
		if (includeOther) phrases.push(
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
		);
		this.mods = new Comparison(phrases, OPERATOR.GTE, 1);
		return this;
	}
	goodModUncommon(includeOther = false) {
		let phrases = [
			//// x% increased maximum Life
			// Amulets
			// "Hopeful", // IL33
			// "Optimistic", // IL60
			"Confident", // IL75
			////

			//// +x% to Chaos Resistance
			// Amulets/rings/belts
			// "of the Lost", // IL16
			// "of Banishment", // IL30
			// "of Eviction", // IL44
			// "of Expulsion", // IL56
			// "of Exile", // IL68
			"of Bameth", // IL81
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

			//// x% increased Rarity of Items found
			// Amulets/rings
			// "Magpie's", // 8-11, IL10
			// "Collector's", // 12-15, IL29
			"Hoarder's", // 16-19, IL47
			// Amulets/rings
			// "of Plunder", // 6-10, IL3
			// "of Raiding", // 11-14, IL24
			"of Archaeology", // 15-18, IL40
			////

			//// Adds x to x Physical Damage
			// Rings
			// "Glinting", // IL1
			// "Burnished", // IL8
			// "Polished", // IL16
			// "Honed", // IL33
			// "Gleaming", // IL46
			// "Annealed", // IL54
			// "Razor-sharp", // IL60
			// "Tempered", // IL65
			"Flaring", // IL75
			////

			//// Adds x to x Fire Damage
			// Rings
			// "Heated", // IL1
			// "Smouldering", // IL8
			// "Smoking", // IL16
			// "Burning", // IL33
			// "Flaming", // IL46
			// "Scorching", // IL54
			// "Incinerating", // IL60
			// "Blasting", // IL65
			"Cremating", // IL75
			////

			//// Adds x to x Cold Damage
			// Rings
			// "Frosted", // IL1
			// "Chilled", // IL8
			// "Icy", // IL16
			// "Frigid", // IL33
			// "Freezing", // IL46
			// "Frozen", // IL54
			// "Glaciated", // IL60
			// "Polar", // IL65
			"Entombing", // IL75
			////

			//// Adds x to x Lightning Damage
			// Rings
			// "Humming", // IL1
			// "Buzzing", // IL8
			// "Snapping", // IL16
			// "Crackling", // IL33
			// "Sparking", // IL46
			// "Arcing", // IL54
			// "Shocking", // IL60
			// "Discharging", // IL65
			"Electrocuting", // IL75
			////
		];
		if (includeOther) phrases.push(
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

			//// +x to Level of all Spell Skills
			// Amulets
			// "of the Mage", // 1, IL5
			// "of the Enchanter", // 2, IL41
			"of the Sorcerer", // 3, IL75
			////

			//// x% increased Fire Damage
			// Rings
			// "Searing", // L8
			// "Sizzling", // L16
			// "Blistering", // L33
			// "Cauterising", // L46
			// "Smoldering", // L65
			"Magmatic", // L75
			////

			//// x% increased Cold Damage
			// Rings
			// "Bitter", // L8
			// "Biting", // L16
			// "Alpine", // L33
			// "Snowy", // L46
			// "Hailing", // L65
			"Arctic", // L75
			////

			//// x% increased Lightning Damage
			// Rings
			// "Charged", // L8
			// "Hissing", // L16
			// "Bolting", // L33
			// "Coursing", // L46
			// "Striking", // L65
			"Smiting", // L75
			////

			//// x% increased Chaos Damage
			// Rings
			// "Impure", // L8
			// "Tainted", // L16
			// "Clouded", // L33
			// "Darkened", // L46
			// "Malignant", // L65
			"Vile", // L75
			////
		);
		this.mods = new Comparison(phrases, OPERATOR.GTE, 1);
		return this;
	}
}
export const RARITY = ConditionSet.RARITY;
