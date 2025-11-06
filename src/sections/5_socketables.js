import { CATEGORY } from "../conditions/category.js";
import { Comparison } from "../conditions/comparison.js";
import { DIV } from "../conditions/name.js";
import { NameManager } from "../conditions/nameManager.js";
import { PAIR_SOCKETABLE } from "../index.js";

//TODO talismans x2 sets, prefix named soul cores, 4 abyssal eyes
export function sectionSocketables(filter) {
	runes(filter);
	other(filter);

	base(filter);
}

function runes(filter) {
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getRunes1(null, 1));
		c.categories(CATEGORY.SOCKETABLE);

		e.colourWisdom(PAIR_SOCKETABLE).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getRunes1(1, 20));
		c.categories(CATEGORY.SOCKETABLE);

		e.colourWisdom(PAIR_SOCKETABLE).sizeExalt();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getRunes1(1, 20));
		c.categories(CATEGORY.SOCKETABLE);

		e.colourWisdom(PAIR_SOCKETABLE).sizeChance();
	});

	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getRunes2(null, 1));
		c.categories(CATEGORY.SOCKETABLE);

		e.colourAugment(PAIR_SOCKETABLE).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getRunes2(1, 20));
		c.categories(CATEGORY.SOCKETABLE);

		e.colourAugment(PAIR_SOCKETABLE).sizeExalt();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getRunes2(20));
		c.categories(CATEGORY.SOCKETABLE);

		e.colourAugment(PAIR_SOCKETABLE).sizeChance();
	});

	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getRunes3());
		c.categories(CATEGORY.SOCKETABLE);

		e.colourExalt(PAIR_SOCKETABLE).sizeAugment();
	});

	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getRunes4(null, 1));
		c.categories(CATEGORY.SOCKETABLE);

		e.colourChance(PAIR_SOCKETABLE).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getRunes4(1, 20));
		c.categories(CATEGORY.SOCKETABLE);

		e.colourChance(PAIR_SOCKETABLE).sizeExalt();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getRunes4(20, DIV));
		c.categories(CATEGORY.SOCKETABLE);

		e.colourChance(PAIR_SOCKETABLE).sizeChance();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getRunes4(DIV));
		c.categories(CATEGORY.SOCKETABLE);

		e.colourDivine(PAIR_SOCKETABLE).sizeDivine();
	});
}

function other(filter) {
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getSocketables(null, 1));
		c.categories(CATEGORY.SOCKETABLE);

		e.colourAugment(PAIR_SOCKETABLE).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getSocketables(1, 20));
		c.categories(CATEGORY.SOCKETABLE);

		e.colourExalt(PAIR_SOCKETABLE).sizeExalt();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getSocketables(20, DIV));
		c.categories(CATEGORY.SOCKETABLE);

		e.colourChance(PAIR_SOCKETABLE).sizeChance();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getSocketables(DIV));
		c.categories(CATEGORY.SOCKETABLE);

		e.colourDivine(PAIR_SOCKETABLE).sizeDivine();
	});
}

function base(filter) {
	filter.block((c, e) => {
		c.categories(CATEGORY.SOCKETABLE);

		e.colourExalt(PAIR_SOCKETABLE, true).sizeExalt();
		let [socketableColour, _socketablePreset] = PAIR_SOCKETABLE;
		e.outlineColour = socketableColour;
	});
}
