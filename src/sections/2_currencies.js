import { CATEGORY } from "../conditions/category.js";
import { Comparison } from "../conditions/comparison.js";
import { NameManager } from "../conditions/nameManager.js";
import { OPERATOR } from "../conditions/operator.js";
import { GOLD_AUGMENT, GOLD_AUGMENT_EXALT, GOLD_HIDE, GOLD_WISDOM, PAIR_ABYSS, PAIR_CRAFT, PAIR_CURRENCY, PAIR_ESSENCE, PAIR_GOLD, PAIR_MECHANIC, PAIR_QUESTLIKE } from "../constants.js";
import { Colour } from "../effects/colour.js";
import { COLOUR_AUGMENT, COLOUR_CHANCE, COLOUR_EXALT, COLOUR_WISDOM } from "../effects/effectSet.js";

export function sectionCurrencies(filter) {
	general(filter);
	gold(filter);

	essences(filter);
	abyss(filter);
	delirium(filter);
	ritual(filter);
	keys(filter);
	splinters(filter);
	expedition(filter);

	base(filter);
}

function general(filter) {
	filter.priceBlocks((c, e, min, max, effect) => {
		c.names = new Comparison(NameManager.getCurrencies(min, max).isBad());
		c.categories(CATEGORY.CURRENCY);

		e.hide();
		effect(PAIR_CURRENCY);
	});

	filter.priceBlocks((c, e, min, max, effect) => {
		c.names = new Comparison(NameManager.getCurrencies(min, max).isBad(false));
		c.categories(CATEGORY.CURRENCY);

		effect(PAIR_CURRENCY);
	});
}

function gold(filter) {
	filter.block((c, e) => {
		c.names = new Comparison("Gold");
		c.categories(CATEGORY.CURRENCY);
		c.count = new Comparison(GOLD_HIDE, OPERATOR.LT);

		e.hide();
		e.colourWisdom(PAIR_GOLD).sizeWisdom();
		e.backgroundColour = Colour.TRANSPARENT;
	});
	filter.block((c, e) => {
		c.names = new Comparison("Gold");
		c.categories(CATEGORY.CURRENCY);
		c.count = new Comparison(GOLD_WISDOM, OPERATOR.LT);

		e.colourWisdom(PAIR_GOLD).sizeWisdom();
		e.backgroundColour = Colour.TRANSPARENT;
	});
	filter.block((c, e) => {
		c.names = new Comparison("Gold");
		c.categories(CATEGORY.CURRENCY);
		c.count = new Comparison(GOLD_AUGMENT, OPERATOR.LT);

		e.colourAugment(PAIR_GOLD).sizeAugment();
		e.backgroundColour = Colour.TRANSPARENT;
	});
	filter.block((c, e) => {
		c.names = new Comparison("Gold");
		c.categories(CATEGORY.CURRENCY);
		c.count = new Comparison(GOLD_AUGMENT_EXALT, OPERATOR.LT);

		e.colourExalt(PAIR_GOLD).sizeAugment();
		e.backgroundColour = Colour.TRANSPARENT;
	});
	filter.block((c, e) => {
		c.names = new Comparison("Gold");
		c.categories(CATEGORY.CURRENCY);

		e.colourExalt(PAIR_GOLD).sizeExalt();
		e.backgroundColour = Colour.TRANSPARENT;
	});
}

function essences(filter) {
	filter.priceBlocks((c, e, min, max, effect) => {
		c.names = new Comparison(NameManager.getEssences1(min, max));
		c.categories(CATEGORY.CURRENCY);

		effect(PAIR_ESSENCE, COLOUR_WISDOM);
	});

	filter.priceBlocks((c, e, min, max, effect) => {
		c.names = new Comparison(NameManager.getEssences2(min, max));
		c.categories(CATEGORY.CURRENCY);

		effect(PAIR_ESSENCE, COLOUR_AUGMENT);
	});

	filter.priceBlocks((c, e, min, max, effect) => {
		c.names = new Comparison(NameManager.getEssences3(min, max));
		c.categories(CATEGORY.CURRENCY);

		effect(PAIR_ESSENCE, COLOUR_EXALT);
	});

	filter.priceBlocks((c, e, min, max, effect) => {
		c.names = new Comparison(NameManager.getEssences4(min, max));
		c.categories(CATEGORY.CURRENCY);

		effect(PAIR_ESSENCE, COLOUR_CHANCE);
	});
}

function abyss(filter) {
	filter.priceBlocks((c, e, min, max, effect) => {
		c.names = new Comparison(NameManager.getAbyss1(min, max));
		c.categories(CATEGORY.CURRENCY);

		effect(PAIR_ABYSS, COLOUR_AUGMENT);
	});

	filter.priceBlocks((c, e, min, max, effect) => {
		c.names = new Comparison(NameManager.getAbyss2(min, max));
		c.categories(CATEGORY.CURRENCY);

		effect(PAIR_ABYSS, COLOUR_EXALT);
	});

	filter.priceBlocks((c, e, min, max, effect) => {
		c.names = new Comparison(NameManager.getAbyss3(min, max));
		c.categories(CATEGORY.CURRENCY);

		effect(PAIR_ABYSS, COLOUR_CHANCE);
	});
}

// Liquid emotions
function delirium(filter) {
	filter.priceBlocks((c, e, min, max, effect) => {
		c.names = new Comparison(NameManager.getEmotions(min, max));
		c.categories(CATEGORY.CURRENCY);

		effect(PAIR_CRAFT);
	});
}

// Catalysts
function ritual(filter) {
	filter.priceBlocks((c, e, min, max, effect) => {
		c.names = new Comparison(NameManager.getCatalysts(min, max));
		c.categories(CATEGORY.CURRENCY);

		effect(PAIR_CRAFT);
	});
}

// Sekhema keys
function keys(filter) {
	filter.block((c, e) => {
		c.names = new Comparison("Bronze Key");
		c.categories(CATEGORY.CURRENCY);

		e.colourWisdom(PAIR_QUESTLIKE).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison("Silver Key");
		c.categories(CATEGORY.CURRENCY);

		e.colourAugment(PAIR_QUESTLIKE).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison("Gold Key");
		c.categories(CATEGORY.CURRENCY);

		e.colourExalt(PAIR_QUESTLIKE).sizeExalt();
	});
}

function splinters(filter) {
	filter.priceBlocks((c, e, min, max, effect) => {
		c.names = new Comparison(NameManager.getSplinters(min, max));
		c.categories(CATEGORY.CURRENCY);

		effect(PAIR_QUESTLIKE);
	});
}

function expedition(filter) {
	filter.priceBlocks((c, e, min, max, effect) => {
		c.names = new Comparison(NameManager.getArtifacts(min, max));
		c.categories(CATEGORY.CURRENCY);

		effect(PAIR_MECHANIC, COLOUR_AUGMENT);
	});

	filter.priceBlocks((c, e, min, max, effect) => {
		c.names = new Comparison(NameManager.getCoinage(min, max));
		c.categories(CATEGORY.CURRENCY);

		effect(PAIR_MECHANIC, COLOUR_EXALT);
	});
}

function base(filter) {
	filter.block((c, e) => {
		c.categories(CATEGORY.CURRENCY);

		e.colourExalt(PAIR_CURRENCY, true).sizeExalt();
		let [currencyColour, _currencyPreset] = PAIR_CURRENCY;
		e.outlineColour = currencyColour;
	});
}
