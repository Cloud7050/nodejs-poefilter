import { Comparison } from "../conditions/comparison.js";
import { CATEGORY } from "../conditions/conditionSet.js";
import { StringList } from "../conditions/stringList.js";
import { QUEST_COLOUR, QUEST_PRESET, QUESTLIKE_COLOUR, QUESTLIKE_PRESET } from "../index.js";

export function sectionMisc(filter) {
	tickets(filter);
	keys(filter);
	quest(filter);
}

// Mechanic entry tickets
function tickets(filter) {
	filter.block((c, e) => {
		c.category = new Comparison(CATEGORY.TICKET);

		e.colourExalt(QUESTLIKE_COLOUR, QUESTLIKE_PRESET).sizeExalt();
	});
}

// Map keys
function keys(filter) {
	filter.block((c, e) => {
		c.category = new Comparison(new StringList(CATEGORY.VAULT, CATEGORY.FRAGMENT));

		e.colourChance(QUESTLIKE_COLOUR, QUESTLIKE_PRESET).sizeChance();
	});
}

function quest(filter) {
	filter.block((c, e) => {
		c.category = new Comparison(CATEGORY.QUEST);

		// True quest items have custom minimap icon overrides
		e.colourExalt(QUEST_COLOUR, QUEST_PRESET).sizeExalt();
	});
}
