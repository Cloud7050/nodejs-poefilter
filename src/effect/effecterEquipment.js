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
	 * Gives default effects based on rarity.
	 */
	static #defaultRarity(p) {
		switch (p.c.rarity) {
			case ConditionSet.RARITY.UNIQUE:
				p.e.visibility = EffectSet.VISIBILITY.SHOW;

				p.e.textSize = EffectSet.TEXT_SIZE.LARGEST;
				p.e.backgroundColour = EffectSet.RGBA.WHITE;
				p.e.mapColour = EffectSet.COLOUR.ORANGE;
				p.e.mapSize = EffectSet.ICON_SIZE.LARGE;
				p.e.beamColour = EffectSet.COLOUR.ORANGE;
				break;
			case ConditionSet.RARITY.RARE:
				p.e.visibility = EffectSet.VISIBILITY.SHOW;

				p.e.mapColour = EffectSet.COLOUR.YELLOW;
				p.e.mapSize = EffectSet.ICON_SIZE.MEDIUM;
				break;
			case ConditionSet.RARITY.MAGIC:
				p.e.mapColour = EffectSet.COLOUR.BLUE;
				break;
			case ConditionSet.RARITY.NORMAL:
				p.e.mapColour = EffectSet.COLOUR.SILVER;
				break;
		}
	}

	/**
	 * Gives effects based on other attributes, but able to be overwritten by
	 * sockets.
	 */
	static #preSockets(p) {
		if (p.c.isQuality) {
			p.e.outlineColour = EffectSet.RGB_GAME.MAGIC;
			p.e.mapIcon = EffectSet.ICON.HEXAGON;
		}
	}

	/**
	 * Gives effects based on sockets.
	 */
	static #sockets(p) {
		if (p.c.isSix) {
			p.e.visibility = EffectSet.VISIBILITY.SHOW;

			p.e.outlineColour = EffectSet.RGB.ROSE;
			p.e.mapIcon = EffectSet.ICON.DIAMOND;
			p.e.mapSize = EffectSet.ICON_SIZE.LARGE;
			p.e.beamColour = EffectSet.COLOUR.ROSE;
		} else if (p.c.isRgb) {
			p.e.visibility = EffectSet.VISIBILITY.SHOW;

			p.e.outlineColour = EffectSet.RGB.PURPLE;
			p.e.mapIcon = EffectSet.ICON.RAINDROP;
			p.e.mapSize = EffectSet.ICON_SIZE.MEDIUM;
		} else if (p.c.isFive) {
			p.e.outlineColour = EffectSet.RGB.YELLOW;
			p.e.mapIcon = EffectSet.ICON.STAR;
			p.e.mapSize = EffectSet.ICON_SIZE.MEDIUM;
		} else if (p.c.isLooty()) {
			p.e.outlineColour = EffectSet.RGB.LIME;
			p.e.mapIcon = EffectSet.ICON.CIRCLE;
			p.e.mapSize = EffectSet.ICON_SIZE.MEDIUM;
		} else if (p.c.isFour) {
			p.e.outlineColour = EffectSet.RGB.CYAN;
			p.e.mapIcon = EffectSet.ICON.CROSS;
		} else if (p.c.isWhite) {
			p.e.outlineColour = EffectSet.RGB.PINK;
			p.e.mapIcon = EffectSet.ICON.PENTAGON;
		} else if (p.c.isThreeLink) {
			p.e.outlineColour = EffectSet.RGB.GREY;
			p.e.mapIcon = EffectSet.ICON.KITE;
		}
	}

	/**
	 * Gives effects based on other attributes, overwriting after sockets.
	 */
	static #postSockets(p) {
		if (p.c.isCorrupted) {
			p.e.visibility = EffectSet.VISIBILITY.SHOW;

			p.e.outlineColour = EffectSet.RGB_GAME.CORRUPTED;
			p.e.mapIcon = EffectSet.ICON.TRIANGLE;
		} else if (p.c.isMirrored) {
			p.e.visibility = EffectSet.VISIBILITY.SHOW;

			p.e.outlineColour = EffectSet.RGB.NAVY;
			p.e.mapIcon = EffectSet.ICON.MOON;
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
					p.c.isFive
					|| p.c.isLooty()
				) {
					p.e.visibility = EffectSet.VISIBILITY.SHOW;
					break;
				}

				switch (p.c.rarity) {
					case ConditionSet.RARITY.MAGIC:
						if (
							p.c.isQuality
							|| p.c.isWhite
							|| p.c.isFour
						) {
							p.e.visibility = EffectSet.VISIBILITY.SHRINK_UNMAP;
							break;
						}

						break;
					case ConditionSet.RARITY.NORMAL:
						if (
							p.c.isQuality
							|| p.c.isFour
						) {
							p.e.visibility = EffectSet.VISIBILITY.SHRINK_UNMAP;
							break;
						}

						break;
				}
				break;
			case ConditionSet.TYPE_EQUIPMENT.WEAPON_UNUSED:
				if (p.c.isQuality) {
					p.e.visibility = EffectSet.VISIBILITY.SHRINK_UNMAP;
					break;
				}

				break;
		}
	}

	/**
	 * Applies shrink/unmap custom visibility.
	 */
	static #shrinkUnmap(p) {
		if (p.e.visibility > EffectSet.VISIBILITY.SHRINK_UNMAP) return;

		p.e.textSize = EffectSet.TEXT_SIZE.SMALLEST;
		p.e.backgroundColour = EffectSet.RGBA.FADED;
		p.e.isSilent = true;
		p.e.mapColour = null;
	}

	decideOne(p) {
		EffecterEquipment.#defaultVisibility(p);
		EffecterEquipment.#defaultRarity(p);

		EffecterEquipment.#preSockets(p);
		EffecterEquipment.#sockets(p);
		EffecterEquipment.#postSockets(p);

		EffecterEquipment.#multiVisibility(p);

		EffecterEquipment.#shrinkUnmap(p);
	}
}
