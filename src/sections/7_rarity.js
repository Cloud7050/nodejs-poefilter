import { CATEGORY, CATEGORY_CUSTOM } from "../conditions/category.js";
import { Comparison } from "../conditions/comparison.js";
import { RARITY } from "../conditions/conditionSet.js";
import { NameManager } from "../conditions/nameManager.js";
import { OPERATOR } from "../conditions/operator.js";
import { LEVEL_BIS_FLASK, PAIR_GEAR, PAIR_JEWEL, PAIR_MAP1, PAIR_MAPLIKE, SIZE_JEWEL_MAGIC, SIZE_JEWEL_RARE, SIZE_MAGIC, SIZE_NORMAL, SIZE_RARE } from "../constants.js";
import { EffectSet } from "../effects/effectSet.js";

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

		e.colourWisdom(PAIR_GEAR).size(SIZE_NORMAL);
	});

	// Magic
	filter.block((c, e) => { // Low tier
		c.continue();
		c.categories(CATEGORY.GEAR);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.isLowTier();

		e.colourAugment(PAIR_GEAR).size(SIZE_MAGIC);
	});
	filter.block((c, e) => { // Max tier
		c.continue();
		c.categories(CATEGORY.GEAR);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.isMaxTier();

		e.colourAugment(PAIR_GEAR).sizeCapped(SIZE_MAGIC + 1);
	});

	// Rare
	filter.block((c, e) => { // Low tier
		c.continue();
		c.categories(CATEGORY.GEAR);
		c.rarity = new Comparison(RARITY.RARE);
		c.isLowTier();

		e.colourExalt(PAIR_GEAR).size(SIZE_RARE);
	});
	filter.block((c, e) => { // Max tier
		c.continue();
		c.categories(CATEGORY.GEAR);
		c.rarity = new Comparison(RARITY.RARE);
		c.isMaxTier();

		e.colourExalt(PAIR_GEAR).sizeCapped(SIZE_RARE + 1);
	});

	// Unique
	filter.block((c, e) => {
		c.continue();
		c.categories(CATEGORY.GEAR);
		c.rarity = new Comparison(RARITY.UNIQUE);

		e.colourChance(PAIR_GEAR).sizeChance();
	});
	filter.priceBlocks((c, e, min, max, effect) => {
		c.continue();
		c.categories(CATEGORY.GEAR);
		c.names = new Comparison(NameManager.getUniques(min, max));
		c.rarity = new Comparison(RARITY.UNIQUE);

		effect(PAIR_GEAR, EffectSet.INDEX_CHANCE);
	});
}

function classWeapons(filter) {
	// Normal
	filter.multiBlock((c) => {
		c.continue();
		c.categories(CATEGORY.WEAPON_CLASS);
		c.rarity = new Comparison(RARITY.NORMAL);
	}, (e) => {
		e.colourWisdom(PAIR_GEAR).sizeCapped(SIZE_NORMAL + 1);
	});

	// Magic
	filter.multiBlock((c) => { // Low tier
		c.continue();
		c.categories(CATEGORY.WEAPON_CLASS);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.isLowTier();
	}, (e) => {
		e.colourAugment(PAIR_GEAR).sizeCapped(SIZE_MAGIC + 1);
	});

	filter.multiBlock((c) => { // Max tier
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
		e.colourAugment(PAIR_GEAR).sizeCapped(SIZE_MAGIC + 2);
	});

	// Rare
	filter.multiBlock((c) => { // Low tier
		c.continue();
		c.categories(CATEGORY.WEAPON_CLASS);
		c.rarity = new Comparison(RARITY.RARE);
		c.isLowTier();
	}, (e) => {
		e.colourExalt(PAIR_GEAR).sizeCapped(SIZE_RARE + 1);
	});

	filter.multiBlock((c) => { // Max tier
		c.continue();
		c.categories(CATEGORY.WEAPON_CLASS);
		c.rarity = new Comparison(RARITY.RARE);
		c.isMaxTier();
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
		e.colourExalt(PAIR_GEAR).sizeCapped(SIZE_RARE + 2);
	});
}

