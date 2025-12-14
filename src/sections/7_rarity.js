import { CATEGORY } from "../conditions/category.js";
import { Comparison } from "../conditions/comparison.js";
import { RARITY } from "../conditions/conditionSet.js";
import { NameManager, TIER } from "../conditions/nameManager.js";
import { OPERATOR } from "../conditions/operator.js";
import { LEVEL_BIS, LEVEL_BIS_WAND_STAFF, PAIR_GEAR, PAIR_JEWEL, PAIR_MECHANIC, PAIR_QUESTLIKE, PRICE_AUGMENT, PRICE_CHANCE, PRICE_EXALT } from "../constants.js";

export function sectionRarity(filter) {
	reset(filter);

	classWeapons(filter);
	otherWeapons(filter);
	classArmour(filter);
	otherArmour(filter);
	classUncommon(filter);
	otherUncommon(filter);

	jewels(filter);
	waystones(filter);
	tablets(filter);
	relics(filter);
}

function reset(filter) {
	// Normal
	filter.block((c, e) => {
		c.continue();
		c.categories(CATEGORY.GEAR);
		c.rarity = new Comparison(RARITY.NORMAL);

		e.colourWisdom(PAIR_GEAR).sizeAugment();
	});

	// Magic
	filter.block((c, e) => { // Low tier
		c.continue();
		c.categories(CATEGORY.GEAR);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.isLowTier();

		e.colourAugment(PAIR_GEAR).sizeWisdom();
	});
	filter.block((c, e) => { // Max tier
		c.continue();
		c.categories(CATEGORY.GEAR);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.isMaxTier();

		e.colourAugment(PAIR_GEAR).sizeAugment();
	});

	// Rare
	filter.block((c, e) => { // Low tier
		c.continue();
		c.categories(CATEGORY.GEAR);
		c.rarity = new Comparison(RARITY.RARE);
		c.isLowTier();

		e.colourExalt(PAIR_GEAR).sizeWisdom();
	});
	filter.block((c, e) => { // Max tier
		c.continue();
		c.categories(CATEGORY.GEAR);
		c.rarity = new Comparison(RARITY.RARE);
		c.isMaxTier();

		e.colourExalt(PAIR_GEAR).sizeExalt();
	});

	// Unique
	filter.block((c, e) => {
		c.continue();
		c.categories(CATEGORY.GEAR);
		c.rarity = new Comparison(RARITY.UNIQUE);

		e.colourChance(PAIR_GEAR).sizeChance();
	});
}

function classWeapons(filter) {
	// Normal
	filter.multiBlock((c) => {
		c.continue();
		c.categories(CATEGORY.WEAPON_CLASS);
		// c.names = new Comparison(NameManager.getGear(c));
		// c.names = new Comparison(NameManager.getGear(c, null, null, LEVEL_DROP, OPERATOR.GTE));
		c.rarity = new Comparison(RARITY.NORMAL);
		// c.ilvl = new Comparison(LEVEL_ITEM, OPERATOR.GTE);
		// c.isCorrupted = false;
	}, (e) => {
		e.colourWisdom(PAIR_GEAR).sizeExalt();
	});

	// Magic
	filter.multiBlock((c) => { // Low tier
		c.continue();
		c.categories(CATEGORY.WEAPON_CLASS);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.isLowTier();
	}, (e) => {
		e.colourAugment(PAIR_GEAR).sizeAugment();
	});

	filter.multiBlock((c) => { // BiS ilvl
		c.continue();
		c.categories(CATEGORY.WEAPON_CLASS);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.ilvl = new Comparison(LEVEL_BIS, OPERATOR.GTE);
	}, (c) => { // Max tier
		c.continue();
		c.categories(CATEGORY.WEAPON_CLASS);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.isMaxTier();
	}, (c) => { // Good mod (class mainhand)
		c.continue();
		c.categories(CATEGORY.MAIN_CLASS);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.goodModMainhand();
	}, (c) => { // Good mod (class offhand)
		c.continue();
		c.categories(CATEGORY.OFF_CLASS);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.goodModOffhand();
	}, (e) => {
		e.colourAugment(PAIR_GEAR).sizeExalt();
	});

	// Rare
	filter.multiBlock((c) => { // Low tier
		c.continue();
		c.categories(CATEGORY.WEAPON_CLASS);
		c.rarity = new Comparison(RARITY.RARE);
		c.isLowTier();
	}, (e) => {
		e.colourExalt(PAIR_GEAR).sizeAugment();
	});

	filter.multiBlock((c) => { // BiS ilvl
		c.continue();
		c.categories(CATEGORY.WEAPON_CLASS);
		c.rarity = new Comparison(RARITY.RARE);
		c.ilvl = new Comparison(LEVEL_BIS, OPERATOR.GTE);
	}, (c) => { // Good mod (class mainhand)
		c.continue();
		c.categories(CATEGORY.MAIN_CLASS);
		c.rarity = new Comparison(RARITY.RARE);
		c.goodModMainhand();
	}, (c) => { // Good mod (class offhand)
		c.continue();
		c.categories(CATEGORY.OFF_CLASS);
		c.rarity = new Comparison(RARITY.RARE);
		c.goodModOffhand();
	}, (e) => {
		e.colourExalt(PAIR_GEAR).sizeExalt();
	});
}

