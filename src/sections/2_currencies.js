import { Comparison, OPERATOR } from "../conditions/comparison.js";
import { CATEGORY } from "../conditions/conditionSet.js";
import { Colour } from "../effects/colour.js";
import { EffectSet } from "../effects/effectSet.js";
import { ABYSS_COLOUR, ABYSS_PRESET, CRAFT_COLOUR, CRAFT_PRESET, CURRENCY_COLOUR, CURRENCY_PRESET, ESSENCE_COLOUR, ESSENCE_PRESET, GOLD_COLOUR, GOLD_PRESET, MECHANIC_COLOUR, MECHANIC_PRESET, QUESTLIKE_COLOUR, QUESTLIKE_PRESET } from "../index.js";

// https://poe2scout.com/economy/currency
export function sectionCurrencies(filter) {
	general(filter);
	other(filter);

	base(filter);
}

function general(filter) {
	filter.block((c, e) => {
		c.names = new Comparison([
			"Scroll of Wisdom", // 1 / 680 exalts
			"Greater Orb of Transmutation", // 1 / 600 exalts
			"Transmutation Shard", // 1 / 500 exalts
			"Artificer's Shard", // 1 / 340 exalts
		]);
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourWisdom(CURRENCY_COLOUR, CURRENCY_PRESET).sizeWisdom();
	});
	filter.block((c, e) => {
		c.names = new Comparison([
			"Lesser Jeweller's Orb", // 1 / 70 exalts
			"Orb of Transmutation", // 1 / 50 exalts
			"Regal Shard", // 1 / 49 exalts
			"Artificer's Orb", // 1 / 34 exalts
			"Orb of Augmentation", // 1 / 33 exalts
			"Greater Orb of Augmentation", // 1 / 29.5 exalts
			"Perfect Orb of Transmutation", // 1 / 24 exalts
			"Greater Jeweller's Orb", // 1 / 13 exalts
			"Blacksmith's Whetstone", // 1 / 12 exalts
		]);
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourAugment(CURRENCY_COLOUR, CURRENCY_PRESET).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison([
			"Orb of Alchemy", // 1 / 7.5 exalts
			"Arcanist's Etcher", // 1 / 4.9 exalts
			"Regal Orb", // 1 / 4.18 exalts
			"Glassblower's Bauble", // 1 / 4.4 exalts
			"Armourer's Scrap", // 1 / 3.9 exalts
			"Gemcutter's Prism", // 1 / 3.8 exalts
			"Greater Regal Orb", // 1 / 2.75 exalts
		]);
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourExalt(CURRENCY_COLOUR, CURRENCY_PRESET).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison([
			"Exalted Orb",
			"Perfect Orb of Augmentation", // 1.18 exalts
			"Vaal Orb", // 1.2 exalts
			"Chance Shard", // 2.2 exalts
			"Greater Exalted Orb", // 2.8 exalts
		]);
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourExalt(CURRENCY_COLOUR, CURRENCY_PRESET).sizeExalt();
	});
	filter.block((c, e) => {
		c.names = new Comparison([
			"Chaos Orb", // 11.9 exalts
			"Perfect Jeweller's Orb", // 15 exalts
			"Perfect Regal Orb", // 15 exalts
			"Orb of Chance", // 22 exalts
		]);
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourChance(CURRENCY_COLOUR, CURRENCY_PRESET).sizeChance();
	});
	filter.block((c, e) => {
		c.names = new Comparison([
			"Greater Chaos Orb", // 37.5 exalts
			"Fracturing Orb", // 70 exalts
			"Orb of Annulment", // 159 exalts
			"Divine Orb", // 384.75 exalts
			"Perfect Chaos Orb", // 2 divs
			"Perfect Exalted Orb", // 2.33 divs
			"Hinekora's Lock", // 242 divs
			"Mirror of Kalandra", // 1100 divs
		]);
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourDivine(CURRENCY_COLOUR, CURRENCY_PRESET).sizeDivine();
	});
}

