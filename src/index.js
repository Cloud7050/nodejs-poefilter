import { Comparison } from "./conditions/comparison.js";
import { ConditionSet } from "./conditions/conditionSet.js";
import { StringList } from "./conditions/stringList.js";
import { Colour } from "./effects/colour.js";
import { MapEffect } from "./effects/mapEffect.js";
import { Filter } from "./filter.js";
const CATEGORY = ConditionSet.CATEGORY;



const CURRENCY_COLOUR = Colour.RED;
const CURRENCY_PRESET = Colour.PRESET.RED;
const GOLD_COLOUR = Colour.YELLOW;
const GOLD_PRESET = Colour.PRESET.YELLOW;
const QUESTLIKE_COLOUR = Colour.LIME;
const QUESTLIKE_PRESET = Colour.PRESET.GREEN;
const QUEST_COLOUR = Colour.GREEN;
const QUEST_PRESET = Colour.PRESET.BLACK;
const RELIC_COLOUR = Colour.SEAFOAM;
const RELIC_PRESET = Colour.PRESET.GREEN;
const GEM_COLOUR = Colour.CYAN;
const GEM_PRESET = Colour.PRESET.BROWN;
const SOCKETABLE_COLOUR = Colour.CERULEAN;
const SOCKETABLE_PRESET = Colour.PRESET.CYAN;
const JEWEL_COLOUR = Colour.BLUE;
const JEWEL_PRESET = Colour.PRESET.BLUE;
const GEAR_COLOUR = Colour.LAPIS;
const GEAR_PRESET = Colour.PRESET.BLUE;
const ESSENCE_COLOUR = Colour.PURPLE;
const ESSENCE_PRESET = Colour.PRESET.PURPLE;
const LEAGUE_COLOUR = Colour.VIOLET;
const LEAGUE_PRESET = Colour.PRESET.PINK;

let filter = new Filter("Cloud");

// Global style reset
filter.block((c, e) => {
	c.continue();

	e.backgroundColour = Colour.BLACK;
	e.sizeWisdom(Colour.PRESET.BLACK, MapEffect.ICON.SQUARE);
});

