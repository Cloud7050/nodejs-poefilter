import { CATEGORY } from "../conditions/category.js";
import { Comparison } from "../conditions/comparison.js";
import { RARITY } from "../conditions/conditionSet.js";
import { NameManager, TIER } from "../conditions/nameManager.js";
import { OPERATOR } from "../conditions/operator.js";
import { Colour } from "../effects/colour.js";
import { PAIR_GEAR } from "../index.js";

// Overwrite outlines. Lowest priority first as they can get overwritten below
export function sectionOutlines(filter) {
	quality(filter);
	corrupted(filter);
	bis(filter);
	goodMods(filter);
	exceptional(filter);
}

function quality(filter) {
	filter.block((c, e) => {
		c.continue();
		c.hasQuality();

		e.outlineColour = Colour.MAGIC;
	});
}

function corrupted(filter) {
	filter.block((c, e) => {
		c.continue();
		c.isCorrupted = true;

		e.outlineColour = Colour.CORRUPTED;
	});
	filter.block((c, e) => {
		c.continue();
		c.hasEnchant();

		e.outlineColour = Colour.CHAOS;
	});
}

// BiS ilvl
function bis(filter) {
	filter.multiBlock((c) => {
		c.continue();
		c.categories(CATEGORY.MAIN_OTHER_CASTER, CATEGORY.CHARM);
		c.ilvl = new Comparison(81, OPERATOR.GTE);
	}, (c) => {
		c.continue();
		c.categories(CATEGORY.GEAR_COMMON, CATEGORY.JEWELLERY, CATEGORY.BELT);
		c.ilvl = new Comparison(82, OPERATOR.GTE);
	}, (c) => {
		c.continue();
		c.categories(CATEGORY.FLASK);
		c.ilvl = new Comparison(83, OPERATOR.GTE);
	}, (e) => {
		e.outlineColour = Colour.QUEST;
	});
}

// Good base/mods
function goodMods(filter) {
	filter.multiBlock((c) => {
		c.continue();
		c.names = new Comparison(NameManager.getUncommon(TIER.OUTLINE));
		c.categories(CATEGORY.GEAR_UNCOMMON);
	}, (c) => {
		c.continue();
		c.categories(CATEGORY.MAIN);
		c.goodModMainhand(true);
	}, (c) => {
		c.continue();
		c.categories(CATEGORY.OFF);
		c.goodModOffhand(true);
	}, (c) => {
		c.continue();
		c.categories(CATEGORY.ARMOUR);
		c.goodModArmour(true);
	}, (c) => {
		c.continue();
		c.categories(CATEGORY.JEWELLERY);
		c.goodModJewellery(true);
	}, (e) => {
		e.outlineColour = Colour.RARE;
	});
}

