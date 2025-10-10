import { Comparison } from "../conditions/comparison.js";
import { CATEGORY, RARITY } from "../conditions/conditionSet.js";
import { StringList } from "../conditions/stringList.js";
import { GEAR_COLOUR, GEAR_PRESET, JEWEL_COLOUR, JEWEL_PRESET, MECHANIC_COLOUR, MECHANIC_PRESET, QUESTLIKE_COLOUR, QUESTLIKE_PRESET } from "../index.js";

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
		c.category = new Comparison(new StringList(CATEGORY.MAIN_CLASS, CATEGORY.OFF_CLASS, CATEGORY.MAIN_OTHER, CATEGORY.OFF_OTHER, CATEGORY.ARMOUR_TOP, CATEGORY.BOOTS));
		c.rarity = new Comparison(RARITY.NORMAL);

		e.colourWisdom(GEAR_COLOUR, GEAR_PRESET).sizeWisdom();
	});
	filter.block((c, e) => {
		c.continue();
		c.category = new Comparison(new StringList(CATEGORY.JEWELLERY, CATEGORY.BELT, CATEGORY.FLASK, CATEGORY.CHARM));
		c.rarity = new Comparison(RARITY.NORMAL);

		e.colourWisdom(GEAR_COLOUR, GEAR_PRESET).sizeAugment();
	});

	// Magic
	filter.block((c, e) => {
		c.continue();
		c.category = new Comparison(new StringList(CATEGORY.MAIN_CLASS, CATEGORY.OFF_CLASS, CATEGORY.MAIN_OTHER, CATEGORY.OFF_OTHER, CATEGORY.ARMOUR_TOP, CATEGORY.BOOTS));
		c.rarity = new Comparison(RARITY.MAGIC);

		e.colourAugment(GEAR_COLOUR, GEAR_PRESET).sizeWisdom();
	});
	filter.block((c, e) => {
		c.continue();
		c.category = new Comparison(new StringList(CATEGORY.JEWELLERY, CATEGORY.BELT, CATEGORY.FLASK, CATEGORY.CHARM));
		c.rarity = new Comparison(RARITY.MAGIC);

		e.colourAugment(GEAR_COLOUR, GEAR_PRESET).sizeAugment();
	});

	// Rare
	filter.block((c, e) => {
		c.continue();
		c.category = new Comparison(new StringList(CATEGORY.MAIN_CLASS, CATEGORY.OFF_CLASS, CATEGORY.MAIN_OTHER, CATEGORY.OFF_OTHER, CATEGORY.ARMOUR_TOP, CATEGORY.BOOTS));
		c.rarity = new Comparison(RARITY.RARE);

		e.colourExalt(GEAR_COLOUR, GEAR_PRESET).sizeAugment();
	});
	filter.block((c, e) => {
		c.continue();
		c.category = new Comparison(new StringList(CATEGORY.JEWELLERY, CATEGORY.BELT, CATEGORY.FLASK, CATEGORY.CHARM));
		c.rarity = new Comparison(RARITY.RARE);

		e.colourExalt(GEAR_COLOUR, GEAR_PRESET).sizeExalt();
	});

	// Unique
	filter.block((c, e) => {
		c.continue();
		c.category = new Comparison(new StringList(CATEGORY.MAIN_CLASS, CATEGORY.OFF_CLASS, CATEGORY.MAIN_OTHER, CATEGORY.OFF_OTHER, CATEGORY.ARMOUR_TOP, CATEGORY.BOOTS, CATEGORY.JEWELLERY, CATEGORY.BELT, CATEGORY.FLASK, CATEGORY.CHARM));
		c.rarity = new Comparison(RARITY.UNIQUE);

		e.colourChance(GEAR_COLOUR, GEAR_PRESET).sizeChance();
	});
}

