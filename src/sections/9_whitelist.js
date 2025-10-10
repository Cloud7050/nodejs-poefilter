import { Comparison, OPERATOR } from "../conditions/comparison.js";

// Stop filter here; never hide these
export function sectionWhitelist(filter) {
	filter.multiBlock((c) => {
		//TODO once encountered, highlight these differently. Could be 21-30% quality or extra socket
		c.names = new Comparison("Exceptional ", OPERATOR.EQUAL);
	}, (c) => {
		c.ilvl = new Comparison(82, OPERATOR.GTE);
	}, (c) => {
		c.wisdomTier = new Comparison(4, OPERATOR.GTE);
	}, (e) => {});
}
