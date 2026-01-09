import { Colour, PRESET } from "./effects/colour.js";
import { EffectSet } from "./effects/effectSet.js";

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

//// BiS item levels
export const LEVEL_OK = 80;

export const LEVEL_BIS = 82;
export const LEVEL_BIS_LAKE = 79;
export const LEVEL_BIS_VESSEL = 80;
export const LEVEL_BIS_RELIC = 80;
export const LEVEL_BIS_WAND_STAFF = 81;
export const LEVEL_BIS_CHARM = 81;
export const LEVEL_BIS_FLASK = 83;

export const LEVEL_HEAVY_BELT = 50;
export const LEVEL_ULTIMATE_FLASK = 60;

// Some categories are special cases where lower minimum drop level is still endgame
export const LEVEL_DROP_ANY = 0;
export const LEVEL_DROP_ATTACKER = 75;
export const LEVEL_DROP_OFF_ARMOUR = 80;
export const LEVEL_DROP_BODY = 65;
export const LEVEL_DROP_FLASK = LEVEL_ULTIMATE_FLASK;
////

//// Breakpoints for gold prices & hides
export const LEVEL_CAMPAIGN = 0;
export const LEVEL_MAP = 65;
export const LEVEL_T15 = LEVEL_BIS_LAKE;
export const LEVEL_ENDGAME = 80;
export const LEVEL_GOLD_HOP = 5;

export const CAMPAIGN_1 = 0;
export const CAMPAIGN_2 = 10;
export const CAMPAIGN_3 = 50;
export const CAMPAIGN_4 = 100;
export const MAP_1 = 0;
export const MAP_2 = 200;
export const MAP_3 = 1000;
export const MAP_4 = 2000;
export const ENDGAME_1 = 50;
export const ENDGAME_2 = 500;
export const ENDGAME_3 = 2500;
export const ENDGAME_4 = 5000;
////



//// Changing constants as you play
// Area level to impact what drop levels are deemed usable
export const LEVEL_AREA = 28;

// General style defaults by rarity
export const SIZE_NORMAL = EffectSet.INDEX_WISDOM;
export const SIZE_MAGIC = EffectSet.INDEX_AUGMENT;
export const SIZE_RARE = EffectSet.INDEX_EXALT;

export const SIZE_JEWEL_MAGIC = EffectSet.INDEX_AUGMENT;
export const SIZE_JEWEL_RARE = EffectSet.INDEX_EXALT;
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
