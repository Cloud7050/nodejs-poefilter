import { DIV, Name } from "./name.js";
import { OPERATOR } from "./operator.js";
import { StringList } from "./stringList.js";

export class NameManager {
	static TIER = {
		LOW: -3,
		NEVER: -2,
		BAD: -1,
		OTHER: 0,
		CLASS: 1,
		SPECIAL: 2, // For lower ilvl special drops, eg T15 fractured lake's ilvl 79 drops
	}

	names;

	constructor (...names) {
		names = names.reduce((accumulator, name) => {
			if (name instanceof NameManager) accumulator.push(...name.names);
			else accumulator.push(name);
			return accumulator;
		}, []);

		this.names = names.map(
			(name) => name instanceof Name ? name : new Name(name)
		);
	}

	static getCurrenciesBad(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Transmutation Shard", 1 / 10000),
			new Name("Greater Orb of Transmutation", 1 / 4000),
			new Name("Regal Shard", 1 / 4000),
			new Name("Artificer's Shard", 1 / 2000),
			new Name("Greater Orb of Augmentation", 1 / 2000),
			new Name("Lesser Jeweller's Orb", 1 / 1000),
			new Name("Blacksmith's Whetstone", 1 / 200),
			new Name("Greater Jeweller's Orb", 1 / 100),
		).range(min, max);
	}
	static getCurrencies(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Orb of Transmutation", 1 / 1000),
			new Name("Orb of Alchemy", 1 / 598),
			new Name("Orb of Augmentation", 1 / 400),
			new Name("Regal Orb", 1 / 400),
			new Name("Artificer's Orb", 1 / 200),
			new Name("Glassblower's Bauble", 1 / 200),
			new Name("Armourer's Scrap", 1 / 200),
			new Name("Scroll of Wisdom", 1 / 120),
			new Name("Perfect Orb of Transmutation", 1 / 110),

			new Name("Greater Regal Orb", 1 / 60),
			new Name("Arcanist's Etcher", 1 / 5),
			new Name("Gemcutter's Prism", 1 / 5),
			new Name("Chance Shard", 1 / 10),

			new Name("Perfect Orb of Augmentation", 1),
			new Name("Exalted Orb", 1),
			new Name("Orb of Chance", 1),
			new Name("Greater Exalted Orb", 2.14),
			new Name("Vaal Orb", 3.92),
			new Name("Perfect Regal Orb", 11),

			new Name("Perfect Jeweller's Orb", 20.5),
			new Name("Chaos Orb", 45),
			new Name("Greater Chaos Orb", 125),
			new Name("Fracturing Orb", 280),
			new Name("Orb of Annulment", DIV / 3.33),

			new Name("Divine Orb", DIV),
			new Name("Perfect Exalted Orb", 2.25 * DIV),
			new Name("Perfect Chaos Orb", 2.5 * DIV),
			new Name("Hinekora's Lock", 626 * DIV),
			new Name("Mirror of Kalandra", 1600 * DIV),
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
			new Name("Preserved Vertebrae", 3.6),
			new Name("Preserved Cranium", 10),
		).range(min, max);
	}
	static getAbyss3(min = undefined, max = undefined) {
		return new NameManager(
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
			new Name("Skittering Catalyst", 1 / 400), // Speed
			new Name("Uul-Netol's Catalyst", 1 / 200), // Physical
			new Name("Neural Catalyst", 1 / 200), // Mana
			new Name("Sibilant Catalyst", 1 / 150), // Caster

			new Name("Adaptive Catalyst", 1 / 100), // Attribute
			new Name("Carapace Catalyst", 1 / 100), // Defence
			new Name("Chayula's Catalyst", 1 / 100), // Chaos
			new Name("Xoph's Catalyst", 1 / 80), // Fire
			new Name("Tul's Catalyst", 1 / 30), // Cold
			new Name("Flesh Catalyst", 1 / 30), // Life
			new Name("Reaver Catalyst", 1 / 3), // Attack
			new Name("Esh's Catalyst", 1 / 1.27), // Lightning
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

	static getUncut(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Uncut Skill Gem (Level 5)", 1 / 3),
			new Name("Uncut Skill Gem (Level 18)", 1 / 3),
			new Name("Uncut Support Gem (Level 5)", 1 / 2),
			new Name("Uncut Skill Gem (Level 12)", 1 / 2),
			new Name("Uncut Skill Gem (Level 14)", 1 / 2),
			new Name("Uncut Skill Gem (Level 16)", 1 / 2),
			new Name("Uncut Skill Gem (Level 17)", 1 / 2),
			new Name("Uncut Skill Gem (Level 20)", 1 / 1.67),

			new Name("Uncut Support Gem (Level 1)", 1),
			new Name("Uncut Support Gem (Level 2)", 1),
			new Name("Uncut Support Gem (Level 3)", 1),
			new Name("Uncut Support Gem (Level 4)", 1),
			new Name("Uncut Spirit Gem (Level 17)", 1),
			new Name("Uncut Spirit Gem (Level 18)", 1),
			new Name("Uncut Skill Gem (Level 3)", 1),
			new Name("Uncut Skill Gem (Level 13)", 1),
			new Name("Uncut Skill Gem (Level 15)", 1),
			new Name("Uncut Skill Gem (Level 19)", 1),
			new Name("Uncut Skill Gem (Level 9)", 4),
			new Name("Uncut Skill Gem (Level 6)", 5),
			new Name("Uncut Skill Gem (Level 11)", 5),
			new Name("Uncut Spirit Gem (Level 13)", 6),
			new Name("Uncut Spirit Gem (Level 11)", 10),
			new Name("Uncut Spirit Gem (Level 12)", 10),
			new Name("Uncut Spirit Gem (Level 19)", 10),
			new Name("Uncut Skill Gem (Level 2)", 10),
			new Name("Uncut Skill Gem (Level 4)", 10),
			new Name("Uncut Skill Gem (Level 8)", 10),
			new Name("Uncut Skill Gem (Level 10)", 10),
			new Name("Uncut Skill Gem (Level 7)", 11),
			new Name("Uncut Skill Gem (Level 1)", 15),

			new Name("Uncut Spirit Gem (Level 10)", 28),
			new Name("Uncut Spirit Gem (Level 5)", 30),
			new Name("Uncut Spirit Gem (Level 6)", 41),
			new Name("Uncut Spirit Gem (Level 16)", 45),
			new Name("Uncut Spirit Gem (Level 7)", 55),
			new Name("Uncut Spirit Gem (Level 14)", 70),
			new Name("Uncut Spirit Gem (Level 15)", 80),
			new Name("Uncut Spirit Gem (Level 4)", 143),
			new Name("Uncut Spirit Gem (Level 9)", 311),
			new Name("Uncut Spirit Gem (Level 8)", 480),
			new Name("Uncut Spirit Gem (Level 20)", 700),
		).range(min, max);
	}
	static getLineage(min = undefined, max = undefined) {
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
			new Name("Talisman of Grold", 1 / 19),
			new Name("Zalatl's Soul Core of Insulation", 1 / 18),
			new Name("Hayoxi's Soul Core of Heatproofing", 1 / 9),
			new Name("Topotante's Soul Core of Dampening", 1 / 8),
			new Name("Xipocado's Soul Core of Dominion", 1 / 3),
			new Name("Cholotl's Soul Core of War", 1 / 3),
			new Name("Bear Talisman", 1 / 2),
			new Name("Stag Talisman", 1 / 2),

			new Name("Guatelitzi's Soul Core of Endurance", 1),
			new Name("Citaqualotl's Soul Core of Foulness", 1),
			new Name("Tacati's Soul Core of Affliction", 1),
			new Name("Uromoti's Soul Core of Attenuation", 1),
			new Name("Primate Talisman", 1),
			new Name("Boar Talisman", 1),
			new Name("Serpent Talisman", 1),
			new Name("Wolf Talisman", 1),
			new Name("Cat Talisman", 1),
			new Name("Owl Talisman", 1),
			new Name("Ox Talisman", 1),
			new Name("Talisman of Thruldana", 1),
			new Name("Talisman of Maxarius", 1),
			new Name("Talisman of Egrin", 1),
			new Name("Talisman of Eeshta", 3.5),
			new Name("Fox Talisman", 4),
			new Name("Opiloti's Soul Core of Assault", 5),
			new Name("Quipolatl's Soul Core of Flow", 5),
			new Name("Rabbit Talisman", 5),
			new Name("Xopec's Soul Core of Power", 6),
			new Name("Ulaman's Gaze", 17),
			new Name("Talisman of Ralakesh", 18),

			new Name("Tzamoto's Soul Core of Ferocity", 24),
			new Name("Atmohua's Soul Core of Retreat", 28),
			new Name("Soul Core of Zantipi", 40.5),
			new Name("Soul Core of Ticaba", 45),
			new Name("Amanamu's Gaze", 49),
			new Name("Soul Core of Xopec", 50),
			new Name("Soul Core of Tzamoto", 50),
			new Name("Soul Core of Cholotl", 53),
			new Name("Soul Core of Opiloti", 55),
			new Name("Soul Core of Atmohua", 60),
			new Name("Soul Core of Zalatl", 70),
			new Name("Soul Core of Puhuarte", 80),
			new Name("Tecrod's Gaze", 99),
			new Name("Soul Core of Topotante", 100),
			new Name("Soul Core of Quipolatl", 105),
			new Name("Estazunti's Soul Core of Convalescence", 110),
			new Name("Soul Core of Tacati", 121),
			new Name("Soul Core of Citaqualotl", 179),
			new Name("Kurgal's Gaze", 252),
			new Name("Soul Core of Azcapa", 275),
			new Name("Talisman of Sirrius", 1010),

			new Name("Soul Core of Jiquani", 6 * DIV),
		).range(min, max);
	}

	static getMain(tier, operator = undefined) {
		return new NameManager(
			// https://poe2db.tw/us/Sceptres#SceptresItem
			new Name("Omen Sceptre", TIER.NEVER), // Malice
			new Name("Wrath Sceptre", TIER.NEVER), // Fulmination

			new Name("Shrine Sceptre", TIER.OTHER), // Purity of Fire/Ice/Lightning
			new Name("Stoic Sceptre", TIER.OTHER), // Discipline

			new Name("Rattling Sceptre", TIER.CLASS), // Skeletal Warrior

			// https://poe2db.tw/us/Wands#WandsItem
			new Name("Bone Wand", TIER.NEVER), // Bone Blast
			new Name("Siphoning Wand", TIER.NEVER), // Power Siphon
			new Name("Volatile Wand", TIER.NEVER), // Volatile Dead

			new Name("Attuned Wand", TIER.BAD), // Mana Drain
			new Name("Galvanic Wand", TIER.BAD), // Galvanic Field
			new Name("Withered Wand", TIER.BAD), // Chaos Bolt

			new Name("Dueling Wand", TIER.OTHER), // Spellslinger

			// https://poe2db.tw/us/Staves#StavesItem
			new Name("Gelid Staff", TIER.NEVER), // Freezing Shards
			new Name("Paralysing Staff", TIER.NEVER), // Enervating Nova
			new Name("Pyrophyte Staff", TIER.NEVER), // Solar Orb
			new Name("Reaping Staff", TIER.NEVER), // Reap
			new Name("Roaring Staff", TIER.NEVER), // Unleash
			new Name("Sanctified Staff", TIER.NEVER), // Consecrate
			new Name("Voltaic Staff", TIER.NEVER), // Lightning Bolt

			new Name("Ashen Staff", TIER.OTHER), // Firebolt
			new Name("Chiming Staff", TIER.OTHER), // Sigil of Power

			// https://poe2db.tw/us/One_Hand_Maces#OneHandMacesItem
			new Name("Wooden Club", TIER.LOW), // 6-10 phys, 5% cc, x1.45
			new Name("Smithing Hammer", TIER.LOW), // 5.5-9 phys, 5.5-9 fire, 5% cc, x1.45, L4
			new Name("Slim Mace", TIER.LOW), // 11-17 phys, 5% cc, x1.55, L10
			new Name("Spiked Club", TIER.LOW), // 15-24 phys, 5% cc, x1.45, L16
			new Name("Warpick",  TIER.LOW), // 18-24 phys, 7% cc, x1.45, L22
			new Name("Plated Mace", TIER.LOW), // 18-38 phys, 5% cc, x1.4, L26
			new Name("Brigand Mace", TIER.LOW), // 28-38 phys, 5% cc, x1.45, L33
			new Name("Construct Hammer", TIER.LOW), // 31-38 phys, 5% cc, x1.4, L36, 40% chance to Daze on Hit
			new Name("Morning Star", TIER.LOW), // 33-49 phys, 6.5% cc, x1.45, L45
			new Name("Jade Club", TIER.LOW), // 31-51 phys, 5% cc, x1.45, L49, Always Hits
			new Name("Marching Mace", TIER.LOW), // 33-69 phys, 5% cc, x1.4, L54
			new Name("Bandit Mace", TIER.LOW), // 45-61 phys, 5% cc, x1.45, L59
			new Name("Structured Hammer", TIER.LOW), // 49-60 phys, 5% cc, x1.4, L62, 40% chance to Daze on Hit
			new Name("Flanged Mace", TIER.LOW), // 45-67 phys, 5% cc, x1.55, L67
			new Name("Crown Mace", TIER.LOW), // 43-89 phys, 5% cc, x1.4, L72

			new Name("Molten Hammer", TIER.NEVER), // 35.5-59 phys, 35.5-59 fire, 5% cc, x1.45, L77
			new Name("Akoyan Club", TIER.NEVER), // 46-76 phys, 5% cc, x1.45, L78, Always Hits
			new Name("Strife Pick", TIER.NEVER), // 49-66 phys, 7% cc, x1.45, L78, +5–10% to Critical Damage Bonus

			new Name("Marauding Mace", TIER.BAD), // 51-84 phys, 5% cc, x1.45, L77
			new Name("Fortified Hammer", TIER.BAD), // 60-73 phys, 5% cc, x1.4, L79, 40% chance to Daze on Hit

			// https://poe2db.tw/us/Spears#SpearsItem
			new Name("Hardwood Spear", TIER.LOW), // 5-9 phys, 5% cc, x1.6
			new Name("Ironhead Spear", TIER.LOW), // 7-13 phys, 5% cc, x1.6, L5
			new Name("Hunting Spear", TIER.LOW), // 10-18 phys, 5% cc, x1.55, L10, 15–25% chance to Maim on Hit
			new Name("Winged Spear", TIER.LOW), // 12-22 phys, 5% cc, x1.65, L16
			new Name("War Spear", TIER.LOW), // 14-26 phys, 5% cc, x1.6, L21, 25–35% increased Projectile Speed with this Weapon
			new Name("Forked Spear", TIER.LOW), // 17-32 phys, 5% cc, x1.6, L26
			new Name("Barbed Spear", TIER.LOW), // 20-38 phys, 6.5% cc, x1.6, L33
			new Name("Broad Spear", TIER.LOW), // 26-48 phys, 5% cc, x1.5, L40
			new Name("Crossblade Spear", TIER.LOW), // 28-51 phys, 5% cc, x1.55, L45
			new Name("Seaglass Spear", TIER.LOW), // 31-57 phys, 7% cc, x1.5, L51
			new Name("Branched Spear", TIER.LOW), // 31-58 phys, 5% cc, x1.6, L54
			new Name("Jagged Spear", TIER.LOW), // 33-61 phys, 6.5% cc, x1.6, L59
			new Name("Helix Spear", TIER.LOW), // 37-68 phys, 5% cc, x1.6, L65
			new Name("Orichalcum Spear", TIER.LOW), // 38-70 phys, 5% cc, x1.6, L67
			new Name("Pronged Spear", TIER.LOW), // 40-75 phys, 5% cc, x1.6, L72

			new Name("Stalking Spear", TIER.BAD), // 44-82 phys, 5% cc, x1.55, L77, 15–25% chance to Maim on Hit
			new Name("Flying Spear", TIER.BAD), // 41-76 phys, 5% cc, x1.6, L78, 25–35% increased Projectile Speed with this Weapon
			new Name("Akoyan Spear", TIER.BAD), // 43-80 phys, 7% cc, x1.5, L78
			new Name("Grand Spear", TIER.BAD), // 46-85 phys, 5% cc, x1.5, L79

			new Name("Spiked Spear", TIER.OTHER), // 41-76 phys, 6.5% cc, x1.6, L77

			// https://poe2db.tw/us/Bows#BowsItem
			new Name("Crude Bow", TIER.LOW), // 6-9 phys, x1.2
			new Name("Shortbow", TIER.LOW), // 7-14 phys, x1.25, L5
			new Name("Warden Bow", TIER.LOW), // 12-18 phys, x1.15, L11, 20–30% chance to Chain an additional time
			new Name("Recurve Bow", TIER.LOW), // 15-31 phys, x1.1, L16
			new Name("Composite Bow", TIER.LOW), // 19-31 phys, x1.2, L22
			new Name("Dualstring Bow", TIER.LOW), // 16-31 phys, x1.1, L28, Bow Attacks fire an additional Arrow
			new Name("Cultist Bow", TIER.LOW), // 10-17 phys, 19-37 chaos, x1.2, L33
			new Name("Zealot Bow", TIER.LOW), // 31-47 phys, x1.2, L39
			new Name("Artillery Bow", TIER.LOW), // 39-72 phys, x1.15, L45, 50% reduced Projectile Range
			new Name("Tribal Bow", TIER.LOW), // 38-57 phys, x1.2, L50
			new Name("Twin Bow", TIER.LOW), // 32-60 phys, x1.1, L54, Bow Attacks fire an additional Arrow
			new Name("Adherent Bow", TIER.LOW), // 21-34 phys, 31-59 chaos, x1.2, L59
			new Name("Militant Bow", TIER.LOW), // 46-69 phys, x1.2, L62
			new Name("Ironwood Shortbow", TIER.LOW), // 41-76 phys, x1.25, L67
			new Name("Cavalry Bow", TIER.LOW), // 49-82 phys, x1.2, L72

			new Name("Guardian Bow", TIER.NEVER), // 53-80 phys, x1.15, L77, 20–30% chance to Chain an additional time
			new Name("Fanatic Bow", TIER.NEVER), // 42-70 phys, 43-71 chaos, x1.2, L79

			new Name("Warmonger Bow", TIER.OTHER), // 56-84 phys, x1.2, L77
			new Name("Gemini Bow", TIER.OTHER), // 39-72 phys, x1.1, L78, Bow Attacks fire an additional Arrow
			new Name("Obliterator Bow", TIER.OTHER), // 62-115 phys, x1.15, L78, 50% reduced Projectile Range

			// https://poe2db.tw/us/Crossbows#CrossbowsItem
			new Name("Makeshift Crossbow", TIER.LOW), // 7-12 phys, 5% cc, x1.6, r0.8
			new Name("Tense Crossbow", TIER.LOW), // 8-15 phys, 5% cc, x1.6, r0.85, L4, 20–30% increased Bolt Speed
			new Name("Sturdy Crossbow", TIER.LOW), // 11-26 phys, 5% cc, x1.55, r0.75, L10
			new Name("Varnished Crossbow", TIER.LOW), // 12-36 phys, 5% cc, x1.6, r0.8, L16
			new Name("Dyad Crossbow", TIER.LOW), // 9-37 phys, 5% cc, x1.6, r1.1, L20, Loads an additional bolt
			new Name("Alloy Crossbow", TIER.LOW), // 12-50 phys, 5% cc, x1.7, r0.7, L26
			new Name("Bombard Crossbow", TIER.LOW), // 14-56 phys, 5% cc, x1.65, r0.75, L33, Grenade Skills Fire an additional Projectile
			new Name("Construct Crossbow", TIER.LOW), // 18-72 phys, 5% cc, x1.6, r0.8, L38
			new Name("Blackfire Crossbow", TIER.LOW), // 20-80 phys, 7% cc, x1.6, r0.85, L45
			new Name("Piercing Crossbow", TIER.LOW), // 21-84 phys, 5% cc, x1.65, r0.85, L50, 20–30% chance to Pierce an Enemy
			new Name("Twin Crossbow", TIER.LOW), // 20-82 phys, 5% cc, x1.6, r1.1, L54, Loads an additional bolt
			new Name("Cannonade Crossbow", TIER.LOW), // 23-90 phys, 5% cc, x1.65, r0.75, L59, Grenade Skills Fire an additional Projectile
			new Name("Bleak Crossbow", TIER.LOW), // 27-109 phys, 5% cc, x1.6, r0.8, L62
			new Name("Stout Crossbow", TIER.LOW), // 30-119 phys, 5% cc, x1.55, r0.75, L67
			new Name("Engraved Crossbow", TIER.LOW), // 31-124 phys, 5% cc, x1.6, r0.8, L72

			new Name("Flexed Crossbow", TIER.BAD), // 32-127 phys, 5% cc, x1.6, r0.85, L77, 20–30% increased Bolt Speed
			new Name("Elegant Crossbow", TIER.BAD), // 31-123 phys, 5% cc, x1.65, r0.85, L78, 20–30% chance to Pierce an Enemy
			new Name("Siege Crossbow", TIER.BAD), // 29-115 phys, 5% cc, x1.65, r0.75, L79, Grenade Skills Fire an additional Projectile

			new Name("Desolate Crossbow", TIER.OTHER), // 33-132 phys, 5% cc, x1.6, r0.8, L77
			new Name("Gemini Crossbow", TIER.OTHER), // 28-112 phys, 5% cc, x1.6, r1.1, L78, Loads an additional bolt

			// https://poe2db.tw/us/Quarterstaves#QuarterstavesItem
			new Name("Wrapped Quarterstaff", TIER.LOW), // 7-12 phys, 10% cc, x1.4
			new Name("Long Quarterstaff", TIER.LOW), // 9-18 phys, 10% cc, x1.4, L4, 16% increased Melee Strike Range with this weapon
			new Name("Gothic Quarterstaff", TIER.LOW), // 16-26 phys, 11.5% cc, x1.4, L11
			new Name("Crackling Quarterstaff", TIER.LOW), // 5-22 phys, 1-35 lightning, 10% cc, x1.4, L16
			new Name("Crescent Quarterstaff", TIER.LOW), // 19-39 phys, 10% cc, x1.5, L20
			new Name("Steelpoint Quarterstaff", TIER.LOW), // 28-51 phys, 10% cc, x1.4, L28
			new Name("Slicing Quarterstaff", TIER.LOW), // 29-60 phys, 10% cc, x1.4, L33
			new Name("Barrier Quarterstaff", TIER.LOW), // 33-55 phys, 10% cc, x1.4, L37, +10–15% to Block chance
			new Name("Hefty Quarterstaff", TIER.LOW), // 39-80 phys, 10% cc, x1.35, L45
			new Name("Smooth Quarterstaff", TIER.LOW), // 64-87 phys, 0% cc, x1.5, L49
			new Name("Waxing Quarterstaff", TIER.LOW), // 39-82 phys, 10% cc, x1.5, L54
			new Name("Bladed Quarterstaff", TIER.LOW), // 45-94 phys, 10% cc, x1.4, L59
			new Name("Guardian Quarterstaff", TIER.LOW), // 49-82 phys, 10% cc, x1.4, L62, +10–15% to Block chance
			new Name("Sinister Quarterstaff", TIER.LOW), // 55-92 phys, 11.5% cc, x1.4, L67
			new Name("Lunar Quarterstaff", TIER.LOW), // 50-103 phys, 10% cc, x1.5, L72

			new Name("Aegis Quarterstaff", TIER.NEVER), // 58-97 phys, 10% cc, x1.4, L79, +10–15% to Block chance

			new Name("Razor Quarterstaff", TIER.BAD), // 65-108 phys, 10% cc, x1.4, L77
			new Name("Bolting Quarterstaff", TIER.BAD), // 24-97 phys, 1-100 lightning, 10% cc, x1.4, L78
			new Name("Dreaming Quarterstaff", TIER.BAD), // 99-133 phys, 0% cc, x1.5, L78

			new Name("Striking Quarterstaff", TIER.OTHER), // 53-111 phys, 10% cc, x1.4, L77, 16% increased Melee Strike Range with this weapon

			// https://poe2db.tw/us/Two_Hand_Maces#TwoHandMacesItem
			new Name("Felled Greatclub", TIER.LOW), // 13-18 phys, 5% cc, x1.1
			new Name("Oak Greathammer", TIER.LOW), // 14-26 phys, 5% cc, x1.05, L4, Causes 30–50% increased Stun Buildup
			new Name("Forge Maul", TIER.LOW), // 29-39 phys, 5% cc, x1.05, L11
			new Name("Studded Greatclub", TIER.LOW), // 32-48 phys, 5% cc, x1.1, L16
			new Name("Cultist Greathammer", TIER.LOW), // 32-43 phys, 5% cc, x1.05, L22, Strikes deal Splash damage to targets within 1.5 metres
			new Name("Temple Maul", TIER.LOW), // 35-72 phys, 5% cc, x1.2, L28
			new Name("Leaden Greathammer", TIER.LOW), // 58-78 phys, 5% cc, x1.1, L33
			new Name("Crumbling Maul", TIER.LOW), // 62-75 phys, 5% cc, x1.1, L38, Causes Enemies to Explode on Critical kill, for 10% of their Life as Physical Damage
			new Name("Pointed Maul", TIER.LOW), // 68-102 phys, 6.5% cc, x1.1, L45
			new Name("Totemic Greatclub", TIER.LOW), // 73-99 phys, 5% cc, x1.1, L50, Crushes Enemies on Hit
			new Name("Solemn Maul", TIER.LOW), // 59-123 phys, 5% cc, x1.2, L54
			new Name("Heavy Greathammer", TIER.LOW), // 94-127 phys, 5% cc, x1.1, L59
			new Name("Disintegrating Maul", TIER.LOW), // 93-114 phys, 5% cc, x1.1, L62, Causes Enemies to Explode on Critical kill, for 10% of their Life as Physical Damage
			new Name("Anvil Maul", TIER.LOW), // 112-151 phys, 5% cc, x1.05, L67
			new Name("Sacred Maul", TIER.LOW), // 76-158 phys, 5% cc, x1.2, L72

			new Name("Fanatic Greathammer", TIER.NEVER), // 89-120 phys, 5% cc, x1.05, L78, Strikes deal Splash damage to targets within 1.5 metres
			new Name("Ruination Maul", TIER.NEVER), // 113-138 phys, 5% cc, x1.1, L79, Causes Enemies to Explode on Critical kill, for 10% of their Life as Physical Damage

			new Name("Ironwood Greathammer", TIER.OTHER), // 94-174 phys, 5% cc, x1.05, L77, Causes 30–50% increased Stun Buildup
			new Name("Massive Greathammer", TIER.OTHER), // 119-161 phys, 5% cc, x1.1, L77
			new Name("Tawhoan Greatclub", TIER.OTHER), // 107-145 phys, 5% cc, x1.1, L78, Crushes Enemies on Hit
		).compare(tier, operator);
	}
	static getOff(tier, operator = undefined) {
		return new NameManager(
			// https://poe2db.tw/us/Foci#FociItem
			new Name("Twig Focus", TIER.LOW), // 12 ES
			new Name("Woven Focus", TIER.LOW), // 15 ES, L6
			new Name("Antler Focus", TIER.LOW), // 17 ES, L10
			new Name("Engraved Focus", TIER.LOW), // 21 ES, L16
			new Name("Tonal Focus", TIER.LOW), // 25 ES, L22
			new Name("Crystal Focus", TIER.LOW), // 28 ES, L26
			new Name("Voodoo Focus", TIER.LOW), // 32 ES, L33
			new Name("Plumed Focus", TIER.LOW), // 34 ES, L36
			new Name("Runed Focus", TIER.LOW), // 40 ES, L45
			new Name("Whorl Focus", TIER.LOW), // 43 ES, L51
			new Name("Arrayed Focus", TIER.LOW), // 45 ES, L54
			new Name("Cultist Focus", TIER.LOW), // 49 ES, L59
			new Name("Hallowed Focus", TIER.LOW), // 50 ES, L61
			new Name("Druidic Focus", TIER.LOW), // 52 ES, L65
			new Name("Leyline Focus", TIER.LOW), // 58 ES, L70
			new Name("Sacred Focus", TIER.LOW), // 63 ES, L75

			new Name("Tasalian Focus", TIER.CLASS), // 68 ES, L80

			// https://poe2db.tw/us/Quivers#QuiversItem
			new Name("Broadhead Quiver", TIER.NEVER), // Adds 1 to 3 Physical Damage to Attacks
			new Name("Two-Point Quiver", TIER.NEVER), // L24, 20–30% increased Accuracy Rating
			new Name("Serrated Quiver", TIER.NEVER), // L44, Attacks have 20–30% chance to cause Bleeding

			new Name("Toxic Quiver", TIER.BAD), // L39, 20–30% chance to Poison on Hit with Attacks
			new Name("Primed Quiver", TIER.BAD), // L51, 7–10% increased Attack Speed

			new Name("Fire Quiver", TIER.OTHER), // L8, Adds 3 to 5 Fire damage to Attacks
			new Name("Sacral Quiver", TIER.OTHER), // L16, Gain 2–3 Life per Enemy Hit with Attacks
			new Name("Blunt Quiver", TIER.OTHER), // L33, 25–40% increased Stun Buildup
			new Name("Penetrating Quiver", TIER.OTHER), // L55, 100% chance to Pierce an Enemy
			new Name("Volant Quiver", TIER.OTHER), // L61, 20–30% increased Arrow Speed
			new Name("Visceral Quiver", TIER.OTHER), // L65, 20–30% increased Critical Hit Chance for Attacks

			// https://poe2db.tw/us/Bucklers#BucklersItem
			new Name("Leather Buckler", TIER.LOW), // 10 V
			new Name("Wooden Buckler", TIER.LOW), // 16 V, L5
			new Name("Plated Buckler", TIER.LOW), // 26 V, L11
			new Name("Iron Buckler", TIER.LOW), // 33 V, L16
			new Name("Ridged Buckler", TIER.LOW), // 43 V, L22
			new Name("Spiked Buckler", TIER.LOW), // 49 V, L26
			new Name("Ringed Buckler", TIER.LOW), // 60 V, L33
			new Name("Edged Buckler", TIER.LOW), // 70 V, L39
			new Name("Laminate Buckler", TIER.LOW), // 79 V, L45
			new Name("Pearl Buckler", TIER.LOW), // 87 V, L50
			new Name("Ornate Buckler", TIER.LOW), // 90 V, L52
			new Name("Spikeward Buckler", TIER.LOW), // 93 V, L54
			new Name("Jingling Buckler", TIER.LOW), // 101 V, L59
			new Name("Bladeguard Buckler", TIER.LOW), // 105 V, L61
			new Name("Ornate Buckler", TIER.LOW), // 111 V, L65
			new Name("Gutspike Buckler", TIER.LOW), // 122 V, L70
			new Name("Ancient Buckler", TIER.LOW), // 133 V, L75

			new Name("Desert Buckler", TIER.NEVER), // 144 V, L80

			// https://poe2db.tw/us/Shields#ShieldsItem
			new Name("Splintered Tower Shield", TIER.LOW), // 18 A
			new Name("Painted Tower Shield", TIER.LOW), // 29 A, L6
			new Name("Braced Tower Shield", TIER.LOW), // 41 A, L12
			new Name("Barricade Tower Shield", TIER.LOW), // 50 A, L16
			new Name("Effigial Tower Shield", TIER.LOW), // 60 A, L21
			new Name("Rampart Tower Shield", TIER.LOW), // 75 A, L28
			new Name("Heraldric Tower Shield", TIER.LOW), // 85 A, L33
			new Name("Stone Tower Shield", TIER.LOW), // 91 A, L36
			new Name("Crucible Tower Shield", TIER.LOW), // 110 A, L45
			new Name("Ancestor Tower Shield", TIER.LOW), // 121 A, L50
			new Name("Bulwark Tower Shield", TIER.LOW), // 129 A, L54
			new Name("Noble Tower Shield", TIER.LOW), // 139 A, L59
			new Name("Goldworked Tower Shield", TIER.LOW), // 144 A, L61
			new Name("Royal Tower Shield", TIER.LOW), // 152 A, L65
			new Name("Fortress Tower Shield", TIER.LOW), // 167 A, L70
			new Name("Vaal Tower Shield", TIER.LOW), // 182 A, L75

			new Name("Tawhoan Tower Shield", TIER.BAD), // 197 A, L80

			new Name("Hardwood Targe", TIER.LOW), // 10 A, 7 V
			new Name("Pelage Targe", TIER.LOW), // 18 A, 14 V, L8
			new Name("Studded Targe", TIER.LOW), // 27 A, 23 V, L16
			new Name("Crescent Targe", TIER.LOW), // 39 A, 34 V, L26
			new Name("Chiseled Targe", TIER.LOW), // 47 A, 41 V, L33
			new Name("Feathered Targe", TIER.LOW), // 51 A, 46 V, L37
			new Name("Stratified Targe", TIER.LOW), // 62 A, 56 V, L46
			new Name("Carved Targe", TIER.LOW), // 67 A, 61 V, L51
			new Name("Polished Targe", TIER.LOW), // 71 A, 64 V, L54
			new Name("Stone Targe", TIER.LOW), // 77 A, 70 V, L59
			new Name("Avian Targe", TIER.LOW), // 80 A, 73 V, L62
			new Name("Mammoth Targe", TIER.LOW), // 84 A, 76 V, L65
			new Name("Baroque Targe", TIER.LOW), // 92 A, 84V, L70
			new Name("Soaring Targe", TIER.LOW), // 100 A, 91 V, L75

			new Name("Golden Targe", TIER.NEVER), // 109 A, 99 V, L80

			new Name("Blazon Crest Shield", TIER.LOW), // 10 A, 6 ES
			new Name("Sigil Crest Shield", TIER.LOW), // 17 A, 8 ES, L7
			new Name("Emblem Crest Shield", TIER.LOW), // 27 A, 12 ES, L16
			new Name("Jingling Crest Shield", TIER.LOW), // 41 A, 16 ES, L28
			new Name("Sectarian Crest Shield", TIER.LOW), // 47 A, 18 ES, L33
			new Name("Omen Crest Shield", TIER.LOW), // 50 A, 19 ES, L36
			new Name("Wayward Crest Shield", TIER.LOW), // 61 A, 22 ES, L45
			new Name("Seer Crest Shield", TIER.LOW), // 66 A, 24 ES, L50
			new Name("Dekharan Crest Shield", TIER.LOW), // 71 A, 25 ES, L54
			new Name("Quartered Crest Shield", TIER.LOW), // 77 A, 27 ES, L59
			new Name("Glowering Crest Shield", TIER.LOW), // 80 A, 28 ES, L62
			new Name("Intricate Crest Shield", TIER.LOW), // 84 A, 29 ES, L65
			new Name("Sekheman Crest Shield", TIER.LOW), // 92 A, 32 ES, L70
			new Name("Vaal Crest Shield", TIER.LOW), // 100 A, 35 ES, L75

			new Name("Blacksteel Crest Shield", TIER.NEVER), // 109 A, 37 ES, L80
		).compare(tier, operator);
	}
	static getArmour(tier, operator = undefined) {
		return new NameManager(
			// https://poe2db.tw/us/Helmets
			new Name("Twig Circlet", TIER.LOW), // 19 ES
			new Name("Wicker Tiara", TIER.LOW), // 28 ES, L10
			new Name("Beaded Circlet", TIER.LOW), // 34 ES, L16
			new Name("Chain Tiara", TIER.LOW), // 44 ES, L26
			new Name("Feathered Tiara", TIER.LOW), // 51 ES, L33
			new Name("Gold Circlet", TIER.LOW), // 58 ES, L40
			new Name("Vermeil Circlet", TIER.LOW), // 63 ES, L45
			new Name("Jade Tiara", TIER.LOW), // 69 ES, L50
			new Name("Sandsworn Tiara", TIER.LOW), // 73 ES, L54
			new Name("Jungle Tiara", TIER.LOW), // 78 ES, L59
			new Name("Skycrown Tiara", TIER.LOW), // 84 ES, L65
			new Name("Sorcerous Tiara", TIER.LOW), // 92 ES, L70
			new Name("Kamasan Tiara", TIER.LOW), // 101 ES, L75

			new Name("Ancestral Tiara", TIER.CLASS), // 109 ES, L80

			new Name("Rusted Greathelm", TIER.LOW), // 29 A
			new Name("Soldier Greathelm", TIER.LOW), // 66 A, L12
			new Name("Wrapped Greathelm", TIER.LOW), // 79 A, L16
			new Name("Spired Greathelm", TIER.LOW), // 116 A, L27
			new Name("Elite Greathelm", TIER.LOW), // 136 A, L33
			new Name("Warrior Greathelm", TIER.LOW), // 146 A, L36
			new Name("Commander Greathelm", TIER.LOW), // 176 A, L45
			new Name("Fierce Greathelm", TIER.LOW), // 196 A, L51
			new Name("Elegant Greathelm", TIER.LOW), // 206 A, L54
			new Name("Noble Greathelm", TIER.LOW), // 223 A, L59
			new Name("Warmonger Greathelm", TIER.LOW), // 243 A, L65
			new Name("Masked Greathelm", TIER.LOW), // 267 A, L70
			new Name("Paragon Greathelm", TIER.LOW), // 292 A, L75

			new Name("Imperial Greathelm", TIER.NEVER), // 316 A, L80

			new Name("Shabby Hood", TIER.LOW), // 19 V
			new Name("Felt Cap", TIER.LOW), // 48 V, L10
			new Name("Lace Hood", TIER.LOW), // 67 V, L16
			new Name("Swathed Cap", TIER.LOW), // 98 V, L26
			new Name("Hunter Hood", TIER.LOW), // 121 V, L33
			new Name("Viper Cap", TIER.LOW), // 136 V, L38
			new Name("Corsair Cap", TIER.LOW), // 158 V, L45
			new Name("Leatherbound Hood", TIER.LOW), // 174 V, L50
			new Name("Wrapped Cap", TIER.LOW), // 187 V, L54
			new Name("Deerstalker Hood", TIER.LOW), // 203 V, L59
			new Name("Woven Cap", TIER.LOW), // 222 V, L65
			new Name("Desert Cap", TIER.LOW), // 244 V, L70
			new Name("Trapper Hood", TIER.LOW), // 266 V, L75

			new Name("Freebooter Cap", TIER.NEVER), // 288 V, L80

			new Name("Brimmed Helm", TIER.LOW), // 23 A, 18 V, L5
			new Name("Guarded Helm", TIER.LOW), // 34 A, 28 V, L11
			new Name("Visored Helm", TIER.LOW), // 44 A, 37 V, L16
			new Name("Cowled Helm", TIER.LOW), // 62 A, 54 V, L26
			new Name("Shielded Helm", TIER.LOW), // 75 A, 66 V, L33
			new Name("Closed Helm", TIER.LOW), // 97 A, 87 V, L45
			new Name("Cabalist Helm", TIER.LOW), // 113 A, 103 V, L54
			new Name("Warded Helm", TIER.LOW), // 134 A, 122 V, L65
			new Name("Cryptic Helm", TIER.LOW), // 147 A, 134 V, L70
			new Name("Champion Helm", TIER.LOW), // 160 A, 146 V, L75

			new Name("Gladiatorial Helm", TIER.NEVER), // 174 A, 159 V, L80

			new Name("Iron Crown", TIER.LOW), // 23 A, 12 ES, L5
			new Name("Horned Crown", TIER.LOW), // 33 A, 15 ES, L10
			new Name("Cultist Crown", TIER.LOW), // 44 A, 19 ES, L16
			new Name("Martyr Crown", TIER.LOW), // 66 A, 25 ES, L28
			new Name("Heavy Crown", TIER.LOW), // 75 A, 28 ES, L33
			new Name("Spiritbone Crown", TIER.LOW), // 97 A, 35 ES, L45
			new Name("Hallowed Crown", TIER.LOW), // 113 A, 40 ES, L54
			new Name("Inquisitor Crown", TIER.LOW), // 123 A, 43 ES, L59
			new Name("Druidic Crown", TIER.LOW), // 134 A, 46 ES, L65
			new Name("Saintly Crown", TIER.LOW), // 147 A, 51 ES, L70
			new Name("Divine Crown", TIER.LOW), // 160 A, 55 ES, L75

			new Name("Cryptic Crown", TIER.NEVER), // 174 A, 60 ES, L80

			new Name("Hewn Mask", TIER.LOW), // 18 V, 12 ES, L5
			new Name("Face Mask", TIER.LOW), // 26 V, 15 ES, L10
			new Name("Hooded Mask", TIER.LOW), // 37 V, 19 ES, L16
			new Name("Veiled Mask", TIER.LOW), // 58 V, 25 ES, L28
			new Name("Tribal Mask", TIER.LOW), // 66 V, 28 ES, L33
			new Name("Solid Mask", TIER.LOW), // 87 V, 35 ES, L45
			new Name("Pariah Mask", TIER.LOW), // 103 V, 40 ES, L54
			new Name("Avian Mask", TIER.LOW), // 111 V, 43 ES, L59
			new Name("Brigand Mask", TIER.LOW), // 122 V, 46 ES, L65
			new Name("Faridun Mask", TIER.LOW), // 134 V, 51 ES, L70
			new Name("Soaring Mask", TIER.LOW), // 146 V, 55 ES, L75

			new Name("Grinning Mask", TIER.NEVER), // 159 V, 60 ES, L80

			// https://poe2db.tw/us/Body_Armours#BodyArmoursItem
			new Name("Tattered Robe", TIER.LOW), // 28 ES
			new Name("Feathered Robe", TIER.LOW), // 35 ES, L5
			new Name("Hexer's Robe", TIER.LOW), // 44 ES, L11
			new Name("Bone Raiment", TIER.LOW), // 52 ES, L16
			new Name("Silk Robe", TIER.LOW), // 61 ES, L22
			new Name("Keth Raiment", TIER.LOW), // 70 ES, L28
			new Name("Votive Raiment", TIER.LOW), // 78 ES, L33
			new Name("Altar Robe", TIER.LOW), // 89 ES, L40
			new Name("Elementalist Robe", TIER.LOW), // 97 ES, L45
			new Name("Mystic Raiment", TIER.LOW), // 103 ES, L49
			new Name("River Raiment", TIER.LOW), // 111 ES, L54
			new Name("Adherent's Raiment", TIER.LOW), // 119 ES, L59
			new Name("Ceremonial Robe", TIER.LOW), /// 123 ES, L62

			new Name("Sacramental Robe", TIER.BAD), /// 153 ES, L75, 40–50% faster start of Energy Shield Recharge

			new Name("Flowing Raiment", TIER.OTHER), /// 153 ES, L70, 40–50% increased Mana Regeneration Rate
			new Name("Feathered Raiment", TIER.OTHER), /// 153 ES, L80, 5–10% of Damage is taken from Mana before Life

			new Name("Vile Robe", TIER.CLASS), /// 184 ES, L65

			new Name("Rusted Cuirass", TIER.LOW), // 45 A
			new Name("Fur Plate", TIER.LOW), // 60 A, L4
			new Name("Iron Cuirass", TIER.LOW), // 96 A, L11
			new Name("Raider Plate", TIER.LOW), // 121 A, L16
			new Name("Maraketh Cuirass", TIER.LOW), // 141 A, L20
			new Name("Steel Plate", TIER.LOW), // 177 A, L27
			new Name("Full Plate", TIER.LOW), // 208 A, L33
			new Name("Vaal Cuirass", TIER.LOW), // 228 A, L37
			new Name("Juggernaut Plate", TIER.LOW), // 269 A, L45
			new Name("Chieftain Cuirass", TIER.LOW), // 294 A, L50
			new Name("Elegant Plate", TIER.LOW), // 315 A, L54
			new Name("Heavy Plate", TIER.LOW), // 340 A, L59
			new Name("Stone Cuirass", TIER.LOW), // 355 A, L62

			new Name("Ornate Plate", TIER.NEVER), // 445 A, L70, Regenerate 1.5–2.5% of maximum Life per second
			new Name("Utzaal Cuirass", TIER.NEVER), // 445 A, L75, 30–40% increased Stun Threshold

			new Name("Soldier Cuirass", TIER.OTHER), // 524 A, L65
			new Name("Warlord Cuirass", TIER.OTHER), // 445 A, L80, +15–25% of Armour also applies to Elemental Damage

			new Name("Leather Vest", TIER.LOW), // 30 V
			new Name("Quilted Vest", TIER.LOW), // 44 V, L4
			new Name("Pathfinder Coat", TIER.LOW), // 78 V, L11
			new Name("Shrouded Vest", TIER.LOW), // 102 V, L16
			new Name("Rhoahide Coat", TIER.LOW), // 131 V, L22
			new Name("Studded Vest", TIER.LOW), // 150 V, L26
			new Name("Scout's Vest", TIER.LOW), // 184 V, L33
			new Name("Serpentscale Coat", TIER.LOW), // 198 V, L36
			new Name("Corsair Vest", TIER.LOW), // 242 V, L45
			new Name("Smuggler Coat", TIER.LOW), // 271 V, L51
			new Name("Layered Vest", TIER.LOW), // 285 V, L54
			new Name("Runner Vest", TIER.LOW), // 309 V, L59
			new Name("Lizardscale Coat", TIER.LOW), // 324 V, L62

			new Name("Swiftstalker Coat", TIER.NEVER), // 406 V, L65, 20–30% reduced Slowing Potency of Debuffs on You
			new Name("Wyrmscale Coat", TIER.NEVER), // 406 V, L75, 30–40% increased Elemental Ailment Threshold

			new Name("Corsair Coat", TIER.BAD), // 406 V, L80, 10–20% reduced Movement Speed Penalty from using Skills while moving

			new Name("Slipstrike Vest", TIER.OTHER), // 487 V, L70

			new Name("Chain Mail", TIER.LOW), // 25 A, 16 V
			new Name("Rogue Armour", TIER.LOW), // 53 A, 43 V, L11
			new Name("Vagabond Armour", TIER.LOW), // 67 A, 56 V, L16
			new Name("Cloaked Mail", TIER.LOW), // 95 A, 83 V, L26
			new Name("Explorer Armour", TIER.LOW), // 114 A, 101 V, L33
			new Name("Scale Mail", TIER.LOW), // 125 A, 112 V, L37
			new Name("Knight Armour", TIER.LOW), // 148 A, 133 V, L45
			new Name("Ancestral Mail", TIER.LOW), // 162 A, 146 V, L50
			new Name("Mantled Mail", TIER.LOW), // 173 A, 157 V, L54
			new Name("Trailblazer Armour", TIER.LOW), // 187 A, 170 V, L59
			new Name("Golden Mail", TIER.LOW), // 195 A, 178 V, L62

			new Name("Dastard Armour", TIER.NEVER), // 245 A, 223 V, L65, +60–80 to maximum Life
			new Name("Shrouded Mail", TIER.NEVER), // 245 A, 223 V, L70, +20–25% to Fire/Cold/Lightning Resistance
			new Name("Death Mail", TIER.NEVER), // 294 A, 268 V, L75
			new Name("Thane Mail", TIER.NEVER), // 245 A, 223 V, L80, Hits against you have 15–25% reduced Critical Damage Bonus

			new Name("Pilgrim Vestments", TIER.LOW), // 25 A, 16 ES
			new Name("Pelt Mantle", TIER.LOW), // 50 A, 23 ES, L10
			new Name("Mail Vestments", TIER.LOW), // 67 A, 28 ES, L16
			new Name("Shaman Mantle", TIER.LOW), // 100 A, 39 ES, L28
			new Name("Ironclad Vestments", TIER.LOW), // 114 A, 43 ES, L33
			new Name("Sacrificial Mantle", TIER.LOW), // 123 A, 46 ES, L36
			new Name("Cleric Vestments", TIER.LOW), // 148 A, 53 ES, L45
			new Name("Tideseer Mantle", TIER.LOW), // 165 A, 58 ES, L51
			new Name("Occultist Mantle", TIER.LOW), // 173 A, 61 ES, L54
			new Name("Plated Vestments", TIER.LOW), // 187 A, 65 ES, L59
			new Name("Heartcarver Mantle", TIER.LOW), // 195 A, 68 ES, L62

			new Name("Conjurer Mantle", TIER.NEVER), // 245 A, 84 ES, L70, +20–30 to Spirit
			new Name("Death Mantle", TIER.NEVER), // 245 A, 84 ES, L75, +1% to all Maximum Elemental Resistances
			new Name("Seastorm Mantle", TIER.NEVER), // 245 A, 84 ES, L80, 8–14% of Damage taken Recouped as Life

			new Name("Wolfskin Mantle", TIER.BAD), // 294 A, 101 ES, L65

			new Name("Hermit Garb", TIER.LOW), // 16 V, 16 ES
			new Name("Waxed Jacket", TIER.LOW), // 43 V, 24 ES, L11
			new Name("Marabout Garb", TIER.LOW), // 56 V, 28 ES, L16
			new Name("Wayfarer Jacket", TIER.LOW), // 88 V, 39 ES, L28
			new Name("Anchorite Garb", TIER.LOW), // 101 V, 43 ES, L33
			new Name("Scalper's Jacket", TIER.LOW), // 117 V, 48 ES, L39
			new Name("Scoundrel Jacket", TIER.LOW), // 133 V, 53 ES, L45
			new Name("Ascetic Garb", TIER.LOW), // 149 V, 58 ES, L51
			new Name("Itinerant Jacket", TIER.LOW), // 157 V, 61 ES, L54
			new Name("Hatungo Garb", TIER.LOW), // 170 V, 65 ES, L59
			new Name("Hawker's Jacket", TIER.LOW), // 178 V, 68 ES, L62

			new Name("Austere Garb", TIER.NEVER), // 223 V, 84 ES, L80, 10–15% reduced Elemental Ailment Duration on you

			new Name("Rambler Jacket", TIER.BAD), // 223 V, 84 ES, L70, +7–13% to Chaos Resistance

			new Name("Sleek Jacket", TIER.OTHER), // 268 V, 101 ES, L65
			new Name("Falconer's Jacket", TIER.OTHER), // 223 V, 84 ES, L75, 5% increased Movement Speed

			// https://poe2db.tw/us/Gloves
			new Name("Torn Gloves", TIER.LOW), // 9 ES
			new Name("Sombre Gloves", TIER.LOW), // 15 ES, L12
			new Name("Stitched Gloves", TIER.LOW), // 17 ES, L16
			new Name("Jewelled Gloves", TIER.LOW), // 22 ES, L26
			new Name("Intricate Gloves", TIER.LOW), // 26 ES, L33
			new Name("Pauascale Gloves", TIER.LOW), // 32 ES, L45
			new Name("Embroidered Gloves", TIER.LOW), // 35 ES, L52
			new Name("Baroque Gloves", TIER.LOW), // 36 ES, L54
			new Name("Gold Gloves", TIER.LOW), // 39 ES, L59
			new Name("Grim Gloves", TIER.LOW), // 42 ES, L65
			new Name("Opulent Gloves", TIER.LOW), // 46 ES, L70
			new Name("Vaal Gloves", TIER.LOW), // 50 ES, L75

			new Name("Sirenscale Gloves", TIER.CLASS), // 54 ES, L80

			new Name("Stocky Mitts", TIER.LOW), // 15 A
			new Name("Riveted Mitts", TIER.LOW), // 31 A, L11
			new Name("Tempered Mitts", TIER.LOW), // 40 A, L16
			new Name("Bolstered Mitts", TIER.LOW), // 58 A, L27
			new Name("Moulded Mitts", TIER.LOW), // 68 A, L33
			new Name("Detailed Mitts", TIER.LOW), // 88 A, L45
			new Name("Ancient Mitts", TIER.LOW), // 103 A, L54
			new Name("Feathered Mitts", TIER.LOW), // 111 A, L59
			new Name("Knightly Mitts", TIER.LOW), // 122 A, L65
			new Name("Ornate Mitts", TIER.LOW), // 134 A, L70
			new Name("Vaal Mitts", TIER.LOW), // 146 A, L75

			new Name("Massive Mitts", TIER.BAD), // 158 A, L80

			new Name("Suede Bracers", TIER.LOW), // 10 V
			new Name("Firm Bracers", TIER.LOW), // 26 V, L11
			new Name("Bound Bracers", TIER.LOW), // 33 V, L16
			new Name("Sectioned Bracers", TIER.LOW), // 52 V, L28
			new Name("Spined Bracers", TIER.LOW), // 60 V, L33
			new Name("Fine Bracers", TIER.LOW), // 79 V, L45
			new Name("Refined Bracers", TIER.LOW), // 93 V, L54
			new Name("Spiked Bracers", TIER.LOW), // 101 V, L59
			new Name("Stalking Bracers", TIER.LOW), // 111 V, L65
			new Name("Grand Bracers", TIER.LOW), // 122 V, L70
			new Name("Barbed Bracers", TIER.LOW), // 133 V, L75

			new Name("Polished Bracers", TIER.NEVER), // 144 V, L80

			new Name("Ringmail Gauntlets", TIER.LOW), // 13 A, 10 V, L6
			new Name("Layered Gauntlets", TIER.LOW), // 22 A, 18 V, L16
			new Name("Doubled Gauntlets", TIER.LOW), // 37 A, 33 V, L33
			new Name("Plate Gauntlets", TIER.LOW), // 48 A, 44 V, L45
			new Name("Zealot Gauntlets", TIER.LOW), // 61 A, 56 V, L59
			new Name("Steelmail Gauntlets", TIER.LOW), // 67 A, 61 V, L65
			new Name("Commander Gauntlets", TIER.LOW), // 74 A, 67 V, L70
			new Name("Cultist Gauntlets", TIER.LOW), // 80 A, 73 V, L75

			new Name("Blacksteel Gauntlets", TIER.NEVER), // 87 A, 79 V, L80

			new Name("Rope Cuffs", TIER.LOW), // 12 A, 6 ES, L5
			new Name("Aged Cuffs", TIER.LOW), // 22 A, 9 ES, L16
			new Name("Goldcast Cuffs", TIER.LOW), // 37 A, 14 ES, L33
			new Name("Verisium Cuffs", TIER.LOW), // 48 A, 17 ES, L45
			new Name("Ornate Cuffs", TIER.LOW), // 61 A, 21 ES, L59
			new Name("Bound Cuffs", TIER.LOW), // 67 A, 23 ES, L65
			new Name("Ancient Cuffs", TIER.LOW), // 74 A, 25 ES, L70
			new Name("Gleaming Cuffs", TIER.LOW), // 80 A, 28 ES, L75

			new Name("Adherent Cuffs", TIER.NEVER), // 87 A, 30 ES, L80

			new Name("Gauze Wraps", TIER.LOW), // 8 V, 6 ES, L4
			new Name("Linen Wraps", TIER.LOW), // 18 V, 9 ES, L16
			new Name("Spiral Wraps", TIER.LOW), // 33 V, 14 ES, L33
			new Name("Buckled Wraps", TIER.LOW), // 44 V, 17 ES, L45
			new Name("Adorned Wraps", TIER.LOW), // 56 V, 21 ES, L59
			new Name("War Wraps", TIER.LOW), // 61 V, 23 ES, L65
			new Name("Elegant Wraps", TIER.LOW), // 67 V, 25 ES, L70
			new Name("Vaal Wraps", TIER.LOW), // 73 V, 28 ES, L75

			new Name("Secured Wraps", TIER.BAD), // 79 V, 30 ES, L80

			// https://poe2db.tw/us/Boots#BootsItem
			new Name("Straw Sandals", TIER.LOW), // 14 ES
			new Name("Wrapped Sandals", TIER.LOW), // 22 ES, L11
			new Name("Lattice Sandals", TIER.LOW), // 25 ES, L16
			new Name("Silk Slippers", TIER.LOW), // 34 ES, L27
			new Name("Feathered Sandals", TIER.LOW), // 38 ES, L33
			new Name("Flax Sandals", TIER.LOW), // 48 ES, L45
			new Name("Elegant Slippers", TIER.LOW), // 54 ES, L54
			new Name("Dunerunner Sandals", TIER.LOW), // 58 ES, L59
			new Name("Bound Sandals", TIER.LOW), // 63 ES, L65
			new Name("Luxurious Slippers", TIER.LOW), // 69 ES, L70
			new Name("Sandsworn Sandals", TIER.LOW), // 75 ES, L75

			new Name("Sekhema Sandals", TIER.OTHER), // 82 ES, L80

			new Name("Rough Greaves", TIER.LOW), // 22 A
			new Name("Iron Greaves", TIER.LOW), // 47 A, L11
			new Name("Bronze Greaves", TIER.LOW), // 60 A, L16
			new Name("Trimmed Greaves", TIER.LOW), // 87 A, L27
			new Name("Stone Greaves", TIER.LOW), // 102 A, L33
			new Name("Reefsteel Greaves", TIER.LOW), // 132 A, L45
			new Name("Elegant Greaves", TIER.LOW), // 155 A, L54
			new Name("Carved Greaves", TIER.LOW), // 167 A, L59
			new Name("Bulwark Greaves", TIER.LOW), // 182 A, L65
			new Name("Ornate Greaves", TIER.LOW), // 200 A, L70
			new Name("Vaal Greaves", TIER.LOW), // 219 A, L75

			new Name("Tasalian Greaves", TIER.BAD), // 237 A, L80

			new Name("Rawhide Boots", TIER.LOW), // 15 V
			new Name("Laced Boots", TIER.LOW), // 38 V, L11
			new Name("Embossed Boots", TIER.LOW), // 50 V, L16
			new Name("Steeltoe Boots", TIER.LOW), // 79 V, L28
			new Name("Lizardscale Boots", TIER.LOW), // 90 V, L33
			new Name("Flared Boots", TIER.LOW), // 119 V, L45
			new Name("Studded Boots", TIER.LOW), // 140 V, L54
			new Name("Serpentscale Boots", TIER.LOW), // 152 V, L59
			new Name("Cinched Boots", TIER.LOW), // 166 V, L65
			new Name("Cavalry Boots", TIER.LOW), // 183 V, L70
			new Name("Dragonscale Boots", TIER.LOW), // 200 V, L75

			new Name("Drakeskin Boots", TIER.NEVER), // 216 V, L80

			new Name("Mail Sabatons", TIER.LOW), // 19 A, 15 V, L6
			new Name("Braced Sabatons", TIER.LOW), // 33 A, 28 V, L16
			new Name("Stacked Sabatons", TIER.LOW), // 56 A, 50 V, L33
			new Name("Covered Sabatons", TIER.LOW), // 73 A, 65 V, L45
			new Name("Bastion Sabatons", TIER.LOW), // 92 A, 84 V, L59
			new Name("Veteran Sabatons", TIER.LOW), // 100 A, 91 V, L65
			new Name("Noble Sabatons", TIER.LOW), // 110 A, 101 V, L70
			new Name("Fortress Sabatons", TIER.LOW), // 120 A, 110 V, L75

			new Name("Blacksteel Sabatons", TIER.NEVER), // 130 A, 119 V, L80

			new Name("Padded Leggings", TIER.LOW), // 18 A, 9 ES, L5
			new Name("Secured Leggings", TIER.LOW), // 33 A, 14 ES, L16
			new Name("Pelt Leggings", TIER.LOW), // 56 A, 21 ES, L33
			new Name("Weaver Leggings", TIER.LOW), // 73 A, 26 ES, L45
			new Name("Shamanistic Leggings", TIER.LOW), // 92 A, 32 ES, L59
			new Name("Faithful Leggings", TIER.LOW), // 100 A, 35 ES, L65
			new Name("Apostle Leggings", TIER.LOW), // 110 A, 38 ES, L70
			new Name("Warlock Leggings", TIER.LOW), // 120 A, 42 ES, L75

			new Name("Cryptic Leggings", TIER.NEVER), // 130 A, 45 ES, L80

			new Name("Frayed Shoes", TIER.LOW), // 13 V, 9 ES, L5
			new Name("Threaded Shoes", TIER.LOW), // 28 V, 14 ES, L16
			new Name("Hunting Shoes", TIER.LOW), // 50 V, 21 ES, L33
			new Name("Steelpoint Shoes", TIER.LOW), // 65 V, 26 ES, L45
			new Name("Treerunner Shoes", TIER.LOW), // 84 V, 32 ES, L59
			new Name("Wanderer Shoes", TIER.LOW), // 91 V, 35 ES, L65
			new Name("Charmed Shoes", TIER.LOW), // 101 V, 38 ES, L70
			new Name("Quickslip Shoes", TIER.LOW), // 110 V, 42 ES, L75

			new Name("Daggerfoot Shoes", TIER.NEVER), // 119 V, 45 ES, L80
		).compare(tier, operator);
	}
	static getUncommons(tier, operator = undefined) {
		return new NameManager(
			// https://poe2db.tw/us/Amulets
			new Name("Crimson Amulet", TIER.NEVER), // 2–4 Life Regeneration per second

			new Name("Azure Amulet", TIER.OTHER), // 20–30% increased Mana Regeneration Rate
			new Name("Amber Amulet", TIER.OTHER), // L8, +10–15 to Strength
			new Name("Jade Amulet", TIER.OTHER), // L8, +10–15 to Dexterity
			new Name("Lapis Amulet", TIER.OTHER), // L8, +10–15 to Intelligence
			new Name("Pearlescent Amulet", TIER.OTHER), // L8, +7–10% to all Elemental Resistances
			new Name("Lunar Amulet", TIER.OTHER), // L14, +20–30 to maximum Energy Shield
			new Name("Bloodstone Amulet", TIER.OTHER), // L18, +30–40 to maximum Life
			new Name("Stellar Amulet", TIER.OTHER), // L25, +5–7 to all Attributes
			new Name("Gold Amulet", TIER.OTHER), // L35, 12–20% increased Rarity of Items found

			new Name("Solar Amulet", TIER.CLASS), // L30, +10–15 to Spirit

			new Name("Dusk Amulet", TIER.SPECIAL), // +1 Prefix Modifier allowed, -1 Suffix Modifier allowed
			new Name("Gloam Amulet", TIER.SPECIAL), // -1 Prefix Modifier allowed, +1 Suffix Modifier allowed
			new Name("Penumbra Amulet", TIER.SPECIAL), // +2 Prefix Modifier allowed, -2 Suffix Modifier allowed
			new Name("Tenebrous Amulet", TIER.SPECIAL), // -2 Prefix Modifier allowed, +2 Suffix Modifier allowed

			// https://poe2db.tw/us/Rings
			new Name("Iron Ring", TIER.NEVER), // Adds 1 to 4 Physical Damage to Attacks
			new Name("Lazuli Ring", TIER.NEVER), // +20–30 to maximum Mana
			new Name("Emerald Ring", TIER.NEVER), // L26, +120–160 to Accuracy Rating

			new Name("Ruby Ring", TIER.BAD), // L8, +20–30% to Fire Resistance
			new Name("Sapphire Ring", TIER.BAD), // L12, +20–30% to Cold Resistance
			new Name("Topaz Ring", TIER.BAD), // L16, +20–30% to Lightning Resistance

			new Name("Amethyst Ring", TIER.OTHER), // L20, +7–13% to Chaos Resistance
			new Name("Pearl Ring", TIER.OTHER), // L32, 7–10% increased Cast Speed
			new Name("Prismatic Ring", TIER.OTHER), // L35, +7–10% to all Elemental Resistances
			new Name("Breach Ring", TIER.OTHER), // L40, Maximum Quality is 40%
			new Name("Unset Ring", TIER.OTHER), // L44, Grants 1 additional Skill Slot

			new Name("Gold Ring", TIER.CLASS), // L40, 6–15% increased Rarity of Items found

			new Name("Dusk Ring", TIER.SPECIAL), // +1 Prefix Modifier allowed, -1 Suffix Modifier allowed
			new Name("Gloam Ring", TIER.SPECIAL), // -1 Prefix Modifier allowed, +1 Suffix Modifier allowed
			new Name("Penumbra Ring", TIER.SPECIAL), // +2 Prefix Modifier allowed, -2 Suffix Modifier allowed
			new Name("Tenebrous Ring", TIER.SPECIAL), // -2 Prefix Modifier allowed, +2 Suffix Modifier allowed

			// https://poe2db.tw/us/Belts
			new Name("Wide Belt", TIER.NEVER), // L14, 20–30% increased Flask Charges gained
			new Name("Double Belt", TIER.NEVER), // L44, 20–30% increased Charm Charges gained

			new Name("Rawhide Belt", TIER.BAD), // 20–30% increased Life Recovery from Flasks
			new Name("Linen Belt", TIER.BAD), // 20–30% increased Mana Recovery from Flasks
			new Name("Plate Belt", TIER.BAD), // L25, +100–140 to Armour
			new Name("Mail Belt", TIER.BAD), // L40, 10–15% reduced Flask Charges used
			new Name("Utility Belt", TIER.BAD), // L55, 20% of Flask Recovery applied Instantly
			new Name("Fine Belt", TIER.BAD), // L62, Flasks gain 0.17 charges per Second

			new Name("Long Belt", TIER.OTHER), // L20, 15–20% increased Charm Effect Duration
			new Name("Ornate Belt", TIER.OTHER), // L31, 10–15% reduced Charm Charges used
			new Name("Heavy Belt", TIER.OTHER), // L50, 20–30% increased Stun Threshold

			// https://poe2db.tw/us/Flasks
			new Name("Lesser Life Flask", TIER.LOW), // 50, 10/60, 3s
			new Name("Lesser Mana Flask", TIER.LOW), // 50, 10/60, 2s
			new Name("Medium Life Flask", TIER.LOW), // L4, 90, 10/65, 5s
			new Name("Medium Mana Flask", TIER.LOW), // L4, 70, 10/65, 3s
			new Name("Greater Life Flask", TIER.LOW), // L10, 150, 10/70, 4s
			new Name("Greater Mana Flask", TIER.LOW), // L10, 90, 10/70, 2.5s
			new Name("Grand Life Flask", TIER.LOW), // L16, 260, 10/75, 5s
			new Name("Grand Mana Flask", TIER.LOW), // L16, 110, 10/75, 2.5s
			new Name("Giant Life Flask", TIER.LOW), // L23, 340, 10/75, 4s
			new Name("Giant Mana Flask", TIER.LOW), // L23, 165, 10/75, 3.5s
			new Name("Colossal Life Flask", TIER.LOW), // L30, 450, 10/75, 4s
			new Name("Colossal Mana Flask", TIER.LOW), // L30, 165, 10/75, 2.5s
			new Name("Gargantuan Life Flask", TIER.LOW), // L40, 710, 10/75, 5s
			new Name("Gargantuan Mana Flask", TIER.LOW), // L40, 185, 10/75, 2s
			new Name("Transcendent Life Flask", TIER.LOW), // L50, 840, 10/75, 4s
			new Name("Transcendent Mana Flask", TIER.LOW), // L50, 285, 10/75, 3.5s

			new Name("Ultimate Life Flask", TIER.OTHER), // L60, 920, 10/75, 3s

			new Name("Ultimate Mana Flask", TIER.CLASS), // L60, 310, 10/75, 3s

			// https://poe2db.tw/us/Charms
			new Name("Ruby Charm", TIER.NEVER), // L5, 20/40, 4s, +25% to Fire Resistance
			new Name("Sapphire Charm", TIER.NEVER), // L5, 20/40, 4s, +25% to Cold Resistance
			new Name("Grounding Charm", TIER.NEVER), // L32, 30/40, 3s, Grants Immunity to Shock
			new Name("Amethyst Charm", TIER.NEVER), // L40, 30/40, 4s, +18% to Chaos Resistance

			new Name("Silver Charm", TIER.BAD), // L10, 20/40, 3s, Your speed is unaffected by Slows

			new Name("Topaz Charm", TIER.OTHER), // L5, 20/40, 4s, +25% to Lightning Resistance
			new Name("Stone Charm", TIER.OTHER), // L8, 20/40, 3s, Cannot be Stunned
			new Name("Antidote Charm", TIER.OTHER), // L24, 20/40, 3s, Grants Immunity to Poison
			new Name("Dousing Charm", TIER.OTHER), // L32, 30/40, 3s, Grants Immunity to Ignite

			new Name("Thawing Charm", TIER.CLASS), // L12, 40/40, 3s, Grants Immunity to Freeze
			new Name("Staunching Charm", TIER.CLASS), // L18, 30/40, 3s, Grants Immunity to Bleeding
			new Name("Golden Charm", TIER.CLASS), // L50, 80/80, 1s, 15% increased Rarity of Items found

		).compare(tier, operator);
	}
	static getUniques(tier, operator = undefined) {
		return new NameManager(
			// https://poe2db.tw/us/Unique_item
			new Name("Acrid Wand", TIER.NEVER), // Cursecarver
			new Name("Attuned Wand", TIER.NEVER), // Lifesprig
			new Name("Bone Wand", TIER.NEVER), // Sanguine Diviner
			// new Name("Chiming Staff", TIER.NEVER), // Sire of Shards, The Burden of Shadows
			new Name("Cultist Greathammer", TIER.NEVER), // The Empty Roar
			new Name("Dualstring Bow", TIER.NEVER), // Death's Harp
			new Name("Dyad Crossbow", TIER.NEVER), // Double Vision
			new Name("Fanatic Bow", TIER.NEVER), // Voltaxic Rift
			new Name("Forge Maul", TIER.NEVER), // Trephina
			new Name("Gothic Quarterstaff", TIER.NEVER), // The Sentry
			new Name("Hunting Spear", TIER.NEVER), // Chainsting
			new Name("Ironhead Spear", TIER.NEVER), // Tyranny's Grip
			new Name("Leaden Greathammer", TIER.NEVER), // Chober Chaber
			new Name("Long Quarterstaff", TIER.NEVER), // Pillar of the Caged God
			new Name("Omen Sceptre", TIER.NEVER), // Font of Power
			new Name("Rattling Sceptre", TIER.NEVER), // The Dark Defiler
			new Name("Recurve Bow", TIER.NEVER), // Splinterheart
			new Name("Temple Maul", TIER.NEVER), // Shyaba
			new Name("Volatile Wand", TIER.NEVER), // Enezun's Charge
			new Name("Voltaic Staff", TIER.NEVER), // Earthbound
			new Name("Withered Wand", TIER.NEVER), // The Wicked Quill
			new Name("Wooden Club", TIER.NEVER), // Brynhand's Mark
			new Name("Wrapped Quarterstaff", TIER.NEVER), // The Blood Thorn
			new Name("Zealot Bow", TIER.NEVER), // Slivertongue

			new Name("Anchorite Garb", TIER.NEVER), // Redflare Conduit
			new Name("Assassin Garb", TIER.NEVER), // Cospri's Will
			new Name("Barricade Tower Shield", TIER.NEVER), // Window to Paradise
			new Name("Blazon Crest Shield", TIER.NEVER), // Alkem Eira
			new Name("Blunt Quiver", TIER.NEVER), // Rearguard
			new Name("Bone Raiment", TIER.NEVER), // Necromantle
			new Name("Braced Tower Shield", TIER.NEVER), // Doomgate
			new Name("Bronze Greaves", TIER.NEVER), // The Infinite Pursuit
			new Name("Chain Mail", TIER.NEVER), // Coat of Red
			new Name("Cloaked Mail", TIER.NEVER), // Pariah's Embrace
			new Name("Corsair Cap", TIER.NEVER), // The Black Insignia
			new Name("Covered Sabatons", TIER.NEVER), // Shankgonne
			new Name("Crucible Tower Shield", TIER.NEVER), // Svalinn
			new Name("Cultist Crown", TIER.NEVER), // Crown of the Pale King
			new Name("Elite Greathelm", TIER.NEVER), // Deidbell
			new Name("Embossed Boots", TIER.NEVER), // Gamblesprint
			new Name("Fierce Greathelm", TIER.NEVER), // Blood Price
			new Name("Fire Quiver", TIER.NEVER), // Blackgleam
			new Name("Firm Bracers", TIER.NEVER), // Grip of Winter
			new Name("Full Plate", TIER.NEVER), // Kingsguard
			new Name("Gold Circlet", TIER.NEVER), // Atziri's Disdain
			new Name("Goldcast Cuffs", TIER.NEVER), // Blueflame Bracers
			new Name("Guarded Helm", TIER.NEVER), // Erian's Cobble
			new Name("Havoc Raiment", TIER.NEVER), // Cloak of Defiance
			new Name("Hewn Mask", TIER.NEVER), // The Hollow Mask
			new Name("Horned Crown", TIER.NEVER), // Bronzebeard
			new Name("Iron Cuirass", TIER.NEVER), // Edyrn's Tusks
			new Name("Iron Greaves", TIER.NEVER), // Corpsewade
			new Name("Jewelled Gloves", TIER.NEVER), // Kitoko's Current
			new Name("Jingling Crest Shield", TIER.NEVER), // Crest of Ardura
			new Name("Keth Raiment", TIER.NEVER), // Prayers for Rain
			new Name("Lace Hood", TIER.NEVER), // Radiant Grief
			new Name("Laced Boots", TIER.NEVER), // Briarpatch
			new Name("Leather Buckler", TIER.NEVER), // Dunkelhalt
			new Name("Leather Vest", TIER.NEVER), // Bristleboar
			new Name("Linen Wraps", TIER.NEVER), // Killjoy
			new Name("Mail Vestments", TIER.NEVER), // Icetomb
			new Name("Maraketh Cuirass", TIER.NEVER), // Titanrot Cataphract
			// new Name("Omen Crest Shield", TIER.NEVER), // Mahuxotl's Machination, Rise of the Phoenix
			new Name("Ornate Buckler", TIER.NEVER), // Calgyra's Arc
			new Name("Pauascale Gloves", TIER.NEVER), // Nightscale
			new Name("Plate Gauntlets", TIER.NEVER), // Valako's Vice
			new Name("Plated Buckler", TIER.NEVER), // Rondel de Ezo
			new Name("Pilgrim Vestments", TIER.NEVER), // Enfolding Dawn
			new Name("Quilted Vest", TIER.NEVER), // Foxshade
			new Name("Rampart Tower Shield", TIER.NEVER), // Lycosidae
			new Name("Riveted Mitts", TIER.NEVER), // Treefingers
			new Name("Rogue Armour", TIER.NEVER), // The Barrow Dweller
			new Name("Rough Greaves", TIER.NEVER), // Legionstride
			new Name("Rusted Greathelm", TIER.NEVER), // Horns of Bynden, Wings of Caelyn
			new Name("Sacrificial Mantle", TIER.NEVER), // Soul Mantle
			new Name("Sectioned Bracers", TIER.NEVER), // Idle Hands
			new Name("Secured Leggings", TIER.NEVER), // Wake of Destruction
			new Name("Shielded Helm", TIER.NEVER), // The Vile Knight
			new Name("Solid Mask", TIER.NEVER), // The Three Dragons
			new Name("Spiked Buckler", TIER.NEVER), // Silverthorne
			new Name("Spiritbone Crown", TIER.NEVER), // Keeper of the Arc
			new Name("Splintered Tower Shield", TIER.NEVER), // Dionadair
			new Name("Stacked Sabatons", TIER.NEVER), // Obern's Bastion
			new Name("Steel Plate", TIER.NEVER), // Wandering Reliquary
			new Name("Stitched Gloves", TIER.NEVER), // Doedre's Tenure
			new Name("Stone Greaves", TIER.NEVER), // Birth of Fury
			new Name("Straw Sandals", TIER.NEVER), // Luminous Pace
			new Name("Suede Bracers", TIER.NEVER), // Northpaw
			new Name("Threaded Shoes", TIER.NEVER), // Ghostmarch
			new Name("Tonal Focus", TIER.NEVER), // Serpent's Lesson
			new Name("Torn Gloves", TIER.NEVER), // Painter's Servant
			new Name("Twig Circlet", TIER.NEVER), // Crown of Thorns
			new Name("Vaal Cuirass", TIER.NEVER), // Greed's Embrace
			new Name("Warrior Greathelm", TIER.NEVER), // Corona of the Red Sun
			new Name("Wooden Buckler", TIER.NEVER), // Nocturne
			new Name("Wrapped Greathelm", TIER.NEVER), // Black Sun Crest

			new Name("Antidote Charm", TIER.NEVER), // Arakaali's Gift
			new Name("Azure Amulet", TIER.NEVER), // The Everlasting Gaze, Ungil's Harmony
			new Name("Dousing Charm", TIER.NEVER), // Beira's Anguish
			// new Name("Emerald Ring", TIER.NEVER), // Death Rush, Thief's Torment, Vigilant View
			// new Name("Iron Ring", TIER.NEVER), // Blackheart, Icefang Orbit, Prized Pain, Venopuncture
			new Name("Lapis Amulet", TIER.NEVER), // Ligurium Talisman, Stone of Lazhwar, The Pandemonius
			new Name("Linen Belt", TIER.NEVER), // Keelhaul, Umbilicus Immortalis
			new Name("Mail Belt", TIER.NEVER), // Coward's Legacy
			new Name("Prismatic Ring", TIER.NEVER), // Gifts from Above
			new Name("Rawhide Belt", TIER.NEVER), // Meginord's Girdle, Midnight Braid
			new Name("Ruby Ring", TIER.NEVER), // Cracklecreep, Blistering Bond
			new Name("Sapphire Charm", TIER.NEVER), // Breath of the Mountains
			new Name("Topaz Charm", TIER.NEVER), // Valako's Roar
			// new Name("Topaz Ring", TIER.NEVER), // Call of the Brotherhood, Levinstone, The Burrower
			new Name("Toxic Quiver", TIER.NEVER), // Murkshaft

			new Name("Barbed Spear", TIER.OTHER), // Saitha's Spear
			new Name("Crude Bow", TIER.OTHER), // Widowhail
			new Name("Helix Spear", TIER.OTHER), // Spire of Ire

			new Name("Viper Cap", TIER.OTHER), // Constricting Command
			new Name("Wrapped Sandals", TIER.OTHER), // Wanderlust

			new Name("Amethyst Ring", TIER.OTHER), // Blackflame, Ming's Heart. GOOD: Original Sin
			new Name("Fire Quiver", TIER.OTHER), // Blackgleam. GOOD: Cadiro's Gambit
			new Name("Gold Ring", TIER.OTHER), // Andvarius, Perandus Seal, Ventor's Gamble
			new Name("Heavy Belt", TIER.OTHER), // Waistgate, Zerphi's Genesis. GOOD: Headhunter
			new Name("Jade Amulet", TIER.OTHER), // Choir of the Storm, Surefooted Sigil. GOOD: Defiance of Destiny
			new Name("Lazuli Ring", TIER.OTHER), // Doedre's Damning, Glowswarm. GOOD: Seed of Cataclysm
			new Name("Pearl Ring", TIER.OTHER), // Evergrasping Ring, Heartbound Loop. GOOD: Snakepit
			new Name("Solar Amulet", TIER.OTHER), // Beacon of Azis. GOOD: Fireflower
			new Name("Sapphire Ring", TIER.OTHER), // Polcirkeln, Whisper of the Brotherhood. GOOD: Dream Fragments
			new Name("Stellar Amulet", TIER.OTHER), // Fixation of Yix, Hinekora's Sight, Strugglescream. GOOD: Astramentis
			new Name("Ultimate Mana Flask", TIER.OTHER), // Melting Maelstrom
			new Name("Wide Belt", TIER.OTHER), // Birthright Buckle, Byrnabas. GOOD: The Gnashing Sash

			new Name("Lattice Sandals", TIER.CLASS), // Bones of Ullr

			new Name("Fine Belt", TIER.CLASS), // GOOD: Shavronne's Satchel. CLASS: Darkness Enthroned
			new Name("Ultimate Life Flask", TIER.CLASS), // Olroth's Resolve
		).compare(tier, operator);
	}
	static getUniqueRelics(min = undefined, max = undefined) {
		return new NameManager(
			// https://poe2db.tw/us/Relics#RelicsUnique_Unique
			new Name("Tapestry Relic", 1 / 1000), // The Burden of Leadership
			new Name("Amphora Relic", 1 / 598), // The Peacemaker's Draught
			new Name("Seal Relic", 1 / 2), // The Changing Seasons

			new Name("Vase Relic", 3 * DIV), // The Desperate Alliance
			new Name("Incense Relic", 98 * DIV), // The Last Flame
		).range(min, max);
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
		if (this.names.length === 0) console.warn("[!] Exporting block with no names!");

		// Alphabetical sort
		this.names.sort((a, b) => a.name.localeCompare(b.name));
		// Then custom value sort
		// this.names.sort((a, b) => a.compare(b));

		return new StringList(
			...this.names.map(name => name.name)
		);
	}
}
export const TIER = NameManager.TIER;
