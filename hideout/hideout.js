import fs from "fs";
import { Location } from "./location.js";
import { Vector } from "./vector.js";

// Represents raw config values as understood by the game (not layman)
export class Hideout {
	spans;
	mid;

	constructor(fileName) {
		let relativeFilePath = `./hideout/${fileName}.hideout`;
		let text = fs.readFileSync(relativeFilePath, "utf8", (e) => {
			if (e !== null) console.error(e);
		});
		this.spans = text.split("\n");

		this.mid = Hideout.#get(this.spans, "Waypoint").vector;

		console.log(`Read ${relativeFilePath}, using ${this.mid.toString()} as mid.`);
	}

	// Tries to extract the item name from the given span
	static #matchItem(span) {
		let potentialKey = span.match(/^ {4}"([\w' ]+)": {$/)?.[1];
		return potentialKey ?? null;
	}

	// Tries to extract the specified value from the given span
	static #matchValue(span, key) {
		let potentialKey = span.match(new RegExp(`^[ ]{6}"${key}": (\\d+),$`))?.[1];
		return potentialKey ?? null;
	}

	static #get(spans, item) {
		let x = null;
		let y = null;
		let r = null;

		let currentItem = null;
		let foundItem = false;
		for (let i = 0; i < spans.length; i++) {
			let span = spans[i];

			let potentialItem = Hideout.#matchItem(span);
			if (potentialItem !== null) {
				if (foundItem && potentialItem !== item) {
					// We left the block of the target item, so stop parsing
					break;
				}

				currentItem = potentialItem;

				if (currentItem === item) foundItem = true;
				continue;
			}

			if (foundItem) {
				x = Hideout.#matchValue(span, "x") ?? x;
				y = Hideout.#matchValue(span, "y") ?? y;
				r = Hideout.#matchValue(span, "r") ?? r;
			}
		}

		return new Location(new Vector(parseInt(x), parseInt(y)), parseInt(r));
	}

	set(changes) {
		// Offset all relative changes by the mid we're using
		for (let item in changes) {
			let change = changes[item];
			change.vector = change.vector.add(this.mid);
		}

		let currentItem = null;
		for (let i = 0; i < this.spans.length; i++) {
			let span = this.spans[i];

			let potentialItem = Hideout.#matchItem(span);
			if (potentialItem !== null) {
				currentItem = potentialItem;
				continue;
			}

			let location = changes[currentItem];
			if (location === undefined) continue;

			if (Hideout.#matchValue(span, "x") !== null) {
				this.spans[i] = `"x": ${location.vector.x},`;
			} else if (Hideout.#matchValue(span, "y") !== null) {
				this.spans[i] = `"y": ${location.vector.y},`;
			} else if (Hideout.#matchValue(span, "r") !== null) {
				this.spans[i] = `"r": ${location.rotation},`;
			}
		}
	}

	save(fileName) {
		let relativeFilePath = `./hideout/${fileName}.hideout`;
		let content = this.spans.join("\n");

		fs.writeFile(relativeFilePath, content, (e) => {
			if (e !== null) console.error(e);
			else console.log(`Saved ${relativeFilePath}.`);
		});
	}
}
