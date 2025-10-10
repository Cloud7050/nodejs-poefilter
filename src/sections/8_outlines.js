import { Comparison } from "../conditions/comparison.js";
import { CATEGORY } from "../conditions/conditionSet.js";
import { StringList } from "../conditions/stringList.js";
import { Colour } from "../effects/colour.js";

// Overwrite outlines (highest priority first). Also acts like a whitelist
export function sectionOutlines(filter) {
	// Good mods
	filter.multiBlock((c) => {
		c.goodMain(true);
	}, (c) => {
		c.category = new Comparison(new StringList(CATEGORY.MAIN_CLASS, CATEGORY.MAIN_OTHER));
		c.goodModMainhand(true);
	}, (c) => {
		c.category = new Comparison(new StringList(CATEGORY.OFF_CLASS, CATEGORY.OFF_OTHER));
		c.goodModOffhand(true);
	}, (c) => {
		c.category = new Comparison(new StringList(CATEGORY.ARMOUR_TOP, CATEGORY.BOOTS));
		c.goodModArmour(true);
	}, (c) => {
		c.category = new Comparison(CATEGORY.JEWELLERY);
		c.goodModJewellery(true);
	}, (e) => {
		e.outlineColour = Colour.RARE;
	});

	// Quality
	filter.multiBlock((c) => {
		// Never hide any quality charms as you can't add quality manually
		c.category = new Comparison(CATEGORY.CHARM);
		c.hasQuality();
	}, (c) => {
		// Never hide >= 10 quality
		c.hasQuality(10);
	}, (c) => {
		// Never hide >= 5 quality if it's 4 spots or less
		c.hasQuality(5);
		c.height = new Comparison(2, Comparison.OPERATOR.LTE);
		c.width = new Comparison(2, Comparison.OPERATOR.LTE);
	}, (c) => {
		// Never hide >= 5 quality if it's 4 spots or less
		c.hasQuality(5);
		c.height = new Comparison(4, Comparison.OPERATOR.LTE);
		c.width = new Comparison(1);
	}, (c) => {
		// Still outline all other >= 1 quality, but they aren't immune to hiding below
		c.continue();
		c.hasQuality();
	}, (e) => {
		e.outlineColour = Colour.MAGIC;
	});
}
