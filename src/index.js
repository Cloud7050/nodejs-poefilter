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
	c.count = new Comparison(500, Comparison.OPERATOR.LT);

	e.colourWisdom(GOLD_COLOUR, GOLD_PRESET, Colour.TRANSPARENT).sizeWisdom();
});
filter.block((c, e) => {
	c.names = new Comparison("Gold");
	c.category = new Comparison(CATEGORY.CURRENCY);
	c.count = new Comparison(1250, Comparison.OPERATOR.LT);

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
		"Arcanist's Etcher", // 1 / 4.9 exalts
		"Regal Orb", // 1 / 4.18 exalts
		"Glassblower's Bauble", // 1 / 4.4 exalts
		"Armourer's Scrap", // 1 / 3.9 exalts
		"Gemcutter's Prism", // 1 / 3.8 exalts
		"Greater Regal Orb", // 1 / 2.75 exalts
		"Orb of Alchemy", // 1 / 1.55 exalts
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
		"Perfect Chaos Orb", // 2 divines
		"Perfect Exalted Orb", // 2.33 divines
		"Hinekora's Lock", // 242 divines
		"Mirror of Kalandra", // 1100 divines
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
		"Omen of Sinistral Necromancy", // 8 exalts
	));
	c.category = new Comparison(CATEGORY.OMEN);

	e.colourChance(CRAFT_COLOUR, CRAFT_PRESET).sizeChance();
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList(
		"Omen of Abyssal Echoes", // 68 exalts
		"Omen of Light", // 3.5 divines
	));
	c.category = new Comparison(CATEGORY.OMEN);

	e.colourDivine(CRAFT_COLOUR, CRAFT_PRESET).sizeChance();
});
filter.block((c, e) => {
	c.category = new Comparison(CATEGORY.OMEN);

	e.colourExalt(CRAFT_COLOUR, CRAFT_PRESET).sizeExalt();
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
// Lineage, >= 30 exalts
filter.block((c, e) => {
	c.names = new Comparison(
		new StringList("Atalui's Bloodletting", "Ratha's Assault", "Arjun's Medal",
			"Ixchel's Torment", "Romira's Requital", "Dialla's Desire", "Kalisa's Crescendo",
			"Uul-Netol's Embrace", "Rakiata's Flow", "Rigwald's Ferocity", "Uhtred's Omen",
			"Uhtred's Augury"),
		Comparison.OPERATOR.EQUAL
	);
	c.category = new Comparison(CATEGORY.GEM);

	e.colourDivine(GEM_COLOUR, GEM_PRESET).sizeChance();
});
// Lineage, >= 1 exalt
filter.block((c, e) => {
	c.names = new Comparison(
		new StringList("Einhar's Beastrite", "Brutus' Brain", "Ailith's Chimes", "Tecrod's Revenge",
			"Doedre's Undoing", "Kaom's Madness", "Sione's Temper", "Tawhoa's Tending",
			"Piety's Mercy", "Kulemak's Dominion", "Xoph's Pyre", "Esh's Radiance",
			"Tul's Stillness", "Garukhan's Resolve", "Uhtred's Exodus", "Daresso's Passion",
			"Atziri's Allure", "Zarokh's Refrain", "Varashta's Blessing", "Arbiter's Ignition"),
		Comparison.OPERATOR.EQUAL
	);
	c.category = new Comparison(CATEGORY.GEM);

	e.colourChance(GEM_COLOUR, GEM_PRESET).sizeChance();
});
// Lineage, < 1 exalt
filter.block((c, e) => {
	c.names = new Comparison(
		new StringList("Uruk's Smelting", "Paquate's Pact", "Vilenta's Propulsion", "Tacati's Ire",
			"Ahn's Citadel", "Kurgal's Leash", "Arakaali's Lust"),
		Comparison.OPERATOR.EQUAL
	);
	c.category = new Comparison(CATEGORY.GEM);

	e.colourChance(GEM_COLOUR, GEM_PRESET).sizeExalt();
});
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
filter.block((c, e) => {
	c.category = new Comparison(CATEGORY.SOCKETABLE);

	e.colourExalt(SOCKETABLE_COLOUR, SOCKETABLE_PRESET).sizeExalt();
});

// Mechanic entry tickets
filter.block((c, e) => {
	c.category = new Comparison(CATEGORY.TICKET);

	e.colourExalt(QUESTLIKE_COLOUR, QUESTLIKE_PRESET).sizeExalt();
});

// Vault keys
filter.block((c, e) => {
	c.category = new Comparison(CATEGORY.VAULT);

	e.colourChance(QUESTLIKE_COLOUR, QUESTLIKE_PRESET).sizeChance();
});

// Quest
filter.block((c, e) => {
	c.category = new Comparison(CATEGORY.QUEST);

	// Minimap args are ignored as it has a custom icon
	e.colourExalt(QUEST_COLOUR, QUEST_PRESET).sizeExalt();
});

//// Rarity
// Normal
filter.block((c, e) => { // Gear style reset
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.WEAPON_CLASS, CATEGORY.WEAPON_OTHER, CATEGORY.ARMOUR_TOP, CATEGORY.BOOTS, CATEGORY.JEWELLERY, CATEGORY.BELT, CATEGORY.FLASK, CATEGORY.CHARM));
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);

	e.colourWisdom(GEAR_COLOUR, GEAR_PRESET).sizeWisdom();
});
filter.multiBlock((c) => { // Less common gear
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.JEWELLERY, CATEGORY.CHARM));
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);
}, (c) => { // Class weapons, quality
	c.continue();
	c.category = new Comparison(CATEGORY.WEAPON_CLASS);
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);
	c.hasQuality();
}, (c) => { // Class armour, quality
	c.continue();
	c.category = new Comparison(CATEGORY.ARMOUR_TOP);
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);
	c.hasQuality();
	c.onlyEnergyShield();
}, (e) => {
	e.colourWisdom(GEAR_COLOUR, GEAR_PRESET).sizeAugment();
});
filter.multiBlock((c) => { // Good main stat (always for class)
	c.continue();
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);
	c.goodMain();
}, (c) => { // Valuable belt
	c.continue();
	c.category = new Comparison(CATEGORY.BELT);
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);
}, (c) => { // Potentially valuable flask
	c.continue();
	c.names = new Comparison(new StringList("Ultimate Life Flask", "Ultimate Mana Flask"));
	c.category = new Comparison(CATEGORY.FLASK);
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);
}, (e) => {
	e.colourWisdom(GEAR_COLOUR, GEAR_PRESET).sizeExalt();
});
filter.block((c, e) => { // Highly valuable belt
	c.continue();
	c.names = new Comparison("Heavy Belt");
	c.category = new Comparison(CATEGORY.BELT);
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);

	e.colourWisdom(GEAR_COLOUR, GEAR_PRESET).sizeChance();
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.WAYSTONE);
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);

	e.colourWisdom(QUESTLIKE_COLOUR, QUESTLIKE_PRESET).sizeAugment();
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.TABLET));
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);

	e.colourWisdom(MECHANIC_COLOUR, MECHANIC_PRESET).sizeAugment();
});

