import { CATEGORY } from "../conditions/category.js";
import { Comparison } from "../conditions/comparison.js";
import { NameManager } from "../conditions/nameManager.js";
import { PAIR_AUGMENT, PRICE_CHANCE, PRICE_DIV, PRICE_EXALT } from "../constants.js";

export function sectionAugments(filter) {
	runes(filter);
	other(filter);

	base(filter);
}

function runes(filter) {
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getRunes1(null, PRICE_EXALT));
		c.categories(CATEGORY.AUGMENT);

		e.colourWisdom(PAIR_AUGMENT).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getRunes1(PRICE_EXALT, PRICE_CHANCE));
		c.categories(CATEGORY.AUGMENT);

		e.colourWisdom(PAIR_AUGMENT).sizeExalt();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getRunes1(PRICE_CHANCE));
		c.categories(CATEGORY.AUGMENT);

		e.colourWisdom(PAIR_AUGMENT).sizeChance();
	});

	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getRunes2(null, PRICE_EXALT));
		c.categories(CATEGORY.AUGMENT);

		e.colourAugment(PAIR_AUGMENT).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getRunes2(PRICE_EXALT, PRICE_CHANCE));
		c.categories(CATEGORY.AUGMENT);

		e.colourAugment(PAIR_AUGMENT).sizeExalt();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getRunes2(PRICE_CHANCE));
		c.categories(CATEGORY.AUGMENT);

		e.colourAugment(PAIR_AUGMENT).sizeChance();
	});

	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getRunes3());
		c.categories(CATEGORY.AUGMENT);

		e.colourExalt(PAIR_AUGMENT).sizeAugment();
	});

	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getRunes4(null, PRICE_EXALT));
		c.categories(CATEGORY.AUGMENT);

		e.colourChance(PAIR_AUGMENT).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getRunes4(PRICE_EXALT, PRICE_CHANCE));
		c.categories(CATEGORY.AUGMENT);

		e.colourChance(PAIR_AUGMENT).sizeExalt();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getRunes4(PRICE_CHANCE, PRICE_DIV));
		c.categories(CATEGORY.AUGMENT);

		e.colourChance(PAIR_AUGMENT).sizeChance();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getRunes4(PRICE_DIV));
		c.categories(CATEGORY.AUGMENT);

		e.colourDivine(PAIR_AUGMENT).sizeDivine();
	});
}

function other(filter) {
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getAugments(null, PRICE_EXALT));
		c.categories(CATEGORY.AUGMENT);

		e.colourAugment(PAIR_AUGMENT).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getAugments(PRICE_EXALT, PRICE_CHANCE));
		c.categories(CATEGORY.AUGMENT);

		e.colourExalt(PAIR_AUGMENT).sizeExalt();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getAugments(PRICE_CHANCE, PRICE_DIV));
		c.categories(CATEGORY.AUGMENT);

		e.colourChance(PAIR_AUGMENT).sizeChance();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getAugments(PRICE_DIV));
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
