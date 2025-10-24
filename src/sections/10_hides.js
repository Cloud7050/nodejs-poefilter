import { CATEGORY } from "../conditions/category.js";
import { Comparison } from "../conditions/comparison.js";
import { RARITY } from "../conditions/conditionSet.js";
import { NameManager, TIER } from "../conditions/nameManager.js";
import { OPERATOR } from "../conditions/operator.js";

export function sectionHides(filter) {
	weapons(filter);
	armour(filter);
	classUncommon(filter);
	otherUncommon(filter);
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
	}, (c) => { // Bad base (mainhands)
		c.names = new Comparison(NameManager.getMain(TIER.BAD));
		c.categories(CATEGORY.MAIN);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
	}, (c) => { // Bad base (offhands)
		c.names = new Comparison(NameManager.getOff(TIER.BAD));
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
	}, (c) => { // Bad base
		c.names = new Comparison(NameManager.getArmour(TIER.BAD));
		c.categories(CATEGORY.ARMOUR);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
	});
}

function classUncommon(filter) {
	filter.multiHide((c) => { // Class uncommons: Remaining corrupts
		c.categories(CATEGORY.JEWELLERY, CATEGORY.CHARGED);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
		c.isCorrupted = true;
	}, (c) => { // Charged: Too low ilvl
		c.categories(CATEGORY.CHARGED);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
		c.ilvl = new Comparison(67, OPERATOR.LT);
	}, (c) => { // Jewellery: Too low ilvl
		c.categories(CATEGORY.JEWELLERY);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
		c.ilvl = new Comparison(75, OPERATOR.LT);
	}, (c) => { // Jewellery: Too low wisdom tier
		c.categories(CATEGORY.JEWELLERY);
		c.rarity = new Comparison(RARITY.RARE);
		c.isLowTier(2);
		// Allow BiS ilvl
		c.ilvl = new Comparison(82, OPERATOR.LT);
	}, (c) => { // Jewellery: Wrong base
		c.names = new Comparison(NameManager.getJewelleryOther());
		c.categories(CATEGORY.JEWELLERY);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
		// Allow BiS ilvl
		c.ilvl = new Comparison(82, OPERATOR.LT);
	}, (c) => { // Flasks: Bad base
		c.names = new Comparison(NameManager.getFlasks(TIER.BAD));
		c.categories(CATEGORY.FLASK);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
	});
}

function otherUncommon(filter) {
	filter.multiHide((c) => { // Belts: Remaining corrupts
		c.categories(CATEGORY.BELT);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
		c.isCorrupted = true;
	}, (c) => { // Belts: Too low ilvl
		c.categories(CATEGORY.BELT);
		c.rarity = new Comparison([RARITY.MAGIC, RARITY.RARE]);
		c.ilvl = new Comparison(82, OPERATOR.LT);
	});
}
