import { CATEGORY } from "../conditions/category.js";
import { Comparison, OPERATOR } from "../conditions/comparison.js";
import { DIV } from "../conditions/name.js";
import { NameManager } from "../conditions/nameManager.js";
import { PAIR_SOCKETABLE } from "../index.js";

export function sectionSocketables(filter) {
	// Runes
	filter.block((c, e) => {
		c.names = new Comparison("Lesser ", OPERATOR.EQUAL);
		c.category = new Comparison(CATEGORY.SOCKETABLE);

		e.colourWisdom(PAIR_SOCKETABLE).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison("Greater ", OPERATOR.EQUAL);
		c.category = new Comparison(CATEGORY.SOCKETABLE);

		e.colourExalt(PAIR_SOCKETABLE).sizeExalt();
	});
	filter.block((c, e) => {
		c.names = new Comparison(" Rune", OPERATOR.EQUAL);
		c.category = new Comparison(CATEGORY.SOCKETABLE);

		e.colourAugment(PAIR_SOCKETABLE).sizeAugment();
	});

	// Other socketables
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getSocketables(null, DIV));
		c.category = new Comparison(CATEGORY.SOCKETABLE);

		e.colourChance(PAIR_SOCKETABLE).sizeChance();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getSocketables(DIV));
		c.category = new Comparison(CATEGORY.SOCKETABLE);

		e.colourDivine(PAIR_SOCKETABLE).sizeDivine();
	});

	// BASE other
	filter.block((c, e) => {
		c.category = new Comparison(CATEGORY.SOCKETABLE);

		e.colourExalt(PAIR_SOCKETABLE).sizeExalt();
	});
}
