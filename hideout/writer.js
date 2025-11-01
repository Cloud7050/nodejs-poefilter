import fs from "fs";
import { Location } from "./location.js";
import { Vector } from "./vector.js";

// Rotation range is 0 - 65535 (2^16 - 1)
const SE = 65536 * (0/16);
const E_SE = 65536 * (1/16);
const E = 65536 * (2/16);
const E_NE = 65536 * (3/16);
const NE = 65536 * (4/16);
const N_NE = 65536 * (5/16);
const N = 65536 * (6/16);
const N_NW = 65536 * (7/16);
const NW = 65536 * (8/16);
const W_NW = 65536 * (9/16);
const W = 65536 * (10/16);
const W_SW = 65536 * (11/16);
const SW = 65536 * (12/16);
const S_SW = 65536 * (13/16);
const S = 65536 * (14/16);
const S_SE = 65536 * (15/16);

function at(r, u = 0, v = 0) {
	const MID = new Vector(546, 445);
	const RIGHT = new Vector(1, -1);
	const LEFT = new Vector(-1, 1);
	const UP = new Vector(1, 1);
	const DOWN = new Vector(-1, -1);

	let vector = MID.add(RIGHT.magnitude(u)).add(UP.magnitude(v));
	return new Location(vector, r);
}

let changes = {
	// Mid
	"Waypoint": at(S),

	// Right
	"Salvage Bench": at(S, 15, 12),
	"Stash": at(S, 15),
	"Guild Stash": at(S, 15, -12),

	"Reforging Bench": at(S, 30, 15),
	"Relic Locker": at(S, 25),
	"Recombinator": at(S, 28, -17),

	// Left
	"Zolin": at(SE, -12, 15),
	"Ange": at(E, -12),
	"Doryani": at(NE, -12, -15),

	"Zelina": at(E_SE, -24, 15),
	"Dannig": at(E, -24),

	"Gwennen": at(E_SE, -36, 15),
	"Tujen": at(E, -36),
	"Rog": at(E_NE, -36, -15),

	// Up
	"Well": at(S, 0, 15),

	// Down
	"Ziggurat Map Device": at(S, 0, -42),

	// Other
	"Alva": at(W_NW, 50, -55),
};

let text = fs.readFileSync("./hideout/export.hideout", "utf8", (e) => {
	if (e !== null) console.error(e);
});
let spans = text.split("\n");

let currentItem = null;
for (let i = 0; i < spans.length; i++) {
	let span = spans[i];

	let potentialKey = span.match(/^ {4}"([\w ]+)": {$/)?.[1];
	if (potentialKey !== undefined) {
		currentItem = potentialKey;
		continue;
	}

	let location = changes[currentItem];
	if (location === undefined) continue;

	if (/^[ ]{6}"x": (\d+),$/.test(span)) {
		spans[i] = `"x": ${location.vector.x},`;
	} else if (/^[ ]{6}"y": (\d+),$/.test(span)) {
		spans[i] = `"y": ${location.vector.y},`;
	} else if (/^[ ]{6}"r": (\d+),$/.test(span)) {
		spans[i] = `"r": ${location.rotation},`;
	}
}

fs.writeFile("./hideout/new.hideout", spans.join("\n"), (e) => {
	if (e !== null) console.error(e);
	else console.log("☁");
});
