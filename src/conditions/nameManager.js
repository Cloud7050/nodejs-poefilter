import { DIV, Name } from "./name.js";
import { StringList } from "./stringList.js";

export class NameManager {
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

	static getMainClassOther() {
		return new NameManager(
			// https://poe2db.tw/us/Sceptres#SceptresItem
			"Stoic Sceptre", // Discipline
			"Omen Sceptre", // Malice
			"Wrath Sceptre", // Fulmination
		);
	}
	static getMainClassBad() {
		return new NameManager(
			// https://poe2db.tw/us/Sceptres#SceptresItem
			"Shrine Sceptre", // Purity of Fire/Ice/Lightning
		);
	}
	static getOffClassBad() {
		return new NameManager(
			// https://poe2db.tw/us/Foci#FociItem
			"Twig Focus", // 12 ES
			"Woven Focus", // 15 ES, L6
			"Antler Focus", // 17 ES, L10
			"Engraved Focus", // 21 ES, L16
			"Tonal Focus", // 25 ES, L22
			"Crystal Focus", // 28 ES, L26
			"Voodoo Focus", // 32 ES, L33
			"Plumed Focus", // 34 ES, L36
			"Runed Focus", // 40 ES, L45
			"Whorl Focus", // 43 ES, L51
			"Arrayed Focus", // 45 ES, L54
			"Cultist Focus", // 49 ES, L59
			"Hallowed Focus", // 50 ES, L61
			"Druidic Focus", // 52 ES, L65
			"Leyline Focus", // 58 ES, L70
			"Sacred Focus", // 63 ES, L75
			// "Tasalian Focus", // 68 ES, L80
		);
	}
	static getMainOtherBad() {
		return new NameManager(
			// https://poe2db.tw/us/Wands#WandsItem
			// "Withered Wand", // Chaos Bolt
			"Bone Wand", // Bone Blast
			// "Attuned Wand", // Mana Drain
			// "Siphoning Wand", // Power Siphon
			"Volatile Wand", // Volatile Dead
			// "Galvanic Wand", // Galvanic Field
			// "Dueling Wand", // Spellslinger

			// https://poe2db.tw/us/Staves#StavesItem
			"Ashen Staff", // Firebolt
			"Gelid Staff", // Freezing Shards
			// "Voltaic Staff", // Lightning Bolt
			"Pyrophyte Staff", // Solar Orb
			// "Chiming Staff", // Sigil of Power
			// "Reaping Staff", // Reap
			// "Roaring Staff", // Unleash
			// "Paralysing Staff", // Enervating Nova
			// "Sanctified Staff", // Consecrate

			// https://poe2db.tw/us/One_Hand_Maces#OneHandMacesItem
			"Wooden Club", // 6-10 phys, 5% cc, x1.45
			"Smithing Hammer", // 5.5-9 phys, 5.5-9 fire, 5% cc, x1.45, L4
			"Slim Mace", // 11-17 phys, 5% cc, x1.55, L10
			"Spiked Club", // 15-24 phys, 5% cc, x1.45, L16
			"Warpick", // 18-24 phys, 7% cc, x1.45, L22
			"Plated Mace", // 18-38 phys, 5% cc, x1.4, L26
			"Brigand Mace", // 28-38 phys, 5% cc, x1.45, L33
			"Construct Hammer", // 31-38 phys, 5% cc, x1.4, L36, 40% chance to Daze on Hit
			"Morning Star", // 33-49 phys, 6.5% cc, x1.45, L45
			"Jade Club", // 31-51 phys, 5% cc, x1.45, L49, Always Hits
			"Marching Mace", // 33-69 phys, 5% cc, x1.4, L54
			"Bandit Mace", // 45-61 phys, 5% cc, x1.45, L59
			"Structured Hammer", // 49-60 phys, 5% cc, x1.4, L62, 40% chance to Daze on Hit
			"Flanged Mace", // 45-67 phys, 5% cc, x1.55, L67
			"Crown Mace", // 43-89 phys, 5% cc, x1.4, L72
			"Molten Hammer", // 35.5-59 phys, 35.5-59 fire, 5% cc, x1.45, L77
			// "Marauding Mace", // 51-84 phys, 5% cc, x1.45, L77
			// "Strife Pick", // 49-66 phys, 7% cc, x1.45, L78, +5–10% to Critical Damage Bonus
			// "Akoyan Club", // 46-76 phys, 5% cc, x1.45, L78, Always Hits
			// "Fortified Hammer", // 60-73 phys, 5% cc, x1.4, L79, 40% chance to Daze on Hit

			// https://poe2db.tw/us/Spears#SpearsItem
			"Hardwood Spear", // 5-9 phys, 5% cc, x1.6
			"Ironhead Spear", // 7-13 phys, 5% cc, x1.6, L5
			"Hunting Spear", // 10-18 phys, 5% cc, x1.55, L10, 15–25% chance to Maim on Hit
			"Winged Spear", // 12-22 phys, 5% cc, x1.65, L16
			"War Spear", // 14-26 phys, 5% cc, x1.6, L21, 25–35% increased Projectile Speed with this Weapon
			"Forked Spear", // 17-32 phys, 5% cc, x1.6, L26
			"Barbed Spear", // 20-38 phys, 6.5% cc, x1.6, L33
			"Broad Spear", // 26-48 phys, 5% cc, x1.5, L40
			"Crossblade Spear", // 28-51 phys, 5% cc, x1.55, L45
			"Seaglass Spear", // 31-57 phys, 7% cc, x1.5, L51
			"Branched Spear", // 31-58 phys, 5% cc, x1.6, L54
			"Jagged Spear", // 33-61 phys, 6.5% cc, x1.6, L59
			"Helix Spear", // 37-68 phys, 5% cc, x1.6, L65
			"Orichalcum Spear", // 38-70 phys, 5% cc, x1.6, L67
			"Pronged Spear", // 40-75 phys, 5% cc, x1.6, L72
			// "Spiked Spear", // 41-76 phys, 6.5% cc, x1.6, L77
			// "Stalking Spear", // 44-82 phys, 5% cc, x1.55, L77, 15–25% chance to Maim on Hit
			// "Akoyan Spear", // 43-80 phys, 7% cc, x1.5, L78
			// "Flying Spear", // 41-76 phys, 5% cc, x1.6, L78, 25–35% increased Projectile Speed with this Weapon
			// "Grand Spear", // 46-85 phys, 5% cc, x1.5, L79

			// https://poe2db.tw/us/Bows#BowsItem
			"Crude Bow", // 6-9 phys, x1.2
			"Shortbow", // 7-14 phys, x1.25, L5
			"Warden Bow", // 12-18 phys, x1.15, L11, 20–30% chance to Chain an additional time
			"Recurve Bow", // 15-31 phys, x1.1, L16
			"Composite Bow", // 19-31 phys, x1.2, L22
			"Dualstring Bow", // 16-31 phys, x1.1, L28, Bow Attacks fire an additional Arrow
			"Cultist Bow", // 10-17 phys, 19-37 chaos, x1.2, L33
			"Zealot Bow", // 31-47 phys, x1.2, L39
			"Artillery Bow", // 39-72 phys, x1.15, L45, 50% reduced Projectile Range
			"Tribal Bow", // 38-57 phys, x1.2, L50
			"Twin Bow", // 32-60 phys, x1.1, L54, Bow Attacks fire an additional Arrow
			"Adherent Bow", // 21-34 phys, 31-59 chaos, x1.2, L59
			"Militant Bow", // 46-69 phys, x1.2, L62
			"Ironwood Shortbow", // 41-76 phys, x1.25, L67
			"Cavalry Bow", // 49-82 phys, x1.2, L72
			// "Guardian Bow", // 53-80 phys, x1.15, L77, 20–30% chance to Chain an additional time
			// "Warmonger Bow", // 56-84 phys, x1.2, L77
			// "Obliterator Bow", // 62-115 phys, x1.15, L78, 50% reduced Projectile Range
			// "Gemini Bow", // 39-72 phys, x1.1, L78, Bow Attacks fire an additional Arrow
			// "Fanatic Bow", // 42-70 phys, 43-71 chaos, x1.2, L79

			// https://poe2db.tw/us/Crossbows#CrossbowsItem
			"Makeshift Crossbow", // 7-12 phys, 5% cc, x1.6, r0.8
			"Tense Crossbow", // 8-15 phys, 5% cc, x1.6, r0.85, L4, 20–30% increased Bolt Speed
			"Sturdy Crossbow", // 11-26 phys, 5% cc, x1.55, r0.75, L10
			"Varnished Crossbow", // 12-36 phys, 5% cc, x1.6, r0.8, L16
			"Dyad Crossbow", // 9-37 phys, 5% cc, x1.6, r1.1, L20, Loads an additional bolt
			"Alloy Crossbow", // 12-50 phys, 5% cc, x1.7, r0.7, L26
			"Bombard Crossbow", // 14-56 phys, 5% cc, x1.65, r0.75, L33, Grenade Skills Fire an additional Projectile
			"Construct Crossbow", // 18-72 phys, 5% cc, x1.6, r0.8, L38
			"Blackfire Crossbow", // 20-80 phys, 7% cc, x1.6, r0.85, L45
			"Piercing Crossbow", // 21-84 phys, 5% cc, x1.65, r0.85, L50, 20–30% chance to Pierce an Enemy
			"Twin Crossbow", // 20-82 phys, 5% cc, x1.6, r1.1, L54, Loads an additional bolt
			"Cannonade Crossbow", // 23-90 phys, 5% cc, x1.65, r0.75, L59, Grenade Skills Fire an additional Projectile
			"Bleak Crossbow", // 27-109 phys, 5% cc, x1.6, r0.8, L62
			"Stout Crossbow", // 30-119 phys, 5% cc, x1.55, r0.75, L67
			"Engraved Crossbow", // 31-124 phys, 5% cc, x1.6, r0.8, L72
			// "Flexed Crossbow", // 32-127 phys, 5% cc, x1.6, r0.85, L77, 20–30% increased Bolt Speed
			// "Desolate Crossbow", // 33-132 phys, 5% cc, x1.6, r0.8, L77
			// "Gemini Crossbow", // 28-112 phys, 5% cc, x1.6, r1.1, L78, Loads an additional bolt
			// "Elegant Crossbow", // 31-123 phys, 5% cc, x1.65, r0.85, L78, 20–30% chance to Pierce an Enemy
			// "Siege Crossbow", // 29-115 phys, 5% cc, x1.65, r0.75, L79, Grenade Skills Fire an additional Projectile

			// https://poe2db.tw/us/Quarterstaves#QuarterstavesItem
			"Wrapped Quarterstaff", // 7-12 phys, 10% cc, x1.4
			"Long Quarterstaff", // 9-18 phys, 10% cc, x1.4, L4, 16% increased Melee Strike Range with this weapon
			"Gothic Quarterstaff", // 16-26 phys, 11.5% cc, x1.4, L11
			"Crackling Quarterstaff", // 5-22 phys, 1-35 lightning, 10% cc, x1.4, L16
			"Crescent Quarterstaff", // 19-39 phys, 10% cc, x1.5, L20
			"Steelpoint Quarterstaff", // 28-51 phys, 10% cc, x1.4, L28
			"Slicing Quarterstaff", // 29-60 phys, 10% cc, x1.4, L33
			"Barrier Quarterstaff", // 33-55 phys, 10% cc, x1.4, L37, +10–15% to Block chance
			"Hefty Quarterstaff", // 39-80 phys, 10% cc, x1.35, L45
			"Smooth Quarterstaff", // 64-87 phys, 0% cc, x1.5, L49
			"Waxing Quarterstaff", // 39-82 phys, 10% cc, x1.5, L54
			"Bladed Quarterstaff", // 45-94 phys, 10% cc, x1.4, L59
			"Guardian Quarterstaff", // 49-82 phys, 10% cc, x1.4, L62, +10–15% to Block chance
			"Sinister Quarterstaff", // 55-92 phys, 11.5% cc, x1.4, L67
			"Lunar Quarterstaff", // 50-103 phys, 10% cc, x1.5, L72
			// "Striking Quarterstaff", // 53-111 phys, 10% cc, x1.4, L77, 16% increased Melee Strike Range with this weapon
			// "Razor Quarterstaff", // 65-108 phys, 10% cc, x1.4, L77
			"Dreaming Quarterstaff", // 99-133 phys, 0% cc, x1.5, L78
			"Bolting Quarterstaff", // 24-97 phys, 1-100 lightning, 10% cc, x1.4, L78
			// "Aegis Quarterstaff", // 58-97 phys, 10% cc, x1.4, L79, +10–15% to Block chance

			// https://poe2db.tw/us/Two_Hand_Maces#TwoHandMacesItem
			"Felled Greatclub", // 13-18 phys, 5% cc, x1.1
			"Oak Greathammer", // 14-26 phys, 5% cc, x1.05, L4, Causes 30–50% increased Stun Buildup
			"Forge Maul", // 29-39 phys, 5% cc, x1.05, L11
			"Studded Greatclub", // 32-48 phys, 5% cc, x1.1, L16
			"Cultist Greathammer", // 32-43 phys, 5% cc, x1.05, L22, Strikes deal Splash damage to targets within 1.5 metres
			"Temple Maul", // 35-72 phys, 5% cc, x1.2, L28
			"Leaden Greathammer", // 58-78 phys, 5% cc, x1.1, L33
			"Crumbling Maul", // 62-75 phys, 5% cc, x1.1, L38, Causes Enemies to Explode on Critical kill, for 10% of their Life as Physical Damage
			"Pointed Maul", // 68-102 phys, 6.5% cc, x1.1, L45
			"Totemic Greatclub", // 73-99 phys, 5% cc, x1.1, L50, Crushes Enemies on Hit
			"Solemn Maul", // 59-123 phys, 5% cc, x1.2, L54
			"Heavy Greathammer", // 94-127 phys, 5% cc, x1.1, L59
			"Disintegrating Maul", // 93-114 phys, 5% cc, x1.1, L62, Causes Enemies to Explode on Critical kill, for 10% of their Life as Physical Damage
			"Anvil Maul", // 112-151 phys, 5% cc, x1.05, L67
			"Sacred Maul", // 76-158 phys, 5% cc, x1.2, L72
			"Ironwood Greathammer", // 94-174 phys, 5% cc, x1.05, L77, Causes 30–50% increased Stun Buildup
			// "Massive Greathammer", // 119-161 phys, 5% cc, x1.1, L77
			// "Tawhoan Greatclub", // 107-145 phys, 5% cc, x1.1, L78, Crushes Enemies on Hit
			// "Fanatic Greathammer", // 89-120 phys, 5% cc, x1.05, L78, Strikes deal Splash damage to targets within 1.5 metres
			// "Ruination Maul", // 113-138 phys, 5% cc, x1.1, L79, Causes Enemies to Explode on Critical kill, for 10% of their Life as Physical Damage
		);
	}
	static getOffOtherBad() {
		return new NameManager(
			// https://poe2db.tw/us/Quivers#QuiversItem
			"Broadhead Quiver", // Adds 1 to 3 Physical Damage to Attacks
			"Fire Quiver", // L8, Adds 3 to 5 Fire damage to Attacks
			"Sacral Quiver", // L16, Gain 2–3 Life per Enemy Hit with Attacks
			"Two-Point Quiver", // L24, 20–30% increased Accuracy Rating
			"Blunt Quiver", // L33, 25–40% increased Stun Buildup
			"Toxic Quiver", // L39, 20–30% chance to Poison on Hit with Attacks
			"Serrated Quiver", // L44, Attacks have 20–30% chance to cause Bleeding
			// "Primed Quiver", // L51, 7–10% increased Attack Speed
			// "Penetrating Quiver", // L55, 100% chance to Pierce an Enemy
			// "Volant Quiver", // L61, 20–30% increased Arrow Speed
			// "Visceral Quiver", // L65, 20–30% increased Critical Hit Chance for Attacks
		);
	}
	static getArmourClassOther() {
		return new NameManager(
			// https://poe2db.tw/us/Body_Armours#BodyArmoursItem
			"Feathered Raiment", /// 153 ES, L80, 5–10% of Damage is taken from Mana before Life
		);
	}
	static getArmourClassBad() {
		return new NameManager(
			// https://poe2db.tw/us/Helmets
			"Twig Circlet", // 19 ES
			"Wicker Tiara", // 28 ES, L10
			"Beaded Circlet", // 34 ES, L16
			"Chain Tiara", // 44 ES, L26
			"Feathered Tiara", // 51 ES, L33
			"Gold Circlet", // 58 ES, L40
			"Vermeil Circlet", // 63 ES, L45
			"Jade Tiara", // 69 ES, L50
			"Sandsworn Tiara", // 73 ES, L54
			"Jungle Tiara", // 78 ES, L59
			"Skycrown Tiara", // 84 ES, L65
			"Sorcerous Tiara", // 92 ES, L70
			"Kamasan Tiara", // 101 ES, L75
			// "Ancestral Tiara", // 109 ES, L80

			// https://poe2db.tw/us/Body_Armours#BodyArmoursItem
			"Tattered Robe", // 28 ES
			"Feathered Robe", // 35 ES, L5
			"Hexer's Robe", // 44 ES, L11
			"Bone Raiment", // 52 ES, L16
			"Silk Robe", // 61 ES, L22
			"Keth Raiment", // 70 ES, L28
			"Votive Raiment", // 78 ES, L33
			"Altar Robe", // 89 ES, L40
			"Elementalist Robe", // 97 ES, L45
			"Mystic Raiment", // 103 ES, L49
			"River Raiment", // 111 ES, L54
			"Adherent's Raiment", // 119 ES,  L59
			"Ceremonial Robe", /// 123 ES, L62
			// "Vile Robe", /// 184 ES, L65
			// "Flowing Raiment", /// 153 ES, L70, 40–50% increased Mana Regeneration Rate
			// "Sacramental Robe", /// 153 ES, L75, 40–50% faster start of Energy Shield Recharge

			// https://poe2db.tw/us/Gloves
			"Torn Gloves", // 9 ES
			"Sombre Gloves", // 15 ES, L12
			"Stitched Gloves", // 17 ES, L16
			"Jewelled Gloves", // 22 ES, L26
			"Intricate Gloves", // 26 ES, L33
			"Pauascale Gloves", // 32 ES, L45
			"Embroidered Gloves", // 35 ES, L52
			"Baroque Gloves", // 36 ES, L54
			"Gold Gloves", // 39 ES, L59
			"Grim Gloves", // 42 ES, L65
			"Opulent Gloves", // 46 ES, L70
			"Vaal Gloves", // 50 ES, L75
			// "Sirenscale Gloves", // 54 ES, L80
		);
	}
	static getJewelleryOther() {
		return new NameManager(
			"Crimson Amulet", // 2-4 life regen
			// "Amber Amulet", // Strength
			// "Jade Amulet", // Dexterity

			"Iron Ring", // +1-4 phys damage to attacks
			"Emerald Ring", // Flat accuracy
			"Unset Ring", // Skill slot
		);
	}
	// static getFlasksGood() {
	// 	return new NameManager(
	// 		"Ultimate Life Flask", "Ultimate Mana Flask",
	// 	);
	// }
	static getFlasksBad() {
		return new NameManager(
			"Lesser Life Flask", "Lesser Mana Flask",
			"Medium Life Flask", "Medium Mana Flask",
			"Greater Life Flask", "Greater Mana Flask",
			"Grand Life Flask", "Grand Mana Flask",
			"Giant Life Flask", "Giant Mana Flask",
			"Colossal Life Flask", "Colossal Mana Flask",
			"Gargantuan Life Flask", "Gargantuan Mana Flask",
			"Transcendent Life Flask", "Transcendent Mana Flask",
		);
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

	export() {
		this.names.sort((a, b) => a.compare(b));
		return new StringList(
			...this.names.map(name => name.name)
		);
	}
}
