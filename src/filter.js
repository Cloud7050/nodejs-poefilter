import fs from "fs";
import { Block } from "./block.js";
import { ConditionSet } from "./conditions/conditionSet.js";
import { PRICE_AUGMENT, PRICE_CHANCE, PRICE_DIV, PRICE_EXALT } from "./constants.js";
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

	multiWhitelist(...callbacks) {
		// No effect, so it just exits the filter early
		this.multiBlock(...callbacks, (_e) => {});
	}
	multiHide(...callbacks) {
		this.multiBlock(...callbacks, (e) => e.hide());
	}

	priceBlocks(logic) {
		let b = new Block();
		logic(b.c, b.e, null, PRICE_AUGMENT, (pair) => b.e.colourWisdom(pair).sizeWisdom());
		this.spans.push(...b.export());

		b = new Block();
		logic(b.c, b.e, PRICE_AUGMENT, PRICE_EXALT, (pair) => b.e.colourAugment(pair).sizeAugment());
		this.spans.push(...b.export());

		b = new Block();
		logic(b.c, b.e, PRICE_EXALT, PRICE_CHANCE, (pair) => b.e.colourExalt(pair).sizeExalt());
		this.spans.push(...b.export());

		b = new Block();
		logic(b.c, b.e, PRICE_CHANCE, PRICE_DIV, (pair) => b.e.colourChance(pair).sizeChance());
		this.spans.push(...b.export());

		b = new Block();
		logic(b.c, b.e, PRICE_DIV, null, (pair) => b.e.colourDivine(pair).sizeDivine());
		this.spans.push(...b.export());
	}

	save() {
		let relativeFilePath = `./build/${this.name}.filter`;
		let content = this.spans.map((span) => span.trimEnd()).join("\n");

		const BUGGY_TEXT = ["undefined", "null", "[object Object]"];
		BUGGY_TEXT.some((text) => {
			let isBuggy = content.includes(text);
			if (isBuggy) {
				console.warn("[!] Saving filter containing potentially buggy text:");
				console.warn(text);
			}
			return isBuggy;
		});

		fs.writeFile(relativeFilePath, content, (e) => {
			if (e !== null) console.error(e);
			else console.log(`Saved ${relativeFilePath}.`);
		});
	}
}
