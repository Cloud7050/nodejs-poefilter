import { CATEGORY } from "../conditions/category.js";
import { Comparison, OPERATOR } from "../conditions/comparison.js";
import { NameManager } from "../conditions/nameManager.js";
import { Colour } from "../effects/colour.js";

// Overwrite outlines (highest priority first). Also acts like a whitelist
export function sectionOutlines(filter) {
	//// Non-whitelist outlines (continues). Lowest priority first as they can get overwritten below
	// Corrupted
	filter.block((c, e) => {
		// No whitelist. But is lowest priority outline as others below can overwrite it
		c.continue();
		c.isCorrupted = true;

		e.outlineColour = Colour.CORRUPTED;
	});

	// Any quality
	filter.block((c, e) => {
		c.continue();
		c.hasQuality();

		e.outlineColour = Colour.MAGIC;
	});
	////

	//// Whitelist outlines (no continues). Highest priority first as they stop immediately
	// Good mods
	filter.multiBlock((c) => {
		c.goodMain(true);
	}, (c) => {
		c.category = new Comparison(CATEGORY.MAIN);
		c.goodModMainhand(true);
	}, (c) => {
		c.category = new Comparison(CATEGORY.OFF);
		c.goodModOffhand(true);
	}, (c) => {
		c.category = new Comparison(CATEGORY.ARMOUR);
		c.goodModArmour(true);
	}, (c) => {
		c.category = new Comparison(CATEGORY.JEWELLERY);
		c.goodModJewellery(true);
	}, (e) => {
		e.outlineColour = Colour.RARE;
	});

	// BiS ilvl
	filter.multiBlock((c) => {
		c.category = new Comparison([CATEGORY.MAIN_OTHER_CASTER, CATEGORY.CHARM]);
		c.ilvl = new Comparison(81, OPERATOR.GTE);
	}, (c) => {
		c.category = new Comparison([CATEGORY.MAIN_CLASS, CATEGORY.OFF_OTHER_QUIVER, CATEGORY.JEWELLERY, CATEGORY.BELT]);
		c.ilvl = new Comparison(82, OPERATOR.GTE);
	}, (c) => {
		c.category = new Comparison(CATEGORY.BODY);
		c.ilvl = new Comparison(82, OPERATOR.GTE);
		c.dropLevel = new Comparison(65, OPERATOR.GTE);
	}, (c) => {
		c.category = new Comparison(CATEGORY.MAIN_OTHER_ATTACKER);
		c.ilvl = new Comparison(82, OPERATOR.GTE);
		c.dropLevel = new Comparison(77, OPERATOR.GTE);
	}, (c) => {
		c.category = new Comparison([CATEGORY.OFF_CLASS, CATEGORY.OFF_OTHER_BLOCK, CATEGORY.HELMET, CATEGORY.GLOVE, CATEGORY.BOOTS]);
		c.ilvl = new Comparison(82, OPERATOR.GTE);
		c.dropLevel = new Comparison(80, OPERATOR.GTE);
	}, (c) => {
		c.names = new Comparison(NameManager.getFlasksGood());
		c.category = new Comparison(CATEGORY.FLASK);
		c.ilvl = new Comparison(83, OPERATOR.GTE);
	}, (e) => {
		e.outlineColour = Colour.WHITE;
	});

	// Quality
	filter.multiBlock((c) => {
		// Never hide any quality charms as you can't add quality manually
		c.category = new Comparison(CATEGORY.CHARM);
		c.hasQuality();
	}, (c) => {
		// Never hide >= 15 quality
		c.hasQuality(15);
	}, (c) => {
		// Never hide >= 10 quality if it's 4 spots or less
		c.hasQuality(10);
		c.height = new Comparison(2, OPERATOR.LTE);
		c.width = new Comparison(2, OPERATOR.LTE);
	}, (c) => {
		// Never hide >= 10 quality if it's 4 spots or less
		c.hasQuality(10);
		c.height = new Comparison(4, OPERATOR.LTE);
		c.width = new Comparison(1);
	}, (e) => {
		e.outlineColour = Colour.MAGIC;
	});
	////
}
