import { Comparison } from "./conditions/comparison.js";
import { ConditionSet } from "./conditions/conditionSet.js";
import { StringList } from "./conditions/stringList.js";
import { EffectSet } from "./effects/effectSet.js";
import { MapEffect } from "./effects/mapEffect.js";
import { Filter } from "./filter.js";
const CATEGORY = ConditionSet.CATEGORY;



let filter = new Filter("Cloud");

// Reset: Small text, solid black background, minimap everything
filter.block((c, e) => {
	c.continue();

	e.textSize = EffectSet.TEXT_SIZE.SMALL;
	e.backgroundColour = EffectSet.RGBA.BLACK;
	e.mapEffect = new MapEffect(MapEffect.SIZE.SMALL, MapEffect.COLOUR.PINK, MapEffect.ICON.KITE);
});

// Global: Outlines
filter.block((c, e) => { // Socket
	c.continue();
	c.hasSocket();

	e.outlineColour = EffectSet.RGB.NORMAL;
});
filter.block((c, e) => { // Quality
	c.continue();
	c.hasQuality();

	e.outlineColour = EffectSet.RGB.MAGIC;
});
filter.multiBlock((c) => { // Good main stat
	c.continue();
	c.goodMain();
}, (c) => { // Good mod
	c.continue();
	c.goodMod();
}, (e) => {
	e.outlineColour = EffectSet.RGB.RARE;
});