// Exceptional, or quality charm
function exceptional(filter) {
	// When both exceptional and corrupted, only outlines when sure it has exceptional-only stats,
	// else it retains the corrupted outline from above
	filter.multiBlock((c) => {
		c.continue();
		c.categories(CATEGORY.CHARM);
		c.rarity = new Comparison(RARITY.NORMAL);
		c.isCorrupted = false;
		c.hasQuality();
	}, (c) => {
		c.continue();
		c.rarity = new Comparison(RARITY.NORMAL);
		c.isCorrupted = false;
		c.hasQuality(21);
	}, (c) => {
		c.continue();
		c.rarity = new Comparison(RARITY.NORMAL);
		c.hasQuality(21);
		c.hasEnchant();
	}, (c) => {
		c.continue();
		c.rarity = new Comparison(RARITY.NORMAL);
		c.hasQuality(24);
	}, (c) => {
		c.continue();
		c.categories(CATEGORY.GEAR_UNCOMMON);
		c.rarity = new Comparison(RARITY.NORMAL);
		c.isCorrupted = false;
		c.hasSockets(1);
	}, (c) => {
		c.continue();
		c.categories(CATEGORY.GEAR_UNCOMMON);
		c.rarity = new Comparison(RARITY.NORMAL);
		c.hasSockets(1);
		c.hasEnchant();
	}, (c) => {
		c.continue();
		c.categories(CATEGORY.SOCKET_ONE);
		c.rarity = new Comparison(RARITY.NORMAL);
		c.isCorrupted = false;
		c.hasSockets(2);
	}, (c) => {
		c.continue();
		c.categories(CATEGORY.SOCKET_ONE);
		c.rarity = new Comparison(RARITY.NORMAL);
		c.hasSockets(2);
		c.hasEnchant();
	}, (c) => {
		c.continue();
		c.categories(CATEGORY.SOCKET_TWO);
		c.rarity = new Comparison(RARITY.NORMAL);
		c.isCorrupted = false;
		c.hasSockets(3);
	}, (c) => {
		c.continue();
		c.categories(CATEGORY.SOCKET_TWO);
		c.rarity = new Comparison(RARITY.NORMAL);
		c.hasSockets(3);
		c.hasEnchant();
	}, (e) => {
		e.colourWisdom(PAIR_GEAR).sizeChance();
		e.outlineColour = Colour.UNIQUE;
	});

	filter.multiBlock((c) => {
		c.continue();
		c.categories(CATEGORY.CHARM);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.isCorrupted = false;
		c.hasQuality();
	}, (c) => {
		c.continue();
		c.rarity = new Comparison(RARITY.MAGIC);
		c.isCorrupted = false;
		c.hasQuality(21);
	}, (c) => {
		c.continue();
		c.rarity = new Comparison(RARITY.MAGIC);
		c.hasQuality(21);
		c.hasEnchant();
	}, (c) => {
		c.continue();
		c.rarity = new Comparison(RARITY.MAGIC);
		c.hasQuality(24);
	}, (c) => {
		c.continue();
		c.categories(CATEGORY.GEAR_UNCOMMON);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.isCorrupted = false;
		c.hasSockets(1);
	}, (c) => {
		c.continue();
		c.categories(CATEGORY.GEAR_UNCOMMON);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.hasSockets(1);
		c.hasEnchant();
	}, (c) => {
		c.continue();
		c.categories(CATEGORY.SOCKET_ONE);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.isCorrupted = false;
		c.hasSockets(2);
	}, (c) => {
		c.continue();
		c.categories(CATEGORY.SOCKET_ONE);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.hasSockets(2);
		c.hasEnchant();
	}, (c) => {
		c.continue();
		c.categories(CATEGORY.SOCKET_TWO);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.isCorrupted = false;
		c.hasSockets(3);
	}, (c) => {
		c.continue();
		c.categories(CATEGORY.SOCKET_TWO);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.hasSockets(3);
		c.hasEnchant();
	}, (e) => {
		e.colourAugment(PAIR_GEAR).sizeChance();
		e.outlineColour = Colour.UNIQUE;
	});

	filter.multiBlock((c) => {
		c.continue();
		c.categories(CATEGORY.CHARM);
		c.rarity = new Comparison(RARITY.RARE);
		c.isCorrupted = false;
		c.hasQuality();
	}, (c) => {
		c.continue();
		c.rarity = new Comparison(RARITY.RARE);
		c.isCorrupted = false;
		c.hasQuality(21);
	}, (c) => {
		c.continue();
		c.rarity = new Comparison(RARITY.RARE);
		c.hasQuality(21);
		c.hasEnchant();
	}, (c) => {
		c.continue();
		c.rarity = new Comparison(RARITY.RARE);
		c.hasQuality(24);
	}, (c) => {
		c.continue();
		c.categories(CATEGORY.GEAR_UNCOMMON);
		c.rarity = new Comparison(RARITY.RARE);
		c.isCorrupted = false;
		c.hasSockets(1);
	}, (c) => {
		c.continue();
		c.categories(CATEGORY.GEAR_UNCOMMON);
		c.rarity = new Comparison(RARITY.RARE);
		c.hasSockets(1);
		c.hasEnchant();
	}, (c) => {
		c.continue();
		c.categories(CATEGORY.SOCKET_ONE);
		c.rarity = new Comparison(RARITY.RARE);
		c.isCorrupted = false;
		c.hasSockets(2);
	}, (c) => {
		c.continue();
		c.categories(CATEGORY.SOCKET_ONE);
		c.rarity = new Comparison(RARITY.RARE);
		c.hasSockets(2);
		c.hasEnchant();
	}, (c) => {
		c.continue();
		c.categories(CATEGORY.SOCKET_TWO);
		c.rarity = new Comparison(RARITY.RARE);
		c.isCorrupted = false;
		c.hasSockets(3);
	}, (c) => {
		c.continue();
		c.categories(CATEGORY.SOCKET_TWO);
		c.rarity = new Comparison(RARITY.RARE);
		c.hasSockets(3);
		c.hasEnchant();
	}, (e) => {
		e.colourExalt(PAIR_GEAR).sizeChance();
		e.outlineColour = Colour.UNIQUE;
	});

	filter.multiBlock((c) => {
		c.continue();
		c.categories(CATEGORY.CHARM);
		c.rarity = new Comparison(RARITY.UNIQUE);
		c.isCorrupted = false;
		c.hasQuality();
	}, (c) => {
		c.continue();
		c.rarity = new Comparison(RARITY.UNIQUE);
		c.isCorrupted = false;
		c.hasQuality(21);
	}, (c) => {
		c.continue();
		c.rarity = new Comparison(RARITY.UNIQUE);
		c.hasQuality(21);
		c.hasEnchant();
	}, (c) => {
		c.continue();
		c.rarity = new Comparison(RARITY.UNIQUE);
		c.hasQuality(24);
	}, (c) => {
		c.continue();
		c.categories(CATEGORY.GEAR_UNCOMMON);
		c.rarity = new Comparison(RARITY.UNIQUE);
		c.isCorrupted = false;
		c.hasSockets(1);
	}, (c) => {
		c.continue();
		c.categories(CATEGORY.GEAR_UNCOMMON);
		c.rarity = new Comparison(RARITY.UNIQUE);
		c.hasSockets(1);
		c.hasEnchant();
	}, (c) => {
		c.continue();
		c.categories(CATEGORY.SOCKET_ONE);
		c.rarity = new Comparison(RARITY.UNIQUE);
		c.isCorrupted = false;
		c.hasSockets(2);
	}, (c) => {
		c.continue();
		c.categories(CATEGORY.SOCKET_ONE);
		c.rarity = new Comparison(RARITY.UNIQUE);
		c.hasSockets(2);
		c.hasEnchant();
	}, (c) => {
		c.continue();
		c.categories(CATEGORY.SOCKET_TWO);
		c.rarity = new Comparison(RARITY.UNIQUE);
		c.isCorrupted = false;
		c.hasSockets(3);
	}, (c) => {
		c.continue();
		c.categories(CATEGORY.SOCKET_TWO);
		c.rarity = new Comparison(RARITY.UNIQUE);
		c.hasSockets(3);
		c.hasEnchant();
	}, (e) => {
		e.colourChance(PAIR_GEAR).sizeChance();
		e.outlineColour = Colour.UNIQUE;
	});
}