// Currencies - https://docs.google.com/spreadsheets/d/1Cq80pjKnWF5-FmhQd1TLcWhdpivaRaSKhMGz_I4VgG4
filter.block((c, e) => { // Essences
	c.names = new Comparison("Lesser Essence of ", Comparison.OPERATOR.EQUAL);
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourWisdom(ESSENCE_COLOUR).sizeAugment(ESSENCE_PRESET);
});
filter.block((c, e) => {
	c.names = new Comparison("Greater Essence of ", Comparison.OPERATOR.EQUAL);
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourExalt(ESSENCE_COLOUR).sizeExalt(ESSENCE_PRESET);
});
filter.block((c, e) => {
	c.names = new Comparison("Essence of ", Comparison.OPERATOR.EQUAL);
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourAugment(ESSENCE_COLOUR).sizeExalt(ESSENCE_PRESET);
});
filter.block((c, e) => { // Abyss
	c.names = new Comparison(new StringList("Gnawed Jawbone", "Gnawed Rib", "Gnawed Collarbone"));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourWisdom(LEAGUE_COLOUR).sizeExalt(LEAGUE_PRESET);
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList("Preserved Jawbone", "Preserved Rib",
		"Preserved Collarbone", "Preserved Cranium", "Preserved Vertebrae"));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourAugment(LEAGUE_COLOUR).sizeExalt(LEAGUE_PRESET);
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList("Ancient Jawbone", "Ancient Rib",
		"Ancient Collarbone"));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourExalt(LEAGUE_COLOUR).sizeExalt(LEAGUE_PRESET);
});
filter.block((c, e) => { // Trial keys
	c.names = new Comparison("Bronze Key");
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourWisdom(QUESTLIKE_COLOUR).sizeExalt(QUESTLIKE_PRESET);
});
filter.block((c, e) => {
	c.names = new Comparison("Silver Key");
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourAugment(QUESTLIKE_COLOUR).sizeExalt(QUESTLIKE_PRESET);
});
filter.block((c, e) => {
	c.names = new Comparison("Gold Key");
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourExalt(QUESTLIKE_COLOUR).sizeExalt(QUESTLIKE_PRESET);
});
filter.block((c, e) => { // Gold
	c.names = new Comparison("Gold");
	c.category = new Comparison(CATEGORY.CURRENCY);
	c.count = new Comparison(250, Comparison.OPERATOR.LT);

	e.colourWisdom(GOLD_COLOUR, Colour.TRANSPARENT).sizeWisdom(GOLD_PRESET);
});
filter.block((c, e) => {
	c.names = new Comparison("Gold");
	c.category = new Comparison(CATEGORY.CURRENCY);
	c.count = new Comparison(750, Comparison.OPERATOR.LT);

	e.colourAugment(GOLD_COLOUR, Colour.TRANSPARENT).sizeAugment(GOLD_PRESET);
});
filter.block((c, e) => {
	c.names = new Comparison("Gold");
	c.category = new Comparison(CATEGORY.CURRENCY);
	c.count = new Comparison(5000, Comparison.OPERATOR.LT);

	e.colourExalt(GOLD_COLOUR, Colour.TRANSPARENT).sizeAugment(GOLD_PRESET);
});
filter.block((c, e) => {
	c.names = new Comparison("Gold");
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourExalt(GOLD_COLOUR, Colour.TRANSPARENT).sizeExalt(GOLD_PRESET);
});
filter.block((c, e) => { // Other
	c.names = new Comparison(new StringList("Scroll of Wisdom", "Transmutation Shard"));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourWisdom(CURRENCY_COLOUR).sizeWisdom(CURRENCY_PRESET);
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList("Orb of Transmutation", "Orb of Augmentation",
		"Regal Shard", "Artificer's Shard"));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourAugment(CURRENCY_COLOUR).sizeAugment(CURRENCY_PRESET);
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList("Artificer's Orb", "Blacksmith's Whetstone",
		"Arcanist's Etcher"));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourExalt(CURRENCY_COLOUR).sizeAugment(CURRENCY_PRESET);
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList("Regal Orb", "Exalted Orb", "Orb of Alchemy",
		"Chaos Orb", "Vaal Orb", "Lesser Jeweller's Orb", "Armourer's Scrap", "Gemcutter's Prism",
		"Glassblower's Bauble", "Chance Shard"));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourExalt(CURRENCY_COLOUR).sizeExalt(CURRENCY_PRESET);
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList("Orb of Annulment", "Orb of Chance",
		"Greater Jeweller's Orb"));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourChance(CURRENCY_COLOUR).sizeChance(CURRENCY_PRESET);
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList("Divine Orb", "Mirror of Kalandra",
		"Perfect Jeweller's Orb"));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourDivine(CURRENCY_COLOUR).sizeChance(CURRENCY_PRESET);
});
filter.block((c, e) => {
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.outlineColour = CURRENCY_COLOUR;
	e.sizeExalt(CURRENCY_PRESET);
});

// Gems
filter.block((c, e) => {
	c.category = new Comparison(CATEGORY.GEM_UNCUT);

	e.colourAugment(GEM_COLOUR).sizeExalt(GEM_PRESET);
});
filter.block((c, e) => {
	c.category = new Comparison(CATEGORY.GEM);

	e.colourExalt(GEM_COLOUR).sizeAugment(GEM_PRESET);
});

