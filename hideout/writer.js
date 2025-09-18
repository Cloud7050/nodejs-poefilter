import fs from "fs";
import { Offset } from "./offset.js";

const MID_X = 548;
const MID_Y = 443;

const RIGHT = new Offset(1, -1);
const LEFT = new Offset(-1, 1);
const UP = new Offset(1, 1);
const DOWN = new Offset(-1, -1);

// Rotation range is 0 - 65535 (2^16 - 1)
const SE = 65536 * (0/8);
const E = 65536 * (1/8);
const NE = 65536 * (2/8);
const N = 65536 * (3/8);
const NW = 65536 * (4/8);
const W = 65536 * (5/8);
const SW = 65536 * (6/8);
const S = 65536 * (7/8);

let data = fs.readFileSync("./hideout/in.hideout", "utf8", (e) => {
	if (e !== null) console.error(e);
});
// Remove byte order mark
let json = JSON.parse(data.replace("\uFEFF", ""));

function set(name, x, y, r) {
	json.doodads[name].x = x;
	json.doodads[name].y = y;
	json.doodads[name].r = r;
}
set("Waypoint", MID_X, MID_Y, S);

fs.writeFile("./hideout/out.hideout", JSON.stringify(json, null, 2), (e) => {
	if (e !== null) console.error(e);
	else console.log("☁");
});