function otherWeapons(filter) {
	// Magic
	filter.multiBlock((c) => { // BiS ilvl (wand/staff)
		c.continue();
		c.categories(CATEGORY.WAND, CATEGORY.STAFF);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.ilvl = new Comparison(LEVEL_BIS_WAND_STAFF, OPERATOR.GTE);
	}, (c) => { // BiS ilvl (other attacker mainhand)
		c.continue();
		c.categories(CATEGORY.MAIN_OTHER_ATTACKER);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.ilvl = new Comparison(LEVEL_BIS, OPERATOR.GTE);
	}, (c) => { // Good mod (other mainhand)
		c.continue();
		c.categories(CATEGORY.MAIN_OTHER);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.goodModMainhand(true);
	}, (c) => { // Good mod (other offhand)
		c.continue();
		c.categories(CATEGORY.OFF_OTHER);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.goodModOffhand(true);
	}, (e) => {
		e.colourAugment(PAIR_GEAR).sizeExalt();
	});

	// Rare
	filter.multiBlock((c) => { // BiS ilvl (wand/staff)
		c.continue();
		c.categories(CATEGORY.WAND, CATEGORY.STAFF);
		c.rarity = new Comparison(RARITY.RARE);
		c.ilvl = new Comparison(LEVEL_BIS_WAND_STAFF, OPERATOR.GTE);
	}, (c) => { // BiS ilvl (other attacker mainhand)
		c.continue();
		c.categories(CATEGORY.MAIN_OTHER_ATTACKER);
		c.rarity = new Comparison(RARITY.RARE);
		c.ilvl = new Comparison(LEVEL_BIS, OPERATOR.GTE);
	}, (c) => { // Good mod (other mainhand)
		c.continue();
		c.categories(CATEGORY.MAIN_OTHER);
		c.rarity = new Comparison(RARITY.RARE);
		c.goodModMainhand(true);
	}, (c) => { // Good mod (other offhand)
		c.continue();
		c.categories(CATEGORY.OFF_OTHER);
		c.rarity = new Comparison(RARITY.RARE);
		c.goodModOffhand(true);
	}, (e) => {
		e.colourExalt(PAIR_GEAR).sizeExalt();
	});
}

function classArmour(filter) {
	// Normal
	filter.multiBlock((c) => {
		c.continue();
		c.categories(CATEGORY.ARMOUR);
		c.names = new Comparison(NameManager.getGear(CATEGORY.ARMOUR_EV));
		c.rarity = new Comparison(RARITY.NORMAL);
	}, (e) => {
		e.colourWisdom(PAIR_GEAR).sizeExalt();
	});

	// Magic
	filter.multiBlock((c) => {
		c.continue();
		c.categories(CATEGORY.ARMOUR);
		c.names = new Comparison(NameManager.getGear(CATEGORY.ARMOUR_EV));
		c.rarity = new Comparison(RARITY.MAGIC);
		c.isLowTier();
	}, (e) => {
		e.colourAugment(PAIR_GEAR).sizeAugment();
	});

	filter.multiBlock((c) => { // BiS ilvl
		c.continue();
		c.categories(CATEGORY.ARMOUR);
		c.names = new Comparison(NameManager.getGear(CATEGORY.ARMOUR_EV));
		c.rarity = new Comparison(RARITY.MAGIC);
		c.ilvl = new Comparison(LEVEL_BIS, OPERATOR.GTE);
	}, (c) => { // Max tier
		c.continue();
		c.categories(CATEGORY.ARMOUR);
		c.names = new Comparison(NameManager.getGear(CATEGORY.ARMOUR_EV));
		c.rarity = new Comparison(RARITY.MAGIC);
		c.isMaxTier();
	}, (c) => { // Good mod (class)
		c.continue();
		c.categories(CATEGORY.ARMOUR);
		c.names = new Comparison(NameManager.getGear(CATEGORY.ARMOUR_EV));
		c.rarity = new Comparison(RARITY.MAGIC);
		c.goodModArmour();
	}, (e) => {
		e.colourAugment(PAIR_GEAR).sizeExalt();
	});

	// Rare
	filter.multiBlock((c) => { // Low tier
		c.continue();
		c.categories(CATEGORY.ARMOUR);
		c.names = new Comparison(NameManager.getGear(CATEGORY.ARMOUR_EV));
		c.rarity = new Comparison(RARITY.RARE);
	}, (e) => {
		e.colourExalt(PAIR_GEAR).sizeAugment();
	});

	filter.multiBlock((c) => { // BiS ilvl
		c.continue();
		c.categories(CATEGORY.ARMOUR);
		c.names = new Comparison(NameManager.getGear(CATEGORY.ARMOUR_EV));
		c.rarity = new Comparison(RARITY.RARE);
		c.ilvl = new Comparison(LEVEL_BIS, OPERATOR.GTE);
	}, (c) => { // Good mod (class)
		c.continue();
		c.categories(CATEGORY.ARMOUR);
		c.names = new Comparison(NameManager.getGear(CATEGORY.ARMOUR_EV));
		c.rarity = new Comparison(RARITY.RARE);
		c.goodModArmour();
	}, (e) => {
		e.colourExalt(PAIR_GEAR).sizeExalt();
	});
}

