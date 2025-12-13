import { CATEGORY } from "../conditions/category.js";
import { Comparison } from "../conditions/comparison.js";
import { NameManager } from "../conditions/nameManager.js";
import { PAIR_GEM, PRICE_CHANCE, PRICE_DIV, PRICE_EXALT } from "../constants.js";

export function sectionGems(filter) {
	uncut(filter);
	lineage(filter);
	cut(filter);
}

function uncut(filter) {
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getUncut(null, PRICE_EXALT));
		c.categories(CATEGORY.UNCUT);

		e.colourAugment(PAIR_GEM).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getUncut(PRICE_EXALT, PRICE_CHANCE));
		c.categories(CATEGORY.UNCUT);

		e.colourExalt(PAIR_GEM).sizeExalt();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getUncut(PRICE_CHANCE));
		c.categories(CATEGORY.UNCUT);

		e.colourChance(PAIR_GEM).sizeChance();
	});
}

function lineage(filter) {
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getLineage(null, PRICE_EXALT));
		c.categories(CATEGORY.GEM);

		e.colourChance(PAIR_GEM).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getLineage(PRICE_EXALT, PRICE_CHANCE));
		c.categories(CATEGORY.GEM);

		e.colourChance(PAIR_GEM).sizeExalt();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getLineage(PRICE_CHANCE, PRICE_DIV));
		c.categories(CATEGORY.GEM);

		e.colourChance(PAIR_GEM).sizeChance();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getLineage(PRICE_DIV));
		c.categories(CATEGORY.GEM);

		e.colourDivine(PAIR_GEM).sizeDivine();
	});
}

function cut(filter) {
	// BASE
	filter.block((c, e) => {
		c.categories(CATEGORY.GEM);

		e.colourWisdom(PAIR_GEM).sizeWisdom();
	});
}
