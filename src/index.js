import { Comparison } from "./conditions/comparison.js";
import { ConditionSet } from "./conditions/conditionSet.js";
import { StringList } from "./conditions/stringList.js";
import { Colour } from "./effects/colour.js";
import { EffectSet } from "./effects/effectSet.js";
import { Filter } from "./filter.js";
const CATEGORY = ConditionSet.CATEGORY;



// ROSE
const CURRENCY_COLOUR = Colour.RED;
const CURRENCY_PRESET = Colour.PRESET.RED;
// ORANGE
const CRAFT_COLOUR = Colour.TANGERINE;
const CRAFT_PRESET = Colour.PRESET.ORANGE;
// GOLD
const GOLD_COLOUR = Colour.YELLOW;
const GOLD_PRESET = Colour.PRESET.YELLOW;
const QUESTLIKE_COLOUR = Colour.LIME;
const QUESTLIKE_PRESET = Colour.PRESET.GREEN;
const QUEST_COLOUR = Colour.GREEN;
const QUEST_PRESET = Colour.PRESET.BLACK;
const MECHANIC_COLOUR = Colour.SEAFOAM;
const MECHANIC_PRESET = Colour.PRESET.GREEN;
// TEAL
const GEM_COLOUR = Colour.CYAN;
const GEM_PRESET = Colour.PRESET.BROWN;
// SKY
const SOCKETABLE_COLOUR = Colour.CERULEAN;
const SOCKETABLE_PRESET = Colour.PRESET.CYAN;
const JEWEL_COLOUR = Colour.BLUE;
const JEWEL_PRESET = Colour.PRESET.BLUE;
const GEAR_COLOUR = Colour.LAPIS;
const GEAR_PRESET = Colour.PRESET.BLUE;
const ESSENCE_COLOUR = Colour.PURPLE;
const ESSENCE_PRESET = Colour.PRESET.PURPLE;
const ABYSS_COLOUR = Colour.VIOLET;
const ABYSS_PRESET = Colour.PRESET.PINK;
// PINK

let filter = new Filter("Cloud");

// Global style reset
filter.block((c, e) => {
	c.continue();

	e.backgroundColour = Colour.BLACK;
	e.mapColour = Colour.PRESET.BLACK;
	e.mapIcon = EffectSet.MAP_ICON.SQUARE;
	e.sizeWisdom();
});

//// Currencies - https://docs.google.com/spreadsheets/d/1Cq80pjKnWF5-FmhQd1TLcWhdpivaRaSKhMGz_I4VgG4
// Essences
filter.block((c, e) => {
	c.names = new Comparison("Lesser Essence of ", Comparison.OPERATOR.EQUAL);
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourWisdom(ESSENCE_COLOUR, ESSENCE_PRESET).sizeAugment();
});
filter.block((c, e) => {
	c.names = new Comparison("Greater Essence of ", Comparison.OPERATOR.EQUAL);
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourExalt(ESSENCE_COLOUR, ESSENCE_PRESET).sizeExalt();
});
filter.block((c, e) => {
	c.names = new Comparison("Essence of ", Comparison.OPERATOR.EQUAL);
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourAugment(ESSENCE_COLOUR, ESSENCE_PRESET).sizeAugment();
});

// Abyss
filter.block((c, e) => {
	c.names = new Comparison(new StringList(
		"Gnawed Jawbone", // 1 / 10 exalts
		"Gnawed Rib", // 1 / 10 exalts
		"Gnawed Collarbone", // 1 / 1.5 exalts
	));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourWisdom(ABYSS_COLOUR, ABYSS_PRESET).sizeAugment();
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList(
		"Preserved Rib", // 1 / 25 exalts
		"Preserved Jawbone", // 1 / 15 exalts
	));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourAugment(ABYSS_COLOUR, ABYSS_PRESET).sizeAugment();
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList(
		"Preserved Collarbone", // 3.5 exalts
	));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourAugment(ABYSS_COLOUR, ABYSS_PRESET).sizeExalt();
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList(
		"Preserved Vertebrae", // 1.2 exalts
	));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourExalt(ABYSS_COLOUR, ABYSS_PRESET).sizeExalt();
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList(
		"Preserved Cranium", // 14 exalts
	));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourExalt(ABYSS_COLOUR, ABYSS_PRESET).sizeChance();
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList(
		"Ancient Rib", // 1.5 divs
		"Ancient Jawbone", // 3 divs
		"Ancient Collarbone", // 4 divs
	));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourDivine(ABYSS_COLOUR, ABYSS_PRESET).sizeChance();
});

// Liquid emotions
filter.block((c, e) => {
	c.names = new Comparison("Diluted Liquid ", Comparison.OPERATOR.EQUAL);
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourWisdom(CRAFT_COLOUR, CRAFT_PRESET).sizeExalt();
});
filter.block((c, e) => {
	c.names = new Comparison("Concentrated Liquid ", Comparison.OPERATOR.EQUAL);
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourExalt(CRAFT_COLOUR, CRAFT_PRESET).sizeExalt();
});
filter.block((c, e) => {
	c.names = new Comparison("Liquid ", Comparison.OPERATOR.EQUAL);
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourAugment(CRAFT_COLOUR, CRAFT_PRESET).sizeExalt();
});

