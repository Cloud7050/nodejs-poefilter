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
export const CURRENCY_COLOUR = Colour.RED;
export const CURRENCY_PRESET = PRESET.RED;
// ORANGE
export const CRAFT_COLOUR = Colour.TANGERINE;
export const CRAFT_PRESET = PRESET.ORANGE;
// GOLD
export const GOLD_COLOUR = Colour.YELLOW;
export const GOLD_PRESET = PRESET.YELLOW;
export const QUESTLIKE_COLOUR = Colour.LIME;
export const QUESTLIKE_PRESET = PRESET.GREEN;
export const QUEST_COLOUR = Colour.GREEN;
export const QUEST_PRESET = PRESET.GREEN;
export const MECHANIC_COLOUR = Colour.SEAFOAM;
export const MECHANIC_PRESET = PRESET.BROWN;
// TEAL
export const GEM_COLOUR = Colour.CYAN;
export const GEM_PRESET = PRESET.GREY;
// SKY
export const SOCKETABLE_COLOUR = Colour.CERULEAN;
export const SOCKETABLE_PRESET = PRESET.CYAN;
export const JEWEL_COLOUR = Colour.BLUE;
export const JEWEL_PRESET = PRESET.BLUE;
export const GEAR_COLOUR = Colour.LAPIS;
export const GEAR_PRESET = PRESET.BLUE;
export const ESSENCE_COLOUR = Colour.PURPLE;
export const ESSENCE_PRESET = PRESET.PURPLE;
export const ABYSS_COLOUR = Colour.VIOLET;
export const ABYSS_PRESET = PRESET.PINK;
// PINK

let main = new Filter("Cloud");

sectionGlobal(main);

sectionCurrencies(main);
sectionOmens(main);
sectionGems(main);
sectionSocketables(main);
sectionMisc(main);
sectionRarity(main);

sectionOutlines(main);
sectionWhitelist(main);

sectionHides(main);

main.save();