function classWeapons(filter) {
	// Normal
	filter.block((c, e) => { // Quality
		c.continue();
		c.category = new Comparison(new StringList(CATEGORY.MAIN_CLASS, CATEGORY.OFF_CLASS));
		c.rarity = new Comparison(RARITY.NORMAL);
		c.hasQuality();

		e.colourWisdom(GEAR_COLOUR, GEAR_PRESET).sizeAugment();
	});

	// Magic
	filter.block((c, e) => { // Quality
		c.continue();
		c.category = new Comparison(new StringList(CATEGORY.MAIN_CLASS, CATEGORY.OFF_CLASS));
		c.rarity = new Comparison(RARITY.MAGIC);
		c.hasQuality();

		e.colourAugment(GEAR_COLOUR, GEAR_PRESET).sizeAugment();
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
		e.colourAugment(GEAR_COLOUR, GEAR_PRESET).sizeExalt();
	});

	// Rare
	filter.block((c, e) => {
		c.continue();
		c.category = new Comparison(new StringList(CATEGORY.MAIN_CLASS, CATEGORY.OFF_CLASS));
		c.rarity = new Comparison(RARITY.RARE);

		e.colourExalt(GEAR_COLOUR, GEAR_PRESET).sizeExalt();
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
		e.colourAugment(GEAR_COLOUR, GEAR_PRESET).sizeAugment();
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
		e.colourExalt(GEAR_COLOUR, GEAR_PRESET).sizeExalt();
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

		e.colourWisdom(GEAR_COLOUR, GEAR_PRESET).sizeAugment();
	});

	// Magic
	filter.block((c, e) => { // Quality
		c.continue();
		c.category = new Comparison(CATEGORY.ARMOUR_TOP);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.hasQuality();
		c.onlyEnergyShield();

		e.colourAugment(GEAR_COLOUR, GEAR_PRESET).sizeAugment();
	});
	filter.block((c, e) => { // Good mod (class)
		c.continue();
		c.category = new Comparison(CATEGORY.ARMOUR_TOP);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.onlyEnergyShield();
		c.goodModArmour();

		e.colourAugment(GEAR_COLOUR, GEAR_PRESET).sizeExalt();
	});

	// Rare
	filter.block((c, e) => {
		c.continue();
		c.category = new Comparison(CATEGORY.ARMOUR_TOP);
		c.rarity = new Comparison(RARITY.RARE);
		c.onlyEnergyShield();

		e.colourExalt(GEAR_COLOUR, GEAR_PRESET).sizeExalt();
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
		e.colourAugment(GEAR_COLOUR, GEAR_PRESET).sizeAugment();
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
		e.colourExalt(GEAR_COLOUR, GEAR_PRESET).sizeExalt();
	});
}

// Less common gear
function uncommon(filter) {
	// Normal
	filter.multiBlock((c) => { // Good main (class)
		c.continue();
		c.category = new Comparison(new StringList(CATEGORY.JEWELLERY, CATEGORY.BELT, CATEGORY.FLASK, CATEGORY.CHARM));
		c.rarity = new Comparison(RARITY.NORMAL);
		c.goodMain();
	}, (c) => { // Normal belts
		c.continue();
		c.category = new Comparison(CATEGORY.BELT);
		c.rarity = new Comparison(RARITY.NORMAL);
	}, (c) => { // Normal best flasks
		c.continue();
		c.names = new Comparison(new StringList("Ultimate Life Flask", "Ultimate Mana Flask"));
		c.category = new Comparison(CATEGORY.FLASK);
		c.rarity = new Comparison(RARITY.NORMAL);
	}, (e) => {
		e.colourWisdom(GEAR_COLOUR, GEAR_PRESET).sizeExalt();
	});
	filter.block((c, e) => { // Normal heavy belts
		c.continue();
		c.names = new Comparison("Heavy Belt");
		c.category = new Comparison(CATEGORY.BELT);
		c.rarity = new Comparison(RARITY.NORMAL);

		e.colourWisdom(GEAR_COLOUR, GEAR_PRESET).sizeChance();
	});

	// Magic
	filter.multiBlock((c) => { // Good main (class)
		c.continue();
		c.category = new Comparison(new StringList(CATEGORY.JEWELLERY, CATEGORY.BELT, CATEGORY.FLASK, CATEGORY.CHARM));
		c.rarity = new Comparison(RARITY.MAGIC);
		c.goodMain();
	}, (c) => { // Good mod (class)
		c.continue();
		c.category = new Comparison(new StringList(CATEGORY.JEWELLERY, CATEGORY.BELT, CATEGORY.FLASK, CATEGORY.CHARM));
		c.rarity = new Comparison(RARITY.MAGIC);
		c.goodModJewellery();
	}, (c) => { // Magic best flasks
		c.continue();
		c.names = new Comparison(new StringList("Ultimate Life Flask", "Ultimate Mana Flask"));
		c.category = new Comparison(CATEGORY.FLASK);
		c.rarity = new Comparison(RARITY.MAGIC);
	}, (e) => {
		e.colourAugment(GEAR_COLOUR, GEAR_PRESET).sizeExalt();
	});
}

