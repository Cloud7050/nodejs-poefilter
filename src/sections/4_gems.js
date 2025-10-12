import { CATEGORY } from "../conditions/category.js";
import { Comparison } from "../conditions/comparison.js";
import { DIV } from "../conditions/name.js";
import { NameManager } from "../conditions/nameManager.js";
import { PAIR_GEM } from "../index.js";


export function sectionGems(filter) {
	// Uncut
	filter.block((c, e) => {
		c.category = new Comparison(CATEGORY.GEM_UNCUT_SUPPORT);

		e.colourAugment(PAIR_GEM).sizeExalt();
	});
	filter.block((c, e) => {
		c.category = new Comparison(CATEGORY.GEM_UNCUT_MAIN);

		e.colourAugment(PAIR_GEM).sizeExalt();
	});

	// Lineage
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getGems(null, 1));
		c.category = new Comparison(CATEGORY.GEM);

		e.colourChance(PAIR_GEM).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getGems(1, 20));
		c.category = new Comparison(CATEGORY.GEM);

		e.colourChance(PAIR_GEM).sizeExalt();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getGems(20, DIV));
		c.category = new Comparison(CATEGORY.GEM);

		e.colourChance(PAIR_GEM).sizeChance();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getGems(DIV));
		c.category = new Comparison(CATEGORY.GEM);

		e.colourDivine(PAIR_GEM).sizeDivine();
	});

	//// Cut
	// Crafted on
	filter.multiBlock((c) => {
		c.category = new Comparison(CATEGORY.GEM);
		c.hasQuality();
	}, (c) => {
		c.category = new Comparison(CATEGORY.GEM);
		c.hasSockets(5);
	}, (e) => {
		e.colourExalt(PAIR_GEM).sizeExalt();
	});

	// BASE basic
	filter.block((c, e) => {
		c.category = new Comparison(CATEGORY.GEM);

		e.colourExalt(PAIR_GEM).sizeAugment();
	});
	////
}
