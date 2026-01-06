
export class EffectSet {
	static INDEX_WISDOM = 0;
	static INDEX_AUGMENT = 1;
	static INDEX_EXALT = 2;
	static INDEX_CHANCE = 3;
	static INDEX_DIVINE = 4;

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
		RENOIR: "\"renoir.wav\" 250",
		DISABLE: "None",
	};
	static MAP_SIZE = {
		SMALL: "2",
		MEDIUM: "1",
		LARGE: "0",
		DISABLE: "-1",
	};
	static MAP_ICON = {
		CIRCLE: "Circle",
		CROSS: "Cross",
		DIAMOND: "Diamond",
		// HEXAGON: "Hexagon",
		HOUSE: "UpsideDownHouse",
		KITE: "Kite",
		// MOON: "Moon",
		// PENTAGON: "Pentagon",
		// RAINDROP: "Raindrop",
		STAR: "Star",
		// SQUARE: "Square",
		// TRIANGLE: "Triangle",
	};

	colourIndex = null;
	colourPair = null;
	colourMapOnly = null;
	sizeIndex = null;
	muteCustom = null;

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
		//// Set local values by merging custom values atop colour/size index defaults
		let textColour = this.textColour;
		let backgroundColour = this.backgroundColour;
		let outlineColour = this.outlineColour;
		let mapColour = this.mapColour;
		let mapIcon = this.mapIcon;

		let textSize = this.textSize;
		let beamColour = this.beamColour;
		let sound = this.sound;
		let mapSize = this.mapSize;

		// Replace remaining nulls with index defaults
		let mainColour = this.colourPair?.[0] ?? null;
		mapColour = mapColour ?? this.colourPair?.[1] ?? null;

		switch(this.colourIndex) {
			case EffectSet.INDEX_WISDOM:
				if (!this.colourMapOnly) {
					textColour = textColour ?? mainColour.brightness(87);
					backgroundColour = backgroundColour ?? mainColour.brightness(3);
					outlineColour = outlineColour ?? mainColour.brightness(87);
				}
				mapIcon = mapIcon ?? EffectSet.MAP_ICON.KITE;
				break;
			case EffectSet.INDEX_AUGMENT:
				if (!this.colourMapOnly) {
					textColour = textColour ?? mainColour.brightness(77);
					backgroundColour = backgroundColour ?? mainColour.brightness(10);
					outlineColour = outlineColour ?? mainColour.brightness(77);
				}
				mapIcon = mapIcon ?? EffectSet.MAP_ICON.HOUSE;
				break;
			case EffectSet.INDEX_EXALT:
				if (!this.colourMapOnly) {
					textColour = textColour ?? mainColour.brightness(72);
					backgroundColour = backgroundColour ?? mainColour.brightness(20);
					outlineColour = outlineColour ?? mainColour.brightness(72);
				}
				mapIcon = mapIcon ?? EffectSet.MAP_ICON.CROSS;
				break;
			case EffectSet.INDEX_CHANCE:
				if (!this.colourMapOnly) {
					textColour = textColour ?? mainColour.brightness(10);
					backgroundColour = backgroundColour ?? mainColour.brightness(60);
					outlineColour = outlineColour ?? mainColour.brightness(10);
				}
				mapIcon = mapIcon ?? EffectSet.MAP_ICON.STAR;
				break;
			case EffectSet.INDEX_DIVINE:
				if (!this.colourMapOnly) {
					textColour = textColour ?? mainColour.brightness(45);
					backgroundColour = backgroundColour ?? mainColour.brightness(95);
					outlineColour = outlineColour ?? mainColour.brightness(45);
				}
				mapIcon = mapIcon ?? EffectSet.MAP_ICON.DIAMOND;
				break;
		}

		switch(this.sizeIndex) {
			case EffectSet.INDEX_WISDOM:
				textSize = textSize ?? EffectSet.TEXT_SIZE.SMALL;
				mapSize = mapSize ?? EffectSet.MAP_SIZE.SMALL;
				break;
			case EffectSet.INDEX_AUGMENT:
				textSize = textSize ?? EffectSet.TEXT_SIZE.DEFAULT;
				mapSize = mapSize ?? EffectSet.MAP_SIZE.MEDIUM;
				break;
			case EffectSet.INDEX_EXALT:
				textSize = textSize ?? EffectSet.TEXT_SIZE.LARGE;
				mapSize = mapSize ?? EffectSet.MAP_SIZE.LARGE;
				break;
			case EffectSet.INDEX_CHANCE:
				textSize = textSize ?? EffectSet.TEXT_SIZE.LARGEST;
				beamColour = beamColour ?? mapColour;
				if (!this.muteCustom) sound = sound ?? EffectSet.SOUND.WAH;
				mapSize = mapSize ?? EffectSet.MAP_SIZE.LARGE;
				break;
			case EffectSet.INDEX_DIVINE:
				textSize = textSize ?? EffectSet.TEXT_SIZE.LARGEST;
				beamColour = beamColour ?? mapColour;
				if (!this.muteCustom) sound = sound ?? EffectSet.SOUND.RENOIR;
				mapSize = mapSize ?? EffectSet.MAP_SIZE.LARGE;
				break;
		}
		////

		let spans = [];

		if (textSize !== null) spans.push(`SetFontSize ${textSize}`);
		if (textColour !== null) spans.push(`SetTextColor ${textColour.export()}`); // Alpha defaults to 255
		if (backgroundColour !== null) spans.push(`SetBackgroundColor ${backgroundColour.export()}`); // Alpha defaults to 240
		if (outlineColour !== null) spans.push(`SetBorderColor ${outlineColour.export()}`); // Alpha defaults to 255

		if (beamColour !== null) spans.push(`PlayEffect ${beamColour}`);
		if (sound !== null) spans.push(`CustomAlertSound ${sound}`);
		else if (!this.isVisible) spans.push(`DisableDropSound`);
		if (mapSize === EffectSet.MAP_SIZE.DISABLE) {
			spans.push(`MinimapIcon ${EffectSet.MAP_SIZE.DISABLE}`);
		} else if (mapSize !== null) {
			spans.push(`MinimapIcon ${mapSize} ${mapColour} ${mapIcon}`);
		}

		if (spans.length === 0) {
			// Force empty line to represent where the set goes
			return ["#"];
		}
		return spans;
	}

	// fade() {
	// 	this.textSize = EffectSet.TEXT_SIZE.SMALLEST;
	// 	this.backgroundColour = Colour.BLACK_TRANSLUCENT;
	// 	this.outlineColour = Colour.TRANSPARENT;
	// 	this.mapSize = EffectSet.MAP_SIZE.DISABLE;
	// 	return this;
	// }

	hide() {
		this.isVisible = false;
		return this;
	}

	colourWisdom(colourPair, colourMapOnly = false) {
		this.colourIndex = EffectSet.INDEX_WISDOM;
		this.colourPair = colourPair;
		this.colourMapOnly = colourMapOnly;
		return this;
	}
	colourAugment(colourPair, colourMapOnly = false) {
		this.colourIndex = EffectSet.INDEX_AUGMENT;
		this.colourPair = colourPair;
		this.colourMapOnly = colourMapOnly;
		return this;
	}
	colourExalt(colourPair, colourMapOnly = false) {
		this.colourIndex = EffectSet.INDEX_EXALT;
		this.colourPair = colourPair;
		this.colourMapOnly = colourMapOnly;
		return this;
	}
	colourChance(colourPair, colourMapOnly = false) {
		this.colourIndex = EffectSet.INDEX_CHANCE;
		this.colourPair = colourPair;
		this.colourMapOnly = colourMapOnly;
		return this;
	}
	colourDivine(colourPair, colourMapOnly = false) {
		this.colourIndex = EffectSet.INDEX_DIVINE;
		this.colourPair = colourPair;
		this.colourMapOnly = colourMapOnly;
		return this;
	}

	sizeWisdom(muteCustom = false) {
		this.sizeIndex = EffectSet.INDEX_WISDOM;
		this.muteCustom = muteCustom;
		return this;
	}
	sizeAugment(muteCustom = false) {
		this.sizeIndex = EffectSet.INDEX_AUGMENT;
		this.muteCustom = muteCustom;
		return this;
	}
	sizeExalt(muteCustom = false) {
		this.sizeIndex = EffectSet.INDEX_EXALT;
		this.muteCustom = muteCustom;
		return this;
	}
	sizeChance(muteCustom = false) {
		this.sizeIndex = EffectSet.INDEX_CHANCE;
		this.muteCustom = muteCustom;
		return this;
	}
	sizeDivine(muteCustom = false) {
		this.sizeIndex = EffectSet.INDEX_DIVINE;
		this.muteCustom = muteCustom;
		return this;
	}
}
export const COLOUR_WISDOM = EffectSet.prototype.colourWisdom;
export const COLOUR_AUGMENT = EffectSet.prototype.colourAugment;
export const COLOUR_EXALT = EffectSet.prototype.colourExalt;
export const COLOUR_CHANCE = EffectSet.prototype.colourChance;
export const COLOUR_DIVINE = EffectSet.prototype.colourDivine;
export const SIZE_WISDOM = EffectSet.prototype.sizeWisdom;
export const SIZE_AUGMENT = EffectSet.prototype.sizeAugment;
export const SIZE_EXALT = EffectSet.prototype.sizeExalt;
export const SIZE_CHANCE = EffectSet.prototype.sizeChance;
export const SIZE_DIVINE = EffectSet.prototype.sizeDivine;
