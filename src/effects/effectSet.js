import { Colour } from "./colour.js";
import { MapEffect } from "./mapEffect.js";

export class EffectSet {
	static VISIBILITY = {
		SHOW: "Show",
		HIDE: "Hide",
	};

	static TEXT_SIZE = {
		SMALLEST: "18",
		SMALL: "27",
		DEFAULT: "32",
		LARGE: "37",
		LARGEST: "45",
	};

	static SOUND = {
		WAH: "WAH.mp3",
		DISABLE: "None",
	};

	visibility = EffectSet.VISIBILITY.SHOW;

	textSize = null;
	textColour = null; // Colour
	backgroundColour = null; // Colour
	outlineColour = null; // Colour

	beamColour = null;
	sound = null;
	mapEffect = null; // MapEffect

	getBlockStart() {
		return this.visibility;
	}

	export() {
		let spans = [];

		if (this.textSize !== null) spans.push(`SetFontSize ${this.textSize}`);
		if (this.textColour !== null) spans.push(`SetTextColor ${this.textColour.export()}`); // Alpha defaults to 255
		if (this.backgroundColour !== null) spans.push(`SetBackgroundColor ${this.backgroundColour.export()}`); // Alpha defaults to 240
		if (this.outlineColour !== null) spans.push(`SetBorderColor ${this.outlineColour.export()}`); // Alpha defaults to 255

		if (this.beamColour !== null) spans.push(`PlayEffect ${this.beamColour}`);
		if (this.sound !== null) spans.push(`CustomAlertSound "${this.sound}"`);
		if (this.mapEffect !== null) spans.push(this.mapEffect.export());

		if (spans.length === 0) {
			// Force empty line to represent where the set goes
			return ["#"];
		}
		return spans;
	}

	fade() {
		this.textSize = EffectSet.TEXT_SIZE.SMALLEST;
		this.backgroundColour = Colour.BLACK_TRANSLUCENT;

		// Explicitly put empty map effect to express intent to hide, making the filter overwrite any previous shows
		this.mapEffect = new MapEffect();

		return this;
	}

	colourWisdom(mainColour, backgroundColour = undefined) {
		backgroundColour = backgroundColour ?? mainColour.tone(5);

		this.textColour = mainColour.tone(90);
		this.backgroundColour = backgroundColour;
		this.outlineColour = mainColour.tone(90);
		return this;
	}
	colourAugment(mainColour, backgroundColour = undefined) {
		backgroundColour = backgroundColour ?? mainColour.tone(15);

		this.textColour = mainColour.tone(80);
		this.backgroundColour = backgroundColour;
		this.outlineColour = mainColour.tone(80);
		return this;
	}
	colourExalt(mainColour, backgroundColour = undefined) {
		backgroundColour = backgroundColour ?? mainColour.tone(25);

		this.textColour = mainColour.tone(70);
		this.backgroundColour = backgroundColour;
		this.outlineColour = mainColour.tone(70);
		return this;
	}
	colourChance(mainColour, backgroundColour = undefined) {
		backgroundColour = backgroundColour ?? mainColour.tone(60);

		this.textColour = mainColour.tone(10);
		this.backgroundColour = backgroundColour;
		this.outlineColour = mainColour.tone(10);
		return this;
	}
	colourDivine(mainColour, backgroundColour = undefined) {
		backgroundColour = backgroundColour ?? mainColour.tone(95);

		this.textColour = mainColour.tone(50);
		this.backgroundColour = backgroundColour;
		this.outlineColour = mainColour.tone(50);
		return this;
	}

	sizeWisdom(mapColour, mapIcon = MapEffect.ICON.KITE) {
		this.textSize = EffectSet.TEXT_SIZE.SMALL;
		this.mapEffect = new MapEffect(MapEffect.SIZE.SMALL, mapColour, mapIcon);
		return this;
	}
	sizeAugment(mapColour, mapIcon = MapEffect.ICON.HOUSE) {
		this.textSize = EffectSet.TEXT_SIZE.DEFAULT;
		this.mapEffect = new MapEffect(MapEffect.SIZE.MEDIUM, mapColour, mapIcon);
		return this;
	}
	sizeExalt(mapColour, mapIcon = MapEffect.ICON.CROSS) {
		this.textSize = EffectSet.TEXT_SIZE.LARGE;
		this.mapEffect = new MapEffect(MapEffect.SIZE.LARGE, mapColour, mapIcon);
		return this;
	}
	sizeChance(mapColour, beamColour = mapColour, mapIcon = MapEffect.ICON.STAR) {
		this.textSize = EffectSet.TEXT_SIZE.LARGEST;
		this.beamColour = beamColour;
		this.sound = EffectSet.SOUND.WAH;
		this.mapEffect = new MapEffect(MapEffect.SIZE.LARGE, mapColour, mapIcon);
		return this;
	}
}
