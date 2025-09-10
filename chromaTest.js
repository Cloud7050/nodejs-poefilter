import { Hct } from "@material/material-color-utilities";
import { HctSolver } from "./node_modules/@material/material-color-utilities/hct/hct_solver.js";

/*
Each set of item colours uses a single fixed hue, and various tones. The tones are combined like a palette. But for each
specific hue and tone, the potential max chroma is different.

If we maximise chroma every time, then for the same tone, different hues having wildly different
perceived brightnesses. This looks bad. e.g. lapis and lime have a ton of chroma at 50 and
80 tone respectively, so maxing chroma everywhere will make them way "brighter" than other colours.
Similar visualisation: https://oklch.com

Instead, we want each specific tone to share the same chroma limit regardless of hue. This keeps the
perceived brightnesses similar. e.g. a 50 tone background should look similar be it lapis or yellow.

The idea is to fix each tone, then iterate through all the colours we use (i.e. every 20 hues) to
solve for their max chromas (M3 library has solving function). We take the average of these max
chromas, and store that to use as the cap for that tone's chroma. We can memoise this for later.
*/

// Mapping from tone to max chroma
let memo = {};
function getMaxChroma(tone) {
	if (memo[tone] !== undefined) return memo[tone];

	let hueCeiling = 360;
	let hueInterval = 20;
	let colourCount = hueCeiling / hueInterval;

	let totalMaxChroma = 0;
	for (let i = 0; i < colourCount; i++) {
		let hue = i * hueInterval;

		// For the given hue and tone, find its max chroma
		let chromaCeiling = 200;
		let argb = HctSolver.solveToInt(hue, chromaCeiling, tone);
		let hct = Hct.fromInt(argb);
		let maxChroma = hct.chroma;
		console.log(`Tone ${tone}, Hue ${hue}, Max Chroma ${maxChroma}`);

		totalMaxChroma += maxChroma;
	}
	let averageMaxChroma = totalMaxChroma / colourCount;
	console.log(`Average: ${averageMaxChroma}\n`);

	memo[tone] = averageMaxChroma;
	return averageMaxChroma;
}

for (let tone = 0; tone <= 100; tone += 10) {
	getMaxChroma(tone);
}