// Socketables eg runes
filter.block((c, e) => {
	c.names = new Comparison("Lesser ", Comparison.OPERATOR.EQUAL);
	c.category = new Comparison(CATEGORY.SOCKETABLE);

	e.colourWisdom(SOCKETABLE_COLOUR).sizeAugment(SOCKETABLE_PRESET);
});
filter.block((c, e) => {
	c.names = new Comparison("Greater ", Comparison.OPERATOR.EQUAL);
	c.category = new Comparison(CATEGORY.SOCKETABLE);

	e.colourExalt(SOCKETABLE_COLOUR).sizeExalt(SOCKETABLE_PRESET);
});
filter.block((c, e) => {
	c.names = new Comparison(" Rune", Comparison.OPERATOR.EQUAL);
	c.category = new Comparison(CATEGORY.SOCKETABLE);

	e.colourAugment(SOCKETABLE_COLOUR).sizeExalt(SOCKETABLE_PRESET);
});
filter.block((c, e) => {
	c.category = new Comparison(CATEGORY.SOCKETABLE);

	e.colourExalt(SOCKETABLE_COLOUR).sizeExalt(SOCKETABLE_PRESET);
});

// Trial tickets
filter.block((c, e) => {
	c.category = new Comparison(CATEGORY.TICKET);

	e.colourExalt(QUESTLIKE_COLOUR).sizeExalt(QUESTLIKE_PRESET);
});

// Quest
filter.block((c, e) => {
	c.category = new Comparison(CATEGORY.QUEST);

	// Minimap args are ignored as it has a custom icon
	e.colourExalt(QUEST_COLOUR).sizeExalt(QUEST_PRESET);
});

// Rarity
// Normal
filter.block((c, e) => { // Gear style reset
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.WEAPON_CLASS, CATEGORY.WEAPON_OTHER, CATEGORY.ARMOUR, CATEGORY.JEWELLERY, CATEGORY.CHARGED));
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);

	e.colourWisdom(GEAR_COLOUR).sizeWisdom(GEAR_PRESET);
});
filter.multiBlock((c) => { // Class weapons, quality
	c.continue();
	c.category = new Comparison(CATEGORY.WEAPON_CLASS);
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);
	c.hasQuality();
}, (c) => { // Class armour, quality
	c.continue();
	c.category = new Comparison(CATEGORY.ARMOUR);
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);
	c.hasQuality();
	c.hasEnergyShield();
}, (c) => { // Common gear, good main stat
	c.continue();
	c.category = new Comparison(CATEGORY.ARMOUR);
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);
	c.goodMain();
}, (c) => { // Less common gear
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.JEWELLERY, CATEGORY.CHARGED));
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);
}, (e) => {
	e.colourWisdom(GEAR_COLOUR).sizeAugment(GEAR_PRESET);
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.JEWEL);
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);

	e.colourWisdom(JEWEL_COLOUR).sizeAugment(JEWEL_PRESET);
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.RELIC);
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);

	e.colourWisdom(RELIC_COLOUR).sizeAugment(RELIC_PRESET);
});
// Magic
filter.block((c, e) => { // Gear style reset
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.WEAPON_CLASS, CATEGORY.WEAPON_OTHER, CATEGORY.ARMOUR, CATEGORY.JEWELLERY, CATEGORY.CHARGED));
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);

	e.colourAugment(GEAR_COLOUR).sizeWisdom(GEAR_PRESET);
});
filter.multiBlock((c) => { // Class weapons, quality
	c.continue();
	c.category = new Comparison(CATEGORY.WEAPON_CLASS);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
	c.hasQuality();
}, (c) => { // Class armour, quality
	c.continue();
	c.category = new Comparison(CATEGORY.ARMOUR);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
	c.hasQuality();
	c.hasEnergyShield();
}, (c) => { // Common gear, good main stat
	c.continue();
	c.category = new Comparison(CATEGORY.ARMOUR);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
	c.goodMain();
}, (c) => { // Common gear, good mod
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.WEAPON_CLASS, CATEGORY.WEAPON_OTHER, CATEGORY.ARMOUR));
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
	c.goodMod();
}, (c) => { // Less common gear
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.JEWELLERY, CATEGORY.CHARGED));
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
}, (e) => {
	e.colourAugment(GEAR_COLOUR).sizeAugment(GEAR_PRESET);
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.JEWEL);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);

	e.colourAugment(JEWEL_COLOUR).sizeExalt(JEWEL_PRESET);
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.RELIC);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);

	e.colourAugment(RELIC_COLOUR).sizeExalt(RELIC_PRESET);
});
// Rare
filter.block((c, e) => { // Gear style reset
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.WEAPON_CLASS, CATEGORY.WEAPON_OTHER, CATEGORY.ARMOUR, CATEGORY.JEWELLERY, CATEGORY.CHARGED));
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);

	e.colourExalt(GEAR_COLOUR).sizeAugment(GEAR_PRESET);
});
filter.multiBlock((c) => { // Class weapons
	c.continue();
	c.category = new Comparison(CATEGORY.WEAPON_CLASS);
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);
}, (c) => { // Class armour
	c.continue();
	c.category = new Comparison(CATEGORY.ARMOUR);
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);
	c.hasEnergyShield();
}, (c) => { // Common gear, good main stat
	c.continue();
	c.category = new Comparison(CATEGORY.ARMOUR);
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);
	c.goodMain();
}, (c) => { // Common gear, good mod
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.WEAPON_CLASS, CATEGORY.WEAPON_OTHER, CATEGORY.ARMOUR));
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);
	c.goodMod();
}, (c) => { // Less common gear
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.JEWELLERY, CATEGORY.CHARGED));
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);
}, (e) => {
	e.colourExalt(GEAR_COLOUR).sizeExalt(GEAR_PRESET);
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.JEWEL);
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);

	e.colourExalt(JEWEL_COLOUR).sizeExalt(JEWEL_PRESET);
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.RELIC);
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);

	e.colourExalt(RELIC_COLOUR).sizeExalt(RELIC_PRESET);
});
// Unique
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.WEAPON_CLASS, CATEGORY.WEAPON_OTHER, CATEGORY.ARMOUR,
		CATEGORY.JEWELLERY, CATEGORY.CHARGED));
	c.rarity = new Comparison(ConditionSet.RARITY.UNIQUE);

	e.colourChance(GEAR_COLOUR).sizeChance(GEAR_PRESET);
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.JEWEL);
	c.rarity = new Comparison(ConditionSet.RARITY.UNIQUE);

	e.colourChance(JEWEL_COLOUR).sizeChance(JEWEL_PRESET);
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.RELIC);
	c.rarity = new Comparison(ConditionSet.RARITY.UNIQUE);

	e.colourChance(RELIC_COLOUR).sizeChance(RELIC_PRESET);
});

