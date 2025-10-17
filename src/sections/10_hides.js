import { CATEGORY } from "../conditions/category.js";
import { Comparison, OPERATOR } from "../conditions/comparison.js";
import { RARITY } from "../conditions/conditionSet.js";
import { NameManager } from "../conditions/nameManager.js";

//TODO account for everything here except for whitelisted traits
export function sectionHides(filter) {
	filter.multiBlock((c) => { // Normal/magic class mainhands but are wrong skill
		c.names = new Comparison(NameManager.getMainClassLow());
		c.category = new Comparison(CATEGORY.MAIN_CLASS);
		c.rarity = new Comparison(RARITY.MAGIC, OPERATOR.LTE);
	}, (c) => { // Rare class mainhands but are wrong skill & low wisdom tier
		c.names = new Comparison(NameManager.getMainClassLow());
		c.category = new Comparison(CATEGORY.MAIN_CLASS);
		c.rarity = new Comparison(RARITY.RARE);
		c.isLowTier();
	}, (c) => { // Normal/magic class offhands but are low bases
		c.names = new Comparison(NameManager.getOffClassLow());
		c.category = new Comparison(CATEGORY.OFF_CLASS);
		c.rarity = new Comparison(RARITY.MAGIC, OPERATOR.LTE);
	}, (c) => { // Rare class offhands but are low bases & low wisdom tier
		c.names = new Comparison(NameManager.getOffClassLow());
		c.category = new Comparison(CATEGORY.OFF_CLASS);
		c.rarity = new Comparison(RARITY.RARE);
		c.isLowTier();
	}, (c) => { // Normal/magic other weapons
		c.category = new Comparison(CATEGORY.WEAPON_OTHER);
		c.rarity = new Comparison(RARITY.MAGIC, OPERATOR.LTE);
	}, (c) => { // Rare other weapons that are low wisdom tier
		c.category = new Comparison(CATEGORY.WEAPON_OTHER);
		c.rarity = new Comparison(RARITY.RARE);
		c.isLowTier();
	}, (c) => { // Normal/magic class armour tops but are low bases
		c.names = new Comparison(NameManager.getArmourClassLow());
		c.category = new Comparison(CATEGORY.ARMOUR_TOP);
		c.rarity = new Comparison(RARITY.MAGIC, OPERATOR.LTE);
	}, (c) => { // Rare class armour tops but are low bases & low wisdom tier
		c.names = new Comparison(NameManager.getArmourClassLow());
		c.category = new Comparison(CATEGORY.ARMOUR_TOP);
		c.rarity = new Comparison(RARITY.RARE);
		c.isLowTier();
	}, (c) => { // Normal/magic other armour
		c.category = new Comparison(CATEGORY.ARMOUR_TOP);
		c.rarity = new Comparison(RARITY.MAGIC, OPERATOR.LTE);
		c.hasArmour();
	}, (c) => {
		c.category = new Comparison(CATEGORY.ARMOUR_TOP);
		c.rarity = new Comparison(RARITY.MAGIC, OPERATOR.LTE);
		c.hasEvasion();
	}, (c) => {
		// Class doesn't use most boots, it uses unique
		c.category = new Comparison(CATEGORY.BOOTS);
		c.rarity = new Comparison(RARITY.MAGIC, OPERATOR.LTE);
	}, (c) => { // Rare other armour that is low wisdom tier
		c.category = new Comparison(CATEGORY.ARMOUR_TOP);
		c.rarity = new Comparison(RARITY.RARE);
		c.isLowTier();
		c.hasArmour();
	}, (c) => {
		c.category = new Comparison(CATEGORY.ARMOUR_TOP);
		c.rarity = new Comparison(RARITY.RARE);
		c.isLowTier();
		c.hasEvasion();
	}, (c) => {
		c.category = new Comparison(CATEGORY.BOOTS);
		c.rarity = new Comparison(RARITY.RARE);
		c.isLowTier();
	}, (c) => { // Normal/magic other jewellery
		c.names = new Comparison(NameManager.getJewelleryOther());
		c.category = new Comparison(CATEGORY.JEWELLERY);
		c.rarity = new Comparison(RARITY.MAGIC, OPERATOR.LTE);
	}, (c) => { // Magic belts
		// Class doesn't use most belts, it uses unique
		c.category = new Comparison(CATEGORY.BELT);
		c.rarity = new Comparison(RARITY.MAGIC);
	}, (c) => { // Rare belts that are low wisdom tier
		c.category = new Comparison(CATEGORY.BELT);
		c.rarity = new Comparison(RARITY.RARE);
		c.isLowTier();
	}, (c) => { // Bad normal/magic flasks
		c.names = new Comparison(NameManager.getFlasksBad());
		c.category = new Comparison(CATEGORY.FLASK);
		c.rarity = new Comparison(RARITY.MAGIC, OPERATOR.LTE);
	}, (e) => {
		e.hide();
	});
}
