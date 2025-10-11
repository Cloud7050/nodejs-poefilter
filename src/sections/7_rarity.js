import { CATEGORY } from "../conditions/category.js";
import { Comparison } from "../conditions/comparison.js";
import { RARITY } from "../conditions/conditionSet.js";
import { PAIR_GEAR, PAIR_JEWEL, PAIR_MECHANIC, PAIR_QUESTLIKE } from "../index.js";

export function sectionRarity(filter) {
	reset(filter);

	classWeapons(filter);
	otherWeapons(filter);
	classArmour(filter);
	otherArmour(filter);
	uncommon(filter);
	jewels(filter);
	waystones(filter);
	mechanics(filter);
}

// Style reset per rarity
function reset(filter) {
	// Normal
	filter.block((c, e) => {
		c.continue();
		c.category = new Comparison(CATEGORY.GEAR_COMMON);
		c.rarity = new Comparison(RARITY.NORMAL);

		e.colourWisdom(PAIR_GEAR).sizeWisdom();
	});
	filter.block((c, e) => {
		c.continue();
		c.category = new Comparison(CATEGORY.GEAR_UNCOMMON);
		c.rarity = new Comparison(RARITY.NORMAL);

		e.colourWisdom(PAIR_GEAR).sizeAugment();
	});

	// Magic
	filter.block((c, e) => {
		c.continue();
		c.category = new Comparison(CATEGORY.GEAR_COMMON);
		c.rarity = new Comparison(RARITY.MAGIC);

		e.colourAugment(PAIR_GEAR).sizeWisdom();
	});
	filter.block((c, e) => {
		c.continue();
		c.category = new Comparison(CATEGORY.GEAR_UNCOMMON);
		c.rarity = new Comparison(RARITY.MAGIC);

		e.colourAugment(PAIR_GEAR).sizeAugment();
	});

	// Rare
	filter.block((c, e) => {
		c.continue();
		c.category = new Comparison(CATEGORY.GEAR_COMMON);
		c.rarity = new Comparison(RARITY.RARE);

		e.colourExalt(PAIR_GEAR).sizeAugment();
	});
	filter.block((c, e) => {
		c.continue();
		c.category = new Comparison(CATEGORY.GEAR_UNCOMMON);
		c.rarity = new Comparison(RARITY.RARE);

		e.colourExalt(PAIR_GEAR).sizeExalt();
	});

	// Unique
	filter.block((c, e) => {
		c.continue();
		c.category = new Comparison(CATEGORY.GEAR);
		c.rarity = new Comparison(RARITY.UNIQUE);

		e.colourChance(PAIR_GEAR).sizeChance();
	});
}

function classWeapons(filter) {
	// Normal
	filter.block((c, e) => { // Quality
		c.continue();
		c.category = new Comparison(CATEGORY.WEAPON_CLASS);
		c.rarity = new Comparison(RARITY.NORMAL);
		c.hasQuality();

		e.colourWisdom(PAIR_GEAR).sizeAugment();
	});

	// Magic
	filter.block((c, e) => { // Quality
		c.continue();
		c.category = new Comparison(CATEGORY.WEAPON_CLASS);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.hasQuality();

		e.colourAugment(PAIR_GEAR).sizeAugment();
	});
	filter.multiBlock((c) => { // Good mod (main class)
		c.continue();
		c.category = new Comparison(CATEGORY.MAIN_CLASS);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.goodModMainhand();
	}, (c) => { // Good mod (off class)
		c.continue();
		c.category = new Comparison(CATEGORY.OFF_CLASS);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.goodModOffhand();
	}, (e) => {
		e.colourAugment(PAIR_GEAR).sizeExalt();
	});

	// Rare
	filter.block((c, e) => {
		c.continue();
		c.category = new Comparison(CATEGORY.WEAPON_CLASS);
		c.rarity = new Comparison(RARITY.RARE);

		e.colourExalt(PAIR_GEAR).sizeExalt();
	});
}

