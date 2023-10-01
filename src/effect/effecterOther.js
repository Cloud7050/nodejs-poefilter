import { ConditionSet } from "../condition/conditionSet.js";
import { EffectSet } from "./effectSet.js";
import { Effecter } from "./effecter.js";



/* [Exports] */
export class EffecterOther extends Effecter {
	/**
	 * Gives default effects based on type.
	 */
	static #defaultType(p) {
		p.e.mapIcon = EffectSet.ICON.HOUSE;

		switch (p.c.type) {
			case ConditionSet.TYPE_OTHER.CURRENCY:
				p.e.textColour = EffectSet.RGB.GREEN;
				p.e.backgroundColour = EffectSet.RGBA.WHITE;
				p.e.mapColour = EffectSet.COLOUR.LIME;
				break;
			case ConditionSet.TYPE_OTHER.MAP:
				p.e.mapColour = EffectSet.COLOUR.BROWN;
				break;
			case ConditionSet.TYPE_OTHER.CARD:
				p.e.backgroundColour = EffectSet.RGBA.WHITE;
				p.e.mapColour = EffectSet.COLOUR.CYAN;
				p.e.mapSize = EffectSet.ICON_SIZE.MEDIUM;
				break;
			case ConditionSet.TYPE_OTHER.GEM:
				p.e.backgroundColour = EffectSet.RGBA.WHITE;
				p.e.mapColour = EffectSet.COLOUR.CYAN;
				p.e.mapSize = EffectSet.ICON_SIZE.MEDIUM;
				break;
			case ConditionSet.TYPE_OTHER.LABYRINTH:
				p.e.textColour = EffectSet.RGB.GREEN;
				p.e.backgroundColour = EffectSet.RGBA.WHITE;
				p.e.mapColour = EffectSet.COLOUR.LIME;
				p.e.mapSize = EffectSet.ICON_SIZE.MEDIUM;
				break;
			case ConditionSet.TYPE_OTHER.QUEST:
				p.e.backgroundColour = EffectSet.RGBA.WHITE;
				break;
			case ConditionSet.TYPE_OTHER.OTHER:
				p.e.mapColour = EffectSet.COLOUR.PINK;
				break;
		}
	}

	decideOne(p) {
		EffecterOther.#defaultType(p);
	}
}