// Catalysts
filter.block((c, e) => {
	c.names = new Comparison(new StringList(
		"Skittering Catalyst", // 1 / 33.5 exalts (speed)
		"Uul-Netol's Catalyst", // 1 / 20 exalts (physical)
		"Adaptive Catalyst", // 1 / 13.33 exalts (attribute)
		"Carapace Catalyst", // 1 / 11.5 exalts (defence)
		"Sibilant Catalyst", // 1 / 11 exalts (caster)
	));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourAugment(CRAFT_COLOUR, CRAFT_PRESET).sizeAugment();
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList(
		"Chayula's Catalyst", // 1 / 9 exalts (chaos)
		"Neural Catalyst", // 1 / 8 exalts (mana)
		"Xoph's Catalyst", // 1 / 8 exalts (fire)
		"Tul's Catalyst", // 1 / 7.89 exalts (cold)
	));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourExalt(CRAFT_COLOUR, CRAFT_PRESET).sizeAugment();
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList(
		"Flesh Catalyst", // 1.24 exalts (life)
		"Esh's Catalyst", // 6.5 exalts (lightning)
	));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourExalt(CRAFT_COLOUR, CRAFT_PRESET).sizeExalt();
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList(
		"Reaver Catalyst", // 10 exalts (attack)
	));
	c.category = new Comparison(CATEGORY.OMEN);

	e.colourChance(CRAFT_COLOUR, CRAFT_PRESET).sizeChance();
});

// Trial keys
filter.block((c, e) => {
	c.names = new Comparison("Bronze Key");
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourWisdom(QUESTLIKE_COLOUR, QUESTLIKE_PRESET).sizeExalt();
});
filter.block((c, e) => {
	c.names = new Comparison("Silver Key");
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourAugment(QUESTLIKE_COLOUR, QUESTLIKE_PRESET).sizeExalt();
});
filter.block((c, e) => {
	c.names = new Comparison("Gold Key");
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourExalt(QUESTLIKE_COLOUR, QUESTLIKE_PRESET).sizeExalt();
});

// Splinters
filter.block((c, e) => {
	c.names = new Comparison(new StringList("Breach Splinter", "Simulacrum Splinter",
		"Petition Splinter", "Runic Splinter"));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourExalt(QUESTLIKE_COLOUR, QUESTLIKE_PRESET).sizeExalt();
});

// Expedition
filter.block((c, e) => {
	c.names = new Comparison(new StringList("Broken Circle Artifact", "Black Scythe Artifact",
		"Order Artifact", "Sun Artifact"));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourAugment(MECHANIC_COLOUR, MECHANIC_PRESET).sizeWisdom();
});
filter.block((c, e) => {
	c.names = new Comparison("Exotic Coinage");
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourExalt(MECHANIC_COLOUR, MECHANIC_PRESET).sizeAugment();
});

// Gold
filter.block((c, e) => {
	c.names = new Comparison("Gold");
	c.category = new Comparison(CATEGORY.CURRENCY);
	c.count = new Comparison(50, Comparison.OPERATOR.LT);

	e.hide();
	e.colourWisdom(GOLD_COLOUR, GOLD_PRESET, Colour.TRANSPARENT).sizeWisdom();
});
filter.block((c, e) => {
	c.names = new Comparison("Gold");
	c.category = new Comparison(CATEGORY.CURRENCY);
	c.count = new Comparison(500, Comparison.OPERATOR.LT);

	e.colourWisdom(GOLD_COLOUR, GOLD_PRESET, Colour.TRANSPARENT).sizeWisdom();
});
filter.block((c, e) => {
	c.names = new Comparison("Gold");
	c.category = new Comparison(CATEGORY.CURRENCY);
	c.count = new Comparison(2500, Comparison.OPERATOR.LT);

	e.colourAugment(GOLD_COLOUR, GOLD_PRESET, Colour.TRANSPARENT).sizeAugment();
});
filter.block((c, e) => {
	c.names = new Comparison("Gold");
	c.category = new Comparison(CATEGORY.CURRENCY);
	c.count = new Comparison(5000, Comparison.OPERATOR.LT);

	e.colourExalt(GOLD_COLOUR, GOLD_PRESET, Colour.TRANSPARENT).sizeAugment();
});
filter.block((c, e) => {
	c.names = new Comparison("Gold");
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourExalt(GOLD_COLOUR, GOLD_PRESET, Colour.TRANSPARENT).sizeExalt();
});

