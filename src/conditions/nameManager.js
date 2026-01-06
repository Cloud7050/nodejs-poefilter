import { LEVEL_HEAVY_BELT, PRICE_DIV } from "../constants.js";
import { average } from "../utils.js";
import { CATEGORY, CATEGORY_CUSTOM } from "./category.js";
import { ConditionSet } from "./conditionSet.js";
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
			new Name("Dominus' Grasp", 5), //TODO new price unknown
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
			new Name("Snake Idol", 1),
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

	static getGear(cOrStringList = null, valueMin = undefined, valueMax = undefined, dropLevel = null, dropLevelOperator = undefined) {
		let categories = cOrStringList;
		if (cOrStringList instanceof ConditionSet) {
			if (cOrStringList.category === null) categories = null;
			else categories = cOrStringList.category.value;
		}

		let nameManager = new NameManager(
			//TODO prices are not entirely accurate

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
			new Name("Reflecting Staff", 10, CATEGORY.STAFF, 70), // Mirror of Refraction  //TODO price unknown

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
			new Name("Soaring Spear", 1, CATEGORY.SPEAR, 70), //TODO price unknown
			new Name("Pronged Spear", 1, CATEGORY.SPEAR, 72),
			new Name("Guardian Spear", 1, CATEGORY.SPEAR, 75), // 38-79 phys, 5% cc, x1.55, Prevent +3—7% of Damage from Deflected Hits //TODO price unknown
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
			new Name("Skullcrusher Quarterstaff", 5, CATEGORY.QUARTERSTAFF, 75), // 59-122 phys, 10% cc, x1.3, 20—50% chance to Daze on Hit //TODO price unknown
			new Name("Razor Quarterstaff", 5, CATEGORY.QUARTERSTAFF, 77), // 65-108 phys, 10% cc, x1.4
			new Name("Bolting Quarterstaff", 5, CATEGORY.QUARTERSTAFF, 78), // 24-97 phys, 1-100 lightning, 10% cc, x1.4
			new Name("Dreaming Quarterstaff", 5, CATEGORY.QUARTERSTAFF, 78), // 99-133 phys, 0% cc, x1.5
			new Name("Aegis Quarterstaff", 5, CATEGORY.QUARTERSTAFF, 79), // 58-97 phys, 10% cc, x1.4, +12–18% to Block chance

			new Name("Striking Quarterstaff", 10, CATEGORY.QUARTERSTAFF, 77), // 53-111 phys, 10% cc, x1.4, 16% increased Melee Strike Range with this weapon

			// https://poe2db.tw/us/Talismans#TalismansItem
			//TODO prices unknown
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

			new Name("Alpha Talisman", 10, CATEGORY.TALISMAN, 75), // 63-94 phys, 9% cc, x1.3, +10—15% to Block chance
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
			new Name("Splintered Tower Shield", 1, CATEGORY_CUSTOM.SHIELD_AM, 0),
			new Name("Painted Tower Shield", 1, CATEGORY_CUSTOM.SHIELD_AM, 6),
			new Name("Braced Tower Shield", 1, CATEGORY_CUSTOM.SHIELD_AM, 12),
			new Name("Barricade Tower Shield", 1, CATEGORY_CUSTOM.SHIELD_AM, 16),
			new Name("Effigial Tower Shield", 1, CATEGORY_CUSTOM.SHIELD_AM, 21),
			new Name("Rampart Tower Shield", 1, CATEGORY_CUSTOM.SHIELD_AM, 28),
			new Name("Heraldric Tower Shield", 1, CATEGORY_CUSTOM.SHIELD_AM, 33),
			new Name("Stone Tower Shield", 1, CATEGORY_CUSTOM.SHIELD_AM, 36),
			new Name("Crucible Tower Shield", 1, CATEGORY_CUSTOM.SHIELD_AM, 45),
			new Name("Ancestor Tower Shield", 1, CATEGORY_CUSTOM.SHIELD_AM, 50),
			new Name("Bulwark Tower Shield", 1, CATEGORY_CUSTOM.SHIELD_AM, 54),
			new Name("Noble Tower Shield", 1, CATEGORY_CUSTOM.SHIELD_AM, 59),
			new Name("Goldworked Tower Shield", 1, CATEGORY_CUSTOM.SHIELD_AM, 61),
			new Name("Royal Tower Shield", 1, CATEGORY_CUSTOM.SHIELD_AM, 65),
			new Name("Fortress Tower Shield", 1, CATEGORY_CUSTOM.SHIELD_AM, 70),
			new Name("Vaal Tower Shield", 1, CATEGORY_CUSTOM.SHIELD_AM, 75),
			new Name("Tawhoan Tower Shield", 5, CATEGORY_CUSTOM.SHIELD_AM, 80),

			new Name("Hardwood Targe", 1, CATEGORY_CUSTOM.SHIELD_AM_EV, 0),
			new Name("Pelage Targe", 1, CATEGORY_CUSTOM.SHIELD_AM_EV, 8),
			new Name("Studded Targe", 1, CATEGORY_CUSTOM.SHIELD_AM_EV, 16),
			new Name("Crescent Targe", 1, CATEGORY_CUSTOM.SHIELD_AM_EV, 26),
			new Name("Chiseled Targe", 1, CATEGORY_CUSTOM.SHIELD_AM_EV, 33),
			new Name("Feathered Targe", 1, CATEGORY_CUSTOM.SHIELD_AM_EV, 37),
			new Name("Stratified Targe", 1, CATEGORY_CUSTOM.SHIELD_AM_EV, 46),
			new Name("Carved Targe", 1, CATEGORY_CUSTOM.SHIELD_AM_EV, 51),
			new Name("Polished Targe", 1, CATEGORY_CUSTOM.SHIELD_AM_EV, 54),
			new Name("Stone Targe", 1, CATEGORY_CUSTOM.SHIELD_AM_EV, 59),
			new Name("Avian Targe", 1, CATEGORY_CUSTOM.SHIELD_AM_EV, 62),
			new Name("Mammoth Targe", 1, CATEGORY_CUSTOM.SHIELD_AM_EV, 65),
			new Name("Baroque Targe", 1, CATEGORY_CUSTOM.SHIELD_AM_EV, 70),
			new Name("Soaring Targe", 1, CATEGORY_CUSTOM.SHIELD_AM_EV, 75),
			new Name("Golden Targe", 5, CATEGORY_CUSTOM.SHIELD_AM_EV, 80),

			new Name("Blazon Crest Shield", 1, CATEGORY_CUSTOM.SHIELD_AM_ES, 0),
			new Name("Sigil Crest Shield", 1, CATEGORY_CUSTOM.SHIELD_AM_ES, 7),
			new Name("Emblem Crest Shield", 1, CATEGORY_CUSTOM.SHIELD_AM_ES, 16),
			new Name("Jingling Crest Shield", 1, CATEGORY_CUSTOM.SHIELD_AM_ES, 28),
			new Name("Sectarian Crest Shield", 1, CATEGORY_CUSTOM.SHIELD_AM_ES, 33),
			new Name("Omen Crest Shield", 1, CATEGORY_CUSTOM.SHIELD_AM_ES, 36),
			new Name("Wayward Crest Shield", 1, CATEGORY_CUSTOM.SHIELD_AM_ES, 45),
			new Name("Seer Crest Shield", 1, CATEGORY_CUSTOM.SHIELD_AM_ES, 50),
			new Name("Dekharan Crest Shield", 1, CATEGORY_CUSTOM.SHIELD_AM_ES, 54),
			new Name("Quartered Crest Shield", 1, CATEGORY_CUSTOM.SHIELD_AM_ES, 59),
			new Name("Glowering Crest Shield", 1, CATEGORY_CUSTOM.SHIELD_AM_ES, 62),
			new Name("Intricate Crest Shield", 1, CATEGORY_CUSTOM.SHIELD_AM_ES, 65),
			new Name("Sekheman Crest Shield", 1, CATEGORY_CUSTOM.SHIELD_AM_ES, 70),
			new Name("Vaal Crest Shield", 1, CATEGORY_CUSTOM.SHIELD_AM_ES, 75),
			new Name("Blacksteel Crest Shield", 5, CATEGORY_CUSTOM.SHIELD_AM_ES, 80),

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
			new Name("Rusted Greathelm", 1, CATEGORY_CUSTOM.HELMET_AM, 0),
			new Name("Soldier Greathelm", 1, CATEGORY_CUSTOM.HELMET_AM, 12),
			new Name("Wrapped Greathelm", 1, CATEGORY_CUSTOM.HELMET_AM, 16),
			new Name("Spired Greathelm", 1, CATEGORY_CUSTOM.HELMET_AM, 27),
			new Name("Elite Greathelm", 1, CATEGORY_CUSTOM.HELMET_AM, 33),
			new Name("Warrior Greathelm", 1, CATEGORY_CUSTOM.HELMET_AM, 36),
			new Name("Commander Greathelm", 1, CATEGORY_CUSTOM.HELMET_AM, 45),
			new Name("Fierce Greathelm", 1, CATEGORY_CUSTOM.HELMET_AM, 51),
			new Name("Elegant Greathelm", 1, CATEGORY_CUSTOM.HELMET_AM, 54),
			new Name("Noble Greathelm", 1, CATEGORY_CUSTOM.HELMET_AM, 59),
			new Name("Warmonger Greathelm", 1, CATEGORY_CUSTOM.HELMET_AM, 65),
			new Name("Masked Greathelm", 1, CATEGORY_CUSTOM.HELMET_AM, 70),
			new Name("Paragon Greathelm", 1, CATEGORY_CUSTOM.HELMET_AM, 75),
			new Name("Imperial Greathelm", 5, CATEGORY_CUSTOM.HELMET_AM, 80),

			new Name("Shabby Hood", 1, CATEGORY_CUSTOM.HELMET_EV, 0),
			new Name("Felt Cap", 1, CATEGORY_CUSTOM.HELMET_EV, 10),
			new Name("Lace Hood", 1, CATEGORY_CUSTOM.HELMET_EV, 16),
			new Name("Swathed Cap", 1, CATEGORY_CUSTOM.HELMET_EV, 26),
			new Name("Hunter Hood", 1, CATEGORY_CUSTOM.HELMET_EV, 33),
			new Name("Viper Cap", 1, CATEGORY_CUSTOM.HELMET_EV, 38),
			new Name("Corsair Cap", 1, CATEGORY_CUSTOM.HELMET_EV, 45),
			new Name("Leatherbound Hood", 1, CATEGORY_CUSTOM.HELMET_EV, 50),
			new Name("Wrapped Cap", 1, CATEGORY_CUSTOM.HELMET_EV, 54),
			new Name("Deerstalker Hood", 1, CATEGORY_CUSTOM.HELMET_EV, 59),
			new Name("Woven Cap", 1, CATEGORY_CUSTOM.HELMET_EV, 65),
			new Name("Desert Cap", 1, CATEGORY_CUSTOM.HELMET_EV, 70),
			new Name("Trapper Hood", 1, CATEGORY_CUSTOM.HELMET_EV, 75),
			new Name("Freebooter Cap", 5, CATEGORY_CUSTOM.HELMET_EV, 80),

			new Name("Twig Circlet", 1, CATEGORY_CUSTOM.HELMET_ES, 0),
			new Name("Wicker Tiara", 1, CATEGORY_CUSTOM.HELMET_ES, 10),
			new Name("Beaded Circlet", 1, CATEGORY_CUSTOM.HELMET_ES, 16),
			new Name("Chain Tiara", 1, CATEGORY_CUSTOM.HELMET_ES, 26),
			new Name("Feathered Tiara", 1, CATEGORY_CUSTOM.HELMET_ES, 33),
			new Name("Gold Circlet", 1, CATEGORY_CUSTOM.HELMET_ES, 40),
			new Name("Vermeil Circlet", 1, CATEGORY_CUSTOM.HELMET_ES, 45),
			new Name("Jade Tiara", 1, CATEGORY_CUSTOM.HELMET_ES, 50),
			new Name("Sandsworn Tiara", 1, CATEGORY_CUSTOM.HELMET_ES, 54),
			new Name("Jungle Tiara", 1, CATEGORY_CUSTOM.HELMET_ES, 59),
			new Name("Skycrown Tiara", 1, CATEGORY_CUSTOM.HELMET_ES, 65),
			new Name("Sorcerous Tiara", 1, CATEGORY_CUSTOM.HELMET_ES, 70),
			new Name("Kamasan Tiara", 1, CATEGORY_CUSTOM.HELMET_ES, 75),

			new Name("Ancestral Tiara", 20, CATEGORY_CUSTOM.HELMET_ES, 80),

			new Name("Brimmed Helm", 1, CATEGORY_CUSTOM.HELMET_AM_EV, 5),
			new Name("Guarded Helm", 1, CATEGORY_CUSTOM.HELMET_AM_EV, 11),
			new Name("Visored Helm", 1, CATEGORY_CUSTOM.HELMET_AM_EV, 16),
			new Name("Cowled Helm", 1, CATEGORY_CUSTOM.HELMET_AM_EV, 26),
			new Name("Shielded Helm", 1, CATEGORY_CUSTOM.HELMET_AM_EV, 33),
			new Name("Closed Helm", 1, CATEGORY_CUSTOM.HELMET_AM_EV, 45),
			new Name("Cabalist Helm", 1, CATEGORY_CUSTOM.HELMET_AM_EV, 54),
			new Name("Warded Helm", 1, CATEGORY_CUSTOM.HELMET_AM_EV, 65),
			new Name("Cryptic Helm", 1, CATEGORY_CUSTOM.HELMET_AM_EV, 70),
			new Name("Champion Helm", 1, CATEGORY_CUSTOM.HELMET_AM_EV, 75),
			new Name("Gladiatorial Helm", 5, CATEGORY_CUSTOM.HELMET_AM_EV, 80),

			new Name("Iron Crown", 1, CATEGORY_CUSTOM.HELMET_AM_ES, 5),
			new Name("Horned Crown", 1, CATEGORY_CUSTOM.HELMET_AM_ES, 10),
			new Name("Cultist Crown", 1, CATEGORY_CUSTOM.HELMET_AM_ES, 16),
			new Name("Martyr Crown", 1, CATEGORY_CUSTOM.HELMET_AM_ES, 28),
			new Name("Heavy Crown", 1, CATEGORY_CUSTOM.HELMET_AM_ES, 33),
			new Name("Spiritbone Crown", 1, CATEGORY_CUSTOM.HELMET_AM_ES, 45),
			new Name("Hallowed Crown", 1, CATEGORY_CUSTOM.HELMET_AM_ES, 54),
			new Name("Inquisitor Crown", 1, CATEGORY_CUSTOM.HELMET_AM_ES, 59),
			new Name("Druidic Crown", 1, CATEGORY_CUSTOM.HELMET_AM_ES, 65),
			new Name("Saintly Crown", 1, CATEGORY_CUSTOM.HELMET_AM_ES, 70),
			new Name("Divine Crown", 1, CATEGORY_CUSTOM.HELMET_AM_ES, 75),
			new Name("Cryptic Crown", 5, CATEGORY_CUSTOM.HELMET_AM_ES, 80),

			new Name("Hewn Mask", 1, CATEGORY_CUSTOM.HELMET_EV_ES, 5),
			new Name("Face Mask", 1, CATEGORY_CUSTOM.HELMET_EV_ES, 10),
			new Name("Hooded Mask", 1, CATEGORY_CUSTOM.HELMET_EV_ES, 16),
			new Name("Veiled Mask", 1, CATEGORY_CUSTOM.HELMET_EV_ES, 28),
			new Name("Tribal Mask", 1, CATEGORY_CUSTOM.HELMET_EV_ES, 33),
			new Name("Solid Mask", 1, CATEGORY_CUSTOM.HELMET_EV_ES, 45),
			new Name("Pariah Mask", 1, CATEGORY_CUSTOM.HELMET_EV_ES, 54),
			new Name("Avian Mask", 1, CATEGORY_CUSTOM.HELMET_EV_ES, 59),
			new Name("Brigand Mask", 1, CATEGORY_CUSTOM.HELMET_EV_ES, 65),
			new Name("Faridun Mask", 1, CATEGORY_CUSTOM.HELMET_EV_ES, 70),
			new Name("Soaring Mask", 1, CATEGORY_CUSTOM.HELMET_EV_ES, 75),
			new Name("Grinning Mask", 5, CATEGORY_CUSTOM.HELMET_EV_ES, 80),

			// https://poe2db.tw/us/Body_Armours#BodyArmoursItem
			new Name("Rusted Cuirass", 1, CATEGORY_CUSTOM.BODY_AM, 0),
			new Name("Fur Plate", 1, CATEGORY_CUSTOM.BODY_AM, 4),
			new Name("Iron Cuirass", 1, CATEGORY_CUSTOM.BODY_AM, 11),
			new Name("Raider Plate", 1, CATEGORY_CUSTOM.BODY_AM, 16),
			new Name("Maraketh Cuirass", 1, CATEGORY_CUSTOM.BODY_AM, 20),
			new Name("Steel Plate", 1, CATEGORY_CUSTOM.BODY_AM, 27),
			new Name("Full Plate", 1, CATEGORY_CUSTOM.BODY_AM, 33),
			new Name("Vaal Cuirass", 1, CATEGORY_CUSTOM.BODY_AM, 37),
			new Name("Juggernaut Plate", 1, CATEGORY_CUSTOM.BODY_AM, 45),
			new Name("Chieftain Cuirass", 1, CATEGORY_CUSTOM.BODY_AM, 50),
			new Name("Elegant Plate", 1, CATEGORY_CUSTOM.BODY_AM, 54),
			new Name("Heavy Plate", 1, CATEGORY_CUSTOM.BODY_AM, 59),
			new Name("Stone Cuirass", 1, CATEGORY_CUSTOM.BODY_AM, 62),
			new Name("Ornate Plate", 5, CATEGORY_CUSTOM.BODY_AM, 70), // 445 AM, Regenerate 1.5–2.5% of maximum Life per second
			new Name("Utzaal Cuirass", 5, CATEGORY_CUSTOM.BODY_AM, 75), // 445 AM, 30–40% increased Stun Threshold

			new Name("Soldier Cuirass", 10, CATEGORY_CUSTOM.BODY_AM, 65), // 534 AM
			new Name("Warlord Cuirass", 10, CATEGORY_CUSTOM.BODY_AM, 80), // 445 AM, +15–25% of Armour also applies to Elemental Damage

			new Name("Leather Vest", 1, CATEGORY_CUSTOM.BODY_EV, 0),
			new Name("Quilted Vest", 1, CATEGORY_CUSTOM.BODY_EV, 4),
			new Name("Pathfinder Coat", 1, CATEGORY_CUSTOM.BODY_EV, 11),
			new Name("Shrouded Vest", 1, CATEGORY_CUSTOM.BODY_EV, 16),
			new Name("Rhoahide Coat", 1, CATEGORY_CUSTOM.BODY_EV, 22),
			new Name("Studded Vest", 1, CATEGORY_CUSTOM.BODY_EV, 26),
			new Name("Scout's Vest", 1, CATEGORY_CUSTOM.BODY_EV, 33),
			new Name("Serpentscale Coat", 1, CATEGORY_CUSTOM.BODY_EV, 36),
			new Name("Corsair Vest", 1, CATEGORY_CUSTOM.BODY_EV, 45),
			new Name("Smuggler Coat", 1, CATEGORY_CUSTOM.BODY_EV, 51),
			new Name("Layered Vest", 1, CATEGORY_CUSTOM.BODY_EV, 54),
			new Name("Runner Vest", 1, CATEGORY_CUSTOM.BODY_EV, 59),
			new Name("Lizardscale Coat", 1, CATEGORY_CUSTOM.BODY_EV, 62),
			new Name("Swiftstalker Coat", 5, CATEGORY_CUSTOM.BODY_EV, 65), // 406 EV, 20–30% reduced Slowing Potency of Debuffs on You
			new Name("Wyrmscale Coat", 5, CATEGORY_CUSTOM.BODY_EV, 75), // 406 EV, 30–40% increased Elemental Ailment Threshold

			new Name("Slipstrike Vest", 10, CATEGORY_CUSTOM.BODY_EV, 70), // 487 EV
			new Name("Corsair Coat", 20, CATEGORY_CUSTOM.BODY_EV, 80), // 406 EV, 5% increased Movement Speed

			new Name("Tattered Robe", 1, CATEGORY_CUSTOM.BODY_ES, 0),
			new Name("Feathered Robe", 1, CATEGORY_CUSTOM.BODY_ES, 5),
			new Name("Hexer's Robe", 1, CATEGORY_CUSTOM.BODY_ES, 11),
			new Name("Bone Raiment", 1, CATEGORY_CUSTOM.BODY_ES, 16),
			new Name("Silk Robe", 1, CATEGORY_CUSTOM.BODY_ES, 22),
			new Name("Keth Raiment", 1, CATEGORY_CUSTOM.BODY_ES, 28),
			new Name("Votive Raiment", 1, CATEGORY_CUSTOM.BODY_ES, 33),
			new Name("Altar Robe", 1, CATEGORY_CUSTOM.BODY_ES, 40),
			new Name("Elementalist Robe", 1, CATEGORY_CUSTOM.BODY_ES, 45),
			new Name("Mystic Raiment", 1, CATEGORY_CUSTOM.BODY_ES, 49),
			new Name("River Raiment", 1, CATEGORY_CUSTOM.BODY_ES, 54),
			new Name("Adherent's Raiment", 1, CATEGORY_CUSTOM.BODY_ES, 59),
			new Name("Ceremonial Robe", 1, CATEGORY_CUSTOM.BODY_ES, 62),
			new Name("Sacramental Robe", 5, CATEGORY_CUSTOM.BODY_ES, 75), /// 153 ES, 40–50% faster start of Energy Shield Recharge

			new Name("Flowing Raiment", 10, CATEGORY_CUSTOM.BODY_ES, 70), /// 153 ES, 40–50% increased Mana Regeneration Rate
			new Name("Feathered Raiment", 10, CATEGORY_CUSTOM.BODY_ES, 80), /// 153 ES, 5–10% of Damage is taken from Mana before Life
			new Name("Vile Robe", 20, CATEGORY_CUSTOM.BODY_ES, 65), /// 184 ES

			new Name("Chain Mail", 1, CATEGORY_CUSTOM.BODY_AM_EV, 0),
			new Name("Rogue Armour", 1, CATEGORY_CUSTOM.BODY_AM_EV, 11),
			new Name("Vagabond Armour", 1, CATEGORY_CUSTOM.BODY_AM_EV, 16),
			new Name("Cloaked Mail", 1, CATEGORY_CUSTOM.BODY_AM_EV, 26),
			new Name("Explorer Armour", 1, CATEGORY_CUSTOM.BODY_AM_EV, 33),
			new Name("Scale Mail", 1, CATEGORY_CUSTOM.BODY_AM_EV, 37),
			new Name("Knight Armour", 1, CATEGORY_CUSTOM.BODY_AM_EV, 45),
			new Name("Ancestral Mail", 1, CATEGORY_CUSTOM.BODY_AM_EV, 50),
			new Name("Mantled Mail", 1, CATEGORY_CUSTOM.BODY_AM_EV, 54),
			new Name("Trailblazer Armour", 1, CATEGORY_CUSTOM.BODY_AM_EV, 59),
			new Name("Golden Mail", 1, CATEGORY_CUSTOM.BODY_AM_EV, 62),
			new Name("Dastard Armour", 1, CATEGORY_CUSTOM.BODY_AM_EV, 65), // 245 AM, 223 EV, +60–80 to maximum Life
			new Name("Shrouded Mail", 1, CATEGORY_CUSTOM.BODY_AM_EV, 70), // 245 AM, 223 EV, +20–25% to Fire/Cold/Lightning Resistance
			new Name("Thane Mail", 1, CATEGORY_CUSTOM.BODY_AM_EV, 80), // 245 AM, 223 EV, Hits against you have 15–25% reduced Critical Damage Bonus
			new Name("Death Mail", 5, CATEGORY_CUSTOM.BODY_AM_EV, 75), // 294 AM, 268 EV

			new Name("Pilgrim Vestments", 1, CATEGORY_CUSTOM.BODY_AM_ES, 0),
			new Name("Pelt Mantle", 1, CATEGORY_CUSTOM.BODY_AM_ES, 10),
			new Name("Mail Vestments", 1, CATEGORY_CUSTOM.BODY_AM_ES, 16),
			new Name("Shaman Mantle", 1, CATEGORY_CUSTOM.BODY_AM_ES, 28),
			new Name("Ironclad Vestments", 1, CATEGORY_CUSTOM.BODY_AM_ES, 33),
			new Name("Sacrificial Mantle", 1, CATEGORY_CUSTOM.BODY_AM_ES, 36),
			new Name("Cleric Vestments", 1, CATEGORY_CUSTOM.BODY_AM_ES, 45),
			new Name("Tideseer Mantle", 1, CATEGORY_CUSTOM.BODY_AM_ES, 51),
			new Name("Occultist Mantle", 1, CATEGORY_CUSTOM.BODY_AM_ES, 54),
			new Name("Plated Vestments", 1, CATEGORY_CUSTOM.BODY_AM_ES, 59),
			new Name("Heartcarver Mantle", 1, CATEGORY_CUSTOM.BODY_AM_ES, 62),
			new Name("Conjurer Mantle", 1, CATEGORY_CUSTOM.BODY_AM_ES, 70), // 245 AM, 84 ES, +20–30 to Spirit
			new Name("Death Mantle", 1, CATEGORY_CUSTOM.BODY_AM_ES, 75), // 245 AM, 84 ES, +1% to all Maximum Elemental Resistances
			new Name("Seastorm Mantle", 1, CATEGORY_CUSTOM.BODY_AM_ES, 80), // 245 AM, 84 ES, 8–14% of Damage taken Recouped as Life
			new Name("Wolfskin Mantle", 5, CATEGORY_CUSTOM.BODY_AM_ES, 65), // 294 AM, 101 ES

			new Name("Hermit Garb", 1, CATEGORY_CUSTOM.BODY_EV_ES, 0),
			new Name("Waxed Jacket", 1, CATEGORY_CUSTOM.BODY_EV_ES, 11),
			new Name("Marabout Garb", 1, CATEGORY_CUSTOM.BODY_EV_ES, 16),
			new Name("Wayfarer Jacket", 1, CATEGORY_CUSTOM.BODY_EV_ES, 28),
			new Name("Anchorite Garb", 1, CATEGORY_CUSTOM.BODY_EV_ES, 33),
			new Name("Scalper's Jacket", 1, CATEGORY_CUSTOM.BODY_EV_ES, 39),
			new Name("Scoundrel Jacket", 1, CATEGORY_CUSTOM.BODY_EV_ES, 45),
			new Name("Ascetic Garb", 1, CATEGORY_CUSTOM.BODY_EV_ES, 51),
			new Name("Itinerant Jacket", 1, CATEGORY_CUSTOM.BODY_EV_ES, 54),
			new Name("Hatungo Garb", 1, CATEGORY_CUSTOM.BODY_EV_ES, 59),
			new Name("Hawker's Jacket", 1, CATEGORY_CUSTOM.BODY_EV_ES, 62),
			new Name("Austere Garb", 1, CATEGORY_CUSTOM.BODY_EV_ES, 80), // 223 EV, 84 ES, 10–15% reduced Elemental Ailment Duration on you
			new Name("Rambler Jacket", 5, CATEGORY_CUSTOM.BODY_EV_ES, 70), // 223 EV, 84 ES, +7–13% to Chaos Resistance

			new Name("Sleek Jacket", 10, CATEGORY_CUSTOM.BODY_EV_ES, 65), // 268 EV, 101 ES
			new Name("Falconer's Jacket", 10, CATEGORY_CUSTOM.BODY_EV_ES, 75), // 223 EV, 84 ES, 5% increased Movement Speed

			new Name("Sacrificial Regalia", 10, CATEGORY_CUSTOM.BODY_EV_ES, 75), // 269 AM, 245 EV, 93 ES, +1 to Level of all Corrupted Skill Gems //TODO price unknown

			// https://poe2db.tw/us/Gloves
			new Name("Stocky Mitts", 1, CATEGORY_CUSTOM.GLOVES_AM, 0),
			new Name("Riveted Mitts", 1, CATEGORY_CUSTOM.GLOVES_AM, 11),
			new Name("Tempered Mitts", 1, CATEGORY_CUSTOM.GLOVES_AM, 16),
			new Name("Bolstered Mitts", 1, CATEGORY_CUSTOM.GLOVES_AM, 27),
			new Name("Moulded Mitts", 1, CATEGORY_CUSTOM.GLOVES_AM, 33),
			new Name("Detailed Mitts", 1, CATEGORY_CUSTOM.GLOVES_AM, 45),
			new Name("Ancient Mitts", 1, CATEGORY_CUSTOM.GLOVES_AM, 54),
			new Name("Feathered Mitts", 1, CATEGORY_CUSTOM.GLOVES_AM, 59),
			new Name("Knightly Mitts", 1, CATEGORY_CUSTOM.GLOVES_AM, 65),
			new Name("Ornate Mitts", 1, CATEGORY_CUSTOM.GLOVES_AM, 70),
			new Name("Vaal Mitts", 1, CATEGORY_CUSTOM.GLOVES_AM, 75),
			new Name("Massive Mitts", 5, CATEGORY_CUSTOM.GLOVES_AM, 80),

			new Name("Suede Bracers", 1, CATEGORY_CUSTOM.GLOVES_EV, 0),
			new Name("Firm Bracers", 1, CATEGORY_CUSTOM.GLOVES_EV, 11),
			new Name("Bound Bracers", 1, CATEGORY_CUSTOM.GLOVES_EV, 16),
			new Name("Sectioned Bracers", 1, CATEGORY_CUSTOM.GLOVES_EV, 28),
			new Name("Spined Bracers", 1, CATEGORY_CUSTOM.GLOVES_EV, 33),
			new Name("Fine Bracers", 1, CATEGORY_CUSTOM.GLOVES_EV, 45),
			new Name("Refined Bracers", 1, CATEGORY_CUSTOM.GLOVES_EV, 54),
			new Name("Spiked Bracers", 1, CATEGORY_CUSTOM.GLOVES_EV, 59),
			new Name("Stalking Bracers", 1, CATEGORY_CUSTOM.GLOVES_EV, 65),
			new Name("Grand Bracers", 1, CATEGORY_CUSTOM.GLOVES_EV, 70),
			new Name("Barbed Bracers", 1, CATEGORY_CUSTOM.GLOVES_EV, 75),
			new Name("Polished Bracers", 5, CATEGORY_CUSTOM.GLOVES_EV, 80),

			new Name("Torn Gloves", 1, CATEGORY_CUSTOM.GLOVES_ES, 0),
			new Name("Sombre Gloves", 1, CATEGORY_CUSTOM.GLOVES_ES, 12),
			new Name("Stitched Gloves", 1, CATEGORY_CUSTOM.GLOVES_ES, 16),
			new Name("Jewelled Gloves", 1, CATEGORY_CUSTOM.GLOVES_ES, 26),
			new Name("Intricate Gloves", 1, CATEGORY_CUSTOM.GLOVES_ES, 33),
			new Name("Pauascale Gloves", 1, CATEGORY_CUSTOM.GLOVES_ES, 45),
			new Name("Embroidered Gloves", 1, CATEGORY_CUSTOM.GLOVES_ES, 52),
			new Name("Baroque Gloves", 1, CATEGORY_CUSTOM.GLOVES_ES, 54),
			new Name("Gold Gloves", 1, CATEGORY_CUSTOM.GLOVES_ES, 59),
			new Name("Grim Gloves", 1, CATEGORY_CUSTOM.GLOVES_ES, 65),
			new Name("Opulent Gloves", 1, CATEGORY_CUSTOM.GLOVES_ES, 70),
			new Name("Vaal Gloves", 1, CATEGORY_CUSTOM.GLOVES_ES, 75),

			new Name("Sirenscale Gloves", 10, CATEGORY_CUSTOM.GLOVES_ES, 80),

			new Name("Ringmail Gauntlets", 1, CATEGORY_CUSTOM.GLOVES_AM_EV, 6),
			new Name("Layered Gauntlets", 1, CATEGORY_CUSTOM.GLOVES_AM_EV, 16),
			new Name("Doubled Gauntlets", 1, CATEGORY_CUSTOM.GLOVES_AM_EV, 33),
			new Name("Plate Gauntlets", 1, CATEGORY_CUSTOM.GLOVES_AM_EV, 45),
			new Name("Zealot Gauntlets", 1, CATEGORY_CUSTOM.GLOVES_AM_EV, 59),
			new Name("Steelmail Gauntlets", 1, CATEGORY_CUSTOM.GLOVES_AM_EV, 65),
			new Name("Commander Gauntlets", 1, CATEGORY_CUSTOM.GLOVES_AM_EV, 70),
			new Name("Cultist Gauntlets", 1, CATEGORY_CUSTOM.GLOVES_AM_EV, 75),
			new Name("Blacksteel Gauntlets", 5, CATEGORY_CUSTOM.GLOVES_AM_EV, 80),

			new Name("Rope Cuffs", 1, CATEGORY_CUSTOM.GLOVES_AM_ES, 5),
			new Name("Aged Cuffs", 1, CATEGORY_CUSTOM.GLOVES_AM_ES, 16),
			new Name("Goldcast Cuffs", 1, CATEGORY_CUSTOM.GLOVES_AM_ES, 33),
			new Name("Verisium Cuffs", 1, CATEGORY_CUSTOM.GLOVES_AM_ES, 45),
			new Name("Ornate Cuffs", 1, CATEGORY_CUSTOM.GLOVES_AM_ES, 59),
			new Name("Bound Cuffs", 1, CATEGORY_CUSTOM.GLOVES_AM_ES, 65),
			new Name("Ancient Cuffs", 1, CATEGORY_CUSTOM.GLOVES_AM_ES, 70),
			new Name("Gleaming Cuffs", 1, CATEGORY_CUSTOM.GLOVES_AM_ES, 75),
			new Name("Adherent Cuffs", 5, CATEGORY_CUSTOM.GLOVES_AM_ES, 80),

			new Name("Gauze Wraps", 1, CATEGORY_CUSTOM.GLOVES_EV_ES, 4),
			new Name("Linen Wraps", 1, CATEGORY_CUSTOM.GLOVES_EV_ES, 16),
			new Name("Spiral Wraps", 1, CATEGORY_CUSTOM.GLOVES_EV_ES, 33),
			new Name("Buckled Wraps", 1, CATEGORY_CUSTOM.GLOVES_EV_ES, 45),
			new Name("Adorned Wraps", 1, CATEGORY_CUSTOM.GLOVES_EV_ES, 59),
			new Name("War Wraps", 1, CATEGORY_CUSTOM.GLOVES_EV_ES, 65),
			new Name("Elegant Wraps", 1, CATEGORY_CUSTOM.GLOVES_EV_ES, 70),
			new Name("Vaal Wraps", 1, CATEGORY_CUSTOM.GLOVES_EV_ES, 75),
			new Name("Secured Wraps", 5, CATEGORY_CUSTOM.GLOVES_EV_ES, 80),

			// https://poe2db.tw/us/Boots#BootsItem
			new Name("Rough Greaves", 1, CATEGORY_CUSTOM.BOOTS_AM, 0),
			new Name("Iron Greaves", 1, CATEGORY_CUSTOM.BOOTS_AM, 11),
			new Name("Bronze Greaves", 1, CATEGORY_CUSTOM.BOOTS_AM, 16),
			new Name("Trimmed Greaves", 1, CATEGORY_CUSTOM.BOOTS_AM, 27),
			new Name("Stone Greaves", 1, CATEGORY_CUSTOM.BOOTS_AM, 33),
			new Name("Reefsteel Greaves", 1, CATEGORY_CUSTOM.BOOTS_AM, 45),
			new Name("Elegant Greaves", 1, CATEGORY_CUSTOM.BOOTS_AM, 54),
			new Name("Carved Greaves", 1, CATEGORY_CUSTOM.BOOTS_AM, 59),
			new Name("Bulwark Greaves", 1, CATEGORY_CUSTOM.BOOTS_AM, 65),
			new Name("Ornate Greaves", 1, CATEGORY_CUSTOM.BOOTS_AM, 70),
			new Name("Vaal Greaves", 1, CATEGORY_CUSTOM.BOOTS_AM, 75),
			new Name("Tasalian Greaves", 5, CATEGORY_CUSTOM.BOOTS_AM, 80),

			new Name("Rawhide Boots", 1, CATEGORY_CUSTOM.BOOTS_EV, 0),
			new Name("Laced Boots", 1, CATEGORY_CUSTOM.BOOTS_EV, 11),
			new Name("Embossed Boots", 1, CATEGORY_CUSTOM.BOOTS_EV, 16),
			new Name("Steeltoe Boots", 1, CATEGORY_CUSTOM.BOOTS_EV, 28),
			new Name("Lizardscale Boots", 1, CATEGORY_CUSTOM.BOOTS_EV, 33),
			new Name("Flared Boots", 1, CATEGORY_CUSTOM.BOOTS_EV, 45),
			new Name("Studded Boots", 1, CATEGORY_CUSTOM.BOOTS_EV, 54),
			new Name("Serpentscale Boots", 1, CATEGORY_CUSTOM.BOOTS_EV, 59),
			new Name("Cinched Boots", 1, CATEGORY_CUSTOM.BOOTS_EV, 65),
			new Name("Cavalry Boots", 1, CATEGORY_CUSTOM.BOOTS_EV, 70),
			new Name("Dragonscale Boots", 1, CATEGORY_CUSTOM.BOOTS_EV, 75),
			new Name("Drakeskin Boots", 5, CATEGORY_CUSTOM.BOOTS_EV, 80),

			new Name("Straw Sandals", 1, CATEGORY_CUSTOM.BOOTS_ES, 0),
			new Name("Wrapped Sandals", 1, CATEGORY_CUSTOM.BOOTS_ES, 11),
			new Name("Lattice Sandals", 1, CATEGORY_CUSTOM.BOOTS_ES, 16),
			new Name("Silk Slippers", 1, CATEGORY_CUSTOM.BOOTS_ES, 27),
			new Name("Feathered Sandals", 1, CATEGORY_CUSTOM.BOOTS_ES, 33),
			new Name("Flax Sandals", 1, CATEGORY_CUSTOM.BOOTS_ES, 45),
			new Name("Elegant Slippers", 1, CATEGORY_CUSTOM.BOOTS_ES, 54),
			new Name("Dunerunner Sandals", 1, CATEGORY_CUSTOM.BOOTS_ES, 59),
			new Name("Bound Sandals", 1, CATEGORY_CUSTOM.BOOTS_ES, 65),
			new Name("Luxurious Slippers", 1, CATEGORY_CUSTOM.BOOTS_ES, 70),
			new Name("Sandsworn Sandals", 1, CATEGORY_CUSTOM.BOOTS_ES, 75),

			new Name("Sekhema Sandals", 10, CATEGORY_CUSTOM.BOOTS_ES, 80),

			new Name("Mail Sabatons", 1, CATEGORY_CUSTOM.BOOTS_AM_EV, 6),
			new Name("Braced Sabatons", 1, CATEGORY_CUSTOM.BOOTS_AM_EV, 16),
			new Name("Stacked Sabatons", 1, CATEGORY_CUSTOM.BOOTS_AM_EV, 33),
			new Name("Covered Sabatons", 1, CATEGORY_CUSTOM.BOOTS_AM_EV, 45),
			new Name("Bastion Sabatons", 1, CATEGORY_CUSTOM.BOOTS_AM_EV, 59),
			new Name("Veteran Sabatons", 1, CATEGORY_CUSTOM.BOOTS_AM_EV, 65),
			new Name("Noble Sabatons", 1, CATEGORY_CUSTOM.BOOTS_AM_EV, 70),
			new Name("Fortress Sabatons", 1, CATEGORY_CUSTOM.BOOTS_AM_EV, 75),
			new Name("Blacksteel Sabatons", 5, CATEGORY_CUSTOM.BOOTS_AM_EV, 80),

			new Name("Padded Leggings", 1, CATEGORY_CUSTOM.BOOTS_AM_ES, 5),
			new Name("Secured Leggings", 1, CATEGORY_CUSTOM.BOOTS_AM_ES, 16),
			new Name("Pelt Leggings", 1, CATEGORY_CUSTOM.BOOTS_AM_ES, 33),
			new Name("Weaver Leggings", 1, CATEGORY_CUSTOM.BOOTS_AM_ES, 45),
			new Name("Shamanistic Leggings", 1, CATEGORY_CUSTOM.BOOTS_AM_ES, 59),
			new Name("Faithful Leggings", 1, CATEGORY_CUSTOM.BOOTS_AM_ES, 65),
			new Name("Apostle Leggings", 1, CATEGORY_CUSTOM.BOOTS_AM_ES, 70),
			new Name("Warlock Leggings", 1, CATEGORY_CUSTOM.BOOTS_AM_ES, 75),
			new Name("Cryptic Leggings", 5, CATEGORY_CUSTOM.BOOTS_AM_ES, 80),

			new Name("Frayed Shoes", 1, CATEGORY_CUSTOM.BOOTS_EV_ES, 5),
			new Name("Threaded Shoes", 1, CATEGORY_CUSTOM.BOOTS_EV_ES, 16),
			new Name("Hunting Shoes", 1, CATEGORY_CUSTOM.BOOTS_EV_ES, 33),
			new Name("Steelpoint Shoes", 1, CATEGORY_CUSTOM.BOOTS_EV_ES, 45),
			new Name("Treerunner Shoes", 1, CATEGORY_CUSTOM.BOOTS_EV_ES, 59),
			new Name("Wanderer Shoes", 1, CATEGORY_CUSTOM.BOOTS_EV_ES, 65),
			new Name("Charmed Shoes", 1, CATEGORY_CUSTOM.BOOTS_EV_ES, 70),
			new Name("Quickslip Shoes", 1, CATEGORY_CUSTOM.BOOTS_EV_ES, 75),
			new Name("Daggerfoot Shoes", 5, CATEGORY_CUSTOM.BOOTS_EV_ES, 80),

			// https://poe2db.tw/us/Amulets#AmuletsItem
			new Name("Crimson Amulet", 1, CATEGORY.AMULET, 0), // 2–4 Life Regeneration per second

			new Name("Azure Amulet", 10, CATEGORY.AMULET, 0), // 20–30% increased Mana Regeneration Rate
			new Name("Dusk Amulet", 10, CATEGORY.AMULET, 0).special(), // +1 Prefix Modifier allowed, -1 Suffix Modifier allowed
			new Name("Gloam Amulet", 10, CATEGORY.AMULET, 0).special(), // -1 Prefix Modifier allowed, +1 Suffix Modifier allowed
			new Name("Penumbra Amulet", 10, CATEGORY.AMULET, 0).special(), // +2 Prefix Modifier allowed, -2 Suffix Modifier allowed
			new Name("Tenebrous Amulet", 10, CATEGORY.AMULET, 0).special(), // -2 Prefix Modifier allowed, +2 Suffix Modifier allowed
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

			new Name("Dusk Ring", 10, CATEGORY.RING, 0).special(), // +1 Prefix Modifier allowed, -1 Suffix Modifier allowed
			new Name("Gloam Ring", 10, CATEGORY.RING, 0).special(), // -1 Prefix Modifier allowed, +1 Suffix Modifier allowed
			new Name("Penumbra Ring", 10, CATEGORY.RING, 0).special(), // +2 Prefix Modifier allowed, -2 Suffix Modifier allowed
			new Name("Tenebrous Ring", 10, CATEGORY.RING, 0).special(), // -2 Prefix Modifier allowed, +2 Suffix Modifier allowed
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
			new Name("Heavy Belt", 10, CATEGORY.BELT, LEVEL_HEAVY_BELT), // 20–30% increased Stun Threshold

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

		return nameManager
			.categories(categories)
			.value(valueMin, valueMax)
			.dropLevel(dropLevel, dropLevelOperator);
	}

	static getUniques(min = undefined, max = undefined) {
		return new NameManager(
			// https://poe2db.tw/us/Unique_item
			// Weapons
			// new Name("Acrid Wand", ), // Cursecarver
			// new Name("Artillery Bow", ), // Fairgraves' Curse
			// new Name("Ashbark Talisman", ), // Fury of the King
			// new Name("Ashen Staff", ), // Dusk Vigil
			// new Name("Attuned Wand", ), // Lifesprig
			// new Name("Barbed Spear", TIER.OTHER), // Saitha's Spear
			// new Name("Bone Wand", ), // Sanguine Diviner
			// new Name("Changeling Talisman", ), // Amor Mandragora
			// new Name("Chiming Staff", ), // Sire of Shards, The Burden of Shadows
			// new Name("Composite Bow", ), // Doomfletch
			// new Name("Crescent Quarterstaff", ), // Matsya
			// new Name("Crude Bow", 1), // Widowhail
			// new Name("Crumbling Maul", ), // Quecholli
			// new Name("Cultist Greathammer", ), // The Empty Roar
			// new Name("Desolate Crossbow", ), // The Last Lament
			// new Name("Dualstring Bow", ), // Death's Harp
			// new Name("Dyad Crossbow", ), // Double Vision
			// new Name("Execratus Hammer", ), // Nebuloch
			// new Name("Familial Talisman", ), // Hysseg's Claw
			// new Name("Fanatic Bow", ), // Voltaxic Rift
			// new Name("Felled Greatclub", ), // Hoghunt
			// new Name("Forge Maul", ), // Trephina
			// new Name("Forked Spear", ), // Tangletongue
			// new Name("Gelid Staff", ), // Taryn's Shiver
			// new Name("Giant Maul", ), // The Hammer of Faith
			// new Name("Gothic Quarterstaff", ), // The Sentry
			// new Name("Hardwood Spear", ), // Splinter of Lorrata
			// new Name("Heavy Bow", ), // Lioneye's Glare
			// new Name("Helix Spear", TIER.OTHER), // Spire of Ire
			// new Name("Hunting Spear", ), // Chainsting
			// new Name("Ironhead Spear", ), // Tyranny's Grip
			// new Name("Leaden Greathammer", ), // Chober Chaber
			// new Name("Long Quarterstaff", ), // Pillar of the Caged God
			// new Name("Makeshift Crossbow", ), // Mist Whisper
			// new Name("Marching Mace", ), // Seeing Stars
			// new Name("Oak Greathammer", ), // Hrimnor's Hymn
			// new Name("Omen Sceptre", ), // Font of Power
			// new Name("Permafrost Staff", ), // The Whispering Ice
			// new Name("Pointed Maul", ), // Tidebreaker
			// new Name("Pronged Spear", ), // Atziri's Contempt
			// new Name("Pyrophyte Staff", ), // The Searing Touch
			// new Name("Rattling Sceptre", ), // The Dark Defiler
			// new Name("Ravenous Staff", ), // The Unborn Lich
			// new Name("Recurve Bow", ), // Splinterheart
			// new Name("Reflecting Staff", ), // Atziri's Rule
			// new Name("Shortbow", ), // Quill Rain
			// new Name("Shrine Sceptre", ), // Guiding Palm of the Eye, Guiding Palm of the Heart, Guiding Palm of the Mind, Palm of the Dreamer, Sacred Flame
			// new Name("Siphoning Wand", TIER.OTHER), // Adonia's Ego
			// new Name("Slim Mace", ), // Frostbreath
			// new Name("Spiked Club", ), // Trenchtimbre
			// new Name("Steelpoint Quarterstaff", ), // Nazir's Judgement
			// new Name("Studded Greatclub", ), // Brain Rattler
			// new Name("Temple Maul", ), // Shyaba
			// new Name("Tense Crossbow", ), // Rampart Raptor
			// new Name("Torment Club", ), // Mjölner, Olrovasara
			// new Name("Totemic Greatclub", ), // Marohi Erqi
			// new Name("Vicious Talisman", ), // The Flesh Poppet
			// new Name("Volatile Wand", ), // Enezun's Charge
			// new Name("Voltaic Staff", ), // Earthbound
			// new Name("War Spear", ), // Daevata's Wind
			// new Name("Warpick", ), // Sculpted Suffering
			// new Name("Winged Spear", ), // Skysliver
			// new Name("Withered Wand", ), // The Wicked Quill
			// new Name("Wooden Club", ), // Brynhand's Mark
			// new Name("Wrapped Quarterstaff", ), // The Blood Thorn
			// new Name("Wyrm Quarterstaff", ), // Collapsing Horizon/
			// new Name("Zealot Bow", ), // Slivertongue

			// Armour
			new Name("Aged Cuffs", ), // Shackles of the Wretched
			new Name("Altar Robe", ), // The Covenant
			new Name("Ancestral Mail", ), // Lightning Coil
			new Name("Anchorite Garb", ), // Redflare Conduit
			new Name("Armoured Cap", ), // Alpha's Howl
			new Name("Armoured Vest", ), // Hyrri's Ire
			new Name("Array Buckler", 35), // Sunsplinter // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/G65R33e9Ib
			new Name("Assassin Garb", ), // Cospri's Will
			new Name("Barricade Tower Shield", ), // Window to Paradise
			new Name("Beaded Circlet", ), // Visage of Ayah
			new Name("Blacksteel Tower Shield", ), // Chernobog's Pillar
			new Name("Blazon Crest Shield", ), // Alkem Eira
			new Name("Bolstered Mitts", ), // Dreadfist
			new Name("Bone Raiment", ), // Necromantle
			new Name("Braced Sabatons", ), // Darkray Vectors
			new Name("Braced Tower Shield", ), // Doomgate
			new Name("Brimmed Helm", 2), // Greymake
			new Name("Bronze Greaves", ), // The Infinite Pursuit
			new Name("Burnished Gauntlets", ), // Aerisvane's Wings
			new Name("Chain Mail", ), // Coat of Red
			new Name("Chain Tiara", ), // Sandstorm Visage
			new Name("Champion Cuirass", ), // The Brass Dome
			new Name("Cleric Vestments", ), // The Mutable Star
			new Name("Cloaked Mail", ), // Pariah's Embrace
			new Name("Closed Helm", ), // Assailum
			new Name("Conqueror Plate", ), // Kaom's Heart
			new Name("Corsair Cap", ), // The Black Insignia
			new Name("Corvus Mantle", 45), // Sacrosanctum // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/KlraZRd6I5
			new Name("Covered Sabatons", ), // Shankgonne
			new Name("Covert Hood", ), // Myris Uxor
			new Name("Cowled Helm", ), // The Smiling Knight
			new Name("Crescent Targe", ), // Feathered Fortress
			new Name("Crucible Tower Shield", ), // Svalinn
			// new Name("Crystal Focus", ), // The Eternal Spark
			new Name("Cultist Crown", ), // Crown of the Pale King
			new Name("Death Mask", ), // Mind of the Council
			new Name("Decorated Helm", ), // The Bringer of Rain
			new Name("Doubled Gauntlets", ), // Deathblow
			new Name("Elementalist Robe", ), // Gloamgown
			new Name("Elite Greathelm", ), // Deidbell
			new Name("Emblem Crest Shield", ), // Saffell's Frame
			new Name("Embossed Boots", ), // Gamblesprint
			new Name("Embroidered Gloves", ), // Leopold's Applause
			new Name("Engraved Focus", 0.5), // Carrion Call //TODO got
			new Name("Enlightened Robe", ), // Silks of Veneration
			new Name("Explorer Armour", ), // Belly of the Beast, Pragmatism
			new Name("Face Mask", ), // Mask of the Sanguimancer
			new Name("Feathered Robe", ), // Bitterbloom
			new Name("Feathered Sandals", ), // Windscream
			new Name("Feathered Tiara", ), // Mask of the Stitched Demon
			new Name("Felt Cap", ), // Goldrim
			new Name("Fierce Greathelm", ), // Blood Price
			new Name("Fine Bracers", ), // Maligaro's Virtuosity
			new Name("Firm Bracers", ), // Grip of Winter
			new Name("Full Plate", ), // Kingsguard
			new Name("Fur Plate", ), // Blackbraid
			new Name("Furtive Wraps", 125), // Essentia Sanguis // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/ky98XrYWC5
			new Name("Gauze Wraps", 45), // Plaguefinger // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/D6YL0Jyvf5
			new Name("Gilded Vestments", ), // Couture of Crimson
			new Name("Gold Circlet", ), // Atziri's Disdain
			new Name("Goldcast Cuffs", ), // Blueflame Bracers
			new Name("Guarded Helm", ), // Erian's Cobble
			new Name("Hardwood Targe", 0.5), // Arvil's Wheel
			new Name("Havoc Raiment", ), // Cloak of Defiance
			new Name("Heavy Crown", ), // Cornathaum
			new Name("Heraldric Tower Shield", ), // Redblade Banner
			new Name("Hermit Garb", ), // Apron of Emiran
			new Name("Heroic Armour", 0.5), // The Coming Calamity
			new Name("Hewn Mask", ), // The Hollow Mask
			new Name("Hexer's Robe", ), // The Black Doubt
			new Name("Hooded Mask", ), // Leer Cast
			new Name("Horned Crown", ), // Bronzebeard
			new Name("Hunter Hood", ), // Elevore
			new Name("Hunting Shoes", ), // Powertread
			new Name("Intricate Gloves", ), // Demon Stitcher
			new Name("Iron Buckler", ), // Bloodbarrier
			new Name("Iron Crown", ), // Crown of the Victor
			new Name("Iron Cuirass", ), // Edyrn's Tusks
			new Name("Iron Greaves", ), // Corpsewade
			new Name("Jade Tiara", ), // Scold's Bridle
			new Name("Jewelled Gloves", ), // Kitoko's Current
			new Name("Jingling Crest Shield", ), // Crest of Ardura
			new Name("Keth Raiment", ), // Prayers for Rain
			new Name("Knight Armour", ), // Perfidy, Widow's Reign
			new Name("Lace Hood", ), // Radiant Grief
			new Name("Laced Boots", ), // Briarpatch
			new Name("Lattice Sandals", 35), // Bones of Ullr // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/veXnP72zTE
			new Name("Layered Gauntlets", ), // Aurseize
			new Name("Leather Buckler", ), // Dunkelhalt
			new Name("Leatherbound Hood", ), // Starkonja's Head
			new Name("Leather Vest", ), // Bristleboar
			new Name("Linen Wraps", ), // Blessed Bonds, Killjoy
			new Name("Lizardscale Boots", ), // Bushwhack
			new Name("Magus Tiara", ), // Indigon
			new Name("Mail Sabatons", ), // The Knight-errant
			new Name("Mail Vestments", ), // Icetomb
			new Name("Marabout Garb", ), // Sierran Inheritance
			new Name("Maraketh Cuirass", ), // Titanrot Cataphract
			new Name("Martyr Crown", 10), // Veil of the Night // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/lgvaoXWwiV
			new Name("Moulded Mitts", ), // Atziri's Acuity, Hateforge
			new Name("Omen Crest Shield", ), // Mahuxotl's Machination, Rise of the Phoenix
			new Name("Ornate Buckler", ), // Calgyra's Arc
			new Name("Ornate Gauntlets", ), // Death Articulated
			new Name("Painted Tower Shield", ), // Wulfsbane
			new Name("Pathfinder Coat", ), // Ashrend
			new Name("Pauascale Gloves", ), // Nightscale
			new Name("Plate Gauntlets", ), // Valako's Vice
			new Name("Plated Buckler", ), // Rondel de Ezo
			new Name("Plated Raiment", ), // Vis Mortis
			new Name("Pilgrim Vestments", ), // Enfolding Dawn
			new Name("Quilted Vest", ), // Foxshade
			new Name("Raider Plate", ), // The Road Warrior
			new Name("Rampart Tower Shield", ), // Lycosidae
			new Name("Rhoahide Coat", ), // Briskwrap
			new Name("Ridged Buckler", ), // Kaltenhalt
			new Name("Ringmail Gauntlets", ), // Jarngreipr
			new Name("Riveted Mitts", ), // Treefingers
			new Name("Rogue Armour", ), // The Barrow Dweller
			new Name("Rope Cuffs", 20), // Gravebind // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/2KmjGRe5Tk
			new Name("Rough Greaves", ), // Legionstride
			new Name("Rusted Cuirass", ), // Bramblejack
			new Name("Rusted Greathelm", ), // Horns of Bynden, Wings of Caelyn
			new Name("Sacrificial Mantle", ), // Soul Mantle
			new Name("Scale Mail", ), // Doryani's Prototype
			new Name("Scalper's Jacket", ), // Zerphi's Serape
			new Name("Scout's Vest", ), // The Rat Cage
			new Name("Sectioned Bracers", ), // Idle Hands
			new Name("Secured Leggings", ), // Wake of Destruction
			new Name("Serpentscale Coat", ), // Quatl's Molt
			new Name("Shabby Hood", ), // Innsmouth
			new Name("Shaman Mantle", ), // Husk of Dreams
			new Name("Shielded Helm", ), // The Vile Knight
			new Name("Shrouded Vest", ), // Sands of Silk
			new Name("Sigil Crest Shield", ), // Oaksworn
			new Name("Silk Robe", 6000 * PRICE_DIV), // Temporalis >>> Cloak of Flame // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/jzJK09rSX
			new Name("Silk Slippers", 0.5), // Wondertrap
			new Name("Smuggler Coat", ), // Queen of the Forest
			new Name("Soldier Greathelm", ), // Ezomyte Peak
			new Name("Solid Mask", ), // The Three Dragons
			new Name("Sombre Gloves", ), // Candlemaker
			new Name("Spiked Buckler", ), // Silverthorne
			new Name("Spined Bracers", ), // Snakebite
			new Name("Spiral Wraps", 5), // Hand of Wisdom and Action // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/aLLVdmpKTe
			new Name("Spired Greathelm", ), // Thrillsteel
			new Name("Spiritbone Crown", ), // Keeper of the Arc
			new Name("Splintered Tower Shield", ), // Dionadair
			new Name("Stacked Sabatons", ), // Obern's Bastion
			new Name("Steel Plate", ), // Wandering Reliquary
			new Name("Stitched Gloves", ), // Doedre's Tenure
			new Name("Stone Greaves", ), // Birth of Fury
			new Name("Straw Sandals", ), // Luminous Pace
			new Name("Strider Vest", ), // Yriel's Fostering
			new Name("Studded Vest", ), // Dustbloom
			new Name("Suede Bracers", ), // Northpaw
			new Name("Tattered Robe", 8), // Ghostwrithe // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/Bg4jKppQt8
			new Name("Tempered Mitts", ), // Lochtonial Caress
			new Name("Threaded Shoes", ), // Ghostmarch
			new Name("Tideseer Mantle", ), // Waveshaper
			new Name("Titan Mitts", ), // Empire's Grasp
			// new Name("Tonal Focus", ), // Serpent's Lesson
			new Name("Torn Gloves", ), // Painter's Servant
			new Name("Tribal Mask", 34 * PRICE_DIV), // The Vertex >>> Glimpse of Chaos // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/ky9zpPB6C5 https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/Md39bG86iJ
			new Name("Trimmed Greaves", 7), // Trampletoe // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/eRpnEnvgsL
			new Name("Twig Circlet", ), // Crown of Thorns
			new Name("Utility Wraps", ), // Thunderfist
			new Name("Vaal Cuirass", ), // Greed's Embrace
			new Name("Vagabond Armour", ), // Irongrasp
			new Name("Velour Shoes", ), // Beetlebite
			new Name("Velvet Cap", ), // Heatshiver
			new Name("Veiled Mask", ), // Atsak's Sight
			new Name("Verisium Cuffs", ), // The Prisoner's Manacles
			new Name("Vermeil Circlet", ), // Crown of Eyes
			new Name("Viper Cap", 29), // Constricting Command // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/02Erldw7Fg
			new Name("Visored Helm", ), // Ironride
			new Name("Votive Raiment", ), // Tetzlapokal's Desire
			new Name("Warrior Greathelm", ), // Corona of the Red Sun
			new Name("Waxed Jacket", ), // Gloomform
			new Name("Wayfarer Jacket", ), // The Dancing Mirage
			new Name("Wicker Tiara", 0.5), // The Devouring Diadem
			new Name("Wooden Buckler", ), // Nocturne
			new Name("Wrapped Greathelm", ), // Black Sun Crest
			new Name("Wrapped Sandals", 5), // Wanderlust // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/jWYmbm3LtX

			// Other
			// new Name("Abyssal Signet", 0.5).special(), // Grip of Kulemak
			// new Name("Amber Amulet", ), // Carnage Heart, Revered Resin, Xoph's Blood
			// new Name("Amethyst Charm", 9), // Forsaken Bangle // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/022Xl4gpFg
			new Name("Amethyst Ring", 35), // Original Sin >>> Blackflame, Ming's Heart // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/8rnMPnLqcV
			// new Name("Antidote Charm", ), // Arakaali's Gift
			// new Name("Azure Amulet", ), // The Everlasting Gaze, Ungil's Harmony
			new Name("Bloodstone Amulet", 70), // Yoke of Suffering >>> The Anvil // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/opRyVOQKil
			// new Name("Blunt Quiver", ), // Rearguard
			// new Name("Broadhead Quiver", ), // Asphyxia's Wrath
			// new Name("Crimson Amulet", ), // Idol of Uldurn, Igniferis
			// new Name("Double Belt", ), // Bijouborne
			// new Name("Dousing Charm", ), // Beira's Anguish
			// new Name("Emerald Ring", ), // Death Rush, Thief's Torment, Vigilant View
			new Name("Fine Belt", average(100, 39)), // Darkness Enthroned > Shavronne's Satchel // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/yYM6P3QlcR https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/lgeEMkr2HV
			// new Name("Fire Quiver", 0.5), // Blackgleam
			// new Name("Gargantuan Life Flask", ), // Blood of the Warrior
			new Name("Gargantuan Mana Flask", 38), // Lavianga's Spirits // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/lgRneYdrSV
			// new Name("Gold Amulet", ), // Eye of Chayula, Serpent's Egg
			new Name("Gold Ring", average(0.95 * PRICE_DIV, 295)), // Ventor's Gamble > Andvarius >>> Perandus Seal // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/Og30dBXKHE https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/EBr0d7kRS5
			new Name("Golden Charm", 100 * PRICE_DIV), // Rite of Passage // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/7JoJ8Prf5
			// new Name("Grounding Charm", 1), // The Black Cat // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/8rL4pDJnIV
			new Name("Heavy Belt", 50 * PRICE_DIV), // Headhunter >>> Waistgate, Zerphi's Genesis // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/YpZdJDOOcY
			// new Name("Iron Ring", ), // Blackheart, Icefang Orbit, Prized Pain, Venopuncture
			new Name("Jade Amulet", average(PRICE_DIV, 250)), // Defiance of Destiny > Choir of the Storm >>> Surefooted Sigil // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/4mEV49rZI9 https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/Md3PE5QRiJ
			// new Name("Lapis Amulet", ), // Ligurium Talisman, Stone of Lazhwar, The Pandemonius
			new Name("Lazuli Ring", 180), // Seed of Cataclysm >>> Doedre's Damning, Glowswarm // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/opRyPbwqcl
			// new Name("Linen Belt", ), // Keelhaul, Umbilicus Immortalis
			// new Name("Long Belt", ), // Soul Tether
			// new Name("Lunar Amulet", ), // Rondel of Fragility
			// new Name("Mail Belt", ), // Coward's Legacy
			// new Name("Ornate Belt", ), // Ryslatha's Coil
			new Name("Pearl Ring", 45), // Snakepit >>> Evergrasping Ring, Heartbound Loop // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/q9RkG7vpFg
			// new Name("Penetrating Quiver", ), // Drillneck
			new Name("Plate Belt", 19), // Goregirdle // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/JB30qgYJhl
			new Name("Primed Quiver", 299), // Cadiro's Gambit // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/rPeXJzXgfQ
			// new Name("Prismatic Ring", ), // Gifts from Above
			// new Name("Rawhide Belt", ), // Meginord's Girdle, Midnight Braid
			new Name("Ring", average(400, 95)), // Kalandra's Touch > Sekhema's Resolve // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/3wWVvDkf5 https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/Kll7zLMni5
			// new Name("Ruby Charm", 0.5), // Ngamahu's Chosen
			// new Name("Ruby Ring", ), // Blistering Bond, Cracklecreep
			// new Name("Sacral Quiver", ), // The Lethal Draw
			// new Name("Sapphire Charm", 0.5), // Breath of the Mountains
			new Name("Sapphire Ring", 80), // Dream Fragments >>> Polcirkeln, Whisper of the Brotherhood // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/3qLR2MEdI5
			new Name("Silver Charm", 150), // The Fall of the Axe // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/7nLVBp8yC5
			new Name("Solar Amulet", 200), // Fireflower >>> Beacon of Azis // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/G65QoLe9cb
			// new Name("Staunching Charm", 3), // Sanguis Heroum // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/V5P0d3YoTp
			new Name("Stellar Amulet", average(125, 29)), // Astramentis > Strugglescream >>> Fixation of Yix, Hinekora's Sight // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/mkw8WVBBt6 https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/6zzWMqGMIG
			new Name("Stone Charm", 69), // For Utopia // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/V5eZr9D2hp
			new Name("Thawing Charm", 32), // Nascent Hope // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/q9RkQRLWug
			// new Name("Topaz Charm", 0.5), // Valako's Roar
			// new Name("Topaz Ring", ), // Call of the Brotherhood, Levinstone, The Burrower
			// new Name("Toxic Quiver", 0.5), // Murkshaft
			new Name("Ultimate Life Flask", 68), // Olroth's Resolve // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/zbW4RVwas4
			new Name("Ultimate Mana Flask", 29), // Melting Maelstrom // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/zbW4YkRKU4
			// new Name("Unset Ring", ), // Bursting Decay
			new Name("Utility Belt", 95), // Ingenuity // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/rPRD9OmgHQ
			// new Name("Visceral Quiver", ), // Beyond Reach
			new Name("Wide Belt", 120 * PRICE_DIV), // The Gnashing Sash >>> Birthright Buckle, Byrnabas // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/Klr09KoDc5
		).value(min, max);
	}
	static getChanceBases(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Martyr Crown", 0.5), // Veil of the Night // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/YppKb6zbiY
			new Name("Silver Charm", 0.5), // The Fall of the Axe // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/aLEkmEwBue
			new Name("Viper Cap", 0.5), // Constricting Command // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/vW3XqKMfE

			new Name("Tribal Mask", 30), // The Vertex // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/pJoO8KJJt0
			new Name("Wide Belt", 39), // The Gnashing Sash // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/EB3ebnXRT5 // NOTE may not be chanceable but people buy anyway
			new Name("Heavy Belt", 48), // Headhunter // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/d82eQO8ZcJ
		).value(min, max);
	}
	static getUniqueJewels(min = undefined, max = undefined) {
		return new NameManager(
			// https://poe2db.tw/Jewels#JewelsUnique
			new Name("Diamond", average(800 * PRICE_DIV, 75 * PRICE_DIV, 55 * PRICE_DIV, 1650, 1.9 * PRICE_DIV, PRICE_DIV, 540)), // The Adorned, Flesh Crucible, Prism of Belief, Heart of the Well, From Nothing, Megalomaniac > Controlled Metamorphosis // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/XOn0XvWfP https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/bG2l9zbGcL https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/5gZY0LeUa https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/4nRMZwYC9 https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/jz9Z63kHX https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/9GzvM5QIK https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/WXlMW2Dfm
			new Name("Emerald", 6 * PRICE_DIV), // Grand Spectrum // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/5g4pVBeHa
			new Name("Ruby", 290), // Grand Spectrum // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/XO04jD4sP
			new Name("Sapphire", 11.5 * PRICE_DIV), // Grand Spectrum // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/E8YPeq0H5
			new Name("Time-Lost Diamond", 95 * PRICE_DIV), // Against the Darkness // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/5zYWlwVta
			new Name("Timeless Jewel", average(9 * PRICE_DIV, 390)), // Undying Hate > Heroic Tragery // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/vmmylRJFE https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/y4ja28qUR
		).value(min, max);
	}
	static getUniqueTablets(min = undefined, max = undefined) {
		return new NameManager(
			// https://poe2db.tw/us/Tablet#TabletUnique
			new Name("Expedition Precursor Tablet", 1 / 2), // Forgotten By Time
			new Name("Delirium Precursor Tablet", 1 / 2), // Clear Skies

			new Name("Breach Precursor Tablet", 3), // Wraeclast Besieged

			new Name("Overseer Precursor Tablet", average(24, 4)), // Season of the Hunt, Cruel Hegemony
			new Name("Precursor Tablet", average(0.9 * PRICE_DIV, PRICE_DIV / 5)), // Visions of Paradise > The Grand Project
			new Name("Ritual Precursor Tablet", 0.9 * PRICE_DIV), // Freedom of Faith

			new Name("Abyss Precursor Tablet", 14 * PRICE_DIV), // Unforeseen Consequences
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

			return (min === null || name.value >= min) && (max === null || name.value < max);
		});
		return new NameManager(...names);
	}

	categories(categoriesToMatch) {
		if (categoriesToMatch === null) return this;

		let names = this.names.filter((name) => {
			return name.category === null || name.category.containsLoose(categoriesToMatch);
		});
		return new NameManager(...names);
	}

	dropLevel(dropLevel, operator = OPERATOR.EXACT) {
		if (dropLevel === null) return this;

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

	isFlag(flag, has = true) {
		return new NameManager(
			...this.names.filter((name) => name.isFlag(flag) === has)
		);
	}
	isBad(has = undefined) {
		return this.isFlag(Name.FLAG_BAD, has);
	}
	isSpecial(has = undefined) {
		return this.isFlag(Name.FLAG_SPECIAL, has);
	}
	isClass(has = undefined) {
		return this.isFlag(Name.FLAG_CLASS, has);
	}

	isEndgame(is = true) {
		return new NameManager(
			...this.names.filter((name) => name.isEndgame() === is)
		);
	}

	isCloseDrop(areaLevel, maxGap, is = true) {
		// For each category, store its drop levels
		let map = new Map();
		for (let name of this.names) {
			// Ignore anything above areaLevel as we can't obtain those
			if (name.dropLevel > areaLevel) continue;

			// Use Set for no duplicates.
			if (!map.has(name.category)) {
				map.set(name.category, new Set());
			}
			let set = map.get(name.category);
			set.add(name.dropLevel);
		}
		// If the key exists, its set will not be empty

		// For each category, sort set to find lowest acceptable drop level (inclusive)
		for (let [key, set] of map) {
			let array = [...set];
			// Sort descending
			array.sort((a, b) => b - a);

			let targetIndex = Math.min(0 + maxGap, array.length - 1);
			// Replace values with target drop level
			map.set(key, array[targetIndex]);
		}

		// Use map to filter current names
		return new NameManager(
			...this.names.filter((name) => {
				return (
					name.dropLevel >= map.get(name.category)
					|| name.isEndgame()
				) === is;
			})
		);
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
