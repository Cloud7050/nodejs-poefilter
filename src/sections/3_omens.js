import { CATEGORY } from "../conditions/category.js";
import { Comparison } from "../conditions/comparison.js";
import { NameManager } from "../conditions/nameManager.js";
import { PAIR_MECHANIC1, PAIR_MECHANIC2 } from "../constants.js";

export function sectionOmens(filter) {
	ritual(filter);
	abyss(filter);
}

function ritual(filter) {
	filter.priceBlocks((c, e, min, max, effect) => {
		c.categories(CATEGORY.OMEN);
		c.names = new Comparison(NameManager.getOmens(min, max));

		effect(PAIR_MECHANIC1);
	});
}

function abyss(filter) {
	filter.priceBlocks((c, e, min, max, effect) => {
		c.categories(CATEGORY.OMEN);
		c.names = new Comparison(NameManager.getOmensAbyss(min, max));

		effect(PAIR_MECHANIC2);
	});
}
