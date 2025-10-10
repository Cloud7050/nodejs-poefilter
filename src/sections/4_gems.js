import { CATEGORY } from "../conditions/category.js";
import { Comparison } from "../conditions/comparison.js";
import { PAIR_GEM } from "../index.js";


export function sectionGems(filter) {
	// Uncut
	filter.block((c, e) => {
		c.category = new Comparison(CATEGORY.SUPPORT_UNCUT);

		e.colourAugment(PAIR_GEM).sizeExalt();
	});
	filter.block((c, e) => {
		c.category = new Comparison(CATEGORY.GEM_UNCUT);

		e.colourAugment(PAIR_GEM).sizeExalt();
	});

	// Lineage
	filter.block((c, e) => {
		c.names = new Comparison([
			"Daresso's Passion", // 1 / 10 exalts
			"Arakaali's Lust", // 1 / 10 exalts
			"Kurgal's Leash", // 1 / 5 exalts
			"Tacati's Ire", // 1 / 4 exalts
			"Sione's Temper", // 1 / 3 exalts
			"Romira's Requital", // 1 / 3 exalts
			"Uruk's Smelting", // 1 / 2 exalts
			"Paquate's Pact", // 1 / 2 exalts
			"Vilenta's Propulsion", // 1 / 2 exalts
			"Tecrod's Revenge", // 1 / 2 exalts
			"Kulemak's Dominion", // 1 / 2 exalts
			"Ahn's Citadel", // 1 / 2 exalts
			"Varashta's Blessing", // 1 / 2 exalts
			"Einhar's Beastrite", // 1 exalt
			"Doedre's Undoing", // 1 exalt
			"Kaom's Madness", // 1 exalt
			"Tawhoa's Tending", // 1 exalt
			"Atziri's Allure", // 1 exalt
			"Zarokh's Refrain", // 1 exalt
		]);
		c.category = new Comparison(CATEGORY.GEM);

		e.colourChance(PAIR_GEM).sizeAugment();
	});
	filter.block((c, e) => {
		c.names = new Comparison([
			"Brutus' Brain", // 2 exalts
			"Piety's Mercy", // 2 exalts
			"Arbiter's Ignition", // 2 exalts
			"Xoph's Pyre", // 3 exalts
			"Garukhan's Resolve", // 3 exalts
			"Ailith's Chimes", // 5 exalts
			"Kalisa's Crescendo", // 5 exalts
		]);
		c.category = new Comparison(CATEGORY.GEM);

		e.colourChance(PAIR_GEM).sizeExalt();
	});
	filter.block((c, e) => {
		c.names = new Comparison([
			"Uhtred's Exodus", // 14 exalts
			"Tul's Stillness", // 15 exalts
		]);
		c.category = new Comparison(CATEGORY.GEM);

		e.colourChance(PAIR_GEM).sizeChance();
	});
	filter.block((c, e) => {
		c.names = new Comparison([
			"Esh's Radiance", // 40 exalts
			"Rigwald's Ferocity", // 40 exalts
			"Ixchel's Torment", // 138 exalts
			"Atalui's Bloodletting", // 3 divs
			"Ratha's Assault", // 4 divs
			"Uul-Netol's Embrace", // 6 divs
			"Uhtred's Omen", // 6 divs
			"Rakiata's Flow", // 18 divs
			"Uhtred's Augury", // 30 divs
			"Arjun's Medal", // 34 divs
			"Dialla's Desire", // 36 divs
		]);
		c.category = new Comparison(CATEGORY.GEM);

		e.colourDivine(PAIR_GEM).sizeDivine();
	});

	//// Cut
	// Crafted on
	filter.multiBlock((c) => {
		c.category = new Comparison(CATEGORY.GEM);
		c.hasQuality();
	}, (c) => {
		c.category = new Comparison(CATEGORY.GEM);
		c.hasSockets(5);
	}, (e) => {
		e.colourExalt(PAIR_GEM).sizeExalt();
	});

	// BASE basic
	filter.block((c, e) => {
		c.category = new Comparison(CATEGORY.GEM);

		e.colourExalt(PAIR_GEM).sizeWisdom();
	});
	////
}
