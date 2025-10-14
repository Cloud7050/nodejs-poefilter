import { CATEGORY } from "../conditions/category.js";
import { Comparison } from "../conditions/comparison.js";
import { RARITY } from "../conditions/conditionSet.js";
import { PAIR_GEAR } from "../index.js";

// Also acts like a whitelist
export function sectionNamelist(filter) {
	filter.multiBlock((c) => {
		c.names = new Comparison("Viper Cap"); // Constricting Command
		c.category = new Comparison(CATEGORY.HELMET);
		c.rarity = new Comparison(RARITY.NORMAL);
	}, (e) => {
		e.colourWisdom(PAIR_GEAR).sizeExalt();
	});

	filter.multiBlock((c) => {
		c.names = new Comparison("Heavy Belt"); // Headhunter
		c.category = new Comparison(CATEGORY.BELT);
		c.rarity = new Comparison(RARITY.NORMAL);
	}, (c) => {
		c.names = new Comparison("Martyr Crown"); // Veil of the Night
		c.category = new Comparison(CATEGORY.HELMET);
		c.rarity = new Comparison(RARITY.NORMAL);
	}, (c) => {
		c.names = new Comparison("Silver Charm"); // The Fall of the Axe
		c.category = new Comparison(CATEGORY.CHARM);
		c.rarity = new Comparison(RARITY.NORMAL);
	}, (e) => {
		e.colourWisdom(PAIR_GEAR).sizeChance();
	});
}