function otherArmour(filter) {
	// Magic
	filter.multiBlock((c) => { // BiS ilvl
		c.continue();
		c.categories(CATEGORY.ARMOUR);
		c.names = new Comparison(NameManager.getGear(new StringList(
			CATEGORY.ARMOUR_AM,
			CATEGORY.ARMOUR_ES,
			CATEGORY.ARMOUR_AM_EV,
			CATEGORY.ARMOUR_AM_ES,
			CATEGORY.ARMOUR_EV_ES
		)));
		c.rarity = new Comparison(RARITY.MAGIC);
		c.ilvl = new Comparison(LEVEL_BIS, OPERATOR.GTE);
	}, (c) => { // Good mod (other)
		c.continue();
		c.categories(CATEGORY.ARMOUR);
		c.names = new Comparison(NameManager.getGear(new StringList(
			CATEGORY.ARMOUR_AM,
			CATEGORY.ARMOUR_ES,
			CATEGORY.ARMOUR_AM_EV,
			CATEGORY.ARMOUR_AM_ES,
			CATEGORY.ARMOUR_EV_ES
		)));
		c.rarity = new Comparison(RARITY.MAGIC);
		c.goodModArmour(true);
	}, (e) => {
		e.colourAugment(PAIR_GEAR).sizeExalt();
	});

	// Rare
	filter.multiBlock((c) => { // BiS ilvl
		c.continue();
		c.categories(CATEGORY.ARMOUR);
		c.names = new Comparison(NameManager.getGear(new StringList(
			CATEGORY.ARMOUR_AM,
			CATEGORY.ARMOUR_ES,
			CATEGORY.ARMOUR_AM_EV,
			CATEGORY.ARMOUR_AM_ES,
			CATEGORY.ARMOUR_EV_ES
		)));
		c.rarity = new Comparison(RARITY.RARE);
		c.ilvl = new Comparison(LEVEL_BIS, OPERATOR.GTE);
	}, (c) => { // Good mod (other)
		c.continue();
		c.categories(CATEGORY.ARMOUR);
		c.names = new Comparison(NameManager.getGear(new StringList(
			CATEGORY.ARMOUR_AM,
			CATEGORY.ARMOUR_ES,
			CATEGORY.ARMOUR_AM_EV,
			CATEGORY.ARMOUR_AM_ES,
			CATEGORY.ARMOUR_EV_ES
		)));
		c.rarity = new Comparison(RARITY.RARE);
		c.goodModArmour(true);
	}, (e) => {
		e.colourExalt(PAIR_GEAR).sizeExalt();
	});
}