// Global: Minimap by rarity
// Normal
filter.block((c, e) => { // Reset gear
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.WEAPON_CLASS, CATEGORY.WEAPON_OTHER, CATEGORY.ARMOUR, CATEGORY.JEWELLERY));
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);

	e.mapEffect = new MapEffect(MapEffect.SIZE.SMALL, MapEffect.COLOUR.SILVER, MapEffect.ICON.HOUSE);
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
	c.category = new Comparison(new StringList(CATEGORY.ARMOUR));
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);
	c.goodMain();
}, (c) => { // Less common gear
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.JEWELLERY, CATEGORY.CHARGED));
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);
}, (e) => {
	e.textSize = EffectSet.TEXT_SIZE.DEFAULT;
	e.mapEffect = new MapEffect(MapEffect.SIZE.MEDIUM, MapEffect.COLOUR.SILVER, MapEffect.ICON.HOUSE);
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.JEWEL);
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);

	e.textSize = EffectSet.TEXT_SIZE.DEFAULT;
	e.mapEffect = new MapEffect(MapEffect.SIZE.MEDIUM, MapEffect.COLOUR.SILVER, MapEffect.ICON.RAINDROP);
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.RELIC);
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);

	e.textSize = EffectSet.TEXT_SIZE.LARGE;
	e.backgroundColour = EffectSet.RGBA.DARK_NORMAL;
	e.mapEffect = new MapEffect(MapEffect.SIZE.LARGE, MapEffect.COLOUR.SILVER, MapEffect.ICON.TRIANGLE);
});
// Magic
filter.block((c, e) => { // Reset gear
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.WEAPON_CLASS, CATEGORY.WEAPON_OTHER, CATEGORY.ARMOUR, CATEGORY.JEWELLERY));
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);

	e.mapEffect = new MapEffect(MapEffect.SIZE.SMALL, MapEffect.COLOUR.BLUE, MapEffect.ICON.HOUSE);
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
	c.category = new Comparison(new StringList(CATEGORY.ARMOUR));
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
	e.textSize = EffectSet.TEXT_SIZE.DEFAULT;
	e.mapEffect = new MapEffect(MapEffect.SIZE.MEDIUM, MapEffect.COLOUR.BLUE, MapEffect.ICON.HOUSE);
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.JEWEL);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);

	e.textSize = EffectSet.TEXT_SIZE.DEFAULT;
	e.mapEffect = new MapEffect(MapEffect.SIZE.MEDIUM, MapEffect.COLOUR.BLUE, MapEffect.ICON.RAINDROP);
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.RELIC);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);

	e.textSize = EffectSet.TEXT_SIZE.LARGE;
	e.backgroundColour = EffectSet.RGBA.DARK_MAGIC;
	e.mapEffect = new MapEffect(MapEffect.SIZE.LARGE, MapEffect.COLOUR.BLUE, MapEffect.ICON.TRIANGLE);
});
// Rare
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.WEAPON_CLASS, CATEGORY.WEAPON_OTHER, CATEGORY.ARMOUR,
		CATEGORY.JEWELLERY, CATEGORY.CHARGED));
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);

	e.textSize = EffectSet.TEXT_SIZE.DEFAULT;
	e.mapEffect = new MapEffect(MapEffect.SIZE.MEDIUM, MapEffect.COLOUR.YELLOW, MapEffect.ICON.HOUSE);
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.JEWEL);
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);

	e.textSize = EffectSet.TEXT_SIZE.DEFAULT;
	e.mapEffect = new MapEffect(MapEffect.SIZE.MEDIUM, MapEffect.COLOUR.YELLOW, MapEffect.ICON.RAINDROP);
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.RELIC);
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);

	e.textSize = EffectSet.TEXT_SIZE.LARGE;
	e.backgroundColour = EffectSet.RGBA.DARK_RARE;
	e.mapEffect = new MapEffect(MapEffect.SIZE.LARGE, MapEffect.COLOUR.YELLOW, MapEffect.ICON.TRIANGLE);
});
// Unique
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.WEAPON_CLASS, CATEGORY.WEAPON_OTHER, CATEGORY.ARMOUR,
		CATEGORY.JEWELLERY, CATEGORY.CHARGED));
	c.rarity = new Comparison(ConditionSet.RARITY.UNIQUE);

	e.textSize = EffectSet.TEXT_SIZE.LARGEST;
	e.textColour = EffectSet.RGB.BLACK;
	e.backgroundColour = EffectSet.RGBA.UNIQUE;
	e.beamColour = EffectSet.COLOUR.BROWN;
	e.sound = EffectSet.SOUND.WAH;
	e.mapEffect = new MapEffect(MapEffect.SIZE.LARGE, MapEffect.COLOUR.BROWN, MapEffect.ICON.HOUSE);
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.JEWEL);
	c.rarity = new Comparison(ConditionSet.RARITY.UNIQUE);

	e.textSize = EffectSet.TEXT_SIZE.LARGEST;
	e.textColour = EffectSet.RGB.BLACK;
	e.backgroundColour = EffectSet.RGBA.UNIQUE;
	e.beamColour = EffectSet.COLOUR.BROWN;
	e.sound = EffectSet.SOUND.WAH;
	e.mapEffect = new MapEffect(MapEffect.SIZE.LARGE, MapEffect.COLOUR.BROWN, MapEffect.ICON.RAINDROP);
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.RELIC);
	c.rarity = new Comparison(ConditionSet.RARITY.UNIQUE);

	e.textSize = EffectSet.TEXT_SIZE.LARGEST;
	e.textColour = EffectSet.RGB.BLACK;
	e.backgroundColour = EffectSet.RGBA.UNIQUE;
	e.beamColour = EffectSet.COLOUR.BROWN;
	e.sound = EffectSet.SOUND.WAH;
	e.mapEffect = new MapEffect(MapEffect.SIZE.LARGE, MapEffect.COLOUR.BROWN, MapEffect.ICON.TRIANGLE);
});

