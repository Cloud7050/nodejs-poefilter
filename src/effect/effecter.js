/* [Imports] */
import { ConditionSet } from "../condition/conditionSet.js";
import { EffectSet } from "./effectSet.js";



/* [Exports] */
export class Effecter {
	#permutationManager;

	constructor(permutationManager) {
		this.#permutationManager = permutationManager;
	}

	/**
	 * Gives default effects based on rarity.
	 */
	static #defaultRarity(p) {
		switch (p.c.rarity) {
			case ConditionSet.RARITY.UNIQUE:
				p.e.textSize = EffectSet.TEXT_SIZE.LARGEST;
				p.e.backgroundColour = EffectSet.RGBA.WHITE;
				p.e.mapColour = EffectSet.COLOUR.ORANGE;
				p.e.mapSize = EffectSet.ICON_SIZE.LARGE;
				p.e.beamColour = EffectSet.COLOUR.ORANGE;

				p.isHideImmune = true;
				break;
			case ConditionSet.RARITY.RARE:
				p.e.mapColour = EffectSet.COLOUR.YELLOW;
				p.e.mapSize = EffectSet.ICON_SIZE.MEDIUM;

				p.isHideImmune = true;
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
	 * Gives default effects based on type.
	 */
	static #defaultType(p) {
		switch (p.c.type) {
			case ConditionSet.TYPE_EQUIPMENT.GEM:
				p.e.backgroundColour = EffectSet.RGBA.WHITE;
				p.e.mapColour = EffectSet.COLOUR.CYAN;
				p.e.mapIcon = EffectSet.ICON.HOUSE;

				p.isHideImmune = true;
				break;
			case ConditionSet.TYPE_EQUIPMENT.VALUABLE_COLOURED:
				p.e.backgroundColour = EffectSet.RGBA.WHITE;
				p.e.mapColour = EffectSet.COLOUR.LIME;
				p.e.mapIcon = EffectSet.ICON.HOUSE;

				p.isHideImmune = true;
				break;
			case ConditionSet.TYPE_EQUIPMENT.VALUABLE_RECOLOUR:
				p.e.textColour = EffectSet.RGB.GREEN;
				p.e.backgroundColour = EffectSet.RGBA.WHITE;
				p.e.mapColour = EffectSet.COLOUR.LIME;
				p.e.mapIcon = EffectSet.ICON.HOUSE;

				p.isHideImmune = true;
				break;
			case ConditionSet.TYPE_EQUIPMENT.QUEST:
				p.e.backgroundColour = EffectSet.RGBA.WHITE;
				// Map icon should be handled by game's green exclamation mark

				p.isHideImmune = true;
				break;
			case ConditionSet.TYPE_EQUIPMENT.OTHER:
				p.e.mapColour = EffectSet.COLOUR.PINK;
				p.e.mapIcon = EffectSet.ICON.HOUSE;

				p.isHideImmune = true;
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
			p.e.outlineColour = EffectSet.RGB.ROSE;
			p.e.mapIcon = EffectSet.ICON.STAR;
			p.e.mapSize = EffectSet.ICON_SIZE.MEDIUM;

			// Can be vendored
			p.isHideImmune = true;
		} else if (p.c.isRgb) {
			p.e.outlineColour = EffectSet.RGB.PURPLE;
			p.e.mapIcon = EffectSet.ICON.RAINDROP;

			// Can be vendored
			p.isHideImmune = true;
		} else if (p.c.isLootyBase || p.c.isLootyMod) {
			p.e.outlineColour = EffectSet.RGB.LIME;
			p.e.mapIcon = EffectSet.ICON.CIRCLE;

			// May use
			p.isHideImmune = true;
		} else if (p.c.isFive) {
			p.e.outlineColour = EffectSet.RGB.ROSE;
			p.e.mapIcon = EffectSet.ICON.STAR;
		} else if (p.c.isFour) {
			p.e.outlineColour = EffectSet.RGB.YELLOW;
			p.e.mapIcon = EffectSet.ICON.CROSS;
		} else if (p.c.isWhite) {
			p.e.outlineColour = EffectSet.RGB.PINK;
			p.e.mapIcon = EffectSet.ICON.PENTAGON;
		} else if (p.c.isThreeLink) {
			p.e.outlineColour = EffectSet.RGB_GAME.NORMAL;
			p.e.mapIcon = EffectSet.ICON.DIAMOND;
		}
	}

