import { CATEGORY } from "../conditions/category.js";
import { Comparison, OPERATOR } from "../conditions/comparison.js";
import { RARITY } from "../conditions/conditionSet.js";
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
	// Quality
	filter.multiWhitelist((c) => {
		c.hasQuality(15);
	});

	// Corrupted/exceptional
	filter.multiWhitelist((c) => { // Quality charm
		// If corrupted, require already overcapped quality below
		c.categories(CATEGORY.CHARM);
		c.isCorrupted = false;
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
	filter.multiWhitelist((c) => { // Enchanted rare+
		c.rarity = new Comparison(RARITY.RARE, OPERATOR.GTE);
		c.hasEnchant();
	}, (c) => { // Corrupted unique (potentially sanctified)
		c.rarity = new Comparison(RARITY.UNIQUE);
		c.isCorrupted = true;
	});

	// BiS ilvl works via explicit blacklist in hides section, alongside sizing whitelist in rarity section
	//TODO
	// filter.multiBlock((c) => {
	// 	c.categories([CATEGORY.MAIN_OTHER_CASTER, CATEGORY.CHARM]);
	// 	c.ilvl = new Comparison(81, OPERATOR.GTE);
	// }, (c) => {
	// 	// Outline as BiS regardless of drop level, but don't whitelist yet
	// 	c.continue();
	// 	// c.categories([CATEGORY.WEAPON_CLASS, CATEGORY.MAIN_OTHER_ATTACKER, CATEGORY.OFF_OTHER, CATEGORY.ARMOUR, CATEGORY.JEWELLERY, CATEGORY.BELT]);
	// 	c.categories([CATEGORY.GEAR_COMMON, CATEGORY.JEWELLERY, CATEGORY.BELT]);
	// 	c.ilvl = new Comparison(82, OPERATOR.GTE);
	// }, (c) => {
	// 	c.categories([CATEGORY.MAIN_CLASS, CATEGORY.OFF_OTHER_QUIVER, CATEGORY.JEWELLERY, CATEGORY.BELT]);
	// 	c.ilvl = new Comparison(82, OPERATOR.GTE);
	// }, (c) => {
	// 	c.categories(CATEGORY.BODY);
	// 	c.ilvl = new Comparison(82, OPERATOR.GTE);
	// 	c.dropLevel = new Comparison(65, OPERATOR.GTE);
	// }, (c) => {
	// 	c.categories(CATEGORY.MAIN_OTHER_ATTACKER);
	// 	c.ilvl = new Comparison(82, OPERATOR.GTE);
	// 	c.dropLevel = new Comparison(77, OPERATOR.GTE);
	// }, (c) => {
	// 	c.categories([CATEGORY.OFF_CLASS, CATEGORY.OFF_OTHER_BLOCK, CATEGORY.HELMET, CATEGORY.GLOVE, CATEGORY.BOOTS]);
	// 	c.ilvl = new Comparison(82, OPERATOR.GTE);
	// 	c.dropLevel = new Comparison(80, OPERATOR.GTE);
	// }, (c) => {
	// 	c.names = new Comparison(NameManager.getFlasksGood());
	// 	c.categories(CATEGORY.FLASK);
	// 	c.ilvl = new Comparison(83, OPERATOR.GTE);
	// }, (e) => {
	// 	e.outlineColour = Colour.WHITE;
	// });

	// Good base/mods
	filter.multiWhitelist((c) => {
		c.goodBase(true);
		c.categories(CATEGORY.GEAR);
	}, (c) => {
		c.categories(CATEGORY.MAIN);
		c.goodModMainhand(true);
	}, (c) => {
		c.categories(CATEGORY.OFF);
		c.goodModOffhand(true);
	}, (c) => {
		c.categories(CATEGORY.ARMOUR);
		c.goodModArmour(true);
	}, (c) => {
		c.categories(CATEGORY.JEWELLERY);
		c.goodModJewellery(true);
	});
}

function other(filter) {
	filter.multiWhitelist((c) => {
		c.isMaxTier();
	});
}

function rares(filter) {
	filter.multiWhitelist((c) => {
		c.rarity = new Comparison(RARITY.RARE, OPERATOR.GTE);
	});
}