// General
filter.block((c, e) => {
	c.names = new Comparison(new StringList(
		"Scroll of Wisdom", // 1 / 680 exalts
		"Greater Orb of Transmutation", // 1 / 600 exalts
		"Transmutation Shard", // 1 / 500 exalts
		"Artificer's Shard", // 1 / 340 exalts
	));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourWisdom(CURRENCY_COLOUR, CURRENCY_PRESET).sizeWisdom();
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList(
		"Lesser Jeweller's Orb", // 1 / 70 exalts
		"Orb of Transmutation", // 1 / 50 exalts
		"Regal Shard", // 1 / 49 exalts
		"Artificer's Orb", // 1 / 34 exalts
		"Orb of Augmentation", // 1 / 33 exalts
		"Greater Orb of Augmentation", // 1 / 29.5 exalts
		"Perfect Orb of Transmutation", // 1 / 24 exalts
		"Greater Jeweller's Orb", // 1 / 13 exalts
		"Blacksmith's Whetstone", // 1 / 12 exalts
	));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourAugment(CURRENCY_COLOUR, CURRENCY_PRESET).sizeAugment();
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList(
		"Orb of Alchemy", // 1 / 7.5 exalts
		"Arcanist's Etcher", // 1 / 4.9 exalts
		"Regal Orb", // 1 / 4.18 exalts
		"Glassblower's Bauble", // 1 / 4.4 exalts
		"Armourer's Scrap", // 1 / 3.9 exalts
		"Gemcutter's Prism", // 1 / 3.8 exalts
		"Greater Regal Orb", // 1 / 2.75 exalts
	));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourExalt(CURRENCY_COLOUR, CURRENCY_PRESET).sizeAugment();
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList(
		"Exalted Orb",
		"Perfect Orb of Augmentation", // 1.18 exalts
		"Vaal Orb", // 1.2 exalts
		"Chance Shard", // 2.2 exalts
		"Greater Exalted Orb", // 2.8 exalts
	));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourExalt(CURRENCY_COLOUR, CURRENCY_PRESET).sizeExalt();
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList(
		"Chaos Orb", // 11.9 exalts
		"Perfect Jeweller's Orb", // 15 exalts
		"Perfect Regal Orb", // 15 exalts
		"Orb of Chance", // 22 exalts
	));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourChance(CURRENCY_COLOUR, CURRENCY_PRESET).sizeChance();
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList(
		"Greater Chaos Orb", // 37.5 exalts
		"Fracturing Orb", // 70 exalts
		"Orb of Annulment", // 159 exalts
		"Divine Orb", // 384.75 exalts
		"Perfect Chaos Orb", // 2 divs
		"Perfect Exalted Orb", // 2.33 divs
		"Hinekora's Lock", // 242 divs
		"Mirror of Kalandra", // 1100 divs
	));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourDivine(CURRENCY_COLOUR, CURRENCY_PRESET).sizeChance();
});

// Other
filter.block((c, e) => {
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.outlineColour = CURRENCY_COLOUR;
	e.mapColour = CURRENCY_PRESET;
	e.mapIcon = EffectSet.MAP_ICON.CROSS;
	e.sizeExalt();
});
////

// Omens
filter.block((c, e) => {
	c.names = new Comparison(new StringList(
		"Omen of Gambling", // 1 / 500 exalts
		"Omen of the Liege", // 1 / 150 exalts
		"Omen of Refreshment", // 1 / 100 exalts
	));
	c.category = new Comparison(CATEGORY.OMEN);

	e.colourAugment(CRAFT_COLOUR, CRAFT_PRESET).sizeAugment();
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList(
		"Omen of the Blackblooded", // 1 / 10 exalts
		"Omen of Dextral Necromancy", // 1 / 7 exalts
		"Omen of the Sovereign", // 1 / 5 exalts
		"Omen of Resurgence", // 1 / 3 exalts
		"Omen of Greater Exaltation", // 1 / 2 exalts
	));
	c.category = new Comparison(CATEGORY.OMEN);

	e.colourExalt(CRAFT_COLOUR, CRAFT_PRESET).sizeAugment();
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList(
		"Omen of the Ancients", // 1.1 exalts
		"Omen of Putrefaction", // 1.2 exalts
		"Omen of Chaotic Quantity", // 1.25 exalts
		"Omen of Chaotic Monsters", // 1.5 exalts
		"Omen of Sinistral Exaltation", // 2 exalts
		"Omen of the Blessed", // 2 exalts
		"Omen of Dextral Exaltation", // 3.4 exalts
		"Omen of Bartering", // 3.7 exalts
		"Omen of Homogenising Coronation", // 4 exalts
		"Omen of Catalysing Exaltation", // 5 exalts
		"Omen of Answered Prayers", // 5.1 exalts
		"Omen of Corruption", // 5.5 exalts
		"Omen of Amelioration", // 5.67 exalts
	));
	c.category = new Comparison(CATEGORY.OMEN);

	e.colourExalt(CRAFT_COLOUR, CRAFT_PRESET).sizeExalt();
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList(
		"Omen of Sinistral Necromancy", // 10 exalts
		"Omen of Chaotic Rarity", // 12 exalts
		"Omen of Dextral Crystallisation", // 12 exalts
		"Omen of Reinforcements", // 16 exalts
		"Omen of Recombination", // 22 exalts
		"Omen of the Hunt", // 28 exalts
		"Omen of Sinistral Crystallisation", // 30 exalts
	));
	c.category = new Comparison(CATEGORY.OMEN);

	e.colourChance(CRAFT_COLOUR, CRAFT_PRESET).sizeChance();
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList(
		"Omen of Secret Compartments", // 34 exalts
		"Omen of Homogenising Exaltation", // 47 exalts
		"Omen of Abyssal Echoes", // 71 exalts
		"Omen of Sanctification", // 118 exalts
		"Omen of Dextral Erasure", // 1 div
		"Omen of Whittling", // 1.33 divs
		"Omen of Dextral Annulment", // 2.6 divs
		"Omen of Sinistral Erasure", // 3.33 divs
		"Omen of Light", // 3.6 divs
		"Omen of Sinistral Annulment", // 3.8 divs
		"Omen of Chance", // 7.5 divs
	));
	c.category = new Comparison(CATEGORY.OMEN);

	e.colourDivine(CRAFT_COLOUR, CRAFT_PRESET).sizeChance();
});

