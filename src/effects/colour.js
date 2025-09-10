import { argbFromRgb, blueFromArgb, greenFromArgb, redFromArgb, TonalPalette } from "@material/material-color-utilities";

export class Colour {
	static PRESET = {
		BLACK: "Grey",
		PURPLE: "Purple",
		ORANGE: "Orange",
		SILVER: "White",
		BLUE: "Blue",
		LIME: "Green",
		CYAN: "Cyan",
		// ROSE: "Red",
		PINK: "Pink",
		YELLOW: "Yellow",
		BROWN: "Brown",
	};

	static BLACK = new Colour(0, 0, 0);
	static BLACK_TRANSLUCENT = new Colour(0, 0, 0, 128);
	static TRANSPARENT = new Colour(0, 0, 0, 0);
	// static NAVY = new Colour(0, 0, 170);
	// static GREEN = new Colour(0, 170, 0);
	// static TEAL = new Colour(0, 170, 170);
	// static CRIMSON = new Colour(170, 0, 0);
	static PURPLE = new Colour(170, 0, 170);
	// static ORANGE = new Colour(255, 170, 0);
	// static SILVER = new Colour(170, 170, 170);
	// static GREY = new Colour(85, 85, 85);
	// static BLUE = new Colour(85, 85, 255);
	static LIME = new Colour(85, 255, 85);
	// static CYAN = new Colour(85, 255, 255);
	// static ROSE = new Colour(255, 85, 85);
	static PINK = new Colour(255, 85, 255);
	// static YELLOW = new Colour(255, 255, 85);
	// static WHITE = new Colour(255, 255, 255);

	static NORMAL = new Colour(200, 200, 200);
	static MAGIC = new Colour(123, 151, 255);
	static RARE = new Colour(255, 225, 87);
	static UNIQUE = new Colour(241, 106, 33);

	static GEM_UNCUT = new Colour(116, 201, 190);
	static GEM = new Colour(27, 162, 155);
	static CRAFTED = new Colour(184, 218, 242);
	static QUEST = new Colour(74, 230, 58);

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
