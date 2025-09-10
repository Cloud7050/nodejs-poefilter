import { argbFromRgb, blueFromArgb, greenFromArgb, Hct, lerp, redFromArgb, TonalPalette } from "@material/material-color-utilities";
import { HctSolver } from "../../node_modules/@material/material-color-utilities/hct/hct_solver.js";

export class Colour {
	static PRESET = {
		BLACK: "Grey",
		// GREY: "White",
		RED: "Red",
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
	// static WHITE = new Colour(255, 255, 255);

	// https://colors.artyclick.com/color-name-finder
	// static ROSE = Colour.fromHue(0);
	static RED = Colour.fromHue(20);
	// static ORANGE = Colour.fromHue(40);
	// static TANGERINE = Colour.fromHue(60);
	// static GOLD = Colour.fromHue(80);
	static YELLOW = Colour.fromHue(100);
	static LIME = Colour.fromHue(120);
	static GREEN = Colour.fromHue(140);
	static SEAFOAM = Colour.fromHue(160);
	// static TEAL = Colour.fromHue(180);
	static CYAN = Colour.fromHue(200);
	// static SKY = Colour.fromHue(220);
	static CERULEAN = Colour.fromHue(240);
	static BLUE = Colour.fromHue(260);
	static LAPIS = Colour.fromHue(280);
	static PURPLE = Colour.fromHue(300);
	static VIOLET = Colour.fromHue(320);
	// static PINK = Colour.fromHue(340);

	// static NORMAL = new Colour(200, 200, 200);
	static MAGIC = new Colour(123, 151, 255);
	static RARE = new Colour(255, 225, 87);
	// static UNIQUE = new Colour(241, 106, 33);

	// static GEM_UNCUT = new Colour(116, 201, 190);
	// static GEM = new Colour(27, 162, 155); // UNCONFIRMED
	// static CRAFTED = new Colour(184, 218, 242);
	// static QUEST = new Colour(74, 230, 58); // UNCONFIRMED

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

	// Given a hue, finds the tone that maxes out chroma, ie the key colour
	static fromHue(hue, chroma = 200) {
		let hct = TonalPalette.fromHueAndChroma(hue, chroma).keyColor;
		let argb = hct.toInt();
		return new Colour(
			redFromArgb(argb),
			greenFromArgb(argb),
			blueFromArgb(argb)
		);
	}

	static MEMO_TONE = null;
	// Finds the average tone of all the key colours
	static #getAverageTone() {
		if (Colour.MEMO_TONE !== null) return Colour.MEMO_TONE;

		let hueInterval = 20;
		let colourCount = 360 / hueInterval;

		let totalTone = 0;
		for (let i = 0; i < colourCount; i++) {
			let hue = i * hueInterval;

			// For the given hue, find the key colour and thus its tone
			let hct = TonalPalette.fromHueAndChroma(hue, 200).keyColor;
			totalTone += hct.tone;
		}
		let averageKeyTone = totalTone / colourCount;

		Colour.MEMO_TONE = averageKeyTone;
		console.log("averageKeyTone " + averageKeyTone);
		return averageKeyTone;
	}

	static MEMO = {};
	// Gets the chroma we should cap this tone to, based on the max chroma of all hues
	static #getChromaCap(tone) {
		if (Colour.MEMO[tone] !== undefined) return Colour.MEMO[tone];

		let hueInterval = 20;
		let colourCount = 360 / hueInterval;

		let totalMaxChroma = 0;
		let highestMaxChroma = 0;
		for (let i = 0; i < colourCount; i++) {
			let hue = i * hueInterval;

			// For the given hue and tone, find its max chroma
			let argb = HctSolver.solveToInt(hue, 200, tone);
			let hct = Hct.fromInt(argb);
			let maxChroma = hct.chroma;

			totalMaxChroma += maxChroma;
			highestMaxChroma = Math.max(highestMaxChroma, maxChroma);
		}
		let averageMaxChroma = totalMaxChroma / colourCount;
		let maxChroma = (averageMaxChroma + highestMaxChroma) / 2;

		Colour.MEMO[tone] = maxChroma;
		return maxChroma;
	}

	export() {
		return `${this.r} ${this.g} ${this.b} ${this.a}`;
	}

	brightness(brightness) {
		// Brightness is our expression of how bright we want the tone to be.
		// Instead of providing tone values directly, we make use of this hue's key colour where
		// chroma is maxed. We bias our resulting tone around the midpoint of that tone and the
		// average of all key colours.

		// Get our tone that maxes out chroma, ie the key colour
		let argb = argbFromRgb(this.r, this.g, this.b);
		let hct = Hct.fromInt(argb);
		let realBrightestTone = hct.tone;
		console.log("realBrightestTone " + realBrightestTone);

		// Find the average tone of all key colours
		let averageBrightestTone = Colour.#getAverageTone();

		// Find the tone midpoint to base our brightness around
		let pivotTone = (realBrightestTone + averageBrightestTone) / 2;
		// pivotTone = realBrightestTone
		console.log("pivotTone " + pivotTone);

		// Convert our brightness to the resulting tone value
		let tone;
		if (brightness <= 50) {
			tone = lerp(0, pivotTone, brightness / 50);
		} else {
			tone = lerp(pivotTone, 100, (brightness - 50) / 50);
		}
		console.log(`Brightness ${brightness} → Tone ${tone}\n`);

		// Now we can move on to capping the chroma for this tone.

		// Find the average max chroma for this tone
		let maxChroma = Colour.#getChromaCap(tone);
		// maxChroma = 200

		// Return the resulting HCT as Colour
		let newHct = Hct.from(hct.hue, maxChroma, tone);
		// console.log(`H${hue} T${tone} capped at C${maxChroma} → C${newHct.chroma} (H${newHct.hue})`);
		let newArgb = newHct.toInt();
		return new Colour(
			redFromArgb(newArgb),
			greenFromArgb(newArgb),
			blueFromArgb(newArgb)
		);
	}
}
