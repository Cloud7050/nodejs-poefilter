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
