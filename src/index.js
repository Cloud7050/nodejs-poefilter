import { Comparison } from "./conditions/comparison.js";
import { ConditionSet } from "./conditions/conditionSet.js";
import { StringList } from "./conditions/stringList.js";
import { Colour } from "./effects/colour.js";
import { MapEffect } from "./effects/mapEffect.js";
import { Filter } from "./filter.js";
const CATEGORY = ConditionSet.CATEGORY;



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

	e.colourWisdom(Colour.PINK).sizeAugment(Colour.PRESET.PINK);
});
filter.block((c, e) => {
	c.names = new Comparison("Greater Essence of ", Comparison.OPERATOR.EQUAL);
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourExalt(Colour.PINK).sizeExalt(Colour.PRESET.PINK);
});
filter.block((c, e) => {
	c.names = new Comparison("Essence of ", Comparison.OPERATOR.EQUAL);
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourAugment(Colour.PINK).sizeExalt(Colour.PRESET.PINK);
});
filter.block((c, e) => { // Trial keys
	c.names = new Comparison("Bronze Key");
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourWisdom(Colour.WHITE).sizeExalt(Colour.PRESET.GREY);
});
filter.block((c, e) => {
	c.names = new Comparison("Silver Key");
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourAugment(Colour.WHITE).sizeExalt(Colour.PRESET.GREY);
});
filter.block((c, e) => {
	c.names = new Comparison("Gold Key");
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourExalt(Colour.WHITE).sizeExalt(Colour.PRESET.GREY);
});
filter.block((c, e) => { // Abyss
	c.names = new Comparison(new StringList("Gnawed Jawbone", "Gnawed Rib", "Gnawed Collarbone"));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourWisdom(Colour.PURPLE).sizeExalt(Colour.PRESET.PURPLE);
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList("Preserved Jawbone", "Preserved Rib",
		"Preserved Collarbone", "Preserved Cranium", "Preserved Vertebrae"));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourAugment(Colour.PURPLE).sizeExalt(Colour.PRESET.PURPLE);
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList("Ancient Jawbone", "Ancient Rib",
		"Ancient Collarbone"));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourExalt(Colour.PURPLE).sizeExalt(Colour.PRESET.PURPLE);
});
filter.block((c, e) => { // Gold
	c.names = new Comparison("Gold");
	c.category = new Comparison(CATEGORY.CURRENCY);
	c.count = new Comparison(250, Comparison.OPERATOR.LT);

	e.colourWisdom(Colour.LIME, Colour.TRANSPARENT).sizeWisdom(Colour.PRESET.GREEN);
});
filter.block((c, e) => {
	c.names = new Comparison("Gold");
	c.category = new Comparison(CATEGORY.CURRENCY);
	c.count = new Comparison(750, Comparison.OPERATOR.LT);

	e.colourAugment(Colour.LIME, Colour.TRANSPARENT).sizeAugment(Colour.PRESET.GREEN);
});
filter.block((c, e) => {
	c.names = new Comparison("Gold");
	c.category = new Comparison(CATEGORY.CURRENCY);
	c.count = new Comparison(5000, Comparison.OPERATOR.LT);

	e.colourExalt(Colour.LIME, Colour.TRANSPARENT).sizeAugment(Colour.PRESET.GREEN);
});
filter.block((c, e) => {
	c.names = new Comparison("Gold");
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourExalt(Colour.LIME, Colour.TRANSPARENT).sizeExalt(Colour.PRESET.GREEN);
});
filter.block((c, e) => { // Other
	c.names = new Comparison(new StringList("Scroll of Wisdom", "Transmutation Shard"));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourWisdom(Colour.LIME).sizeWisdom(Colour.PRESET.GREEN);
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList("Orb of Transmutation", "Orb of Augmentation",
		"Regal Shard", "Artificer's Shard"));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourAugment(Colour.LIME).sizeAugment(Colour.PRESET.GREEN);
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList("Artificer's Orb", "Blacksmith's Whetstone",
		"Arcanist's Etcher"));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourExalt(Colour.LIME).sizeAugment(Colour.PRESET.GREEN);
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList("Regal Orb", "Exalted Orb", "Orb of Alchemy",
		"Chaos Orb", "Vaal Orb", "Lesser Jeweller's Orb", "Armourer's Scrap", "Gemcutter's Prism",
		"Glassblower's Bauble", "Chance Shard"));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourExalt(Colour.LIME).sizeExalt(Colour.PRESET.GREEN);
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList("Orb of Annulment", "Orb of Chance",
		"Greater Jeweller's Orb"));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourChance(Colour.LIME).sizeChance(Colour.PRESET.GREEN);
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList("Divine Orb", "Mirror of Kalandra",
		"Perfect Jeweller's Orb"));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.colourDivine(Colour.LIME).sizeChance(Colour.PRESET.GREEN);
});
filter.block((c, e) => {
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.outlineColour = Colour.LIME;
	e.sizeExalt(Colour.PRESET.GREEN);
});

