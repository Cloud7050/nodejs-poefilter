import { CATEGORY } from "../conditions/category.js";
import { Comparison } from "../conditions/comparison.js";
import { RARITY } from "../conditions/conditionSet.js";
import { NameManager, TIER } from "../conditions/nameManager.js";
import { OPERATOR } from "../conditions/operator.js";
import { PAIR_GEAR, PAIR_JEWEL, PAIR_MECHANIC, PAIR_QUESTLIKE } from "../index.js";

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

// Style reset per rarity
function reset(filter) {
	// Normal
	filter.block((c, e) => {
		c.continue();
		c.categories(CATEGORY.GEAR);
		c.rarity = new Comparison(RARITY.NORMAL);

		e.colourWisdom(PAIR_GEAR).sizeAugment();
	});

	// Magic
	filter.block((c, e) => {
		c.continue();
		c.categories(CATEGORY.GEAR);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.isLowTier();

		e.colourAugment(PAIR_GEAR).sizeWisdom();
	});
	filter.block((c, e) => {
		c.continue();
		c.categories(CATEGORY.GEAR);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.isMaxTier();

		e.colourAugment(PAIR_GEAR).sizeAugment();
	});

	// Rare
	filter.block((c, e) => {
		c.continue();
		c.categories(CATEGORY.GEAR);
		c.rarity = new Comparison(RARITY.RARE);
		c.isLowTier();

		e.colourExalt(PAIR_GEAR).sizeWisdom();
	});
	filter.block((c, e) => {
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
		c.names = new Comparison(NameManager.getMain(TIER.CLASS, OPERATOR.GTE));
		c.categories(CATEGORY.MAIN_CLASS);
		c.rarity = new Comparison(RARITY.NORMAL);
		c.ilvl = new Comparison(82, OPERATOR.GTE);
		c.isCorrupted = false;
	}, (c) => {
		c.continue();
		c.names = new Comparison(NameManager.getOff(TIER.CLASS, OPERATOR.GTE));
		c.categories(CATEGORY.OFF_CLASS);
		c.rarity = new Comparison(RARITY.NORMAL);
		c.ilvl = new Comparison(82, OPERATOR.GTE);
		c.isCorrupted = false;
	}, (e) => {
		e.colourWisdom(PAIR_GEAR).sizeExalt();
	});

	// Magic
	filter.multiBlock((c) => { // Low tier
		c.continue();
		c.names = new Comparison(NameManager.getMain(TIER.CLASS, OPERATOR.GTE));
		c.categories(CATEGORY.MAIN_CLASS);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.ilvl = new Comparison(82, OPERATOR.GTE);
		c.isLowTier();
		c.isCorrupted = false;
	}, (c) => { // Low tier
		c.continue();
		c.names = new Comparison(NameManager.getOff(TIER.CLASS, OPERATOR.GTE));
		c.categories(CATEGORY.OFF_CLASS);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.ilvl = new Comparison(82, OPERATOR.GTE);
		c.isLowTier();
		c.isCorrupted = false;
	}, (e) => {
		e.colourAugment(PAIR_GEAR).sizeAugment();
	});

	filter.multiBlock((c) => { // Max tier
		c.continue();
		c.names = new Comparison(NameManager.getMain(TIER.CLASS, OPERATOR.GTE));
		c.categories(CATEGORY.MAIN_CLASS);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.ilvl = new Comparison(82, OPERATOR.GTE);
		c.isMaxTier();
		c.isCorrupted = false;
	}, (c) => { // Max tier
		c.continue();
		c.names = new Comparison(NameManager.getOff(TIER.CLASS, OPERATOR.GTE));
		c.categories(CATEGORY.OFF_CLASS);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.ilvl = new Comparison(82, OPERATOR.GTE);
		c.isMaxTier();
		c.isCorrupted = false;
	}, (c) => { // Good mod (class mainhand)
		c.continue();
		c.names = new Comparison(NameManager.getMain(TIER.CLASS, OPERATOR.GTE));
		c.categories(CATEGORY.MAIN_CLASS);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.ilvl = new Comparison(82, OPERATOR.GTE);
		c.isCorrupted = false;
		c.goodModMainhand();
	}, (c) => { // Good mod (class offhand)
		c.continue();
		c.names = new Comparison(NameManager.getOff(TIER.CLASS, OPERATOR.GTE));
		c.categories(CATEGORY.OFF_CLASS);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.ilvl = new Comparison(82, OPERATOR.GTE);
		c.isCorrupted = false;
		c.goodModOffhand();
	}, (e) => {
		e.colourAugment(PAIR_GEAR).sizeExalt();
	});

	// Rare
	filter.multiBlock((c) => { // Low tier
		c.continue();
		c.names = new Comparison(NameManager.getMain(TIER.CLASS, OPERATOR.GTE));
		c.categories(CATEGORY.MAIN_CLASS);
		c.rarity = new Comparison(RARITY.RARE);
		c.ilvl = new Comparison(82, OPERATOR.GTE);
		c.isLowTier();
	}, (c) => { // Low tier
		c.continue();
		c.names = new Comparison(NameManager.getOff(TIER.CLASS, OPERATOR.GTE));
		c.categories(CATEGORY.OFF_CLASS);
		c.rarity = new Comparison(RARITY.RARE);
		c.ilvl = new Comparison(82, OPERATOR.GTE);
		c.isLowTier();
	}, (e) => {
		e.colourExalt(PAIR_GEAR).sizeAugment();
	});

	filter.multiBlock((c) => { // Good mod (class mainhand)
		c.continue();
		c.names = new Comparison(NameManager.getMain(TIER.CLASS, OPERATOR.GTE));
		c.categories(CATEGORY.MAIN_CLASS);
		c.rarity = new Comparison(RARITY.RARE);
		c.ilvl = new Comparison(82, OPERATOR.GTE);
		c.goodModMainhand();
	}, (c) => { // Good mod (class offhand)
		c.continue();
		c.names = new Comparison(NameManager.getOff(TIER.CLASS, OPERATOR.GTE));
		c.categories(CATEGORY.OFF_CLASS);
		c.rarity = new Comparison(RARITY.RARE);
		c.ilvl = new Comparison(82, OPERATOR.GTE);
		c.goodModOffhand();
	}, (e) => {
		e.colourExalt(PAIR_GEAR).sizeExalt();
	});
}

