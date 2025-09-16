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
	c.names = new Comparison(new StringList("Gnawed Jawbone", "Gnawed Rib", "Gnawed Collarbone"));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourWisdom(ABYSS_COLOUR, ABYSS_PRESET).sizeAugment();
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList("Preserved Jawbone", "Preserved Rib",
		"Preserved Collarbone", "Preserved Cranium", "Preserved Vertebrae"));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourAugment(ABYSS_COLOUR, ABYSS_PRESET).sizeExalt();
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList("Ancient Jawbone", "Ancient Rib",
		"Ancient Collarbone"));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourExalt(ABYSS_COLOUR, ABYSS_PRESET).sizeExalt();
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

// Expedition
filter.block((c, e) => {
	c.names = new Comparison(new StringList("Exotic Coinage", "Broken Circle Artifact",
		"Black Scythe Artifact", "Order Artifact", "Sun Artifact"));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourAugment(MECHANIC_COLOUR, MECHANIC_PRESET).sizeExalt();
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
	));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourAugment(CURRENCY_COLOUR, CURRENCY_PRESET).sizeAugment();
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList(
		"Greater Orb of Transmutation", // 1 / 600 exalts
		"Orb of Alchemy", // 1 / 98 exalts
		"Greater Orb of Augmentation", // 1 / 29.5 exalts
		"Greater Jeweller's Orb", // 1 / 13 exalts
		"Blacksmith's Whetstone", // 1 / 12 exalts
		"Arcanist's Etcher", // 1 / 4.9 exalts
		"Regal Orb", // 1 / 4.9 exalts
		"Glassblower's Bauble", // 1 / 4.4 exalts
		"Armourer's Scrap", // 1 / 3.9 exalts
		"Gemcutter's Prism", // 1 / 3.8 exalts
		"Greater Regal Orb", // 1 / 2.5 exalts
		"Vaal Orb", // 1 / 1.4 exalts
	));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourExalt(CURRENCY_COLOUR, CURRENCY_PRESET).sizeAugment();
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList(
		"Exalted Orb",
		"Chance Shard", // 2 exalts
		"Greater Exalted Orb", // 3 exalts
	));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourExalt(CURRENCY_COLOUR, CURRENCY_PRESET).sizeExalt();
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList(
		"Chaos Orb", // 4.9 exalts
		"Greater Chaos Orb", // 16 exalts
		"Orb of Chance" // 20 exalts
	));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourChance(CURRENCY_COLOUR, CURRENCY_PRESET).sizeChance();
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList(
		"Perfect Jeweller's Orb", // 32 exalts
		"Orb of Annulment", // 63.5 exalts
		"Divine Orb", // 200 exalts
		"Mirror of Kalandra" // 671 divines
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
	c.category = new Comparison(CATEGORY.OMEN);

	e.colourExalt(CRAFT_COLOUR, CRAFT_PRESET).sizeExalt();
});

// Gems
filter.block((c, e) => {
	c.category = new Comparison(CATEGORY.GEM_UNCUT);

	e.colourAugment(GEM_COLOUR, GEM_PRESET).sizeExalt();
});
filter.block((c, e) => {
	c.category = new Comparison(CATEGORY.GEM);

	e.colourExalt(GEM_COLOUR, GEM_PRESET).sizeAugment();
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

// Trial tickets
filter.block((c, e) => {
	c.category = new Comparison(CATEGORY.TICKET);

	e.colourExalt(QUESTLIKE_COLOUR, QUESTLIKE_PRESET).sizeExalt();
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
	c.category = new Comparison(new StringList(CATEGORY.WEAPON_CLASS, CATEGORY.WEAPON_OTHER, CATEGORY.ARMOUR, CATEGORY.JEWELLERY, CATEGORY.BELT, CATEGORY.CHARGED));
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);

	e.colourWisdom(GEAR_COLOUR, GEAR_PRESET).sizeWisdom();
});
filter.multiBlock((c) => { // Less common gear
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.JEWELLERY, CATEGORY.CHARGED));
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);
}, (c) => { // Class weapons, quality
	c.continue();
	c.category = new Comparison(CATEGORY.WEAPON_CLASS);
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);
	c.hasQuality();
}, (c) => { // Class armour, quality
	c.continue();
	c.category = new Comparison(CATEGORY.ARMOUR);
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
}, (c) => { // Valuable base
	c.continue();
	c.category = new Comparison(CATEGORY.BELT);
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);
}, (e) => {
	e.colourWisdom(GEAR_COLOUR, GEAR_PRESET).sizeExalt();
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.JEWEL);
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);

	e.colourWisdom(JEWEL_COLOUR, JEWEL_PRESET).sizeAugment();
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.WAYSTONE);
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);

	e.colourWisdom(QUESTLIKE_COLOUR, QUESTLIKE_PRESET).sizeAugment();
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.RELIC);
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);

	e.colourWisdom(MECHANIC_COLOUR, MECHANIC_PRESET).sizeAugment();
});