// Gems
filter.block((c, e) => {
	c.category = new Comparison(CATEGORY.GEM_UNCUT);

	e.colourAugment(Colour.TEAL).sizeExalt(Colour.PRESET.BROWN);
});
filter.block((c, e) => {
	c.category = new Comparison(CATEGORY.GEM);

	e.colourExalt(Colour.TEAL).sizeAugment(Colour.PRESET.BROWN);
});

// Socketables eg runes
filter.block((c, e) => {
	c.names = new Comparison("Lesser ", Comparison.OPERATOR.EQUAL);
	c.category = new Comparison(CATEGORY.SOCKETABLE);

	e.colourWisdom(Colour.CERULEAN).sizeAugment(Colour.PRESET.CYAN);
});
filter.block((c, e) => {
	c.names = new Comparison("Greater ", Comparison.OPERATOR.EQUAL);
	c.category = new Comparison(CATEGORY.SOCKETABLE);

	e.colourExalt(Colour.CERULEAN).sizeExalt(Colour.PRESET.CYAN);
});
filter.block((c, e) => {
	c.names = new Comparison(" Rune", Comparison.OPERATOR.EQUAL);
	c.category = new Comparison(CATEGORY.SOCKETABLE);

	e.colourAugment(Colour.CERULEAN).sizeExalt(Colour.PRESET.CYAN);
});
filter.block((c, e) => {
	c.category = new Comparison(CATEGORY.SOCKETABLE);

	e.colourExalt(Colour.CERULEAN).sizeExalt(Colour.PRESET.CYAN);
});

// Trial tickets
filter.block((c, e) => {
	c.category = new Comparison(CATEGORY.TICKET);

	e.colourExalt(Colour.WHITE).sizeExalt(Colour.PRESET.GREY);
});

// Quest
filter.block((c, e) => {
	c.category = new Comparison(CATEGORY.QUEST);

	// Minimap args are ignored as it has a custom icon
	e.colourExalt(Colour.GREEN).sizeExalt(Colour.PRESET.BLACK);
});

// Rarity
// Normal
filter.block((c, e) => { // Gear style reset
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.WEAPON_CLASS, CATEGORY.WEAPON_OTHER, CATEGORY.ARMOUR, CATEGORY.JEWELLERY, CATEGORY.CHARGED));
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);

	e.colourWisdom(Colour.ORANGE).sizeWisdom(Colour.PRESET.ORANGE);
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
	e.colourWisdom(Colour.ORANGE).sizeAugment(Colour.PRESET.ORANGE);
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.JEWEL);
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);

	e.colourWisdom(Colour.TANGERINE).sizeAugment(Colour.PRESET.YELLOW);
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.RELIC);
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);

	e.colourWisdom(Colour.GOLD).sizeAugment(Colour.PRESET.BLUE);
});
// Magic
filter.block((c, e) => { // Gear style reset
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.WEAPON_CLASS, CATEGORY.WEAPON_OTHER, CATEGORY.ARMOUR, CATEGORY.JEWELLERY, CATEGORY.CHARGED));
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);

	e.colourAugment(Colour.ORANGE).sizeWisdom(Colour.PRESET.ORANGE);
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
	e.colourAugment(Colour.ORANGE).sizeAugment(Colour.PRESET.ORANGE);
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.JEWEL);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);

	e.colourAugment(Colour.TANGERINE).sizeExalt(Colour.PRESET.YELLOW);
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.RELIC);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);

	e.colourAugment(Colour.GOLD).sizeExalt(Colour.PRESET.BLUE);
});
// Rare
filter.block((c, e) => { // Gear style reset
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.WEAPON_CLASS, CATEGORY.WEAPON_OTHER, CATEGORY.ARMOUR, CATEGORY.JEWELLERY, CATEGORY.CHARGED));
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);

	e.colourExalt(Colour.ORANGE).sizeAugment(Colour.PRESET.ORANGE);
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
	e.colourExalt(Colour.ORANGE).sizeExalt(Colour.PRESET.ORANGE);
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.JEWEL);
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);

	e.colourExalt(Colour.TANGERINE).sizeExalt(Colour.PRESET.YELLOW);
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.RELIC);
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);

	e.colourExalt(Colour.GOLD).sizeExalt(Colour.PRESET.BLUE);
});
// Unique
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.WEAPON_CLASS, CATEGORY.WEAPON_OTHER, CATEGORY.ARMOUR,
		CATEGORY.JEWELLERY, CATEGORY.CHARGED));
	c.rarity = new Comparison(ConditionSet.RARITY.UNIQUE);

	e.colourChance(Colour.ORANGE).sizeChance(Colour.PRESET.ORANGE);
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.JEWEL);
	c.rarity = new Comparison(ConditionSet.RARITY.UNIQUE);

	e.colourChance(Colour.TANGERINE).sizeChance(Colour.PRESET.YELLOW);
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.RELIC);
	c.rarity = new Comparison(ConditionSet.RARITY.UNIQUE);

	e.colourChance(Colour.GOLD).sizeChance(Colour.PRESET.BLUE);
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
