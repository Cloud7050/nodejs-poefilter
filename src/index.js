import { Comparison } from "./conditions/comparison.js";
import { ConditionSet } from "./conditions/conditionSet.js";
import { StringList } from "./conditions/stringList.js";
import { EffectSet } from "./effects/effectSet.js";
import { MapEffect } from "./effects/mapEffect.js";
import { Filter } from "./filter.js";
const CATEGORY = ConditionSet.CATEGORY;



let filter = new Filter("Cloud");

// Default: Minimap everything
filter.block((c, e) => {
	c.continue();

	e.textSize = EffectSet.TEXT_SIZE.SMALL;
	e.backgroundColour = EffectSet.RGBA.BACKGROUND_BLACK;
	e.mapEffect = new MapEffect(MapEffect.SIZE.SMALL, MapEffect.COLOUR.PINK, MapEffect.ICON.KITE);
});

// Default: Outlines
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

// Default: Minimap by rarity. Quality/socket should also be medium
// Normal
filter.block((c, e) => { // Common gear, no quality/socket
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.WEAPON_USED, CATEGORY.WEAPON_UNUSED, CATEGORY.ARMOUR));
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);
	c.noQualitySocketless();

	e.mapEffect = new MapEffect(MapEffect.SIZE.SMALL, MapEffect.COLOUR.SILVER, MapEffect.ICON.HOUSE);
});
filter.block((c, e) => { // Common gear, quality
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.WEAPON_USED, CATEGORY.WEAPON_UNUSED, CATEGORY.ARMOUR));
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);
	c.hasQuality();

	e.textSize = EffectSet.TEXT_SIZE.DEFAULT;
	e.mapEffect = new MapEffect(MapEffect.SIZE.MEDIUM, MapEffect.COLOUR.SILVER, MapEffect.ICON.HOUSE);
});
filter.block((c, e) => { // Common gear, socket
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.WEAPON_USED, CATEGORY.WEAPON_UNUSED, CATEGORY.ARMOUR));
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);
	c.hasSocket();

	e.textSize = EffectSet.TEXT_SIZE.DEFAULT;
	e.mapEffect = new MapEffect(MapEffect.SIZE.MEDIUM, MapEffect.COLOUR.SILVER, MapEffect.ICON.HOUSE);
});
filter.block((c, e) => { // Less common gear
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.JEWELLERY, CATEGORY.CHARGED));
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);

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
	e.mapEffect = new MapEffect(MapEffect.SIZE.LARGE, MapEffect.COLOUR.SILVER, MapEffect.ICON.TRIANGLE);
});
// Magic
filter.block((c, e) => { // Common gear, no quality/socket
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.WEAPON_USED, CATEGORY.WEAPON_UNUSED, CATEGORY.ARMOUR));
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
	c.noQualitySocketless();

	e.mapEffect = new MapEffect(MapEffect.SIZE.SMALL, MapEffect.COLOUR.BLUE, MapEffect.ICON.HOUSE);
});
filter.block((c, e) => { // Common gear, quality
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.WEAPON_USED, CATEGORY.WEAPON_UNUSED, CATEGORY.ARMOUR));
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
	c.hasQuality();

	e.textSize = EffectSet.TEXT_SIZE.DEFAULT;
	e.mapEffect = new MapEffect(MapEffect.SIZE.MEDIUM, MapEffect.COLOUR.BLUE, MapEffect.ICON.HOUSE);
});
filter.block((c, e) => { // Common gear, socket
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.WEAPON_USED, CATEGORY.WEAPON_UNUSED, CATEGORY.ARMOUR));
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
	c.hasSocket();

	e.textSize = EffectSet.TEXT_SIZE.DEFAULT;
	e.mapEffect = new MapEffect(MapEffect.SIZE.MEDIUM, MapEffect.COLOUR.BLUE, MapEffect.ICON.HOUSE);
});
filter.block((c, e) => {  // Less common gear
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.JEWELLERY, CATEGORY.CHARGED));
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);

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
	e.mapEffect = new MapEffect(MapEffect.SIZE.LARGE, MapEffect.COLOUR.BLUE, MapEffect.ICON.TRIANGLE);
});
// Rare
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.WEAPON_USED, CATEGORY.WEAPON_UNUSED, CATEGORY.ARMOUR,
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
	e.mapEffect = new MapEffect(MapEffect.SIZE.LARGE, MapEffect.COLOUR.YELLOW, MapEffect.ICON.TRIANGLE);
});
// Unique
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.WEAPON_USED, CATEGORY.WEAPON_UNUSED, CATEGORY.ARMOUR,
		CATEGORY.JEWELLERY, CATEGORY.CHARGED));
	c.rarity = new Comparison(ConditionSet.RARITY.UNIQUE);

	e.textSize = EffectSet.TEXT_SIZE.LARGEST;
	e.backgroundColour = EffectSet.RGBA.BACKGROUND_ORANGE;
	e.beamColour = EffectSet.COLOUR.BROWN;
	e.sound = EffectSet.SOUND.WAH;
	e.mapEffect = new MapEffect(MapEffect.SIZE.LARGE, MapEffect.COLOUR.BROWN, MapEffect.ICON.HOUSE);
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.JEWEL);
	c.rarity = new Comparison(ConditionSet.RARITY.UNIQUE);

	e.textSize = EffectSet.TEXT_SIZE.LARGEST;
	e.backgroundColour = EffectSet.RGBA.BACKGROUND_ORANGE;
	e.beamColour = EffectSet.COLOUR.BROWN;
	e.sound = EffectSet.SOUND.WAH;
	e.mapEffect = new MapEffect(MapEffect.SIZE.LARGE, MapEffect.COLOUR.BROWN, MapEffect.ICON.RAINDROP);
});
filter.block((c, e) => {
	c.continue();
	c.category = new Comparison(CATEGORY.RELIC);
	c.rarity = new Comparison(ConditionSet.RARITY.UNIQUE);

	e.textSize = EffectSet.TEXT_SIZE.LARGEST;
	e.backgroundColour = EffectSet.RGBA.BACKGROUND_ORANGE;
	e.beamColour = EffectSet.COLOUR.BROWN;
	e.sound = EffectSet.SOUND.WAH;
	e.mapEffect = new MapEffect(MapEffect.SIZE.LARGE, MapEffect.COLOUR.BROWN, MapEffect.ICON.TRIANGLE);
});

