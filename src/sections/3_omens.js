import { CATEGORY } from "../conditions/category.js";
import { Comparison } from "../conditions/comparison.js";
import { DIV } from "../conditions/name.js";
import { NameManager } from "../conditions/nameManager.js";
import { PAIR_ABYSS, PAIR_CRAFT } from "../index.js";


export function sectionOmens(filter) {
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getOmens(null, 1 / 100));
		c.category = new Comparison(CATEGORY.OMEN);

		e.colourAugment(PAIR_CRAFT).sizeWisdom();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getOmens(1 / 100, 1));
		c.category = new Comparison(CATEGORY.OMEN);

		e.colourAugment(PAIR_CRAFT).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getOmens(1, 20));
		c.category = new Comparison(CATEGORY.OMEN);

		e.colourExalt(PAIR_CRAFT).sizeExalt();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getOmens(20, DIV));
		c.category = new Comparison(CATEGORY.OMEN);

		e.colourChance(PAIR_CRAFT).sizeChance();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getOmens(DIV));
		c.category = new Comparison(CATEGORY.OMEN);

		e.colourDivine(PAIR_CRAFT).sizeDivine();
	});

	// Abyss
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getOmensAbyss(null, 1));
		c.category = new Comparison(CATEGORY.OMEN);

		e.colourAugment(PAIR_ABYSS).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getOmensAbyss(1, DIV));
		c.category = new Comparison(CATEGORY.OMEN);

		e.colourChance(PAIR_ABYSS).sizeChance();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getOmensAbyss(DIV));
		c.category = new Comparison(CATEGORY.OMEN);

		e.colourDivine(PAIR_ABYSS).sizeDivine();
	});
}
