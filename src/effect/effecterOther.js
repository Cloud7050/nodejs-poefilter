import { ConditionSet } from "../condition/conditionSet.js";
import { EffectSet } from "./effectSet.js";
import { Effecter } from "./effecter.js";



/* [Exports] */
export class EffecterOther extends Effecter {
	/**
	 * Sets default background.
	 */
	static #defaultBackground(p) {
		p.e.backgroundColour = EffectSet.RGBA.BACKGROUND_SILVER;
	}

	/**
	 * Sets default map icon.
	 */
	static #defaultIcon(p) {
		p.e.mapIcon = EffectSet.ICON.HOUSE;
	}

	/**
	 * Gives default effects based on rarity.
	 */
	static #defaultRarity(p) {
		switch (p.c.rarity) {
			case ConditionSet.RARITY.NORMAL:
				p.e.textColour = EffectSet.RGB.SILVER;
				p.e.mapColour = EffectSet.COLOUR.SILVER;
				break;
			case ConditionSet.RARITY.MAGIC:
				p.e.textColour = EffectSet.RGB.BLUE;
				p.e.mapColour = EffectSet.COLOUR.BLUE;
				break;
			case ConditionSet.RARITY.RARE:
				p.e.textColour = EffectSet.RGB.YELLOW;
				p.e.mapColour = EffectSet.COLOUR.YELLOW;
				p.e.mapSize = EffectSet.ICON_SIZE.MEDIUM;
				break;
			case ConditionSet.RARITY.UNIQUE:
				p.e.textSize = EffectSet.TEXT_SIZE.LARGEST;
				p.e.textColour = EffectSet.RGB.ORANGE;
				p.e.sound = EffectSet.SOUND.WAH;
				p.e.mapColour = EffectSet.COLOUR.ORANGE;
				p.e.mapSize = EffectSet.ICON_SIZE.LARGE;
				p.e.beamColour = EffectSet.COLOUR.ORANGE;
				break;
		}
	}

	/**
	 * Gives effects based on type.
	 */
	static #types(p) {
		switch (p.c.type) {
			case ConditionSet.TYPE_OTHER.OTHER:
				break;
			case ConditionSet.TYPE_OTHER.QUEST:
				p.e.textColour = EffectSet.RGB.LIME;
				break;
			case ConditionSet.TYPE_OTHER.LABYRINTH:
				p.e.textColour = EffectSet.RGB.LIME;
				p.e.backgroundColour = EffectSet.RGBA.BACKGROUND_LIME;
				p.e.outlineColour = EffectSet.RGB.LIME;
				p.e.mapColour = EffectSet.COLOUR.LIME;
				p.e.mapSize = EffectSet.ICON_SIZE.MEDIUM;
				break;
			case ConditionSet.TYPE_OTHER.GEM:
				p.e.textColour = EffectSet.RGB.BLUE;
				p.e.backgroundColour = EffectSet.RGBA.BACKGROUND_TEAL;
				p.e.outlineColour = EffectSet.RGB.TEAL;
				p.e.mapColour = EffectSet.COLOUR.BLUE;
				p.e.mapSize = EffectSet.ICON_SIZE.MEDIUM;
				break;
			case ConditionSet.TYPE_OTHER.CARD:
				p.e.textColour = EffectSet.RGB.YELLOW;
				p.e.backgroundColour = EffectSet.RGBA.BACKGROUND_BLUE;
				p.e.outlineColour = EffectSet.RGB.BLUE;
				p.e.mapColour = EffectSet.COLOUR.YELLOW;
				p.e.mapSize = EffectSet.ICON_SIZE.MEDIUM;
				break;
			case ConditionSet.TYPE_OTHER.MAP:
				p.e.backgroundColour = EffectSet.RGBA.BACKGROUND_YELLOW;
				p.e.outlineColour = EffectSet.RGB.YELLOW;
				switch (p.c.rarity) {
					case ConditionSet.RARITY.NORMAL:
						p.e.textColour = EffectSet.RGB.YELLOW;
						p.e.mapColour = EffectSet.COLOUR.YELLOW;
						p.e.mapSize = EffectSet.ICON_SIZE.MEDIUM;
						break;
					case ConditionSet.RARITY.UNIQUE:
						p.e.textSize = EffectSet.TEXT_SIZE.LARGEST;
						p.e.textColour = EffectSet.RGB.ORANGE;
						p.e.sound = EffectSet.SOUND.WAH;
						p.e.mapColour = EffectSet.COLOUR.ORANGE;
						p.e.mapSize = EffectSet.ICON_SIZE.LARGE;
						p.e.beamColour = EffectSet.COLOUR.YELLOW;
						break;
				}
				break;
			case ConditionSet.TYPE_OTHER.CURRENCY:
				p.e.backgroundColour = EffectSet.RGBA.BACKGROUND_GREEN;
				p.e.outlineColour = EffectSet.RGB.GREEN;
				if (!p.c.isExpensive) {
					p.e.textColour = EffectSet.RGB.BLUE;
					p.e.mapColour = EffectSet.COLOUR.BLUE;
					p.e.mapSize = EffectSet.ICON_SIZE.MEDIUM;
				} else {
					p.e.textSize = EffectSet.TEXT_SIZE.LARGEST;
					p.e.textColour = EffectSet.RGB.ORANGE;
					p.e.sound = EffectSet.SOUND.WAH;
					p.e.mapColour = EffectSet.COLOUR.ORANGE;
					p.e.mapSize = EffectSet.ICON_SIZE.LARGE;
					p.e.beamColour = EffectSet.COLOUR.LIME;
				}
				break;
		}
	}

	decideOne(p) {
		EffecterOther.#defaultBackground(p);
		EffecterOther.#defaultIcon(p);
		EffecterOther.#defaultRarity(p);

		EffecterOther.#types(p);
	}
}