//TODO stopped here
function classUncommon(filter) {
	// Normal
	filter.multiBlock((c) => { // Charms
		c.continue();
		c.names = new Comparison(NameManager.getUncommons(TIER.CLASS, OPERATOR.GTE));
		c.categories(CATEGORY.CHARM);
		c.rarity = new Comparison(RARITY.NORMAL);
		c.ilvl = new Comparison(81, OPERATOR.GTE);
		c.isCorrupted = false;
	}, (c) => { // Jewellery
		c.continue();
		c.names = new Comparison(NameManager.getUncommons(TIER.CLASS, OPERATOR.GTE));
		c.categories(CATEGORY.JEWELLERY);
		c.rarity = new Comparison(RARITY.NORMAL);
		c.ilvl = new Comparison(82, OPERATOR.GTE);
		c.isCorrupted = false;
	}, (e) => {
		e.colourWisdom(PAIR_GEAR).sizeExalt();
	});

	filter.multiBlock((c) => { // Flasks
		c.continue();
		c.names = new Comparison(NameManager.getUncommons(TIER.CLASS, OPERATOR.GTE));
		c.categories(CATEGORY.FLASK);
		c.rarity = new Comparison(RARITY.NORMAL);
		c.ilvl = new Comparison(83, OPERATOR.GTE);
		c.isCorrupted = false;
	}, (e) => {
		e.colourWisdom(PAIR_GEAR).sizeChance();
	});

	// Magic
	filter.multiBlock((c) => {
		c.continue();
		c.names = new Comparison(NameManager.getUncommons(TIER.CLASS, OPERATOR.GTE));
		c.categories(CATEGORY.CHARM);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.ilvl = new Comparison(81, OPERATOR.GTE);
		c.isCorrupted = false;
	}, (c) => {
		c.continue();
		c.names = new Comparison(NameManager.getUncommons(TIER.CLASS, OPERATOR.GTE));
		c.categories(CATEGORY.AMULET, CATEGORY.RING);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.ilvl = new Comparison(82, OPERATOR.GTE);
		c.isCorrupted = false;
	}, (e) => {
		e.colourAugment(PAIR_GEAR).sizeAugment();
	});

	filter.multiBlock((c) => { // Good mod (class jewellery)
		c.continue();
		c.names = new Comparison(NameManager.getUncommons(TIER.CLASS, OPERATOR.GTE));
		c.categories(CATEGORY.AMULET, CATEGORY.RING);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.ilvl = new Comparison(82, OPERATOR.GTE);
		c.isCorrupted = false;
		c.goodModJewellery();
	}, (e) => {
		e.colourAugment(PAIR_GEAR).sizeExalt();
	});

	filter.multiBlock((c) => { // Flasks
		c.continue();
		c.names = new Comparison(NameManager.getUncommons(TIER.CLASS, OPERATOR.GTE));
		c.categories(CATEGORY.FLASK);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.ilvl = new Comparison(83, OPERATOR.GTE);
		c.isCorrupted = false;
	}, (e) => {
		e.colourAugment(PAIR_GEAR).sizeChance();
	});

	// Rare
	filter.multiBlock((c) => {
		c.continue();
		c.names = new Comparison(NameManager.getUncommons(TIER.CLASS, OPERATOR.GTE));
		c.categories(CATEGORY.AMULET, CATEGORY.RING);
		c.rarity = new Comparison(RARITY.RARE);
		c.ilvl = new Comparison(82, OPERATOR.GTE);
		c.isCorrupted = false;
	}, (e) => {
		e.colourExalt(PAIR_GEAR).sizeAugment();
	});

	filter.multiBlock((c) => { // Good mod (class jewellery)
		c.continue();
		c.names = new Comparison(NameManager.getUncommons(TIER.CLASS, OPERATOR.GTE));
		c.categories(CATEGORY.AMULET, CATEGORY.RING);
		c.rarity = new Comparison(RARITY.RARE);
		c.ilvl = new Comparison(82, OPERATOR.GTE);
		c.isCorrupted = false;
		c.goodModJewellery();
	}, (e) => {
		e.colourExalt(PAIR_GEAR).sizeExalt();
	});
}

function otherUncommon(filter) {
	// Magic
	filter.multiBlock((c) => { // Good mod (other jewellery)
		c.continue();
		c.names = new Comparison(NameManager.getUncommons(TIER.OTHER));
		c.categories(CATEGORY.AMULET, CATEGORY.RING);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.ilvl = new Comparison(82, OPERATOR.GTE);
		c.isCorrupted = false;
		c.goodModJewellery();
	}, (e) => {
		e.colourAugment(PAIR_GEAR).sizeExalt();
	});

	// Rare
	filter.multiBlock((c) => { // Good mod (other jewellery)
		c.continue();
		c.names = new Comparison(NameManager.getUncommons(TIER.OTHER));
		c.categories(CATEGORY.AMULET, CATEGORY.RING);
		c.rarity = new Comparison(RARITY.RARE);
		c.ilvl = new Comparison(82, OPERATOR.GTE);
		c.isCorrupted = false;
		c.goodModJewellery();
	}, (e) => {
		e.colourExalt(PAIR_GEAR).sizeExalt();
	});
}

