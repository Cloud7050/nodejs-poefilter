import { Colour, PRESET } from "../effects/colour.js";
import { EffectSet } from "../effects/effectSet.js";

export function sectionGlobal(filter) {
	// Global style reset
	filter.block((c, e) => {
		c.continue();

		e.backgroundColour = Colour.BLACK;
		e.mapColour = PRESET.BLACK;
		e.mapIcon = EffectSet.MAP_ICON.CIRCLE;
		e.sizeExalt();
	});
}
