import { CATEGORY } from "../conditions/category.js";
import { Comparison } from "../conditions/comparison.js";
import { RARITY } from "../conditions/conditionSet.js";
import { NameManager, TIER } from "../conditions/nameManager.js";
import { OPERATOR } from "../conditions/operator.js";
import { PAIR_GEAR } from "../index.js";

// Stop filter here; never hide these. Then need not account for them when hiding
export function sectionWhitelist(filter, showRares) {
	chance(filter);

	outline(filter);

	other(filter);
	if (showRares) rares(filter);
}

// Chance bases
function chance(filter) {
	// Resize & whitelist
	filter.multiBlock((c) => {
		c.names = new Comparison("Viper Cap"); // Constricting Command
		c.categories(CATEGORY.HELMET);
		c.rarity = new Comparison(RARITY.NORMAL);
		c.isCorrupted = false;
	}, (e) => {
		e.colourWisdom(PAIR_GEAR, true).sizeExalt();
	});

	filter.multiBlock((c) => {
		c.names = new Comparison("Heavy Belt"); // Headhunter
		c.categories(CATEGORY.BELT);
		c.rarity = new Comparison(RARITY.NORMAL);
		c.isCorrupted = false;
	}, (c) => {
		c.names = new Comparison("Martyr Crown"); // Veil of the Night
		c.categories(CATEGORY.HELMET);
		c.rarity = new Comparison(RARITY.NORMAL);
		c.isCorrupted = false;
	}, (c) => {
		c.names = new Comparison("Silver Charm"); // The Fall of the Axe
		c.categories(CATEGORY.CHARM);
		c.rarity = new Comparison(RARITY.NORMAL);
		c.isCorrupted = false;
	}, (e) => {
		e.colourWisdom(PAIR_GEAR, true).sizeChance();
	});
}

// Whitelist logic for items from outline section
function outline(filter) {
	// Corrupted/exceptional
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

	// BiS ilvl works via explicit blacklist in hides section, alongside specific sizing in rarity section

	// Good base/mods
	filter.multiWhitelist((c) => {
		c.goodBase(true);
		c.categories(CATEGORY.GEAR);
	}, (c) => {
		c.names = new Comparison(NameManager.getMain(TIER.BAD, OPERATOR.GTE));
		c.categories(CATEGORY.MAIN);
		c.goodModMainhand(true);
	}, (c) => {
		c.names = new Comparison(NameManager.getOff(TIER.BAD, OPERATOR.GTE));
		c.categories(CATEGORY.OFF);
		c.goodModOffhand(true);
	}, (c) => {
		c.names = new Comparison(NameManager.getArmour(TIER.BAD, OPERATOR.GTE));
		c.categories(CATEGORY.ARMOUR);
		c.goodModArmour(true);
	}, (c) => {
		//TODO
		c.categories(CATEGORY.JEWELLERY);
		c.goodModJewellery(true);
	});
}

function other(filter) {
	filter.multiWhitelist((c) => {
		c.names = new Comparison(NameManager.getMain(TIER.BAD, OPERATOR.GTE));
		c.categories(CATEGORY.MAIN);
		c.isMaxTier();
	}, (c) => {
		c.names = new Comparison(NameManager.getOff(TIER.BAD, OPERATOR.GTE));
		c.categories(CATEGORY.OFF);
		c.isMaxTier();
	}, (c) => {
		c.names = new Comparison(NameManager.getArmour(TIER.BAD, OPERATOR.GTE));
		c.categories(CATEGORY.ARMOUR);
		c.isMaxTier();
	}, (c) => {
		//TODO
		c.categories(CATEGORY.JEWELLERY, CATEGORY.BELT, CATEGORY.CHARM);
		c.isMaxTier();
	}, (c) => {
		c.names = new Comparison(NameManager.getFlasks(TIER.BAD, OPERATOR.GTE));
		c.categories(CATEGORY.FLASK);
		c.isMaxTier();
	});
}

function rares(filter) {
	filter.multiWhitelist((c) => {
		c.rarity = new Comparison(RARITY.RARE, OPERATOR.GTE);
	});
}
