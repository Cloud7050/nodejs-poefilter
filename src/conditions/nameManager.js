import { PRICE_DIV } from "../constants.js";
import { CATEGORY } from "./category.js";
import { Name } from "./name.js";
import { OPERATOR } from "./operator.js";
import { StringList } from "./stringList.js";

export class NameManager {
	names;

	constructor (...names) {
		this.names = names.reduce((accumulator, name) => {
			if (name instanceof NameManager) accumulator.push(...name.names);
			else accumulator.push(name);
			return accumulator;
		}, []);
	}

	static getCurrencies(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Transmutation Shard", 1 / 10000),
			new Name("Regal Shard", 1 / 4000),
			new Name("Greater Orb of Transmutation", 1 / 4000),
			new Name("Artificer's Shard", 1 / 2000),
			new Name("Greater Orb of Augmentation", 1 / 2000),
			new Name("Orb of Transmutation", 1 / 1000),
			new Name("Lesser Jeweller's Orb", 1 / 1000),
			new Name("Orb of Alchemy", 1 / 598),
			new Name("Orb of Augmentation", 1 / 400),
			new Name("Regal Orb", 1 / 400),
			new Name("Artificer's Orb", 1 / 200),
			new Name("Blacksmith's Whetstone", 1 / 200),
			new Name("Armourer's Scrap", 1 / 200),
			new Name("Glassblower's Bauble", 1 / 200),
			new Name("Scroll of Wisdom", 1 / 120),
			new Name("Perfect Orb of Transmutation", 1 / 110),

			new Name("Greater Jeweller's Orb", 1 / 100),
			new Name("Greater Regal Orb", 1 / 60),
			new Name("Arcanist's Etcher", 1 / 5),
			new Name("Gemcutter's Prism", 1 / 5),
			new Name("Chance Shard", 1 / 10),

			new Name("Perfect Orb of Augmentation", 1),
			new Name("Exalted Orb", 1),
			new Name("Vaal Orb", 1),
			new Name("Orb of Chance", 1),
			new Name("Greater Exalted Orb", 2.14),

			new Name("Perfect Regal Orb", 11),
			new Name("Perfect Jeweller's Orb", 20.5),
			new Name("Chaos Orb", 40),
			new Name("Greater Chaos Orb", 125),
			new Name("Fracturing Orb", 280),
			new Name("Orb of Annulment", PRICE_DIV / 3.33),

			new Name("Divine Orb", PRICE_DIV),
			new Name("Perfect Exalted Orb", 2.25 * PRICE_DIV),
			new Name("Perfect Chaos Orb", 2.5 * PRICE_DIV),
			new Name("Hinekora's Lock", 626 * PRICE_DIV),
			new Name("Mirror of Kalandra", 1600 * PRICE_DIV),
		).value(min, max);
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

		).value(min, max);
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
		).value(min, max);
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
		).value(min, max);
	}

	static getEssences4(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Essence of Insanity", 1.5),

			new Name("Essence of Delirium", 46),
			new Name("Essence of the Abyss", 54),

			new Name("Essence of Hysteria", 500),
			new Name("Essence of Horror", 3 * PRICE_DIV),
		).value(min, max);
	}

	static getAbyss1(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Gnawed Jawbone", 1 / 20),
			new Name("Gnawed Rib", 1 / 20),
			new Name("Gnawed Collarbone", 1 / 2),
		).value(min, max);
	}
	static getAbyss2(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Preserved Jawbone", 1 / 100),
			new Name("Preserved Rib", 1 / 50),

			new Name("Preserved Collarbone", 1.4),
			new Name("Preserved Vertebrae", 3.6),

			//TODO merge abyss as core. This price has no chance sizing block
			new Name("Preserved Cranium", 10),
		).value(min, max);
	}
	static getAbyss3(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Ancient Rib", 1.5 * PRICE_DIV),
			new Name("Ancient Jawbone", 3 * PRICE_DIV),
			new Name("Ancient Collarbone", 6 * PRICE_DIV),
		).value(min, max);
	}

	static getEmotions(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Diluted Liquid Ire", 1 / 3),

			new Name("Diluted Liquid Greed", 1.5),
			new Name("Liquid Envy", 2.57),
			new Name("Liquid Paranoia", 4.1),
			new Name("Diluted Liquid Guilt", 4.17),
			new Name("Liquid Despair", 4.17),

			new Name("Liquid Disgust", 15.56),
			new Name("Concentrated Liquid Suffering", 30),
			new Name("Concentrated Liquid Fear", 40),
			new Name("Concentrated Liquid Isolation", 85),
		).value(min, max);
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
		).value(min, max);
	}

	static getSplinters(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Breach Splinter", 1 / 9),

			new Name("Petition Splinter", 1.29),
			new Name("Simulacrum Splinter", 1.85),
			new Name("Runic Splinter", 6.7),
		).value(min, max);
	}

	static getArtifacts(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Order Artifact", 1 / 40), // Armour
			new Name("Broken Circle Artifact", 1 / 38), // Weapons
			new Name("Black Scythe Artifact", 1 / 4), // Jewellery/belts
			new Name("Sun Artifact", 1 / 4), // Wildcard
		).value(min, max);
	}
	static getCoinage(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Exotic Coinage", 50),
		).value(min, max);
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

			new Name("Omen of Dextral Erasure", 2.18 * PRICE_DIV),
			new Name("Omen of Whittling", 2.5 * PRICE_DIV),
			new Name("Omen of Dextral Annulment", 3.5 * PRICE_DIV),
			new Name("Omen of Sinistral Erasure", 4 * PRICE_DIV),
			new Name("Omen of Sinistral Annulment", 5.33 * PRICE_DIV),
			new Name("Omen of Chance", 6 * PRICE_DIV),
		).value(min, max);
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

			new Name("Omen of Light", 3.33 * PRICE_DIV),
		).value(min, max);
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
		).value(min, max);
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

			new Name("Uhtred's Omen", 6 * PRICE_DIV),
			new Name("Ratha's Assault", 6 * PRICE_DIV),
			new Name("Uul-Netol's Embrace", 11 * PRICE_DIV),
			new Name("Atalui's Bloodletting", 16 * PRICE_DIV),
			new Name("Rakiata's Flow", 20 * PRICE_DIV),
			new Name("Dialla's Desire", 30 * PRICE_DIV),
			new Name("Arjun's Medal", 41 * PRICE_DIV),
			new Name("Uhtred's Augury", 50 * PRICE_DIV),
		).value(min, max);
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
		).value(min, max);
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
		).value(min, max);
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
		).value(min, max);
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

			new Name("Countess Seske's Rune of Archery", 4 * PRICE_DIV),
			new Name("Farrul's Rune of the Chase", 10 * PRICE_DIV),
			new Name("Hedgewitch Assandra's Rune of Wisdom", 21 * PRICE_DIV),
		).value(min, max);
	}

	static getAugments(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Idol of Grold", 1 / 19),
			new Name("Zalatl's Soul Core of Insulation", 1 / 18),
			new Name("Hayoxi's Soul Core of Heatproofing", 1 / 9),
			new Name("Topotante's Soul Core of Dampening", 1 / 8),
			new Name("Xipocado's Soul Core of Dominion", 1 / 3),
			new Name("Cholotl's Soul Core of War", 1 / 3),
			new Name("Bear Idol", 1 / 2),
			new Name("Stag Idol", 1 / 2),

			new Name("Guatelitzi's Soul Core of Endurance", 1),
			new Name("Citaqualotl's Soul Core of Foulness", 1),
			new Name("Tacati's Soul Core of Affliction", 1),
			new Name("Uromoti's Soul Core of Attenuation", 1),
			new Name("Primate Idol", 1),
			new Name("Boar Idol", 1),
			new Name("Serpent Idol", 1),
			new Name("Wolf Idol", 1),
			new Name("Cat Idol", 1),
			new Name("Owl Idol", 1),
			new Name("Ox Idol", 1),
			new Name("Idol of Thruldana", 1),
			new Name("Idol of Maxarius", 1),
			new Name("Idol of Egrin", 1),
			new Name("Idol of Eeshta", 3.5),
			new Name("Fox Idol", 4),
			new Name("Opiloti's Soul Core of Assault", 5),
			new Name("Quipolatl's Soul Core of Flow", 5),
			new Name("Rabbit Idol", 5),
			new Name("Xopec's Soul Core of Power", 6),

			new Name("Ulaman's Gaze", 17),
			new Name("Idol of Ralakesh", 18),
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

			new Name("Idol of Sirrius", 1010),
			new Name("Soul Core of Jiquani", 6 * PRICE_DIV),
		).value(min, max);
	}

	static getNames(c, valueMin = undefined, valueMax = undefined, dropLevel = null, dropLevelOperator = undefined) {
		let categories = c.category.value;

		let nameManager = new NameManager(
			// https://poe2db.tw/us/Sceptres#SceptresItem
			new Name("Omen Sceptre", 5, CATEGORY.SCEPTRE, 16), // Malice
			new Name("Wrath Sceptre", 5, CATEGORY.SCEPTRE, 49), // Fulmination

			new Name("Stoic Sceptre", 10, CATEGORY.SCEPTRE, 6), // Discipline
			new Name("Shrine Sceptre", 10, CATEGORY.SCEPTRE, 26), // Purity of Fire/Ice/Lightning
			new Name("Rattling Sceptre", 20, CATEGORY.SCEPTRE, 0), // Skeletal Warrior

			// https://poe2db.tw/us/Wands#WandsItem
			new Name("Bone Wand", 5, CATEGORY.WAND, 2), // Bone Blast
			new Name("Attuned Wand", 5, CATEGORY.WAND, 2), // Mana Drain
			new Name("Withered Wand", 5, CATEGORY.WAND, 6), // Chaos Bolt
			new Name("Siphoning Wand", 5, CATEGORY.WAND, 11), // Power Siphon
			new Name("Volatile Wand", 5, CATEGORY.WAND, 16), // Volatile Dead
			new Name("Galvanic Wand", 5, CATEGORY.WAND, 25), // Galvanic Field

			new Name("Dueling Wand", 10, CATEGORY.SCEPTRE, 65), // Spellslinger

			// https://poe2db.tw/us/Staves#StavesItem
			new Name("Gelid Staff", 5, CATEGORY.STAFF, 2), // Freezing Shards
			new Name("Voltaic Staff", 5, CATEGORY.STAFF, 2), // Lightning Bolt
			new Name("Pyrophyte Staff", 5, CATEGORY.STAFF, 16), // Solar Orb
			new Name("Reaping Staff", 5, CATEGORY.STAFF, 38), // Reap
			new Name("Roaring Staff", 5, CATEGORY.STAFF, 49), // Unleash
			new Name("Paralysing Staff", 5, CATEGORY.STAFF, 52), // Enervating Nova
			new Name("Sanctified Staff", 5, CATEGORY.STAFF, 56), // Consecrate

			new Name("Ashen Staff", 10, CATEGORY.STAFF, 0), // Firebolt
			new Name("Chiming Staff", 10, CATEGORY.STAFF, 25), // Sigil of Power

			// https://poe2db.tw/us/One_Hand_Maces#OneHandMacesItem
			new Name("Wooden Club", 1, CATEGORY.ONE_HANDED_MACE, 0),
			new Name("Smithing Hammer", 1, CATEGORY.ONE_HANDED_MACE, 4),
			new Name("Slim Mace", 1, CATEGORY.ONE_HANDED_MACE, 10),
			new Name("Spiked Club", 1, CATEGORY.ONE_HANDED_MACE, 16),
			new Name("Warpick", 1, CATEGORY.ONE_HANDED_MACE, 22),
			new Name("Plated Mace", 1, CATEGORY.ONE_HANDED_MACE, 26),
			new Name("Brigand Mace", 1, CATEGORY.ONE_HANDED_MACE, 33),
			new Name("Construct Hammer", 1, CATEGORY.ONE_HANDED_MACE, 36),
			new Name("Morning Star", 1, CATEGORY.ONE_HANDED_MACE, 45),
			new Name("Jade Club", 1, CATEGORY.ONE_HANDED_MACE, 49),
			new Name("Marching Mace", 1, CATEGORY.ONE_HANDED_MACE, 54),
			new Name("Bandit Mace", 1, CATEGORY.ONE_HANDED_MACE, 59),
			new Name("Structured Hammer", 1, CATEGORY.ONE_HANDED_MACE, 62),
			new Name("Flanged Mace", 1, CATEGORY.ONE_HANDED_MACE, 67),
			new Name("Crown Mace", 1, CATEGORY.ONE_HANDED_MACE, 72),
			new Name("Molten Hammer", 5, CATEGORY.ONE_HANDED_MACE, 77), // 35.5-59 phys, 35.5-59 fire, 5% cc, x1.45
			new Name("Akoyan Club", 5, CATEGORY.ONE_HANDED_MACE, 78), // 46-76 phys, 5% cc, x1.45, Always Hits
			new Name("Strife Pick", 5, CATEGORY.ONE_HANDED_MACE, 78), // 49-66 phys, 7% cc, x1.45, +5–10% to Critical Damage Bonus
			new Name("Marauding Mace", 5, CATEGORY.ONE_HANDED_MACE, 77), // 51-84 phys, 5% cc, x1.45
			new Name("Fortified Hammer", 5, CATEGORY.ONE_HANDED_MACE, 79), // 60-73 phys, 5% cc, x1.4, 40% chance to Daze on Hit

			// https://poe2db.tw/us/Spears#SpearsItem
			new Name("Hardwood Spear", 1, CATEGORY.SPEAR, 0),
			new Name("Ironhead Spear", 1, CATEGORY.SPEAR, 5),
			new Name("Hunting Spear", 1, CATEGORY.SPEAR, 10),
			new Name("Winged Spear", 1, CATEGORY.SPEAR, 16),
			new Name("War Spear", 1, CATEGORY.SPEAR, 21),
			new Name("Forked Spear", 1, CATEGORY.SPEAR, 26),
			new Name("Barbed Spear", 1, CATEGORY.SPEAR, 33),
			new Name("Broad Spear", 1, CATEGORY.SPEAR, 40),
			new Name("Crossblade Spear", 1, CATEGORY.SPEAR, 45),
			new Name("Seaglass Spear", 1, CATEGORY.SPEAR, 51),
			new Name("Branched Spear", 1, CATEGORY.SPEAR, 54),
			new Name("Jagged Spear", 1, CATEGORY.SPEAR, 59),
			new Name("Helix Spear", 1, CATEGORY.SPEAR, 65),
			new Name("Orichalcum Spear", 1, CATEGORY.SPEAR, 67),
			new Name("Pronged Spear", 1, CATEGORY.SPEAR, 72),
			new Name("Stalking Spear", 5, CATEGORY.SPEAR, 77), // 47-79 phys, 5% cc, x1.55, 15–25% chance to Maim on Hit
			new Name("Flying Spear", 5, CATEGORY.SPEAR, 78), // 46-77 phys, 5% cc, x1.6, 25–35% increased Projectile Speed with this Weapon
			new Name("Akoyan Spear", 5, CATEGORY.SPEAR, 78), // 39-72 phys, 7% cc, x1.6
			new Name("Grand Spear", 5, CATEGORY.SPEAR, 79), // 56-84 phys, 5% cc, x1.4, 25% increased Melee Strike Range with this weapon

			new Name("Spiked Spear", 10, CATEGORY.SPEAR, 77), // 41-76 phys, 6% cc, x1.5, Bleeding you inflict deals Damage 10—20% faster

			// https://poe2db.tw/us/Bows#BowsItem
			new Name("Crude Bow", 1, CATEGORY.BOW, 0),
			new Name("Shortbow", 1, CATEGORY.BOW, 5),
			new Name("Warden Bow", 1, CATEGORY.BOW, 11),
			new Name("Recurve Bow", 1, CATEGORY.BOW, 16),
			new Name("Composite Bow", 1, CATEGORY.BOW, 22),
			new Name("Dualstring Bow", 1, CATEGORY.BOW, 28),
			new Name("Cultist Bow", 1, CATEGORY.BOW, 33),
			new Name("Zealot Bow", 1, CATEGORY.BOW, 39),
			new Name("Artillery Bow", 1, CATEGORY.BOW, 45),
			new Name("Tribal Bow", 1, CATEGORY.BOW, 50),
			new Name("Twin Bow", 1, CATEGORY.BOW, 54),
			new Name("Adherent Bow", 1, CATEGORY.BOW, 59),
			new Name("Militant Bow", 1, CATEGORY.BOW, 62),
			new Name("Ironwood Shortbow", 1, CATEGORY.BOW, 67),
			new Name("Cavalry Bow", 1, CATEGORY.BOW, 72),
			new Name("Guardian Bow", 5, CATEGORY.BOW, 77), // 53-80 phys, x1.15, 20–30% chance to Chain an additional time
			new Name("Fanatic Bow", 5, CATEGORY.BOW, 79), // 47-79 phys, 28-64 chaos, x1.2

			new Name("Warmonger Bow", 10, CATEGORY.BOW, 77), // 56-84 phys, x1.2
			new Name("Obliterator Bow", 10, CATEGORY.BOW, 78), // 62-115 phys, x1.15, 50% reduced Projectile Range
			new Name("Gemini Bow", 10, CATEGORY.BOW, 78), // 39-72 phys, x1.15, +50% Surpassing chance to fire an additional Arrow

			// https://poe2db.tw/us/Crossbows#CrossbowsItem
			new Name("Makeshift Crossbow", 1, CATEGORY.CROSSBOW, 0),
			new Name("Tense Crossbow", 1, CATEGORY.CROSSBOW, 4),
			new Name("Sturdy Crossbow", 1, CATEGORY.CROSSBOW, 10),
			new Name("Varnished Crossbow", 1, CATEGORY.CROSSBOW, 16),
			new Name("Dyad Crossbow", 1, CATEGORY.CROSSBOW, 20),
			new Name("Alloy Crossbow", 1, CATEGORY.CROSSBOW, 26),
			new Name("Bombard Crossbow", 1, CATEGORY.CROSSBOW, 33),
			new Name("Construct Crossbow", 1, CATEGORY.CROSSBOW, 38),
			new Name("Blackfire Crossbow", 1, CATEGORY.CROSSBOW, 45),
			new Name("Piercing Crossbow", 1, CATEGORY.CROSSBOW, 50),
			new Name("Twin Crossbow", 1, CATEGORY.CROSSBOW, 54),
			new Name("Cannonade Crossbow", 1, CATEGORY.CROSSBOW, 59),
			new Name("Bleak Crossbow", 1, CATEGORY.CROSSBOW, 62),
			new Name("Stout Crossbow", 1, CATEGORY.CROSSBOW, 67),
			new Name("Engraved Crossbow", 1, CATEGORY.CROSSBOW, 72),
			new Name("Flexed Crossbow", 5, CATEGORY.CROSSBOW, 77), // 32-127 phys, 5% cc, x1.6, r0.85, 20–30% increased Bolt Speed
			new Name("Elegant Crossbow", 5, CATEGORY.CROSSBOW, 78), // 31-123 phys, 5% cc, x1.65, r0.85, 20–30% chance to Pierce an Enemy
			new Name("Siege Crossbow", 5, CATEGORY.CROSSBOW, 79), // 29-115 phys, 5% cc, x1.65, r0.75, Grenade Skills Fire an additional Projectile

			new Name("Desolate Crossbow", 10, CATEGORY.CROSSBOW, 77), // 33-132 phys, 5% cc, x1.6, r0.8
			new Name("Gemini Crossbow", 10, CATEGORY.CROSSBOW, 78), // 28-112 phys, 5% cc, x1.6, r1.1, Loads an additional bolt

			// https://poe2db.tw/us/Quarterstaves#QuarterstavesItem
			new Name("Wrapped Quarterstaff", 1, CATEGORY.QUARTERSTAFF, 0),
			new Name("Long Quarterstaff", 1, CATEGORY.QUARTERSTAFF, 4),
			new Name("Gothic Quarterstaff", 1, CATEGORY.QUARTERSTAFF, 11),
			new Name("Crackling Quarterstaff", 1, CATEGORY.QUARTERSTAFF, 16),
			new Name("Crescent Quarterstaff", 1, CATEGORY.QUARTERSTAFF, 20),
			new Name("Steelpoint Quarterstaff", 1, CATEGORY.QUARTERSTAFF, 28),
			new Name("Slicing Quarterstaff", 1, CATEGORY.QUARTERSTAFF, 33),
			new Name("Barrier Quarterstaff", 1, CATEGORY.QUARTERSTAFF, 37),
			new Name("Hefty Quarterstaff", 1, CATEGORY.QUARTERSTAFF, 45),
			new Name("Smooth Quarterstaff", 1, CATEGORY.QUARTERSTAFF, 49),
			new Name("Waxing Quarterstaff", 1, CATEGORY.QUARTERSTAFF, 54),
			new Name("Bladed Quarterstaff", 1, CATEGORY.QUARTERSTAFF, 59),
			new Name("Guardian Quarterstaff", 1, CATEGORY.QUARTERSTAFF, 62),
			new Name("Sinister Quarterstaff", 1, CATEGORY.QUARTERSTAFF, 67),
			new Name("Lunar Quarterstaff", 1, CATEGORY.QUARTERSTAFF, 72),
			new Name("Razor Quarterstaff", 5, CATEGORY.QUARTERSTAFF, 77), // 65-108 phys, 10% cc, x1.4
			new Name("Bolting Quarterstaff", 5, CATEGORY.QUARTERSTAFF, 78), // 24-97 phys, 1-100 lightning, 10% cc, x1.4
			new Name("Dreaming Quarterstaff", 5, CATEGORY.QUARTERSTAFF, 78), // 99-133 phys, 0% cc, x1.5
			new Name("Aegis Quarterstaff", 5, CATEGORY.QUARTERSTAFF, 79), // 58-97 phys, 10% cc, x1.4, +12–18% to Block chance

			new Name("Striking Quarterstaff", 10, CATEGORY.QUARTERSTAFF, 77), // 53-111 phys, 10% cc, x1.4, 16% increased Melee Strike Range with this weapon

			// https://poe2db.tw/us/Talismans#TalismansItem
			//TODO prices have not been checked
			new Name("Changeling Talisman", 1, CATEGORY.TALISMAN, 0),
			new Name("Nettle Talisman", 1, CATEGORY.TALISMAN, 5),
			new Name("Cinderbark Talisman", 1, CATEGORY.TALISMAN, 10),
			new Name("Familial Talisman", 1, CATEGORY.TALISMAN, 16),
			new Name("Frenzied Talisman", 1, CATEGORY.TALISMAN, 22),
			new Name("Primal Talisman", 1, CATEGORY.TALISMAN, 28),
			new Name("Rabid Talisman", 1, CATEGORY.TALISMAN, 34),
			new Name("Vicious Talisman", 1, CATEGORY.TALISMAN, 40),
			new Name("Voltfang Talisman", 1, CATEGORY.TALISMAN, 46),
			new Name("Lumbering Talisman", 1, CATEGORY.TALISMAN, 52),
			new Name("Howling Talisman", 1, CATEGORY.TALISMAN, 55),
			new Name("Fury Talisman", 1, CATEGORY.TALISMAN, 59),
			new Name("Cruel Talisman", 1, CATEGORY.TALISMAN, 63),
			new Name("Spiny Talisman", 1, CATEGORY.TALISMAN, 67),
			new Name("Wildwood Talisman", 1, CATEGORY.TALISMAN, 70),
			new Name("Ashbark Talisman", 1, CATEGORY.TALISMAN, 72),
			new Name("Alpha Talisman", 1, CATEGORY.TALISMAN, 75),

			new Name("Fang Talisman", 10, CATEGORY.TALISMAN, 77), // 70-116 phys, 8% cc, x1.25, Minions deal 30—50% increased Damage
			new Name("Thunder Talisman", 10, CATEGORY.TALISMAN, 77), // 23.1-130.9 phys, 9.9-56.1 lightning, 8% cc, x1.3, 15—25% increased Magnitude of Shock you inflict
			new Name("Fungal Talisman", 10, CATEGORY.TALISMAN, 78), // 59-98 phys, 8% cc, x1.4
			new Name("Jade Talisman", 10, CATEGORY.TALISMAN, 78), // 101-151 phys, 5% cc, x1.1
			new Name("Maji Talisman", 10, CATEGORY.TALISMAN, 79), // 61-114 ogts, 8% cc, x.1.25, +8—12 to Maximum Rage

			// https://poe2db.tw/us/Two_Hand_Maces#TwoHandMacesItem
			new Name("Felled Greatclub", 1, CATEGORY.TWO_HANDED_MACE, 0),
			new Name("Oak Greathammer", 1, CATEGORY.TWO_HANDED_MACE, 4),
			new Name("Forge Maul", 1, CATEGORY.TWO_HANDED_MACE, 11),
			new Name("Studded Greatclub", 1, CATEGORY.TWO_HANDED_MACE, 16),
			new Name("Cultist Greathammer", 1, CATEGORY.TWO_HANDED_MACE, 22),
			new Name("Temple Maul", 1, CATEGORY.TWO_HANDED_MACE, 28),
			new Name("Leaden Greathammer", 1, CATEGORY.TWO_HANDED_MACE, 33),
			new Name("Crumbling Maul", 1, CATEGORY.TWO_HANDED_MACE, 38),
			new Name("Pointed Maul", 1, CATEGORY.TWO_HANDED_MACE, 45),
			new Name("Totemic Greatclub", 1, CATEGORY.TWO_HANDED_MACE, 50),
			new Name("Solemn Maul", 1, CATEGORY.TWO_HANDED_MACE, 54),
			new Name("Heavy Greathammer", 1, CATEGORY.TWO_HANDED_MACE, 59),
			new Name("Disintegrating Maul", 1, CATEGORY.TWO_HANDED_MACE, 62),
			new Name("Anvil Maul", 1, CATEGORY.TWO_HANDED_MACE, 67),
			new Name("Sacred Maul", 1, CATEGORY.TWO_HANDED_MACE, 72),
			new Name("Fanatic Greathammer", 5, CATEGORY.TWO_HANDED_MACE, 78), // 101-137 phys, 5% cc, x1.05, Strikes deal Splash Damage
			new Name("Ruination Maul", 5, CATEGORY.TWO_HANDED_MACE, 79), // 104-127 phys, 8% cc, x1.1, Causes Enemies to Explode on Critical kill, for 10% of their Life as Physical Damage

			new Name("Ironwood Greathammer", 10, CATEGORY.TWO_HANDED_MACE, 77), // 105-196 phys, 5% cc, x1, Causes 30–50% increased Stun Buildup
			new Name("Massive Greathammer", 10, CATEGORY.TWO_HANDED_MACE, 77), // 119-161 phys, 5% cc, x1.1
			new Name("Tawhoan Greatclub", 10, CATEGORY.TWO_HANDED_MACE, 78), // 113-153 phys, 5% cc, x1.1, Warcries Empower an additional Attack

			// https://poe2db.tw/us/Bucklers#BucklersItem
			new Name("Leather Buckler", 1, CATEGORY.BUCKLER, 0),
			new Name("Wooden Buckler", 1, CATEGORY.BUCKLER, 5),
			new Name("Plated Buckler", 1, CATEGORY.BUCKLER, 11),
			new Name("Iron Buckler", 1, CATEGORY.BUCKLER, 16),
			new Name("Ridged Buckler", 1, CATEGORY.BUCKLER, 22),
			new Name("Spiked Buckler", 1, CATEGORY.BUCKLER, 26),
			new Name("Ringed Buckler", 1, CATEGORY.BUCKLER, 33),
			new Name("Edged Buckler", 1, CATEGORY.BUCKLER, 39),
			new Name("Laminate Buckler", 1, CATEGORY.BUCKLER, 45),
			new Name("Pearl Buckler", 1, CATEGORY.BUCKLER, 50),
			new Name("Ornate Buckler", 1, CATEGORY.BUCKLER, 52),
			new Name("Spikeward Buckler", 1, CATEGORY.BUCKLER, 54),
			new Name("Jingling Buckler", 1, CATEGORY.BUCKLER, 59),
			new Name("Bladeguard Buckler", 1, CATEGORY.BUCKLER, 61),
			new Name("Ornate Buckler", 1, CATEGORY.BUCKLER, 65),
			new Name("Gutspike Buckler", 1, CATEGORY.BUCKLER, 70),
			new Name("Ancient Buckler", 1, CATEGORY.BUCKLER, 75),
			new Name("Desert Buckler", 5, CATEGORY.BUCKLER, 80),

			// https://poe2db.tw/us/Shields#ShieldsItem
			new Name("Splintered Tower Shield", 1, CATEGORY.SHIELD_ARMOUR, 0),
			new Name("Painted Tower Shield", 1, CATEGORY.SHIELD_ARMOUR, 6),
			new Name("Braced Tower Shield", 1, CATEGORY.SHIELD_ARMOUR, 12),
			new Name("Barricade Tower Shield", 1, CATEGORY.SHIELD_ARMOUR, 16),
			new Name("Effigial Tower Shield", 1, CATEGORY.SHIELD_ARMOUR, 21),
			new Name("Rampart Tower Shield", 1, CATEGORY.SHIELD_ARMOUR, 28),
			new Name("Heraldric Tower Shield", 1, CATEGORY.SHIELD_ARMOUR, 33),
			new Name("Stone Tower Shield", 1, CATEGORY.SHIELD_ARMOUR, 36),
			new Name("Crucible Tower Shield", 1, CATEGORY.SHIELD_ARMOUR, 45),
			new Name("Ancestor Tower Shield", 1, CATEGORY.SHIELD_ARMOUR, 50),
			new Name("Bulwark Tower Shield", 1, CATEGORY.SHIELD_ARMOUR, 54),
			new Name("Noble Tower Shield", 1, CATEGORY.SHIELD_ARMOUR, 59),
			new Name("Goldworked Tower Shield", 1, CATEGORY.SHIELD_ARMOUR, 61),
			new Name("Royal Tower Shield", 1, CATEGORY.SHIELD_ARMOUR, 65),
			new Name("Fortress Tower Shield", 1, CATEGORY.SHIELD_ARMOUR, 70),
			new Name("Vaal Tower Shield", 1, CATEGORY.SHIELD_ARMOUR, 75),
			new Name("Tawhoan Tower Shield", 5, CATEGORY.SHIELD_ARMOUR, 80),

			new Name("Hardwood Targe", 1, CATEGORY.SHIELD_ARMOUR_EVASION, 0),
			new Name("Pelage Targe", 1, CATEGORY.SHIELD_ARMOUR_EVASION, 8),
			new Name("Studded Targe", 1, CATEGORY.SHIELD_ARMOUR_EVASION, 16),
			new Name("Crescent Targe", 1, CATEGORY.SHIELD_ARMOUR_EVASION, 26),
			new Name("Chiseled Targe", 1, CATEGORY.SHIELD_ARMOUR_EVASION, 33),
			new Name("Feathered Targe", 1, CATEGORY.SHIELD_ARMOUR_EVASION, 37),
			new Name("Stratified Targe", 1, CATEGORY.SHIELD_ARMOUR_EVASION, 46),
			new Name("Carved Targe", 1, CATEGORY.SHIELD_ARMOUR_EVASION, 51),
			new Name("Polished Targe", 1, CATEGORY.SHIELD_ARMOUR_EVASION, 54),
			new Name("Stone Targe", 1, CATEGORY.SHIELD_ARMOUR_EVASION, 59),
			new Name("Avian Targe", 1, CATEGORY.SHIELD_ARMOUR_EVASION, 62),
			new Name("Mammoth Targe", 1, CATEGORY.SHIELD_ARMOUR_EVASION, 65),
			new Name("Baroque Targe", 1, CATEGORY.SHIELD_ARMOUR_EVASION, 70),
			new Name("Soaring Targe", 1, CATEGORY.SHIELD_ARMOUR_EVASION, 75),
			new Name("Golden Targe", 5, CATEGORY.SHIELD_ARMOUR_EVASION, 80),

			new Name("Blazon Crest Shield", 1, CATEGORY.SHIELD_ARMOUR_ES, 0),
			new Name("Sigil Crest Shield", 1, CATEGORY.SHIELD_ARMOUR_ES, 7),
			new Name("Emblem Crest Shield", 1, CATEGORY.SHIELD_ARMOUR_ES, 16),
			new Name("Jingling Crest Shield", 1, CATEGORY.SHIELD_ARMOUR_ES, 28),
			new Name("Sectarian Crest Shield", 1, CATEGORY.SHIELD_ARMOUR_ES, 33),
			new Name("Omen Crest Shield", 1, CATEGORY.SHIELD_ARMOUR_ES, 36),
			new Name("Wayward Crest Shield", 1, CATEGORY.SHIELD_ARMOUR_ES, 45),
			new Name("Seer Crest Shield", 1, CATEGORY.SHIELD_ARMOUR_ES, 50),
			new Name("Dekharan Crest Shield", 1, CATEGORY.SHIELD_ARMOUR_ES, 54),
			new Name("Quartered Crest Shield", 1, CATEGORY.SHIELD_ARMOUR_ES, 59),
			new Name("Glowering Crest Shield", 1, CATEGORY.SHIELD_ARMOUR_ES, 62),
			new Name("Intricate Crest Shield", 1, CATEGORY.SHIELD_ARMOUR_ES, 65),
			new Name("Sekheman Crest Shield", 1, CATEGORY.SHIELD_ARMOUR_ES, 70),
			new Name("Vaal Crest Shield", 1, CATEGORY.SHIELD_ARMOUR_ES, 75),
			new Name("Blacksteel Crest Shield", 5, CATEGORY.SHIELD_ARMOUR_ES, 80),

			// https://poe2db.tw/us/Foci#FociItem
			new Name("Twig Focus", 1, CATEGORY.FOCUS, 0),
			new Name("Woven Focus", 1, CATEGORY.FOCUS, 6),
			new Name("Antler Focus", 1, CATEGORY.FOCUS, 10),
			new Name("Engraved Focus", 1, CATEGORY.FOCUS, 16),
			new Name("Tonal Focus", 1, CATEGORY.FOCUS, 22),
			new Name("Crystal Focus", 1, CATEGORY.FOCUS, 26),
			new Name("Voodoo Focus", 1, CATEGORY.FOCUS, 33),
			new Name("Plumed Focus", 1, CATEGORY.FOCUS, 36),
			new Name("Runed Focus", 1, CATEGORY.FOCUS, 45),
			new Name("Whorl Focus", 1, CATEGORY.FOCUS, 51),
			new Name("Arrayed Focus", 1, CATEGORY.FOCUS, 54),
			new Name("Cultist Focus", 1, CATEGORY.FOCUS, 59),
			new Name("Hallowed Focus", 1, CATEGORY.FOCUS, 61),
			new Name("Druidic Focus", 1, CATEGORY.FOCUS, 65),
			new Name("Leyline Focus", 1, CATEGORY.FOCUS, 70),
			new Name("Sacred Focus", 1, CATEGORY.FOCUS, 75),

			new Name("Tasalian Focus", 20, CATEGORY.FOCUS, 80),

			// https://poe2db.tw/us/Quivers#QuiversItem
			new Name("Broadhead Quiver", 1, CATEGORY.QUIVER, 0), // Adds 1 to 3 Physical Damage to Attacks
			new Name("Two-Point Quiver", 1, CATEGORY.QUIVER, 24), // 20–30% increased Accuracy Rating
			new Name("Serrated Quiver", 1, CATEGORY.QUIVER, 44), // Attacks have 20–30% chance to cause Bleeding
			new Name("Toxic Quiver", 5, CATEGORY.QUIVER, 39), // 20–30% chance to Poison on Hit with Attacks
			new Name("Primed Quiver", 5, CATEGORY.QUIVER, 51), // 7–10% increased Attack Speed

			new Name("Fire Quiver", 10, CATEGORY.QUIVER, 8), // Adds 3 to 5 Fire damage to Attacks
			new Name("Sacral Quiver", 10, CATEGORY.QUIVER, 16), // Gain 2–3 Life per Enemy Hit with Attacks
			new Name("Blunt Quiver", 10, CATEGORY.QUIVER, 33), // 25–40% increased Stun Buildup
			new Name("Penetrating Quiver", 10, CATEGORY.QUIVER, 55), //100% chance to Pierce an Enemy
			new Name("Volant Quiver", 10, CATEGORY.QUIVER, 61), // 20–30% increased Arrow Speed
			new Name("Visceral Quiver", 10, CATEGORY.QUIVER, 65), // 20–30% increased Critical Hit Chance for Attacks

			// https://poe2db.tw/us/Helmets
			new Name("Rusted Greathelm", 1, CATEGORY.HELMET_ARMOUR, 0),
			new Name("Soldier Greathelm", 1, CATEGORY.HELMET_ARMOUR, 12),
			new Name("Wrapped Greathelm", 1, CATEGORY.HELMET_ARMOUR, 16),
			new Name("Spired Greathelm", 1, CATEGORY.HELMET_ARMOUR, 27),
			new Name("Elite Greathelm", 1, CATEGORY.HELMET_ARMOUR, 33),
			new Name("Warrior Greathelm", 1, CATEGORY.HELMET_ARMOUR, 36),
			new Name("Commander Greathelm", 1, CATEGORY.HELMET_ARMOUR, 45),
			new Name("Fierce Greathelm", 1, CATEGORY.HELMET_ARMOUR, 51),
			new Name("Elegant Greathelm", 1, CATEGORY.HELMET_ARMOUR, 54),
			new Name("Noble Greathelm", 1, CATEGORY.HELMET_ARMOUR, 59),
			new Name("Warmonger Greathelm", 1, CATEGORY.HELMET_ARMOUR, 65),
			new Name("Masked Greathelm", 1, CATEGORY.HELMET_ARMOUR, 70),
			new Name("Paragon Greathelm", 1, CATEGORY.HELMET_ARMOUR, 75),
			new Name("Imperial Greathelm", 5, CATEGORY.HELMET_ARMOUR, 80),

			new Name("Shabby Hood", 1, CATEGORY.HELMET_EVASION, 0),
			new Name("Felt Cap", 1, CATEGORY.HELMET_EVASION, 10),
			new Name("Lace Hood", 1, CATEGORY.HELMET_EVASION, 16),
			new Name("Swathed Cap", 1, CATEGORY.HELMET_EVASION, 26),
			new Name("Hunter Hood", 1, CATEGORY.HELMET_EVASION, 33),
			new Name("Viper Cap", 1, CATEGORY.HELMET_EVASION, 38),
			new Name("Corsair Cap", 1, CATEGORY.HELMET_EVASION, 45),
			new Name("Leatherbound Hood", 1, CATEGORY.HELMET_EVASION, 50),
			new Name("Wrapped Cap", 1, CATEGORY.HELMET_EVASION, 54),
			new Name("Deerstalker Hood", 1, CATEGORY.HELMET_EVASION, 59),
			new Name("Woven Cap", 1, CATEGORY.HELMET_EVASION, 65),
			new Name("Desert Cap", 1, CATEGORY.HELMET_EVASION, 70),
			new Name("Trapper Hood", 1, CATEGORY.HELMET_EVASION, 75),
			new Name("Freebooter Cap", 5, CATEGORY.HELMET_EVASION, 80),

			new Name("Twig Circlet", 1, CATEGORY.HELMET_ES, 0),
			new Name("Wicker Tiara", 1, CATEGORY.HELMET_ES, 10),
			new Name("Beaded Circlet", 1, CATEGORY.HELMET_ES, 16),
			new Name("Chain Tiara", 1, CATEGORY.HELMET_ES, 26),
			new Name("Feathered Tiara", 1, CATEGORY.HELMET_ES, 33),
			new Name("Gold Circlet", 1, CATEGORY.HELMET_ES, 40),
			new Name("Vermeil Circlet", 1, CATEGORY.HELMET_ES, 45),
			new Name("Jade Tiara", 1, CATEGORY.HELMET_ES, 50),
			new Name("Sandsworn Tiara", 1, CATEGORY.HELMET_ES, 54),
			new Name("Jungle Tiara", 1, CATEGORY.HELMET_ES, 59),
			new Name("Skycrown Tiara", 1, CATEGORY.HELMET_ES, 65),
			new Name("Sorcerous Tiara", 1, CATEGORY.HELMET_ES, 70),
			new Name("Kamasan Tiara", 1, CATEGORY.HELMET_ES, 75),

			new Name("Ancestral Tiara", 20, CATEGORY.HELMET_ES, 80),

			new Name("Brimmed Helm", 1, CATEGORY.HELMET_ARMOUR_EVASION, 5),
			new Name("Guarded Helm", 1, CATEGORY.HELMET_ARMOUR_EVASION, 11),
			new Name("Visored Helm", 1, CATEGORY.HELMET_ARMOUR_EVASION, 16),
			new Name("Cowled Helm", 1, CATEGORY.HELMET_ARMOUR_EVASION, 26),
			new Name("Shielded Helm", 1, CATEGORY.HELMET_ARMOUR_EVASION, 33),
			new Name("Closed Helm", 1, CATEGORY.HELMET_ARMOUR_EVASION, 45),
			new Name("Cabalist Helm", 1, CATEGORY.HELMET_ARMOUR_EVASION, 54),
			new Name("Warded Helm", 1, CATEGORY.HELMET_ARMOUR_EVASION, 65),
			new Name("Cryptic Helm", 1, CATEGORY.HELMET_ARMOUR_EVASION, 70),
			new Name("Champion Helm", 1, CATEGORY.HELMET_ARMOUR_EVASION, 75),
			new Name("Gladiatorial Helm", 5, CATEGORY.HELMET_ARMOUR_EVASION, 80),

			new Name("Iron Crown", 1, CATEGORY.HELMET_ARMOUR_ES, 5),
			new Name("Horned Crown", 1, CATEGORY.HELMET_ARMOUR_ES, 10),
			new Name("Cultist Crown", 1, CATEGORY.HELMET_ARMOUR_ES, 16),
			new Name("Martyr Crown", 1, CATEGORY.HELMET_ARMOUR_ES, 28),
			new Name("Heavy Crown", 1, CATEGORY.HELMET_ARMOUR_ES, 33),
			new Name("Spiritbone Crown", 1, CATEGORY.HELMET_ARMOUR_ES, 45),
			new Name("Hallowed Crown", 1, CATEGORY.HELMET_ARMOUR_ES, 54),
			new Name("Inquisitor Crown", 1, CATEGORY.HELMET_ARMOUR_ES, 59),
			new Name("Druidic Crown", 1, CATEGORY.HELMET_ARMOUR_ES, 65),
			new Name("Saintly Crown", 1, CATEGORY.HELMET_ARMOUR_ES, 70),
			new Name("Divine Crown", 1, CATEGORY.HELMET_ARMOUR_ES, 75),
			new Name("Cryptic Crown", 5, CATEGORY.HELMET_ARMOUR_ES, 80),

			new Name("Hewn Mask", 1, CATEGORY.HELMET_EVASION_ES, 5),
			new Name("Face Mask", 1, CATEGORY.HELMET_EVASION_ES, 10),
			new Name("Hooded Mask", 1, CATEGORY.HELMET_EVASION_ES, 16),
			new Name("Veiled Mask", 1, CATEGORY.HELMET_EVASION_ES, 28),
			new Name("Tribal Mask", 1, CATEGORY.HELMET_EVASION_ES, 33),
			new Name("Solid Mask", 1, CATEGORY.HELMET_EVASION_ES, 45),
			new Name("Pariah Mask", 1, CATEGORY.HELMET_EVASION_ES, 54),
			new Name("Avian Mask", 1, CATEGORY.HELMET_EVASION_ES, 59),
			new Name("Brigand Mask", 1, CATEGORY.HELMET_EVASION_ES, 65),
			new Name("Faridun Mask", 1, CATEGORY.HELMET_EVASION_ES, 70),
			new Name("Soaring Mask", 1, CATEGORY.HELMET_EVASION_ES, 75),
			new Name("Grinning Mask", 5, CATEGORY.HELMET_EVASION_ES, 80),

			// https://poe2db.tw/us/Body_Armours#BodyArmoursItem
			new Name("Rusted Cuirass", 1, CATEGORY.BODY_ARMOUR, 0),
			new Name("Fur Plate", 1, CATEGORY.BODY_ARMOUR, 4),
			new Name("Iron Cuirass", 1, CATEGORY.BODY_ARMOUR, 11),
			new Name("Raider Plate", 1, CATEGORY.BODY_ARMOUR, 16),
			new Name("Maraketh Cuirass", 1, CATEGORY.BODY_ARMOUR, 20),
			new Name("Steel Plate", 1, CATEGORY.BODY_ARMOUR, 27),
			new Name("Full Plate", 1, CATEGORY.BODY_ARMOUR, 33),
			new Name("Vaal Cuirass", 1, CATEGORY.BODY_ARMOUR, 37),
			new Name("Juggernaut Plate", 1, CATEGORY.BODY_ARMOUR, 45),
			new Name("Chieftain Cuirass", 1, CATEGORY.BODY_ARMOUR, 50),
			new Name("Elegant Plate", 1, CATEGORY.BODY_ARMOUR, 54),
			new Name("Heavy Plate", 1, CATEGORY.BODY_ARMOUR, 59),
			new Name("Stone Cuirass", 1, CATEGORY.BODY_ARMOUR, 62),
			new Name("Ornate Plate", 5, CATEGORY.BODY_ARMOUR, 70), // 445 A, Regenerate 1.5–2.5% of maximum Life per second
			new Name("Utzaal Cuirass", 5, CATEGORY.BODY_ARMOUR, 75), // 445 A, 30–40% increased Stun Threshold

			new Name("Soldier Cuirass", 10, CATEGORY.BODY_ARMOUR, 65), // 534 A
			new Name("Warlord Cuirass", 10, CATEGORY.BODY_ARMOUR, 80), // 445 A, +15–25% of Armour also applies to Elemental Damage

			new Name("Leather Vest", 1, CATEGORY.BODY_EVASION, 0),
			new Name("Quilted Vest", 1, CATEGORY.BODY_EVASION, 4),
			new Name("Pathfinder Coat", 1, CATEGORY.BODY_EVASION, 11),
			new Name("Shrouded Vest", 1, CATEGORY.BODY_EVASION, 16),
			new Name("Rhoahide Coat", 1, CATEGORY.BODY_EVASION, 22),
			new Name("Studded Vest", 1, CATEGORY.BODY_EVASION, 26),
			new Name("Scout's Vest", 1, CATEGORY.BODY_EVASION, 33),
			new Name("Serpentscale Coat", 1, CATEGORY.BODY_EVASION, 36),
			new Name("Corsair Vest", 1, CATEGORY.BODY_EVASION, 45),
			new Name("Smuggler Coat", 1, CATEGORY.BODY_EVASION, 51),
			new Name("Layered Vest", 1, CATEGORY.BODY_EVASION, 54),
			new Name("Runner Vest", 1, CATEGORY.BODY_EVASION, 59),
			new Name("Lizardscale Coat", 1, CATEGORY.BODY_EVASION, 62),
			new Name("Swiftstalker Coat", 5, CATEGORY.BODY_EVASION, 65), // 406 V, 20–30% reduced Slowing Potency of Debuffs on You
			new Name("Wyrmscale Coat", 5, CATEGORY.BODY_EVASION, 75), // 406 V, 30–40% increased Elemental Ailment Threshold

			new Name("Slipstrike Vest", 10, CATEGORY.BODY_EVASION, 70), // 487 V
			new Name("Corsair Coat", 20, CATEGORY.BODY_EVASION, 80), // 406 V, 5% increased Movement Speed

			new Name("Tattered Robe", 1, CATEGORY.BODY_ES, 0),
			new Name("Feathered Robe", 1, CATEGORY.BODY_ES, 5),
			new Name("Hexer's Robe", 1, CATEGORY.BODY_ES, 11),
			new Name("Bone Raiment", 1, CATEGORY.BODY_ES, 16),
			new Name("Silk Robe", 1, CATEGORY.BODY_ES, 22),
			new Name("Keth Raiment", 1, CATEGORY.BODY_ES, 28),
			new Name("Votive Raiment", 1, CATEGORY.BODY_ES, 33),
			new Name("Altar Robe", 1, CATEGORY.BODY_ES, 40),
			new Name("Elementalist Robe", 1, CATEGORY.BODY_ES, 45),
			new Name("Mystic Raiment", 1, CATEGORY.BODY_ES, 49),
			new Name("River Raiment", 1, CATEGORY.BODY_ES, 54),
			new Name("Adherent's Raiment", 1, CATEGORY.BODY_ES, 59),
			new Name("Ceremonial Robe", 1, CATEGORY.BODY_ES, 62),
			new Name("Sacramental Robe", 5, CATEGORY.BODY_ES, 75), /// 153 ES, 40–50% faster start of Energy Shield Recharge

			new Name("Flowing Raiment", 10, CATEGORY.BODY_ES, 70), /// 153 ES, 40–50% increased Mana Regeneration Rate
			new Name("Feathered Raiment", 10, CATEGORY.BODY_ES, 80), /// 153 ES, 5–10% of Damage is taken from Mana before Life
			new Name("Vile Robe", 20, CATEGORY.BODY_ES, 65), /// 184 ES

			new Name("Chain Mail", 1, CATEGORY.BODY_ARMOUR_EVASION, 0),
			new Name("Rogue Armour", 1, CATEGORY.BODY_ARMOUR_EVASION, 11),
			new Name("Vagabond Armour", 1, CATEGORY.BODY_ARMOUR_EVASION, 16),
			new Name("Cloaked Mail", 1, CATEGORY.BODY_ARMOUR_EVASION, 26),
			new Name("Explorer Armour", 1, CATEGORY.BODY_ARMOUR_EVASION, 33),
			new Name("Scale Mail", 1, CATEGORY.BODY_ARMOUR_EVASION, 37),
			new Name("Knight Armour", 1, CATEGORY.BODY_ARMOUR_EVASION, 45),
			new Name("Ancestral Mail", 1, CATEGORY.BODY_ARMOUR_EVASION, 50),
			new Name("Mantled Mail", 1, CATEGORY.BODY_ARMOUR_EVASION, 54),
			new Name("Trailblazer Armour", 1, CATEGORY.BODY_ARMOUR_EVASION, 59),
			new Name("Golden Mail", 1, CATEGORY.BODY_ARMOUR_EVASION, 62),
			new Name("Dastard Armour", 1, CATEGORY.BODY_ARMOUR_EVASION, 65), // 245 A, 223 V, +60–80 to maximum Life
			new Name("Shrouded Mail", 1, CATEGORY.BODY_ARMOUR_EVASION, 70), // 245 A, 223 V, +20–25% to Fire/Cold/Lightning Resistance
			new Name("Thane Mail", 1, CATEGORY.BODY_ARMOUR_EVASION, 80), // 245 A, 223 V, Hits against you have 15–25% reduced Critical Damage Bonus
			new Name("Death Mail", 5, CATEGORY.BODY_ARMOUR_EVASION, 75), // 294 A, 268 V

			new Name("Pilgrim Vestments", 1, CATEGORY.BODY_ARMOUR_ES, 0),
			new Name("Pelt Mantle", 1, CATEGORY.BODY_ARMOUR_ES, 10),
			new Name("Mail Vestments", 1, CATEGORY.BODY_ARMOUR_ES, 16),
			new Name("Shaman Mantle", 1, CATEGORY.BODY_ARMOUR_ES, 28),
			new Name("Ironclad Vestments", 1, CATEGORY.BODY_ARMOUR_ES, 33),
			new Name("Sacrificial Mantle", 1, CATEGORY.BODY_ARMOUR_ES, 36),
			new Name("Cleric Vestments", 1, CATEGORY.BODY_ARMOUR_ES, 45),
			new Name("Tideseer Mantle", 1, CATEGORY.BODY_ARMOUR_ES, 51),
			new Name("Occultist Mantle", 1, CATEGORY.BODY_ARMOUR_ES, 54),
			new Name("Plated Vestments", 1, CATEGORY.BODY_ARMOUR_ES, 59),
			new Name("Heartcarver Mantle", 1, CATEGORY.BODY_ARMOUR_ES, 62),
			new Name("Conjurer Mantle", 1, CATEGORY.BODY_ARMOUR_ES, 70), // 245 A, 84 ES, +20–30 to Spirit
			new Name("Death Mantle", 1, CATEGORY.BODY_ARMOUR_ES, 75), // 245 A, 84 ES, +1% to all Maximum Elemental Resistances
			new Name("Seastorm Mantle", 1, CATEGORY.BODY_ARMOUR_ES, 80), // 245 A, 84 ES, 8–14% of Damage taken Recouped as Life
			new Name("Wolfskin Mantle", 5, CATEGORY.BODY_ARMOUR_ES, 65), // 294 A, 101 ES

			new Name("Hermit Garb", 1, CATEGORY.BODY_EVASION_ES, 0),
			new Name("Waxed Jacket", 1, CATEGORY.BODY_EVASION_ES, 11),
			new Name("Marabout Garb", 1, CATEGORY.BODY_EVASION_ES, 16),
			new Name("Wayfarer Jacket", 1, CATEGORY.BODY_EVASION_ES, 28),
			new Name("Anchorite Garb", 1, CATEGORY.BODY_EVASION_ES, 33),
			new Name("Scalper's Jacket", 1, CATEGORY.BODY_EVASION_ES, 39),
			new Name("Scoundrel Jacket", 1, CATEGORY.BODY_EVASION_ES, 45),
			new Name("Ascetic Garb", 1, CATEGORY.BODY_EVASION_ES, 51),
			new Name("Itinerant Jacket", 1, CATEGORY.BODY_EVASION_ES, 54),
			new Name("Hatungo Garb", 1, CATEGORY.BODY_EVASION_ES, 59),
			new Name("Hawker's Jacket", 1, CATEGORY.BODY_EVASION_ES, 62),
			new Name("Austere Garb", 1, CATEGORY.BODY_EVASION_ES, 80), // 223 V, 84 ES, 10–15% reduced Elemental Ailment Duration on you
			new Name("Rambler Jacket", 5, CATEGORY.BODY_EVASION_ES, 70), // 223 V, 84 ES, +7–13% to Chaos Resistance

			new Name("Sleek Jacket", 10, CATEGORY.BODY_EVASION_ES, 65), // 268 V, 101 ES
			new Name("Falconer's Jacket", 10, CATEGORY.BODY_EVASION_ES, 75), // 223 V, 84 ES, 5% increased Movement Speed

			// https://poe2db.tw/us/Gloves
			new Name("Stocky Mitts", 1, CATEGORY.GLOVES_ARMOUR, 0),
			new Name("Riveted Mitts", 1, CATEGORY.GLOVES_ARMOUR, 11),
			new Name("Tempered Mitts", 1, CATEGORY.GLOVES_ARMOUR, 16),
			new Name("Bolstered Mitts", 1, CATEGORY.GLOVES_ARMOUR, 27),
			new Name("Moulded Mitts", 1, CATEGORY.GLOVES_ARMOUR, 33),
			new Name("Detailed Mitts", 1, CATEGORY.GLOVES_ARMOUR, 45),
			new Name("Ancient Mitts", 1, CATEGORY.GLOVES_ARMOUR, 54),
			new Name("Feathered Mitts", 1, CATEGORY.GLOVES_ARMOUR, 59),
			new Name("Knightly Mitts", 1, CATEGORY.GLOVES_ARMOUR, 65),
			new Name("Ornate Mitts", 1, CATEGORY.GLOVES_ARMOUR, 70),
			new Name("Vaal Mitts", 1, CATEGORY.GLOVES_ARMOUR, 75),
			new Name("Massive Mitts", 5, CATEGORY.GLOVES_ARMOUR, 80),

			new Name("Suede Bracers", 1, CATEGORY.GLOVES_EVASION, 0),
			new Name("Firm Bracers", 1, CATEGORY.GLOVES_EVASION, 11),
			new Name("Bound Bracers", 1, CATEGORY.GLOVES_EVASION, 16),
			new Name("Sectioned Bracers", 1, CATEGORY.GLOVES_EVASION, 28),
			new Name("Spined Bracers", 1, CATEGORY.GLOVES_EVASION, 33),
			new Name("Fine Bracers", 1, CATEGORY.GLOVES_EVASION, 45),
			new Name("Refined Bracers", 1, CATEGORY.GLOVES_EVASION, 54),
			new Name("Spiked Bracers", 1, CATEGORY.GLOVES_EVASION, 59),
			new Name("Stalking Bracers", 1, CATEGORY.GLOVES_EVASION, 65),
			new Name("Grand Bracers", 1, CATEGORY.GLOVES_EVASION, 70),
			new Name("Barbed Bracers", 1, CATEGORY.GLOVES_EVASION, 75),
			new Name("Polished Bracers", 5, CATEGORY.GLOVES_EVASION, 80),

			new Name("Torn Gloves", 1, CATEGORY.GLOVES_ES, 0),
			new Name("Sombre Gloves", 1, CATEGORY.GLOVES_ES, 12),
			new Name("Stitched Gloves", 1, CATEGORY.GLOVES_ES, 16),
			new Name("Jewelled Gloves", 1, CATEGORY.GLOVES_ES, 26),
			new Name("Intricate Gloves", 1, CATEGORY.GLOVES_ES, 33),
			new Name("Pauascale Gloves", 1, CATEGORY.GLOVES_ES, 45),
			new Name("Embroidered Gloves", 1, CATEGORY.GLOVES_ES, 52),
			new Name("Baroque Gloves", 1, CATEGORY.GLOVES_ES, 54),
			new Name("Gold Gloves", 1, CATEGORY.GLOVES_ES, 59),
			new Name("Grim Gloves", 1, CATEGORY.GLOVES_ES, 65),
			new Name("Opulent Gloves", 1, CATEGORY.GLOVES_ES, 70),
			new Name("Vaal Gloves", 1, CATEGORY.GLOVES_ES, 75),

			new Name("Sirenscale Gloves", 10, CATEGORY.GLOVES_ES, 80),

			new Name("Ringmail Gauntlets", 1, CATEGORY.GLOVES_ARMOUR_EVASION, 6),
			new Name("Layered Gauntlets", 1, CATEGORY.GLOVES_ARMOUR_EVASION, 16),
			new Name("Doubled Gauntlets", 1, CATEGORY.GLOVES_ARMOUR_EVASION, 33),
			new Name("Plate Gauntlets", 1, CATEGORY.GLOVES_ARMOUR_EVASION, 45),
			new Name("Zealot Gauntlets", 1, CATEGORY.GLOVES_ARMOUR_EVASION, 59),
			new Name("Steelmail Gauntlets", 1, CATEGORY.GLOVES_ARMOUR_EVASION, 65),
			new Name("Commander Gauntlets", 1, CATEGORY.GLOVES_ARMOUR_EVASION, 70),
			new Name("Cultist Gauntlets", 1, CATEGORY.GLOVES_ARMOUR_EVASION, 75),
			new Name("Blacksteel Gauntlets", 5, CATEGORY.GLOVES_ARMOUR_EVASION, 80),

			new Name("Rope Cuffs", 1, CATEGORY.GLOVES_ARMOUR_ES, 5),
			new Name("Aged Cuffs", 1, CATEGORY.GLOVES_ARMOUR_ES, 16),
			new Name("Goldcast Cuffs", 1, CATEGORY.GLOVES_ARMOUR_ES, 33),
			new Name("Verisium Cuffs", 1, CATEGORY.GLOVES_ARMOUR_ES, 45),
			new Name("Ornate Cuffs", 1, CATEGORY.GLOVES_ARMOUR_ES, 59),
			new Name("Bound Cuffs", 1, CATEGORY.GLOVES_ARMOUR_ES, 65),
			new Name("Ancient Cuffs", 1, CATEGORY.GLOVES_ARMOUR_ES, 70),
			new Name("Gleaming Cuffs", 1, CATEGORY.GLOVES_ARMOUR_ES, 75),
			new Name("Adherent Cuffs", 5, CATEGORY.GLOVES_ARMOUR_ES, 80),

			new Name("Gauze Wraps", 1, CATEGORY.GLOVES_EVASION_ES, 4),
			new Name("Linen Wraps", 1, CATEGORY.GLOVES_EVASION_ES, 16),
			new Name("Spiral Wraps", 1, CATEGORY.GLOVES_EVASION_ES, 33),
			new Name("Buckled Wraps", 1, CATEGORY.GLOVES_EVASION_ES, 45),
			new Name("Adorned Wraps", 1, CATEGORY.GLOVES_EVASION_ES, 59),
			new Name("War Wraps", 1, CATEGORY.GLOVES_EVASION_ES, 65),
			new Name("Elegant Wraps", 1, CATEGORY.GLOVES_EVASION_ES, 70),
			new Name("Vaal Wraps", 1, CATEGORY.GLOVES_EVASION_ES, 75),
			new Name("Secured Wraps", 5, CATEGORY.GLOVES_EVASION_ES, 80),

			// https://poe2db.tw/us/Boots#BootsItem
			new Name("Rough Greaves", 1, CATEGORY.BOOTS_ARMOUR, 0),
			new Name("Iron Greaves", 1, CATEGORY.BOOTS_ARMOUR, 11),
			new Name("Bronze Greaves", 1, CATEGORY.BOOTS_ARMOUR, 16),
			new Name("Trimmed Greaves", 1, CATEGORY.BOOTS_ARMOUR, 27),
			new Name("Stone Greaves", 1, CATEGORY.BOOTS_ARMOUR, 33),
			new Name("Reefsteel Greaves", 1, CATEGORY.BOOTS_ARMOUR, 45),
			new Name("Elegant Greaves", 1, CATEGORY.BOOTS_ARMOUR, 54),
			new Name("Carved Greaves", 1, CATEGORY.BOOTS_ARMOUR, 59),
			new Name("Bulwark Greaves", 1, CATEGORY.BOOTS_ARMOUR, 65),
			new Name("Ornate Greaves", 1, CATEGORY.BOOTS_ARMOUR, 70),
			new Name("Vaal Greaves", 1, CATEGORY.BOOTS_ARMOUR, 75),
			new Name("Tasalian Greaves", 5, CATEGORY.BOOTS_ARMOUR, 80),

			new Name("Rawhide Boots", 1, CATEGORY.BOOTS_EVASION, 0),
			new Name("Laced Boots", 1, CATEGORY.BOOTS_EVASION, 11),
			new Name("Embossed Boots", 1, CATEGORY.BOOTS_EVASION, 16),
			new Name("Steeltoe Boots", 1, CATEGORY.BOOTS_EVASION, 28),
			new Name("Lizardscale Boots", 1, CATEGORY.BOOTS_EVASION, 33),
			new Name("Flared Boots", 1, CATEGORY.BOOTS_EVASION, 45),
			new Name("Studded Boots", 1, CATEGORY.BOOTS_EVASION, 54),
			new Name("Serpentscale Boots", 1, CATEGORY.BOOTS_EVASION, 59),
			new Name("Cinched Boots", 1, CATEGORY.BOOTS_EVASION, 65),
			new Name("Cavalry Boots", 1, CATEGORY.BOOTS_EVASION, 70),
			new Name("Dragonscale Boots", 1, CATEGORY.BOOTS_EVASION, 75),
			new Name("Drakeskin Boots", 5, CATEGORY.BOOTS_EVASION, 80),

			new Name("Straw Sandals", 1, CATEGORY.BOOTS_ES, 0),
			new Name("Wrapped Sandals", 1, CATEGORY.BOOTS_ES, 11),
			new Name("Lattice Sandals", 1, CATEGORY.BOOTS_ES, 16),
			new Name("Silk Slippers", 1, CATEGORY.BOOTS_ES, 27),
			new Name("Feathered Sandals", 1, CATEGORY.BOOTS_ES, 33),
			new Name("Flax Sandals", 1, CATEGORY.BOOTS_ES, 45),
			new Name("Elegant Slippers", 1, CATEGORY.BOOTS_ES, 54),
			new Name("Dunerunner Sandals", 1, CATEGORY.BOOTS_ES, 59),
			new Name("Bound Sandals", 1, CATEGORY.BOOTS_ES, 65),
			new Name("Luxurious Slippers", 1, CATEGORY.BOOTS_ES, 70),
			new Name("Sandsworn Sandals", 1, CATEGORY.BOOTS_ES, 75),

			new Name("Sekhema Sandals", 10, CATEGORY.BOOTS_ES, 80),

			new Name("Mail Sabatons", 1, CATEGORY.BOOTS_ARMOUR_EVASION, 6),
			new Name("Braced Sabatons", 1, CATEGORY.BOOTS_ARMOUR_EVASION, 16),
			new Name("Stacked Sabatons", 1, CATEGORY.BOOTS_ARMOUR_EVASION, 33),
			new Name("Covered Sabatons", 1, CATEGORY.BOOTS_ARMOUR_EVASION, 45),
			new Name("Bastion Sabatons", 1, CATEGORY.BOOTS_ARMOUR_EVASION, 59),
			new Name("Veteran Sabatons", 1, CATEGORY.BOOTS_ARMOUR_EVASION, 65),
			new Name("Noble Sabatons", 1, CATEGORY.BOOTS_ARMOUR_EVASION, 70),
			new Name("Fortress Sabatons", 1, CATEGORY.BOOTS_ARMOUR_EVASION, 75),
			new Name("Blacksteel Sabatons", 5, CATEGORY.BOOTS_ARMOUR_EVASION, 80),

			new Name("Padded Leggings", 1, CATEGORY.BOOTS_ARMOUR_ES, 5),
			new Name("Secured Leggings", 1, CATEGORY.BOOTS_ARMOUR_ES, 16),
			new Name("Pelt Leggings", 1, CATEGORY.BOOTS_ARMOUR_ES, 33),
			new Name("Weaver Leggings", 1, CATEGORY.BOOTS_ARMOUR_ES, 45),
			new Name("Shamanistic Leggings", 1, CATEGORY.BOOTS_ARMOUR_ES, 59),
			new Name("Faithful Leggings", 1, CATEGORY.BOOTS_ARMOUR_ES, 65),
			new Name("Apostle Leggings", 1, CATEGORY.BOOTS_ARMOUR_ES, 70),
			new Name("Warlock Leggings", 1, CATEGORY.BOOTS_ARMOUR_ES, 75),
			new Name("Cryptic Leggings", 5, CATEGORY.BOOTS_ARMOUR_ES, 80),

			new Name("Frayed Shoes", 1, CATEGORY.BOOTS_EVASION_ES, 5),
			new Name("Threaded Shoes", 1, CATEGORY.BOOTS_EVASION_ES, 16),
			new Name("Hunting Shoes", 1, CATEGORY.BOOTS_EVASION_ES, 33),
			new Name("Steelpoint Shoes", 1, CATEGORY.BOOTS_EVASION_ES, 45),
			new Name("Treerunner Shoes", 1, CATEGORY.BOOTS_EVASION_ES, 59),
			new Name("Wanderer Shoes", 1, CATEGORY.BOOTS_EVASION_ES, 65),
			new Name("Charmed Shoes", 1, CATEGORY.BOOTS_EVASION_ES, 70),
			new Name("Quickslip Shoes", 1, CATEGORY.BOOTS_EVASION_ES, 75),
			new Name("Daggerfoot Shoes", 5, CATEGORY.BOOTS_EVASION_ES, 80),

			// https://poe2db.tw/us/Amulets#AmuletsItem
			new Name("Crimson Amulet", 1, CATEGORY.AMULET, 0), // 2–4 Life Regeneration per second

			new Name("Azure Amulet", 10, CATEGORY.AMULET, 0), // 20–30% increased Mana Regeneration Rate
			new Name("Dusk Amulet", 10, CATEGORY.AMULET, 0).mapDrop(), // +1 Prefix Modifier allowed, -1 Suffix Modifier allowed
			new Name("Gloam Amulet", 10, CATEGORY.AMULET, 0).mapDrop(), // -1 Prefix Modifier allowed, +1 Suffix Modifier allowed
			new Name("Penumbra Amulet", 10, CATEGORY.AMULET, 0).mapDrop(), // +2 Prefix Modifier allowed, -2 Suffix Modifier allowed
			new Name("Tenebrous Amulet", 10, CATEGORY.AMULET, 0).mapDrop(), // -2 Prefix Modifier allowed, +2 Suffix Modifier allowed
			new Name("Amber Amulet", 10, CATEGORY.AMULET, 8), // +10–15 to Strength
			new Name("Jade Amulet", 10, CATEGORY.AMULET, 8), // +10–15 to Dexterity
			new Name("Lapis Amulet", 10, CATEGORY.AMULET, 8), // +10–15 to Intelligence
			new Name("Pearlescent Amulet", 10, CATEGORY.AMULET, 8), // +7–10% to all Elemental Resistances
			new Name("Lunar Amulet", 10, CATEGORY.AMULET, 14), // +20–30 to maximum Energy Shield
			new Name("Bloodstone Amulet", 10, CATEGORY.AMULET, 18), // +30–40 to maximum Life
			new Name("Stellar Amulet", 10, CATEGORY.AMULET, 25), // +5–7 to all Attributes
			new Name("Solar Amulet", 20, CATEGORY.AMULET, 30), // +10–15 to Spirit
			new Name("Gold Amulet", 20, CATEGORY.AMULET, 35), // 12–20% increased Rarity of Items found

			// https://poe2db.tw/us/Rings#RingsItem
			new Name("Iron Ring", 1, CATEGORY.RING, 0), // Adds 1 to 4 Physical Damage to Attacks
			new Name("Lazuli Ring", 1, CATEGORY.RING, 0), // +20–30 to maximum Mana
			new Name("Emerald Ring", 1, CATEGORY.RING, 26), // +120–160 to Accuracy Rating
			new Name("Ruby Ring", 5, CATEGORY.RING, 8), // +20–30% to Fire Resistance
			new Name("Sapphire Ring", 5, CATEGORY.RING, 12), // +20–30% to Cold Resistance
			new Name("Topaz Ring", 5, CATEGORY.RING, 16), // +20–30% to Lightning Resistance

			new Name("Dusk Ring", 10, CATEGORY.RING, 0).mapDrop(), // +1 Prefix Modifier allowed, -1 Suffix Modifier allowed
			new Name("Gloam Ring", 10, CATEGORY.RING, 0).mapDrop(), // -1 Prefix Modifier allowed, +1 Suffix Modifier allowed
			new Name("Penumbra Ring", 10, CATEGORY.RING, 0).mapDrop(), // +2 Prefix Modifier allowed, -2 Suffix Modifier allowed
			new Name("Tenebrous Ring", 10, CATEGORY.RING, 0).mapDrop(), // -2 Prefix Modifier allowed, +2 Suffix Modifier allowed
			new Name("Amethyst Ring", 10, CATEGORY.RING, 20), // +7–13% to Chaos Resistance
			new Name("Pearl Ring", 10, CATEGORY.RING, 32), // 7–10% increased Cast Speed
			new Name("Prismatic Ring", 10, CATEGORY.RING, 35), // +7–10% to all Elemental Resistances
			new Name("Breach Ring", 10, CATEGORY.RING, 40), // Maximum Quality is 40%
			new Name("Unset Ring", 10, CATEGORY.RING, 44), // Grants 1 additional Skill Slot
			new Name("Gold Ring", 20, CATEGORY.RING, 40), // 6–15% increased Rarity of Items found

			// https://poe2db.tw/us/Belts#BeltsItem
			new Name("Wide Belt", 1, CATEGORY.BELT, 14), // 20–30% increased Flask Charges gained
			new Name("Double Belt", 1, CATEGORY.BELT, 44), // 20–30% increased Charm Charges gained
			new Name("Rawhide Belt", 5, CATEGORY.BELT, 0), // 20–30% increased Life Recovery from Flasks
			new Name("Linen Belt", 5, CATEGORY.BELT, 0), // 20–30% increased Mana Recovery from Flasks
			new Name("Plate Belt", 5, CATEGORY.BELT, 25), // +100–140 to Armour
			new Name("Mail Belt", 5, CATEGORY.BELT, 40), // 10–15% reduced Flask Charges used
			new Name("Utility Belt", 5, CATEGORY.BELT, 55), // 20% of Flask Recovery applied Instantly
			new Name("Fine Belt", 5, CATEGORY.BELT, 62), // Flasks gain 0.17 charges per Second

			new Name("Long Belt", 10, CATEGORY.BELT, 20), // 15–20% increased Charm Effect Duration
			new Name("Ornate Belt", 10, CATEGORY.BELT, 31), // 10–15% reduced Charm Charges used
			new Name("Heavy Belt", 10, CATEGORY.BELT, 50), // 20–30% increased Stun Threshold

			// https://poe2db.tw/us/Flasks#Flask
			new Name("Lesser Life Flask", 1, CATEGORY.FLASK_LIFE, 0),
			new Name("Lesser Mana Flask", 1, CATEGORY.FLASK_MANA, 0),
			new Name("Medium Life Flask", 1, CATEGORY.FLASK_LIFE, 4),
			new Name("Medium Mana Flask", 1, CATEGORY.FLASK_MANA, 4),
			new Name("Greater Life Flask", 1, CATEGORY.FLASK_LIFE, 10),
			new Name("Greater Mana Flask", 1, CATEGORY.FLASK_MANA, 10),
			new Name("Grand Life Flask", 1, CATEGORY.FLASK_LIFE, 16),
			new Name("Grand Mana Flask", 1, CATEGORY.FLASK_MANA, 16),
			new Name("Giant Life Flask", 1, CATEGORY.FLASK_LIFE, 23),
			new Name("Giant Mana Flask", 1, CATEGORY.FLASK_MANA, 23),
			new Name("Colossal Life Flask", 1, CATEGORY.FLASK_LIFE, 30),
			new Name("Colossal Mana Flask", 1, CATEGORY.FLASK_MANA, 30),
			new Name("Gargantuan Life Flask", 1, CATEGORY.FLASK_LIFE, 40),
			new Name("Gargantuan Mana Flask", 1, CATEGORY.FLASK_MANA, 40),
			new Name("Transcendent Life Flask", 1, CATEGORY.FLASK_LIFE, 50),
			new Name("Transcendent Mana Flask", 1, CATEGORY.FLASK_MANA, 50),

			new Name("Ultimate Life Flask", 20, CATEGORY.FLASK_LIFE, 60),
			new Name("Ultimate Mana Flask", 20, CATEGORY.FLASK_MANA, 60),

			// https://poe2db.tw/us/Charms#CharmsItem
			new Name("Ruby Charm", 1, CATEGORY.CHARM, 5), // 20/40, 4s, +25% to Fire Resistance
			new Name("Sapphire Charm", 1, CATEGORY.CHARM, 5), // 20/40, 4s, +25% to Cold Resistance
			new Name("Grounding Charm", 1, CATEGORY.CHARM, 32), // 30/40, 3s, Grants Immunity to Shock
			new Name("Amethyst Charm", 1, CATEGORY.CHARM, 40), // 30/40, 4s, +18% to Chaos Resistance
			new Name("Silver Charm", 5, CATEGORY.CHARM, 10), // 20/40, 3s, Your speed is unaffected by Slows

			new Name("Topaz Charm", 10, CATEGORY.CHARM, 5), // 20/40, 4s, +25% to Lightning Resistance
			new Name("Stone Charm", 10, CATEGORY.CHARM, 8), // 20/40, 3s, Cannot be Stunned
			new Name("Antidote Charm", 10, CATEGORY.CHARM, 24), // 20/40, 3s, Grants Immunity to Poison
			new Name("Dousing Charm", 10, CATEGORY.CHARM, 32), // 30/40, 3s, Grants Immunity to Ignite
			new Name("Thawing Charm", 20, CATEGORY.CHARM, 12), // 40/40, 3s, Grants Immunity to Freeze
			new Name("Staunching Charm", 20, CATEGORY.CHARM, 18), // 30/40, 3s, Grants Immunity to Bleeding
			new Name("Golden Charm", 20, CATEGORY.CHARM, 50), // 80/80, 1s, 15% increased Rarity of Items found
		);

		nameManager = nameManager.categories(categories).value(valueMin, valueMax);
		if (dropLevel !== null) nameManager = nameManager .dropLevel(dropLevel, dropLevelOperator);
		return nameManager;
	}
	static getUniques(tier, operator = undefined) {
		return new NameManager(
			// https://poe2db.tw/us/Unique_item
			// new Name("Acrid Wand", TIER.NEVER), // Cursecarver
			// new Name("Ashen Staff", TIER.NEVER), // Dusk Vigil
			// new Name("Attuned Wand", TIER.NEVER), // Lifesprig
			// new Name("Bone Wand", TIER.NEVER), // Sanguine Diviner
			// new Name("Chiming Staff", TIER.NEVER), // Sire of Shards, The Burden of Shadows
			// new Name("Cultist Greathammer", TIER.NEVER), // The Empty Roar
			// new Name("Dualstring Bow", TIER.NEVER), // Death's Harp
			// new Name("Dyad Crossbow", TIER.NEVER), // Double Vision
			// new Name("Fanatic Bow", TIER.NEVER), // Voltaxic Rift
			// new Name("Forge Maul", TIER.NEVER), // Trephina
			// new Name("Gothic Quarterstaff", TIER.NEVER), // The Sentry
			// new Name("Hardwood Spear", TIER.NEVER), // Splinter of Lorrata
			// new Name("Hunting Spear", TIER.NEVER), // Chainsting
			// new Name("Ironhead Spear", TIER.NEVER), // Tyranny's Grip
			// new Name("Leaden Greathammer", TIER.NEVER), // Chober Chaber
			// new Name("Long Quarterstaff", TIER.NEVER), // Pillar of the Caged God
			// new Name("Makeshift Crossbow", TIER.NEVER), // Mist Whisper
			// new Name("Omen Sceptre", TIER.NEVER), // Font of Power
			// new Name("Plated Mace", TIER.NEVER), // Seeing Stars
			// new Name("Rattling Sceptre", TIER.NEVER), // The Dark Defiler
			// new Name("Recurve Bow", TIER.NEVER), // Splinterheart
			// new Name("Temple Maul", TIER.NEVER), // Shyaba
			// new Name("Volatile Wand", TIER.NEVER), // Enezun's Charge
			// new Name("Voltaic Staff", TIER.NEVER), // Earthbound
			// new Name("War Spear", TIER.NEVER), // Daevata's Wind
			// new Name("Warpick", TIER.NEVER), // Sculpted Suffering
			// new Name("Withered Wand", TIER.NEVER), // The Wicked Quill
			// new Name("Wooden Club", TIER.NEVER), // Brynhand's Mark
			// new Name("Wrapped Quarterstaff", TIER.NEVER), // The Blood Thorn
			// new Name("Zealot Bow", TIER.NEVER), // Slivertongue

			// new Name("Anchorite Garb", TIER.NEVER), // Redflare Conduit
			// new Name("Assassin Garb", TIER.NEVER), // Cospri's Will
			// new Name("Barricade Tower Shield", TIER.NEVER), // Window to Paradise
			// new Name("Blazon Crest Shield", TIER.NEVER), // Alkem Eira
			// new Name("Blunt Quiver", TIER.NEVER), // Rearguard
			// new Name("Bolstered Mitts", TIER.NEVER), // Dreadfist
			// new Name("Bone Raiment", TIER.NEVER), // Necromantle
			// new Name("Braced Sabatons", TIER.NEVER), // Darkray Vectors
			// new Name("Braced Tower Shield", TIER.NEVER), // Doomgate
			// new Name("Bronze Greaves", TIER.NEVER), // The Infinite Pursuit
			// new Name("Chain Mail", TIER.NEVER), // Coat of Red
			// new Name("Cloaked Mail", TIER.NEVER), // Pariah's Embrace
			// new Name("Corsair Cap", TIER.NEVER), // The Black Insignia
			// new Name("Covered Sabatons", TIER.NEVER), // Shankgonne
			// new Name("Crescent Targe", TIER.NEVER), // Feathered Fortress
			// new Name("Crucible Tower Shield", TIER.NEVER), // Svalinn
			// new Name("Crystal Focus", TIER.NEVER), // The Eternal Spark
			// new Name("Cultist Crown", TIER.NEVER), // Crown of the Pale King
			// new Name("Elementalist Robe", TIER.NEVER), // Gloamgown
			// new Name("Elite Greathelm", TIER.NEVER), // Deidbell
			// new Name("Embossed Boots", TIER.NEVER), // Gamblesprint
			// new Name("Fierce Greathelm", TIER.NEVER), // Blood Price
			// new Name("Fire Quiver", TIER.NEVER), // Blackgleam
			// new Name("Firm Bracers", TIER.NEVER), // Grip of Winter
			// new Name("Full Plate", TIER.NEVER), // Kingsguard
			// new Name("Gold Circlet", TIER.NEVER), // Atziri's Disdain
			// new Name("Goldcast Cuffs", TIER.NEVER), // Blueflame Bracers
			// new Name("Guarded Helm", TIER.NEVER), // Erian's Cobble
			// new Name("Havoc Raiment", TIER.NEVER), // Cloak of Defiance
			// new Name("Hewn Mask", TIER.NEVER), // The Hollow Mask
			// new Name("Horned Crown", TIER.NEVER), // Bronzebeard
			// new Name("Iron Cuirass", TIER.NEVER), // Edyrn's Tusks
			// new Name("Iron Greaves", TIER.NEVER), // Corpsewade
			// new Name("Jewelled Gloves", TIER.NEVER), // Kitoko's Current
			// new Name("Jingling Crest Shield", TIER.NEVER), // Crest of Ardura
			// new Name("Keth Raiment", TIER.NEVER), // Prayers for Rain
			// new Name("Lace Hood", TIER.NEVER), // Radiant Grief
			// new Name("Laced Boots", TIER.NEVER), // Briarpatch
			// new Name("Leather Buckler", TIER.NEVER), // Dunkelhalt
			// new Name("Leather Vest", TIER.NEVER), // Bristleboar
			// new Name("Linen Wraps", TIER.NEVER), // Killjoy
			// new Name("Mail Sabatons", TIER.NEVER), // The Knight-errant
			// new Name("Mail Vestments", TIER.NEVER), // Icetomb
			// new Name("Maraketh Cuirass", TIER.NEVER), // Titanrot Cataphract
			// new Name("Omen Crest Shield", TIER.NEVER), // Mahuxotl's Machination, Rise of the Phoenix
			// new Name("Ornate Buckler", TIER.NEVER), // Calgyra's Arc
			// new Name("Pauascale Gloves", TIER.NEVER), // Nightscale
			// new Name("Plate Gauntlets", TIER.NEVER), // Valako's Vice
			// new Name("Plated Buckler", TIER.NEVER), // Rondel de Ezo
			// new Name("Pilgrim Vestments", TIER.NEVER), // Enfolding Dawn
			// new Name("Quilted Vest", TIER.NEVER), // Foxshade
			// new Name("Rampart Tower Shield", TIER.NEVER), // Lycosidae
			// new Name("Riveted Mitts", TIER.NEVER), // Treefingers
			// new Name("Rogue Armour", TIER.NEVER), // The Barrow Dweller
			// new Name("Rough Greaves", TIER.NEVER), // Legionstride
			// new Name("Rusted Greathelm", TIER.NEVER), // Horns of Bynden, Wings of Caelyn
			// new Name("Sacrificial Mantle", TIER.NEVER), // Soul Mantle
			// new Name("Sectioned Bracers", TIER.NEVER), // Idle Hands
			// new Name("Secured Leggings", TIER.NEVER), // Wake of Destruction
			// new Name("Shabby Hood", TIER.NEVER), // Innsmouth
			// new Name("Shielded Helm", TIER.NEVER), // The Vile Knight
			// new Name("Solid Mask", TIER.NEVER), // The Three Dragons
			// new Name("Sombre Gloves", TIER.NEVER), // Candlemaker
			// new Name("Spiked Buckler", TIER.NEVER), // Silverthorne
			// new Name("Spined Bracers", TIER.NEVER), // Snakebite
			// new Name("Spiritbone Crown", TIER.NEVER), // Keeper of the Arc
			// new Name("Splintered Tower Shield", TIER.NEVER), // Dionadair
			// new Name("Stacked Sabatons", TIER.NEVER), // Obern's Bastion
			// new Name("Steel Plate", TIER.NEVER), // Wandering Reliquary
			// new Name("Stitched Gloves", TIER.NEVER), // Doedre's Tenure
			// new Name("Stone Greaves", TIER.NEVER), // Birth of Fury
			// new Name("Straw Sandals", TIER.NEVER), // Luminous Pace
			// new Name("Strider Vest", TIER.NEVER), // Yriel's Fostering
			// new Name("Suede Bracers", TIER.NEVER), // Northpaw
			// new Name("Threaded Shoes", TIER.NEVER), // Ghostmarch
			// new Name("Tideseer Mantle", TIER.NEVER), // Waveshaper
			// new Name("Tonal Focus", TIER.NEVER), // Serpent's Lesson
			// new Name("Torn Gloves", TIER.NEVER), // Painter's Servant
			// new Name("Twig Circlet", TIER.NEVER), // Crown of Thorns
			// new Name("Vaal Cuirass", TIER.NEVER), // Greed's Embrace
			// new Name("Verisium Cuffs", TIER.NEVER), // The Prisoner's Manacles
			// new Name("Warrior Greathelm", TIER.NEVER), // Corona of the Red Sun
			// new Name("Wooden Buckler", TIER.NEVER), // Nocturne
			// new Name("Wrapped Greathelm", TIER.NEVER), // Black Sun Crest

			// new Name("Amber Amulet", TIER.NEVER), // Carnage Heart, Revered Resin, Xoph's Blood
			// new Name("Antidote Charm", TIER.NEVER), // Arakaali's Gift
			// new Name("Azure Amulet", TIER.NEVER), // The Everlasting Gaze, Ungil's Harmony
			// new Name("Crimson Amulet", TIER.NEVER), // Idol of Uldurn
			// new Name("Dousing Charm", TIER.NEVER), // Beira's Anguish
			// new Name("Emerald Ring", TIER.NEVER), // Death Rush, Thief's Torment, Vigilant View
			// new Name("Iron Ring", TIER.NEVER), // Blackheart, Icefang Orbit, Prized Pain, Venopuncture
			// new Name("Lapis Amulet", TIER.NEVER), // Ligurium Talisman, Stone of Lazhwar, The Pandemonius
			// new Name("Linen Belt", TIER.NEVER), // Keelhaul, Umbilicus Immortalis
			// new Name("Long Belt", TIER.NEVER), // Soul Tether
			// new Name("Mail Belt", TIER.NEVER), // Coward's Legacy
			// new Name("Prismatic Ring", TIER.NEVER), // Gifts from Above
			// new Name("Rawhide Belt", TIER.NEVER), // Meginord's Girdle, Midnight Braid
			// new Name("Ruby Ring", TIER.NEVER), // Cracklecreep, Blistering Bond
			// new Name("Sapphire Charm", TIER.NEVER), // Breath of the Mountains
			// new Name("Topaz Charm", TIER.NEVER), // Valako's Roar
			// new Name("Topaz Ring", TIER.NEVER), // Call of the Brotherhood, Levinstone, The Burrower
			// new Name("Toxic Quiver", TIER.NEVER), // Murkshaft

			// new Name("Barbed Spear", TIER.OTHER), // Saitha's Spear
			// new Name("Crude Bow", TIER.OTHER), // Widowhail
			// new Name("Helix Spear", TIER.OTHER), // Spire of Ire
			// new Name("Siphoning Wand", TIER.OTHER), // Adonia's Ego

			// new Name("Viper Cap", TIER.OTHER), // Constricting Command
			// new Name("Wrapped Sandals", TIER.OTHER), // Wanderlust

			// new Name("Amethyst Ring", TIER.OTHER), // Blackflame, Ming's Heart. GOOD: Original Sin
			// new Name("Bloodstone Amulet", TIER.OTHER), // The Anvil. GOOD: Yoke of Suffering
			// new Name("Fire Quiver", TIER.OTHER), // Blackgleam. GOOD: Cadiro's Gambit
			// new Name("Gold Ring", TIER.OTHER), // Andvarius, Perandus Seal, Ventor's Gamble
			// new Name("Heavy Belt", TIER.OTHER), // Waistgate, Zerphi's Genesis. GOOD: Headhunter
			// new Name("Jade Amulet", TIER.OTHER), // Choir of the Storm, Surefooted Sigil. GOOD: Defiance of Destiny
			// new Name("Lazuli Ring", TIER.OTHER), // Doedre's Damning, Glowswarm. GOOD: Seed of Cataclysm
			// new Name("Pearl Ring", TIER.OTHER), // Evergrasping Ring, Heartbound Loop. GOOD: Snakepit
			// new Name("Solar Amulet", TIER.OTHER), // Beacon of Azis. GOOD: Fireflower
			// new Name("Sapphire Ring", TIER.OTHER), // Polcirkeln, Whisper of the Brotherhood. GOOD: Dream Fragments
			// new Name("Stellar Amulet", TIER.OTHER), // Fixation of Yix, Hinekora's Sight, Strugglescream. GOOD: Astramentis
			// new Name("Ultimate Mana Flask", TIER.OTHER), // Melting Maelstrom
			// new Name("Wide Belt", TIER.OTHER), // Birthright Buckle, Byrnabas. GOOD: The Gnashing Sash

			// new Name("Lattice Sandals", TIER.CLASS), // Bones of Ullr

			// new Name("Fine Belt", TIER.CLASS), // GOOD: Shavronne's Satchel. CLASS: Darkness Enthroned
			// new Name("Ultimate Life Flask", TIER.CLASS), // Olroth's Resolve
		).compare(tier, operator);
	}
	static getUniqueTablets(min = undefined, max = undefined) {
		return new NameManager(
			// https://poe2db.tw/us/Unique_item#OtherUnique
			new Name("Expedition Precursor Tablet", 1 / 2), // Forgotten By Time
			new Name("Delirium Precursor Tablet", 1 / 2), // Clear Skies

			new Name("Breach Precursor Tablet", 3), // Wraeclast Besieged
			new Name("Overseer Precursor Tablet", (24 + 4) / 2), // Season of the Hunt, Cruel Hegemony

			new Name("Precursor Tablet", ((0.9 * PRICE_DIV) + (PRICE_DIV / 5)) / 2), // Visions of Paradise > The Grand Project
			new Name("Ritual Precursor Tablet", 0.9 * PRICE_DIV), // Freedom of Faith
		).value(min, max);
	}
	static getUniqueRelics(min = undefined, max = undefined) {
		return new NameManager(
			// https://poe2db.tw/us/Relics#RelicsUnique_Unique
			new Name("Tapestry Relic", 1 / 1000), // The Burden of Leadership
			new Name("Amphora Relic", 1 / 598), // The Peacemaker's Draught
			new Name("Seal Relic", 1 / 2), // The Changing Seasons

			new Name("Vase Relic", 3 * PRICE_DIV), // The Desperate Alliance
			new Name("Incense Relic", 98 * PRICE_DIV), // The Last Flame
		).value(min, max);
	}

	// Inclusive of min, exclusive of max
	value(min = null, max = null) {
		let names = this.names.filter((name) => {
			// Special case: If min and max are the same, do exact match
			if (min !== null && max !== null && min === max && name.value === min) return true;

			return (min !== null && name.value >= min) && (max !== null && name.value < max);
		});
		return new NameManager(...names);
	}

	categories(categoriesToMatch) {
		let names = this.names.filter((name) => {
			for (let categorytoMatch of categoriesToMatch.values) {
				for (let nameCategory of name.category.values) {
					if (nameCategory.includes(categorytoMatch)) return true;
				}
			}
		});
		return new NameManager(...names);
	}

	dropLevel(dropLevel, operator = OPERATOR.EXACT) {
		let names = this.names.filter((name) => {
			switch (operator) {
				case OPERATOR.EQUAL:
				case OPERATOR.EXACT:
					return name.dropLevel === dropLevel;
				case OPERATOR.NE:
					return name.dropLevel !== dropLevel;
				case OPERATOR.LTE:
					return name.dropLevel <= dropLevel;
				case OPERATOR.GTE:
					return name.dropLevel >= dropLevel;
				case OPERATOR.LT:
					return name.dropLevel < dropLevel;
				case OPERATOR.GT:
					return name.dropLevel > dropLevel;
				default:
					console.error("ERR NameManager#compare() received unknown operator:");
					console.error(operator);
					throw new Error();
			}
		});
		return new NameManager(...names);
	}

	isBad(isBad = true) {
		let names = this.names.filter((name) => name.isBad === isBad);
		return new NameManager(...names);
	}

	isClass(isClass = true) {
		let names = this.names.filter((name) => name.isClass === isClass);
		return new NameManager(...names);
	}

	isMapDrop(isMapDrop = true) {
		let names = this.names.filter((name) => name.isMapDrop === isMapDrop);
		return new NameManager(...names);
	}

	export() {
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
