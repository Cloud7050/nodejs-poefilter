import { CATEGORY } from "../conditions/category.js";
import { Comparison } from "../conditions/comparison.js";
import { RARITY } from "../conditions/conditionSet.js";
import { OPERATOR } from "../conditions/operator.js";
import { LEVEL_BIS, LEVEL_BIS_FLASK, LEVEL_BIS_RELIC, LEVEL_BIS_WAND_STAFF, PAIR_GEAR } from "../constants.js";
import { Colour } from "../effects/colour.js";
import { EffectSet } from "../effects/effectSet.js";

// Overwrite outlines. Lowest priority first as they can get overwritten below
export function sectionOutlines(filter) {
	quality(filter);
	corrupted(filter);
	incursion(filter);
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

function incursion(filter) {
	filter.multiBlock((c) => {
		c.continue();
		c.isCorruptedTwice = true;
	}, (c) => {
		c.continue();
		c.isIncursionMod = true;
	}, (e) => {
		e.outlineColour = Colour.CHAOS;
	});
}

// BiS ilvl
function bis(filter) {
	filter.multiBlock((c) => {
		c.continue();
		c.categories(CATEGORY.GEAR_COMMON, CATEGORY.JEWELLERY, CATEGORY.BELT);
		c.ilvl = new Comparison(LEVEL_BIS, OPERATOR.GTE);
	}, (c) => {
		c.continue();
		c.categories(CATEGORY.RELIC);
		c.ilvl = new Comparison(LEVEL_BIS_RELIC, OPERATOR.GTE);
	}, (c) => {
		c.continue();
		c.categories(CATEGORY.WAND, CATEGORY.STAFF, CATEGORY.CHARM);
		c.ilvl = new Comparison(LEVEL_BIS_WAND_STAFF, OPERATOR.GTE);
	}, (c) => {
		c.continue();
		c.categories(CATEGORY.FLASK);
		c.ilvl = new Comparison(LEVEL_BIS_FLASK, OPERATOR.GTE);
	}, (e) => {
		e.outlineColour = Colour.QUEST;
	});
}

// Good mods
function goodMods(filter) {
	filter.multiBlock((c) => {
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
		c.categories(CATEGORY.GEAR_UNCOMMON);
		c.goodModUncommon(true);
	}, (e) => {
		e.outlineColour = Colour.RARE;
	});
}

// Exceptional, or quality charm
function exceptional(filter) {
	// When both exceptional and corrupted, only outlines when sure it has exceptional-only stats,
	// else it retains the corrupted outline from above

	function perRarity(rarity, colourIndex) {
		filter.multiBlock((c) => {
			c.continue();
			c.categories(CATEGORY.CHARM);
			c.rarity = new Comparison(rarity);
			c.isCorrupted = false;
			c.hasQuality();
		}, (c) => {
			c.continue();
			c.rarity = new Comparison(rarity);
			c.isCorrupted = false;
			c.hasQuality(21);
		}, (c) => {
			c.continue();
			c.rarity = new Comparison(rarity);
			c.hasQuality(21);
			c.hasEnchant();
		}, (c) => {
			c.continue();
			c.rarity = new Comparison(rarity);
			c.hasQuality(24);
		}, (c) => {
			c.continue();
			c.categories(CATEGORY.GEAR_UNCOMMON);
			c.rarity = new Comparison(rarity);
			c.isCorrupted = false;
			c.hasSockets(1);
		}, (c) => {
			c.continue();
			c.categories(CATEGORY.GEAR_UNCOMMON);
			c.rarity = new Comparison(rarity);
			c.hasSockets(1);
			c.hasEnchant();
		}, (c) => {
			c.continue();
			c.categories(CATEGORY.SOCKET_ONE);
			c.rarity = new Comparison(rarity);
			c.isCorrupted = false;
			c.hasSockets(2);
		}, (c) => {
			c.continue();
			c.categories(CATEGORY.SOCKET_ONE);
			c.rarity = new Comparison(rarity);
			c.hasSockets(2);
			c.hasEnchant();
		}, (c) => {
			c.continue();
			c.categories(CATEGORY.SOCKET_TWO);
			c.rarity = new Comparison(rarity);
			c.isCorrupted = false;
			c.hasSockets(3);
		}, (c) => {
			c.continue();
			c.categories(CATEGORY.SOCKET_TWO);
			c.rarity = new Comparison(rarity);
			c.hasSockets(3);
			c.hasEnchant();
		}, (e) => {
			e.colour(colourIndex, PAIR_GEAR, true);
			e.sizeChance();
			e.outlineColour = Colour.UNIQUE;
		});
	}

	perRarity(RARITY.NORMAL, EffectSet.INDEX_WISDOM);
	perRarity(RARITY.MAGIC, EffectSet.INDEX_AUGMENT);
	perRarity(RARITY.RARE, EffectSet.INDEX_EXALT);
	perRarity(RARITY.UNIQUE, EffectSet.INDEX_CHANCE);
}