function otherWeapons(filter) {
	// Magic
	filter.multiBlock((c) => { // Good mod (main other)
		c.continue();
		c.category = new Comparison(CATEGORY.MAIN_OTHER);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.goodModMainhand(true);
	}, (c) => { // Good mod (off other)
		c.continue();
		c.category = new Comparison(CATEGORY.OFF_OTHER);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.goodModOffhand(true);
	}, (e) => {
		e.colourAugment(PAIR_GEAR).sizeAugment();
	});

	// Rare
	filter.multiBlock((c) => { // Good mod (main other)
		c.continue();
		c.category = new Comparison(CATEGORY.MAIN_OTHER);
		c.rarity = new Comparison(RARITY.RARE);
		c.goodModMainhand(true);
	}, (c) => { // Good mod (off other)
		c.continue();
		c.category = new Comparison(CATEGORY.OFF_OTHER);
		c.rarity = new Comparison(RARITY.RARE);
		c.goodModOffhand(true);
	}, (e) => {
		e.colourExalt(PAIR_GEAR).sizeExalt();
	});
}

function classArmour(filter) {
	// Normal
	filter.block((c, e) => { // Quality
		c.continue();
		c.category = new Comparison(CATEGORY.ARMOUR_TOP);
		c.rarity = new Comparison(RARITY.NORMAL);
		c.hasQuality();
		c.onlyEnergyShield();

		e.colourWisdom(PAIR_GEAR).sizeAugment();
	});

	// Magic
	filter.block((c, e) => { // Quality
		c.continue();
		c.category = new Comparison(CATEGORY.ARMOUR_TOP);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.hasQuality();
		c.onlyEnergyShield();

		e.colourAugment(PAIR_GEAR).sizeAugment();
	});
	filter.block((c, e) => { // Good mod (class)
		c.continue();
		c.category = new Comparison(CATEGORY.ARMOUR_TOP);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.onlyEnergyShield();
		c.goodModArmour();

		e.colourAugment(PAIR_GEAR).sizeExalt();
	});

	// Rare
	filter.block((c, e) => {
		c.continue();
		c.category = new Comparison(CATEGORY.ARMOUR_TOP);
		c.rarity = new Comparison(RARITY.RARE);
		c.onlyEnergyShield();

		e.colourExalt(PAIR_GEAR).sizeExalt();
	});
}

function otherArmour(filter) {
	// Magic
	filter.multiBlock((c) => { // Good mod (top other)
		c.continue();
		c.category = new Comparison(CATEGORY.ARMOUR_TOP);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.hasArmour();
		c.goodModArmour(true);
	}, (c) => { // Good mod (top other)
		c.continue();
		c.category = new Comparison(CATEGORY.ARMOUR_TOP);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.hasEvasion();
		c.goodModArmour(true);
	}, (c) => { // Good mod (boots other)
		c.continue();
		c.category = new Comparison(CATEGORY.BOOTS);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.goodModArmour(true);
	}, (e) => {
		e.colourAugment(PAIR_GEAR).sizeAugment();
	});

	// Rare
	filter.multiBlock((c) => { // Good mod (top other)
		c.continue();
		c.category = new Comparison(CATEGORY.ARMOUR_TOP);
		c.rarity = new Comparison(RARITY.RARE);
		c.hasArmour();
		c.goodModArmour(true);
	}, (c) => { // Good mod (top other)
		c.continue();
		c.category = new Comparison(CATEGORY.ARMOUR_TOP);
		c.rarity = new Comparison(RARITY.RARE);
		c.hasEvasion();
		c.goodModArmour(true);
	}, (c) => { // Good mod (boots other)
		c.continue();
		c.category = new Comparison(CATEGORY.BOOTS);
		c.rarity = new Comparison(RARITY.RARE);
		c.goodModArmour(true);
	}, (e) => {
		e.colourExalt(PAIR_GEAR).sizeExalt();
	});
}