function otherWeapons(filter) {
	// Magic
	filter.multiBlock((c) => { // Good mod (other caster mainhand)
		c.continue();
		c.names = new Comparison(NameManager.getMain(TIER.OTHER));
		c.categories(CATEGORY.MAIN_OTHER_CASTER);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.ilvl = new Comparison(81, OPERATOR.GTE);
		c.isCorrupted = false;
		c.goodModMainhand(true);
	}, (c) => { // Good mod (other attacker mainhand)
		c.continue();
		c.names = new Comparison(NameManager.getMain(TIER.OTHER));
		c.categories(CATEGORY.MAIN_OTHER_ATTACKER);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.ilvl = new Comparison(82, OPERATOR.GTE);
		c.isCorrupted = false;
		c.goodModMainhand(true);
	}, (c) => { // Good mod (other offhand)
		c.continue();
		c.names = new Comparison(NameManager.getOff(TIER.OTHER));
		c.categories(CATEGORY.OFF_OTHER);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.ilvl = new Comparison(82, OPERATOR.GTE);
		c.isCorrupted = false;
		c.goodModOffhand(true);
	}, (e) => {
		e.colourAugment(PAIR_GEAR).sizeExalt();
	});

	// Rare
	filter.multiBlock((c) => { // Good mod (other mainhand)
		c.continue();
		c.names = new Comparison(NameManager.getMain(TIER.OTHER));
		c.categories(CATEGORY.MAIN_OTHER_CASTER);
		c.rarity = new Comparison(RARITY.RARE);
		c.ilvl = new Comparison(81, OPERATOR.GTE);
		c.isCorrupted = false;
		c.goodModMainhand(true);
	}, (c) => { // Good mod (other mainhand)
		c.continue();
		c.names = new Comparison(NameManager.getMain(TIER.OTHER));
		c.categories(CATEGORY.MAIN_OTHER_ATTACKER);
		c.rarity = new Comparison(RARITY.RARE);
		c.ilvl = new Comparison(82, OPERATOR.GTE);
		c.isCorrupted = false;
		c.goodModMainhand(true);
	}, (c) => { // Good mod (other offhand)
		c.continue();
		c.names = new Comparison(NameManager.getOff(TIER.OTHER));
		c.categories(CATEGORY.OFF_OTHER);
		c.rarity = new Comparison(RARITY.RARE);
		c.ilvl = new Comparison(82, OPERATOR.GTE);
		c.isCorrupted = false;
		c.goodModOffhand(true);
	}, (e) => {
		e.colourExalt(PAIR_GEAR).sizeExalt();
	});
}

