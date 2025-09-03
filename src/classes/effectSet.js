import { COLOUR } from "./constants.js";
import { MapEffect } from "./mapEffect.js";

export class EffectSet {
	static VISIBILITY = {
		SHOW: "Show",
		HIDE: "Hide"
	};

	static TEXT_SIZE = {
		SMALLEST: "18",
		DEFAULT: "32",
		LARGEST: "45"
	};
	static RGB = {
		NORMAL: "200 200 200",
		MAGIC: "136 136 255",

		// BLACK: "0 0 0",
		// NAVY: "0 0 170",
		// GREEN: "0 170 0",
		// TEAL: "0 170 170",
		// CRIMSON: "170 0 0",
		// PURPLE: "170 0 170",
		// ORANGE: "255 170 0",
		// SILVER: "170 170 170",
		// GREY: "85 85 85",
		// BLUE: "85 85 255",
		// LIME: "85 255 85",
		// CYAN: "85 255 255",
		// ROSE: "255 85 85",
		// PINK: "255 85 255",
		// YELLOW: "255 255 85",
		// WHITE: "255 255 255"
	};
	// Default alpha is 240
	static RGBA = {
		BACKGROUND_BLACK: "0 0 0 255",
		BACKGROUND_BLACK_FADED: "0 0 0 170",
		// BACKGROUND_NAVY: "20 20 40 255",
		// BACKGROUND_GREEN: "20 40 20 255",
		// BACKGROUND_TEAL: "20 40 40 255",
		// BACKGROUND_CRIMSON: "40 20 20 255",
		// BACKGROUND_PURPLE: "40 20 40 255",
		BACKGROUND_ORANGE: "60 40 20 255",
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

	static COLOUR = COLOUR;

	visibility = EffectSet.VISIBILITY.SHOW;

	textSize = null;
	backgroundColour = null;
	outlineColour = null;

	mapEffect = null; // MapEffect

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
		if (this.outlineColour !== null) {
			spans.push(`SetBorderColor ${this.outlineColour}`);
		}

		if (this.mapEffect !== null) {
			spans.push(this.mapEffect.export());
		}

		// Force a blank line to represent where the set goes
		if (spans.length === 0) return [""];
		return spans;
	}

	// Make less prominent, ignoreable
	fade() {
		this.textSize = EffectSet.TEXT_SIZE.SMALLEST;
		this.backgroundColour = EffectSet.RGBA.BACKGROUND_BLACK_FADED;

		// Explicitly put empty map effect to express intent to hide, making the filter overwrite any previous shows
		this.mapEffect = new MapEffect();

		return this;
	}
}