// Less common gear
function uncommon(filter) {
	// Normal
	filter.multiBlock((c) => { // Good main (class)
		c.continue();
		c.category = new Comparison(CATEGORY.GEAR_UNCOMMON);
		c.rarity = new Comparison(RARITY.NORMAL);
		c.goodMain();
	}, (c) => { // Normal belts
		c.continue();
		c.category = new Comparison(CATEGORY.BELT);
		c.rarity = new Comparison(RARITY.NORMAL);
	}, (e) => {
		e.colourWisdom(PAIR_GEAR).sizeExalt();
	});
	filter.block((c, e) => { // Normal heavy belts
		c.continue();
		c.names = new Comparison("Heavy Belt");
		c.category = new Comparison(CATEGORY.BELT);
		c.rarity = new Comparison(RARITY.NORMAL);

		e.colourWisdom(PAIR_GEAR).sizeChance();
	});

	// Magic
	filter.multiBlock((c) => { // Good main (class)
		c.continue();
		c.category = new Comparison(CATEGORY.GEAR_UNCOMMON);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.goodMain();
	}, (c) => { // Good mod (class)
		c.continue();
		c.category = new Comparison(CATEGORY.GEAR_UNCOMMON);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.goodModJewellery();
	}, (e) => {
		e.colourAugment(PAIR_GEAR).sizeExalt();
	});
}

function jewels(filter) {
	filter.block((c, e) => {
		c.continue();
		c.category = new Comparison(CATEGORY.JEWEL);
		c.rarity = new Comparison(RARITY.MAGIC);

		e.colourAugment(PAIR_JEWEL).sizeExalt();
	});
	filter.block((c, e) => {
		c.continue();
		c.category = new Comparison(CATEGORY.JEWEL);
		c.rarity = new Comparison(RARITY.RARE);

		e.colourExalt(PAIR_JEWEL).sizeExalt();
	});
	filter.block((c, e) => {
		c.continue();
		c.category = new Comparison(CATEGORY.JEWEL);
		c.rarity = new Comparison(RARITY.UNIQUE);

		e.colourChance(PAIR_JEWEL).sizeChance();
	});
}

function waystones(filter) {
	filter.block((c, e) => {
		c.continue();
		c.category = new Comparison(CATEGORY.WAYSTONE);
		c.rarity = new Comparison(RARITY.NORMAL);

		e.colourWisdom(PAIR_QUESTLIKE).sizeExalt();
	});
	filter.block((c, e) => {
		c.continue();
		c.category = new Comparison(CATEGORY.WAYSTONE);
		c.rarity = new Comparison(RARITY.MAGIC);

		e.colourAugment(PAIR_QUESTLIKE).sizeExalt();
	});
	filter.block((c, e) => {
		c.continue();
		c.category = new Comparison(CATEGORY.WAYSTONE);
		c.rarity = new Comparison(RARITY.RARE);

		e.colourExalt(PAIR_QUESTLIKE).sizeExalt();
	});
	filter.block((c, e) => {
		c.continue();
		c.category = new Comparison(CATEGORY.WAYSTONE);
		c.rarity = new Comparison(RARITY.UNIQUE);

		e.colourChance(PAIR_QUESTLIKE).sizeChance();
	});
}

// Tablets/relics
function mechanics(filter) {
	filter.block((c, e) => {
		c.continue();
		c.category = new Comparison([CATEGORY.TABLET]);
		c.rarity = new Comparison(RARITY.NORMAL);

		e.colourWisdom(PAIR_MECHANIC).sizeExalt();
	});
	filter.block((c, e) => {
		c.continue();
		c.category = new Comparison([CATEGORY.TABLET, CATEGORY.RELIC]);
		c.rarity = new Comparison(RARITY.MAGIC);

		e.colourAugment(PAIR_MECHANIC).sizeExalt();
	});
	filter.block((c, e) => {
		c.continue();
		c.category = new Comparison(CATEGORY.TABLET);
		c.rarity = new Comparison(RARITY.RARE);

		e.colourExalt(PAIR_MECHANIC).sizeExalt();
	});
	filter.block((c, e) => {
		c.continue();
		c.category = new Comparison([CATEGORY.TABLET, CATEGORY.RELIC]);
		c.rarity = new Comparison(RARITY.UNIQUE);

		e.colourChance(PAIR_MECHANIC).sizeChance();
	});
}
