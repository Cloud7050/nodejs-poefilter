/* [Imports] */
import { ConditionSet } from "../condition/conditionSet.js";
import { EffectSet } from "./effectSet.js";
import { Effecter } from "./effecter.js";



/* [Exports] */
export class EffecterOther extends Effecter {
	/**
	 * Gives default effects based on type.
	 */
	static #defaultType(p) {
		switch (p.c.type) {
			case ConditionSet.TYPE_OTHER.GEM:
				p.e.backgroundColour = EffectSet.RGBA.WHITE;
				p.e.mapColour = EffectSet.COLOUR.CYAN;
				p.e.mapIcon = EffectSet.ICON.HOUSE;
				break;
			case ConditionSet.TYPE_OTHER.VALUABLE_COLOURED:
				p.e.backgroundColour = EffectSet.RGBA.WHITE;
				p.e.mapColour = EffectSet.COLOUR.LIME;
				p.e.mapIcon = EffectSet.ICON.HOUSE;
				break;
			case ConditionSet.TYPE_OTHER.VALUABLE_RECOLOUR:
				p.e.textColour = EffectSet.RGB.GREEN;
				p.e.backgroundColour = EffectSet.RGBA.WHITE;
				p.e.mapColour = EffectSet.COLOUR.LIME;
				p.e.mapIcon = EffectSet.ICON.HOUSE;
				break;
			case ConditionSet.TYPE_OTHER.QUEST:
				p.e.backgroundColour = EffectSet.RGBA.WHITE;
				// Map should be handled by game's green exclamation mark
				break;
			case ConditionSet.TYPE_OTHER.OTHER:
				p.e.mapColour = EffectSet.COLOUR.PINK;
				p.e.mapIcon = EffectSet.ICON.HOUSE;
				break;
		}
	}

	decideOne(p) {
		EffecterOther.#defaultType(p);
	}
}