// Magic
filter.block((c, e) => { // Gear style reset
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.WEAPON_CLASS, CATEGORY.WEAPON_OTHER, CATEGORY.ARMOUR_TOP, CATEGORY.BOOTS, CATEGORY.JEWELLERY, CATEGORY.BELT, CATEGORY.FLASK, CATEGORY.CHARM));
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);

	e.colourAugment(GEAR_COLOUR, GEAR_PRESET).sizeWisdom();
});
filter.multiBlock((c) => { // Less common gear
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.JEWELLERY, CATEGORY.BELT, CATEGORY.CHARM));
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
}, (c) => { // Class weapons, quality
	c.continue();
	c.category = new Comparison(CATEGORY.WEAPON_CLASS);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
	c.hasQuality();
}, (c) => { // Class armour, quality
	c.continue();
	c.category = new Comparison(CATEGORY.ARMOUR_TOP);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
	c.hasQuality();
	c.onlyEnergyShield();
}, (c) => { // Good mod (for other)
	c.continue();
	c.category = new Comparison(CATEGORY.WEAPON_OTHER);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
	c.goodMod();
}, (c) => {
	c.continue();
	c.category = new Comparison(CATEGORY.ARMOUR_TOP);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
	c.hasArmour();
	c.goodMod();
}, (c) => {
	c.continue();
	c.category = new Comparison(CATEGORY.ARMOUR_TOP);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
	c.hasEvasion();
	c.goodMod();
}, (c) => {
	c.continue();
	c.category = new Comparison(CATEGORY.BOOTS);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
	c.goodMod();
}, (e) => {
	e.colourAugment(GEAR_COLOUR, GEAR_PRESET).sizeAugment();
});
filter.multiBlock((c) => { // Good main stat (always for class)
	c.continue();
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
	c.goodMain();
}, (c) => { // Good mod (for class)
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.WEAPON_CLASS, CATEGORY.JEWELLERY, CATEGORY.BELT, CATEGORY.FLASK, CATEGORY.CHARM));
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
	c.goodMod();
}, (c) => {
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.ARMOUR_TOP));
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
	c.onlyEnergyShield();
	c.goodMod();
}, (c) => { // Potentially valuable flask
	c.continue();
	c.names = new Comparison(new StringList("Ultimate Life Flask", "Ultimate Mana Flask"));
	c.category = new Comparison(CATEGORY.FLASK);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
}, (e) => {
	e.colourAugment(GEAR_COLOUR, GEAR_PRESET).sizeExalt();
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.JEWEL);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);

	e.colourAugment(JEWEL_COLOUR, JEWEL_PRESET).sizeExalt();
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.WAYSTONE);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);

	e.colourAugment(QUESTLIKE_COLOUR, QUESTLIKE_PRESET).sizeExalt();
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.TABLET, CATEGORY.RELIC));
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);

	e.colourAugment(MECHANIC_COLOUR, MECHANIC_PRESET).sizeExalt();
});

