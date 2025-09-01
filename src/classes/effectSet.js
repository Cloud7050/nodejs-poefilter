/* [Exports] */
export class EffectSet {
	static VISIBILITY = {
		HIDE: "Hide",
		SHOW: "Show"
	};

	static TEXT_SIZE = {
		SMALLEST: "18",
		DEFAULT: "32",
		LARGEST: "45"
	};
	// Default alpha is 240
	static RGBA = {
		// BACKGROUND_BLACK: "0 0 0 255",
		BACKGROUND_BLACK_FADED: "0 0 0 170",
		// BACKGROUND_NAVY: "20 20 40 255",
		// BACKGROUND_GREEN: "20 40 20 255",
		// BACKGROUND_TEAL: "20 40 40 255",
		// BACKGROUND_CRIMSON: "40 20 20 255",
		// BACKGROUND_PURPLE: "40 20 40 255",
		// BACKGROUND_ORANGE: "60 40 20 255",
		// BACKGROUND_SILVER: "40 40 40 255",
		// BACKGROUND_GREY: "20 20 20 255",
		// BACKGROUND_BLUE: "20 20 60 255",
		// BACKGROUND_LIME: "20 60 20 255",
		// BACKGROUND_CYAN: "20 60 60 255",
		// BACKGROUND_ROSE: "60 20 20 255",
		// BACKGROUND_PINK: "60 20 60 255",
		// BACKGROUND_YELLOW: "60 60 20 255",
		// BACKGROUND_WHITE: "60 60 60 255"
	};

	static COLOUR = {
		// BLACK: "Grey",
		// PURPLE: "Purple",
		// ORANGE: "Orange",
		SILVER: "White",
		// BLUE: "Blue",
		// LIME: "Green",
		// CYAN: "Cyan",
		// ROSE: "Red",
		// PINK: "Pink",
		// YELLOW: "Yellow",
		// BROWN: "Brown"
	};
	static MAP_ICON = {
		// CIRCLE: "Circle",
		// CROSS: "Cross",
		// DIAMOND: "Diamond",
		// HEXAGON: "Hexagon",
		// HOUSE: "UpsideDownHouse",
		KITE: "Kite",
		// MOON: "Moon",
		// PENTAGON: "Pentagon",
		// RAINDROP: "Raindrop",
		// STAR: "Star",
		// SQUARE: "Square",
		// TRIANGLE: "Triangle"
	};
	static MAP_SIZE = {
		SMALL: "2",
		MEDIUM: "1",
		LARGE: "0",
		DISABLE: "-1"
	};

	visibility = EffectSet.VISIBILITY.SHOW;

	textSize = null;
	backgroundColour = null;

	// null colour means we don't want to show at all. Map colour, icon, size must be filled together
	mapColour = null;
	mapIcon = EffectSet.MAP_ICON.KITE;
	mapSize = EffectSet.MAP_SIZE.SMALL;

	getBlockStart() {
		return this.visibility;
	}

	export() {
		let spans = [];

		if (this.textSize !== null) {
			spans.push(`SetFontSize ${this.textSize}`);
		}
		if (this.backgroundColour !== null) {
			spans.push(`SetBackgroundColor ${this.backgroundColour}`);
		}

		if (this.mapColour !== null) {
			spans.push(`MinimapIcon ${this.mapSize} ${this.mapColour} ${this.mapIcon}`);
		} else {
			// To hide from minimap, we need to explicitly express this intent in the filter
			spans.push(`MinimapIcon ${EffectSet.MAP_SIZE.DISABLE}`);
		}

		// Force a blank line to represent where the set goes
		if (spans.length === 0) return [""];
		return spans;
	}

	// Make less prominent, ignoreable
	fade() {
		this.textSize = EffectSet.TEXT_SIZE.SMALLEST;
		this.backgroundColour = EffectSet.RGBA.BACKGROUND_BLACK_FADED;

		this.mapColour = null;

		return this;
	}

	// Default minimap look
	map() {
		this.mapColour = EffectSet.COLOUR.SILVER;
		this.mapIcon = EffectSet.MAP_ICON.KITE;
		this.mapSize = EffectSet.MAP_SIZE.SMALL;

		return this;
	}
}
