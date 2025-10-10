import { Comparison } from "../conditions/comparison.js";
import { CATEGORY } from "../conditions/conditionSet.js";
import { StringList } from "../conditions/stringList.js";
import { SOCKETABLE_COLOUR, SOCKETABLE_PRESET } from "../index.js";

export function sectionSocketables(filter) {
	// Runes
	filter.block((c, e) => {
		c.names = new Comparison("Lesser ", Comparison.OPERATOR.EQUAL);
		c.category = new Comparison(CATEGORY.SOCKETABLE);

		e.colourWisdom(SOCKETABLE_COLOUR, SOCKETABLE_PRESET).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison("Greater ", Comparison.OPERATOR.EQUAL);
		c.category = new Comparison(CATEGORY.SOCKETABLE);

		e.colourExalt(SOCKETABLE_COLOUR, SOCKETABLE_PRESET).sizeExalt();
	});
	filter.block((c, e) => {
		c.names = new Comparison(" Rune", Comparison.OPERATOR.EQUAL);
		c.category = new Comparison(CATEGORY.SOCKETABLE);

		e.colourAugment(SOCKETABLE_COLOUR, SOCKETABLE_PRESET).sizeAugment();
	});

	// Normal soul cores
	filter.block((c, e) => {
		c.names = new Comparison(new StringList(
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
		));
		c.category = new Comparison(CATEGORY.SOCKETABLE);

		e.colourChance(SOCKETABLE_COLOUR, SOCKETABLE_PRESET).sizeChance();
	});
	filter.block((c, e) => {
		c.names = new Comparison(new StringList(
			"Soul Core of Azcapa", // 40 exalts
			"Soul Core of Tacati", // 54 exalts
			"Soul Core of Jiquani", // 3 divs
		));
		c.category = new Comparison(CATEGORY.SOCKETABLE);

		e.colourDivine(SOCKETABLE_COLOUR, SOCKETABLE_PRESET).sizeDivine();
	});

	// BASE other
	filter.block((c, e) => {
		c.category = new Comparison(CATEGORY.SOCKETABLE);

		e.colourExalt(SOCKETABLE_COLOUR, SOCKETABLE_PRESET).sizeExalt();
	});
}
