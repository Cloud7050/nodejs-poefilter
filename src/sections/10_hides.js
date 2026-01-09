import { CATEGORY, CATEGORY_CUSTOM } from "../conditions/category.js";
import { Comparison } from "../conditions/comparison.js";
import { RARITY } from "../conditions/conditionSet.js";
import { NameManager } from "../conditions/nameManager.js";
import { OPERATOR } from "../conditions/operator.js";
import { LEVEL_OK, VALUE_BAD } from "../constants.js";

export function sectionHides(filter) {
	leveling(filter);

	other(filter);
}

function leveling(filter) {
	// All gear
	let gearNames = NameManager.getGear(CATEGORY.GEAR.subtract(CATEGORY.FLASK));
	let gearLevels = gearNames.getLevelBreakpoints();
	gearLevels.forEach((level) => {
		filter.multiHide((c) => { // Leveling normal/magic class weapons, class armour
			c.areaLevel = new Comparison(level, OPERATOR.GTE);
			c.names = new Comparison(gearNames.isCloseDrop(level, 0, false));
			c.rarity = new Comparison([RARITY.NORMAL, RARITY.MAGIC]);
		});
	})

	// Flasks
	let flaskNames = NameManager.getGear(CATEGORY.FLASK);
	let flaskLevels = flaskNames.getLevelBreakpoints();
	flaskLevels.forEach((level) => {
		filter.multiHide((c) => { // Leveling flasks
			c.areaLevel = new Comparison(level, OPERATOR.GTE);
			c.names = new Comparison(flaskNames.isCloseDrop(level, 0, false));
			c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
		});
	})
}

function other(filter) {
	// Other common gear
	filter.multiHide((c) => { // Low ilvl normal/magic other weapons
		c.categories(CATEGORY.WEAPON_OTHER);
		c.rarity = new Comparison([RARITY.NORMAL, RARITY.MAGIC]);
		c.ilvl = new Comparison(LEVEL_OK, OPERATOR.LT);
	}, (c) => { // Low ilvl normal/magic other armour
		c.categories(CATEGORY.ARMOUR);
		c.names = new Comparison(NameManager.getGear(CATEGORY_CUSTOM.ARMOUR_OTHER));
		c.rarity = new Comparison([RARITY.NORMAL, RARITY.MAGIC]);
		c.ilvl = new Comparison(LEVEL_OK, OPERATOR.LT);
	});

	// Trash uniques
	filter.multiHide((c) => {
		c.names = new Comparison(new NameManager(
			NameManager.getUniques(null, VALUE_BAD),
			NameManager.getUniqueRelics(null, VALUE_BAD)
		));
		c.rarity = new Comparison(RARITY.UNIQUE);
	});
}

//TODO modify all hides as you progress
function weapons(filter, minLevel) {
	// filter.multiHide((c) => { // Remaining corrupts
	// 	c.categories(CATEGORY.WEAPON);
	// 	c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
	// 	c.isCorrupted = true;
	// }, (c) => { // Too low ilvl (other caster mainhands)
	// 	c.categories(CATEGORY.WAND, CATEGORY.STAFF);
	// 	c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
	// 	c.ilvl = new Comparison(81, OPERATOR.LT);
	// }, (c) => { // Too low ilvl (class weapons, other attacker mainhands, other offhands)
	// 	c.categories(CATEGORY.WEAPON_CLASS, CATEGORY.MAIN_OTHER_ATTACKER, CATEGORY.OFF_OTHER);
	// 	c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
	// 	c.ilvl = new Comparison(82, OPERATOR.LT);
	// });
}

function armour(filter, minLevel) {
	// filter.multiHide((c) => { // Remaining corrupts
	// 	c.categories(CATEGORY.ARMOUR);
	// 	c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
	// 	c.isCorrupted = true;
	// });
}

function uncommons(filter, minLevel) {
	// filter.multiHide((c) => { // Remaining corrupts
	// 	c.categories(CATEGORY.GEAR_UNCOMMON);
	// 	c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
	// 	c.isCorrupted = true;
	// }, (c) => { // Trash base
	// 	c.names = new Comparison(NameManager.getUncommons(TIER.NEVER, OPERATOR.LTE));
	// 	c.categories(CATEGORY.GEAR_UNCOMMON);
	// 	c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
	// }, (c) => { // Too low ilvl (other+ tier, jewellery)
	// 	c.names = new Comparison(NameManager.getUncommons(TIER.OTHER, OPERATOR.GTE));
	// 	c.categories(CATEGORY.JEWELLERY);
	// 	c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
	// 	c.ilvl = new Comparison(80, OPERATOR.LT);
	// }, (c) => { // Too low ilvl (charms)
	// 	c.categories(CATEGORY.CHARM);
	// 	c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
	// 	c.ilvl = new Comparison(81, OPERATOR.LT);
	// }, (c) => { // Too low ilvl (bad tier, jewellery)
	// 	c.names = new Comparison(NameManager.getUncommons(TIER.BAD));
	// 	c.categories(CATEGORY.JEWELLERY);
	// 	c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
	// 	c.ilvl = new Comparison(82, OPERATOR.LT);
	// }, (c) => { // Too low ilvl (other+ tier, normal belts)
	// 	c.names = new Comparison(NameManager.getUncommons(TIER.OTHER, OPERATOR.GTE));
	// 	c.categories(CATEGORY.BELT);
	// 	c.rarity = new Comparison(RARITY.NORMAL);
	// 	c.ilvl = new Comparison(80, OPERATOR.LT);
	// }, (c) => { // Too low ilvl (bad tier, normal belts)
	// 	c.names = new Comparison(NameManager.getUncommons(TIER.BAD));
	// 	c.categories(CATEGORY.BELT);
	// 	c.rarity = new Comparison(RARITY.NORMAL);
	// 	c.ilvl = new Comparison(82, OPERATOR.LT);
	// }, (c) => { // Too low ilvl (belts)
	// 	c.categories(CATEGORY.BELT);
	// 	c.rarity = new Comparison([RARITY.MAGIC, RARITY.RARE]);
	// 	c.ilvl = new Comparison(82, OPERATOR.LT);
	// }, (c) => { // Too low ilvl (flasks)
	// 	c.categories(CATEGORY.FLASK);
	// 	c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
	// 	c.ilvl = new Comparison(82, OPERATOR.LT);
	// });
}