// Fade: Normal unused weapons or any normal armour, with no quality/sockets
filter.block((c, e) => {
	c.category = new Comparison(new StringList(CATEGORY.WEAPON_UNUSED, CATEGORY.ARMOUR));
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);
	c.noQualitySocketless();

	e.fade();
});

// Fade: Magic weapons we don't use, with no quality/sockets
filter.block((c, e) => {
	c.category = new Comparison(CATEGORY.WEAPON_UNUSED);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
	c.noQualitySocketless();

	e.fade();
});

// Fade: Magic armour we don't use (no energy shield), with no quality/sockets
filter.block((c, e) => {
	c.category = new Comparison(CATEGORY.ARMOUR);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
	c.noQualitySocketless();
	c.energyShield = new Comparison(0);

	e.fade();
});

// Fade: Bad normal/magic flasks, with no quality
filter.block((c, e) => {
	c.names = new Comparison(new StringList("Lesser Life Flask", "Lesser Mana Flask",
		"Medium Life Flask", "Medium Mana Flask", "Greater Life Flask", "Greater Mana Flask",
		"Grand Life Flask", "Grand Mana Flask"));
	c.category = new Comparison(CATEGORY.CHARGED);
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC, Comparison.OPERATOR.LTE);
	c.noQuality();

	e.fade();
});

