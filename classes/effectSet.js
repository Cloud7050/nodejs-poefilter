/* [Exports] */
export class EffectSet {
	static TEXT_SIZE = {
		SMALLEST: "18", // Shrink
		DEFAULT: "32",
		LARGEST: "45" // Unique
	};
	static RGB = {
		LIME: "85 255 85", // Triple link
		PINK: "255 85 255", // White
		YELLOW: "255 255 85", // RGB
		CYAN: "85 255 255", // Triple blue
		PURPLE: "170 0 170", // Mirrored
		CRIMSON: "170 0 0" // Corrupted
	};

	static COLOUR = {
		WHITE: "White", // Normal
		BLUE: "Blue", // Magic
		YELLOW: "Yellow", // Rare
		ORANGE: "Orange" // Unique
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
		PENTAGON: "Pentagon" // Corrupted
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
