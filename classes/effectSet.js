/* [Imports] */
import { ConditionSet } from "./conditionSet.js";



/* [Exports] */
export class EffectSet {
	static TEXT_SIZE = {
		SMALLEST: "18", // Shrink
		DEFAULT: "32",
		LARGEST: "45" // Unique
	};
	// Avoid white, orange outlines as those are done in vanilla
	static RGB = {
		BLACK: "0 0 0",
		NAVY: "0 0 170",
		GREEN: "0 170 0",
		TEAL: "0 170 170",
		CRIMSON: "170 0 0", // Corrupted
		PURPLE: "170 0 170", // Mirrored
		ORANGE: "255 170 0",
		SILVER: "170 170 170",
		GREY: "85 85 85",
		BLUE: "85 85 255",
		LIME: "85 255 85", // Triple link
		CYAN: "85 255 255", // Triple blue
		ROSE: "255 85 85",
		PINK: "255 85 255", // White
		YELLOW: "255 255 85", // RGB
		WHITE: "255 255 255"
	};

	static COLOUR = {
		BLACK: "Grey",
		PURPLE: "Purple",
		ORANGE: "Orange", // Unique
		SILVER: "White", // Normal
		BLUE: "Blue", // Magic
		LIME: "Green", // Currency
		CYAN: "Cyan", // Gem
		ROSE: "Red",
		PINK: "Pink", // Other
		YELLOW: "Yellow", // Rare
		BROWN: "Brown"
	};
	static ICON = {
		RAINDROP: "Raindrop", // Other
		KITE: "Kite", // Currency
		HOUSE: "UpsideDownHouse", // Gem
		CIRCLE: "Circle", // Default equipment
		CROSS: "Cross", // Triple link
		STAR: "Star", // Triple blue
		DIAMOND: "Diamond", // RGB
		SQUARE: "Square", // White
		MOON: "Moon", // Mirrored
		PENTAGON: "Pentagon", // Corrupted
		HEXAGON: "Hexagon",
		TRIANGLE: "Triangle"
	};
	static ICON_SIZE = {
		SMALL: "2", // Default
		MEDIUM: "1", // Rare
		LARGE: "0" // Unique
	};

	textSize = null;
	outlineColour = null;

	mapColour = null;
	mapIcon = EffectSet.ICON.CIRCLE;
	mapSize = EffectSet.ICON_SIZE.SMALL;

	beamColour = null;

	export() {
		let lines = [];

		if (this.textSize !== null) {
			lines.push(`SetFontSize ${this.textSize}`);
		}
		if (this.outlineColour !== null) {
			lines.push(`SetBorderColor ${this.outlineColour}`);
		}

		if (this.mapColour !== null) {
			lines.push(`MinimapIcon ${this.mapSize} ${this.mapColour} ${this.mapIcon}`);
		}

		if (this.beamColour !== null) {
			lines.push(`PlayEffect ${this.beamColour}`);
		}

		return lines;
	}
}

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
			case ConditionSet.TYPE.GEM:
				p.e.mapColour = EffectSet.COLOUR.CYAN;
				p.e.mapIcon = EffectSet.ICON.HOUSE;

				p.isHideImmune = true;
				break;
			case ConditionSet.TYPE.CURRENCY:
				p.e.mapColour = EffectSet.COLOUR.LIME;
				p.e.mapIcon = EffectSet.ICON.KITE;

				p.isHideImmune = true;
				break;
			case ConditionSet.TYPE.OTHER:
				p.e.mapColour = EffectSet.COLOUR.PINK;
				p.e.mapIcon = EffectSet.ICON.RAINDROP;

				p.isHideImmune = true;
				break;
		}
	}

	/**
	 * Gives effects based on sockets.
	 */
	static #sockets(p) {
		if (p.c.isTripleBlueLink) {
			p.e.outlineColour = EffectSet.RGB.CYAN;
			p.e.mapIcon = EffectSet.ICON.STAR;

			p.isFluffOutline = true;
		} else if (p.c.isRgb) {
			p.e.outlineColour = EffectSet.RGB.YELLOW;
			p.e.mapIcon = EffectSet.ICON.DIAMOND;

			// Can be vendored
			p.isHideImmune = true;
		} else if (p.c.isWhite) {
			p.e.outlineColour = EffectSet.RGB.PINK;
			p.e.mapIcon = EffectSet.ICON.SQUARE;
		} else if (p.c.isTripleLink) {
			p.e.outlineColour = EffectSet.RGB.LIME;
			p.e.mapIcon = EffectSet.ICON.CROSS;

			p.isFluffOutline = true;
		}
	}

	/**
	 * Gives effects based on other attributes.
	 */
	static #otherAttributes(p) {
		if (p.c.isCorrupted) {
			p.e.outlineColour = EffectSet.RGB.CRIMSON;
			p.e.mapIcon = EffectSet.ICON.PENTAGON;
		} else if (p.c.isMirrored) {
			p.e.outlineColour = EffectSet.RGB.PURPLE;
			p.e.mapIcon = EffectSet.ICON.MOON;

			// A dupe may have dropped, can be vendor reciped
			p.isHideImmune = true;
		}
	}

	/**
	 * Carefully grants equipment hide immunity based on various conditions.
	 */
	static #equipment(p) {
		//TODO fix this logic of when to un-shrink immune. Update docs here
		//TODO also tweak for 4 socket logic
		//TODO then tweak the colours and icons used everywhere.
		//TODO use quality
		// Try to get parity between outlines and minimap colours,
		// but with relation to text colours



		// Ignore items already deemed hide immune. It is either high rarity
		// (want to always see) or not equipment ("normal rarity" false
		// positive)
		if (p.isHideImmune) return;

		// Items at this point should be:
		// • Equipment, ie weapons/armour
		// • Normal/magic
		// • Not RGB
		// • Not mirrored
		// We decide based on type + rarity + sockets + corruption

		switch (p.c.type) {
			case ConditionSet.TYPE.USED_WEAPON:
			case ConditionSet.TYPE.ARMOUR:
				switch (p.c.rarity) {
					case ConditionSet.RARITY.MAGIC:
						// If any sockets are notable, maybe we'll use it
						if (
							this.isTripleLink
							|| this.isWhite
							|| this.isTripleBlueLink
						) {
							p.isHideImmune = true;
							break;
						}

						// If it's corrupted, we'll only really use it if the sockets were notable.
						// At this point it's not notable yet corrupted, so no immunity granted
						break;
					case ConditionSet.RARITY.NORMAL:
						// If any sockets are especially notable, maybe we'll use it
						if (
							this.isTripleLink
							|| this.isTripleBlueLink
						) {
							p.isHideImmune = true;
							break;
						}

						// If it's corrupted, we'll only really use it if the sockets were notable.
						// At this point it's not notable yet corrupted, so no immunity granted
						break;
				}
				break;
			case ConditionSet.TYPE.UNUSED_WEAPON:
				// We won't use this item, so we ignore rarity, sockets, corruption
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
		Effecter.#sockets(p);
		Effecter.#otherAttributes(p);

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