// Currencies - https://docs.google.com/spreadsheets/d/1Cq80pjKnWF5-FmhQd1TLcWhdpivaRaSKhMGz_I4VgG4
filter.block((c, e) => { // Essences
	c.names = new Comparison(new StringList("Essence of "), Comparison.OPERATOR.EQUAL);
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.textSize = EffectSet.TEXT_SIZE.DEFAULT;
	e.textColour = EffectSet.RGB.PINK;
	e.mapEffect = new MapEffect(MapEffect.SIZE.MEDIUM, MapEffect.COLOUR.PINK, MapEffect.ICON.CIRCLE);
});
filter.block((c, e) => { // Trial keys
	c.names = new Comparison(new StringList("Bronze Key", "Silver Key", "Gold Key"));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.textSize = EffectSet.TEXT_SIZE.LARGE;
	e.textColour = EffectSet.RGB.GREEN;
	e.backgroundColour = EffectSet.RGBA.DARK_GREEN;
	e.mapEffect = new MapEffect(MapEffect.SIZE.LARGE, MapEffect.COLOUR.LIME, MapEffect.ICON.TRIANGLE);
});
filter.block((c, e) => { // League desecrations
	c.names = new Comparison(new StringList("Gnawed Jawbone", "Gnawed Rib", "Gnawed Collarbone",
		"Preserved Jawbone", "Preserved Rib", "Preserved Collarbone", "Preserved Cranium",
		"Preserved Vertebrae", "Ancient Jawbone", "Ancient Rib", "Ancient Collarbone"));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.textSize = EffectSet.TEXT_SIZE.LARGE;
	e.textColour = EffectSet.RGB.PURPLE;
	e.backgroundColour = EffectSet.RGBA.DARK_PURPLE;
	e.mapEffect = new MapEffect(MapEffect.SIZE.LARGE, MapEffect.COLOUR.PURPLE, MapEffect.ICON.CIRCLE);
});
filter.block((c, e) => { // Gold
	c.names = new Comparison(new StringList("Gold"));
	c.category = new Comparison(CATEGORY.CURRENCY);
	c.count = new Comparison(250, Comparison.OPERATOR.LT);

	e.textColour = EffectSet.RGB.NORMAL;
	e.backgroundColour = EffectSet.RGBA.TRANSPARENT;
	e.outlineColour = EffectSet.RGB.LIME;
	e.mapEffect = new MapEffect(MapEffect.SIZE.SMALL, MapEffect.COLOUR.LIME, MapEffect.ICON.KITE);
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList("Gold"));
	c.category = new Comparison(CATEGORY.CURRENCY);
	c.count = new Comparison(750, Comparison.OPERATOR.LT);

	e.textSize = EffectSet.TEXT_SIZE.DEFAULT;
	e.textColour = EffectSet.RGB.NORMAL;
	e.backgroundColour = EffectSet.RGBA.TRANSPARENT;
	e.outlineColour = EffectSet.RGB.LIME;
	e.mapEffect = new MapEffect(MapEffect.SIZE.MEDIUM, MapEffect.COLOUR.LIME, MapEffect.ICON.KITE);
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList("Gold"));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.textSize = EffectSet.TEXT_SIZE.LARGE;
	e.textColour = EffectSet.RGB.NORMAL;
	e.backgroundColour = EffectSet.RGBA.TRANSPARENT;
	e.outlineColour = EffectSet.RGB.LIME;
	e.mapEffect = new MapEffect(MapEffect.SIZE.LARGE, MapEffect.COLOUR.LIME, MapEffect.ICON.KITE);
});
filter.block((c, e) => { // Other
	c.names = new Comparison(new StringList("Scroll of Wisdom", "Transmutation Shard"));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.textColour = EffectSet.RGB.NORMAL;
	e.outlineColour = EffectSet.RGB.LIME;
	e.mapEffect = new MapEffect(MapEffect.SIZE.SMALL, MapEffect.COLOUR.LIME, MapEffect.ICON.CIRCLE);
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList("Orb of Transmutation", "Orb of Augmentation",
		"Regal Shard", "Artificer's Shard"));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.textSize = EffectSet.TEXT_SIZE.DEFAULT;
	e.textColour = EffectSet.RGB.MAGIC;
	e.outlineColour = EffectSet.RGB.LIME;
	e.mapEffect = new MapEffect(MapEffect.SIZE.MEDIUM, MapEffect.COLOUR.LIME, MapEffect.ICON.CIRCLE);
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList("Regal Orb", "Exalted Orb", "Orb of Alchemy",
		"Chaos Orb", "Vaal Orb", "Artificer's Orb", "Lesser Jeweller's Orb",
		"Blacksmith's Whetstone", "Arcanist's Etcher", "Armourer's Scrap", "Gemcutter's Prism",
		"Glassblower's Bauble", "Chance Shard"));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.textSize = EffectSet.TEXT_SIZE.LARGE;
	e.textColour = EffectSet.RGB.RARE;
	e.backgroundColour = EffectSet.RGBA.DARK_RARE;
	e.outlineColour = EffectSet.RGB.LIME;
	e.mapEffect = new MapEffect(MapEffect.SIZE.LARGE, MapEffect.COLOUR.LIME, MapEffect.ICON.CROSS);
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList("Orb of Annulment", "Orb of Chance", "Divine Orb",
		"Mirror of Kalandra", "Greater Jeweller's Orb", "Perfect Jeweller's Orb"));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.textSize = EffectSet.TEXT_SIZE.LARGEST;
	e.textColour = EffectSet.RGB.BLACK;
	e.backgroundColour = EffectSet.RGBA.ROSE;
	e.outlineColour = EffectSet.RGB.LIME;
	e.beamColour = EffectSet.COLOUR.ROSE;
	e.sound = EffectSet.SOUND.WAH;
	e.mapEffect = new MapEffect(MapEffect.SIZE.LARGE, MapEffect.COLOUR.ROSE, MapEffect.ICON.STAR);
});
filter.block((c, e) => {
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.textSize = EffectSet.TEXT_SIZE.DEFAULT;
	e.outlineColour = EffectSet.RGB.LIME;
	e.mapEffect = new MapEffect(MapEffect.SIZE.MEDIUM, MapEffect.COLOUR.LIME, MapEffect.ICON.CIRCLE);
});