// Gems
filter.block((c, e) => {
	c.category = new Comparison(CATEGORY.SUPPORT_UNCUT);

	e.colourAugment(GEM_COLOUR, GEM_PRESET).sizeExalt();
});
filter.block((c, e) => {
	c.category = new Comparison(CATEGORY.GEM_UNCUT);

	e.colourAugment(GEM_COLOUR, GEM_PRESET).sizeExalt();
});
// Lineage
filter.block((c, e) => {
	c.names = new Comparison(
		new StringList(
			"Daresso's Passion", // 1 / 10 exalts
			"Arakaali's Lust", // 1 / 10 exalts
			"Kurgal's Leash", // 1 / 5 exalts
			"Tacati's Ire", // 1 / 4 exalts
			"Sione's Temper", // 1 / 3 exalts
			"Romira's Requital", // 1 / 3 exalts
			"Uruk's Smelting", // 1 / 2 exalts
			"Paquate's Pact", // 1 / 2 exalts
			"Vilenta's Propulsion", // 1 / 2 exalts
			"Tecrod's Revenge", // 1 / 2 exalts
			"Kulemak's Dominion", // 1 / 2 exalts
			"Ahn's Citadel", // 1 / 2 exalts
			"Varashta's Blessing", // 1 / 2 exalts
			"Einhar's Beastrite", // 1 exalt
			"Doedre's Undoing", // 1 exalt
			"Kaom's Madness", // 1 exalt
			"Tawhoa's Tending", // 1 exalt
			"Atziri's Allure", // 1 exalt
			"Zarokh's Refrain", // 1 exalt
		),
		Comparison.OPERATOR.EQUAL
	);
	c.category = new Comparison(CATEGORY.GEM);

	e.colourChance(GEM_COLOUR, GEM_PRESET).sizeAugment();
});
filter.block((c, e) => {
	c.names = new Comparison(
		new StringList(
			"Brutus' Brain", // 2 exalts
			"Piety's Mercy", // 2 exalts
			"Arbiter's Ignition", // 2 exalts
			"Xoph's Pyre", // 3 exalts
			"Garukhan's Resolve", // 3 exalts
			"Ailith's Chimes", // 5 exalts
			"Kalisa's Crescendo", // 5 exalts
		),
		Comparison.OPERATOR.EQUAL
	);
	c.category = new Comparison(CATEGORY.GEM);

	e.colourChance(GEM_COLOUR, GEM_PRESET).sizeExalt();
});
filter.block((c, e) => {
	c.names = new Comparison(
		new StringList(
			"Uhtred's Exodus", // 14 exalts
			"Tul's Stillness", // 15 exalts
		),
		Comparison.OPERATOR.EQUAL
	);
	c.category = new Comparison(CATEGORY.GEM);

	e.colourChance(GEM_COLOUR, GEM_PRESET).sizeChance();
});
filter.block((c, e) => {
	c.names = new Comparison(
		new StringList(
			"Esh's Radiance", // 40 exalts
			"Rigwald's Ferocity", // 40 exalts
			"Ixchel's Torment", // 138 exalts
			"Atalui's Bloodletting", // 3 divs
			"Ratha's Assault", // 4 divs
			"Uul-Netol's Embrace", // 6 divs
			"Uhtred's Omen", // 6 divs
			"Rakiata's Flow", // 18 divs
			"Uhtred's Augury", // 30 divs
			"Arjun's Medal", // 34 divs
			"Dialla's Desire", // 36 divs
		),
		Comparison.OPERATOR.EQUAL
	);
	c.category = new Comparison(CATEGORY.GEM);

	e.colourDivine(GEM_COLOUR, GEM_PRESET).sizeChance();
});
//
filter.multiBlock((c) => {
	c.category = new Comparison(CATEGORY.GEM);
	c.hasQuality();
}, (c) => {
	c.category = new Comparison(CATEGORY.GEM);
	c.hasSockets(4);
}, (e) => {
	e.colourExalt(GEM_COLOUR, GEM_PRESET).sizeExalt();
});
filter.block((c, e) => {
	c.category = new Comparison(CATEGORY.GEM);

	e.colourExalt(GEM_COLOUR, GEM_PRESET).sizeWisdom();
});

