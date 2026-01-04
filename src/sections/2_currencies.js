import { CATEGORY } from "../conditions/category.js";
import { Comparison } from "../conditions/comparison.js";
import { NameManager } from "../conditions/nameManager.js";
import { OPERATOR } from "../conditions/operator.js";
import { CAMPAIGN_1, CAMPAIGN_2, CAMPAIGN_3, CAMPAIGN_4, ENDGAME_1, ENDGAME_2, ENDGAME_3, ENDGAME_4, MAP_1, MAP_2, MAP_3, MAP_4, PAIR_CURRENCY, PAIR_ESSENCE, PAIR_GOLD, PAIR_MAP2, PAIR_MECHANIC1, PAIR_MECHANIC2, PAIR_QUEST } from "../constants.js";
import { Colour } from "../effects/colour.js";
import { COLOUR_AUGMENT, COLOUR_CHANCE, COLOUR_EXALT, COLOUR_WISDOM } from "../effects/effectSet.js";
import { range } from "../utils.js";

export function sectionCurrencies(filter) {
	general(filter);
	gold(filter);

	essences(filter);
	abyss(filter);
	expedition(filter);
	breach(filter);
	delirium(filter);

	splinters(filter);
	keys(filter);

	base(filter);
}

function general(filter) {
	filter.priceBlocks((c, e, min, max, effect) => {
		c.categories(CATEGORY.CURRENCY);
		c.names = new Comparison(NameManager.getCurrencies(min, max).isBad());

		e.hide();
		effect(PAIR_CURRENCY);
	});

	filter.priceBlocks((c, e, min, max, effect) => {
		c.categories(CATEGORY.CURRENCY);
		c.names = new Comparison(NameManager.getCurrencies(min, max).isBad(false));

		effect(PAIR_CURRENCY);
	});
}

function gold(filter) {
	function perLevel(levelMin, goldHide, goldWisdom, goldAugment, goldAugmentExalt) {
		filter.block((c, e) => {
			c.areaLevel = new Comparison(levelMin, OPERATOR.GTE);
			c.categories(CATEGORY.CURRENCY);
			c.names = new Comparison("Gold");
			c.count = new Comparison(Math.round(goldHide), OPERATOR.LT);

			e.hide();
			e.colourWisdom(PAIR_GOLD).sizeWisdom();
			e.backgroundColour = Colour.TRANSPARENT;
		});
		filter.block((c, e) => {
			c.areaLevel = new Comparison(levelMin, OPERATOR.GTE);
			c.categories(CATEGORY.CURRENCY);
			c.names = new Comparison("Gold");
			c.count = new Comparison(Math.round(goldWisdom), OPERATOR.LT);

			e.colourWisdom(PAIR_GOLD).sizeWisdom();
			e.backgroundColour = Colour.TRANSPARENT;
		});
		filter.block((c, e) => {
			c.areaLevel = new Comparison(levelMin, OPERATOR.GTE);
			c.categories(CATEGORY.CURRENCY);
			c.names = new Comparison("Gold");
			c.count = new Comparison(Math.round(goldAugment), OPERATOR.LT);

			e.colourAugment(PAIR_GOLD).sizeAugment();
			e.backgroundColour = Colour.TRANSPARENT;
		});
		filter.block((c, e) => {
			c.areaLevel = new Comparison(levelMin, OPERATOR.GTE);
			c.categories(CATEGORY.CURRENCY);
			c.names = new Comparison("Gold");
			c.count = new Comparison(Math.round(goldAugmentExalt), OPERATOR.LT);

			e.colourExalt(PAIR_GOLD).sizeAugment();
			e.backgroundColour = Colour.TRANSPARENT;
		});
		filter.block((c, e) => {
			c.areaLevel = new Comparison(levelMin, OPERATOR.GTE);
			c.categories(CATEGORY.CURRENCY);
			c.names = new Comparison("Gold");

			e.colourExalt(PAIR_GOLD).sizeExalt();
			e.backgroundColour = Colour.TRANSPARENT;
		});
	}

	const LEVEL_CAMPAIGN = 0;
	const LEVEL_MAP = 65;
	const LEVEL_ENDGAME = 80;
	const HOP = 5;

	for (let level = LEVEL_ENDGAME; level >= LEVEL_MAP; level -= HOP) {
		perLevel(
			level,
			range(LEVEL_MAP, LEVEL_ENDGAME, MAP_1, ENDGAME_1, level),
			range(LEVEL_MAP, LEVEL_ENDGAME, MAP_2, ENDGAME_2, level),
			range(LEVEL_MAP, LEVEL_ENDGAME, MAP_3, ENDGAME_3, level),
			range(LEVEL_MAP, LEVEL_ENDGAME, MAP_4, ENDGAME_4, level),
		);
	}

	for (let level = LEVEL_MAP; level >= LEVEL_CAMPAIGN; level -= HOP) {
		perLevel(
			level,
			range(LEVEL_CAMPAIGN, LEVEL_MAP, CAMPAIGN_1, MAP_1, level),
			range(LEVEL_CAMPAIGN, LEVEL_MAP, CAMPAIGN_2, MAP_2, level),
			range(LEVEL_CAMPAIGN, LEVEL_MAP, CAMPAIGN_3, MAP_3, level),
			range(LEVEL_CAMPAIGN, LEVEL_MAP, CAMPAIGN_4, MAP_4, level),
		);
	}
}