// Currencies - https://docs.google.com/spreadsheets/d/1Cq80pjKnWF5-FmhQd1TLcWhdpivaRaSKhMGz_I4VgG4
filter.block((c, e) => { // Gold
	c.names = new Comparison(new StringList("Gold"));
	c.category = new Comparison(CATEGORY.CURRENCY);
	c.count = new Comparison(100, Comparison.OPERATOR.LT);

	e.textColour = EffectSet.RGB.SILVER;
	e.outlineColour = EffectSet.RGB.LIME;
	e.mapEffect = new MapEffect(MapEffect.SIZE.SMALL, MapEffect.COLOUR.LIME, MapEffect.ICON.KITE);
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList("Gold"));
	c.category = new Comparison(CATEGORY.CURRENCY);
	c.count = new Comparison(300, Comparison.OPERATOR.LT);

	e.textColour = EffectSet.RGB.SILVER;
	e.textSize = EffectSet.TEXT_SIZE.DEFAULT;
	e.outlineColour = EffectSet.RGB.LIME;
	e.mapEffect = new MapEffect(MapEffect.SIZE.MEDIUM, MapEffect.COLOUR.LIME, MapEffect.ICON.KITE);
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList("Gold"));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.textColour = EffectSet.RGB.NORMAL;
	e.textSize = EffectSet.TEXT_SIZE.LARGE;
	e.outlineColour = EffectSet.RGB.LIME;
	e.mapEffect = new MapEffect(MapEffect.SIZE.LARGE, MapEffect.COLOUR.LIME, MapEffect.ICON.KITE);
});
filter.block((c, e) => { // Essences
	c.names = new Comparison(new StringList("Essence of "), Comparison.OPERATOR.EQUAL);
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.textSize = EffectSet.TEXT_SIZE.DEFAULT;
	e.mapEffect = new MapEffect(MapEffect.SIZE.MEDIUM, MapEffect.COLOUR.PINK, MapEffect.ICON.CIRCLE);
});
filter.block((c, e) => { // Trial keys (minimap)
	c.names = new Comparison(new StringList("Bronze Key", "Silver Key", "Gold Key"));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.textSize = EffectSet.TEXT_SIZE.LARGE;
	e.mapEffect = new MapEffect(MapEffect.SIZE.LARGE, MapEffect.COLOUR.LIME, MapEffect.ICON.TRIANGLE);
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
	e.outlineColour = EffectSet.RGB.LIME;
	e.mapEffect = new MapEffect(MapEffect.SIZE.LARGE, MapEffect.COLOUR.LIME, MapEffect.ICON.CROSS);
});
filter.block((c, e) => {
	c.names = new Comparison(new StringList("Orb of Annulment", "Orb of Chance", "Divine Orb",
		"Mirror of Kalandra", "Greater Jeweller's Orb", "Perfect Jeweller's Orb"));
	c.category = new Comparison(CATEGORY.CURRENCY);

	e.textSize = EffectSet.TEXT_SIZE.LARGEST;
	e.textColour = EffectSet.RGB.CRIMSON;
	e.backgroundColour = EffectSet.RGBA.BACKGROUND_CRIMSON;
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
	e.textColour = EffectSet.RGB.GEM;
	e.mapEffect = new MapEffect(MapEffect.SIZE.MEDIUM, MapEffect.COLOUR.CYAN, MapEffect.ICON.RAINDROP);
});
filter.block((c, e) => {
	c.category = new Comparison(CATEGORY.GEM);

	e.textSize = EffectSet.TEXT_SIZE.DEFAULT;
	e.mapEffect = new MapEffect(MapEffect.SIZE.MEDIUM, MapEffect.COLOUR.CYAN, MapEffect.ICON.RAINDROP);
});

// Runes
filter.block((c, e) => {
	c.category = new Comparison(CATEGORY.RUNE);

	e.textSize = EffectSet.TEXT_SIZE.DEFAULT;
	e.mapEffect = new MapEffect(MapEffect.SIZE.MEDIUM, MapEffect.COLOUR.PINK, MapEffect.ICON.RAINDROP);
});

// Trial coins
filter.block((c, e) => {
	c.category = new Comparison(CATEGORY.COIN);

	e.textSize = EffectSet.TEXT_SIZE.LARGE;
	e.mapEffect = new MapEffect(MapEffect.SIZE.LARGE, MapEffect.COLOUR.PINK, MapEffect.ICON.TRIANGLE);
});

// Quest
filter.block((c, e) => {
	c.category = new Comparison(CATEGORY.QUEST);

	e.textSize = EffectSet.TEXT_SIZE.DEFAULT;
});

filter.save();
