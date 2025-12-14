import { CATEGORY } from "../conditions/category.js";
import { Comparison } from "../conditions/comparison.js";
import { NameManager } from "../conditions/nameManager.js";
import { PAIR_AUGMENT } from "../constants.js";
import { COLOUR_AUGMENT, COLOUR_WISDOM } from "../effects/effectSet.js";

export function sectionAugments(filter) {
	runes(filter);
	other(filter);

	base(filter);
}

function runes(filter) {
	filter.priceBlocks((c, e, min, max, effect) => {
		c.categories(CATEGORY.AUGMENT);
		c.names = new Comparison(NameManager.getRunes1(min, max));

		effect(PAIR_AUGMENT, COLOUR_WISDOM);
	});

	filter.priceBlocks((c, e, min, max, effect) => {
		c.categories(CATEGORY.AUGMENT);
		c.names = new Comparison(NameManager.getRunes2(min, max));

		effect(PAIR_AUGMENT, COLOUR_AUGMENT);
	});

	filter.priceBlocks((c, e, min, max, effect) => {
		c.categories(CATEGORY.AUGMENT);
		c.names = new Comparison(NameManager.getRunes3(min, max));

		effect(PAIR_AUGMENT, COLOUR_EXALT);
	});

	filter.priceBlocks((c, e, min, max, effect) => {
		c.categories(CATEGORY.AUGMENT);
		c.names = new Comparison(NameManager.getRunes4(min, max));

		effect(PAIR_AUGMENT, COLOUR_CHANCE);
	});
}

function other(filter) {
	filter.priceBlocks((c, e, min, max, effect) => {
		c.categories(CATEGORY.AUGMENT);
		c.names = new Comparison(NameManager.getAugments(min, max));

		effect(PAIR_AUGMENT);
	});
}

function base(filter) {
	filter.block((c, e) => {
		c.categories(CATEGORY.AUGMENT);

		e.colourExalt(PAIR_AUGMENT, true).sizeExalt();
		let [augmentColour, _augmentPreset] = PAIR_AUGMENT;
		e.outlineColour = augmentColour;
	});
}
