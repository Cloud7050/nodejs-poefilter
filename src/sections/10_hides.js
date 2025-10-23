import { CATEGORY } from "../conditions/category.js";
import { Comparison, OPERATOR } from "../conditions/comparison.js";
import { RARITY } from "../conditions/conditionSet.js";
import { NameManager, TIER } from "../conditions/nameManager.js";

export function sectionHides(filter) {
	classWeapons(filter);
	otherWeapons(filter);
	armour(filter);
	classUncommon(filter);
	otherUncommon(filter);
}

function classWeapons(filter) {
	filter.multiHide((c) => { // Class weapons: Remaining corrupts
		c.categories(CATEGORY.WEAPON_CLASS);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
		c.isCorrupted = true;
	}, (c) => { // Class weapons: Too low ilvl
		c.categories(CATEGORY.WEAPON_CLASS);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
		c.ilvl = new Comparison(82, OPERATOR.LT);
	}, (c) => { // Class mainhands: Bad base
		c.names = new Comparison(NameManager.getMain(TIER.BAD));
		c.categories(CATEGORY.MAIN_CLASS);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
	}, (c) => { // Class offhands: Bad base
		c.names = new Comparison(NameManager.getOff(TIER.BAD));
		c.categories(CATEGORY.OFF_CLASS);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
	});
}

function otherWeapons(filter) {
	filter.multiHide((c) => { // Other weapons: Remaining corrupts
		c.categories(CATEGORY.WEAPON_OTHER);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
		c.isCorrupted = true;
	}, (c) => { // Other caster mainhands: Too low ilvl
		c.categories(CATEGORY.MAIN_OTHER_CASTER);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
		c.ilvl = new Comparison(81, OPERATOR.LT);
	}, (c) => { // Other attacker mainhands / offhands: Too low ilvl
		c.categories(CATEGORY.MAIN_OTHER_ATTACKER, CATEGORY.OFF_OTHER);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
		c.ilvl = new Comparison(82, OPERATOR.LT);
	}, (c) => { // Other mainhands: Bad base
		c.names = new Comparison(NameManager.getMain(TIER.BAD));
		c.categories(CATEGORY.MAIN_OTHER);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
	}, (c) => { // Other offhands: Bad base
		c.names = new Comparison(NameManager.getOff(TIER.BAD));
		c.categories(CATEGORY.OFF_OTHER);
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
