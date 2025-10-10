import { Comparison, OPERATOR } from "../conditions/comparison.js";
import { CATEGORY } from "../conditions/conditionSet.js";
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

	// Normal soul cores
	filter.block((c, e) => {
		c.names = new Comparison([
			"Soul Core of Puhuarte", // 13 exalts
			"Soul Core of Zalatl", // 18 exalts
			"Soul Core of Opiloti", // 20 exalts
			"Soul Core of Tzamoto", // 20 exalts
			"Soul Core of Ticaba", // 20 exalts
			"Soul Core of Quipolatl", // 22 exalts
			"Soul Core of Citaqualotl", // 23 exalts
			"Soul Core of Cholotl", // 23 exalts
			"Soul Core of Atmohua", // 24 exalts
			"Soul Core of Zantipi", // 24 exalts
			"Soul Core of Topotante", // 25 exalts
			"Soul Core of Xopec", // 26.92 exalts
		]);
		c.category = new Comparison(CATEGORY.SOCKETABLE);

		e.colourChance(PAIR_SOCKETABLE).sizeChance();
	});
	filter.block((c, e) => {
		c.names = new Comparison([
			"Soul Core of Azcapa", // 40 exalts
			"Soul Core of Tacati", // 54 exalts
			"Soul Core of Jiquani", // 3 divs
		]);
		c.category = new Comparison(CATEGORY.SOCKETABLE);

		e.colourDivine(PAIR_SOCKETABLE).sizeDivine();
	});

	// BASE other
	filter.block((c, e) => {
		c.category = new Comparison(CATEGORY.SOCKETABLE);

		e.colourExalt(PAIR_SOCKETABLE).sizeExalt();
	});
}
