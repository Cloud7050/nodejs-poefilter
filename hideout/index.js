import { Hideout } from "./hideout.js";
import { Location } from "./location.js";
import { Vector } from "./vector.js";

const N = rotation(22.5 * 0);
const N_NE = rotation(22.5 * 1);
const NE = rotation(22.5 * 2);
const E_NE = rotation(22.5 * 3);
const E = rotation(22.5 * 4);
const E_SE = rotation(22.5 * 5);
const SE = rotation(22.5 * 6);
const S_SE = rotation(22.5 * 7);
const S = rotation(22.5 * 8);
const S_SW = rotation(22.5 * 9);
const SW = rotation(22.5 * 10);
const W_SW = rotation(22.5 * 11);
const W = rotation(22.5 * 12);
const W_NW = rotation(22.5 * 13);
const NW = rotation(22.5 * 14);
const N_NW = rotation(22.5 * 15);

function rotation(angle) {
	// Rotation range is 0 - 65535 (2^16 - 1), and goes anti-clockwise
	const ROTATION_CAP = 65536;

	// Config treats SE as 0, so we convert our layman angle to a further clockwise map angle, then
	// to their anti-clockwise angle
	let clockwiseAngle = (angle - 135) % 360;
	let antiClockwiseAngle = 360 - clockwiseAngle;

	let factor = antiClockwiseAngle / 360;
	return Math.round(ROTATION_CAP * factor);
}

function at(r = undefined, u = 0, v = 0) {
	const RIGHT = new Vector(1, -1);
	const LEFT = new Vector(-1, 1);
	const UP = new Vector(1, 1);
	const DOWN = new Vector(-1, -1);

	if (r === undefined) {
		// Default to looking at origin
		let lookAngle = new Vector(-u, -v).getAngle();
		r = rotation(lookAngle);
	}

	let vector = RIGHT.magnitude(u).add(UP.magnitude(v));
	return new Location(vector, r);
}

function radial(radius, standAngle = 0, lookAngle = undefined) {
	let u = Math.sin(standAngle / 180 * Math.PI) * radius;
	let v = Math.cos(standAngle / 180 * Math.PI) * radius;

	if (lookAngle === undefined) {
		// Default to looking at origin
		lookAngle = new Vector(-u, -v).getAngle();
	}

	return at(rotation(lookAngle), Math.round(u), Math.round(v));
}

let changes = {
	// Mid
	"Waypoint": at(S),

	// Right
	"Salvage Bench": at(S, 13, 16),
	"Reforging Bench": at(S, 13, 8),
	"Stash": at(S, 13),
	"Guild Stash": at(S, 13, -8),

	"Recombinator": at(S, 23),
	"Relic Locker": at(S, 23, -8),

	"Well": at(S, 13, -20),

	// Left
	"Ange": radial(12, 270),

	"Sphinx Mystic Hideout Decoration": at(SE, -24, -10),

	// Up
	"Doryani": radial(25, 0),
	"Zolin": radial(25, -25),
	"Zelina": radial(25, -50),

	// Down
	"Ziggurat Map Device": at(S, 0, -40),

	// Far left
	"Tujen": radial(40, 312),
	"Rog": radial(40, 298),
	"Gwennen": radial(40, 284),
	"Dannig": radial(40, 270),

	// Far up
	"Wardrobe Decoration": at(S, 0, 65),

	// Other
	"Griffin Fledgling Pet": radial(50, 90),
	"Hiveborn Crawler Pet": radial(50, 120),

	"Alva": at(E_NE, -69, -55),
};

let hideout = new Hideout("Export");
hideout.set(changes);
hideout.save("New");
