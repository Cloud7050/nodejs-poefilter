import { argbFromRgb, blueFromArgb, greenFromArgb, redFromArgb, TonalPalette } from "@material/material-color-utilities";

export class Colour {
	static PRESET = {
		BLACK: "Grey",
		GREY: "White",
		// RED: "Red",
		BROWN: "Brown",
		ORANGE: "Orange",
		YELLOW: "Yellow",
		GREEN: "Green",
		CYAN: "Cyan",
		BLUE: "Blue",
		PURPLE: "Purple",
		PINK: "Pink",
	};

	static BLACK = new Colour(0, 0, 0);
	static BLACK_TRANSLUCENT = new Colour(0, 0, 0, 128);
	static TRANSPARENT = new Colour(0, 0, 0, 0);
	static WHITE = new Colour(255, 255, 255);

	// https://colors.artyclick.com/color-name-finder
	// static ROSE = Colour.fromHue(0);
	// static RED = Colour.fromHue(20);
	static ORANGE = Colour.fromHue(40);
	static TANGERINE = Colour.fromHue(60);
	static GOLD = Colour.fromHue(80);
	// static YELLOW = Colour.fromHue(100);
	static LIME = Colour.fromHue(120);
	static GREEN = Colour.fromHue(140);
	// static SEAFOAM = Colour.fromHue(160);
	static TEAL = Colour.fromHue(180);
	// static CYAN = Colour.fromHue(200);
	// static SKY = Colour.fromHue(220);
	static CERULEAN = Colour.fromHue(240);
	// static BLUE = Colour.fromHue(260);
	// static LAPIS = Colour.fromHue(280);
	static PURPLE = Colour.fromHue(300);
	// static VIOLET = Colour.fromHue(320);
	static PINK = Colour.fromHue(340);

	// static NORMAL = new Colour(200, 200, 200);
	static MAGIC = new Colour(123, 151, 255);
	static RARE = new Colour(255, 225, 87);
	// static UNIQUE = new Colour(241, 106, 33);

	// static GEM_UNCUT = new Colour(116, 201, 190);
	// static GEM = new Colour(27, 162, 155);
	// static CRAFTED = new Colour(184, 218, 242);
	// static QUEST = new Colour(74, 230, 58);

	r;
	g;
	b;
	a;

	constructor(r, g, b, a = 255) {
		this.r = r;
		this.g = g;
		this.b = b;
		this.a = a;
	}

	// Given a hue, finds the tone that maxes out chroma, ie the key colour.
	static fromHue(hue, chroma = 200) {
		let hct = TonalPalette.fromHueAndChroma(hue, chroma).keyColor;
		let argb = hct.toInt();
		// console.log(`Hue ${hue} → ${hexFromArgb(argb)}`);

		let r = redFromArgb(argb);
		let g = greenFromArgb(argb);
		let b = blueFromArgb(argb);
		return new Colour(r, g, b);
	}

	export() {
		return `${this.r} ${this.g} ${this.b} ${this.a}`;
	}

	// 0-100 "lightness" tone scale (higher is brighter)
	tone(tone) {
		// Convert from 0-255 RGB components, to hexadecimal int aka argb
		let argb = argbFromRgb(this.r, this.g, this.b);
		let palette = TonalPalette.fromInt(argb);

		// https://material-foundation.github.io/material-theme-builder
		let tonedArgb = palette.tone(tone);
		return new Colour(
			redFromArgb(tonedArgb),
			greenFromArgb(tonedArgb),
			blueFromArgb(tonedArgb)
		);
	}
}
