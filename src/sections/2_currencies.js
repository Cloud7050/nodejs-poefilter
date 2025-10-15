import { CATEGORY } from "../conditions/category.js";
import { Comparison, OPERATOR } from "../conditions/comparison.js";
import { DIV } from "../conditions/name.js";
import { NameManager } from "../conditions/nameManager.js";
import { Colour } from "../effects/colour.js";
import { EffectSet } from "../effects/effectSet.js";
import { PAIR_ABYSS, PAIR_CRAFT, PAIR_CURRENCY, PAIR_ESSENCE, PAIR_GOLD, PAIR_MECHANIC, PAIR_QUESTLIKE } from "../index.js";

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
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getCurrenciesBad());
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.hide();
		e.colourWisdom(PAIR_CURRENCY).sizeWisdom();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getCurrencies(null, 1 / 100));
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourWisdom(PAIR_CURRENCY).sizeWisdom();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getCurrencies(1 / 100, 1));
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourAugment(PAIR_CURRENCY).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getCurrencies(1, 20));
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourExalt(PAIR_CURRENCY).sizeExalt();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getCurrencies(20, DIV));
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourChance(PAIR_CURRENCY).sizeChance();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getCurrencies(DIV));
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourDivine(PAIR_CURRENCY).sizeDivine();
	});
}

function gold(filter) {
	filter.block((c, e) => {
		c.names = new Comparison("Gold");
		c.category = new Comparison(CATEGORY.CURRENCY);
		c.count = new Comparison(50, OPERATOR.LT);

		e.hide();
		e.colourWisdom(PAIR_GOLD, Colour.TRANSPARENT).sizeWisdom();
	});
	filter.block((c, e) => {
		c.names = new Comparison("Gold");
		c.category = new Comparison(CATEGORY.CURRENCY);
		c.count = new Comparison(500, OPERATOR.LT);

		e.colourWisdom(PAIR_GOLD, Colour.TRANSPARENT).sizeWisdom();
	});
	filter.block((c, e) => {
		c.names = new Comparison("Gold");
		c.category = new Comparison(CATEGORY.CURRENCY);
		c.count = new Comparison(2500, OPERATOR.LT);

		e.colourAugment(PAIR_GOLD, Colour.TRANSPARENT).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison("Gold");
		c.category = new Comparison(CATEGORY.CURRENCY);
		c.count = new Comparison(5000, OPERATOR.LT);

		e.colourExalt(PAIR_GOLD, Colour.TRANSPARENT).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison("Gold");
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourExalt(PAIR_GOLD, Colour.TRANSPARENT).sizeExalt();
	});
}

function essences(filter) {
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getEssences1(null, 1));
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourWisdom(PAIR_ESSENCE).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getEssences1(1));
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourWisdom(PAIR_ESSENCE).sizeExalt();
	});

	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getEssences2(null, 1));
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourAugment(PAIR_ESSENCE).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getEssences2(1, 20));
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourAugment(PAIR_ESSENCE).sizeExalt();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getEssences2(20));
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourAugment(PAIR_ESSENCE).sizeChance();
	});

	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getEssences3(null, 1));
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourExalt(PAIR_ESSENCE).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getEssences3(1, 20));
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourExalt(PAIR_ESSENCE).sizeExalt();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getEssences3(20));
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourExalt(PAIR_ESSENCE).sizeChance();
	});

	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getEssences4(null, 20));
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourChance(PAIR_ESSENCE).sizeExalt();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getEssences4(20, DIV));
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourChance(PAIR_ESSENCE).sizeChance();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getEssences4(DIV));
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourDivine(PAIR_ESSENCE).sizeDivine();
	});
}

function abyss(filter) {
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getAbyss1());
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourWisdom(PAIR_ABYSS).sizeAugment();
	});

	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getAbyss2(null, 1));
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourAugment(PAIR_ABYSS).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getAbyss2(1));
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourAugment(PAIR_ABYSS).sizeExalt();
	});

	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getAbyss3(null, 20));
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourExalt(PAIR_ABYSS).sizeExalt();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getAbyss3(20));
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourDivine(PAIR_ABYSS).sizeDivine();
	});
}

// Liquid emotions
function delirium(filter) {
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getEmotions1(null, 1));
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourAugment(PAIR_CRAFT).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getEmotions1(1));
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourAugment(PAIR_CRAFT).sizeExalt();
	});

	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getEmotions2());
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourExalt(PAIR_CRAFT).sizeExalt();
	});

	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getEmotions3());
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourChance(PAIR_CRAFT).sizeChance();
	});
}

// Catalysts
function ritual(filter) {
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getCatalysts(null, 1 / 10));
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourAugment(PAIR_CRAFT).sizeWisdom();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getCatalysts(1 / 10, 1));
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourAugment(PAIR_CRAFT).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getCatalysts(1));
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourExalt(PAIR_CRAFT).sizeExalt();
	});
}

// Sekhema keys
function keys(filter) {
	filter.block((c, e) => {
		c.names = new Comparison("Bronze Key");
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourWisdom(PAIR_QUESTLIKE).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison("Silver Key");
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourAugment(PAIR_QUESTLIKE).sizeExalt();
	});
	filter.block((c, e) => {
		c.names = new Comparison("Gold Key");
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourExalt(PAIR_QUESTLIKE).sizeExalt();
	});
}

function splinters(filter) {
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getSplinters(null, 1));
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourAugment(PAIR_QUESTLIKE).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getSplinters(1));
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourExalt(PAIR_QUESTLIKE).sizeExalt();
	});
}

function expedition(filter) {
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getArtifacts(null, 1 / 10));
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourAugment(PAIR_MECHANIC).sizeWisdom();
	});
	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getArtifacts(1 / 10));
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourAugment(PAIR_MECHANIC).sizeAugment();
	});

	filter.block((c, e) => {
		c.names = new Comparison(NameManager.getCoinage());
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourExalt(PAIR_MECHANIC).sizeExalt();
	});
}

function base(filter) {
	filter.block((c, e) => {
		c.category = new Comparison(CATEGORY.CURRENCY);

		let [currencyColour, currencyPreset] = PAIR_CURRENCY;
		e.outlineColour = currencyColour;
		e.mapColour = currencyPreset;
		e.mapIcon = EffectSet.MAP_ICON.CROSS;
		e.sizeExalt();
	});
}
