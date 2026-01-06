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
		const smartBlock = (index, min = undefined, max = undefined) => { // Arrow function for `this` binding
			let b = new Block();
			let c = b.c, e = b.e;

			logic(c, e, min, max, (pair, colourOverwrite = null) => {
				let colourIndex = index;
				let sizeIndex = index;
				if (colourOverwrite !== null && index < EffectSet.INDEX_DIVINE) {
					colourIndex = colourOverwrite;
				}

				e.colour(colourIndex, pair);
				e.size(sizeIndex);
			});

			this.spans.push(...b.export());
		}

		smartBlock(EffectSet.INDEX_WISDOM, null, PRICE_AUGMENT);
		smartBlock(EffectSet.INDEX_AUGMENT, PRICE_AUGMENT, PRICE_EXALT);
		smartBlock(EffectSet.INDEX_EXALT, PRICE_EXALT, PRICE_CHANCE);
		smartBlock(EffectSet.INDEX_CHANCE, PRICE_CHANCE, PRICE_DIV);
		smartBlock(EffectSet.INDEX_DIVINE, PRICE_DIV);
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
