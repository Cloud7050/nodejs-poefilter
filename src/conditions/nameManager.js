import { DIV, Name } from "./name.js";
import { StringList } from "./stringList.js";

export class NameManager {
	static TIER = {
		BAD: -1,
		OTHER: 0,
		CLASS: 1,
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
		).filter(min, max);
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
		).filter(min, max);
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

		).filter(min, max);
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
		).filter(min, max);
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
		).filter(min, max);
	}

	static getEssences4(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Essence of Insanity", 1.5),

			new Name("Essence of Delirium", 46),
			new Name("Essence of the Abyss", 54),
			new Name("Essence of Hysteria", 500),

			new Name("Essence of Horror", 3 * DIV),
		).filter(min, max);
	}

	static getAbyss1(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Gnawed Jawbone", 1 / 20),
			new Name("Gnawed Rib", 1 / 20),
			new Name("Gnawed Collarbone", 1 / 2),
		).filter(min, max);
	}
	static getAbyss2(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Preserved Jawbone", 1 / 100),
			new Name("Preserved Rib", 1 / 50),

			new Name("Preserved Collarbone", 1.4),
		).filter(min, max);
	}
	static getAbyss3(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Preserved Vertebrae", 3.6),
			new Name("Preserved Cranium", 10),

			new Name("Ancient Rib", 1.5 * DIV),
			new Name("Ancient Jawbone", 3 * DIV),
			new Name("Ancient Collarbone", 6 * DIV),
		).filter(min, max);
	}

	static getEmotions1(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Diluted Liquid Ire", 1 / 3),

			new Name("Diluted Liquid Greed", 1.5),
			new Name("Diluted Liquid Guilt", 4.17),
		).filter(min, max);
	}
	static getEmotions2(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Liquid Envy", 2.57),
			new Name("Liquid Paranoia", 4.1),
			new Name("Liquid Despair", 4.17),
			new Name("Liquid Disgust", 15.56),
		).filter(min, max);
	}
	static getEmotions3(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Concentrated Liquid Suffering", 30),
			new Name("Concentrated Liquid Fear", 40),
			new Name("Concentrated Liquid Isolation", 85),
		).filter(min, max);
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
		).filter(min, max);
	}

	static getSplinters(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Breach Splinter", 1 / 9),

			new Name("Petition Splinter", 1.29),
			new Name("Simulacrum Splinter", 1.85),
			new Name("Runic Splinter", 6.7),
		).filter(min, max);
	}

	static getArtifacts(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Order Artifact", 1 / 40), // Armour
			new Name("Broken Circle Artifact", 1 / 38), // Weapons

			new Name("Black Scythe Artifact", 1 / 4), // Jewellery/belts
			new Name("Sun Artifact", 1 / 4), // Wildcard
		).filter(min, max);
	}
	static getCoinage(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Exotic Coinage", 2),
		).filter(min, max);
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
		).filter(min, max);
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
		).filter(min, max);
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
		).filter(min, max);
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
		).filter(min, max);
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
		).filter(min, max);
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
		).filter(min, max);
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
		).filter(min, max);
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
		).filter(min, max);
	}

	static getMain(tier) {
		return new NameManager(
			// https://poe2db.tw/us/Sceptres#SceptresItem
			new Name("Omen Sceptre", TIER.BAD), // Malice
			new Name("Wrath Sceptre", TIER.BAD), // Fulmination

			new Name("Shrine Sceptre", TIER.OTHER), // Purity of Fire/Ice/Lightning
			new Name("Stoic Sceptre", TIER.OTHER), // Discipline

			new Name("Rattling Sceptre", TIER.CLASS), // Skeletal Warrior

			// https://poe2db.tw/us/Wands#WandsItem
			new Name("Bone Wand", TIER.BAD), // Bone Blast
			new Name("Volatile Wand", TIER.BAD), // Volatile Dead
			new Name("Withered Wand", TIER.BAD), // Chaos Bolt
			new Name("Attuned Wand", TIER.BAD), // Mana Drain

			new Name("Siphoning Wand", TIER.OTHER), // Power Siphon
			new Name("Galvanic Wand", TIER.OTHER), // Galvanic Field
			new Name("Dueling Wand", TIER.OTHER), // Spellslinger

			// https://poe2db.tw/us/Staves#StavesItem
			new Name("Ashen Staff", TIER.BAD), // Firebolt
			new Name("Gelid Staff", TIER.BAD), // Freezing Shards
			new Name("Pyrophyte Staff", TIER.BAD), // Solar Orb
			new Name("Voltaic Staff", TIER.BAD), // Lightning Bolt
			new Name("Roaring Staff", TIER.BAD), // Unleash
			new Name("Paralysing Staff", TIER.BAD), // Enervating Nova
			new Name("Sanctified Staff", TIER.BAD), // Consecrate
			new Name("Reaping Staff", TIER.BAD), // Reap

			new Name("Chiming Staff", TIER.OTHER), // Sigil of Power

			// https://poe2db.tw/us/One_Hand_Maces#OneHandMacesItem
			new Name("Wooden Club", TIER.BAD), // 6-10 phys, 5% cc, x1.45
			new Name("Smithing Hammer", TIER.BAD), // 5.5-9 phys, 5.5-9 fire, 5% cc, x1.45, L4
			new Name("Slim Mace", TIER.BAD), // 11-17 phys, 5% cc, x1.55, L10
			new Name("Spiked Club", TIER.BAD), // 15-24 phys, 5% cc, x1.45, L16
			new Name("Warpick",  TIER.BAD), // 18-24 phys, 7% cc, x1.45, L22
			new Name("Plated Mace", TIER.BAD), // 18-38 phys, 5% cc, x1.4, L26
			new Name("Brigand Mace", TIER.BAD), // 28-38 phys, 5% cc, x1.45, L33
			new Name("Construct Hammer", TIER.BAD), // 31-38 phys, 5% cc, x1.4, L36, 40% chance to Daze on Hit
			new Name("Morning Star", TIER.BAD), // 33-49 phys, 6.5% cc, x1.45, L45
			new Name("Jade Club", TIER.BAD), // 31-51 phys, 5% cc, x1.45, L49, Always Hits
			new Name("Marching Mace", TIER.BAD), // 33-69 phys, 5% cc, x1.4, L54
			new Name("Bandit Mace", TIER.BAD), // 45-61 phys, 5% cc, x1.45, L59
			new Name("Structured Hammer", TIER.BAD), // 49-60 phys, 5% cc, x1.4, L62, 40% chance to Daze on Hit
			new Name("Flanged Mace", TIER.BAD), // 45-67 phys, 5% cc, x1.55, L67
			new Name("Crown Mace", TIER.BAD), // 43-89 phys, 5% cc, x1.4, L72
			new Name("Molten Hammer", TIER.BAD), // 35.5-59 phys, 35.5-59 fire, 5% cc, x1.45, L77
			new Name("Marauding Mace", TIER.BAD), // 51-84 phys, 5% cc, x1.45, L77
			new Name("Strife Pick", TIER.BAD), // 49-66 phys, 7% cc, x1.45, L78, +5–10% to Critical Damage Bonus
			new Name("Fortified Hammer", TIER.BAD), // 60-73 phys, 5% cc, x1.4, L79, 40% chance to Daze on Hit

			new Name("Akoyan Club", TIER.OTHER), // 46-76 phys, 5% cc, x1.45, L78, Always Hits

			// https://poe2db.tw/us/Spears#SpearsItem
			new Name("Hardwood Spear", TIER.BAD), // 5-9 phys, 5% cc, x1.6
			new Name("Ironhead Spear", TIER.BAD), // 7-13 phys, 5% cc, x1.6, L5
			new Name("Hunting Spear", TIER.BAD), // 10-18 phys, 5% cc, x1.55, L10, 15–25% chance to Maim on Hit
			new Name("Winged Spear", TIER.BAD), // 12-22 phys, 5% cc, x1.65, L16
			new Name("War Spear", TIER.BAD), // 14-26 phys, 5% cc, x1.6, L21, 25–35% increased Projectile Speed with this Weapon
			new Name("Forked Spear", TIER.BAD), // 17-32 phys, 5% cc, x1.6, L26
			new Name("Barbed Spear", TIER.BAD), // 20-38 phys, 6.5% cc, x1.6, L33
			new Name("Broad Spear", TIER.BAD), // 26-48 phys, 5% cc, x1.5, L40
			new Name("Crossblade Spear", TIER.BAD), // 28-51 phys, 5% cc, x1.55, L45
			new Name("Seaglass Spear", TIER.BAD), // 31-57 phys, 7% cc, x1.5, L51
			new Name("Branched Spear", TIER.BAD), // 31-58 phys, 5% cc, x1.6, L54
			new Name("Jagged Spear", TIER.BAD), // 33-61 phys, 6.5% cc, x1.6, L59
			new Name("Helix Spear", TIER.BAD), // 37-68 phys, 5% cc, x1.6, L65
			new Name("Orichalcum Spear", TIER.BAD), // 38-70 phys, 5% cc, x1.6, L67
			new Name("Pronged Spear", TIER.BAD), // 40-75 phys, 5% cc, x1.6, L72
			new Name("Stalking Spear", TIER.BAD), // 44-82 phys, 5% cc, x1.55, L77, 15–25% chance to Maim on Hit

			new Name("Spiked Spear", TIER.OTHER), // 41-76 phys, 6.5% cc, x1.6, L77
			new Name("Flying Spear", TIER.OTHER), // 41-76 phys, 5% cc, x1.6, L78, 25–35% increased Projectile Speed with this Weapon
			new Name("Akoyan Spear", TIER.OTHER), // 43-80 phys, 7% cc, x1.5, L78
			new Name("Grand Spear", TIER.OTHER), // 46-85 phys, 5% cc, x1.5, L79

			// https://poe2db.tw/us/Bows#BowsItem
			new Name("Crude Bow", TIER.BAD), // 6-9 phys, x1.2
			new Name("Shortbow", TIER.BAD), // 7-14 phys, x1.25, L5
			new Name("Warden Bow", TIER.BAD), // 12-18 phys, x1.15, L11, 20–30% chance to Chain an additional time
			new Name("Recurve Bow", TIER.BAD), // 15-31 phys, x1.1, L16
			new Name("Composite Bow", TIER.BAD), // 19-31 phys, x1.2, L22
			new Name("Dualstring Bow", TIER.BAD), // 16-31 phys, x1.1, L28, Bow Attacks fire an additional Arrow
			new Name("Cultist Bow", TIER.BAD), // 10-17 phys, 19-37 chaos, x1.2, L33
			new Name("Zealot Bow", TIER.BAD), // 31-47 phys, x1.2, L39
			new Name("Artillery Bow", TIER.BAD), // 39-72 phys, x1.15, L45, 50% reduced Projectile Range
			new Name("Tribal Bow", TIER.BAD), // 38-57 phys, x1.2, L50
			new Name("Twin Bow", TIER.BAD), // 32-60 phys, x1.1, L54, Bow Attacks fire an additional Arrow
			new Name("Adherent Bow", TIER.BAD), // 21-34 phys, 31-59 chaos, x1.2, L59
			new Name("Militant Bow", TIER.BAD), // 46-69 phys, x1.2, L62
			new Name("Ironwood Shortbow", TIER.BAD), // 41-76 phys, x1.25, L67
			new Name("Cavalry Bow", TIER.BAD), // 49-82 phys, x1.2, L72
			new Name("Guardian Bow", TIER.BAD), // 53-80 phys, x1.15, L77, 20–30% chance to Chain an additional time
			new Name("Fanatic Bow", TIER.BAD), // 42-70 phys, 43-71 chaos, x1.2, L79

			new Name("Warmonger Bow", TIER.OTHER), // 56-84 phys, x1.2, L77
			new Name("Obliterator Bow", TIER.OTHER), // 62-115 phys, x1.15, L78, 50% reduced Projectile Range
			new Name("Gemini Bow", TIER.OTHER), // 39-72 phys, x1.1, L78, Bow Attacks fire an additional Arrow

			// https://poe2db.tw/us/Crossbows#CrossbowsItem
			new Name("Makeshift Crossbow", TIER.BAD), // 7-12 phys, 5% cc, x1.6, r0.8
			new Name("Tense Crossbow", TIER.BAD), // 8-15 phys, 5% cc, x1.6, r0.85, L4, 20–30% increased Bolt Speed
			new Name("Sturdy Crossbow", TIER.BAD), // 11-26 phys, 5% cc, x1.55, r0.75, L10
			new Name("Varnished Crossbow", TIER.BAD), // 12-36 phys, 5% cc, x1.6, r0.8, L16
			new Name("Dyad Crossbow", TIER.BAD), // 9-37 phys, 5% cc, x1.6, r1.1, L20, Loads an additional bolt
			new Name("Alloy Crossbow", TIER.BAD), // 12-50 phys, 5% cc, x1.7, r0.7, L26
			new Name("Bombard Crossbow", TIER.BAD), // 14-56 phys, 5% cc, x1.65, r0.75, L33, Grenade Skills Fire an additional Projectile
			new Name("Construct Crossbow", TIER.BAD), // 18-72 phys, 5% cc, x1.6, r0.8, L38
			new Name("Blackfire Crossbow", TIER.BAD), // 20-80 phys, 7% cc, x1.6, r0.85, L45
			new Name("Piercing Crossbow", TIER.BAD), // 21-84 phys, 5% cc, x1.65, r0.85, L50, 20–30% chance to Pierce an Enemy
			new Name("Twin Crossbow", TIER.BAD), // 20-82 phys, 5% cc, x1.6, r1.1, L54, Loads an additional bolt
			new Name("Cannonade Crossbow", TIER.BAD), // 23-90 phys, 5% cc, x1.65, r0.75, L59, Grenade Skills Fire an additional Projectile
			new Name("Bleak Crossbow", TIER.BAD), // 27-109 phys, 5% cc, x1.6, r0.8, L62
			new Name("Stout Crossbow", TIER.BAD), // 30-119 phys, 5% cc, x1.55, r0.75, L67
			new Name("Engraved Crossbow", TIER.BAD), // 31-124 phys, 5% cc, x1.6, r0.8, L72
			new Name("Flexed Crossbow", TIER.BAD), // 32-127 phys, 5% cc, x1.6, r0.85, L77, 20–30% increased Bolt Speed
			new Name("Elegant Crossbow", TIER.BAD), // 31-123 phys, 5% cc, x1.65, r0.85, L78, 20–30% chance to Pierce an Enemy

			new Name("Desolate Crossbow", TIER.OTHER), // 33-132 phys, 5% cc, x1.6, r0.8, L77
			new Name("Gemini Crossbow", TIER.OTHER), // 28-112 phys, 5% cc, x1.6, r1.1, L78, Loads an additional bolt
			new Name("Siege Crossbow", TIER.OTHER), // 29-115 phys, 5% cc, x1.65, r0.75, L79, Grenade Skills Fire an additional Projectile

			// https://poe2db.tw/us/Quarterstaves#QuarterstavesItem
			new Name("Wrapped Quarterstaff", TIER.BAD), // 7-12 phys, 10% cc, x1.4
			new Name("Long Quarterstaff", TIER.BAD), // 9-18 phys, 10% cc, x1.4, L4, 16% increased Melee Strike Range with this weapon
			new Name("Gothic Quarterstaff", TIER.BAD), // 16-26 phys, 11.5% cc, x1.4, L11
			new Name("Crackling Quarterstaff", TIER.BAD), // 5-22 phys, 1-35 lightning, 10% cc, x1.4, L16
			new Name("Crescent Quarterstaff", TIER.BAD), // 19-39 phys, 10% cc, x1.5, L20
			new Name("Steelpoint Quarterstaff", TIER.BAD), // 28-51 phys, 10% cc, x1.4, L28
			new Name("Slicing Quarterstaff", TIER.BAD), // 29-60 phys, 10% cc, x1.4, L33
			new Name("Barrier Quarterstaff", TIER.BAD), // 33-55 phys, 10% cc, x1.4, L37, +10–15% to Block chance
			new Name("Hefty Quarterstaff", TIER.BAD), // 39-80 phys, 10% cc, x1.35, L45
			new Name("Smooth Quarterstaff", TIER.BAD), // 64-87 phys, 0% cc, x1.5, L49
			new Name("Waxing Quarterstaff", TIER.BAD), // 39-82 phys, 10% cc, x1.5, L54
			new Name("Bladed Quarterstaff", TIER.BAD), // 45-94 phys, 10% cc, x1.4, L59
			new Name("Guardian Quarterstaff", TIER.BAD), // 49-82 phys, 10% cc, x1.4, L62, +10–15% to Block chance
			new Name("Sinister Quarterstaff", TIER.BAD), // 55-92 phys, 11.5% cc, x1.4, L67
			new Name("Lunar Quarterstaff", TIER.BAD), // 50-103 phys, 10% cc, x1.5, L72
			new Name("Striking Quarterstaff", TIER.BAD), // 53-111 phys, 10% cc, x1.4, L77, 16% increased Melee Strike Range with this weapon
			new Name("Aegis Quarterstaff", TIER.BAD), // 58-97 phys, 10% cc, x1.4, L79, +10–15% to Block chance

			new Name("Razor Quarterstaff", TIER.OTHER), // 65-108 phys, 10% cc, x1.4, L77
			new Name("Dreaming Quarterstaff", TIER.OTHER), // 99-133 phys, 0% cc, x1.5, L78
			new Name("Bolting Quarterstaff", TIER.OTHER), // 24-97 phys, 1-100 lightning, 10% cc, x1.4, L78

			// https://poe2db.tw/us/Two_Hand_Maces#TwoHandMacesItem
			new Name("Felled Greatclub", TIER.BAD), // 13-18 phys, 5% cc, x1.1
			new Name("Oak Greathammer", TIER.BAD), // 14-26 phys, 5% cc, x1.05, L4, Causes 30–50% increased Stun Buildup
			new Name("Forge Maul", TIER.BAD), // 29-39 phys, 5% cc, x1.05, L11
			new Name("Studded Greatclub", TIER.BAD), // 32-48 phys, 5% cc, x1.1, L16
			new Name("Cultist Greathammer", TIER.BAD), // 32-43 phys, 5% cc, x1.05, L22, Strikes deal Splash damage to targets within 1.5 metres
			new Name("Temple Maul", TIER.BAD), // 35-72 phys, 5% cc, x1.2, L28
			new Name("Leaden Greathammer", TIER.BAD), // 58-78 phys, 5% cc, x1.1, L33
			new Name("Crumbling Maul", TIER.BAD), // 62-75 phys, 5% cc, x1.1, L38, Causes Enemies to Explode on Critical kill, for 10% of their Life as Physical Damage
			new Name("Pointed Maul", TIER.BAD), // 68-102 phys, 6.5% cc, x1.1, L45
			new Name("Totemic Greatclub", TIER.BAD), // 73-99 phys, 5% cc, x1.1, L50, Crushes Enemies on Hit
			new Name("Solemn Maul", TIER.BAD), // 59-123 phys, 5% cc, x1.2, L54
			new Name("Heavy Greathammer", TIER.BAD), // 94-127 phys, 5% cc, x1.1, L59
			new Name("Disintegrating Maul", TIER.BAD), // 93-114 phys, 5% cc, x1.1, L62, Causes Enemies to Explode on Critical kill, for 10% of their Life as Physical Damage
			new Name("Anvil Maul", TIER.BAD), // 112-151 phys, 5% cc, x1.05, L67
			new Name("Sacred Maul", TIER.BAD), // 76-158 phys, 5% cc, x1.2, L72
			new Name("Fanatic Greathammer", TIER.BAD), // 89-120 phys, 5% cc, x1.05, L78, Strikes deal Splash damage to targets within 1.5 metres
			new Name("Ruination Maul", TIER.BAD), // 113-138 phys, 5% cc, x1.1, L79, Causes Enemies to Explode on Critical kill, for 10% of their Life as Physical Damage

			new Name("Ironwood Greathammer", TIER.OTHER), // 94-174 phys, 5% cc, x1.05, L77, Causes 30–50% increased Stun Buildup
			new Name("Massive Greathammer", TIER.OTHER), // 119-161 phys, 5% cc, x1.1, L77
			new Name("Tawhoan Greatclub", TIER.OTHER), // 107-145 phys, 5% cc, x1.1, L78, Crushes Enemies on Hit
		).exact(tier);
	}
	static getOff(tier) {
		return new NameManager(
			// https://poe2db.tw/us/Foci#FociItem
			new Name("Twig Focus", TIER.BAD), // 12 ES
			new Name("Woven Focus", TIER.BAD), // 15 ES, L6
			new Name("Antler Focus", TIER.BAD), // 17 ES, L10
			new Name("Engraved Focus", TIER.BAD), // 21 ES, L16
			new Name("Tonal Focus", TIER.BAD), // 25 ES, L22
			new Name("Crystal Focus", TIER.BAD), // 28 ES, L26
			new Name("Voodoo Focus", TIER.BAD), // 32 ES, L33
			new Name("Plumed Focus", TIER.BAD), // 34 ES, L36
			new Name("Runed Focus", TIER.BAD), // 40 ES, L45
			new Name("Whorl Focus", TIER.BAD), // 43 ES, L51
			new Name("Arrayed Focus", TIER.BAD), // 45 ES, L54
			new Name("Cultist Focus", TIER.BAD), // 49 ES, L59
			new Name("Hallowed Focus", TIER.BAD), // 50 ES, L61
			new Name("Druidic Focus", TIER.BAD), // 52 ES, L65
			new Name("Leyline Focus", TIER.BAD), // 58 ES, L70
			new Name("Sacred Focus", TIER.BAD), // 63 ES, L75

			new Name("Tasalian Focus", TIER.CLASS), // 68 ES, L80

			// https://poe2db.tw/us/Quivers#QuiversItem
			new Name("Fire Quiver", TIER.BAD), // L8, Adds 3 to 5 Fire damage to Attacks
			new Name("Sacral Quiver", TIER.BAD), // L16, Gain 2–3 Life per Enemy Hit with Attacks
			new Name("Two-Point Quiver", TIER.BAD), // L24, 20–30% increased Accuracy Rating
			new Name("Blunt Quiver", TIER.BAD), // L33, 25–40% increased Stun Buildup
			new Name("Toxic Quiver", TIER.BAD), // L39, 20–30% chance to Poison on Hit with Attacks
			new Name("Serrated Quiver", TIER.BAD), // L44, Attacks have 20–30% chance to cause Bleeding
			new Name("Penetrating Quiver", TIER.BAD), // L55, 100% chance to Pierce an Enemy

			new Name("Broadhead Quiver", TIER.OTHER), // Adds 1 to 3 Physical Damage to Attacks
			new Name("Primed Quiver", TIER.OTHER), // L51, 7–10% increased Attack Speed
			new Name("Volant Quiver", TIER.OTHER), // L61, 20–30% increased Arrow Speed
			new Name("Visceral Quiver", TIER.OTHER), // L65, 20–30% increased Critical Hit Chance for Attacks

			// https://poe2db.tw/us/Bucklers#BucklersItem
			new Name("Leather Buckler", TIER.BAD), // 10 V
			new Name("Wooden Buckler", TIER.BAD), // 16 V, L5
			new Name("Plated Buckler", TIER.BAD), // 26 V, L11
			new Name("Iron Buckler", TIER.BAD), // 33 V, L16
			new Name("Ridged Buckler", TIER.BAD), // 43 V, L22
			new Name("Spiked Buckler", TIER.BAD), // 49 V, L26
			new Name("Ringed Buckler", TIER.BAD), // 60 V, L33
			new Name("Edged Buckler", TIER.BAD), // 70 V, L39
			new Name("Laminate Buckler", TIER.BAD), // 79 V, L45
			new Name("Pearl Buckler", TIER.BAD), // 87 V, L50
			new Name("Ornate Buckler", TIER.BAD), // 90 V, L52
			new Name("Spikeward Buckler", TIER.BAD), // 93 V, L54
			new Name("Jingling Buckler", TIER.BAD), // 101 V, L59
			new Name("Bladeguard Buckler", TIER.BAD), // 105 V, L61
			new Name("Ornate Buckler", TIER.BAD), // 111 V, L65
			new Name("Gutspike Buckler", TIER.BAD), // 122 V, L70
			new Name("Ancient Buckler", TIER.BAD), // 133 V, L75
			new Name("Desert Buckler", TIER.BAD), // 144 V, L80

			// https://poe2db.tw/us/Shields#ShieldsItem
			new Name("Splintered Tower Shield", TIER.BAD), // 18 A
			new Name("Painted Tower Shield", TIER.BAD), // 29 A, L6
			new Name("Braced Tower Shield", TIER.BAD), // 41 A, L12
			new Name("Barricade Tower Shield", TIER.BAD), // 50 A, L16
			new Name("Effigial Tower Shield", TIER.BAD), // 60 A, L21
			new Name("Rampart Tower Shield", TIER.BAD), // 75 A, L28
			new Name("Heraldric Tower Shield", TIER.BAD), // 85 A, L33
			new Name("Stone Tower Shield", TIER.BAD), // 91 A, L36
			new Name("Crucible Tower Shield", TIER.BAD), // 110 A, L45
			new Name("Ancestor Tower Shield", TIER.BAD), // 121 A, L50
			new Name("Bulwark Tower Shield", TIER.BAD), // 129 A, L54
			new Name("Noble Tower Shield", TIER.BAD), // 139 A, L59
			new Name("Goldworked Tower Shield", TIER.BAD), // 144 A, L61
			new Name("Royal Tower Shield", TIER.BAD), // 152 A, L65
			new Name("Fortress Tower Shield", TIER.BAD), // 167 A, L70
			new Name("Vaal Tower Shield", TIER.BAD), // 182 A, L75

			new Name("Tawhoan Tower Shield", TIER.OTHER), // 197 A, L80

			new Name("Hardwood Targe", TIER.BAD), // 10 A, 7 V
			new Name("Pelage Targe", TIER.BAD), // 18 A, 14 V, L8
			new Name("Studded Targe", TIER.BAD), // 27 A, 23 V, L16
			new Name("Crescent Targe", TIER.BAD), // 39 A, 34 V, L26
			new Name("Chiseled Targe", TIER.BAD), // 47 A, 41 V, L33
			new Name("Feathered Targe", TIER.BAD), // 51 A, 46 V, L37
			new Name("Stratified Targe", TIER.BAD), // 62 A, 56 V, L46
			new Name("Carved Targe", TIER.BAD), // 67 A, 61 V, L51
			new Name("Polished Targe", TIER.BAD), // 71 A, 64 V, L54
			new Name("Stone Targe", TIER.BAD), // 77 A, 70 V, L59
			new Name("Avian Targe", TIER.BAD), // 80 A, 73 V, L62
			new Name("Mammoth Targe", TIER.BAD), // 84 A, 76 V, L65
			new Name("Baroque Targe", TIER.BAD), // 92 A, 84V, L70
			new Name("Soaring Targe", TIER.BAD), // 100 A, 91 V, L75
			new Name("Golden Targe", TIER.BAD), // 109 A, 99 V, L80

			new Name("Blazon Crest Shield", TIER.BAD), // 10 A, 6 ES
			new Name("Sigil Crest Shield", TIER.BAD), // 17 A, 8 ES, L7
			new Name("Emblem Crest Shield", TIER.BAD), // 27 A, 12 ES, L16
			new Name("Jingling Crest Shield", TIER.BAD), // 41 A, 16 ES, L28
			new Name("Sectarian Crest Shield", TIER.BAD), // 47 A, 18 ES, L33
			new Name("Omen Crest Shield", TIER.BAD), // 50 A, 19 ES, L36
			new Name("Wayward Crest Shield", TIER.BAD), // 61 A, 22 ES, L45
			new Name("Seer Crest Shield", TIER.BAD), // 66 A, 24 ES, L50
			new Name("Dekharan Crest Shield", TIER.BAD), // 71 A, 25 ES, L54
			new Name("Quartered Crest Shield", TIER.BAD), // 77 A, 27 ES, L59
			new Name("Glowering Crest Shield", TIER.BAD), // 80 A, 28 ES, L62
			new Name("Intricate Crest Shield", TIER.BAD), // 84 A, 29 ES, L65
			new Name("Sekheman Crest Shield", TIER.BAD), // 92 A, 32 ES, L70
			new Name("Vaal Crest Shield", TIER.BAD), // 100 A, 35 ES, L75
			new Name("Blacksteel Crest Shield", TIER.BAD), // 109 A, 37 ES, L80
		).exact(tier);
	}
	static getArmour(tier) {
		return new NameManager(
			// https://poe2db.tw/us/Helmets
			new Name("Twig Circlet", TIER.BAD), // 19 ES
			new Name("Wicker Tiara", TIER.BAD), // 28 ES, L10
			new Name("Beaded Circlet", TIER.BAD), // 34 ES, L16
			new Name("Chain Tiara", TIER.BAD), // 44 ES, L26
			new Name("Feathered Tiara", TIER.BAD), // 51 ES, L33
			new Name("Gold Circlet", TIER.BAD), // 58 ES, L40
			new Name("Vermeil Circlet", TIER.BAD), // 63 ES, L45
			new Name("Jade Tiara", TIER.BAD), // 69 ES, L50
			new Name("Sandsworn Tiara", TIER.BAD), // 73 ES, L54
			new Name("Jungle Tiara", TIER.BAD), // 78 ES, L59
			new Name("Skycrown Tiara", TIER.BAD), // 84 ES, L65
			new Name("Sorcerous Tiara", TIER.BAD), // 92 ES, L70
			new Name("Kamasan Tiara", TIER.BAD), // 101 ES, L75

			new Name("Ancestral Tiara", TIER.CLASS), // 109 ES, L80

			new Name("Rusted Greathelm", TIER.BAD), // 29 A
			new Name("Soldier Greathelm", TIER.BAD), // 66 A, L12
			new Name("Wrapped Greathelm", TIER.BAD), // 79 A, L16
			new Name("Spired Greathelm", TIER.BAD), // 116 A, L27
			new Name("Elite Greathelm", TIER.BAD), // 136 A, L33
			new Name("Warrior Greathelm", TIER.BAD), // 146 A, L36
			new Name("Commander Greathelm", TIER.BAD), // 176 A, L45
			new Name("Fierce Greathelm", TIER.BAD), // 196 A, L51
			new Name("Elegant Greathelm", TIER.BAD), // 206 A, L54
			new Name("Noble Greathelm", TIER.BAD), // 223 A, L59
			new Name("Warmonger Greathelm", TIER.BAD), // 243 A, L65
			new Name("Masked Greathelm", TIER.BAD), // 267 A, L70
			new Name("Paragon Greathelm", TIER.BAD), // 292 A, L75
			new Name("Imperial Greathelm", TIER.BAD), // 316 A, L80

			new Name("Shabby Hood", TIER.BAD), // 19 V
			new Name("Felt Cap", TIER.BAD), // 48 V, L10
			new Name("Lace Hood", TIER.BAD), // 67 V, L16
			new Name("Swathed Cap", TIER.BAD), // 98 V, L26
			new Name("Hunter Hood", TIER.BAD), // 121 V, L33
			new Name("Viper Cap", TIER.BAD), // 136 V, L38
			new Name("Corsair Cap", TIER.BAD), // 158 V, L45
			new Name("Leatherbound Hood", TIER.BAD), // 174 V, L50
			new Name("Wrapped Cap", TIER.BAD), // 187 V, L54
			new Name("Deerstalker Hood", TIER.BAD), // 203 V, L59
			new Name("Woven Cap", TIER.BAD), // 222 V, L65
			new Name("Desert Cap", TIER.BAD), // 244 V, L70
			new Name("Trapper Hood", TIER.BAD), // 266 V, L75
			new Name("Freebooter Cap", TIER.BAD), // 288 V, L80

			new Name("Brimmed Helm", TIER.BAD), // 23 A, 18 V, L5
			new Name("Guarded Helm", TIER.BAD), // 34 A, 28 V, L11
			new Name("Visored Helm", TIER.BAD), // 44 A, 37 V, L16
			new Name("Cowled Helm", TIER.BAD), // 62 A, 54 V, L26
			new Name("Shielded Helm", TIER.BAD), // 75 A, 66 V, L33
			new Name("Closed Helm", TIER.BAD), // 97 A, 87 V, L45
			new Name("Cabalist Helm", TIER.BAD), // 113 A, 103 V, L54
			new Name("Warded Helm", TIER.BAD), // 134 A, 122 V, L65
			new Name("Cryptic Helm", TIER.BAD), // 147 A, 134 V, L70
			new Name("Champion Helm", TIER.BAD), // 160 A, 146 V, L75
			new Name("Gladiatorial Helm", TIER.BAD), // 174 A, 159 V, L80

			new Name("Iron Crown", TIER.BAD), // 23 A, 12 ES, L5
			new Name("Horned Crown", TIER.BAD), // 33 A, 15 ES, L10
			new Name("Cultist Crown", TIER.BAD), // 44 A, 19 ES, L16
			new Name("Martyr Crown", TIER.BAD), // 66 A, 25 ES, L28
			new Name("Heavy Crown", TIER.BAD), // 75 A, 28 ES, L33
			new Name("Spiritbone Crown", TIER.BAD), // 97 A, 35 ES, L45
			new Name("Hallowed Crown", TIER.BAD), // 113 A, 40 ES, L54
			new Name("Inquisitor Crown", TIER.BAD), // 123 A, 43 ES, L59
			new Name("Druidic Crown", TIER.BAD), // 134 A, 46 ES, L65
			new Name("Saintly Crown", TIER.BAD), // 147 A, 51 ES, L70
			new Name("Divine Crown", TIER.BAD), // 160 A, 55 ES, L75
			new Name("Cryptic Crown", TIER.BAD), // 174 A, 60 ES, L80

			new Name("Hewn Mask", TIER.BAD), // 18 V, 12 ES, L5
			new Name("Face Mask", TIER.BAD), // 26 V, 15 ES, L10
			new Name("Hooded Mask", TIER.BAD), // 37 V, 19 ES, L16
			new Name("Veiled Mask", TIER.BAD), // 58 V, 25 ES, L28
			new Name("Tribal Mask", TIER.BAD), // 66 V, 28 ES, L33
			new Name("Solid Mask", TIER.BAD), // 87 V, 35 ES, L45
			new Name("Pariah Mask", TIER.BAD), // 103 V, 40 ES, L54
			new Name("Avian Mask", TIER.BAD), // 111 V, 43 ES, L59
			new Name("Brigand Mask", TIER.BAD), // 122 V, 46 ES, L65
			new Name("Faridun Mask", TIER.BAD), // 134 V, 51 ES, L70
			new Name("Soaring Mask", TIER.BAD), // 146 V, 55 ES, L75
			new Name("Grinning Mask", TIER.BAD), // 159 V, 60 ES, L80

			// https://poe2db.tw/us/Body_Armours#BodyArmoursItem
			new Name("Tattered Robe", TIER.BAD), // 28 ES
			new Name("Feathered Robe", TIER.BAD), // 35 ES, L5
			new Name("Hexer's Robe", TIER.BAD), // 44 ES, L11
			new Name("Bone Raiment", TIER.BAD), // 52 ES, L16
			new Name("Silk Robe", TIER.BAD), // 61 ES, L22
			new Name("Keth Raiment", TIER.BAD), // 70 ES, L28
			new Name("Votive Raiment", TIER.BAD), // 78 ES, L33
			new Name("Altar Robe", TIER.BAD), // 89 ES, L40
			new Name("Elementalist Robe", TIER.BAD), // 97 ES, L45
			new Name("Mystic Raiment", TIER.BAD), // 103 ES, L49
			new Name("River Raiment", TIER.BAD), // 111 ES, L54
			new Name("Adherent's Raiment", TIER.BAD), // 119 ES, L59
			new Name("Ceremonial Robe", TIER.BAD), /// 123 ES, L62

			new Name("Feathered Raiment", TIER.OTHER), /// 153 ES, L80, 5–10% of Damage is taken from Mana before Life

			new Name("Vile Robe", TIER.CLASS), /// 184 ES, L65
			new Name("Flowing Raiment", TIER.CLASS), /// 153 ES, L70, 40–50% increased Mana Regeneration Rate
			new Name("Sacramental Robe", TIER.CLASS), /// 153 ES, L75, 40–50% faster start of Energy Shield Recharge

			new Name("Rusted Cuirass", TIER.BAD), // 45 A
			new Name("Fur Plate", TIER.BAD), // 60 A, L4
			new Name("Iron Cuirass", TIER.BAD), // 96 A, L11
			new Name("Raider Plate", TIER.BAD), // 121 A, L16
			new Name("Maraketh Cuirass", TIER.BAD), // 141 A, L20
			new Name("Steel Plate", TIER.BAD), // 177 A, L27
			new Name("Full Plate", TIER.BAD), // 208 A, L33
			new Name("Vaal Cuirass", TIER.BAD), // 228 A, L37
			new Name("Juggernaut Plate", TIER.BAD), // 269 A, L45
			new Name("Chieftain Cuirass", TIER.BAD), // 294 A, L50
			new Name("Elegant Plate", TIER.BAD), // 315 A, L54
			new Name("Heavy Plate", TIER.BAD), // 340 A, L59
			new Name("Stone Cuirass", TIER.BAD), // 355 A, L62
			new Name("Ornate Plate", TIER.BAD), // 445 A, L70, Regenerate 1.5–2.5% of maximum Life per second
			new Name("Utzaal Cuirass", TIER.BAD), // 445 A, L75, 30–40% increased Stun Threshold

			new Name("Soldier Cuirass", TIER.OTHER), // 524 A, L65
			new Name("Warlord Cuirass", TIER.OTHER), // 445 A, L80, +15–25% of Armour also applies to Elemental Damage

			new Name("Leather Vest", TIER.BAD), // 30 V
			new Name("Quilted Vest", TIER.BAD), // 44 V, L4
			new Name("Pathfinder Coat", TIER.BAD), // 78 V, L11
			new Name("Shrouded Vest", TIER.BAD), // 102 V, L16
			new Name("Rhoahide Coat", TIER.BAD), // 131 V, L22
			new Name("Studded Vest", TIER.BAD), // 150 V, L26
			new Name("Scout's Vest", TIER.BAD), // 184 V, L33
			new Name("Serpentscale Coat", TIER.BAD), // 198 V, L36
			new Name("Corsair Vest", TIER.BAD), // 242 V, L45
			new Name("Smuggler Coat", TIER.BAD), // 271 V, L51
			new Name("Layered Vest", TIER.BAD), // 285 V, L54
			new Name("Runner Vest", TIER.BAD), // 309 V, L59
			new Name("Lizardscale Coat", TIER.BAD), // 324 V, L62
			new Name("Swiftstalker Coat", TIER.BAD), // 406 V, L65, 20–30% reduced Slowing Potency of Debuffs on You
			new Name("Wyrmscale Coat", TIER.BAD), // 406 V, L75, 30–40% increased Elemental Ailment Threshold
			new Name("Corsair Coat", TIER.BAD), // 406 V, L80, 10–20% reduced Movement Speed Penalty from using Skills while moving

			new Name("Slipstrike Vest", TIER.OTHER), // 487 V, L70

			new Name("Chain Mail", TIER.BAD), // 25 A, 16 V
			new Name("Rogue Armour", TIER.BAD), // 53 A, 43 V, L11
			new Name("Vagabond Armour", TIER.BAD), // 67 A, 56 V, L16
			new Name("Cloaked Mail", TIER.BAD), // 95 A, 83 V, L26
			new Name("Explorer Armour", TIER.BAD), // 114 A, 101 V, L33
			new Name("Scale Mail", TIER.BAD), // 125 A, 112 V, L37
			new Name("Knight Armour", TIER.BAD), // 148 A, 133 V, L45
			new Name("Ancestral Mail", TIER.BAD), // 162 A, 146 V, L50
			new Name("Mantled Mail", TIER.BAD), // 173 A, 157 V, L54
			new Name("Trailblazer Armour", TIER.BAD), // 187 A, 170 V, L59
			new Name("Golden Mail", TIER.BAD), // 195 A, 178 V, L62
			new Name("Dastard Armour", TIER.BAD), // 245 A, 223 V, L65, +60–80 to maximum Life
			new Name("Shrouded Mail", TIER.BAD), // 245 A, 223 V, L70, +20–25% to Fire/Cold/Lightning Resistance
			new Name("Death Mail", TIER.BAD), // 294 A, 268 V, L75
			new Name("Thane Mail", TIER.BAD), // 245 A, 223 V, L80, Hits against you have 15–25% reduced Critical Damage Bonus

			new Name("Pilgrim Vestments", TIER.BAD), // 25 A, 16 ES
			new Name("Pelt Mantle", TIER.BAD), // 50 A, 23 ES, L10
			new Name("Mail Vestments", TIER.BAD), // 67 A, 28 ES, L16
			new Name("Shaman Mantle", TIER.BAD), // 100 A, 39 ES, L28
			new Name("Ironclad Vestments", TIER.BAD), // 114 A, 43 ES, L33
			new Name("Sacrificial Mantle", TIER.BAD), // 123 A, 46 ES, L36
			new Name("Cleric Vestments", TIER.BAD), // 148 A, 53 ES, L45
			new Name("Tideseer Mantle", TIER.BAD), // 165 A, 58 ES, L51
			new Name("Occultist Mantle", TIER.BAD), // 173 A, 61 ES, L54
			new Name("Plated Vestments", TIER.BAD), // 187 A, 65 ES, L59
			new Name("Heartcarver Mantle", TIER.BAD), // 195 A, 68 ES, L62
			new Name("Wolfskin Mantle", TIER.BAD), // 294 A, 101 ES, L65
			new Name("Conjurer Mantle", TIER.BAD), // 245 A, 84 ES, L70, +20–30 to Spirit
			new Name("Death Mantle", TIER.BAD), // 245 A, 84 ES, L75, +1% to all Maximum Elemental Resistances
			new Name("Seastorm Mantle", TIER.BAD), // 245 A, 84 ES, L80, 8–14% of Damage taken Recouped as Life

			new Name("Hermit Garb", TIER.BAD), // 16 V, 16 ES
			new Name("Waxed Jacket", TIER.BAD), // 43 V, 24 ES, L11
			new Name("Marabout Garb", TIER.BAD), // 56 V, 28 ES, L16
			new Name("Wayfarer Jacket", TIER.BAD), // 88 V, 39 ES, L28
			new Name("Anchorite Garb", TIER.BAD), // 101 V, 43 ES, L33
			new Name("Scalper's Jacket", TIER.BAD), // 117 V, 48 ES, L39
			new Name("Scoundrel Jacket", TIER.BAD), // 133 V, 53 ES, L45
			new Name("Ascetic Garb", TIER.BAD), // 149 V, 58 ES, L51
			new Name("Itinerant Jacket", TIER.BAD), // 157 V, 61 ES, L54
			new Name("Hatungo Garb", TIER.BAD), // 170 V, 65 ES, L59
			new Name("Hawker's Jacket", TIER.BAD), // 178 V, 68 ES, L62
			new Name("Rambler Jacket", TIER.BAD), // 223 V, 84 ES, L70, +7–13% to Chaos Resistance
			new Name("Austere Garb", TIER.BAD), // 223 V, 84 ES, L80, 10–15% reduced Elemental Ailment Duration on you

			new Name("Sleek Jacket", TIER.OTHER), // 268 V, 101 ES, L65
			new Name("Falconer's Jacket", TIER.OTHER), // 223 V, 84 ES, L75, 5% increased Movement Speed

			// https://poe2db.tw/us/Gloves
			new Name("Torn Gloves", TIER.BAD), // 9 ES
			new Name("Sombre Gloves", TIER.BAD), // 15 ES, L12
			new Name("Stitched Gloves", TIER.BAD), // 17 ES, L16
			new Name("Jewelled Gloves", TIER.BAD), // 22 ES, L26
			new Name("Intricate Gloves", TIER.BAD), // 26 ES, L33
			new Name("Pauascale Gloves", TIER.BAD), // 32 ES, L45
			new Name("Embroidered Gloves", TIER.BAD), // 35 ES, L52
			new Name("Baroque Gloves", TIER.BAD), // 36 ES, L54
			new Name("Gold Gloves", TIER.BAD), // 39 ES, L59
			new Name("Grim Gloves", TIER.BAD), // 42 ES, L65
			new Name("Opulent Gloves", TIER.BAD), // 46 ES, L70
			new Name("Vaal Gloves", TIER.BAD), // 50 ES, L75

			new Name("Sirenscale Gloves", TIER.CLASS), // 54 ES, L80

			new Name("Stocky Mitts", TIER.BAD), // 15 A
			new Name("Riveted Mitts", TIER.BAD), // 31 A, L11
			new Name("Tempered Mitts", TIER.BAD), // 40 A, L16
			new Name("Bolstered Mitts", TIER.BAD), // 58 A, L27
			new Name("Moulded Mitts", TIER.BAD), // 68 A, L33
			new Name("Detailed Mitts", TIER.BAD), // 88 A, L45
			new Name("Ancient Mitts", TIER.BAD), // 103 A, L54
			new Name("Feathered Mitts", TIER.BAD), // 111 A, L59
			new Name("Knightly Mitts", TIER.BAD), // 122 A, L65
			new Name("Ornate Mitts", TIER.BAD), // 134 A, L70
			new Name("Vaal Mitts", TIER.BAD), // 146 A, L75

			new Name("Massive Mitts", TIER.OTHER), // 158 A, L80

			new Name("Suede Bracers", TIER.BAD), // 10 V
			new Name("Firm Bracers", TIER.BAD), // 26 V, L11
			new Name("Bound Bracers", TIER.BAD), // 33 V, L16
			new Name("Sectioned Bracers", TIER.BAD), // 52 V, L28
			new Name("Spined Bracers", TIER.BAD), // 60 V, L33
			new Name("Fine Bracers", TIER.BAD), // 79 V, L45
			new Name("Refined Bracers", TIER.BAD), // 93 V, L54
			new Name("Spiked Bracers", TIER.BAD), // 101 V, L59
			new Name("Stalking Bracers", TIER.BAD), // 111 V, L65
			new Name("Grand Bracers", TIER.BAD), // 122 V, L70
			new Name("Barbed Bracers", TIER.BAD), // 133 V, L75

			new Name("Polished Bracers", TIER.OTHER), // 144 V, L80

			new Name("Ringmail Gauntlets", TIER.BAD), // 13 A, 10 V, L6
			new Name("Layered Gauntlets", TIER.BAD), // 22 A, 18 V, L16
			new Name("Doubled Gauntlets", TIER.BAD), // 37 A, 33 V, L33
			new Name("Plate Gauntlets", TIER.BAD), // 48 A, 44 V, L45
			new Name("Zealot Gauntlets", TIER.BAD), // 61 A, 56 V, L59
			new Name("Steelmail Gauntlets", TIER.BAD), // 67 A, 61 V, L65
			new Name("Commander Gauntlets", TIER.BAD), // 74 A, 67 V, L70
			new Name("Cultist Gauntlets", TIER.BAD), // 80 A, 73 V, L75
			new Name("Blacksteel Gauntlets", TIER.BAD), // 87 A, 79 V, L80

			new Name("Rope Cuffs", TIER.BAD), // 12 A, 6 ES, L5
			new Name("Aged Cuffs", TIER.BAD), // 22 A, 9 ES, L16
			new Name("Goldcast Cuffs", TIER.BAD), // 37 A, 14 ES, L33
			new Name("Verisium Cuffs", TIER.BAD), // 48 A, 17 ES, L45
			new Name("Ornate Cuffs", TIER.BAD), // 61 A, 21 ES, L59
			new Name("Bound Cuffs", TIER.BAD), // 67 A, 23 ES, L65
			new Name("Ancient Cuffs", TIER.BAD), // 74 A, 25 ES, L70
			new Name("Gleaming Cuffs", TIER.BAD), // 80 A, 28 ES, L75
			new Name("Adherent Cuffs", TIER.BAD), // 87 A, 30 ES, L80

			new Name("Gauze Wraps", TIER.BAD), // 8 V, 6 ES, L4
			new Name("Linen Wraps", TIER.BAD), // 18 V, 9 ES, L16
			new Name("Spiral Wraps", TIER.BAD), // 33 V, 14 ES, L33
			new Name("Buckled Wraps", TIER.BAD), // 44 V, 17 ES, L45
			new Name("Adorned Wraps", TIER.BAD), // 56 V, 21 ES, L59
			new Name("War Wraps", TIER.BAD), // 61 V, 23 ES, L65
			new Name("Elegant Wraps", TIER.BAD), // 67 V, 25 ES, L70
			new Name("Vaal Wraps", TIER.BAD), // 73 V, 28 ES, L75

			new Name("Secured Wraps", TIER.OTHER), // 79 V, 30 ES, L80

			// https://poe2db.tw/us/Boots#BootsItem
			new Name("Straw Sandals", TIER.BAD), // 14 ES
			new Name("Wrapped Sandals", TIER.BAD), // 22 ES, L11
			new Name("Lattice Sandals", TIER.BAD), // 25 ES, L16
			new Name("Silk Slippers", TIER.BAD), // 34 ES, L27
			new Name("Feathered Sandals", TIER.BAD), // 38 ES, L33
			new Name("Flax Sandals", TIER.BAD), // 48 ES, L45
			new Name("Elegant Slippers", TIER.BAD), // 54 ES, L54
			new Name("Dunerunner Sandals", TIER.BAD), // 58 ES, L59
			new Name("Bound Sandals", TIER.BAD), // 63 ES, L65
			new Name("Luxurious Slippers", TIER.BAD), // 69 ES, L70
			new Name("Sandsworn Sandals", TIER.BAD), // 75 ES, L75

			new Name("Sekhema Sandals", TIER.OTHER), // 82 ES, L80

			new Name("Rough Greaves", TIER.BAD), // 22 A
			new Name("Iron Greaves", TIER.BAD), // 47 A, L11
			new Name("Bronze Greaves", TIER.BAD), // 60 A, L16
			new Name("Trimmed Greaves", TIER.BAD), // 87 A, L27
			new Name("Stone Greaves", TIER.BAD), // 102 A, L33
			new Name("Reefsteel Greaves", TIER.BAD), // 132 A, L45
			new Name("Elegant Greaves", TIER.BAD), // 155 A, L54
			new Name("Carved Greaves", TIER.BAD), // 167 A, L59
			new Name("Bulwark Greaves", TIER.BAD), // 182 A, L65
			new Name("Ornate Greaves", TIER.BAD), // 200 A, L70
			new Name("Vaal Greaves", TIER.BAD), // 219 A, L75
			new Name("Tasalian Greaves", TIER.BAD), // 237 A, L80

			new Name("Rawhide Boots", TIER.BAD), // 15 V
			new Name("Laced Boots", TIER.BAD), // 38 V, L11
			new Name("Embossed Boots", TIER.BAD), // 50 V, L16
			new Name("Steeltoe Boots", TIER.BAD), // 79 V, L28
			new Name("Lizardscale Boots", TIER.BAD), // 90 V, L33
			new Name("Flared Boots", TIER.BAD), // 119 V, L45
			new Name("Studded Boots", TIER.BAD), // 140 V, L54
			new Name("Serpentscale Boots", TIER.BAD), // 152 V, L59
			new Name("Cinched Boots", TIER.BAD), // 166 V, L65
			new Name("Cavalry Boots", TIER.BAD), // 183 V, L70
			new Name("Dragonscale Boots", TIER.BAD), // 200 V, L75
			new Name("Drakeskin Boots", TIER.BAD), // 216 V, L80

			new Name("Mail Sabatons", TIER.BAD), // 19 A, 15 V, L6
			new Name("Braced Sabatons", TIER.BAD), // 33 A, 28 V, L16
			new Name("Stacked Sabatons", TIER.BAD), // 56 A, 50 V, L33
			new Name("Covered Sabatons", TIER.BAD), // 73 A, 65 V, L45
			new Name("Bastion Sabatons", TIER.BAD), // 92 A, 84 V, L59
			new Name("Veteran Sabatons", TIER.BAD), // 100 A, 91 V, L65
			new Name("Noble Sabatons", TIER.BAD), // 110 A, 101 V, L70
			new Name("Fortress Sabatons", TIER.BAD), // 120 A, 110 V, L75
			new Name("Blacksteel Sabatons", TIER.BAD), // 130 A, 119 V, L80

			new Name("Padded Leggings", TIER.BAD), // 18 A, 9 ES, L5
			new Name("Secured Leggings", TIER.BAD), // 33 A, 14 ES, L16
			new Name("Pelt Leggings", TIER.BAD), // 56 A, 21 ES, L33
			new Name("Weaver Leggings", TIER.BAD), // 73 A, 26 ES, L45
			new Name("Shamanistic Leggings", TIER.BAD), // 92 A, 32 ES, L59
			new Name("Faithful Leggings", TIER.BAD), // 100 A, 35 ES, L65
			new Name("Apostle Leggings", TIER.BAD), // 110 A, 38 ES, L70
			new Name("Warlock Leggings", TIER.BAD), // 120 A, 42 ES, L75
			new Name("Cryptic Leggings", TIER.BAD), // 130 A, 45 ES, L80

			new Name("Frayed Shoes", TIER.BAD), // 13 V, 9 ES, L5
			new Name("Threaded Shoes", TIER.BAD), // 28 V, 14 ES, L16
			new Name("Hunting Shoes", TIER.BAD), // 50 V, 21 ES, L33
			new Name("Steelpoint Shoes", TIER.BAD), // 65 V, 26 ES, L45
			new Name("Treerunner Shoes", TIER.BAD), // 84 V, 32 ES, L59
			new Name("Wanderer Shoes", TIER.BAD), // 91 V, 35 ES, L65
			new Name("Charmed Shoes", TIER.BAD), // 101 V, 38 ES, L70
			new Name("Quickslip Shoes", TIER.BAD), // 110 V, 42 ES, L75

			new Name("Daggerfoot Shoes", TIER.OTHER), // 119 V, 45 ES, L80
		).exact(tier);
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
	static getFlasks(tier) {
		return new NameManager(
			new Name("Lesser Life Flask", TIER.BAD),
			new Name("Lesser Mana Flask", TIER.BAD),
			new Name("Medium Life Flask", TIER.BAD),
			new Name("Medium Mana Flask", TIER.BAD),
			new Name("Greater Life Flask", TIER.BAD),
			new Name("Greater Mana Flask", TIER.BAD),
			new Name("Grand Life Flask", TIER.BAD),
			new Name("Grand Mana Flask", TIER.BAD),
			new Name("Giant Life Flask", TIER.BAD),
			new Name("Giant Mana Flask", TIER.BAD),
			new Name("Colossal Life Flask", TIER.BAD),
			new Name("Colossal Mana Flask", TIER.BAD),
			new Name("Gargantuan Life Flask", TIER.BAD),
			new Name("Gargantuan Mana Flask", TIER.BAD),
			new Name("Transcendent Life Flask", TIER.BAD),
			new Name("Transcendent Mana Flask", TIER.BAD),

			new Name("Ultimate Life Flask", TIER.CLASS),
			new Name("Ultimate Mana Flask", TIER.CLASS),
		).exact(tier);
	}

	// Inclusive of min, exclusive of max
	filter(min = null, max = null) {
		let names = this.names.filter((name) => {
			let passMin = true;
			if (min !== null) passMin = name.value === null || name.value >= min;

			let passMax = true;
			if (max !== null) passMax = name.value === null || name.value < max;

			return passMin && passMax;
		});
		return new NameManager(...names);
	}

	exact(value) {
		let names = this.names.filter((name) => name.value === value);
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