// Overwrite outlines (highest priority first)
filter.multiBlock((c) => { // Good main stat
	c.goodMain();
}, (c) => { // Good mod
	c.continue();
	c.goodMod();
}, (e) => {
	e.outlineColour = Colour.RARE;
});
filter.block((c, e) => { // Quality
	c.hasQuality();

	e.outlineColour = Colour.MAGIC;
});

// Stop here; don't fade these
filter.multiBlock((c) => {
	c.hasSocket();
}, (c) => {
	c.wisdomTier = new Comparison(2, Comparison.OPERATOR.GTE);
}, (e) => {});

// Fade
filter.multiBlock((c) => { // Normal/magic class weapons but are wrong skill
	c.names = new Comparison(new StringList(
		// https://poe2db.tw/us/Wands#WandsItem
		"Withered Wand", // Chaos Bolt
		// "Bone Wand", // Bone Blast
		"Attuned Wand", // Mana Drain
		"Siphoning Wand", // Power Siphon
		"Volatile Wand", // Volatile Dead
		"Galvanic Wand", // Galvanic Field

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
	c.noEnergyShield();
}, (c) => { // Bad normal/magic flasks
	c.names = new Comparison(new StringList("Lesser Life Flask", "Lesser Mana Flask",
		"Medium Life Flask", "Medium Mana Flask", "Greater Life Flask", "Greater Mana Flask",
		"Grand Life Flask", "Grand Mana Flask", "Giant Life Flask", "Giant Mana Flask",
		"Colossal Life Flask", "Colossal Mana Flask", "Gargantuan Life Flask",
		"Gargantuan Mana Flask"));
	c.category = new Comparison(CATEGORY.CHARGED);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC, Comparison.OPERATOR.LTE);
}, (e) => {
	e.fade();
});

filter.save();