// Socketables
filter.block((c, e) => {
	c.names = new Comparison("Lesser ", Comparison.OPERATOR.EQUAL);
	c.category = new Comparison(CATEGORY.SOCKETABLE);

	e.colourWisdom(SOCKETABLE_COLOUR, SOCKETABLE_PRESET).sizeAugment();
});
filter.block((c, e) => {
	c.names = new Comparison("Greater ", Comparison.OPERATOR.EQUAL);
	c.category = new Comparison(CATEGORY.SOCKETABLE);

	e.colourExalt(SOCKETABLE_COLOUR, SOCKETABLE_PRESET).sizeExalt();
});
filter.block((c, e) => {
	c.names = new Comparison(" Rune", Comparison.OPERATOR.EQUAL);
	c.category = new Comparison(CATEGORY.SOCKETABLE);

	e.colourAugment(SOCKETABLE_COLOUR, SOCKETABLE_PRESET).sizeAugment();
});
// Normal soul cores
filter.block((c, e) => {
	c.names = new Comparison(new StringList(
		"Soul Core of Puhuarte", // 13 exalts
		"Soul Core of Zalatl", // 18 exalts
		"Soul Core of Opiloti", // 20 exalts
		"Soul Core of Tzamoto", // 20 exalts
		"Soul Core of Ticaba", // 20 exalts
		"Soul Core of Quipolatl", // 22 exalts
		"Soul Core of Citaqualotl", // 23 exalts
		"Soul Core of Cholotl", // 23 exalts
		"Soul Core of Atmohua", // 24 exalts
		"Soul Core of Zantipi", // 24 exalts
		"Soul Core of Topotante", // 25 exalts
		"Soul Core of Xopec", // 26.92 exalts
	));
	c.category = new Comparison(CATEGORY.SOCKETABLE);

	e.colourChance(SOCKETABLE_COLOUR, SOCKETABLE_PRESET).sizeChance();
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList(
		"Soul Core of Azcapa", // 40 exalts
		"Soul Core of Tacati", // 54 exalts
		"Soul Core of Jiquani", // 3 divs
	));
	c.category = new Comparison(CATEGORY.SOCKETABLE);

	e.colourDivine(SOCKETABLE_COLOUR, SOCKETABLE_PRESET).sizeChance();
});
//
filter.block((c, e) => {
	c.category = new Comparison(CATEGORY.SOCKETABLE);

	e.colourExalt(SOCKETABLE_COLOUR, SOCKETABLE_PRESET).sizeExalt();
});

// Mechanic entry tickets
filter.block((c, e) => {
	c.category = new Comparison(CATEGORY.TICKET);

	e.colourExalt(QUESTLIKE_COLOUR, QUESTLIKE_PRESET).sizeExalt();
});

// Map keys
filter.block((c, e) => {
	c.category = new Comparison(new StringList(CATEGORY.VAULT, CATEGORY.FRAGMENT));

	e.colourChance(QUESTLIKE_COLOUR, QUESTLIKE_PRESET).sizeChance();
});

// Quest
filter.block((c, e) => {
	c.category = new Comparison(CATEGORY.QUEST);

	// Minimap args are ignored as it has a custom icon
	e.colourExalt(QUEST_COLOUR, QUEST_PRESET).sizeExalt();
});

//// Rarity
// Generic gear style reset
// Normal
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.MAIN_CLASS, CATEGORY.OFF_CLASS, CATEGORY.MAIN_OTHER, CATEGORY.OFF_OTHER, CATEGORY.ARMOUR_TOP, CATEGORY.BOOTS));
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);

	e.colourWisdom(GEAR_COLOUR, GEAR_PRESET).sizeWisdom();
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.JEWELLERY, CATEGORY.BELT, CATEGORY.FLASK, CATEGORY.CHARM));
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);

	e.colourWisdom(GEAR_COLOUR, GEAR_PRESET).sizeAugment();
});
// Magic
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.MAIN_CLASS, CATEGORY.OFF_CLASS, CATEGORY.MAIN_OTHER, CATEGORY.OFF_OTHER, CATEGORY.ARMOUR_TOP, CATEGORY.BOOTS));
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);

	e.colourAugment(GEAR_COLOUR, GEAR_PRESET).sizeWisdom();
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.JEWELLERY, CATEGORY.BELT, CATEGORY.FLASK, CATEGORY.CHARM));
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);

	e.colourAugment(GEAR_COLOUR, GEAR_PRESET).sizeAugment();
});
// Rare
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.MAIN_CLASS, CATEGORY.OFF_CLASS, CATEGORY.MAIN_OTHER, CATEGORY.OFF_OTHER, CATEGORY.ARMOUR_TOP, CATEGORY.BOOTS));
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);

	e.colourExalt(GEAR_COLOUR, GEAR_PRESET).sizeAugment();
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.JEWELLERY, CATEGORY.BELT, CATEGORY.FLASK, CATEGORY.CHARM));
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);

	e.colourExalt(GEAR_COLOUR, GEAR_PRESET).sizeExalt();
});
// Unique
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.MAIN_CLASS, CATEGORY.OFF_CLASS, CATEGORY.MAIN_OTHER, CATEGORY.OFF_OTHER, CATEGORY.ARMOUR_TOP, CATEGORY.BOOTS, CATEGORY.JEWELLERY, CATEGORY.BELT, CATEGORY.FLASK, CATEGORY.CHARM));
	c.rarity = new Comparison(ConditionSet.RARITY.UNIQUE);

	e.colourChance(GEAR_COLOUR, GEAR_PRESET).sizeChance();
});

