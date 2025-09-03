import fs from "fs";
import { Block } from "./block.js";



export class Filter {
	name;
	spans = [];

	constructor(name) {
		this.name = name;
	}

	block(logic) {
		let b = new Block();
		logic(b.c, b.e);
		this.spans.push(...b.export());
	}

	save() {
		let relativeFilePath = `./build/${this.name}.filter`;
		let content = this.spans.join("\n");
		fs.writeFile(relativeFilePath, content, (e) => {
			if (e !== null) console.error(e);
			else console.log("☁");
		});
	}
}
