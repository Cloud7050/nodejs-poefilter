import { Block } from "./classes/block.js";
import { Comparison } from "./classes/comparison.js";
import { ConditionSet } from "./classes/conditionSet.js";
import { EffectSet } from "./classes/effectSet.js";
import { MapEffect } from "./classes/mapEffect.js";
import { Saver } from "./saver.js";



let spans = [];
function block(logic) {
	let c = new ConditionSet();
	let e = new EffectSet();
	let block = new Block(c, e);
	logic(c, e);
	spans.push(...block.export());
}

// Default: Show everything on minimap
block((c, e) => { // Others
	c.continue();

	e.mapEffect = new MapEffect(MapEffect.SIZE.SMALL, MapEffect.COLOUR.PINK, MapEffect.ICON.KITE);
});

// Default: Minimap by rarity
block((c, e) => { // Normal
	c.continue();
	c.rarity = new Comparison(Comparison.OPERATOR.EQUAL, ConditionSet.RARITY.NORMAL);

	e.mapEffect = new MapEffect(MapEffect.SIZE.SMALL, MapEffect.COLOUR.SILVER, MapEffect.ICON.SQUARE);
});
block((c, e) => { // Magic
	c.continue();
	c.rarity = new Comparison(Comparison.OPERATOR.EQUAL, ConditionSet.RARITY.MAGIC);

	e.mapEffect = new MapEffect(MapEffect.SIZE.SMALL, MapEffect.COLOUR.BLUE, MapEffect.ICON.SQUARE);
});
block((c, e) => { // Rare
	c.continue();
	c.rarity = new Comparison(Comparison.OPERATOR.EQUAL, ConditionSet.RARITY.RARE);

	e.mapEffect = new MapEffect(MapEffect.SIZE.MEDIUM, MapEffect.COLOUR.YELLOW, MapEffect.ICON.SQUARE);
});
block((c, e) => { // Unique
	c.continue();
	c.rarity = new Comparison(Comparison.OPERATOR.EQUAL, ConditionSet.RARITY.UNIQUE);

	e.mapEffect = new MapEffect(MapEffect.SIZE.LARGE, MapEffect.COLOUR.BROWN, MapEffect.ICON.SQUARE);
});

// Currencies
block((c, e) => { // Gold
	c.names = "Gold";
	c.category = ConditionSet.CATEGORY.CURRENCY;

	e.mapEffect = new MapEffect(MapEffect.SIZE.SMALL, MapEffect.COLOUR.LIME, MapEffect.ICON.KITE);
});
block((c, e) => { // Other
	c.category = ConditionSet.CATEGORY.CURRENCY;

	e.mapEffect = new MapEffect(MapEffect.SIZE.SMALL, MapEffect.COLOUR.LIME, MapEffect.ICON.CIRCLE);
});

// Ignoreable: Any normal weapons/armour, with no quality/sockets
block((c, e) => {
	c.category = `${ConditionSet.CATEGORY.WEAPON_USED} ${ConditionSet.CATEGORY.WEAPON_UNUSED} ${ConditionSet.CATEGORY.ARMOUR}`;
	c.rarity = new Comparison(Comparison.OPERATOR.EQUAL, ConditionSet.RARITY.NORMAL);
	c.noQualitySocketless();

	e.fade();
});

// Ignoreable: Magic weapons we don't use, with no quality/sockets
block((c, e) => {
	c.category = ConditionSet.CATEGORY.WEAPON_UNUSED;
	c.rarity = new Comparison(Comparison.OPERATOR.EQUAL, ConditionSet.RARITY.MAGIC);
	c.noQualitySocketless();

	e.fade();
});

// Ignoreable: Magic armour we don't use (no energy shield), with no quality/sockets
block((c, e) => {
	c.category = ConditionSet.CATEGORY.ARMOUR;
	c.rarity = new Comparison(Comparison.OPERATOR.EQUAL, ConditionSet.RARITY.MAGIC);
	c.noQualitySocketless();
	c.energyShield = new Comparison(Comparison.OPERATOR.EQUAL, 0);

	e.fade();
});

// Ignoreable: Bad normal/magic flasks, with no quality
block((c, e) => {
	c.names = '"Lesser Life Flask" "Medium Life Flask" "Lesser Mana Flask" "Medium Mana Flask"';
	c.category = ConditionSet.CATEGORY.FLASKS;
	c.rarity = new Comparison(Comparison.OPERATOR.LTE, ConditionSet.RARITY.MAGIC);
	c.noQuality();

	e.fade();
});

// Save
Saver.save(spans, "./build/Cloud.filter");
console.log("☁");