// Rare
filter.block((c, e) => { // Gear style reset
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.WEAPON_CLASS, CATEGORY.WEAPON_OTHER, CATEGORY.ARMOUR_TOP, CATEGORY.BOOTS, CATEGORY.JEWELLERY, CATEGORY.BELT));
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);

	e.colourExalt(GEAR_COLOUR, GEAR_PRESET).sizeAugment();
});
filter.multiBlock((c) => { // Less common gear
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.JEWELLERY, CATEGORY.BELT));
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);
}, (c) => { // Class weapons
	c.continue();
	c.category = new Comparison(CATEGORY.WEAPON_CLASS);
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);
}, (c) => { // Class armour
	c.continue();
	c.category = new Comparison(CATEGORY.ARMOUR_TOP);
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);
	c.onlyEnergyShield();
}, (c) => { // Good main stat (always for class)
	c.continue();
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);
	c.goodMain();
}, (c) => { // Good mod
	c.continue();
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);
	c.goodMod();
}, (e) => {
	e.colourExalt(GEAR_COLOUR, GEAR_PRESET).sizeExalt();
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.JEWEL);
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);

	e.colourExalt(JEWEL_COLOUR, JEWEL_PRESET).sizeExalt();
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.WAYSTONE);
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);

	e.colourExalt(QUESTLIKE_COLOUR, QUESTLIKE_PRESET).sizeExalt();
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.TABLET);
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);

	e.colourExalt(MECHANIC_COLOUR, MECHANIC_PRESET).sizeExalt();
});

