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
		NAVY: "0 0 170",
		GREEN: "0 170 0",
		// TEAL: "0 170 170",
		// CRIMSON: "170 0 0",
		PURPLE: "170 0 170",
		// ORANGE: "255 170 0",
		// SILVER: "170 170 170",
		GREY: "85 85 85",
		// BLUE: "85 85 255",
		LIME: "85 255 85",
		CYAN: "85 255 255",
		ROSE: "255 85 85",
		PINK: "255 85 255",
		YELLOW: "255 255 85"
		// WHITE: "255 255 255"
	};
	// These are colours from vanilla
	static RGB_GAME = {
		// QUEST: "74 230 58",
		// CURRENCY: "170 158 130",
		// GEM: "27 162 155",
		// CARD: "14 186 255",
		// NORMAL: "200 200 200",
		MAGIC: "136 136 255",
		// RARE: "255 255 119",
		// UNIQUE: "175 96 37",
		CORRUPTED: "210 0 0"
	};
	// Default alpha is 240
	static RGBA = {
		FADED: "0 0 0 170",
		WHITE: "255 255 255 210"
	};

	// Map/beam preset colours
	static COLOUR = {
		// BLACK: "Grey",
		// PURPLE: "Purple",
		ORANGE: "Orange",
		SILVER: "White",
		BLUE: "Blue",
		LIME: "Green",
		CYAN: "Cyan",
		ROSE: "Red",
		PINK: "Pink",
		YELLOW: "Yellow",
		BROWN: "Brown"
	};
	static ICON = {
		HOUSE: "UpsideDownHouse",
		CIRCLE: "Circle",
		HEXAGON: "Hexagon",
		DIAMOND: "Diamond",
		STAR: "Star",
		CROSS: "Cross",
		KITE: "Kite",
		RAINDROP: "Raindrop",
		SQUARE: "Square",
		PENTAGON: "Pentagon",
		TRIANGLE: "Triangle",
		MOON: "Moon"
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

		if (this.beamColour !== null) {
			lines.push(`PlayEffect ${this.beamColour}`);
		}
		if (this.mapColour !== null) {
			lines.push(`MinimapIcon ${this.mapSize} ${this.mapColour} ${this.mapIcon}`);
		}

		return lines;
	}
}
