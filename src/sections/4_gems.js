import { CATEGORY } from "../conditions/category.js";
import { Comparison } from "../conditions/comparison.js";
import { NameManager } from "../conditions/nameManager.js";
import { PAIR_GEM } from "../constants.js";
import { EffectSet } from "../effects/effectSet.js";

export function sectionGems(filter) {
	uncut(filter);
	lineage(filter);
	cut(filter);
}

function uncut(filter) {
	filter.priceBlocks((c, e, min, max, effect) => {
		c.categories(CATEGORY.UNCUT);
		c.names = new Comparison(NameManager.getUncut(min, max));

		effect(PAIR_GEM);
	});
}

function lineage(filter) {
	filter.priceBlocks((c, e, min, max, effect) => {
		c.categories(CATEGORY.GEM);
		c.names = new Comparison(NameManager.getLineage(min, max));

		effect(PAIR_GEM, EffectSet.INDEX_CHANCE);
	});
}

function cut(filter) {
	// BASE
	filter.block((c, e) => {
		c.categories(CATEGORY.GEM);

		e.colourWisdom(PAIR_GEM).sizeWisdom();
	});
}