// Class weapons
// Normal
filter.block((c, e) => { // Quality
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.MAIN_CLASS, CATEGORY.OFF_CLASS));
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);
	c.hasQuality();

	e.colourWisdom(GEAR_COLOUR, GEAR_PRESET).sizeAugment();
});
// Magic
filter.block((c, e) => { // Quality
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.MAIN_CLASS, CATEGORY.OFF_CLASS));
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
	c.hasQuality();

	e.colourAugment(GEAR_COLOUR, GEAR_PRESET).sizeAugment();
});
filter.multiBlock((c) => { // Good mod (main class)
	c.continue();
	c.category = new Comparison(CATEGORY.MAIN_CLASS);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
	c.goodModMainhand();
}, (c) => { // Good mod (off class)
	c.continue();
	c.category = new Comparison(CATEGORY.OFF_CLASS);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
	c.goodModOffhand();
}, (e) => {
	e.colourAugment(GEAR_COLOUR, GEAR_PRESET).sizeExalt();
});
// Rare
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.MAIN_CLASS, CATEGORY.OFF_CLASS));
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);

	e.colourExalt(GEAR_COLOUR, GEAR_PRESET).sizeExalt();
});

// Other weapons
// Magic
filter.multiBlock((c) => { // Good mod (main other)
	c.continue();
	c.category = new Comparison(CATEGORY.MAIN_OTHER);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
	c.goodModMainhand(true);
}, (c) => { // Good mod (off other)
	c.continue();
	c.category = new Comparison(CATEGORY.OFF_OTHER);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
	c.goodModOffhand(true);
}, (e) => {
	e.colourAugment(GEAR_COLOUR, GEAR_PRESET).sizeAugment();
});
// Rare
filter.multiBlock((c) => { // Good mod (main other)
	c.continue();
	c.category = new Comparison(CATEGORY.MAIN_OTHER);
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);
	c.goodModMainhand(true);
}, (c) => { // Good mod (off other)
	c.continue();
	c.category = new Comparison(CATEGORY.OFF_OTHER);
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);
	c.goodModOffhand(true);
}, (e) => {
	e.colourExalt(GEAR_COLOUR, GEAR_PRESET).sizeExalt();
});

// Class armour
// Normal
filter.block((c, e) => { // Quality
	c.continue();
	c.category = new Comparison(CATEGORY.ARMOUR_TOP);
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);
	c.hasQuality();
	c.onlyEnergyShield();

	e.colourWisdom(GEAR_COLOUR, GEAR_PRESET).sizeAugment();
});
// Magic
filter.block((c, e) => { // Quality
	c.continue();
	c.category = new Comparison(CATEGORY.ARMOUR_TOP);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
	c.hasQuality();
	c.onlyEnergyShield();

	e.colourAugment(GEAR_COLOUR, GEAR_PRESET).sizeAugment();
});
filter.block((c, e) => { // Good mod (class)
	c.continue();
	c.category = new Comparison(CATEGORY.ARMOUR_TOP);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
	c.onlyEnergyShield();
	c.goodModArmour();

	e.colourAugment(GEAR_COLOUR, GEAR_PRESET).sizeExalt();
});
// Rare
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.ARMOUR_TOP);
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);
	c.onlyEnergyShield();

	e.colourExalt(GEAR_COLOUR, GEAR_PRESET).sizeExalt();
});

// Other armour
// Magic
filter.multiBlock((c) => { // Good mod (top other)
	c.continue();
	c.category = new Comparison(CATEGORY.ARMOUR_TOP);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
	c.hasArmour();
	c.goodModArmour(true);
}, (c) => { // Good mod (top other)
	c.continue();
	c.category = new Comparison(CATEGORY.ARMOUR_TOP);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
	c.hasEvasion();
	c.goodModArmour(true);
}, (c) => { // Good mod (boots other)
	c.continue();
	c.category = new Comparison(CATEGORY.BOOTS);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
	c.goodModArmour(true);
}, (e) => {
	e.colourAugment(GEAR_COLOUR, GEAR_PRESET).sizeAugment();
});
// Rare
filter.multiBlock((c) => { // Good mod (top other)
	c.continue();
	c.category = new Comparison(CATEGORY.ARMOUR_TOP);
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);
	c.hasArmour();
	c.goodModArmour(true);
}, (c) => { // Good mod (top other)
	c.continue();
	c.category = new Comparison(CATEGORY.ARMOUR_TOP);
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);
	c.hasEvasion();
	c.goodModArmour(true);
}, (c) => { // Good mod (boots other)
	c.continue();
	c.category = new Comparison(CATEGORY.BOOTS);
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);
	c.goodModArmour(true);
}, (e) => {
	e.colourExalt(GEAR_COLOUR, GEAR_PRESET).sizeExalt();
});

