/* [Exports] */
export class EffectSet {
	static VISIBILITY = {
		SHOW: 3,
		SHRINK_UNMAP: 2,
		HIDE: 1
	};

	static TEXT_SIZE = {
		SMALLEST: "18",
		DEFAULT: "32",
		LARGEST: "45"
	};
	static RGB = {
		// BLACK: "0 0 0",
		NAVY: "0 0 170", // Outline colour: Mirrored
		GREEN: "0 170 0", // Outline colour: Labyrinth items
		TEAL: "0 170 170", // Outline colour: Gems. Quality
		CRIMSON: "170 0 0", // Outline colour: Corrupted
		PURPLE: "170 0 170", // Outline colour: RGB
		ORANGE: "255 170 0", // Text colour: (Perceived) rarity unique | Outline colour: 6
		SILVER: "170 170 170", // Text colour: (Perceived) rarity normal | Outline colour: 3 link
		// GREY: "85 85 85",
		BLUE: "85 85 255", // Text colour: (Perceived) rarity magic | Outline colour: Divination cards. 4
		LIME: "85 255 85", // Text colour: Quest items | Outline colour: Currencies. Looty
		// CYAN: "85 255 255",
		// ROSE: "255 85 85",
		// PINK: "255 85 255",
		YELLOW: "255 255 85", // Text colour: (Perceived) rarity rare | Outline colour: Map items. 5
		WHITE: "255 255 255" // Outline colour: White
	};
	// Default alpha is 240
	static RGBA = {
		BLACK: "0 0 0 255",
		BLACK_FADED: "0 0 0 170",
		DARK_GREY: "50 50 50 255"
	};

	static SOUND = {
		WAH: "WAH.mp3"
	};

	// Map/beam preset colours
	static COLOUR = {
		// BLACK: "Grey",
		// PURPLE: "Purple",
		ORANGE: "Orange", // Map colour: (Perceived) rarity unique
		SILVER: "White", // Map colour: (Perceived) rarity normal
		BLUE: "Blue", // Map colour: (Perceived) rarity magic
		LIME: "Green", // Beam: Currencies expensive
		// CYAN: "Cyan",
		// ROSE: "Red",
		// PINK: "Pink",
		YELLOW: "Yellow" // Map colour: (Perceived) rarity rare | Beam: Map items unique
		// BROWN: "Brown"
	};
	static ICON = {
		HOUSE: "UpsideDownHouse", // Others
		KITE: "Kite", // Equipment
		CIRCLE: "Circle", // Fractured
		CROSS: "Cross", // 5
		STAR: "Star", // 6
		RAINDROP: "Raindrop", // RGB
		MOON: "Moon" // Mirrored, corrupted
		// HEXAGON: "Hexagon",
		// SQUARE: "Square",
		// DIAMOND: "Diamond",
		// TRIANGLE: "Triangle",
		// PENTAGON: "Pentagon",
	};
	static ICON_SIZE = {
		SMALL: "2",
		MEDIUM: "1",
		LARGE: "0"
	};

	visibility = EffectSet.VISIBILITY.SHOW;

	textSize = null;
	textColour = null;
	backgroundColour = null;
	outlineColour = null;

	isSilent = null;
	sound = null;

	beamColour = null;
	/** If null colour, will not show on minimap. */
	mapColour = null;
	mapIcon = EffectSet.ICON.KITE;
	mapSize = EffectSet.ICON_SIZE.SMALL;

	equals(other) {
		return (
			this.visibility === other.visibility

			&& this.textSize === other.textSize
			&& this.textColour === other.textColour
			&& this.backgroundColour === other.backgroundColour
			&& this.outlineColour === other.outlineColour

			&& this.isSilent === other.isSilent

			&& this.beamColour === other.beamColour
			&& this.mapColour === other.mapColour
			&& this.mapIcon === other.mapIcon
			&& this.mapSize === other.mapSize
		);
	}

	getBlockStart() {
		if (this.visibility <= EffectSet.VISIBILITY.HIDE) return "Hide";

		return "Show";
	}

	export() {
		let lines = [];

		if (this.textSize !== null) {
			lines.push(`SetFontSize ${this.textSize}`);
		}
		if (this.textColour !== null) {
			lines.push(`SetTextColor ${this.textColour}`);
		}
		if (this.backgroundColour !== null) {
			lines.push(`SetBackgroundColor ${this.backgroundColour}`);
		}
		if (this.outlineColour !== null) {
			lines.push(`SetBorderColor ${this.outlineColour}`);
		}

		if (this.isSilent === true) {
			lines.push("DisableDropSound");
		}
		if (this.sound !== null) {
			lines.push(`CustomAlertSound "${this.sound}"`);
		}

		if (this.beamColour !== null) {
			lines.push(`PlayEffect ${this.beamColour}`);
		}
		if (this.mapColour !== null) {
			lines.push(`MinimapIcon ${this.mapSize} ${this.mapColour} ${this.mapIcon}`);
		}

		return lines;
	}
}