function classArmour(filter) {
	// Normal
	filter.multiBlock((c) => {
		c.continue();
		c.names = new Comparison(NameManager.getArmour(TIER.CLASS, OPERATOR.GTE));
		c.categories(CATEGORY.ARMOUR_TOP);
		c.rarity = new Comparison(RARITY.NORMAL);
		c.ilvl = new Comparison(82, OPERATOR.GTE);
		c.isCorrupted = false;
	}, (e) => {
		e.colourWisdom(PAIR_GEAR).sizeExalt();
	});

	// Magic
	filter.multiBlock((c) => { // Low tier
		c.continue();
		c.names = new Comparison(NameManager.getArmour(TIER.CLASS, OPERATOR.GTE));
		c.categories(CATEGORY.ARMOUR_TOP);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.ilvl = new Comparison(82, OPERATOR.GTE);
		c.isLowTier();
		c.isCorrupted = false;
	}, (e) => {
		e.colourAugment(PAIR_GEAR).sizeAugment();
	});

	filter.multiBlock((c) => { // Max tier
		c.continue();
		c.names = new Comparison(NameManager.getArmour(TIER.CLASS, OPERATOR.GTE));
		c.categories(CATEGORY.ARMOUR_TOP);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.ilvl = new Comparison(82, OPERATOR.GTE);
		c.isMaxTier();
		c.isCorrupted = false;
	}, (c) => { // Good mod (class)
		c.continue();
		c.names = new Comparison(NameManager.getArmour(TIER.CLASS, OPERATOR.GTE));
		c.categories(CATEGORY.ARMOUR_TOP);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.ilvl = new Comparison(82, OPERATOR.GTE);
		c.isCorrupted = false;
		c.goodModArmour();
	}, (e) => {
		e.colourAugment(PAIR_GEAR).sizeExalt();
	});

	// Rare
	filter.multiBlock((c) => { // Low tier
		c.continue();
		c.names = new Comparison(NameManager.getArmour(TIER.CLASS, OPERATOR.GTE));
		c.categories(CATEGORY.ARMOUR_TOP);
		c.rarity = new Comparison(RARITY.RARE);
		c.ilvl = new Comparison(82, OPERATOR.GTE);
		c.isLowTier();
	}, (e) => {
		e.colourExalt(PAIR_GEAR).sizeAugment();
	});

	filter.multiBlock((c) => { // Good mod (class)
		c.continue();
		c.names = new Comparison(NameManager.getArmour(TIER.CLASS, OPERATOR.GTE));
		c.categories(CATEGORY.ARMOUR_TOP);
		c.rarity = new Comparison(RARITY.RARE);
		c.ilvl = new Comparison(82, OPERATOR.GTE);
		c.isCorrupted = false;
		c.goodModArmour();
	}, (e) => {
		e.colourExalt(PAIR_GEAR).sizeExalt();
	});
}