// Less common gear
// Normal
filter.multiBlock((c) => { // Good main (class)
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.JEWELLERY, CATEGORY.BELT, CATEGORY.FLASK, CATEGORY.CHARM));
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);
	c.goodMain();
}, (c) => { // Normal belts
	c.continue();
	c.category = new Comparison(CATEGORY.BELT);
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);
}, (c) => { // Normal best flasks
	c.continue();
	c.names = new Comparison(new StringList("Ultimate Life Flask", "Ultimate Mana Flask"));
	c.category = new Comparison(CATEGORY.FLASK);
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);
}, (e) => {
	e.colourWisdom(GEAR_COLOUR, GEAR_PRESET).sizeExalt();
});
filter.block((c, e) => { // Normal heavy belts
	c.continue();
	c.names = new Comparison("Heavy Belt");
	c.category = new Comparison(CATEGORY.BELT);
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);

	e.colourWisdom(GEAR_COLOUR, GEAR_PRESET).sizeChance();
});
// Magic
filter.multiBlock((c) => { // Good main (class)
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.JEWELLERY, CATEGORY.BELT, CATEGORY.FLASK, CATEGORY.CHARM));
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
	c.goodMain();
}, (c) => { // Good mod (class)
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.JEWELLERY, CATEGORY.BELT, CATEGORY.FLASK, CATEGORY.CHARM));
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
	c.goodModJewellery();
}, (c) => { // Magic best flasks
	c.continue();
	c.names = new Comparison(new StringList("Ultimate Life Flask", "Ultimate Mana Flask"));
	c.category = new Comparison(CATEGORY.FLASK);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
}, (e) => {
	e.colourAugment(GEAR_COLOUR, GEAR_PRESET).sizeExalt();
});

// Jewels
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.JEWEL);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);

	e.colourAugment(JEWEL_COLOUR, JEWEL_PRESET).sizeExalt();
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.JEWEL);
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);

	e.colourExalt(JEWEL_COLOUR, JEWEL_PRESET).sizeExalt();
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.JEWEL);
	c.rarity = new Comparison(ConditionSet.RARITY.UNIQUE);

	e.colourChance(JEWEL_COLOUR, JEWEL_PRESET).sizeChance();
});

// Waystones
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.WAYSTONE);
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);

	e.colourWisdom(QUESTLIKE_COLOUR, QUESTLIKE_PRESET).sizeAugment();
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.WAYSTONE);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);

	e.colourAugment(QUESTLIKE_COLOUR, QUESTLIKE_PRESET).sizeExalt();
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.WAYSTONE);
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);

	e.colourExalt(QUESTLIKE_COLOUR, QUESTLIKE_PRESET).sizeExalt();
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.WAYSTONE);
	c.rarity = new Comparison(ConditionSet.RARITY.UNIQUE);

	e.colourChance(QUESTLIKE_COLOUR, QUESTLIKE_PRESET).sizeChance();
});

// Tablets/relics
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.TABLET));
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);

	e.colourWisdom(MECHANIC_COLOUR, MECHANIC_PRESET).sizeAugment();
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.TABLET, CATEGORY.RELIC));
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);

	e.colourAugment(MECHANIC_COLOUR, MECHANIC_PRESET).sizeExalt();
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.TABLET);
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);

	e.colourExalt(MECHANIC_COLOUR, MECHANIC_PRESET).sizeExalt();
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.TABLET, CATEGORY.RELIC));
	c.rarity = new Comparison(ConditionSet.RARITY.UNIQUE);

	e.colourChance(MECHANIC_COLOUR, MECHANIC_PRESET).sizeChance();
});
////

// Overwrite outlines (highest priority first)
filter.multiBlock((c) => {
	c.goodMain(true);
}, (c) => {
	c.category = new Comparison(new StringList(CATEGORY.MAIN_CLASS, CATEGORY.MAIN_OTHER));
	c.goodModMainhand(true);
}, (c) => {
	c.category = new Comparison(new StringList(CATEGORY.OFF_CLASS, CATEGORY.OFF_OTHER));
	c.goodModOffhand(true);
}, (c) => {
	c.category = new Comparison(new StringList(CATEGORY.ARMOUR_TOP, CATEGORY.BOOTS));
	c.goodModArmour(true);
}, (c) => {
	c.category = new Comparison(CATEGORY.JEWELLERY);
	c.goodModJewellery(true);
}, (e) => {
	e.outlineColour = Colour.RARE;
});
filter.multiBlock((c) => {
	c.hasQuality(5);
}, (c) => {
	c.continue(); // 1-4% quality isn't immune to hiding below
	c.hasQuality();
}, (e) => {
	e.outlineColour = Colour.MAGIC;
});

// Stop here; never hide these
filter.multiBlock((c) => {
	//TODO once encountered, highlight these differently. Could be 21-30% quality or extra socket
	c.names = new Comparison("Exceptional ", Comparison.OPERATOR.EQUAL);
}, (c) => {
	c.wisdomTier = new Comparison(4, Comparison.OPERATOR.GTE);
}, (e) => {});

