/* [Exports] */
export class EffectSet {
	static TEXT_SIZE = {
		SMALLEST: "18", // Shrink
		DEFAULT: "32",
		LARGEST: "45" // Unique
	};
	// Avoid white/orange outlines as those are done in vanilla
	static RGB = {
		BLACK: "0 0 0",
		NAVY: "0 0 170", // Mirrored
		GREEN: "0 170 0", // Currency
		TEAL: "0 170 170",
		CRIMSON: "170 0 0",
		PURPLE: "170 0 170", // RGB
		// ORANGE: "255 170 0",
		SILVER: "170 170 170",
		GREY: "85 85 85",
		BLUE: "85 85 255",
		LIME: "85 255 85", // Looty
		CYAN: "85 255 255",
		ROSE: "255 85 85", // Four link
		PINK: "255 85 255", // White
		YELLOW: "255 255 85" // Four
		// WHITE: "255 255 255"
	};
	static RGB_GAME = {
		CURRENCY: "170 158 130",
		GEM: "27 162 155",
		NORMAL: "200 200 200", // Three link
		MAGIC: "136 136 255", // Quality
		RARE: "255 255 119",
		UNIQUE: "175 96 37",
		QUEST: "74 230 58",
		CORRUPTED: "210 0 0" // Corrupted
	};
	// Default alpha is 240
	static RGBA = {
		FADED: "0 0 0 170",
		WHITE: "255 255 255 210"
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
		HOUSE: "UpsideDownHouse", // Default other
		KITE: "Kite", // Default equipment
		DIAMOND: "Diamond", // Three Link
		PENTAGON: "Pentagon", // White
		RAINDROP: "Raindrop", // RGB
		CROSS: "Cross", // Four
		STAR: "Star", // Four link
		HEXAGON: "Hexagon", // Quality
		MOON: "Moon", // Mirrored
		TRIANGLE: "Triangle", // Corrupted
		CIRCLE: "Circle", // Looty
		SQUARE: "Square"
	};
	static ICON_SIZE = {
		SMALL: "2", // Default
		MEDIUM: "1", // Rare
		LARGE: "0" // Unique
	};

	textSize = null;
	textColour = null;
	backgroundColour = null;
	outlineColour = null;

	mapColour = null;
	mapIcon = EffectSet.ICON.KITE;
	mapSize = EffectSet.ICON_SIZE.SMALL;

	beamColour = null;

	equals(other) {
		return (
			this.textSize === other.textSize
			&& this.textColour === other.textColour
			&& this.backgroundColour === other.backgroundColour
			&& this.outlineColour === other.outlineColour

			&& this.mapColour === other.mapColour
			&& this.mapIcon === other.mapIcon
			&& this.mapSize === other.mapSize

			&& this.beamColour === other.beamColour
		);
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

		if (this.mapColour !== null) {
			lines.push(`MinimapIcon ${this.mapSize} ${this.mapColour} ${this.mapIcon}`);
		}

		if (this.beamColour !== null) {
			lines.push(`PlayEffect ${this.beamColour}`);
		}

		return lines;
	}
}