// Gems
filter.block((c, e) => {
	c.category = new Comparison(CATEGORY.GEM_UNCUT);

	e.textSize = EffectSet.TEXT_SIZE.DEFAULT;
	e.textColour = EffectSet.RGB.GEM_UNCUT;
	e.mapEffect = new MapEffect(MapEffect.SIZE.MEDIUM, MapEffect.COLOUR.CYAN, MapEffect.ICON.RAINDROP);
});
filter.block((c, e) => {
	c.category = new Comparison(CATEGORY.GEM);

	e.textSize = EffectSet.TEXT_SIZE.DEFAULT;
	e.mapEffect = new MapEffect(MapEffect.SIZE.MEDIUM, MapEffect.COLOUR.CYAN, MapEffect.ICON.RAINDROP);
});

// Socketable eg runes
filter.block((c, e) => {
	c.category = new Comparison(CATEGORY.SOCKETABLE);

	e.textSize = EffectSet.TEXT_SIZE.DEFAULT;
	e.textColour = EffectSet.RGB.CRAFTED;
	e.mapEffect = new MapEffect(MapEffect.SIZE.MEDIUM, MapEffect.COLOUR.PINK, MapEffect.ICON.RAINDROP);
});

// Trial coins
filter.block((c, e) => {
	c.category = new Comparison(CATEGORY.COIN);

	e.textSize = EffectSet.TEXT_SIZE.LARGE;
	e.textColour = EffectSet.RGB.GREEN;
	e.backgroundColour = EffectSet.RGBA.DARK_GREEN;
	e.mapEffect = new MapEffect(MapEffect.SIZE.LARGE, MapEffect.COLOUR.PINK, MapEffect.ICON.TRIANGLE);
});

// Quest
filter.block((c, e) => {
	c.category = new Comparison(CATEGORY.QUEST);

	e.textSize = EffectSet.TEXT_SIZE.DEFAULT;
});

// Stop here; don't fade these (similar to the ones outlined at the start)
filter.multiBlock((c) => {
	c.hasSocket();
}, (c) => {
	c.hasQuality();
}, (c) => {
	c.goodMain();
}, (c) => {
	c.goodMod();
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
		// "Rattling Sceptre", "Lupine Sceptre", "Ochre Sceptre", "Devouring Sceptre", // Skeletal Warrior
		"Stoic Sceptre", // Discipline
		"Omen Sceptre", // Malice
		"Shrine Sceptre" // Purity of Fire/Ice/Lightning
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
