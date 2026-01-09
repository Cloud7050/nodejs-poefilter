import { CATEGORY } from "../conditions/category.js";
import { Comparison } from "../conditions/comparison.js";
import { RARITY } from "../conditions/conditionSet.js";
import { NameManager } from "../conditions/nameManager.js";
import { OPERATOR } from "../conditions/operator.js";
import { LEVEL_BIS_LAKE, LEVEL_BIS_VESSEL, LEVEL_HEAVY_BELT, LEVEL_T15, PAIR_GEAR, VALUE_BAD } from "../constants.js";
import { EffectSet } from "../effects/effectSet.js";

// Stop filter here; never hide these. Then need not account for them when hiding
export function sectionWhitelist(filter, isGoldRares) {
	leveling(filter);

	chance(filter);
	special(filter);

	other(filter);

	outline(filter);

	if (isGoldRares) goldRares(filter);
}

function leveling(filter) {
	// Fodder for salvage/disenchant
	filter.multiWhitelist((c) => { // Sockets
		c.areaLevel = new Comparison(LEVEL_T15, OPERATOR.LT);
		c.hasSockets(1);
	}, (c) => { // Quality (normally under outline section)
		c.areaLevel = new Comparison(LEVEL_T15, OPERATOR.LT);
		c.hasQuality(5);
	}, (c) => { // Any uniques for chance shards
		c.areaLevel = new Comparison(LEVEL_T15, OPERATOR.LT);
		c.rarity = new Comparison(RARITY.UNIQUE);
	});
}

// Chance bases
function chance(filter) {
	// Resize & whitelist
	filter.multiBlock((c) => { // Omen of the Ancients → Heavy Belt // https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/D6QzEE7dH5
		c.categories(CATEGORY.BELT);
		c.rarity = new Comparison(RARITY.NORMAL);
		c.ilvl = new Comparison(LEVEL_HEAVY_BELT, OPERATOR.GTE);
		c.isCorrupted = false;
	}, (e) => {
		e.colourWisdom(PAIR_GEAR).sizeForPrice(9);
	});

	filter.priceBlocks((c, e, min, max, effect) => {
		c.names = new Comparison(NameManager.getChanceBases(VALUE_BAD).value(min, max));
		c.rarity = new Comparison(RARITY.NORMAL);
		c.isCorrupted = false;

		effect(PAIR_GEAR, EffectSet.INDEX_WISDOM);
	});
}

// Drops from specific content
function special(filter) {
	filter.multiWhitelist((c) => {
		c.names = new Comparison(NameManager.getGear().isSpecial());
		c.ilvl = new Comparison(LEVEL_BIS_LAKE, OPERATOR.GTE);
	}, (c) => {
		c.names = new Comparison(NameManager.getUniques().isSpecial());
		c.ilvl = new Comparison(LEVEL_BIS_VESSEL, OPERATOR.GTE);
	});
}

function other(filter) {
	// High tier
	filter.multiWhitelist((c) => {
		c.names = new Comparison(NameManager.getGear(null, VALUE_BAD));
		c.isMaxTier();
	});
}

// Whitelist logic for items from outline section
function outline(filter) {
	// Corrupted (or possibly exceptional)
	filter.multiWhitelist((c) => { // Quality charm
		c.categories(CATEGORY.CHARM);
		c.hasQuality();
	}, (c) => { // Excess quality
		c.hasQuality(21);
	}, (c) => { // Extra sockets
		c.categories(CATEGORY.SOCKET_ONE);
		c.hasSockets(2);
	}, (c) => { // Extra sockets
		c.categories(CATEGORY.SOCKET_TWO);
		c.hasSockets(3);
	});

	// Corrupted
	filter.multiWhitelist((c) => { // Enchanted rare with at least 4 mods
		c.rarity = new Comparison(RARITY.RARE);
		c.hasEnchant();
		c.hasModCount(4, OPERATOR.GTE);
	}, (c) => { // Enchanted unique
		c.rarity = new Comparison(RARITY.UNIQUE);
		c.hasEnchant();
	}, (c) => { // Corrupted unique (potentially sanctified)
		c.rarity = new Comparison(RARITY.UNIQUE);
		c.isCorrupted = true;
	});

	// Incursion
	filter.multiWhitelist((c) => {
		c.isCorruptedTwice = true;
	}, (c) => {
		c.isIncursionMod = true;
	});

	// BiS ilvl works via explicit blacklist in hides section, alongside specific sizing in rarity section

	// Good mods
	filter.multiWhitelist((c) => {
		c.categories(CATEGORY.MAIN);
		c.names = new Comparison(NameManager.getGear(c, VALUE_BAD));
		c.goodModMainhand(true);
	}, (c) => {
		c.categories(CATEGORY.OFF);
		c.names = new Comparison(NameManager.getGear(c, VALUE_BAD));
		c.goodModOffhand(true);
	}, (c) => {
		c.categories(CATEGORY.ARMOUR);
		c.names = new Comparison(NameManager.getGear(c, VALUE_BAD));
		c.goodModArmour(true);
	}, (c) => {
		c.categories(CATEGORY.GEAR_UNCOMMON);
		c.names = new Comparison(NameManager.getGear(c, VALUE_BAD));
		c.goodModUncommon(true);
	});
}

function goldRares(filter) {
	filter.multiWhitelist((c) => {
		c.rarity = new Comparison(RARITY.RARE);
		c.categories(
			// Quivers don't tend to sell for much, for their size
			CATEGORY.GEAR.subtract(CATEGORY.QUIVER)
		);
	}, (c) => {
		c.rarity = new Comparison(RARITY.UNIQUE);
		// Include small-sized uniques to fill inv
		c.categories(CATEGORY.GEAR_UNCOMMON);
	});
}
