import { Filter } from "./filter.js";
import { sectionHides } from "./sections/10_hides.js";
import { sectionGlobal } from "./sections/1_global.js";
import { sectionCurrencies } from "./sections/2_currencies.js";
import { sectionOmens } from "./sections/3_omens.js";
import { sectionGems } from "./sections/4_gems.js";
import { sectionAugments } from "./sections/5_augments.js";
import { sectionMisc } from "./sections/6_misc.js";
import { sectionRarity } from "./sections/7_rarity.js";
import { sectionOutlines } from "./sections/8_outlines.js";
import { sectionWhitelist } from "./sections/9_whitelist.js";

function makeFilter(name, isGoldRares = false) {
	let filter = new Filter(name);

	sectionGlobal(filter);

	sectionCurrencies(filter);
	sectionOmens(filter);
	sectionGems(filter);
	sectionAugments(filter);
	sectionMisc(filter);
	sectionRarity(filter);

	sectionOutlines(filter);
	sectionWhitelist(filter, isGoldRares);

	sectionHides(filter);

	filter.save();
}

makeFilter("Cloud");
makeFilter("Gold Rares", true);
