import { CATEGORY } from "../conditions/category.js";
import { Comparison } from "../conditions/comparison.js";
import { NameManager } from "../conditions/nameManager.js";
import { PAIR_ABYSS, PAIR_CRAFT, PRICE_AUGMENT, PRICE_CHANCE, PRICE_DIV, PRICE_EXALT } from "../constants.js";

export function sectionOmens(filter) {
	ritual(filter);
	abyss(filter);
}

function ritual(filter) {
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getOmens(null, PRICE_AUGMENT));
		c.categories(CATEGORY.OMEN);

		e.colourAugment(PAIR_CRAFT).sizeWisdom();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getOmens(PRICE_AUGMENT, PRICE_EXALT));
		c.categories(CATEGORY.OMEN);

		e.colourAugment(PAIR_CRAFT).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getOmens(PRICE_EXALT, PRICE_CHANCE));
		c.categories(CATEGORY.OMEN);

		e.colourExalt(PAIR_CRAFT).sizeExalt();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getOmens(PRICE_CHANCE, PRICE_DIV));
		c.categories(CATEGORY.OMEN);

		e.colourChance(PAIR_CRAFT).sizeChance();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getOmens(PRICE_DIV));
		c.categories(CATEGORY.OMEN);

		e.colourDivine(PAIR_CRAFT).sizeDivine();
	});
}

function abyss(filter) {
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getOmensAbyss(null, PRICE_EXALT));
		c.categories(CATEGORY.OMEN);

		e.colourAugment(PAIR_ABYSS).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getOmensAbyss(PRICE_EXALT, PRICE_DIV));
		c.categories(CATEGORY.OMEN);

		e.colourChance(PAIR_ABYSS).sizeChance();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getOmensAbyss(PRICE_DIV));
		c.categories(CATEGORY.OMEN);

		e.colourDivine(PAIR_ABYSS).sizeDivine();
	});
}
