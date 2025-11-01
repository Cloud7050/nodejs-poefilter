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

	// Config treats SE as 0, so we convert layman angle to map angle
	let mapAngle = (angle - 135) % 360;

	let factor = mapAngle / 360;
	return ROTATION_CAP - (ROTATION_CAP * factor);
}

function at(r, u = 0, v = 0) {
	const RIGHT = new Vector(1, -1);
	const LEFT = new Vector(-1, 1);
	const UP = new Vector(1, 1);
	const DOWN = new Vector(-1, -1);

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

	let r = rotation(lookAngle);
	return at(Math.round(r), Math.round(u), Math.round(v));
}

let changes = {
	// Mid
	"Waypoint": at(S),

	// Right
	"Reforging Bench": radial(15, 50),
	"Stash": radial(15, 90, 90),
	"Guild Stash": radial(15, 130),

	"Salvage Bench": at(S, 30, 15),
	"Relic Locker": at(S, 25),
	"Recombinator": at(S, 28, -17),

	// Left
	"Zolin": at(SE, -12, 15),
	"Ange": at(E, -12),
	"Sphinx Mystic Hideout Decoration": at(S, -12, -15),

	"Zelina": at(E_SE, -24, 15),
	"Dannig": at(E, -24),
	"Doryani": at(E_NE, -24, -15),

	"Gwennen": at(E_SE, -36, 15),
	"Tujen": at(E, -36),
	"Rog": at(E_NE, -36, -15),

	// Up
	"Well": at(S, 0, 15),

	"Wardrobe Decoration": at(S, 0, 30),

	// Down
	"Ziggurat Map Device": at(S, 0, -42),

	// Other
	"Alva": at(NE, -20, -20),
	"Hiveborn Crawler Pet": at(S, -30, 30),
	"Griffin Fledgling Pet": at(S, -30, 30),
};

let hideout = new Hideout("Export");
hideout.set(changes);
hideout.save("New");
