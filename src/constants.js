import { Colour, PRESET } from "./effects/colour.js";

//// Colour pairs
// ROSE
export const PAIR_CURRENCY = [Colour.RED, PRESET.RED];
export const PAIR_MECHANIC2 = [Colour.ORANGE, PRESET.ORANGE]; // Abyssal omens, expedition coinage
export const PAIR_MECHANIC1 = [Colour.TANGERINE, PRESET.ORANGE]; // Ritual omens, abyssal bones, expedition artifacts, breach catalysts, delirium emotions
// GOLD
export const PAIR_GOLD = [Colour.YELLOW, PRESET.YELLOW];
export const PAIR_MAP1 = [Colour.LIME, PRESET.GREEN]; // Waystones, expedition logbooks
export const PAIR_QUEST = [Colour.GREEN, PRESET.GREEN]; // Sekhema keys, rotten satchel charges
export const PAIR_MAPLIKE = [Colour.SEAFOAM, PRESET.BROWN]; // Tablets, relics
// TEAL
export const PAIR_GEM = [Colour.CYAN, PRESET.GREY];
// SKY
export const PAIR_AUGMENT = [Colour.CERULEAN, PRESET.CYAN];
export const PAIR_JEWEL = [Colour.BLUE, PRESET.BLUE];
export const PAIR_GEAR = [Colour.LAPIS, PRESET.BLUE]; // Vault reliquary keys
export const PAIR_ESSENCE = [Colour.PURPLE, PRESET.PURPLE];
export const PAIR_LEAGUE = [Colour.VIOLET, PRESET.PURPLE];
export const PAIR_MAP2 = [Colour.PINK, PRESET.PINK]; // Pinnacle fragment keys, trial tickets > chaos fate keys, splinters/kulemak's invitations
////

//// Minimum price breakpoints to style as a certain size
export const PRICE_AUGMENT = 1 / 100;
export const PRICE_EXALT = 1;
export const PRICE_CHANCE = 10;
export const PRICE_DIV = 500; // Exalts per divine
////

//// Minimum price breakpoints to whitelist or hide
export const VALUE_BAD = 2;
// export const VALUE_OTHER = 5;
////

//// BiS item levels
export const LEVEL_OK = 80;

export const LEVEL_BIS = 82;
export const LEVEL_BIS_MAP_DROP = 79;
export const LEVEL_BIS_RELIC = 80;
export const LEVEL_BIS_WAND_STAFF = 81;
export const LEVEL_BIS_CHARM = 81;
export const LEVEL_BIS_FLASK = 83;

// Special cases of lower minimum drop levels being suitable for endgame,
// instead of defaulting to highest possible drop level in category
export const LEVEL_DROP_CASTER_QUIVER = 0;
export const LEVEL_DROP_ATTACKER = 75;
// export const LEVEL_DROP_OFF_ARMOUR = 80;
export const LEVEL_DROP_BODY = 65;

export const LEVEL_HEAVY_BELT = 50;
////

//// Character level to impact what ilvl & drop level are deemed usable
// export const LEVEL_PLAYER = 16;
export const LEVEL_AREA = 17;
////

//// Maximum price breakpoints for gold piles
export const GOLD_HIDE = 0; // 50
export const GOLD_WISDOM = 100; // 100
export const GOLD_AUGMENT = 500; // 2500
export const GOLD_AUGMENT_EXALT = 1000; // 5000
////
