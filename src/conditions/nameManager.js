import { DIV, Name } from "./name.js";
import { OPERATOR } from "./operator.js";
import { StringList } from "./stringList.js";

export class NameManager {
	static TIER = {
		NEVER: -2,
		BAD: -1,
		OTHER: 0,
		CLASS: 1,
		OUTLINE: 2,
	}

	names;

	constructor (...names) {
		this.names = names.map(
			(name) => name instanceof Name ? name : new Name(name)
		);
	}

	static getCurrenciesBad(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Transmutation Shard", 1 / 30000),
			new Name("Regal Shard", 1 / 7500),
			new Name("Artificer's Shard", 1 / 5000),
			new Name("Blacksmith's Whetstone", 1 / 500),
			new Name("Lesser Jeweller's Orb", 1 / 400),
		).range(min, max);
	}
	static getCurrencies(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Greater Orb of Transmutation", 1 / 4000),
			new Name("Orb of Transmutation", 1 / 3000),
			new Name("Greater Orb of Augmentation", 1 / 1000),
			new Name("Regal Orb", 1 / 750),
			new Name("Artificer's Orb", 1 / 500),
			new Name("Greater Jeweller's Orb", 1 / 250),
			new Name("Scroll of Wisdom", 1 / 200),
			new Name("Orb of Augmentation", 1 / 200),

			new Name("Orb of Alchemy", 1 / 100),
			new Name("Glassblower's Bauble", 1 / 100),
			new Name("Perfect Orb of Transmutation", 1 / 80),
			new Name("Greater Regal Orb", 1 / 79),
			new Name("Armourer's Scrap", 1 / 50),
			new Name("Gemcutter's Prism", 1 / 20),
			new Name("Arcanist's Etcher", 1 / 7.5),
			new Name("Chance Shard", 1 / 5),
			new Name("Vaal Orb", 1 / 4),

			new Name("Exalted Orb", 1),
			new Name("Perfect Orb of Augmentation", 1),
			new Name("Greater Exalted Orb", 2.7),
			new Name("Orb of Chance", 5),
			new Name("Perfect Regal Orb", 13),
			new Name("Perfect Jeweller's Orb", 16),

			new Name("Chaos Orb", 22.5),
			new Name("Greater Chaos Orb", 61),
			new Name("Fracturing Orb", 230),
			new Name("Orb of Annulment", 1 / 2.36 * DIV),

			new Name("Divine Orb", DIV),
			new Name("Perfect Exalted Orb", 1.67 * DIV),
			new Name("Perfect Chaos Orb", 2.25 * DIV),
			new Name("Hinekora's Lock", 475 * DIV),
			new Name("Mirror of Kalandra", 1361 * DIV),
		).range(min, max);
	}

	static getEssences1(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Lesser Essence of Battle", 1 / 5),
			new Name("Lesser Essence of the Body", 1 / 5),
			new Name("Lesser Essence of Grounding", 1 / 4),
			new Name("Lesser Essence of Insulation", 1 / 4),
			new Name("Lesser Essence of Thawing", 1 / 4),
			new Name("Lesser Essence of the Infinite", 1 / 4),
			new Name("Lesser Essence of Haste", 1 / 3),
			new Name("Lesser Essence of Ice", 1 / 2),
			new Name("Lesser Essence of Ruin", 1 / 2),
			new Name("Lesser Essence of the Mind", 1 / 2),
			new Name("Lesser Essence of Seeking", 1 / 2),

			new Name("Lesser Essence of Abrasion", 1),
			new Name("Lesser Essence of Alacrity", 1),
			new Name("Lesser Essence of Electricity", 1),
			new Name("Lesser Essence of Enhancement", 1),
			new Name("Lesser Essence of Flames", 1),
			new Name("Lesser Essence of Sorcery", 1),
			new Name("Lesser Essence of Command", 2),
			new Name("Lesser Essence of Opulence", 10),

		).range(min, max);
	}

	static getEssences2(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Essence of Battle", 1 / 5),
			new Name("Essence of Enhancement", 1 / 4),
			new Name("Essence of Flames", 1 / 2),
			new Name("Essence of Ice", 1 / 2),
			new Name("Essence of Sorcery", 1 / 2),

			new Name("Essence of Insulation", 1),
			new Name("Essence of Seeking", 1),
			new Name("Essence of Thawing", 1),
			new Name("Essence of the Infinite", 1),
			new Name("Essence of the Mind", 1),
			new Name("Essence of the Body", 1.5),
			new Name("Essence of Alacrity", 2),
			new Name("Essence of Command", 2),
			new Name("Essence of Grounding", 3),
			new Name("Essence of Electricity", 4),
			new Name("Essence of Ruin", 4.33),
			new Name("Essence of Haste", 8),
			new Name("Essence of Abrasion", 10),

			new Name("Essence of Opulence", 47),
		).range(min, max);
	}

	static getEssences3(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Greater Essence of Sorcery", 1 / 80),
			new Name("Greater Essence of Ice", 1 / 35),
			new Name("Greater Essence of the Mind", 1 / 31),
			new Name("Greater Essence of Flames", 1 / 30),
			new Name("Greater Essence of Electricity", 1 / 24),
			new Name("Perfect Essence of Thawing", 1 / 22),
			new Name("Greater Essence of Battle", 1 / 20),
			new Name("Greater Essence of the Body", 1 / 20),
			new Name("Greater Essence of the Infinite", 1 / 20),
			new Name("Perfect Essence of Command", 1 / 20),
			new Name("Greater Essence of Abrasion", 1 / 15),
			new Name("Greater Essence of Ruin", 1 / 9),
			new Name("Perfect Essence of Ruin", 1 / 7),
			new Name("Greater Essence of Command", 1 / 5),
			new Name("Greater Essence of Enhancement", 1 / 5),
			new Name("Greater Essence of Haste", 1 / 3),
			new Name("Greater Essence of Seeking", 1 / 3),
			new Name("Perfect Essence of the Infinite", 1 / 3),
			new Name("Greater Essence of Grounding", 1 / 2),
			new Name("Greater Essence of Insulation", 1 / 2),
			new Name("Greater Essence of Thawing", 1 / 2),
			new Name("Perfect Essence of Alacrity", 1 / 2),
			new Name("Perfect Essence of Insulation", 1 / 2),
			new Name("Perfect Essence of the Mind", 1 / 2),
			new Name("Perfect Essence of the Body", 1 / 1.5),

			new Name("Greater Essence of Alacrity", 1),
			new Name("Perfect Essence of Grounding", 1),
			new Name("Perfect Essence of Ice", 2),
			new Name("Perfect Essence of Seeking", 2.5),
			new Name("Perfect Essence of Sorcery", 2.5),
			new Name("Perfect Essence of Battle", 3.33),
			new Name("Perfect Essence of Flames", 4),
			new Name("Perfect Essence of Opulence", 4),
			new Name("Perfect Essence of Abrasion", 5),
			new Name("Perfect Essence of Electricity", 8),
			new Name("Greater Essence of Opulence", 10),
			new Name("Perfect Essence of Enhancement", 12),

			new Name("Perfect Essence of Haste", 25),
		).range(min, max);
	}

	static getEssences4(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Essence of Insanity", 1.5),

			new Name("Essence of Delirium", 46),
			new Name("Essence of the Abyss", 54),
			new Name("Essence of Hysteria", 500),

			new Name("Essence of Horror", 3 * DIV),
		).range(min, max);
	}

	static getAbyss1(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Gnawed Jawbone", 1 / 20),
			new Name("Gnawed Rib", 1 / 20),
			new Name("Gnawed Collarbone", 1 / 2),
		).range(min, max);
	}
	static getAbyss2(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Preserved Jawbone", 1 / 100),
			new Name("Preserved Rib", 1 / 50),

			new Name("Preserved Collarbone", 1.4),
		).range(min, max);
	}
	static getAbyss3(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Preserved Vertebrae", 3.6),
			new Name("Preserved Cranium", 10),

			new Name("Ancient Rib", 1.5 * DIV),
			new Name("Ancient Jawbone", 3 * DIV),
			new Name("Ancient Collarbone", 6 * DIV),
		).range(min, max);
	}

	static getEmotions1(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Diluted Liquid Ire", 1 / 3),

			new Name("Diluted Liquid Greed", 1.5),
			new Name("Diluted Liquid Guilt", 4.17),
		).range(min, max);
	}
	static getEmotions2(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Liquid Envy", 2.57),
			new Name("Liquid Paranoia", 4.1),
			new Name("Liquid Despair", 4.17),
			new Name("Liquid Disgust", 15.56),
		).range(min, max);
	}
	static getEmotions3(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Concentrated Liquid Suffering", 30),
			new Name("Concentrated Liquid Fear", 40),
			new Name("Concentrated Liquid Isolation", 85),
		).range(min, max);
	}

	static getCatalysts(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Skittering Catalyst", 1 / 30), // Speed
			new Name("Adaptive Catalyst", 1 / 25), // Attribute
			new Name("Uul-Netol's Catalyst", 1 / 17), // Physical
			new Name("Sibilant Catalyst", 1 / 15), // Caster
			new Name("Carapace Catalyst", 1 / 12.6), // Defence
			new Name("Xoph's Catalyst", 1 / 12), // Fire
			new Name("Neural Catalyst", 1 / 11), // Mana

			new Name("Tul's Catalyst", 1 / 8), // Cold
			new Name("Chayula's Catalyst", 1 / 7), // Chaos

			new Name("Flesh Catalyst", 2), // Life
			new Name("Esh's Catalyst", 5), // Lightning
			new Name("Reaver Catalyst", 13), // Attack
		).range(min, max);
	}

	static getSplinters(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Breach Splinter", 1 / 9),

			new Name("Petition Splinter", 1.29),
			new Name("Simulacrum Splinter", 1.85),
			new Name("Runic Splinter", 6.7),
		).range(min, max);
	}

	static getArtifacts(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Order Artifact", 1 / 40), // Armour
			new Name("Broken Circle Artifact", 1 / 38), // Weapons

			new Name("Black Scythe Artifact", 1 / 4), // Jewellery/belts
			new Name("Sun Artifact", 1 / 4), // Wildcard
		).range(min, max);
	}
	static getCoinage(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Exotic Coinage", 2),
		).range(min, max);
	}

	static getOmens(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Omen of Gambling", 1 / 800),

			new Name("Omen of Refreshment", 1 / 20),
			new Name("Omen of the Ancients", 1 / 3),
			new Name("Omen of Greater Exaltation", 1 / 3),

			new Name("Omen of Dextral Exaltation", 3),
			new Name("Omen of Homogenising Coronation", 3.5),
			new Name("Omen of Resurgence", 4),
			new Name("Omen of Sinistral Exaltation", 4),
			new Name("Omen of Chaotic Quantity", 7),
			new Name("Omen of Bartering", 7.2),
			new Name("Omen of Answered Prayers", 9),
			new Name("Omen of the Blessed", 10),
			new Name("Omen of Amelioration", 10),
			new Name("Omen of Catalysing Exaltation", 11),
			new Name("Omen of Chaotic Monsters", 13),
			new Name("Omen of Secret Compartments", 16),
			new Name("Omen of Corruption", 18.33),

			new Name("Omen of Dextral Crystallisation", 20),
			new Name("Omen of the Hunt", 23),
			new Name("Omen of Chaotic Rarity", 25),
			new Name("Omen of Recombination", 28),
			new Name("Omen of Reinforcements", 77),
			new Name("Omen of Homogenising Exaltation", 80),
			new Name("Omen of Sinistral Crystallisation", 101),
			new Name("Omen of Sanctification", 334),

			new Name("Omen of Dextral Erasure", 2.18 * DIV),
			new Name("Omen of Whittling", 2.5 * DIV),
			new Name("Omen of Dextral Annulment", 3.5 * DIV),
			new Name("Omen of Sinistral Erasure", 4 * DIV),
			new Name("Omen of Sinistral Annulment", 5.33 * DIV),
			new Name("Omen of Chance", 6 * DIV),
		).range(min, max);
	}
	static getOmensAbyss(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Omen of the Liege", 1 / 90), // Amanamu
			new Name("Omen of Putrefaction", 1 / 14),
			new Name("Omen of Dextral Necromancy", 1 / 12),
			new Name("Omen of the Sovereign", 1 / 10), // Ulaman
			new Name("Omen of the Blackblooded", 1 / 8), // Kurgal

			new Name("Omen of Sinistral Necromancy", 26.5),
			new Name("Omen of Abyssal Echoes", 68),

			new Name("Omen of Light", 3.33 * DIV),
		).range(min, max);
	}

	static getGems(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Tacati's Ire", 1 / 9),
			new Name("Daresso's Passion", 1 / 8),
			new Name("Romira's Requital", 1 / 7),
			new Name("Kurgal's Leash", 1 / 6),
			new Name("Vilenta's Propulsion", 1 / 4),
			new Name("Arakaali's Lust", 1 / 3),
			new Name("Uruk's Smelting", 1 / 2),
			new Name("Varashta's Blessing", 1 / 2),
			new Name("Tawhoa's Tending", 1 / 2),
			new Name("Sione's Temper", 1 / 2),
			new Name("Ahn's Citadel", 1 / 2),

			new Name("Paquate's Pact", 1),
			new Name("Kaom's Madness", 1),
			new Name("Tecrod's Revenge", 1),
			new Name("Kalisa's Crescendo", 1),
			new Name("Zarokh's Refrain", 1),
			new Name("Doedre's Undoing", 1),
			new Name("Kulemak's Dominion", 1),
			new Name("Einhar's Beastrite", 1),
			new Name("Atziri's Allure", 1),
			new Name("Brutus' Brain", 2),
			new Name("Xoph's Pyre", 2),
			new Name("Arbiter's Ignition", 2.5),
			new Name("Piety's Mercy", 5),
			new Name("Ailith's Chimes", 6),
			new Name("Garukhan's Resolve", 14),
			new Name("Uhtred's Exodus", 16),

			new Name("Tul's Stillness", 60),
			new Name("Esh's Radiance", 65),
			new Name("Rigwald's Ferocity", 90),
			new Name("Ixchel's Torment", 225),

			new Name("Uhtred's Omen", 6 * DIV),
			new Name("Ratha's Assault", 6 * DIV),
			new Name("Uul-Netol's Embrace", 11 * DIV),
			new Name("Atalui's Bloodletting", 16 * DIV),
			new Name("Rakiata's Flow", 20 * DIV),
			new Name("Dialla's Desire", 30 * DIV),
			new Name("Arjun's Medal", 41 * DIV),
			new Name("Uhtred's Augury", 50 * DIV),
		).range(min, max);
	}

	static getRunes1(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Lesser Desert Rune", 1 / 4),
			new Name("Lesser Mind Rune", 1 / 3),
			new Name("Lesser Vision Rune", 1 / 3),
			new Name("Lesser Rebirth Rune", 1 / 3),
			new Name("Lesser Stone Rune", 1 / 3),
			new Name("Lesser Glacial Rune", 1 / 2),

			new Name("Lesser Inspiration Rune", 1),
			new Name("Lesser Body Rune", 2),
			new Name("Lesser Robust Rune", 5),
			new Name("Lesser Resolve Rune", 10),

			new Name("Lesser Storm Rune", 21),
			new Name("Lesser Iron Rune", 22),
			new Name("Lesser Adept Rune", 30),
		).range(min, max);
	}
	static getRunes2(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Resolve Rune", 1 / 5),
			new Name("Inspiration Rune", 1 / 3),
			new Name("Mind Rune", 1 / 2),
			new Name("Vision Rune", 1 / 2),
			new Name("Stone Rune", 1 / 2),
			new Name("Robust Rune", 1 / 2),

			new Name("Desert Rune", 1),
			new Name("Rebirth Rune", 1),
			new Name("Adept Rune", 1),
			new Name("Body Rune", 2),
			new Name("Glacial Rune", 3),
			new Name("Storm Rune", 14),

			new Name("Iron Rune", 45),
		).range(min, max);
	}
	static getRunes3(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Greater Stone Rune", 1 / 40),
			new Name("Greater Adept Rune", 1 / 25),
			new Name("Greater Body Rune", 1 / 25),
			new Name("Greater Resolve Rune", 1 / 15),
			new Name("Greater Robust Rune", 1 / 15),
			new Name("Greater Rebirth Rune", 1 / 15),
			new Name("Greater Inspiration Rune", 1 / 10),
			new Name("Greater Mind Rune", 1 / 5),
			new Name("Greater Iron Rune", 1 / 5),
			new Name("Greater Vision Rune", 1 / 3),
			new Name("Greater Desert Rune", 1 / 3),
			new Name("Greater Storm Rune", 1 / 3),
			new Name("Greater Glacial Rune", 1 / 2),
		).range(min, max);
	}
	static getRunes4(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Craiceann's Rune of Recovery", 1 / 10),
			new Name("Lady Hestra's Rune of Winter", 1 / 8),
			new Name("Fenumus' Rune of Draining", 1 / 5),
			new Name("Thane Myrk's Rune of Summer", 1 / 3),
			new Name("The Greatwolf's Rune of Claws", 1 / 3),
			new Name("Saqawal's Rune of Erosion", 1 / 2),

			new Name("Greater Rune of Nobility", 1),
			new Name("Farrul's Rune of the Hunt", 1),
			new Name("Thane Girt's Rune of Wildness", 1),
			new Name("Craiceann's Rune of Warding", 1),
			new Name("Thane Grannell's Rune of Mastery", 1),
			new Name("Fenumus' Rune of Agony", 2),
			new Name("Greater Rune of Leadership", 5),
			new Name("The Greatwolf's Rune of Willpower", 5),
			new Name("Farrul's Rune of Grace", 9),
			new Name("Saqawal's Rune of Memory", 10),
			new Name("Fenumus' Rune of Spinning", 11),
			new Name("Thane Leld's Rune of Spring", 13),
			new Name("Courtesan Mannan's Rune of Cruelty", 16),

			new Name("Greater Rune of Tithing", 26),
			new Name("Greater Rune of Alacrity", 40),
			new Name("Saqawal's Rune of the Sky", 74),

			new Name("Countess Seske's Rune of Archery", 4 * DIV),
			new Name("Farrul's Rune of the Chase", 10 * DIV),
			new Name("Hedgewitch Assandra's Rune of Wisdom", 21 * DIV),
		).range(min, max);
	}

	static getSocketables(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Soul Core of Xopec", 34),
			new Name("Soul Core of Puhuarte", 35),
			new Name("Soul Core of Atmohua", 36),
			new Name("Soul Core of Zalatl", 40),
			new Name("Soul Core of Zantipi", 42),
			new Name("Soul Core of Quipolatl", 44),
			new Name("Soul Core of Ticaba", 47),
			new Name("Soul Core of Tzamoto", 52),
			new Name("Soul Core of Citaqualotl", 53),
			new Name("Soul Core of Cholotl", 60),
			new Name("Soul Core of Opiloti", 65),
			new Name("Soul Core of Topotante", 66),
			new Name("Soul Core of Tacati", 84),
			new Name("Soul Core of Azcapa", 125),

			new Name("Soul Core of Jiquani", 6 * DIV),
		).range(min, max);
	}

	static getMain(tier, operator = undefined) {
		return new NameManager(
			// https://poe2db.tw/us/Sceptres#SceptresItem
			new Name("Omen Sceptre", TIER.OTHER), // Malice
			new Name("Wrath Sceptre", TIER.OTHER), // Fulmination
			new Name("Stoic Sceptre", TIER.OTHER), // Discipline
			new Name("Shrine Sceptre", TIER.OTHER), // Purity of Fire/Ice/Lightning

			new Name("Rattling Sceptre", TIER.CLASS), // Skeletal Warrior

			// https://poe2db.tw/us/Wands#WandsItem
			new Name("Bone Wand", TIER.NEVER), // Bone Blast

			new Name("Volatile Wand", TIER.BAD), // Volatile Dead

			new Name("Withered Wand", TIER.OTHER), // Chaos Bolt
			new Name("Attuned Wand", TIER.OTHER), // Mana Drain
			new Name("Siphoning Wand", TIER.OTHER), // Power Siphon
			new Name("Galvanic Wand", TIER.OTHER), // Galvanic Field
			new Name("Dueling Wand", TIER.OTHER), // Spellslinger

			// https://poe2db.tw/us/Staves#StavesItem
			new Name("Pyrophyte Staff", TIER.NEVER), // Solar Orb
			new Name("Voltaic Staff", TIER.NEVER), // Lightning Bolt
			new Name("Roaring Staff", TIER.NEVER), // Unleash
			new Name("Paralysing Staff", TIER.NEVER), // Enervating Nova
			new Name("Sanctified Staff", TIER.NEVER), // Consecrate

			new Name("Reaping Staff", TIER.BAD), // Reap

			new Name("Ashen Staff", TIER.OTHER), // Firebolt
			new Name("Gelid Staff", TIER.OTHER), // Freezing Shards
			new Name("Chiming Staff", TIER.OTHER), // Sigil of Power

			// https://poe2db.tw/us/One_Hand_Maces#OneHandMacesItem
			new Name("Wooden Club", TIER.NEVER), // 6-10 phys, 5% cc, x1.45
			new Name("Smithing Hammer", TIER.NEVER), // 5.5-9 phys, 5.5-9 fire, 5% cc, x1.45, L4
			new Name("Slim Mace", TIER.NEVER), // 11-17 phys, 5% cc, x1.55, L10
			new Name("Spiked Club", TIER.NEVER), // 15-24 phys, 5% cc, x1.45, L16
			new Name("Warpick",  TIER.NEVER), // 18-24 phys, 7% cc, x1.45, L22
			new Name("Plated Mace", TIER.NEVER), // 18-38 phys, 5% cc, x1.4, L26
			new Name("Brigand Mace", TIER.NEVER), // 28-38 phys, 5% cc, x1.45, L33
			new Name("Construct Hammer", TIER.NEVER), // 31-38 phys, 5% cc, x1.4, L36, 40% chance to Daze on Hit
			new Name("Morning Star", TIER.NEVER), // 33-49 phys, 6.5% cc, x1.45, L45
			new Name("Jade Club", TIER.NEVER), // 31-51 phys, 5% cc, x1.45, L49, Always Hits
			new Name("Marching Mace", TIER.NEVER), // 33-69 phys, 5% cc, x1.4, L54
			new Name("Bandit Mace", TIER.NEVER), // 45-61 phys, 5% cc, x1.45, L59
			new Name("Structured Hammer", TIER.NEVER), // 49-60 phys, 5% cc, x1.4, L62, 40% chance to Daze on Hit
			new Name("Flanged Mace", TIER.NEVER), // 45-67 phys, 5% cc, x1.55, L67
			new Name("Crown Mace", TIER.NEVER), // 43-89 phys, 5% cc, x1.4, L72
			new Name("Strife Pick", TIER.NEVER), // 49-66 phys, 7% cc, x1.45, L78, +5–10% to Critical Damage Bonus
			new Name("Fortified Hammer", TIER.NEVER), // 60-73 phys, 5% cc, x1.4, L79, 40% chance to Daze on Hit

			new Name("Molten Hammer", TIER.BAD), // 35.5-59 phys, 35.5-59 fire, 5% cc, x1.45, L77
			new Name("Marauding Mace", TIER.BAD), // 51-84 phys, 5% cc, x1.45, L77

			new Name("Akoyan Club", TIER.OTHER), // 46-76 phys, 5% cc, x1.45, L78, Always Hits

			// https://poe2db.tw/us/Spears#SpearsItem
			new Name("Hardwood Spear", TIER.NEVER), // 5-9 phys, 5% cc, x1.6
			new Name("Ironhead Spear", TIER.NEVER), // 7-13 phys, 5% cc, x1.6, L5
			new Name("Hunting Spear", TIER.NEVER), // 10-18 phys, 5% cc, x1.55, L10, 15–25% chance to Maim on Hit
			new Name("Winged Spear", TIER.NEVER), // 12-22 phys, 5% cc, x1.65, L16
			new Name("War Spear", TIER.NEVER), // 14-26 phys, 5% cc, x1.6, L21, 25–35% increased Projectile Speed with this Weapon
			new Name("Forked Spear", TIER.NEVER), // 17-32 phys, 5% cc, x1.6, L26
			new Name("Barbed Spear", TIER.NEVER), // 20-38 phys, 6.5% cc, x1.6, L33
			new Name("Broad Spear", TIER.NEVER), // 26-48 phys, 5% cc, x1.5, L40
			new Name("Crossblade Spear", TIER.NEVER), // 28-51 phys, 5% cc, x1.55, L45
			new Name("Seaglass Spear", TIER.NEVER), // 31-57 phys, 7% cc, x1.5, L51
			new Name("Branched Spear", TIER.NEVER), // 31-58 phys, 5% cc, x1.6, L54
			new Name("Jagged Spear", TIER.NEVER), // 33-61 phys, 6.5% cc, x1.6, L59
			new Name("Helix Spear", TIER.NEVER), // 37-68 phys, 5% cc, x1.6, L65
			new Name("Orichalcum Spear", TIER.NEVER), // 38-70 phys, 5% cc, x1.6, L67
			new Name("Pronged Spear", TIER.NEVER), // 40-75 phys, 5% cc, x1.6, L72

			new Name("Stalking Spear", TIER.OTHER), // 44-82 phys, 5% cc, x1.55, L77, 15–25% chance to Maim on Hit
			new Name("Spiked Spear", TIER.OTHER), // 41-76 phys, 6.5% cc, x1.6, L77
			new Name("Flying Spear", TIER.OTHER), // 41-76 phys, 5% cc, x1.6, L78, 25–35% increased Projectile Speed with this Weapon
			new Name("Akoyan Spear", TIER.OTHER), // 43-80 phys, 7% cc, x1.5, L78
			new Name("Grand Spear", TIER.OTHER), // 46-85 phys, 5% cc, x1.5, L79

			// https://poe2db.tw/us/Bows#BowsItem
			new Name("Crude Bow", TIER.NEVER), // 6-9 phys, x1.2
			new Name("Shortbow", TIER.NEVER), // 7-14 phys, x1.25, L5
			new Name("Warden Bow", TIER.NEVER), // 12-18 phys, x1.15, L11, 20–30% chance to Chain an additional time
			new Name("Recurve Bow", TIER.NEVER), // 15-31 phys, x1.1, L16
			new Name("Composite Bow", TIER.NEVER), // 19-31 phys, x1.2, L22
			new Name("Dualstring Bow", TIER.NEVER), // 16-31 phys, x1.1, L28, Bow Attacks fire an additional Arrow
			new Name("Cultist Bow", TIER.NEVER), // 10-17 phys, 19-37 chaos, x1.2, L33
			new Name("Zealot Bow", TIER.NEVER), // 31-47 phys, x1.2, L39
			new Name("Artillery Bow", TIER.NEVER), // 39-72 phys, x1.15, L45, 50% reduced Projectile Range
			new Name("Tribal Bow", TIER.NEVER), // 38-57 phys, x1.2, L50
			new Name("Twin Bow", TIER.NEVER), // 32-60 phys, x1.1, L54, Bow Attacks fire an additional Arrow
			new Name("Adherent Bow", TIER.NEVER), // 21-34 phys, 31-59 chaos, x1.2, L59
			new Name("Militant Bow", TIER.NEVER), // 46-69 phys, x1.2, L62
			new Name("Ironwood Shortbow", TIER.NEVER), // 41-76 phys, x1.25, L67
			new Name("Cavalry Bow", TIER.NEVER), // 49-82 phys, x1.2, L72

			new Name("Fanatic Bow", TIER.BAD), // 42-70 phys, 43-71 chaos, x1.2, L79

			new Name("Guardian Bow", TIER.OTHER), // 53-80 phys, x1.15, L77, 20–30% chance to Chain an additional time
			new Name("Warmonger Bow", TIER.OTHER), // 56-84 phys, x1.2, L77
			new Name("Obliterator Bow", TIER.OTHER), // 62-115 phys, x1.15, L78, 50% reduced Projectile Range
			new Name("Gemini Bow", TIER.OTHER), // 39-72 phys, x1.1, L78, Bow Attacks fire an additional Arrow

			// https://poe2db.tw/us/Crossbows#CrossbowsItem
			new Name("Makeshift Crossbow", TIER.NEVER), // 7-12 phys, 5% cc, x1.6, r0.8
			new Name("Tense Crossbow", TIER.NEVER), // 8-15 phys, 5% cc, x1.6, r0.85, L4, 20–30% increased Bolt Speed
			new Name("Sturdy Crossbow", TIER.NEVER), // 11-26 phys, 5% cc, x1.55, r0.75, L10
			new Name("Varnished Crossbow", TIER.NEVER), // 12-36 phys, 5% cc, x1.6, r0.8, L16
			new Name("Dyad Crossbow", TIER.NEVER), // 9-37 phys, 5% cc, x1.6, r1.1, L20, Loads an additional bolt
			new Name("Alloy Crossbow", TIER.NEVER), // 12-50 phys, 5% cc, x1.7, r0.7, L26
			new Name("Bombard Crossbow", TIER.NEVER), // 14-56 phys, 5% cc, x1.65, r0.75, L33, Grenade Skills Fire an additional Projectile
			new Name("Construct Crossbow", TIER.NEVER), // 18-72 phys, 5% cc, x1.6, r0.8, L38
			new Name("Blackfire Crossbow", TIER.NEVER), // 20-80 phys, 7% cc, x1.6, r0.85, L45
			new Name("Piercing Crossbow", TIER.NEVER), // 21-84 phys, 5% cc, x1.65, r0.85, L50, 20–30% chance to Pierce an Enemy
			new Name("Twin Crossbow", TIER.NEVER), // 20-82 phys, 5% cc, x1.6, r1.1, L54, Loads an additional bolt
			new Name("Cannonade Crossbow", TIER.NEVER), // 23-90 phys, 5% cc, x1.65, r0.75, L59, Grenade Skills Fire an additional Projectile
			new Name("Bleak Crossbow", TIER.NEVER), // 27-109 phys, 5% cc, x1.6, r0.8, L62
			new Name("Stout Crossbow", TIER.NEVER), // 30-119 phys, 5% cc, x1.55, r0.75, L67
			new Name("Engraved Crossbow", TIER.NEVER), // 31-124 phys, 5% cc, x1.6, r0.8, L72

			new Name("Flexed Crossbow", TIER.OTHER), // 32-127 phys, 5% cc, x1.6, r0.85, L77, 20–30% increased Bolt Speed
			new Name("Desolate Crossbow", TIER.OTHER), // 33-132 phys, 5% cc, x1.6, r0.8, L77
			new Name("Gemini Crossbow", TIER.OTHER), // 28-112 phys, 5% cc, x1.6, r1.1, L78, Loads an additional bolt
			new Name("Elegant Crossbow", TIER.OTHER), // 31-123 phys, 5% cc, x1.65, r0.85, L78, 20–30% chance to Pierce an Enemy
			new Name("Siege Crossbow", TIER.OTHER), // 29-115 phys, 5% cc, x1.65, r0.75, L79, Grenade Skills Fire an additional Projectile

			// https://poe2db.tw/us/Quarterstaves#QuarterstavesItem
			new Name("Wrapped Quarterstaff", TIER.NEVER), // 7-12 phys, 10% cc, x1.4
			new Name("Long Quarterstaff", TIER.NEVER), // 9-18 phys, 10% cc, x1.4, L4, 16% increased Melee Strike Range with this weapon
			new Name("Gothic Quarterstaff", TIER.NEVER), // 16-26 phys, 11.5% cc, x1.4, L11
			new Name("Crackling Quarterstaff", TIER.NEVER), // 5-22 phys, 1-35 lightning, 10% cc, x1.4, L16
			new Name("Crescent Quarterstaff", TIER.NEVER), // 19-39 phys, 10% cc, x1.5, L20
			new Name("Steelpoint Quarterstaff", TIER.NEVER), // 28-51 phys, 10% cc, x1.4, L28
			new Name("Slicing Quarterstaff", TIER.NEVER), // 29-60 phys, 10% cc, x1.4, L33
			new Name("Barrier Quarterstaff", TIER.NEVER), // 33-55 phys, 10% cc, x1.4, L37, +10–15% to Block chance
			new Name("Hefty Quarterstaff", TIER.NEVER), // 39-80 phys, 10% cc, x1.35, L45
			new Name("Smooth Quarterstaff", TIER.NEVER), // 64-87 phys, 0% cc, x1.5, L49
			new Name("Waxing Quarterstaff", TIER.NEVER), // 39-82 phys, 10% cc, x1.5, L54
			new Name("Bladed Quarterstaff", TIER.NEVER), // 45-94 phys, 10% cc, x1.4, L59
			new Name("Guardian Quarterstaff", TIER.NEVER), // 49-82 phys, 10% cc, x1.4, L62, +10–15% to Block chance
			new Name("Sinister Quarterstaff", TIER.NEVER), // 55-92 phys, 11.5% cc, x1.4, L67
			new Name("Lunar Quarterstaff", TIER.NEVER), // 50-103 phys, 10% cc, x1.5, L72
			new Name("Aegis Quarterstaff", TIER.NEVER), // 58-97 phys, 10% cc, x1.4, L79, +10–15% to Block chance

			new Name("Striking Quarterstaff", TIER.OTHER), // 53-111 phys, 10% cc, x1.4, L77, 16% increased Melee Strike Range with this weapon

			new Name("Razor Quarterstaff", TIER.OTHER), // 65-108 phys, 10% cc, x1.4, L77
			new Name("Dreaming Quarterstaff", TIER.OTHER), // 99-133 phys, 0% cc, x1.5, L78
			new Name("Bolting Quarterstaff", TIER.OTHER), // 24-97 phys, 1-100 lightning, 10% cc, x1.4, L78

			// https://poe2db.tw/us/Two_Hand_Maces#TwoHandMacesItem
			new Name("Felled Greatclub", TIER.NEVER), // 13-18 phys, 5% cc, x1.1
			new Name("Oak Greathammer", TIER.NEVER), // 14-26 phys, 5% cc, x1.05, L4, Causes 30–50% increased Stun Buildup
			new Name("Forge Maul", TIER.NEVER), // 29-39 phys, 5% cc, x1.05, L11
			new Name("Studded Greatclub", TIER.NEVER), // 32-48 phys, 5% cc, x1.1, L16
			new Name("Cultist Greathammer", TIER.NEVER), // 32-43 phys, 5% cc, x1.05, L22, Strikes deal Splash damage to targets within 1.5 metres
			new Name("Temple Maul", TIER.NEVER), // 35-72 phys, 5% cc, x1.2, L28
			new Name("Leaden Greathammer", TIER.NEVER), // 58-78 phys, 5% cc, x1.1, L33
			new Name("Crumbling Maul", TIER.NEVER), // 62-75 phys, 5% cc, x1.1, L38, Causes Enemies to Explode on Critical kill, for 10% of their Life as Physical Damage
			new Name("Pointed Maul", TIER.NEVER), // 68-102 phys, 6.5% cc, x1.1, L45
			new Name("Totemic Greatclub", TIER.NEVER), // 73-99 phys, 5% cc, x1.1, L50, Crushes Enemies on Hit
			new Name("Solemn Maul", TIER.NEVER), // 59-123 phys, 5% cc, x1.2, L54
			new Name("Heavy Greathammer", TIER.NEVER), // 94-127 phys, 5% cc, x1.1, L59
			new Name("Disintegrating Maul", TIER.NEVER), // 93-114 phys, 5% cc, x1.1, L62, Causes Enemies to Explode on Critical kill, for 10% of their Life as Physical Damage
			new Name("Anvil Maul", TIER.NEVER), // 112-151 phys, 5% cc, x1.05, L67
			new Name("Sacred Maul", TIER.NEVER), // 76-158 phys, 5% cc, x1.2, L72
			new Name("Fanatic Greathammer", TIER.NEVER), // 89-120 phys, 5% cc, x1.05, L78, Strikes deal Splash damage to targets within 1.5 metres

			new Name("Ironwood Greathammer", TIER.OTHER), // 94-174 phys, 5% cc, x1.05, L77, Causes 30–50% increased Stun Buildup
			new Name("Massive Greathammer", TIER.OTHER), // 119-161 phys, 5% cc, x1.1, L77
			new Name("Tawhoan Greatclub", TIER.OTHER), // 107-145 phys, 5% cc, x1.1, L78, Crushes Enemies on Hit
			new Name("Ruination Maul", TIER.OTHER), // 113-138 phys, 5% cc, x1.1, L79, Causes Enemies to Explode on Critical kill, for 10% of their Life as Physical Damage
		).compare(tier, operator);
	}
	static getOff(tier, operator = undefined) {
		return new NameManager(
			// https://poe2db.tw/us/Foci#FociItem
			new Name("Twig Focus", TIER.NEVER), // 12 ES
			new Name("Woven Focus", TIER.NEVER), // 15 ES, L6
			new Name("Antler Focus", TIER.NEVER), // 17 ES, L10
			new Name("Engraved Focus", TIER.NEVER), // 21 ES, L16
			new Name("Tonal Focus", TIER.NEVER), // 25 ES, L22
			new Name("Crystal Focus", TIER.NEVER), // 28 ES, L26
			new Name("Voodoo Focus", TIER.NEVER), // 32 ES, L33
			new Name("Plumed Focus", TIER.NEVER), // 34 ES, L36
			new Name("Runed Focus", TIER.NEVER), // 40 ES, L45
			new Name("Whorl Focus", TIER.NEVER), // 43 ES, L51
			new Name("Arrayed Focus", TIER.NEVER), // 45 ES, L54
			new Name("Cultist Focus", TIER.NEVER), // 49 ES, L59
			new Name("Hallowed Focus", TIER.NEVER), // 50 ES, L61
			new Name("Druidic Focus", TIER.NEVER), // 52 ES, L65
			new Name("Leyline Focus", TIER.NEVER), // 58 ES, L70
			new Name("Sacred Focus", TIER.NEVER), // 63 ES, L75

			new Name("Tasalian Focus", TIER.CLASS), // 68 ES, L80

			// https://poe2db.tw/us/Quivers#QuiversItem
			new Name("Fire Quiver", TIER.NEVER), // L8, Adds 3 to 5 Fire damage to Attacks
			new Name("Sacral Quiver", TIER.NEVER), // L16, Gain 2–3 Life per Enemy Hit with Attacks
			new Name("Blunt Quiver", TIER.NEVER), // L33, 25–40% increased Stun Buildup
			new Name("Serrated Quiver", TIER.NEVER), // L44, Attacks have 20–30% chance to cause Bleeding

			new Name("Toxic Quiver", TIER.BAD), // L39, 20–30% chance to Poison on Hit with Attacks

			new Name("Broadhead Quiver", TIER.OTHER), // Adds 1 to 3 Physical Damage to Attacks
			new Name("Two-Point Quiver", TIER.OTHER), // L24, 20–30% increased Accuracy Rating
			new Name("Primed Quiver", TIER.OTHER), // L51, 7–10% increased Attack Speed
			new Name("Penetrating Quiver", TIER.OTHER), // L55, 100% chance to Pierce an Enemy
			new Name("Volant Quiver", TIER.OTHER), // L61, 20–30% increased Arrow Speed
			new Name("Visceral Quiver", TIER.OTHER), // L65, 20–30% increased Critical Hit Chance for Attacks

			// https://poe2db.tw/us/Bucklers#BucklersItem
			new Name("Leather Buckler", TIER.NEVER), // 10 V
			new Name("Wooden Buckler", TIER.NEVER), // 16 V, L5
			new Name("Plated Buckler", TIER.NEVER), // 26 V, L11
			new Name("Iron Buckler", TIER.NEVER), // 33 V, L16
			new Name("Ridged Buckler", TIER.NEVER), // 43 V, L22
			new Name("Spiked Buckler", TIER.NEVER), // 49 V, L26
			new Name("Ringed Buckler", TIER.NEVER), // 60 V, L33
			new Name("Edged Buckler", TIER.NEVER), // 70 V, L39
			new Name("Laminate Buckler", TIER.NEVER), // 79 V, L45
			new Name("Pearl Buckler", TIER.NEVER), // 87 V, L50
			new Name("Ornate Buckler", TIER.NEVER), // 90 V, L52
			new Name("Spikeward Buckler", TIER.NEVER), // 93 V, L54
			new Name("Jingling Buckler", TIER.NEVER), // 101 V, L59
			new Name("Bladeguard Buckler", TIER.NEVER), // 105 V, L61
			new Name("Ornate Buckler", TIER.NEVER), // 111 V, L65
			new Name("Gutspike Buckler", TIER.NEVER), // 122 V, L70
			new Name("Ancient Buckler", TIER.NEVER), // 133 V, L75
			new Name("Desert Buckler", TIER.NEVER), // 144 V, L80

			// https://poe2db.tw/us/Shields#ShieldsItem
			new Name("Splintered Tower Shield", TIER.NEVER), // 18 A
			new Name("Painted Tower Shield", TIER.NEVER), // 29 A, L6
			new Name("Braced Tower Shield", TIER.NEVER), // 41 A, L12
			new Name("Barricade Tower Shield", TIER.NEVER), // 50 A, L16
			new Name("Effigial Tower Shield", TIER.NEVER), // 60 A, L21
			new Name("Rampart Tower Shield", TIER.NEVER), // 75 A, L28
			new Name("Heraldric Tower Shield", TIER.NEVER), // 85 A, L33
			new Name("Stone Tower Shield", TIER.NEVER), // 91 A, L36
			new Name("Crucible Tower Shield", TIER.NEVER), // 110 A, L45
			new Name("Ancestor Tower Shield", TIER.NEVER), // 121 A, L50
			new Name("Bulwark Tower Shield", TIER.NEVER), // 129 A, L54
			new Name("Noble Tower Shield", TIER.NEVER), // 139 A, L59
			new Name("Goldworked Tower Shield", TIER.NEVER), // 144 A, L61
			new Name("Royal Tower Shield", TIER.NEVER), // 152 A, L65
			new Name("Fortress Tower Shield", TIER.NEVER), // 167 A, L70
			new Name("Vaal Tower Shield", TIER.NEVER), // 182 A, L75

			new Name("Tawhoan Tower Shield", TIER.OTHER), // 197 A, L80

			new Name("Hardwood Targe", TIER.NEVER), // 10 A, 7 V
			new Name("Pelage Targe", TIER.NEVER), // 18 A, 14 V, L8
			new Name("Studded Targe", TIER.NEVER), // 27 A, 23 V, L16
			new Name("Crescent Targe", TIER.NEVER), // 39 A, 34 V, L26
			new Name("Chiseled Targe", TIER.NEVER), // 47 A, 41 V, L33
			new Name("Feathered Targe", TIER.NEVER), // 51 A, 46 V, L37
			new Name("Stratified Targe", TIER.NEVER), // 62 A, 56 V, L46
			new Name("Carved Targe", TIER.NEVER), // 67 A, 61 V, L51
			new Name("Polished Targe", TIER.NEVER), // 71 A, 64 V, L54
			new Name("Stone Targe", TIER.NEVER), // 77 A, 70 V, L59
			new Name("Avian Targe", TIER.NEVER), // 80 A, 73 V, L62
			new Name("Mammoth Targe", TIER.NEVER), // 84 A, 76 V, L65
			new Name("Baroque Targe", TIER.NEVER), // 92 A, 84V, L70
			new Name("Soaring Targe", TIER.NEVER), // 100 A, 91 V, L75
			new Name("Golden Targe", TIER.NEVER), // 109 A, 99 V, L80

			new Name("Blazon Crest Shield", TIER.NEVER), // 10 A, 6 ES
			new Name("Sigil Crest Shield", TIER.NEVER), // 17 A, 8 ES, L7
			new Name("Emblem Crest Shield", TIER.NEVER), // 27 A, 12 ES, L16
			new Name("Jingling Crest Shield", TIER.NEVER), // 41 A, 16 ES, L28
			new Name("Sectarian Crest Shield", TIER.NEVER), // 47 A, 18 ES, L33
			new Name("Omen Crest Shield", TIER.NEVER), // 50 A, 19 ES, L36
			new Name("Wayward Crest Shield", TIER.NEVER), // 61 A, 22 ES, L45
			new Name("Seer Crest Shield", TIER.NEVER), // 66 A, 24 ES, L50
			new Name("Dekharan Crest Shield", TIER.NEVER), // 71 A, 25 ES, L54
			new Name("Quartered Crest Shield", TIER.NEVER), // 77 A, 27 ES, L59
			new Name("Glowering Crest Shield", TIER.NEVER), // 80 A, 28 ES, L62
			new Name("Intricate Crest Shield", TIER.NEVER), // 84 A, 29 ES, L65
			new Name("Sekheman Crest Shield", TIER.NEVER), // 92 A, 32 ES, L70
			new Name("Vaal Crest Shield", TIER.NEVER), // 100 A, 35 ES, L75
			new Name("Blacksteel Crest Shield", TIER.NEVER), // 109 A, 37 ES, L80
		).compare(tier, operator);
	}
	static getArmour(tier, operator = undefined) {
		return new NameManager(
			// https://poe2db.tw/us/Helmets
			new Name("Twig Circlet", TIER.NEVER), // 19 ES
			new Name("Wicker Tiara", TIER.NEVER), // 28 ES, L10
			new Name("Beaded Circlet", TIER.NEVER), // 34 ES, L16
			new Name("Chain Tiara", TIER.NEVER), // 44 ES, L26
			new Name("Feathered Tiara", TIER.NEVER), // 51 ES, L33
			new Name("Gold Circlet", TIER.NEVER), // 58 ES, L40
			new Name("Vermeil Circlet", TIER.NEVER), // 63 ES, L45
			new Name("Jade Tiara", TIER.NEVER), // 69 ES, L50
			new Name("Sandsworn Tiara", TIER.NEVER), // 73 ES, L54
			new Name("Jungle Tiara", TIER.NEVER), // 78 ES, L59
			new Name("Skycrown Tiara", TIER.NEVER), // 84 ES, L65
			new Name("Sorcerous Tiara", TIER.NEVER), // 92 ES, L70
			new Name("Kamasan Tiara", TIER.NEVER), // 101 ES, L75

			new Name("Ancestral Tiara", TIER.CLASS), // 109 ES, L80

			new Name("Rusted Greathelm", TIER.NEVER), // 29 A
			new Name("Soldier Greathelm", TIER.NEVER), // 66 A, L12
			new Name("Wrapped Greathelm", TIER.NEVER), // 79 A, L16
			new Name("Spired Greathelm", TIER.NEVER), // 116 A, L27
			new Name("Elite Greathelm", TIER.NEVER), // 136 A, L33
			new Name("Warrior Greathelm", TIER.NEVER), // 146 A, L36
			new Name("Commander Greathelm", TIER.NEVER), // 176 A, L45
			new Name("Fierce Greathelm", TIER.NEVER), // 196 A, L51
			new Name("Elegant Greathelm", TIER.NEVER), // 206 A, L54
			new Name("Noble Greathelm", TIER.NEVER), // 223 A, L59
			new Name("Warmonger Greathelm", TIER.NEVER), // 243 A, L65
			new Name("Masked Greathelm", TIER.NEVER), // 267 A, L70
			new Name("Paragon Greathelm", TIER.NEVER), // 292 A, L75
			new Name("Imperial Greathelm", TIER.NEVER), // 316 A, L80

			new Name("Shabby Hood", TIER.NEVER), // 19 V
			new Name("Felt Cap", TIER.NEVER), // 48 V, L10
			new Name("Lace Hood", TIER.NEVER), // 67 V, L16
			new Name("Swathed Cap", TIER.NEVER), // 98 V, L26
			new Name("Hunter Hood", TIER.NEVER), // 121 V, L33
			new Name("Viper Cap", TIER.NEVER), // 136 V, L38
			new Name("Corsair Cap", TIER.NEVER), // 158 V, L45
			new Name("Leatherbound Hood", TIER.NEVER), // 174 V, L50
			new Name("Wrapped Cap", TIER.NEVER), // 187 V, L54
			new Name("Deerstalker Hood", TIER.NEVER), // 203 V, L59
			new Name("Woven Cap", TIER.NEVER), // 222 V, L65
			new Name("Desert Cap", TIER.NEVER), // 244 V, L70
			new Name("Trapper Hood", TIER.NEVER), // 266 V, L75
			new Name("Freebooter Cap", TIER.NEVER), // 288 V, L80

			new Name("Brimmed Helm", TIER.NEVER), // 23 A, 18 V, L5
			new Name("Guarded Helm", TIER.NEVER), // 34 A, 28 V, L11
			new Name("Visored Helm", TIER.NEVER), // 44 A, 37 V, L16
			new Name("Cowled Helm", TIER.NEVER), // 62 A, 54 V, L26
			new Name("Shielded Helm", TIER.NEVER), // 75 A, 66 V, L33
			new Name("Closed Helm", TIER.NEVER), // 97 A, 87 V, L45
			new Name("Cabalist Helm", TIER.NEVER), // 113 A, 103 V, L54
			new Name("Warded Helm", TIER.NEVER), // 134 A, 122 V, L65
			new Name("Cryptic Helm", TIER.NEVER), // 147 A, 134 V, L70
			new Name("Champion Helm", TIER.NEVER), // 160 A, 146 V, L75
			new Name("Gladiatorial Helm", TIER.NEVER), // 174 A, 159 V, L80

			new Name("Iron Crown", TIER.NEVER), // 23 A, 12 ES, L5
			new Name("Horned Crown", TIER.NEVER), // 33 A, 15 ES, L10
			new Name("Cultist Crown", TIER.NEVER), // 44 A, 19 ES, L16
			new Name("Martyr Crown", TIER.NEVER), // 66 A, 25 ES, L28
			new Name("Heavy Crown", TIER.NEVER), // 75 A, 28 ES, L33
			new Name("Spiritbone Crown", TIER.NEVER), // 97 A, 35 ES, L45
			new Name("Hallowed Crown", TIER.NEVER), // 113 A, 40 ES, L54
			new Name("Inquisitor Crown", TIER.NEVER), // 123 A, 43 ES, L59
			new Name("Druidic Crown", TIER.NEVER), // 134 A, 46 ES, L65
			new Name("Saintly Crown", TIER.NEVER), // 147 A, 51 ES, L70
			new Name("Divine Crown", TIER.NEVER), // 160 A, 55 ES, L75
			new Name("Cryptic Crown", TIER.NEVER), // 174 A, 60 ES, L80

			new Name("Hewn Mask", TIER.NEVER), // 18 V, 12 ES, L5
			new Name("Face Mask", TIER.NEVER), // 26 V, 15 ES, L10
			new Name("Hooded Mask", TIER.NEVER), // 37 V, 19 ES, L16
			new Name("Veiled Mask", TIER.NEVER), // 58 V, 25 ES, L28
			new Name("Tribal Mask", TIER.NEVER), // 66 V, 28 ES, L33
			new Name("Solid Mask", TIER.NEVER), // 87 V, 35 ES, L45
			new Name("Pariah Mask", TIER.NEVER), // 103 V, 40 ES, L54
			new Name("Avian Mask", TIER.NEVER), // 111 V, 43 ES, L59
			new Name("Brigand Mask", TIER.NEVER), // 122 V, 46 ES, L65
			new Name("Faridun Mask", TIER.NEVER), // 134 V, 51 ES, L70
			new Name("Soaring Mask", TIER.NEVER), // 146 V, 55 ES, L75
			new Name("Grinning Mask", TIER.NEVER), // 159 V, 60 ES, L80

			// https://poe2db.tw/us/Body_Armours#BodyArmoursItem
			new Name("Tattered Robe", TIER.NEVER), // 28 ES
			new Name("Feathered Robe", TIER.NEVER), // 35 ES, L5
			new Name("Hexer's Robe", TIER.NEVER), // 44 ES, L11
			new Name("Bone Raiment", TIER.NEVER), // 52 ES, L16
			new Name("Silk Robe", TIER.NEVER), // 61 ES, L22
			new Name("Keth Raiment", TIER.NEVER), // 70 ES, L28
			new Name("Votive Raiment", TIER.NEVER), // 78 ES, L33
			new Name("Altar Robe", TIER.NEVER), // 89 ES, L40
			new Name("Elementalist Robe", TIER.NEVER), // 97 ES, L45
			new Name("Mystic Raiment", TIER.NEVER), // 103 ES, L49
			new Name("River Raiment", TIER.NEVER), // 111 ES, L54
			new Name("Adherent's Raiment", TIER.NEVER), // 119 ES, L59
			new Name("Ceremonial Robe", TIER.NEVER), /// 123 ES, L62

			new Name("Feathered Raiment", TIER.BAD), /// 153 ES, L80, 5–10% of Damage is taken from Mana before Life
			new Name("Flowing Raiment", TIER.BAD), /// 153 ES, L70, 40–50% increased Mana Regeneration Rate

			new Name("Sacramental Robe", TIER.OTHER), /// 153 ES, L75, 40–50% faster start of Energy Shield Recharge

			new Name("Vile Robe", TIER.CLASS), /// 184 ES, L65

			new Name("Rusted Cuirass", TIER.NEVER), // 45 A
			new Name("Fur Plate", TIER.NEVER), // 60 A, L4
			new Name("Iron Cuirass", TIER.NEVER), // 96 A, L11
			new Name("Raider Plate", TIER.NEVER), // 121 A, L16
			new Name("Maraketh Cuirass", TIER.NEVER), // 141 A, L20
			new Name("Steel Plate", TIER.NEVER), // 177 A, L27
			new Name("Full Plate", TIER.NEVER), // 208 A, L33
			new Name("Vaal Cuirass", TIER.NEVER), // 228 A, L37
			new Name("Juggernaut Plate", TIER.NEVER), // 269 A, L45
			new Name("Chieftain Cuirass", TIER.NEVER), // 294 A, L50
			new Name("Elegant Plate", TIER.NEVER), // 315 A, L54
			new Name("Heavy Plate", TIER.NEVER), // 340 A, L59
			new Name("Stone Cuirass", TIER.NEVER), // 355 A, L62
			new Name("Ornate Plate", TIER.NEVER), // 445 A, L70, Regenerate 1.5–2.5% of maximum Life per second
			new Name("Utzaal Cuirass", TIER.NEVER), // 445 A, L75, 30–40% increased Stun Threshold

			new Name("Soldier Cuirass", TIER.BAD), // 524 A, L65

			new Name("Warlord Cuirass", TIER.OTHER), // 445 A, L80, +15–25% of Armour also applies to Elemental Damage

			new Name("Leather Vest", TIER.NEVER), // 30 V
			new Name("Quilted Vest", TIER.NEVER), // 44 V, L4
			new Name("Pathfinder Coat", TIER.NEVER), // 78 V, L11
			new Name("Shrouded Vest", TIER.NEVER), // 102 V, L16
			new Name("Rhoahide Coat", TIER.NEVER), // 131 V, L22
			new Name("Studded Vest", TIER.NEVER), // 150 V, L26
			new Name("Scout's Vest", TIER.NEVER), // 184 V, L33
			new Name("Serpentscale Coat", TIER.NEVER), // 198 V, L36
			new Name("Corsair Vest", TIER.NEVER), // 242 V, L45
			new Name("Smuggler Coat", TIER.NEVER), // 271 V, L51
			new Name("Layered Vest", TIER.NEVER), // 285 V, L54
			new Name("Runner Vest", TIER.NEVER), // 309 V, L59
			new Name("Lizardscale Coat", TIER.NEVER), // 324 V, L62
			new Name("Swiftstalker Coat", TIER.NEVER), // 406 V, L65, 20–30% reduced Slowing Potency of Debuffs on You
			new Name("Wyrmscale Coat", TIER.NEVER), // 406 V, L75, 30–40% increased Elemental Ailment Threshold

			new Name("Corsair Coat", TIER.BAD), // 406 V, L80, 10–20% reduced Movement Speed Penalty from using Skills while moving

			new Name("Slipstrike Vest", TIER.OTHER), // 487 V, L70

			new Name("Chain Mail", TIER.NEVER), // 25 A, 16 V
			new Name("Rogue Armour", TIER.NEVER), // 53 A, 43 V, L11
			new Name("Vagabond Armour", TIER.NEVER), // 67 A, 56 V, L16
			new Name("Cloaked Mail", TIER.NEVER), // 95 A, 83 V, L26
			new Name("Explorer Armour", TIER.NEVER), // 114 A, 101 V, L33
			new Name("Scale Mail", TIER.NEVER), // 125 A, 112 V, L37
			new Name("Knight Armour", TIER.NEVER), // 148 A, 133 V, L45
			new Name("Ancestral Mail", TIER.NEVER), // 162 A, 146 V, L50
			new Name("Mantled Mail", TIER.NEVER), // 173 A, 157 V, L54
			new Name("Trailblazer Armour", TIER.NEVER), // 187 A, 170 V, L59
			new Name("Golden Mail", TIER.NEVER), // 195 A, 178 V, L62
			new Name("Dastard Armour", TIER.NEVER), // 245 A, 223 V, L65, +60–80 to maximum Life
			new Name("Shrouded Mail", TIER.NEVER), // 245 A, 223 V, L70, +20–25% to Fire/Cold/Lightning Resistance
			new Name("Thane Mail", TIER.NEVER), // 245 A, 223 V, L80, Hits against you have 15–25% reduced Critical Damage Bonus

			new Name("Death Mail", TIER.BAD), // 294 A, 268 V, L75

			new Name("Pilgrim Vestments", TIER.NEVER), // 25 A, 16 ES
			new Name("Pelt Mantle", TIER.NEVER), // 50 A, 23 ES, L10
			new Name("Mail Vestments", TIER.NEVER), // 67 A, 28 ES, L16
			new Name("Shaman Mantle", TIER.NEVER), // 100 A, 39 ES, L28
			new Name("Ironclad Vestments", TIER.NEVER), // 114 A, 43 ES, L33
			new Name("Sacrificial Mantle", TIER.NEVER), // 123 A, 46 ES, L36
			new Name("Cleric Vestments", TIER.NEVER), // 148 A, 53 ES, L45
			new Name("Tideseer Mantle", TIER.NEVER), // 165 A, 58 ES, L51
			new Name("Occultist Mantle", TIER.NEVER), // 173 A, 61 ES, L54
			new Name("Plated Vestments", TIER.NEVER), // 187 A, 65 ES, L59
			new Name("Heartcarver Mantle", TIER.NEVER), // 195 A, 68 ES, L62
			new Name("Wolfskin Mantle", TIER.NEVER), // 294 A, 101 ES, L65
			new Name("Conjurer Mantle", TIER.NEVER), // 245 A, 84 ES, L70, +20–30 to Spirit
			new Name("Death Mantle", TIER.NEVER), // 245 A, 84 ES, L75, +1% to all Maximum Elemental Resistances
			new Name("Seastorm Mantle", TIER.NEVER), // 245 A, 84 ES, L80, 8–14% of Damage taken Recouped as Life

			new Name("Hermit Garb", TIER.NEVER), // 16 V, 16 ES
			new Name("Waxed Jacket", TIER.NEVER), // 43 V, 24 ES, L11
			new Name("Marabout Garb", TIER.NEVER), // 56 V, 28 ES, L16
			new Name("Wayfarer Jacket", TIER.NEVER), // 88 V, 39 ES, L28
			new Name("Anchorite Garb", TIER.NEVER), // 101 V, 43 ES, L33
			new Name("Scalper's Jacket", TIER.NEVER), // 117 V, 48 ES, L39
			new Name("Scoundrel Jacket", TIER.NEVER), // 133 V, 53 ES, L45
			new Name("Ascetic Garb", TIER.NEVER), // 149 V, 58 ES, L51
			new Name("Itinerant Jacket", TIER.NEVER), // 157 V, 61 ES, L54
			new Name("Hatungo Garb", TIER.NEVER), // 170 V, 65 ES, L59
			new Name("Hawker's Jacket", TIER.NEVER), // 178 V, 68 ES, L62
			new Name("Austere Garb", TIER.NEVER), // 223 V, 84 ES, L80, 10–15% reduced Elemental Ailment Duration on you

			new Name("Rambler Jacket", TIER.BAD), // 223 V, 84 ES, L70, +7–13% to Chaos Resistance

			new Name("Sleek Jacket", TIER.OTHER), // 268 V, 101 ES, L65
			new Name("Falconer's Jacket", TIER.OTHER), // 223 V, 84 ES, L75, 5% increased Movement Speed

			// https://poe2db.tw/us/Gloves
			new Name("Torn Gloves", TIER.NEVER), // 9 ES
			new Name("Sombre Gloves", TIER.NEVER), // 15 ES, L12
			new Name("Stitched Gloves", TIER.NEVER), // 17 ES, L16
			new Name("Jewelled Gloves", TIER.NEVER), // 22 ES, L26
			new Name("Intricate Gloves", TIER.NEVER), // 26 ES, L33
			new Name("Pauascale Gloves", TIER.NEVER), // 32 ES, L45
			new Name("Embroidered Gloves", TIER.NEVER), // 35 ES, L52
			new Name("Baroque Gloves", TIER.NEVER), // 36 ES, L54
			new Name("Gold Gloves", TIER.NEVER), // 39 ES, L59
			new Name("Grim Gloves", TIER.NEVER), // 42 ES, L65
			new Name("Opulent Gloves", TIER.NEVER), // 46 ES, L70
			new Name("Vaal Gloves", TIER.NEVER), // 50 ES, L75

			new Name("Sirenscale Gloves", TIER.CLASS), // 54 ES, L80

			new Name("Stocky Mitts", TIER.NEVER), // 15 A
			new Name("Riveted Mitts", TIER.NEVER), // 31 A, L11
			new Name("Tempered Mitts", TIER.NEVER), // 40 A, L16
			new Name("Bolstered Mitts", TIER.NEVER), // 58 A, L27
			new Name("Moulded Mitts", TIER.NEVER), // 68 A, L33
			new Name("Detailed Mitts", TIER.NEVER), // 88 A, L45
			new Name("Ancient Mitts", TIER.NEVER), // 103 A, L54
			new Name("Feathered Mitts", TIER.NEVER), // 111 A, L59
			new Name("Knightly Mitts", TIER.NEVER), // 122 A, L65
			new Name("Ornate Mitts", TIER.NEVER), // 134 A, L70
			new Name("Vaal Mitts", TIER.NEVER), // 146 A, L75

			new Name("Massive Mitts", TIER.BAD), // 158 A, L80

			new Name("Suede Bracers", TIER.NEVER), // 10 V
			new Name("Firm Bracers", TIER.NEVER), // 26 V, L11
			new Name("Bound Bracers", TIER.NEVER), // 33 V, L16
			new Name("Sectioned Bracers", TIER.NEVER), // 52 V, L28
			new Name("Spined Bracers", TIER.NEVER), // 60 V, L33
			new Name("Fine Bracers", TIER.NEVER), // 79 V, L45
			new Name("Refined Bracers", TIER.NEVER), // 93 V, L54
			new Name("Spiked Bracers", TIER.NEVER), // 101 V, L59
			new Name("Stalking Bracers", TIER.NEVER), // 111 V, L65
			new Name("Grand Bracers", TIER.NEVER), // 122 V, L70
			new Name("Barbed Bracers", TIER.NEVER), // 133 V, L75

			new Name("Polished Bracers", TIER.OTHER), // 144 V, L80

			new Name("Ringmail Gauntlets", TIER.NEVER), // 13 A, 10 V, L6
			new Name("Layered Gauntlets", TIER.NEVER), // 22 A, 18 V, L16
			new Name("Doubled Gauntlets", TIER.NEVER), // 37 A, 33 V, L33
			new Name("Plate Gauntlets", TIER.NEVER), // 48 A, 44 V, L45
			new Name("Zealot Gauntlets", TIER.NEVER), // 61 A, 56 V, L59
			new Name("Steelmail Gauntlets", TIER.NEVER), // 67 A, 61 V, L65
			new Name("Commander Gauntlets", TIER.NEVER), // 74 A, 67 V, L70
			new Name("Cultist Gauntlets", TIER.NEVER), // 80 A, 73 V, L75
			new Name("Blacksteel Gauntlets", TIER.NEVER), // 87 A, 79 V, L80

			new Name("Rope Cuffs", TIER.NEVER), // 12 A, 6 ES, L5
			new Name("Aged Cuffs", TIER.NEVER), // 22 A, 9 ES, L16
			new Name("Goldcast Cuffs", TIER.NEVER), // 37 A, 14 ES, L33
			new Name("Verisium Cuffs", TIER.NEVER), // 48 A, 17 ES, L45
			new Name("Ornate Cuffs", TIER.NEVER), // 61 A, 21 ES, L59
			new Name("Bound Cuffs", TIER.NEVER), // 67 A, 23 ES, L65
			new Name("Ancient Cuffs", TIER.NEVER), // 74 A, 25 ES, L70
			new Name("Gleaming Cuffs", TIER.NEVER), // 80 A, 28 ES, L75

			new Name("Adherent Cuffs", TIER.BAD), // 87 A, 30 ES, L80

			new Name("Gauze Wraps", TIER.NEVER), // 8 V, 6 ES, L4
			new Name("Linen Wraps", TIER.NEVER), // 18 V, 9 ES, L16
			new Name("Spiral Wraps", TIER.NEVER), // 33 V, 14 ES, L33
			new Name("Buckled Wraps", TIER.NEVER), // 44 V, 17 ES, L45
			new Name("Adorned Wraps", TIER.NEVER), // 56 V, 21 ES, L59
			new Name("War Wraps", TIER.NEVER), // 61 V, 23 ES, L65
			new Name("Elegant Wraps", TIER.NEVER), // 67 V, 25 ES, L70
			new Name("Vaal Wraps", TIER.NEVER), // 73 V, 28 ES, L75

			new Name("Secured Wraps", TIER.BAD), // 79 V, 30 ES, L80

			// https://poe2db.tw/us/Boots#BootsItem
			new Name("Straw Sandals", TIER.NEVER), // 14 ES
			new Name("Wrapped Sandals", TIER.NEVER), // 22 ES, L11
			new Name("Lattice Sandals", TIER.NEVER), // 25 ES, L16
			new Name("Silk Slippers", TIER.NEVER), // 34 ES, L27
			new Name("Feathered Sandals", TIER.NEVER), // 38 ES, L33
			new Name("Flax Sandals", TIER.NEVER), // 48 ES, L45
			new Name("Elegant Slippers", TIER.NEVER), // 54 ES, L54
			new Name("Dunerunner Sandals", TIER.NEVER), // 58 ES, L59
			new Name("Bound Sandals", TIER.NEVER), // 63 ES, L65
			new Name("Luxurious Slippers", TIER.NEVER), // 69 ES, L70
			new Name("Sandsworn Sandals", TIER.NEVER), // 75 ES, L75

			new Name("Sekhema Sandals", TIER.OTHER), // 82 ES, L80

			new Name("Rough Greaves", TIER.NEVER), // 22 A
			new Name("Iron Greaves", TIER.NEVER), // 47 A, L11
			new Name("Bronze Greaves", TIER.NEVER), // 60 A, L16
			new Name("Trimmed Greaves", TIER.NEVER), // 87 A, L27
			new Name("Stone Greaves", TIER.NEVER), // 102 A, L33
			new Name("Reefsteel Greaves", TIER.NEVER), // 132 A, L45
			new Name("Elegant Greaves", TIER.NEVER), // 155 A, L54
			new Name("Carved Greaves", TIER.NEVER), // 167 A, L59
			new Name("Bulwark Greaves", TIER.NEVER), // 182 A, L65
			new Name("Ornate Greaves", TIER.NEVER), // 200 A, L70
			new Name("Vaal Greaves", TIER.NEVER), // 219 A, L75

			new Name("Tasalian Greaves", TIER.BAD), // 237 A, L80

			new Name("Rawhide Boots", TIER.NEVER), // 15 V
			new Name("Laced Boots", TIER.NEVER), // 38 V, L11
			new Name("Embossed Boots", TIER.NEVER), // 50 V, L16
			new Name("Steeltoe Boots", TIER.NEVER), // 79 V, L28
			new Name("Lizardscale Boots", TIER.NEVER), // 90 V, L33
			new Name("Flared Boots", TIER.NEVER), // 119 V, L45
			new Name("Studded Boots", TIER.NEVER), // 140 V, L54
			new Name("Serpentscale Boots", TIER.NEVER), // 152 V, L59
			new Name("Cinched Boots", TIER.NEVER), // 166 V, L65
			new Name("Cavalry Boots", TIER.NEVER), // 183 V, L70
			new Name("Dragonscale Boots", TIER.NEVER), // 200 V, L75

			new Name("Drakeskin Boots", TIER.OTHER), // 216 V, L80

			new Name("Mail Sabatons", TIER.NEVER), // 19 A, 15 V, L6
			new Name("Braced Sabatons", TIER.NEVER), // 33 A, 28 V, L16
			new Name("Stacked Sabatons", TIER.NEVER), // 56 A, 50 V, L33
			new Name("Covered Sabatons", TIER.NEVER), // 73 A, 65 V, L45
			new Name("Bastion Sabatons", TIER.NEVER), // 92 A, 84 V, L59
			new Name("Veteran Sabatons", TIER.NEVER), // 100 A, 91 V, L65
			new Name("Noble Sabatons", TIER.NEVER), // 110 A, 101 V, L70
			new Name("Fortress Sabatons", TIER.NEVER), // 120 A, 110 V, L75
			new Name("Blacksteel Sabatons", TIER.NEVER), // 130 A, 119 V, L80

			new Name("Padded Leggings", TIER.NEVER), // 18 A, 9 ES, L5
			new Name("Secured Leggings", TIER.NEVER), // 33 A, 14 ES, L16
			new Name("Pelt Leggings", TIER.NEVER), // 56 A, 21 ES, L33
			new Name("Weaver Leggings", TIER.NEVER), // 73 A, 26 ES, L45
			new Name("Shamanistic Leggings", TIER.NEVER), // 92 A, 32 ES, L59
			new Name("Faithful Leggings", TIER.NEVER), // 100 A, 35 ES, L65
			new Name("Apostle Leggings", TIER.NEVER), // 110 A, 38 ES, L70
			new Name("Warlock Leggings", TIER.NEVER), // 120 A, 42 ES, L75

			new Name("Cryptic Leggings", TIER.BAD), // 130 A, 45 ES, L80

			new Name("Frayed Shoes", TIER.NEVER), // 13 V, 9 ES, L5
			new Name("Threaded Shoes", TIER.NEVER), // 28 V, 14 ES, L16
			new Name("Hunting Shoes", TIER.NEVER), // 50 V, 21 ES, L33
			new Name("Steelpoint Shoes", TIER.NEVER), // 65 V, 26 ES, L45
			new Name("Treerunner Shoes", TIER.NEVER), // 84 V, 32 ES, L59
			new Name("Wanderer Shoes", TIER.NEVER), // 91 V, 35 ES, L65
			new Name("Charmed Shoes", TIER.NEVER), // 101 V, 38 ES, L70
			new Name("Quickslip Shoes", TIER.NEVER), // 110 V, 42 ES, L75

			new Name("Daggerfoot Shoes", TIER.OTHER), // 119 V, 45 ES, L80
		).compare(tier, operator);
	}
	static getJewelleryOther() { //TODO
		return new NameManager(
			"Crimson Amulet", // 2-4 life regen
			// "Amber Amulet", // Strength
			// "Jade Amulet", // Dexterity

			"Iron Ring", // +1-4 phys damage to attacks
			"Emerald Ring", // Flat accuracy
			"Unset Ring", // Skill slot
		);
	}
	static getFlasks(tier, operator = undefined) {
		return new NameManager(
			new Name("Lesser Life Flask", TIER.NEVER),
			new Name("Lesser Mana Flask", TIER.NEVER),
			new Name("Medium Life Flask", TIER.NEVER),
			new Name("Medium Mana Flask", TIER.NEVER),
			new Name("Greater Life Flask", TIER.NEVER),
			new Name("Greater Mana Flask", TIER.NEVER),
			new Name("Grand Life Flask", TIER.NEVER),
			new Name("Grand Mana Flask", TIER.NEVER),
			new Name("Giant Life Flask", TIER.NEVER),
			new Name("Giant Mana Flask", TIER.NEVER),
			new Name("Colossal Life Flask", TIER.NEVER),
			new Name("Colossal Mana Flask", TIER.NEVER),
			new Name("Gargantuan Life Flask", TIER.NEVER),
			new Name("Gargantuan Mana Flask", TIER.NEVER),
			new Name("Transcendent Life Flask", TIER.NEVER),
			new Name("Transcendent Mana Flask", TIER.NEVER),

			new Name("Ultimate Life Flask", TIER.CLASS),
			new Name("Ultimate Mana Flask", TIER.CLASS),
		).compare(tier, operator);
	}

	// Inclusive of min, exclusive of max
	range(min = null, max = null) {
		let names = this.names.filter((name) => {
			let passMin = true;
			if (min !== null) passMin = name.value === null || name.value >= min;

			let passMax = true;
			if (max !== null) passMax = name.value === null || name.value < max;

			return passMin && passMax;
		});
		return new NameManager(...names);
	}

	compare(value, operator = OPERATOR.EXACT) {
		let names = this.names.filter((name) => {
			switch (operator) {
				case OPERATOR.EQUAL:
					return name.value.contains(value);
				case OPERATOR.NE:
					return name.value !== value;
				case OPERATOR.LTE:
					return name.value <= value;
				case OPERATOR.GTE:
					return name.value >= value;
				case OPERATOR.LT:
					return name.value < value;
				case OPERATOR.GT:
					return name.value > value;
				case OPERATOR.EXACT:
					return name.value === value;
				default:
					console.error("ERR NameManager#compare() received unknown operator:");
					console.error(operator);
					throw new Error();
			}
		});
		return new NameManager(...names);
	}

	export() {
		this.names.sort((a, b) => a.compare(b));
		return new StringList(
			...this.names.map(name => name.name)
		);
	}
}
export const TIER = NameManager.TIER;
