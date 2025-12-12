import { CATEGORY } from "../conditions/category.js";
import { Comparison } from "../conditions/comparison.js";
import { DIV } from "../conditions/name.js";
import { NameManager } from "../conditions/nameManager.js";
import { PAIR_AUGMENT } from "../index.js";

export function sectionAugments(filter) {
	runes(filter);
	other(filter);

	base(filter);
}

function runes(filter) {
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getRunes1(null, 1));
		c.categories(CATEGORY.AUGMENT);

		e.colourWisdom(PAIR_AUGMENT).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getRunes1(1, 20));
		c.categories(CATEGORY.AUGMENT);

		e.colourWisdom(PAIR_AUGMENT).sizeExalt();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getRunes1(1, 20));
		c.categories(CATEGORY.AUGMENT);

		e.colourWisdom(PAIR_AUGMENT).sizeChance();
	});

	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getRunes2(null, 1));
		c.categories(CATEGORY.AUGMENT);

		e.colourAugment(PAIR_AUGMENT).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getRunes2(1, 20));
		c.categories(CATEGORY.AUGMENT);

		e.colourAugment(PAIR_AUGMENT).sizeExalt();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getRunes2(20));
		c.categories(CATEGORY.AUGMENT);

		e.colourAugment(PAIR_AUGMENT).sizeChance();
	});

	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getRunes3());
		c.categories(CATEGORY.AUGMENT);

		e.colourExalt(PAIR_AUGMENT).sizeAugment();
	});

	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getRunes4(null, 1));
		c.categories(CATEGORY.AUGMENT);

		e.colourChance(PAIR_AUGMENT).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getRunes4(1, 20));
		c.categories(CATEGORY.AUGMENT);

		e.colourChance(PAIR_AUGMENT).sizeExalt();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getRunes4(20, DIV));
		c.categories(CATEGORY.AUGMENT);

		e.colourChance(PAIR_AUGMENT).sizeChance();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getRunes4(DIV));
		c.categories(CATEGORY.AUGMENT);

		e.colourDivine(PAIR_AUGMENT).sizeDivine();
	});
}

function other(filter) {
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getAugments(null, 1));
		c.categories(CATEGORY.AUGMENT);

		e.colourAugment(PAIR_AUGMENT).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getAugments(1, 20));
		c.categories(CATEGORY.AUGMENT);

		e.colourExalt(PAIR_AUGMENT).sizeExalt();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getAugments(20, DIV));
		c.categories(CATEGORY.AUGMENT);

		e.colourChance(PAIR_AUGMENT).sizeChance();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getAugments(DIV));
		c.categories(CATEGORY.AUGMENT);

		e.colourDivine(PAIR_AUGMENT).sizeDivine();
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
