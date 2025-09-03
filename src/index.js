import { Block } from "./classes/block.js";
import { Comparison } from "./classes/comparison.js";
import { ConditionSet } from "./classes/conditionSet.js";
import { EffectSet } from "./classes/effectSet.js";
import { MapEffect } from "./classes/mapEffect.js";
import { StringList } from "./classes/stringList.js";
import { Saver } from "./saver.js";
const CATEGORY = ConditionSet.CATEGORY;



let spans = [];
function block(logic) {
	let c = new ConditionSet();
	let e = new EffectSet();
	let b = new Block(c, e);
	logic(c, e);
	spans.push(...b.export());
}

// Default: Minimap everything
block((c, e) => {
	c.continue();

	e.mapEffect = new MapEffect(MapEffect.SIZE.SMALL, MapEffect.COLOUR.PINK, MapEffect.ICON.KITE);
});

// Default: Outlines
block((c, e) => { // Quality
	c.continue();
	c.hasQuality();

	e.backgroundColour = EffectSet.RGBA.BACKGROUND_BLACK;
	e.outlineColour = EffectSet.RGB.MAGIC;
});
block((c, e) => { // Socket
	c.continue();
	c.hasSocket();

	e.backgroundColour = EffectSet.RGBA.BACKGROUND_BLACK;
	e.outlineColour = EffectSet.RGB.NORMAL;
});

// Default: Minimap by rarity. Quality/socket should also be medium
// Normal
block((c, e) => { // Common gear, no quality/socket
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.WEAPON_USED, CATEGORY.WEAPON_UNUSED, CATEGORY.ARMOUR));
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);
	c.noQualitySocketless();

	e.mapEffect = new MapEffect(MapEffect.SIZE.SMALL, MapEffect.COLOUR.SILVER, MapEffect.ICON.HOUSE);
});
block((c, e) => { // Common gear, quality
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.WEAPON_USED, CATEGORY.WEAPON_UNUSED, CATEGORY.ARMOUR));
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);
	c.hasQuality();

	// Already darkened above
	e.mapEffect = new MapEffect(MapEffect.SIZE.MEDIUM, MapEffect.COLOUR.SILVER, MapEffect.ICON.HOUSE);
});
block((c, e) => { // Common gear, socket
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.WEAPON_USED, CATEGORY.WEAPON_UNUSED, CATEGORY.ARMOUR));
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);
	c.hasSocket();

	// Already darkened above
	e.mapEffect = new MapEffect(MapEffect.SIZE.MEDIUM, MapEffect.COLOUR.SILVER, MapEffect.ICON.HOUSE);
});
block((c, e) => { // Less common gear
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.JEWELLERY, CATEGORY.CHARGED));
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);

	e.backgroundColour = EffectSet.RGBA.BACKGROUND_BLACK;
	e.mapEffect = new MapEffect(MapEffect.SIZE.MEDIUM, MapEffect.COLOUR.SILVER, MapEffect.ICON.HOUSE);
});
block((c, e) => {
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.JEWEL));
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);

	e.backgroundColour = EffectSet.RGBA.BACKGROUND_BLACK;
	e.mapEffect = new MapEffect(MapEffect.SIZE.MEDIUM, MapEffect.COLOUR.SILVER, MapEffect.ICON.RAINDROP);
});
// Magic
block((c, e) => { // Common gear, no quality/socket
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.WEAPON_USED, CATEGORY.WEAPON_UNUSED, CATEGORY.ARMOUR));
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
	c.noQualitySocketless();

	e.mapEffect = new MapEffect(MapEffect.SIZE.SMALL, MapEffect.COLOUR.BLUE, MapEffect.ICON.HOUSE);
});
block((c, e) => { // Common gear, quality
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.WEAPON_USED, CATEGORY.WEAPON_UNUSED, CATEGORY.ARMOUR));
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
	c.hasQuality();

	// Already darkened above
	e.mapEffect = new MapEffect(MapEffect.SIZE.MEDIUM, MapEffect.COLOUR.BLUE, MapEffect.ICON.HOUSE);
});
block((c, e) => { // Common gear, socket
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.WEAPON_USED, CATEGORY.WEAPON_UNUSED, CATEGORY.ARMOUR));
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
	c.hasSocket();

	// Already darkened above
	e.mapEffect = new MapEffect(MapEffect.SIZE.MEDIUM, MapEffect.COLOUR.BLUE, MapEffect.ICON.HOUSE);
});
block((c, e) => {  // Less common gear
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.JEWELLERY, CATEGORY.CHARGED));
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);

	e.backgroundColour = EffectSet.RGBA.BACKGROUND_BLACK;
	e.mapEffect = new MapEffect(MapEffect.SIZE.MEDIUM, MapEffect.COLOUR.BLUE, MapEffect.ICON.HOUSE);
});
block((c, e) => {
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.JEWEL));
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);

	e.backgroundColour = EffectSet.RGBA.BACKGROUND_BLACK;
	e.mapEffect = new MapEffect(MapEffect.SIZE.MEDIUM, MapEffect.COLOUR.BLUE, MapEffect.ICON.RAINDROP);
});
// Rare
block((c, e) => {
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.WEAPON_USED, CATEGORY.WEAPON_UNUSED, CATEGORY.ARMOUR,
		CATEGORY.JEWELLERY, CATEGORY.CHARGED));
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);

	e.backgroundColour = EffectSet.RGBA.BACKGROUND_BLACK;
	e.mapEffect = new MapEffect(MapEffect.SIZE.MEDIUM, MapEffect.COLOUR.YELLOW, MapEffect.ICON.HOUSE);
});
block((c, e) => {
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.JEWEL));
	c.rarity = new Comparison(ConditionSet.RARITY.RARE);

	e.backgroundColour = EffectSet.RGBA.BACKGROUND_BLACK;
	e.mapEffect = new MapEffect(MapEffect.SIZE.MEDIUM, MapEffect.COLOUR.YELLOW, MapEffect.ICON.RAINDROP);
});
// Unique
block((c, e) => {
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.WEAPON_USED, CATEGORY.WEAPON_UNUSED, CATEGORY.ARMOUR,
		CATEGORY.JEWELLERY, CATEGORY.CHARGED));
	c.rarity = new Comparison(ConditionSet.RARITY.UNIQUE);

	e.backgroundColour = EffectSet.RGBA.BACKGROUND_ORANGE;
	e.mapEffect = new MapEffect(MapEffect.SIZE.LARGE, MapEffect.COLOUR.BROWN, MapEffect.ICON.HOUSE);
});
block((c, e) => {
	c.continue();
	c.category = new Comparison(new StringList(CATEGORY.JEWEL));
	c.rarity = new Comparison(ConditionSet.RARITY.UNIQUE);

	e.backgroundColour = EffectSet.RGBA.BACKGROUND_ORANGE;
	e.mapEffect = new MapEffect(MapEffect.SIZE.LARGE, MapEffect.COLOUR.BROWN, MapEffect.ICON.RAINDROP);
});