// Magic
filter.block((c, e) => { // Gear style reset
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.WEAPON_CLASS, CATEGORY.WEAPON_OTHER, CATEGORY.ARMOUR, CATEGORY.JEWELLERY, CATEGORY.BELT, CATEGORY.CHARGED));
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);

	e.colourAugment(GEAR_COLOUR, GEAR_PRESET).sizeWisdom();
});
filter.multiBlock((c) => { // Less common gear
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.JEWELLERY, CATEGORY.BELT, CATEGORY.CHARGED));
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
}, (c) => { // Class weapons, quality
	c.continue();
	c.category = new Comparison(CATEGORY.WEAPON_CLASS);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
	c.hasQuality();
}, (c) => { // Class armour, quality
	c.continue();
	c.category = new Comparison(CATEGORY.ARMOUR);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
	c.hasQuality();
	c.onlyEnergyShield();
}, (c) => { // Good mod (for other)
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.WEAPON_OTHER));
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
	c.goodMod();
}, (c) => {
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.ARMOUR));
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
	c.hasArmour();
	c.goodMod();
}, (c) => {
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.ARMOUR));
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
	c.hasEvasion();
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
	c.category = new Comparison(new StringList(CATEGORY.WEAPON_CLASS, CATEGORY.JEWELLERY, CATEGORY.BELT, CATEGORY.CHARGED));
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
	c.goodMod();
}, (c) => {
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.ARMOUR));
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
	c.onlyEnergyShield();
	c.goodMod();
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
	c.category = new Comparison(CATEGORY.RELIC);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);

	e.colourAugment(MECHANIC_COLOUR, MECHANIC_PRESET).sizeExalt();
});

// Rare
filter.block((c, e) => { // Gear style reset
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.WEAPON_CLASS, CATEGORY.WEAPON_OTHER, CATEGORY.ARMOUR, CATEGORY.JEWELLERY, CATEGORY.BELT, CATEGORY.CHARGED));
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);

	e.colourExalt(GEAR_COLOUR, GEAR_PRESET).sizeAugment();
});
filter.multiBlock((c) => { // Less common gear
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.JEWELLERY, CATEGORY.BELT, CATEGORY.CHARGED));
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);
}, (c) => { // Class weapons
	c.continue();
	c.category = new Comparison(CATEGORY.WEAPON_CLASS);
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);
}, (c) => { // Class armour
	c.continue();
	c.category = new Comparison(CATEGORY.ARMOUR);
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
	c.category = new Comparison(CATEGORY.RELIC);
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);

	e.colourExalt(MECHANIC_COLOUR, MECHANIC_PRESET).sizeExalt();
});

// Unique
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.WEAPON_CLASS, CATEGORY.WEAPON_OTHER, CATEGORY.ARMOUR,
		CATEGORY.JEWELLERY, CATEGORY.BELT, CATEGORY.CHARGED));
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
	c.category = new Comparison(CATEGORY.RELIC);
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

// Stop here; don't fade these
filter.multiBlock((c) => {
	c.hasSockets();
}, (c) => {
	c.wisdomTier = new Comparison(2, Comparison.OPERATOR.GTE);
}, (e) => {});

// Fade
filter.multiBlock((c) => { // Normal/magic class weapons but are wrong skill
	c.names = new Comparison(new StringList(
		// https://poe2db.tw/us/Sceptres#SceptresItem
		// "Rattling Sceptre", "Lupine Sceptre", "Ochre Sceptre", "Devouring Sceptre",
		// "Devotional Sceptre", "Aromatic Sceptre", "Pious Sceptre", "Hallowed Sceptre" // Skeletal Warrior
		"Stoic Sceptre", // Discipline
		"Omen Sceptre", // Malice
		"Shrine Sceptre", // Purity of Fire/Ice/Lightning / Impurity
		"Clasped Sceptre", // Heart of Ice
		"Wrath Sceptre", // Fulmination
	));
	c.category = new Comparison(CATEGORY.WEAPON_CLASS);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC, Comparison.OPERATOR.LTE);
}, (c) => { // Normal/magic other weapons
	c.category = new Comparison(CATEGORY.WEAPON_OTHER);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC, Comparison.OPERATOR.LTE);
}, (c) => { // Normal armour
	c.category = new Comparison(CATEGORY.ARMOUR);
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);
}, (c) => { // Magic other armour
	c.category = new Comparison(CATEGORY.ARMOUR);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
	c.hasArmour();
}, (c) => {
	c.category = new Comparison(CATEGORY.ARMOUR);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
	c.hasEvasion();
}, (c) => { // Bad normal/magic flasks
	c.names = new Comparison(new StringList("Lesser Life Flask", "Lesser Mana Flask",
		"Medium Life Flask", "Medium Mana Flask", "Greater Life Flask", "Greater Mana Flask",
		"Grand Life Flask", "Grand Mana Flask", "Giant Life Flask", "Giant Mana Flask",
		"Colossal Life Flask", "Colossal Mana Flask", "Gargantuan Life Flask",
		"Gargantuan Mana Flask", "Transcendent Life Flask", "Transcendent Mana Flask"));
	c.category = new Comparison(CATEGORY.CHARGED);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC, Comparison.OPERATOR.LTE);
}, (c) => { // Normal best flasks
	c.names = new Comparison(new StringList("Ultimate Life Flask", "Ultimate Mana Flask"));
	c.category = new Comparison(CATEGORY.CHARGED);
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);
}, (e) => {
	e.fade();
});

filter.save();
