import fs from "fs";



/* [Exports] */
export class Saver {
	static save(lines, relativePath) {
		let string = lines.join("\n");
		fs.writeFile(relativePath, string, (e) => {
			if (e !== null) console.error(e);
		});
	}
}