function otherWeapons(filter) {
	// Magic
	filter.multiBlock((c) => { // Good mod (other mainhand)
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
		e.colourAugment(PAIR_GEAR).sizeCapped(SIZE_MAGIC + 1);
	});

	// Rare
	filter.multiBlock((c) => { // Good mod (other mainhand)
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
		e.colourExalt(PAIR_GEAR).sizeCapped(SIZE_RARE + 1);
	});
}

function classArmour(filter) {
	// Normal
	filter.multiBlock((c) => {
		c.continue();
		c.categories(CATEGORY.ARMOUR);
		c.names = new Comparison(NameManager.getGear(CATEGORY_CUSTOM.ARMOUR_CLASS));
		c.rarity = new Comparison(RARITY.NORMAL);
	}, (e) => {
		e.colourWisdom(PAIR_GEAR).sizeCapped(SIZE_NORMAL + 1);
	});

	// Magic
	filter.multiBlock((c) => { // Low tier
		c.continue();
		c.categories(CATEGORY.ARMOUR);
		c.names = new Comparison(NameManager.getGear(CATEGORY_CUSTOM.ARMOUR_CLASS));
		c.rarity = new Comparison(RARITY.MAGIC);
		c.isLowTier();
	}, (e) => {
		e.colourAugment(PAIR_GEAR).sizeCapped(SIZE_MAGIC + 1);
	});

	filter.multiBlock((c) => { // Max tier
		c.continue();
		c.categories(CATEGORY.ARMOUR);
		c.names = new Comparison(NameManager.getGear(CATEGORY_CUSTOM.ARMOUR_CLASS));
		c.rarity = new Comparison(RARITY.MAGIC);
		c.isMaxTier();
	}, (c) => { // Good mod (class)
		c.continue();
		c.categories(CATEGORY.ARMOUR);
		c.names = new Comparison(NameManager.getGear(CATEGORY_CUSTOM.ARMOUR_CLASS));
		c.rarity = new Comparison(RARITY.MAGIC);
		c.goodModArmour();
	}, (e) => {
		e.colourAugment(PAIR_GEAR).sizeCapped(SIZE_MAGIC + 2);
	});

	// Rare
	filter.multiBlock((c) => { // Low tier
		c.continue();
		c.categories(CATEGORY.ARMOUR);
		c.names = new Comparison(NameManager.getGear(CATEGORY_CUSTOM.ARMOUR_CLASS));
		c.rarity = new Comparison(RARITY.RARE);
		c.isLowTier();
	}, (e) => {
		e.colourExalt(PAIR_GEAR).sizeCapped(SIZE_RARE + 1);
	});

	filter.multiBlock((c) => { // Max tier
		c.continue();
		c.categories(CATEGORY.ARMOUR);
		c.names = new Comparison(NameManager.getGear(CATEGORY_CUSTOM.ARMOUR_CLASS));
		c.rarity = new Comparison(RARITY.RARE);
		c.isMaxTier();
	}, (c) => { // Good mod (class)
		c.continue();
		c.categories(CATEGORY.ARMOUR);
		c.names = new Comparison(NameManager.getGear(CATEGORY_CUSTOM.ARMOUR_CLASS));
		c.rarity = new Comparison(RARITY.RARE);
		c.goodModArmour();
	}, (e) => {
		e.colourExalt(PAIR_GEAR).sizeCapped(SIZE_RARE + 2);
	});
}

function otherArmour(filter) {
	// Magic
	filter.multiBlock((c) => { // Good mod (other)
		c.continue();
		c.categories(CATEGORY.ARMOUR);
		c.names = new Comparison(NameManager.getGear(CATEGORY_CUSTOM.ARMOUR_OTHER));
		c.rarity = new Comparison(RARITY.MAGIC);
		c.goodModArmour(true);
	}, (e) => {
		e.colourAugment(PAIR_GEAR).sizeCapped(SIZE_MAGIC + 1);
	});

	// Rare
	filter.multiBlock((c) => { // Good mod (other)
		c.continue();
		c.categories(CATEGORY.ARMOUR);
		c.names = new Comparison(NameManager.getGear(CATEGORY_CUSTOM.ARMOUR_OTHER));
		c.rarity = new Comparison(RARITY.RARE);
		c.goodModArmour(true);
	}, (e) => {
		e.colourExalt(PAIR_GEAR).sizeCapped(SIZE_RARE + 1);
	});
}