function other(filter) {
	// Essences
	filter.block((c, e) => {
		c.names = new Comparison("Lesser Essence of ", OPERATOR.EQUAL);
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourWisdom(ESSENCE_COLOUR, ESSENCE_PRESET).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison("Greater Essence of ", OPERATOR.EQUAL);
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourExalt(ESSENCE_COLOUR, ESSENCE_PRESET).sizeExalt();
	});
	filter.block((c, e) => {
		c.names = new Comparison("Essence of ", OPERATOR.EQUAL);
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourAugment(ESSENCE_COLOUR, ESSENCE_PRESET).sizeAugment();
	});

	// Abyss
	filter.block((c, e) => {
		c.names = new Comparison([
			"Gnawed Jawbone", // 1 / 10 exalts
			"Gnawed Rib", // 1 / 10 exalts
			"Gnawed Collarbone", // 1 / 1.5 exalts
		]);
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourWisdom(ABYSS_COLOUR, ABYSS_PRESET).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison([
			"Preserved Rib", // 1 / 25 exalts
			"Preserved Jawbone", // 1 / 15 exalts
		]);
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourAugment(ABYSS_COLOUR, ABYSS_PRESET).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison([
			"Preserved Collarbone", // 3.5 exalts
		]);
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourAugment(ABYSS_COLOUR, ABYSS_PRESET).sizeExalt();
	});
	filter.block((c, e) => {
		c.names = new Comparison([
			"Preserved Vertebrae", // 1.2 exalts
		]);
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourExalt(ABYSS_COLOUR, ABYSS_PRESET).sizeExalt();
	});
	filter.block((c, e) => {
		c.names = new Comparison([
			"Preserved Cranium", // 14 exalts
		]);
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourExalt(ABYSS_COLOUR, ABYSS_PRESET).sizeChance();
	});
	filter.block((c, e) => {
		c.names = new Comparison([
			"Ancient Rib", // 1.5 divs
			"Ancient Jawbone", // 3 divs
			"Ancient Collarbone", // 4 divs
		]);
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourDivine(ABYSS_COLOUR, ABYSS_PRESET).sizeDivine();
	});

	// Liquid emotions
	filter.block((c, e) => {
		c.names = new Comparison("Diluted Liquid ", OPERATOR.EQUAL);
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourWisdom(CRAFT_COLOUR, CRAFT_PRESET).sizeExalt();
	});
	filter.block((c, e) => {
		c.names = new Comparison("Concentrated Liquid ", OPERATOR.EQUAL);
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourExalt(CRAFT_COLOUR, CRAFT_PRESET).sizeExalt();
	});
	filter.block((c, e) => {
		c.names = new Comparison("Liquid ", OPERATOR.EQUAL);
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourAugment(CRAFT_COLOUR, CRAFT_PRESET).sizeExalt();
	});

	// Catalysts
	filter.block((c, e) => {
		c.names = new Comparison([
			"Skittering Catalyst", // 1 / 33.5 exalts (speed)
			"Uul-Netol's Catalyst", // 1 / 20 exalts (physical)
			"Adaptive Catalyst", // 1 / 13.33 exalts (attribute)
			"Carapace Catalyst", // 1 / 11.5 exalts (defence)
			"Sibilant Catalyst", // 1 / 11 exalts (caster)
		]);
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourAugment(CRAFT_COLOUR, CRAFT_PRESET).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison([
			"Chayula's Catalyst", // 1 / 9 exalts (chaos)
			"Neural Catalyst", // 1 / 8 exalts (mana)
			"Xoph's Catalyst", // 1 / 8 exalts (fire)
			"Tul's Catalyst", // 1 / 7.89 exalts (cold)
		]);
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourExalt(CRAFT_COLOUR, CRAFT_PRESET).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison([
			"Flesh Catalyst", // 1.24 exalts (life)
			"Esh's Catalyst", // 6.5 exalts (lightning)
		]);
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourExalt(CRAFT_COLOUR, CRAFT_PRESET).sizeExalt();
	});
	filter.block((c, e) => {
		c.names = new Comparison([
			"Reaver Catalyst", // 10 exalts (attack)
		]);
		c.category = new Comparison(CATEGORY.OMEN);

		e.colourChance(CRAFT_COLOUR, CRAFT_PRESET).sizeChance();
	});

	// Trial keys
	filter.block((c, e) => {
		c.names = new Comparison("Bronze Key");
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourWisdom(QUESTLIKE_COLOUR, QUESTLIKE_PRESET).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison("Silver Key");
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourAugment(QUESTLIKE_COLOUR, QUESTLIKE_PRESET).sizeExalt();
	});
	filter.block((c, e) => {
		c.names = new Comparison("Gold Key");
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourExalt(QUESTLIKE_COLOUR, QUESTLIKE_PRESET).sizeExalt();
	});

	// Splinters
	filter.block((c, e) => {
		c.names = new Comparison(["Breach Splinter", "Simulacrum Splinter",
			"Petition Splinter", "Runic Splinter"]);
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourExalt(QUESTLIKE_COLOUR, QUESTLIKE_PRESET).sizeExalt();
	});

	// Expedition
	filter.block((c, e) => {
		c.names = new Comparison(["Broken Circle Artifact", "Black Scythe Artifact",
			"Order Artifact", "Sun Artifact"]);
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourWisdom(MECHANIC_COLOUR, MECHANIC_PRESET).sizeWisdom();
	});
	filter.block((c, e) => {
		c.names = new Comparison("Exotic Coinage");
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourAugment(MECHANIC_COLOUR, MECHANIC_PRESET).sizeAugment();
	});

	// Gold
	filter.block((c, e) => {
		c.names = new Comparison("Gold");
		c.category = new Comparison(CATEGORY.CURRENCY);
		c.count = new Comparison(50, OPERATOR.LT);

		e.hide();
		e.colourWisdom(GOLD_COLOUR, GOLD_PRESET, Colour.TRANSPARENT).sizeWisdom();
	});
	filter.block((c, e) => {
		c.names = new Comparison("Gold");
		c.category = new Comparison(CATEGORY.CURRENCY);
		c.count = new Comparison(500, OPERATOR.LT);

		e.colourWisdom(GOLD_COLOUR, GOLD_PRESET, Colour.TRANSPARENT).sizeWisdom();
	});
	filter.block((c, e) => {
		c.names = new Comparison("Gold");
		c.category = new Comparison(CATEGORY.CURRENCY);
		c.count = new Comparison(2500, OPERATOR.LT);

		e.colourAugment(GOLD_COLOUR, GOLD_PRESET, Colour.TRANSPARENT).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison("Gold");
		c.category = new Comparison(CATEGORY.CURRENCY);
		c.count = new Comparison(5000, OPERATOR.LT);

		e.colourExalt(GOLD_COLOUR, GOLD_PRESET, Colour.TRANSPARENT).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison("Gold");
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.colourExalt(GOLD_COLOUR, GOLD_PRESET, Colour.TRANSPARENT).sizeExalt();
	});
}

function base(filter) {
	filter.block((c, e) => {
		c.category = new Comparison(CATEGORY.CURRENCY);

		e.outlineColour = CURRENCY_COLOUR;
		e.mapColour = CURRENCY_PRESET;
		e.mapIcon = EffectSet.MAP_ICON.CROSS;
		e.sizeExalt();
	});
}
