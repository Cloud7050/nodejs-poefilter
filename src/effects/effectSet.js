import { Colour } from "./colour.js";

export class EffectSet {
	static TEXT_SIZE = {
		SMALLEST: "18",
		SMALL: "27",
		DEFAULT: "32",
		LARGE: "37",
		LARGEST: "45",
	};

	static SOUND = {
		// Custom sounds default to 100 volume, of 0-300
		WAH: "\"WAH.mp3\"",
		RENOIR: "\"renoir.wav\" 200",
		DISABLE: "None",
	};
	static MAP_SIZE = {
		SMALL: "2",
		MEDIUM: "1",
		LARGE: "0",
		DISABLE: "-1",
	};
	static MAP_ICON = {
		// CIRCLE: "Circle",
		CROSS: "Cross",
		DIAMOND: "Diamond",
		// HEXAGON: "Hexagon",
		HOUSE: "UpsideDownHouse",
		KITE: "Kite",
		// MOON: "Moon",
		// PENTAGON: "Pentagon",
		// RAINDROP: "Raindrop",
		STAR: "Star",
		SQUARE: "Square",
		// TRIANGLE: "Triangle",
	};

	isVisible = true;

	textSize = null;
	textColour = null; // Colour
	backgroundColour = null; // Colour
	outlineColour = null; // Colour

	beamColour = null;
	sound = null;
	mapSize = null;
	mapColour = null;
	mapIcon = null;

	getBlockStart() {
		return this.isVisible ? "Show" : "Hide";
	}

	export() {
		let spans = [];

		if (this.textSize !== null) spans.push(`SetFontSize ${this.textSize}`);
		if (this.textColour !== null) spans.push(`SetTextColor ${this.textColour.export()}`); // Alpha defaults to 255
		if (this.backgroundColour !== null) spans.push(`SetBackgroundColor ${this.backgroundColour.export()}`); // Alpha defaults to 240
		if (this.outlineColour !== null) spans.push(`SetBorderColor ${this.outlineColour.export()}`); // Alpha defaults to 255

		if (this.beamColour !== null) spans.push(`PlayEffect ${this.beamColour}`);
		if (this.sound !== null) spans.push(`CustomAlertSound ${this.sound}`);
		if (this.mapSize === EffectSet.MAP_SIZE.DISABLE) {
			spans.push(`MinimapIcon ${EffectSet.MAP_SIZE.DISABLE}`);
		} else if (this.mapSize !== null) {
			spans.push(`MinimapIcon ${this.mapSize} ${this.mapColour} ${this.mapIcon}`);
		}

		if (spans.length === 0) {
			// Force empty line to represent where the set goes
			return ["#"];
		}
		return spans;
	}

	fade() {
		this.textSize = EffectSet.TEXT_SIZE.SMALLEST;
		this.backgroundColour = Colour.BLACK_TRANSLUCENT;
		this.outlineColour = Colour.TRANSPARENT;
		this.mapSize = EffectSet.MAP_SIZE.DISABLE;
		return this;
	}

	hide() {
		this.isVisible = false;
		return this;
	}

	colourWisdom(mainColour, mapColour, backgroundColour = mainColour.brightness(3)) {
		this.textColour = mainColour.brightness(87);
		this.backgroundColour = backgroundColour;
		this.outlineColour = mainColour.brightness(87);
		this.mapColour = mapColour;
		this.mapIcon = EffectSet.MAP_ICON.KITE;
		return this;
	}
	colourAugment(mainColour, mapColour, backgroundColour = mainColour.brightness(10)) {
		this.textColour = mainColour.brightness(77);
		this.backgroundColour = backgroundColour;
		this.outlineColour = mainColour.brightness(77);
		this.mapColour = mapColour;
		this.mapIcon = EffectSet.MAP_ICON.HOUSE;
		return this;
	}
	colourExalt(mainColour, mapColour, backgroundColour = mainColour.brightness(20)) {
		this.textColour = mainColour.brightness(72);
		this.backgroundColour = backgroundColour;
		this.outlineColour = mainColour.brightness(72);
		this.mapColour = mapColour;
		this.mapIcon = EffectSet.MAP_ICON.CROSS;
		return this;
	}
	colourChance(mainColour, mapColour, backgroundColour = mainColour.brightness(60)) {
		this.textColour = mainColour.brightness(10);
		this.backgroundColour = backgroundColour;
		this.outlineColour = mainColour.brightness(10);
		this.mapColour = mapColour;
		this.mapIcon = EffectSet.MAP_ICON.STAR;
		return this;
	}
	colourDivine(mainColour, mapColour, backgroundColour = mainColour.brightness(95)) {
		this.textColour = mainColour.brightness(45);
		this.backgroundColour = backgroundColour;
		this.outlineColour = mainColour.brightness(45);
		this.mapColour = mapColour;
		this.mapIcon = EffectSet.MAP_ICON.DIAMOND;
		return this;
	}

	sizeWisdom() {
		this.textSize = EffectSet.TEXT_SIZE.SMALL;
		this.mapSize = EffectSet.MAP_SIZE.SMALL;
		return this;
	}
	sizeAugment() {
		this.textSize = EffectSet.TEXT_SIZE.DEFAULT;
		this.mapSize = EffectSet.MAP_SIZE.MEDIUM;
		return this;
	}
	sizeExalt() {
		this.textSize = EffectSet.TEXT_SIZE.LARGE;
		this.mapSize = EffectSet.MAP_SIZE.LARGE;
		return this;
	}
	sizeChance(beamColour = this.mapColour) {
		this.textSize = EffectSet.TEXT_SIZE.LARGEST;
		this.beamColour = beamColour;
		this.sound = EffectSet.SOUND.WAH;
		this.mapSize = EffectSet.MAP_SIZE.LARGE;
		return this;
	}
	sizeDivine(beamColour = this.mapColour) {
		this.textSize = EffectSet.TEXT_SIZE.LARGEST;
		this.beamColour = beamColour;
		this.sound = EffectSet.SOUND.RENOIR;
		this.mapSize = EffectSet.MAP_SIZE.LARGE;
		return this;
	}
}
