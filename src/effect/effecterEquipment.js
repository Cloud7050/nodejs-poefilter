import { ConditionSet } from "../condition/conditionSet.js";
import { EffectSet } from "./effectSet.js";
import { Effecter } from "./effecter.js";



/* [Exports] */
export class EffecterEquipment extends Effecter {
	/**
	 * Starts with everything being hidden.
	 */
	static #defaultVisibility(p) {
		p.e.visibility = EffectSet.VISIBILITY.HIDE;
	}

	/**
	 * Sets default background.
	 */
	static #defaultBackground(p) {
		p.e.backgroundColour = EffectSet.RGBA.BLACK;
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
				p.e.visibility = EffectSet.VISIBILITY.SHOW;

				p.e.textColour = EffectSet.RGB.YELLOW;
				p.e.mapColour = EffectSet.COLOUR.YELLOW;
				p.e.mapSize = EffectSet.ICON_SIZE.MEDIUM;
				break;
			case ConditionSet.RARITY.UNIQUE:
				p.e.visibility = EffectSet.VISIBILITY.SHOW;

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
	 * Gives effects based on properties, overwriting as it goes down the if
	 * blocks.
	 */
	static #overwrites(p) {
		if (p.c.isFractured) {
			p.e.visibility = EffectSet.VISIBILITY.SHOW;

			p.e.mapIcon = EffectSet.ICON.CIRCLE;
			p.e.mapSize = EffectSet.ICON_SIZE.MEDIUM;
		}
		if (p.c.isQuality) {
			p.e.visibility = EffectSet.VISIBILITY.SHOW;

			p.e.outlineColour = EffectSet.RGB.TEAL;
			p.e.mapSize = EffectSet.ICON_SIZE.MEDIUM;
		}
		if (p.c.isThreeLink) {
			p.e.outlineColour = EffectSet.RGB.SILVER;
		}
		if (p.c.isWhite) {
			p.e.outlineColour = EffectSet.RGB.WHITE;
			p.e.mapSize = EffectSet.ICON_SIZE.MEDIUM;
		}
		if (p.c.isFour) {
			p.e.outlineColour = EffectSet.RGB.BLUE;
		}
		if (p.c.isRgb) {
			p.e.visibility = EffectSet.VISIBILITY.SHOW;

			p.e.outlineColour = EffectSet.RGB.PURPLE;
			p.e.mapIcon = EffectSet.ICON.RAINDROP;
			p.e.mapSize = EffectSet.ICON_SIZE.MEDIUM;
		}
		if (p.c.isLooty()) {
			p.e.outlineColour = EffectSet.RGB.LIME;
			p.e.mapSize = EffectSet.ICON_SIZE.MEDIUM;
		}
		if (p.c.isFive) {
			p.e.outlineColour = EffectSet.RGB.YELLOW;
			p.e.mapIcon = EffectSet.ICON.CROSS;
			p.e.mapSize = EffectSet.ICON_SIZE.LARGE;
		}
		if (p.c.isSix) {
			p.e.visibility = EffectSet.VISIBILITY.SHOW;

			p.e.textSize = EffectSet.TEXT_SIZE.LARGEST;
			p.e.outlineColour = EffectSet.RGB.ORANGE;
			p.e.sound = EffectSet.SOUND.WAH;
			p.e.mapIcon = EffectSet.ICON.STAR;
			p.e.mapSize = EffectSet.ICON_SIZE.LARGE;
			p.e.beamColour = EffectSet.COLOUR.ORANGE;
		}
		if (p.c.isMirrored) {
			p.e.visibility = EffectSet.VISIBILITY.SHOW;

			p.e.outlineColour = EffectSet.RGB.NAVY;
			p.e.mapIcon = EffectSet.ICON.MOON;
			p.e.mapSize = EffectSet.ICON_SIZE.MEDIUM;
		}
		if (p.c.isCorrupted) {
			p.e.visibility = EffectSet.VISIBILITY.SHOW;

			p.e.outlineColour = EffectSet.RGB.CRIMSON;
			p.e.mapIcon = EffectSet.ICON.MOON;
			p.e.mapSize = EffectSet.ICON_SIZE.MEDIUM;
		}
	}

	/**
	 * Decides visibility for anything that isn't a guaranteed show yet, based
	 * on various conditions.
	 */
	static #multiVisibility(p) {
		if (p.e.visibility >= EffectSet.VISIBILITY.SHOW) return;

		switch (p.c.type) {
			case ConditionSet.TYPE_EQUIPMENT.WEAPON_WITCH:
			case ConditionSet.TYPE_EQUIPMENT.GEAR:
				if (
					p.c.isLooty()
					|| p.c.isFive
				) {
					p.e.visibility = EffectSet.VISIBILITY.SHOW;
					break;
				}

				switch (p.c.rarity) {
					case ConditionSet.RARITY.NORMAL:
						if (p.c.isFour) {
							p.e.visibility = EffectSet.VISIBILITY.SHRINK_UNMAP;
							break;
						}

						break;
					case ConditionSet.RARITY.MAGIC:
						if (
							p.c.isWhite
							|| p.c.isFour
						) {
							p.e.visibility = EffectSet.VISIBILITY.SHRINK_UNMAP;
							break;
						}

						break;
				}
				break;
			case ConditionSet.TYPE_EQUIPMENT.WEAPON_UNUSED:
				break;
		}
	}

	/**
	 * Applies shrink/unmap custom visibility.
	 */
	static #shrinkUnmap(p) {
		if (p.e.visibility > EffectSet.VISIBILITY.SHRINK_UNMAP) return;

		p.e.textSize = EffectSet.TEXT_SIZE.SMALLEST;
		p.e.mapColour = null;

		if (p.e.visibility <= EffectSet.VISIBILITY.HIDE) {
			p.e.backgroundColour = EffectSet.RGBA.BLACK_FADED;
			p.e.isSilent = true;
		}
	}

	decideOne(p) {
		EffecterEquipment.#defaultVisibility(p);
		EffecterEquipment.#defaultBackground(p);
		EffecterEquipment.#defaultRarity(p);

		EffecterEquipment.#overwrites(p);

		EffecterEquipment.#multiVisibility(p);

		EffecterEquipment.#shrinkUnmap(p);
	}
}
