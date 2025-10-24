import { CATEGORY } from "../conditions/category.js";
import { Comparison } from "../conditions/comparison.js";
import { OPERATOR } from "../conditions/operator.js";
import { PAIR_QUEST, PAIR_QUESTLIKE } from "../index.js";

export function sectionMisc(filter) {
	tickets(filter);
	keys(filter);
	quest(filter);
}

// Mechanic entry tickets
function tickets(filter) {
	//// Trials of the sekhemas
	// Area level 24-25, 1 trial, 4-9 ex
	// Area level 26-44, 1 trial, <1 ex
	filter.block((c, e) => {
		c.categories(CATEGORY.SEKHEMA);
		c.ilvl = new Comparison(25, OPERATOR.LTE);

		e.colourWisdom(PAIR_QUESTLIKE).sizeExalt();
	});
	filter.block((c, e) => {
		c.categories(CATEGORY.SEKHEMA);
		c.ilvl = new Comparison(44, OPERATOR.LTE);

		e.colourWisdom(PAIR_QUESTLIKE).sizeAugment();
	});

	// Area level 45, 2 trials, >20 ex
	// Area level 46-59, 2 trials, <1 ex
	filter.block((c, e) => {
		c.categories(CATEGORY.SEKHEMA);
		c.ilvl = new Comparison(45);

		e.colourWisdom(PAIR_QUESTLIKE).sizeChance();
	});
	filter.block((c, e) => {
		c.categories(CATEGORY.SEKHEMA);
		c.ilvl = new Comparison(59, OPERATOR.LTE);

		e.colourWisdom(PAIR_QUESTLIKE).sizeAugment();
	});

	// Area level 60-65, 3 trials, 20-84 ex
	// Area level 66-67, 3 trials, 1-9 ex
	// Area level 68-74, 3 trials, <1 ex
	filter.block((c, e) => {
		c.categories(CATEGORY.SEKHEMA);
		c.ilvl = new Comparison(65, OPERATOR.LTE);

		e.colourAugment(PAIR_QUESTLIKE).sizeChance();
	});
	filter.block((c, e) => {
		c.categories(CATEGORY.SEKHEMA);
		c.ilvl = new Comparison(67, OPERATOR.LTE);

		e.colourAugment(PAIR_QUESTLIKE).sizeExalt();
	});
	filter.block((c, e) => {
		c.categories(CATEGORY.SEKHEMA);
		c.ilvl = new Comparison(74, OPERATOR.LTE);

		e.colourAugment(PAIR_QUESTLIKE).sizeAugment();
	});

	// Area level 75, 4 trials, 49 ex
	// Area level 76, 4 trials, 13 ex
	// Area level 77-80, 4 trials, <1 ex
	filter.block((c, e) => {
		c.categories(CATEGORY.SEKHEMA);
		c.ilvl = new Comparison(75);

		e.colourExalt(PAIR_QUESTLIKE).sizeChance();
	});
	filter.block((c, e) => {
		c.categories(CATEGORY.SEKHEMA);
		c.ilvl = new Comparison(76);

		e.colourExalt(PAIR_QUESTLIKE).sizeExalt();
	});
	filter.block((c, e) => {
		c.categories(CATEGORY.SEKHEMA);
		c.ilvl = new Comparison(77, OPERATOR.GTE);

		e.colourExalt(PAIR_QUESTLIKE).sizeAugment();
	});
	////

	// Trials of chaos
	// Area level 39-52, 4 trials, >20 ex
	// Area level 53-59, 4 trials, 4-14 ex
	filter.block((c, e) => {
		c.categories(CATEGORY.CHAOS);
		c.ilvl = new Comparison(52, OPERATOR.LTE);

		e.colourWisdom(PAIR_QUESTLIKE).sizeChance();
	});
	filter.block((c, e) => {
		c.categories(CATEGORY.CHAOS);
		c.ilvl = new Comparison(59, OPERATOR.LTE);

		e.colourWisdom(PAIR_QUESTLIKE).sizeExalt();
	});

	// Area level 60-61, 7 trials, 39-59 ex
	// Area level 62-65, 7 trials, 4-19 ex
	// Area level 66-74, 7 trials, <1 ex
	filter.block((c, e) => {
		c.categories(CATEGORY.CHAOS);
		c.ilvl = new Comparison(61, OPERATOR.LTE);

		e.colourAugment(PAIR_QUESTLIKE).sizeChance();
	});
	filter.block((c, e) => {
		c.categories(CATEGORY.CHAOS);
		c.ilvl = new Comparison(65, OPERATOR.LTE);

		e.colourAugment(PAIR_QUESTLIKE).sizeExalt();
	});
	filter.block((c, e) => {
		c.categories(CATEGORY.CHAOS);
		c.ilvl = new Comparison(74, OPERATOR.LTE);

		e.colourAugment(PAIR_QUESTLIKE).sizeAugment();
	});

	// Area level 75-77, 10 trials, 49-174 ex
	// Area level 78, 10 trials, 1 ex
	// Area level 79-80, 10 trials, <1 ex
	filter.block((c, e) => {
		c.categories(CATEGORY.CHAOS);
		c.ilvl = new Comparison(77, OPERATOR.LTE);

		e.colourExalt(PAIR_QUESTLIKE).sizeChance();
	});
	filter.block((c, e) => {
		c.categories(CATEGORY.CHAOS);
		c.ilvl = new Comparison(78);

		e.colourExalt(PAIR_QUESTLIKE).sizeExalt();
	});
	filter.block((c, e) => {
		c.categories(CATEGORY.CHAOS);
		c.ilvl = new Comparison(79, OPERATOR.GTE);

		e.colourExalt(PAIR_QUESTLIKE).sizeAugment();
	});

	// Expedition logbooks (150++ ex)
	filter.block((c, e) => {
		c.categories(CATEGORY.LOGBOOK);

		e.colourExalt(PAIR_QUESTLIKE).sizeChance();
	});
}

// Map keys
function keys(filter) {
	filter.block((c, e) => {
		c.categories(CATEGORY.VAULT);

		e.colourChance(PAIR_QUESTLIKE).sizeChance();
	});

	filter.block((c, e) => {
		c.categories(CATEGORY.FRAGMENT);

		e.colourDivine(PAIR_QUESTLIKE).sizeDivine();
	});
}

function quest(filter) {
	filter.block((c, e) => {
		c.categories(CATEGORY.QUEST);

		// True quest items have custom minimap icon overrides
		e.colourExalt(PAIR_QUEST).sizeExalt();
	});
}
