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

	visibility = EffectSet.VISIBILITY.SHOW;

	textSize = null;
	backgroundColour = null;

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

		return spans;
	}

	// Make less prominent, ignoreable
	fade() {
		this.textSize = EffectSet.TEXT_SIZE.SMALLEST;
		this.backgroundColour = EffectSet.RGBA.BACKGROUND_BLACK_FADED;
		return this;
	}
}
