import fs from "fs";
import { Location } from "./location.js";
import { Vector } from "./vector.js";

const MID = new Vector(548, 443);

const RIGHT = new Vector(1, -1);
const LEFT = new Vector(-1, 1);
const UP = new Vector(1, 1);
const DOWN = new Vector(-1, -1);

// Rotation range is 0 - 65535 (2^16 - 1)
const SE = 65536 * (0/8);
const E = 65536 * (1/8);
const NE = 65536 * (2/8);
const N = 65536 * (3/8);
const NW = 65536 * (4/8);
const W = 65536 * (5/8);
const SW = 65536 * (6/8);
const S = 65536 * (7/8);

let changes = {
	// Mid
	"Waypoint": new Location(
		MID,
		S
	),

	// Right
	"Stash": new Location(
		MID.add(RIGHT.magnitude(15)),
		S
	),
	"Guild Stash": new Location(
		MID.add(RIGHT.magnitude(15)).add(DOWN.magnitude(12)),
		S
	),
	"Salvage Bench": new Location(
		MID.add(RIGHT.magnitude(15)).add(UP.magnitude(12)),
		S
	),
	"Relic Locker": new Location(
		MID.add(RIGHT.magnitude(25)),
		S
	),
	"Recombinator": new Location(
		MID.add(RIGHT.magnitude(25)).add(DOWN.magnitude(17)),
		S
	),
	"Reforging Bench": new Location(
		MID.add(RIGHT.magnitude(30)).add(UP.magnitude(15)),
		S
	),

	// Left
	"Ange": new Location(
		MID.add(LEFT.magnitude(12)),
		E
	),
	"Doryani": new Location(
		MID.add(LEFT.magnitude(12)).add(DOWN.magnitude(15)),
		NE
	),
	"Zolin": new Location(
		MID.add(LEFT.magnitude(12)).add(UP.magnitude(15)),
		SE
	),
	"Gwennen": new Location(
		MID.add(LEFT.magnitude(22)),
		E
	),
	"Dannig": new Location(
		MID.add(LEFT.magnitude(22)).add(DOWN.magnitude(15)),
		NE
	),
	"Zelina": new Location(
		MID.add(LEFT.magnitude(22)).add(UP.magnitude(15)),
		SE
	),

	// Up
	"Well": new Location(
		MID.add(UP.magnitude(15)),
		S
	),

	// Down
	"Ziggurat Map Device": new Location(
		MID.add(DOWN.magnitude(42)),
		S
	),

	// Other
	"Alva": new Location(
		MID.add(DOWN.magnitude(48)).add(RIGHT.magnitude(55)),
		W
	),
};

let text = fs.readFileSync("./hideout/in.hideout", "utf8", (e) => {
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

fs.writeFile("./hideout/out.hideout", spans.join("\n"), (e) => {
	if (e !== null) console.error(e);
	else console.log("☁");
});
