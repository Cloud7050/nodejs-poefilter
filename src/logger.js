/* [Imports] */
import fs from "fs";



/* [Exports] */
export class Logger {
	static #LINES = [];

	static l(line) {
		Logger.#LINES.push(line);
	}

	static save() {
		let string = Logger.#LINES.join("\n");
		fs.writeFileSync("./build/log.txt", string);
	}
}