function jewels(filter) {
	filter.block((c, e) => {
		c.continue();
		c.category = new Comparison(CATEGORY.JEWEL);
		c.rarity = new Comparison(RARITY.MAGIC);

		e.colourAugment(JEWEL_COLOUR, JEWEL_PRESET).sizeExalt();
	});
	filter.block((c, e) => {
		c.continue();
		c.category = new Comparison(CATEGORY.JEWEL);
		c.rarity = new Comparison(RARITY.RARE);

		e.colourExalt(JEWEL_COLOUR, JEWEL_PRESET).sizeExalt();
	});
	filter.block((c, e) => {
		c.continue();
		c.category = new Comparison(CATEGORY.JEWEL);
		c.rarity = new Comparison(RARITY.UNIQUE);

		e.colourChance(JEWEL_COLOUR, JEWEL_PRESET).sizeChance();
	});
}

function waystones(filter) {
	filter.block((c, e) => {
		c.continue();
		c.category = new Comparison(CATEGORY.WAYSTONE);
		c.rarity = new Comparison(RARITY.NORMAL);

		e.colourWisdom(QUESTLIKE_COLOUR, QUESTLIKE_PRESET).sizeAugment();
	});
	filter.block((c, e) => {
		c.continue();
		c.category = new Comparison(CATEGORY.WAYSTONE);
		c.rarity = new Comparison(RARITY.MAGIC);

		e.colourAugment(QUESTLIKE_COLOUR, QUESTLIKE_PRESET).sizeExalt();
	});
	filter.block((c, e) => {
		c.continue();
		c.category = new Comparison(CATEGORY.WAYSTONE);
		c.rarity = new Comparison(RARITY.RARE);

		e.colourExalt(QUESTLIKE_COLOUR, QUESTLIKE_PRESET).sizeExalt();
	});
	filter.block((c, e) => {
		c.continue();
		c.category = new Comparison(CATEGORY.WAYSTONE);
		c.rarity = new Comparison(RARITY.UNIQUE);

		e.colourChance(QUESTLIKE_COLOUR, QUESTLIKE_PRESET).sizeChance();
	});
}

// Tablets/relics
function mechanics(filter) {
	filter.block((c, e) => {
		c.continue();
		c.category = new Comparison(new StringList(CATEGORY.TABLET));
		c.rarity = new Comparison(RARITY.NORMAL);

		e.colourWisdom(MECHANIC_COLOUR, MECHANIC_PRESET).sizeAugment();
	});
	filter.block((c, e) => {
		c.continue();
		c.category = new Comparison(new StringList(CATEGORY.TABLET, CATEGORY.RELIC));
		c.rarity = new Comparison(RARITY.MAGIC);

		e.colourAugment(MECHANIC_COLOUR, MECHANIC_PRESET).sizeExalt();
	});
	filter.block((c, e) => {
		c.continue();
		c.category = new Comparison(CATEGORY.TABLET);
		c.rarity = new Comparison(RARITY.RARE);

		e.colourExalt(MECHANIC_COLOUR, MECHANIC_PRESET).sizeExalt();
	});
	filter.block((c, e) => {
		c.continue();
		c.category = new Comparison(new StringList(CATEGORY.TABLET, CATEGORY.RELIC));
		c.rarity = new Comparison(RARITY.UNIQUE);

		e.colourChance(MECHANIC_COLOUR, MECHANIC_PRESET).sizeChance();
	});
}
