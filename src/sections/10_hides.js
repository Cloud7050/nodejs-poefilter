import { CATEGORY } from "../conditions/category.js";
import { Comparison } from "../conditions/comparison.js";
import { RARITY } from "../conditions/conditionSet.js";
import { NameManager, TIER } from "../conditions/nameManager.js";
import { OPERATOR } from "../conditions/operator.js";
import { LEVEL_DROP, LEVEL_DROP_FLASK, LEVEL_ITEM, LEVEL_OK, VALUE_BAD } from "../constants.js";

export function sectionHides(filter) {
	weapons(filter);
	armour(filter);
	uncommons(filter);

	// uniques(filter);
}

function weapons(filter) {
	filter.multiHide((c) => { // Too low drop level normal/magic
		c.categories(CATEGORY.WEAPON);
		c.names = new Comparison(NameManager.getGear(c, null, VALUE_BAD, LEVEL_DROP, OPERATOR.LT));
		c.rarity = new Comparison([RARITY.NORMAL, RARITY.MAGIC]);
	}, (c) => { // Too low ilvl normal/magic
		c.categories(CATEGORY.WEAPON);
		c.rarity = new Comparison([RARITY.NORMAL, RARITY.MAGIC]);
		c.ilvl = new Comparison(LEVEL_ITEM, OPERATOR.LT);
	}, (c) => { // Other normal/magic weapons
		c.categories(CATEGORY.WEAPON_OTHER);
		c.rarity = new Comparison([RARITY.NORMAL, RARITY.MAGIC]);
		c.ilvl = new Comparison(LEVEL_OK, OPERATOR.LT);
	});

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

function armour(filter) {
	filter.multiHide((c) => { // Too low drop level normal/magic
		c.categories(CATEGORY.ARMOUR);
		c.names = new Comparison(NameManager.getGear(c, null, VALUE_BAD, LEVEL_DROP, OPERATOR.LT));
		c.rarity = new Comparison([RARITY.NORMAL, RARITY.MAGIC]);
	}, (c) => { // Too low ilvl normal/magic
		c.categories(CATEGORY.ARMOUR);
		c.rarity = new Comparison([RARITY.NORMAL, RARITY.MAGIC]);
		c.ilvl = new Comparison(LEVEL_ITEM, OPERATOR.LT);
	}, (c) => { // Strictly other normal/magic armour
		c.categories(CATEGORY.ARMOUR);
		c.names = new Comparison(NameManager.getGear(
			CATEGORY.ARMOUR_ALL
				.subtract(CATEGORY.ARMOUR_EV)
				.subtract(CATEGORY.ARMOUR_AM_EV)
				.subtract(CATEGORY.ARMOUR_EV_ES)
		));
		c.rarity = new Comparison([RARITY.NORMAL, RARITY.MAGIC]);
		c.ilvl = new Comparison(LEVEL_OK, OPERATOR.LT);
	});

	// filter.multiHide((c) => { // Remaining corrupts
	// 	c.categories(CATEGORY.ARMOUR);
	// 	c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
	// 	c.isCorrupted = true;
	// });
}

function uncommons(filter) {
	filter.multiHide((c) => { // Too low drop level normal/magic flasks
		c.categories(CATEGORY.FLASK);
		c.names = new Comparison(NameManager.getGear(c, undefined, undefined, LEVEL_DROP_FLASK, OPERATOR.LT));
		c.rarity = new Comparison([RARITY.NORMAL, RARITY.MAGIC]);
	});

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

function uniques(filter) {
		filter.multiHide((c) => { // Trash uniques
			c.names = new Comparison(new NameManager(
				NameManager.getUniques(TIER.NEVER, OPERATOR.LTE),
				NameManager.getUniqueRelics(null, 2)
			));
			c.rarity = new Comparison(RARITY.UNIQUE);
		});
	}