function otherArmour(filter) {
	// Magic
	filter.multiBlock((c) => { // Good mod (other)
		c.continue();
		c.names = new Comparison(NameManager.getArmour(TIER.OTHER));
		c.categories(CATEGORY.ARMOUR);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.ilvl = new Comparison(82, OPERATOR.GTE);
		c.isCorrupted = false;
		c.goodModArmour(true);
	}, (e) => {
		e.colourAugment(PAIR_GEAR).sizeExalt();
	});

	// Rare
	filter.multiBlock((c) => { // Good mod (other)
		c.continue();
		c.names = new Comparison(NameManager.getArmour(TIER.OTHER));
		c.categories(CATEGORY.ARMOUR);
		c.rarity = new Comparison(RARITY.RARE);
		c.ilvl = new Comparison(82, OPERATOR.GTE);
		c.goodModArmour(true);
	}, (e) => {
		e.colourExalt(PAIR_GEAR).sizeExalt();
	});
}

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
	filter.multiBlock((c) => { // Low tier (charms)
		c.continue();
		c.names = new Comparison(NameManager.getUncommons(TIER.CLASS, OPERATOR.GTE));
		c.categories(CATEGORY.CHARM);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.ilvl = new Comparison(81, OPERATOR.GTE);
		c.isLowTier();
		c.isCorrupted = false;
	}, (c) => { // Low tier (jewellery)
		c.continue();
		c.names = new Comparison(NameManager.getUncommons(TIER.CLASS, OPERATOR.GTE));
		c.categories(CATEGORY.AMULET, CATEGORY.RING);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.ilvl = new Comparison(82, OPERATOR.GTE);
		c.isLowTier();
		c.isCorrupted = false;
	}, (e) => {
		e.colourAugment(PAIR_GEAR).sizeAugment();
	});

	filter.multiBlock((c) => { // Max tier (charms)
		c.continue();
		c.names = new Comparison(NameManager.getUncommons(TIER.CLASS, OPERATOR.GTE));
		c.categories(CATEGORY.CHARM);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.ilvl = new Comparison(81, OPERATOR.GTE);
		c.isMaxTier();
		c.isCorrupted = false;
	}, (c) => { // Max tier (jewellery)
		c.continue();
		c.names = new Comparison(NameManager.getUncommons(TIER.CLASS, OPERATOR.GTE));
		c.categories(CATEGORY.AMULET, CATEGORY.RING);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.ilvl = new Comparison(82, OPERATOR.GTE);
		c.isMaxTier();
		c.isCorrupted = false;
	}, (c) => { // Good mod (class jewellery)
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
	filter.multiBlock((c) => { // Low tier (class jewellery)
		c.continue();
		c.names = new Comparison(NameManager.getUncommons(TIER.CLASS, OPERATOR.GTE));
		c.categories(CATEGORY.AMULET, CATEGORY.RING);
		c.rarity = new Comparison(RARITY.RARE);
		c.ilvl = new Comparison(82, OPERATOR.GTE);
		c.isLowTier();
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
		c.isLowTier();
	}, (e) => {
		e.colourAugment(PAIR_MECHANIC).sizeAugment();
	});
	filter.multiBlock((c) => {
		c.continue();
		c.categories(CATEGORY.RELIC);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.isMaxTier();
	}, (e) => {
		e.colourAugment(PAIR_MECHANIC).sizeExalt();
	});

	filter.block((c, e) => {
		c.continue();
		c.names = new Comparison(NameManager.getUniqueRelics(null, 1 / 100));
		c.categories(CATEGORY.RELIC);
		c.rarity = new Comparison(RARITY.UNIQUE);

		e.colourChance(PAIR_MECHANIC).sizeWisdom();
	});
	filter.block((c, e) => {
		c.continue();
		c.names = new Comparison(NameManager.getUniqueRelics(1 / 100, 1));
		c.categories(CATEGORY.RELIC);
		c.rarity = new Comparison(RARITY.UNIQUE);

		e.colourChance(PAIR_MECHANIC).sizeAugment();
	});
	filter.block((c, e) => {
		c.continue();
		c.names = new Comparison(NameManager.getUniqueRelics(1));
		c.categories(CATEGORY.RELIC);
		c.rarity = new Comparison(RARITY.UNIQUE);

		e.colourChance(PAIR_MECHANIC).sizeDivine();
	});
}
