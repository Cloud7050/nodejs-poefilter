import { CATEGORY } from "../conditions/category.js";
import { Comparison } from "../conditions/comparison.js";
import { PAIR_QUEST, PAIR_QUESTLIKE } from "../index.js";

export function sectionMisc(filter) {
	tickets(filter);
	keys(filter);
	quest(filter);
}

// Mechanic entry tickets
function tickets(filter) {
	filter.block((c, e) => {
		c.category = new Comparison(CATEGORY.TICKET);

		e.colourExalt(PAIR_QUESTLIKE).sizeExalt();
	});
}

// Map keys
function keys(filter) {
	filter.block((c, e) => {
		c.category = new Comparison(CATEGORY.VAULT);

		e.colourChance(PAIR_QUESTLIKE).sizeChance();
	});

	filter.block((c, e) => {
		c.category = new Comparison(CATEGORY.FRAGMENT);

		e.colourDivine(PAIR_QUESTLIKE).sizeDivine();
	});
}

function quest(filter) {
	filter.block((c, e) => {
		c.category = new Comparison(CATEGORY.QUEST);

		// True quest items have custom minimap icon overrides
		e.colourExalt(PAIR_QUEST).sizeExalt();
	});
}