// Currencies
block((c, e) => { // Gold
	c.names = new Comparison(new StringList("Gold"));
	c.category = new Comparison(new StringList(CATEGORY.CURRENCY));
	c.count = new Comparison(50, Comparison.OPERATOR.LT);

	e.mapEffect = new MapEffect(MapEffect.SIZE.SMALL, MapEffect.COLOUR.LIME, MapEffect.ICON.KITE);
});
block((c, e) => {
	c.names = new Comparison(new StringList("Gold"));
	c.category = new Comparison(new StringList(CATEGORY.CURRENCY));

	e.backgroundColour = EffectSet.RGBA.BACKGROUND_BLACK;
	e.mapEffect = new MapEffect(MapEffect.SIZE.MEDIUM, MapEffect.COLOUR.LIME, MapEffect.ICON.KITE);
});
block((c, e) => { // Essences
	c.names = new Comparison(new StringList("Essence of the "), Comparison.OPERATOR.EQUAL);
	c.category = new Comparison(new StringList(CATEGORY.CURRENCY));

	e.backgroundColour = EffectSet.RGBA.BACKGROUND_BLACK;
	e.mapEffect = new MapEffect(MapEffect.SIZE.MEDIUM, MapEffect.COLOUR.PINK, MapEffect.ICON.CIRCLE);
});
block((c, e) => { // Other
	c.names = new Comparison(new StringList("Scroll of Wisdom", "Transmutation Shard"));
	c.category = new Comparison(new StringList(CATEGORY.CURRENCY));

	e.mapEffect = new MapEffect(MapEffect.SIZE.SMALL, MapEffect.COLOUR.LIME, MapEffect.ICON.CIRCLE);
});
block((c, e) => {
	c.category = new Comparison(new StringList(CATEGORY.CURRENCY));

	e.backgroundColour = EffectSet.RGBA.BACKGROUND_BLACK;
	e.mapEffect = new MapEffect(MapEffect.SIZE.MEDIUM, MapEffect.COLOUR.LIME, MapEffect.ICON.CIRCLE);
});

// Gems
block((c, e) => {
	c.category = new Comparison(new StringList(CATEGORY.GEM));

	e.backgroundColour = EffectSet.RGBA.BACKGROUND_BLACK;
	e.mapEffect = new MapEffect(MapEffect.SIZE.MEDIUM, MapEffect.COLOUR.CYAN, MapEffect.ICON.RAINDROP);
});

// Runes
block((c, e) => {
	c.category = new Comparison(new StringList(CATEGORY.RUNE));

	e.backgroundColour = EffectSet.RGBA.BACKGROUND_BLACK;
	e.mapEffect = new MapEffect(MapEffect.SIZE.MEDIUM, MapEffect.COLOUR.PINK, MapEffect.ICON.RAINDROP);
});

// Fade: Normal unused weapons or any normal armour, with no quality/sockets
block((c, e) => {
	c.category = new Comparison(new StringList(CATEGORY.WEAPON_UNUSED, CATEGORY.ARMOUR));
	c.rarity = new Comparison(ConditionSet.RARITY.NORMAL);
	c.noQualitySocketless();

	e.fade();
});

// Fade: Magic weapons we don't use, with no quality/sockets
block((c, e) => {
	c.category = new Comparison(new StringList(CATEGORY.WEAPON_UNUSED));
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
	c.noQualitySocketless();

	e.fade();
});

// Fade: Magic armour we don't use (no energy shield), with no quality/sockets
block((c, e) => {
	c.category = new Comparison(new StringList(CATEGORY.ARMOUR));
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC);
	c.noQualitySocketless();
	c.energyShield = new Comparison(0);

	e.fade();
});

// Fade: Bad normal/magic flasks, with no quality
block((c, e) => {
	c.names = new Comparison(new StringList("Lesser Life Flask", "Lesser Mana Flask",
		"Medium Life Flask", "Medium Mana Flask", "Greater Life Flask", "Greater Mana Flask"));
	c.category = new Comparison(new StringList(CATEGORY.CHARGED));
	c.rarity = new Comparison(ConditionSet.RARITY.MAGIC, Comparison.OPERATOR.LTE);
	c.noQuality();

	e.fade();
});

// Save
Saver.save(spans, "./build/Cloud.filter");
console.log("☁");
