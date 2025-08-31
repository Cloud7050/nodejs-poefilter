import { Saver } from "./saver.js";



/* [Exports] */
export class Logger {
	static #LINES = [];

	static l(line) {
		Logger.#LINES.push(line);
	}

	static save() {
		Saver.save(Logger.#LINES, "./build/log.txt");
	}
}