function jewels(filter) {
	filter.block((c, e) => {
		c.continue();
		c.categories(CATEGORY.JEWEL);
		c.rarity = new Comparison(RARITY.MAGIC);

		e.colourAugment(PAIR_JEWEL).sizeAugment();
	});

	filter.block((c, e) => {
		c.continue();
		c.categories(CATEGORY.JEWEL);
		c.rarity = new Comparison(RARITY.RARE);

		e.colourExalt(PAIR_JEWEL).sizeAugment();
	});

	filter.block((c, e) => {
		c.continue();
		c.categories(CATEGORY.JEWEL);
		c.rarity = new Comparison(RARITY.UNIQUE);

		e.colourChance(PAIR_JEWEL).sizeChance();
	});
}

function waystones(filter) {
	filter.block((c, e) => {
		c.continue();
		c.categories(CATEGORY.WAYSTONE);
		c.rarity = new Comparison(RARITY.NORMAL);

		e.colourWisdom(PAIR_QUESTLIKE).sizeChance();
	});

	filter.block((c, e) => {
		c.continue();
		c.categories(CATEGORY.WAYSTONE);
		c.rarity = new Comparison(RARITY.MAGIC);

		e.colourAugment(PAIR_QUESTLIKE).sizeChance();
	});

	filter.block((c, e) => {
		c.continue();
		c.categories(CATEGORY.WAYSTONE);
		c.rarity = new Comparison(RARITY.RARE);

		e.colourExalt(PAIR_QUESTLIKE).sizeChance();
	});
}

function tablets(filter) {
	filter.block((c, e) => {
		c.continue();
		c.categories(CATEGORY.TABLET);
		c.rarity = new Comparison(RARITY.NORMAL);

		e.colourWisdom(PAIR_MECHANIC).sizeExalt();
	});

	filter.multiBlock((c) => {
		c.continue();
		c.categories(CATEGORY.TABLET);
		c.rarity = new Comparison(RARITY.MAGIC);
	}, (e) => {
		e.colourAugment(PAIR_MECHANIC).sizeExalt();
	});

	filter.block((c, e) => {
		c.continue();
		c.categories(CATEGORY.TABLET);
		c.rarity = new Comparison(RARITY.RARE);

		e.colourExalt(PAIR_MECHANIC).sizeExalt();
	});

	filter.block((c, e) => {
		c.continue();
		c.names = new Comparison(NameManager.getUniqueTablets(null, PRICE_EXALT));
		c.categories(CATEGORY.TABLET);
		c.rarity = new Comparison(RARITY.UNIQUE);

		e.colourChance(PAIR_MECHANIC).sizeAugment();
	});
	filter.block((c, e) => {
		c.continue();
		c.names = new Comparison(NameManager.getUniqueTablets(PRICE_EXALT, PRICE_CHANCE));
		c.categories(CATEGORY.TABLET);
		c.rarity = new Comparison(RARITY.UNIQUE);

		e.colourChance(PAIR_MECHANIC).sizeExalt();
	});
	filter.block((c, e) => {
		c.continue();
		c.names = new Comparison(NameManager.getUniqueTablets(PRICE_CHANCE));
		c.categories(CATEGORY.TABLET);
		c.rarity = new Comparison(RARITY.UNIQUE);

		e.colourChance(PAIR_MECHANIC).sizeChance();
	});
}

function relics(filter) {
	filter.multiBlock((c) => {
		c.continue();
		c.categories(CATEGORY.RELIC);
		c.rarity = new Comparison(RARITY.MAGIC);
	}, (e) => {
		e.colourAugment(PAIR_MECHANIC).sizeAugment();
	});

	filter.block((c, e) => {
		c.continue();
		c.names = new Comparison(NameManager.getUniqueRelics(null, PRICE_AUGMENT));
		c.categories(CATEGORY.RELIC);
		c.rarity = new Comparison(RARITY.UNIQUE);

		e.colourChance(PAIR_MECHANIC).sizeWisdom();
	});
	filter.block((c, e) => {
		c.continue();
		c.names = new Comparison(NameManager.getUniqueRelics(PRICE_AUGMENT, PRICE_EXALT));
		c.categories(CATEGORY.RELIC);
		c.rarity = new Comparison(RARITY.UNIQUE);

		e.colourChance(PAIR_MECHANIC).sizeAugment();
	});
	filter.block((c, e) => {
		c.continue();
		c.names = new Comparison(NameManager.getUniqueRelics(PRICE_EXALT));
		c.categories(CATEGORY.RELIC);
		c.rarity = new Comparison(RARITY.UNIQUE);

		e.colourChance(PAIR_MECHANIC).sizeDivine();
	});
}
