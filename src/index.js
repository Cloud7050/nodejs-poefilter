import { Colour, PRESET } from "./effects/colour.js";
import { Filter } from "./filter.js";
import { sectionHides } from "./sections/10_hides.js";
import { sectionGlobal } from "./sections/1_global.js";
import { sectionCurrencies } from "./sections/2_currencies.js";
import { sectionOmens } from "./sections/3_omens.js";
import { sectionGems } from "./sections/4_gems.js";
import { sectionSocketables } from "./sections/5_socketables.js";
import { sectionMisc } from "./sections/6_misc.js";
import { sectionRarity } from "./sections/7_rarity.js";
import { sectionOutlines } from "./sections/8_outlines.js";
import { sectionWhitelist } from "./sections/9_whitelist.js";

// ROSE
export const PAIR_CURRENCY = [Colour.RED, PRESET.RED];
// ORANGE
export const PAIR_CRAFT = [Colour.TANGERINE, PRESET.ORANGE];
// GOLD
export const PAIR_GOLD = [Colour.YELLOW, PRESET.YELLOW];
export const PAIR_QUESTLIKE = [Colour.LIME, PRESET.GREEN];
export const PAIR_QUEST = [Colour.GREEN, PRESET.GREEN];
export const PAIR_MECHANIC = [Colour.SEAFOAM, PRESET.BROWN];
// TEAL
export const PAIR_GEM = [Colour.CYAN, PRESET.GREY];
// SKY
export const PAIR_SOCKETABLE = [Colour.CERULEAN, PRESET.CYAN];
export const PAIR_JEWEL = [Colour.BLUE, PRESET.BLUE];
export const PAIR_GEAR = [Colour.LAPIS, PRESET.BLUE];
export const PAIR_ESSENCE = [Colour.PURPLE, PRESET.PURPLE];
export const PAIR_ABYSS = [Colour.VIOLET, PRESET.PINK];
// PINK

function makeFilter(name, showRares = false) {
	let main = new Filter(name);

	sectionGlobal(main);

	sectionCurrencies(main);
	sectionOmens(main);
	sectionGems(main);
	sectionSocketables(main);
	sectionMisc(main);
	sectionRarity(main);

	sectionOutlines(main);
	sectionWhitelist(main, showRares);

	sectionHides(main);

	main.save();
}

makeFilter("Cloud");
makeFilter("Show Rares", true);
