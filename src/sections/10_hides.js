import { CATEGORY } from "../conditions/category.js";
import { Comparison } from "../conditions/comparison.js";
import { RARITY } from "../conditions/conditionSet.js";
import { NameManager, TIER } from "../conditions/nameManager.js";
import { OPERATOR } from "../conditions/operator.js";

export function sectionHides(filter) {
	weapons(filter);
	armour(filter);
	uncommons(filter);

	uniques(filter);
}

function weapons(filter) {
	filter.multiHide((c) => { // Remaining corrupts
		c.categories(CATEGORY.WEAPON);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
		c.isCorrupted = true;
	}, (c) => { // Too low ilvl (other caster mainhands)
		c.categories(CATEGORY.MAIN_OTHER_CASTER);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
		c.ilvl = new Comparison(81, OPERATOR.LT);
	}, (c) => { // Too low ilvl (class weapons, other attacker mainhands, other offhands)
		c.categories(CATEGORY.WEAPON_CLASS, CATEGORY.MAIN_OTHER_ATTACKER, CATEGORY.OFF_OTHER);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
		c.ilvl = new Comparison(82, OPERATOR.LT);
	}, (c) => { // Trash base (mainhands)
		c.names = new Comparison(NameManager.getMain(TIER.NEVER, OPERATOR.LTE));
		c.categories(CATEGORY.MAIN);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
	}, (c) => { // Trash base (offhands)
		c.names = new Comparison(NameManager.getOff(TIER.NEVER, OPERATOR.LTE));
		c.categories(CATEGORY.OFF);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
	});
}

function armour(filter) {
	filter.multiHide((c) => { // Remaining corrupts
		c.categories(CATEGORY.ARMOUR);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
		c.isCorrupted = true;
	}, (c) => { // Too low ilvl
		c.categories(CATEGORY.ARMOUR);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
		c.ilvl = new Comparison(82, OPERATOR.LT);
	}, (c) => { // Trash base
		c.names = new Comparison(NameManager.getArmour(TIER.NEVER, OPERATOR.LTE));
		c.categories(CATEGORY.ARMOUR);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
	});
}

function uncommons(filter) {
	filter.multiHide((c) => { // Remaining corrupts
		c.categories(CATEGORY.GEAR_UNCOMMON);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
		c.isCorrupted = true;
	}, (c) => { // Too low ilvl (charms)
		c.categories(CATEGORY.CHARM);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
		c.ilvl = new Comparison(67, OPERATOR.LT);
	}, (c) => { // Too low ilvl (mana flasks)
		c.categories(CATEGORY.FLASK_MANA);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
		c.ilvl = new Comparison(80, OPERATOR.LT);
	}, (c) => { // Too low ilvl (jewellery, belts, life flasks)
		c.categories(CATEGORY.JEWELLERY, CATEGORY.BELT, CATEGORY.FLASK_LIFE);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
		c.ilvl = new Comparison(82, OPERATOR.LT);
	}, (c) => { // Trash base
		c.names = new Comparison(NameManager.getUncommons(TIER.NEVER, OPERATOR.LTE));
		c.categories(CATEGORY.GEAR_UNCOMMON);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
	});
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
