import { CATEGORY } from "../conditions/category.js";
import { Comparison, OPERATOR } from "../conditions/comparison.js";
import { RARITY } from "../conditions/conditionSet.js";
import { NameManager } from "../conditions/nameManager.js";

export function sectionHides(filter) {
	classWeapons(filter);
	otherWeapons(filter);
	classArmour(filter);
	otherArmour(filter);
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
		c.names = new Comparison(NameManager.getMainClassBad());
		c.categories(CATEGORY.MAIN_CLASS);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
	}, (c) => { // Class offhands: Bad base
		c.names = new Comparison(NameManager.getOffClassBad());
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
		c.names = new Comparison(NameManager.getMainOtherBad());
		c.categories(CATEGORY.MAIN_OTHER);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
	}, (c) => { // Other quivers: Bad base
		c.names = new Comparison(NameManager.getOffOtherBad());
		c.categories(CATEGORY.OFF_OTHER_QUIVER);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
	}, (c) => { // Other shields: Bad base
		c.categories(CATEGORY.OFF_OTHER_BLOCK);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
		c.dropLevel = new Comparison(80, OPERATOR.LT);
	});
}

function classArmour(filter) {
	filter.multiHide((c) => { // Class armour: Remaining corrupts
		c.categories(CATEGORY.ARMOUR_TOP);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
		c.isCorrupted = true;
		c.onlyEnergyShield();
	}, (c) => { // Class armour: Too low ilvl
		c.categories(CATEGORY.ARMOUR_TOP);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
		c.ilvl = new Comparison(82, OPERATOR.LT);
		c.onlyEnergyShield();
	}, (c) => { // Class armour: Bad base
		c.names = new Comparison(NameManager.getArmourClassBad());
		c.categories(CATEGORY.ARMOUR_TOP);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
	});
}

function otherArmour(filter) {
	filter.multiHide((c) => { // Other armour (armour): Remaining corrupts
		c.categories(CATEGORY.ARMOUR_TOP);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
		c.isCorrupted = true;
		c.hasArmour();
	}, (c) => { // Other armour (evasion): Remaining corrupts
		c.categories(CATEGORY.ARMOUR_TOP);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
		c.isCorrupted = true;
		c.hasEvasion();
	}, (c) => { // Boots: Remaining corrupts
		c.categories(CATEGORY.BOOTS);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
		c.isCorrupted = true;
	}, (c) => { // Other armour (armour): Too low ilvl
		c.categories(CATEGORY.ARMOUR_TOP);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
		c.ilvl = new Comparison(82, OPERATOR.LT);
		c.hasArmour();
	}, (c) => { // Other armour (evasion): Too low ilvl
		c.categories(CATEGORY.ARMOUR_TOP);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
		c.ilvl = new Comparison(82, OPERATOR.LT);
		c.hasEvasion();
	}, (c) => { // Boots: Too low ilvl
		c.categories(CATEGORY.BOOTS);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
		c.ilvl = new Comparison(82, OPERATOR.LT);
	}, (c) => { // Other body (armour): Bad base
		c.categories(CATEGORY.BODY);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
		c.dropLevel = new Comparison(65, OPERATOR.LT);
		c.hasArmour();
	}, (c) => { // Other body (evasion): Bad base
		c.categories(CATEGORY.BODY);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
		c.dropLevel = new Comparison(65, OPERATOR.LT);
		c.hasEvasion();
	}, (c) => { // Other helmets/gloves (armour): Bad base
		c.categories(CATEGORY.HELMET, CATEGORY.GLOVE);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
		c.dropLevel = new Comparison(80, OPERATOR.LT);
		c.hasArmour();
	}, (c) => { // Other helmets/gloves (evasion): Bad base
		c.categories(CATEGORY.HELMET, CATEGORY.GLOVE);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
		c.dropLevel = new Comparison(80, OPERATOR.LT);
		c.hasEvasion();
	}, (c) => { // Boots: Bad base
		c.categories(CATEGORY.BOOTS);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
		c.dropLevel = new Comparison(80, OPERATOR.LT);
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
		c.names = new Comparison(NameManager.getFlasksBad());
		c.categories(CATEGORY.FLASK);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
	});
}

function otherUncommon(filter) {
	filter.multiHide((c) => { // Belts: Remaining corrupts
		c.categories(CATEGORY.BELT);
		c.rarity = new Comparison(RARITY.UNIQUE, OPERATOR.LT);
		c.isCorrupted = true;
	}, (c) => { // Belts (magic): Too low ilvl
		c.categories(CATEGORY.BELT);
		c.rarity = new Comparison(RARITY.MAGIC, OPERATOR.LT);
		c.ilvl = new Comparison(82, OPERATOR.LT);
	}, (c) => { // Belts (rare): Too low ilvl
		c.categories(CATEGORY.BELT);
		c.rarity = new Comparison(RARITY.RARE, OPERATOR.LT);
		c.ilvl = new Comparison(82, OPERATOR.LT);
	});
}