// Unique
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.WEAPON_CLASS, CATEGORY.WEAPON_OTHER, CATEGORY.ARMOUR_TOP, CATEGORY.BOOTS, CATEGORY.JEWELLERY, CATEGORY.BELT, CATEGORY.FLASK, CATEGORY.CHARM));
	c.rarity = new Comparison(ConditionSet.RARITY.UNIQUE);

	e.colourChance(GEAR_COLOUR, GEAR_PRESET).sizeChance();
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.JEWEL);
	c.rarity = new Comparison(ConditionSet.RARITY.UNIQUE);

	e.colourChance(JEWEL_COLOUR, JEWEL_PRESET).sizeChance();
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.WAYSTONE);
	c.rarity = new Comparison(ConditionSet.RARITY.UNIQUE);

	e.colourChance(QUESTLIKE_COLOUR, QUESTLIKE_PRESET).sizeChance();
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
	c.goodMain();
}, (c) => {
	c.goodMod();
}, (e) => {
	e.outlineColour = Colour.RARE;
});
filter.block((c, e) => {
	c.hasQuality();

	e.outlineColour = Colour.MAGIC;
});

// Stop here; don't hide these
filter.multiBlock((c) => {
	//TODO once encountered, highlight these differently
	c.names = new Comparison("Exceptional ", Comparison.OPERATOR.EQUAL);
}, (c) => {
	c.wisdomTier = new Comparison(3, Comparison.OPERATOR.GTE);
}, (e) => {});

// Hide
filter.multiBlock((c) => { // Normal/magic class weapons but are wrong skill
	// https://poe2db.tw/us/Sceptres#SceptresItem
	c.names = new Comparison(new StringList(
		"Stoic Sceptre", // Discipline
		"Omen Sceptre", // Malice
		"Shrine Sceptre", // Purity of Fire/Ice/Lightning
		"Wrath Sceptre", // Fulmination
	));
	c.category = new Comparison(CATEGORY.WEAPON_CLASS);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC, Comparison.OPERATOR.LTE);
}, (c) => { // Normal/magic class foci but are low bases
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
	c.category = new Comparison(CATEGORY.WEAPON_CLASS);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC, Comparison.OPERATOR.LTE);
}, (c) => { // Normal/magic other weapons
	c.category = new Comparison(CATEGORY.WEAPON_OTHER);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC, Comparison.OPERATOR.LTE);
}, (c) => { // Rare other weapons that are low unidentified tier
	c.category = new Comparison(CATEGORY.WEAPON_OTHER);
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);
	c.wisdomTier = new Comparison(1);
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
		// "Kamasan Tiara", // 78 ES, L75
		// "Ancestral Tiara", // 78 ES, L80

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
		// "Grim Gloves", // 42 ES, L65
		// "Opulent Gloves", // 46 ES, L70
		// "Vaal Gloves", // 50 ES, L75
		// "Sirenscale Gloves", // 54 ES, L80
	));
	c.category = new Comparison(CATEGORY.ARMOUR_TOP);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC, Comparison.OPERATOR.LTE);
	c.onlyEnergyShield();
}, (c) => { // Rare other armour that is low unidentified tier
	c.category = new Comparison(CATEGORY.ARMOUR_TOP);
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);
	c.wisdomTier = new Comparison(1);
	c.hasArmour();
}, (c) => {
	c.category = new Comparison(CATEGORY.ARMOUR_TOP);
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);
	c.wisdomTier = new Comparison(1);
	c.hasEvasion();
}, (c) => {
	c.category = new Comparison(CATEGORY.BOOTS);
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);
	c.wisdomTier = new Comparison(1);
}, (c) => { // Normal other jewellery
	c.names = new Comparison(new StringList(
		// "Crimson Amulet", // 2-4 life regen
		// "Amber Amulet", // Strength
		// "Jade Amulet", // Dexterity

		"Iron Ring", // +1-4 phys damage to attacks
		"Emerald Ring", // Flat accuracy
		"Unset Ring", // Skill slot
	));
	c.category = new Comparison(CATEGORY.JEWELLERY);
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);
}, (c) => { // Magic belts
	// Class doesn't use most belts, it uses unique
	c.category = new Comparison(CATEGORY.BELT);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
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