//TODO mark specific uncommons as class() once decided
function classUncommon(filter) {
	// Normal
	filter.multiBlock((c) => {
		c.continue();
		c.categories(CATEGORY.GEAR_UNCOMMON);
		c.names = new Comparison(NameManager.getGear(c).isClass());
		c.rarity = new Comparison(RARITY.NORMAL);
	}, (e) => {
		e.colourWisdom(PAIR_GEAR).sizeCapped(SIZE_NORMAL + 1);
	});

	filter.multiBlock((c) => { // BiS ilvl (flask)
		c.continue();
		c.categories(CATEGORY.FLASK);
		c.names = new Comparison(NameManager.getGear(c));
		c.rarity = new Comparison(RARITY.NORMAL);
		c.ilvl = new Comparison(LEVEL_BIS_FLASK, OPERATOR.GTE);
	}, (e) => {
		e.colourWisdom(PAIR_GEAR).sizeChance();
	});

	// Magic
	filter.multiBlock((c) => { // Low tier
		c.continue();
		c.categories(CATEGORY.GEAR_UNCOMMON);
		c.names = new Comparison(NameManager.getGear(c).isClass());
		c.rarity = new Comparison(RARITY.MAGIC);
		c.isLowTier();
	}, (e) => {
		e.colourAugment(PAIR_GEAR).sizeCapped(SIZE_MAGIC + 1);
	});

	filter.multiBlock((c) => { // Max tier
		c.continue();
		c.categories(CATEGORY.GEAR_UNCOMMON);
		c.names = new Comparison(NameManager.getGear(c).isClass());
		c.rarity = new Comparison(RARITY.MAGIC);
		c.isMaxTier();
	}, (c) => { // Good mod (class)
		c.continue();
		c.categories(CATEGORY.GEAR_UNCOMMON);
		c.names = new Comparison(NameManager.getGear(c).isClass());
		c.rarity = new Comparison(RARITY.MAGIC);
		c.goodModUncommon();
	}, (e) => {
		e.colourAugment(PAIR_GEAR).sizeCapped(SIZE_MAGIC + 2);
	});

	filter.multiBlock((c) => { // BiS ilvl (flask)
		c.continue();
		c.categories(CATEGORY.FLASK);
		c.names = new Comparison(NameManager.getGear(c));
		c.rarity = new Comparison(RARITY.MAGIC);
		c.ilvl = new Comparison(LEVEL_BIS_FLASK, OPERATOR.GTE);
	}, (e) => {
		e.colourAugment(PAIR_GEAR).sizeChance();
	});

	// Rare
	filter.multiBlock((c) => { // Low tier
		c.continue();
		c.categories(CATEGORY.GEAR_UNCOMMON);
		c.names = new Comparison(NameManager.getGear(c).isClass());
		c.rarity = new Comparison(RARITY.RARE);
		c.isLowTier();
	}, (e) => {
		e.colourExalt(PAIR_GEAR).sizeCapped(SIZE_RARE + 1);
	});

	filter.multiBlock((c) => { // Max tier
		c.continue();
		c.categories(CATEGORY.GEAR_UNCOMMON);
		c.names = new Comparison(NameManager.getGear(c).isClass());
		c.rarity = new Comparison(RARITY.RARE);
		c.isMaxTier();
	}, (c) => { // Good mod (class)
		c.continue();
		c.categories(CATEGORY.GEAR_UNCOMMON);
		c.names = new Comparison(NameManager.getGear(c).isClass());
		c.rarity = new Comparison(RARITY.RARE);
		c.goodModUncommon();
	}, (e) => {
		e.colourExalt(PAIR_GEAR).sizeCapped(SIZE_RARE + 2);
	});
}

function otherUncommon(filter) {
	// Magic
	filter.multiBlock((c) => { // Good mod (other)
		c.continue();
		c.categories(CATEGORY.GEAR_UNCOMMON);
		c.names = new Comparison(NameManager.getGear(c).isClass(false));
		c.rarity = new Comparison(RARITY.MAGIC);
		c.goodModUncommon(true);
	}, (e) => {
		e.colourAugment(PAIR_GEAR).sizeCapped(SIZE_MAGIC + 1);
	});

	// Rare
	filter.multiBlock((c) => { // Good mod (other)
		c.continue();
		c.categories(CATEGORY.GEAR_UNCOMMON);
		c.names = new Comparison(NameManager.getGear(c).isClass(false));
		c.rarity = new Comparison(RARITY.RARE);
		c.goodModUncommon(true);
	}, (e) => {
		e.colourExalt(PAIR_GEAR).sizeCapped(SIZE_RARE + 1);
	});
}

