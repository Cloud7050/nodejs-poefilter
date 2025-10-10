import { Comparison } from "../conditions/comparison.js";
import { CATEGORY } from "../conditions/conditionSet.js";
import { CRAFT_COLOUR, CRAFT_PRESET } from "../index.js";

export function sectionOmens(filter) {
	filter.block((c, e) => {
		c.names = new Comparison([
			"Omen of Gambling", // 1 / 500 exalts
			"Omen of the Liege", // 1 / 150 exalts
			"Omen of Refreshment", // 1 / 100 exalts
		]);
		c.category = new Comparison(CATEGORY.OMEN);

		e.colourAugment(CRAFT_COLOUR, CRAFT_PRESET).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison([
			"Omen of the Blackblooded", // 1 / 10 exalts
			"Omen of Dextral Necromancy", // 1 / 7 exalts
			"Omen of the Sovereign", // 1 / 5 exalts
			"Omen of Resurgence", // 1 / 3 exalts
			"Omen of Greater Exaltation", // 1 / 2 exalts
		]);
		c.category = new Comparison(CATEGORY.OMEN);

		e.colourExalt(CRAFT_COLOUR, CRAFT_PRESET).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison([
			"Omen of the Ancients", // 1.1 exalts
			"Omen of Putrefaction", // 1.2 exalts
			"Omen of Chaotic Quantity", // 1.25 exalts
			"Omen of Chaotic Monsters", // 1.5 exalts
			"Omen of Sinistral Exaltation", // 2 exalts
			"Omen of the Blessed", // 2 exalts
			"Omen of Dextral Exaltation", // 3.4 exalts
			"Omen of Bartering", // 3.7 exalts
			"Omen of Homogenising Coronation", // 4 exalts
			"Omen of Catalysing Exaltation", // 5 exalts
			"Omen of Answered Prayers", // 5.1 exalts
			"Omen of Corruption", // 5.5 exalts
			"Omen of Amelioration", // 5.67 exalts
		]);
		c.category = new Comparison(CATEGORY.OMEN);

		e.colourExalt(CRAFT_COLOUR, CRAFT_PRESET).sizeExalt();
	});
	filter.block((c, e) => {
		c.names = new Comparison([
			"Omen of Sinistral Necromancy", // 10 exalts
			"Omen of Chaotic Rarity", // 12 exalts
			"Omen of Dextral Crystallisation", // 12 exalts
			"Omen of Reinforcements", // 16 exalts
			"Omen of Recombination", // 22 exalts
			"Omen of the Hunt", // 28 exalts
			"Omen of Sinistral Crystallisation", // 30 exalts
		]);
		c.category = new Comparison(CATEGORY.OMEN);

		e.colourChance(CRAFT_COLOUR, CRAFT_PRESET).sizeChance();
	});
	filter.block((c, e) => {
		c.names = new Comparison([
			"Omen of Secret Compartments", // 34 exalts
			"Omen of Homogenising Exaltation", // 47 exalts
			"Omen of Abyssal Echoes", // 71 exalts
			"Omen of Sanctification", // 118 exalts
			"Omen of Dextral Erasure", // 1 div
			"Omen of Whittling", // 1.33 divs
			"Omen of Dextral Annulment", // 2.6 divs
			"Omen of Sinistral Erasure", // 3.33 divs
			"Omen of Light", // 3.6 divs
			"Omen of Sinistral Annulment", // 3.8 divs
			"Omen of Chance", // 7.5 divs
		]);
		c.category = new Comparison(CATEGORY.OMEN);

		e.colourDivine(CRAFT_COLOUR, CRAFT_PRESET).sizeDivine();
	});
}