	/**
	 * Gives effects based on other attributes, overwriting after sockets.
	 */
	static #postSockets(p) {
		if (p.c.isCorrupted) {
			p.e.outlineColour = EffectSet.RGB_GAME.CORRUPTED;
			p.e.mapIcon = EffectSet.ICON.TRIANGLE;
		} else if (p.c.isMirrored) {
			p.e.outlineColour = EffectSet.RGB.NAVY;
			p.e.mapIcon = EffectSet.ICON.MOON;

			// A dupe may have dropped, can be vendor reciped
			p.isHideImmune = true;
		}
	}

	/**
	 * Carefully grants equipment hide immunity based on various conditions.
	 */
	static #equipment(p) {
		if (p.isHideImmune) return;

		// Items at this point should be:
		// • Equipment, ie weapons/armour
		// • Normal/magic
		// • Not RGB
		// • Not looty or mirrored
		// We decide based on type + rarity + sockets + other attributes

		switch (p.c.type) {
			case ConditionSet.TYPE_EQUIPMENT.WEAPON_WITCH:
			case ConditionSet.TYPE_EQUIPMENT.ARMOUR:
				switch (p.c.rarity) {
					case ConditionSet.RARITY.MAGIC:
						// If any sockets are notable, maybe we'll use it
						if (
							p.c.isWhite
							|| p.c.isFour
							|| p.c.isFive
						) {
							p.isHideImmune = true;
							break;
						}

						// If it's corrupted, we'll only really use it if the sockets were notable.
						// At this point it's not notable yet corrupted, so no immunity granted

						// If it's quality, maybe we'll use it
						if (p.c.isQuality) {
							p.isHideImmune = true;
							break;
						}
						break;
					case ConditionSet.RARITY.NORMAL:
						if (
							p.c.isFour
							|| p.c.isFive
						) {
							p.isHideImmune = true;
							break;
						}
						break;
				}
				break;
			case ConditionSet.TYPE_EQUIPMENT.WEAPON_UNUSED:
				// We won't use this item, so we ignore rarity, sockets, corruption

				// Force hide its outlines
				p.isFluffOutline = true;
				break;
		}
	}

	/**
	 * Shrinks based on previous decisions. If the outline isn't worth keeping,
	 * remove it too.
	 */
	static #shrink(p) {
		if (p.isHideImmune) return;

		p.e.textSize = EffectSet.TEXT_SIZE.SMALLEST;
		p.e.backgroundColour = EffectSet.RGBA.FADED;

		if (p.isFluffOutline) p.e.outlineColour = null;
	}

	/**
	 * Hides from map based on previous decisions.
	 */
	static #unmap(p) {
		if (p.isHideImmune) return;

		// Avoid equipment spam on the map
		p.e.mapColour = null;
	}

	static #decideOne(p) {
		// Apply & overwrite with defaults
		Effecter.#defaultRarity(p);
		Effecter.#defaultType(p);

		// Overwrite with changes
		Effecter.#preSockets(p);
		Effecter.#sockets(p);
		Effecter.#postSockets(p);

		// Precise hide immunity
		Effecter.#equipment(p);

		// Overwrite with hides
		Effecter.#shrink(p);
		Effecter.#unmap(p);
	}

	/**
	 * Decides what effects should be applied based on each Permutation's
	 * conditions.
	 */
	decide() {
		for (let p of this.#permutationManager.ps) {
			Effecter.#decideOne(p);
		}
	}
}
