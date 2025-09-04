import { COLOUR } from "../constants.js";
import { MapEffect } from "./mapEffect.js";

export class EffectSet {
	static VISIBILITY = {
		SHOW: "Show",
		HIDE: "Hide"
	};

	static TEXT_SIZE = {
		SMALLEST: "18",
		SMALL: "25",
		DEFAULT: "32",
		LARGE: "39",
		LARGEST: "45"
	};
	static RGB = {
		NORMAL: "200 200 200",
		MAGIC: "136 136 255",
		RARE: "255 255 119",
		// UNIQUE: "175 96 37",

		GEM: "119 206 195",

		// BLACK: "0 0 0",
		// NAVY: "0 0 170",
		// GREEN: "0 170 0",
		// TEAL: "0 170 170",
		CRIMSON: "170 0 0",
		// PURPLE: "170 0 170",
		// ORANGE: "255 170 0",
		// SILVER: "170 170 170",
		// GREY: "85 85 85",
		// BLUE: "85 85 255",
		LIME: "85 255 85",
		// CYAN: "85 255 255",
		// ROSE: "255 85 85",
		// PINK: "255 85 255",
		// YELLOW: "255 255 85",
		// WHITE: "255 255 255"
	};
	// Default alpha is 240
	static RGBA = {
		BLACK: "0 0 0 255",
		BLACK_TRANSLUCENT: "0 0 0 128",
		TRANSPARENT: "0 0 0 0",
		// DARK_NAVY: "20 20 40 255",
		// DARK_GREEN: "20 40 20 255",
		// DARK_TEAL: "20 40 40 255",
		DARK_CRIMSON: "40 20 20 255",
		// DARK_PURPLE: "40 20 40 255",
		DARK_ORANGE: "60 40 20 255",
		// DARK_SILVER: "40 40 40 255",
		// DARK_GREY: "20 20 20 255",
		// DARK_BLUE: "20 20 60 255",
		// DARK_LIME: "20 60 20 255",
		// DARK_CYAN: "20 60 60 255",
		// DARK_ROSE: "60 20 20 255",
		// DARK_PINK: "60 20 60 255",
		// DARK_YELLOW: "60 60 20 255",
		// DARK_WHITE: "60 60 60 255"
	};

	static COLOUR = COLOUR;
	static SOUND = {
		WAH: "WAH.mp3",
		DISABLE: "None"
	};

	visibility = EffectSet.VISIBILITY.SHOW;

	textSize = null;
	textColour = null;
	backgroundColour = null;
	outlineColour = null;

	beamColour = null;
	sound = null;
	mapEffect = null; // MapEffect

	getBlockStart() {
		return this.visibility;
	}

	export() {
		let spans = [];

		if (this.textSize !== null) spans.push(`SetFontSize ${this.textSize}`);
		if (this.textColour !== null) spans.push(`SetTextColor ${this.textColour}`);
		if (this.backgroundColour !== null) spans.push(`SetBackgroundColor ${this.backgroundColour}`);
		if (this.outlineColour !== null) spans.push(`SetBorderColor ${this.outlineColour}`);

		if (this.beamColour !== null) spans.push(`PlayEffect ${this.beamColour}`);
		if (this.sound !== null) spans.push(`CustomAlertSound "${this.sound}"`);
		if (this.mapEffect !== null) spans.push(this.mapEffect.export());

		if (spans.length === 0) {
			// Force empty line to represent where the set goes
			return ["#"];
		}
		return spans;
	}

	// Make less prominent, ignoreable
	fade() {
		this.textSize = EffectSet.TEXT_SIZE.SMALLEST;
		this.backgroundColour = EffectSet.RGBA.BLACK_TRANSLUCENT;

		// Explicitly put empty map effect to express intent to hide, making the filter overwrite any previous shows
		this.mapEffect = new MapEffect();

		return this;
	}
}