// Hide
filter.multiBlock((c) => { // Normal/magic class mainhands but are wrong skill
	// https://poe2db.tw/us/Sceptres#SceptresItem
	c.names = new Comparison(new StringList(
		"Stoic Sceptre", // Discipline
		"Omen Sceptre", // Malice
		"Shrine Sceptre", // Purity of Fire/Ice/Lightning
		"Wrath Sceptre", // Fulmination
	));
	c.category = new Comparison(CATEGORY.MAIN_CLASS);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC, Comparison.OPERATOR.LTE);
}, (c) => { // Normal/magic class offhands but are low bases
	// https://poe2db.tw/us/Foci#FociItem
	c.names = new Comparison(new StringList(
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
		// "Leyline Focus", // 58 ES, L70
		// "Sacred Focus", // 63 ES, L75
		// "Tasalian Focus", // 68 ES, L80
	));
	c.category = new Comparison(CATEGORY.OFF_CLASS);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC, Comparison.OPERATOR.LTE);
}, (c) => { // Normal/magic other weapons
	c.category = new Comparison(new StringList(CATEGORY.MAIN_OTHER, CATEGORY.OFF_OTHER));
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC, Comparison.OPERATOR.LTE);
}, (c) => { // Rare other weapons that are low unidentified tier
	c.category = new Comparison(new StringList(CATEGORY.MAIN_OTHER, CATEGORY.OFF_OTHER));
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);
	c.wisdomTier = new Comparison(2, Comparison.OPERATOR.LTE);
}, (c) => { // Normal/magic class armour tops but are low bases
	c.names = new Comparison(new StringList(
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
		// "Sorcerous Tiara", // 92 ES, L70
		// "Kamasan Tiara", // 101 ES, L75
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
		// "Feathered Raiment", /// 153 ES, L80, 5–10% of Damage is taken from Mana before Life

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
		// "Opulent Gloves", // 46 ES, L70
		// "Vaal Gloves", // 50 ES, L75
		// "Sirenscale Gloves", // 54 ES, L80
	));
	c.category = new Comparison(CATEGORY.ARMOUR_TOP);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC, Comparison.OPERATOR.LTE);
	c.onlyEnergyShield();
}, (c) => { // Normal/magic other armour
	c.category = new Comparison(CATEGORY.ARMOUR_TOP);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC, Comparison.OPERATOR.LTE);
	c.hasArmour();
}, (c) => {
	c.category = new Comparison(CATEGORY.ARMOUR_TOP);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC, Comparison.OPERATOR.LTE);
	c.hasEvasion();
}, (c) => {
	// Class doesn't use most boots, it uses unique
	c.category = new Comparison(CATEGORY.BOOTS);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC, Comparison.OPERATOR.LTE);
}, (c) => { // Rare other armour that is low unidentified tier
	c.category = new Comparison(CATEGORY.ARMOUR_TOP);
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);
	c.wisdomTier = new Comparison(2, Comparison.OPERATOR.LTE);
	c.hasArmour();
}, (c) => {
	c.category = new Comparison(CATEGORY.ARMOUR_TOP);
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);
	c.wisdomTier = new Comparison(2, Comparison.OPERATOR.LTE);
	c.hasEvasion();
}, (c) => {
	c.category = new Comparison(CATEGORY.BOOTS);
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);
	c.wisdomTier = new Comparison(2, Comparison.OPERATOR.LTE);
}, (c) => { // Normal/magic other jewellery
	c.names = new Comparison(new StringList(
		"Crimson Amulet", // 2-4 life regen
		// "Amber Amulet", // Strength
		// "Jade Amulet", // Dexterity

		"Iron Ring", // +1-4 phys damage to attacks
		"Emerald Ring", // Flat accuracy
		"Unset Ring", // Skill slot
	));
	c.category = new Comparison(CATEGORY.JEWELLERY);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC, Comparison.OPERATOR.LTE);
}, (c) => { // Magic belts
	// Class doesn't use most belts, it uses unique
	c.category = new Comparison(CATEGORY.BELT);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
}, (c) => { // Rare belts that are low unidentified tier
	c.category = new Comparison(CATEGORY.BELT);
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);
	c.wisdomTier = new Comparison(2, Comparison.OPERATOR.LTE);
}, (c) => { // Bad normal/magic flasks
	c.names = new Comparison(new StringList("Lesser Life Flask", "Lesser Mana Flask",
		"Medium Life Flask", "Medium Mana Flask", "Greater Life Flask", "Greater Mana Flask",
		"Grand Life Flask", "Grand Mana Flask", "Giant Life Flask", "Giant Mana Flask",
		"Colossal Life Flask", "Colossal Mana Flask", "Gargantuan Life Flask",
		"Gargantuan Mana Flask", "Transcendent Life Flask", "Transcendent Mana Flask"));
	c.category = new Comparison(CATEGORY.FLASK);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC, Comparison.OPERATOR.LTE);
}, (e) => {
	e.hide();
});

filter.save();