function essences(filter) {
	filter.priceBlocks((c, e, min, max, effect) => {
		c.categories(CATEGORY.CURRENCY);
		c.names = new Comparison(NameManager.getEssences1(min, max));

		effect(PAIR_ESSENCE, COLOUR_WISDOM);
	});

	filter.priceBlocks((c, e, min, max, effect) => {
		c.categories(CATEGORY.CURRENCY);
		c.names = new Comparison(NameManager.getEssences2(min, max));

		effect(PAIR_ESSENCE, COLOUR_AUGMENT);
	});

	filter.priceBlocks((c, e, min, max, effect) => {
		c.categories(CATEGORY.CURRENCY);
		c.names = new Comparison(NameManager.getEssences3(min, max));

		effect(PAIR_ESSENCE, COLOUR_EXALT);
	});

	filter.priceBlocks((c, e, min, max, effect) => {
		c.categories(CATEGORY.CURRENCY);
		c.names = new Comparison(NameManager.getEssences4(min, max));

		effect(PAIR_ESSENCE, COLOUR_CHANCE);
	});
}

// Abyssal bones
function abyss(filter) {
	filter.priceBlocks((c, e, min, max, effect) => {
		c.categories(CATEGORY.CURRENCY);
		c.names = new Comparison(NameManager.getAbyss1(min, max));

		effect(PAIR_MECHANIC1, COLOUR_AUGMENT);
	});

	filter.priceBlocks((c, e, min, max, effect) => {
		c.categories(CATEGORY.CURRENCY);
		c.names = new Comparison(NameManager.getAbyss2(min, max));

		effect(PAIR_MECHANIC1, COLOUR_EXALT);
	});

	filter.priceBlocks((c, e, min, max, effect) => {
		c.categories(CATEGORY.CURRENCY);
		c.names = new Comparison(NameManager.getAbyss3(min, max));

		effect(PAIR_MECHANIC1, COLOUR_CHANCE);
	});
}

// Artifacts, coinage
function expedition(filter) {
	filter.priceBlocks((c, e, min, max, effect) => {
		c.categories(CATEGORY.CURRENCY);
		c.names = new Comparison(NameManager.getArtifacts(min, max));

		effect(PAIR_MECHANIC1, COLOUR_AUGMENT);
	});

	filter.priceBlocks((c, e, min, max, effect) => {
		c.categories(CATEGORY.CURRENCY);
		c.names = new Comparison(NameManager.getCoinage(min, max));

		effect(PAIR_MECHANIC2, COLOUR_EXALT);
	});
}

// Catalysts
function breach(filter) {
	filter.priceBlocks((c, e, min, max, effect) => {
		c.categories(CATEGORY.CURRENCY);
		c.names = new Comparison(NameManager.getCatalysts(min, max));

		effect(PAIR_MECHANIC1);
	});
}

// Liquid emotions
function delirium(filter) {
	filter.priceBlocks((c, e, min, max, effect) => {
		c.categories(CATEGORY.CURRENCY);
		c.names = new Comparison(NameManager.getEmotions(min, max));

		effect(PAIR_MECHANIC1);
	});
}

function splinters(filter) {
	filter.priceBlocks((c, e, min, max, effect) => {
		c.categories(CATEGORY.CURRENCY);
		c.names = new Comparison(NameManager.getSplinters(min, max));

		effect(PAIR_MAP2);
	});
}

// Sekhema keys
function keys(filter) {
	filter.block((c, e) => {
		c.categories(CATEGORY.CURRENCY);
		c.names = new Comparison("Bronze Key");

		e.colourWisdom(PAIR_QUEST).sizeAugment();
	});
	filter.block((c, e) => {
		c.categories(CATEGORY.CURRENCY);
		c.names = new Comparison("Silver Key");

		e.colourAugment(PAIR_QUEST).sizeAugment();
	});
	filter.block((c, e) => {
		c.categories(CATEGORY.CURRENCY);
		c.names = new Comparison("Gold Key");

		e.colourExalt(PAIR_QUEST).sizeExalt();
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
