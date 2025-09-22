import fs from "fs";
import { Block } from "./block.js";
import { ConditionSet } from "./conditions/conditionSet.js";
import { EffectSet } from "./effects/effectSet.js";



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

	// Many ConditionSets, but they all share the same EffectSet
	multiBlock(...callbacks) {
		let conditionCallbacks = callbacks.slice(0, -1);
		let effectCallback = callbacks.at(-1);

		let e = new EffectSet();
		effectCallback(e);

		conditionCallbacks.forEach((conditionCallback) => {
			let c = new ConditionSet();
			conditionCallback(c);

			let b = new Block(c, e);
			this.spans.push(...b.export());
		});
	}

	save() {
		let relativeFilePath = `./build/${this.name}.filter`;
		let content = this.spans.join("\n");

		const BUGGY_TEXT = ["undefined", "null", "[object Object]"];
		if (BUGGY_TEXT.some((text) => content.includes(text))) {
			console.warn("[!] Saving filter containing potentially buggy text!");
		}

		fs.writeFile(relativeFilePath, content, (e) => {
			if (e !== null) console.error(e);
			else console.log("☁");
		});
	}
}
