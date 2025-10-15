import { Comparison, OPERATOR } from "../conditions/comparison.js";
import { RARITY } from "../conditions/conditionSet.js";

// Stop filter here; never hide these
export function sectionWhitelist(filter, showRares) {
	let cs = [
		(c) => {
			c.wisdomTier = new Comparison(5, OPERATOR.GTE);
		},
	];

	if (showRares) {
		cs.push((c) => {
			c.rarity = new Comparison(RARITY.RARE, OPERATOR.GTE);
		});
	}

	filter.multiBlock(...cs, (e) => {});
}