function jewels(filter) {
	filter.block((c, e) => {
		c.continue();
		c.categories(CATEGORY.JEWEL);
		c.rarity = new Comparison(RARITY.MAGIC);

		e.colourAugment(PAIR_JEWEL).size(SIZE_JEWEL_MAGIC);
	});

	filter.block((c, e) => {
		c.continue();
		c.categories(CATEGORY.JEWEL);
		c.rarity = new Comparison(RARITY.RARE);

		e.colourExalt(PAIR_JEWEL).size(SIZE_JEWEL_RARE);
	});

	filter.priceBlocks((c, e, min, max, effect) => {
		c.continue();
		c.categories(CATEGORY.JEWEL);
		c.names = new Comparison(NameManager.getUniqueJewels(min, max));
		c.rarity = new Comparison(RARITY.UNIQUE);

		effect(PAIR_JEWEL, EffectSet.INDEX_CHANCE);
	});
}

function waystones(filter) {
	filter.block((c, e) => {
		c.continue();
		c.categories(CATEGORY.WAYSTONE);
		c.rarity = new Comparison(RARITY.NORMAL);

		e.colourWisdom(PAIR_MAP1).sizeChance();
	});

	filter.block((c, e) => {
		c.continue();
		c.categories(CATEGORY.WAYSTONE);
		c.rarity = new Comparison(RARITY.MAGIC);

		e.colourAugment(PAIR_MAP1).sizeChance();
	});

	filter.block((c, e) => {
		c.continue();
		c.categories(CATEGORY.WAYSTONE);
		c.rarity = new Comparison(RARITY.RARE);

		e.colourExalt(PAIR_MAP1).sizeChance();
	});
}

function tablets(filter) {
	filter.block((c, e) => {
		c.continue();
		c.categories(CATEGORY.TABLET);
		c.rarity = new Comparison(RARITY.NORMAL);

		e.colourWisdom(PAIR_MAPLIKE).sizeExalt();
	});

	filter.multiBlock((c) => {
		c.continue();
		c.categories(CATEGORY.TABLET);
		c.rarity = new Comparison(RARITY.MAGIC);
	}, (e) => {
		e.colourAugment(PAIR_MAPLIKE).sizeExalt();
	});

	filter.block((c, e) => {
		c.continue();
		c.categories(CATEGORY.TABLET);
		c.rarity = new Comparison(RARITY.RARE);

		e.colourExalt(PAIR_MAPLIKE).sizeExalt();
	});

	filter.priceBlocks((c, e, min, max, effect) => {
		c.continue();
		c.categories(CATEGORY.TABLET);
		c.names = new Comparison(NameManager.getUniqueTablets(min, max));
		c.rarity = new Comparison(RARITY.UNIQUE);

		effect(PAIR_MAPLIKE, EffectSet.INDEX_CHANCE);
	});
}

function relics(filter) {
	filter.multiBlock((c) => {
		c.continue();
		c.categories(CATEGORY.RELIC);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.isLowTier();
	}, (e) => {
		e.colourAugment(PAIR_MAPLIKE).sizeAugment();
	});

	filter.multiBlock((c) => {
		c.continue();
		c.categories(CATEGORY.RELIC);
		c.rarity = new Comparison(RARITY.MAGIC);
		c.isMaxTier();
	}, (e) => {
		e.colourAugment(PAIR_MAPLIKE).sizeExalt();
	});

	filter.priceBlocks((c, e, min, max, effect) => {
		c.continue();
		c.categories(CATEGORY.RELIC);
		c.names = new Comparison(NameManager.getUniqueRelics(min, max));
		c.rarity = new Comparison(RARITY.UNIQUE);

		effect(PAIR_MAPLIKE, EffectSet.INDEX_CHANCE);
	});
}
