import fs from "fs";
import { Block } from "./block.js";
import { ConditionSet } from "./conditions/conditionSet.js";
import { PRICE_AUGMENT, PRICE_CHANCE, PRICE_DIV, PRICE_EXALT } from "./constants.js";
import { COLOUR_AUGMENT, COLOUR_CHANCE, COLOUR_DIVINE, COLOUR_EXALT, COLOUR_WISDOM, EffectSet, SIZE_AUGMENT, SIZE_CHANCE, SIZE_DIVINE, SIZE_EXALT, SIZE_WISDOM } from "./effects/effectSet.js";



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
		let colours = [
			COLOUR_WISDOM,
			COLOUR_AUGMENT,
			COLOUR_EXALT,
			COLOUR_CHANCE,
			COLOUR_DIVINE
		];
		let sizes = [
			SIZE_WISDOM,
			SIZE_AUGMENT,
			SIZE_EXALT,
			SIZE_CHANCE,
			SIZE_DIVINE
		];
		const smartBlock = (refIndex, min, max) => { // Arrow function for `this` binding
			let colour = colours[refIndex];
			let size = sizes[refIndex];

			let b = new Block();
			let c = b.c, e = b.e;

			logic(c, e, min, max, (pair, colourOverwrite = null) => {
				if (colourOverwrite !== null && refIndex < colours.length - 1) {
					// Only overwrite non-divine
					colour = colourOverwrite;
				}

				colour.call(e, pair);
				size.call(e);
			});

			this.spans.push(...b.export());
		}

		smartBlock(0, null, PRICE_AUGMENT);
		smartBlock(1, PRICE_AUGMENT, PRICE_EXALT);
		smartBlock(2, PRICE_EXALT, PRICE_CHANCE);
		smartBlock(3, PRICE_CHANCE, PRICE_DIV);
		smartBlock(4, PRICE_DIV, null);
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
