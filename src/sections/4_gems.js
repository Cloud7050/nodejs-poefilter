import { CATEGORY } from "../conditions/category.js";
import { Comparison } from "../conditions/comparison.js";
import { DIV } from "../conditions/name.js";
import { NameManager } from "../conditions/nameManager.js";
import { PAIR_GEM } from "../index.js";

export function sectionGems(filter) {
	uncut(filter);
	lineage(filter);
	cut(filter);
}

function uncut(filter) {
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getUncut(null, 1));
		c.categories(CATEGORY.UNCUT);

		e.colourAugment(PAIR_GEM).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getUncut(1, 20));
		c.categories(CATEGORY.UNCUT);

		e.colourExalt(PAIR_GEM).sizeExalt();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getUncut(20));
		c.categories(CATEGORY.UNCUT);

		e.colourChance(PAIR_GEM).sizeChance();
	});
}

function lineage(filter) {
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getLineage(null, 1));
		c.categories(CATEGORY.GEM);

		e.colourChance(PAIR_GEM).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getLineage(1, 20));
		c.categories(CATEGORY.GEM);

		e.colourChance(PAIR_GEM).sizeExalt();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getLineage(20, DIV));
		c.categories(CATEGORY.GEM);

		e.colourChance(PAIR_GEM).sizeChance();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getLineage(DIV));
		c.categories(CATEGORY.GEM);

		e.colourDivine(PAIR_GEM).sizeDivine();
	});
}

function cut(filter) {
	// Crafted on
	filter.multiBlock((c) => {
		c.categories(CATEGORY.GEM);
		c.hasQuality();
	}, (c) => {
		c.categories(CATEGORY.GEM);
		c.hasSockets(5);
	}, (e) => {
		e.colourExalt(PAIR_GEM).sizeExalt();
	});

	// BASE basic
	filter.block((c, e) => {
		c.categories(CATEGORY.GEM);

		e.colourExalt(PAIR_GEM).sizeAugment();
	});
}
