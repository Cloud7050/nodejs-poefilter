import { Colour, PRESET } from "./effects/colour.js";

// Colour pairs
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
export const PAIR_AUGMENT = [Colour.CERULEAN, PRESET.CYAN];
export const PAIR_JEWEL = [Colour.BLUE, PRESET.BLUE];
export const PAIR_GEAR = [Colour.LAPIS, PRESET.BLUE];
export const PAIR_ESSENCE = [Colour.PURPLE, PRESET.PURPLE];
export const PAIR_ABYSS = [Colour.VIOLET, PRESET.PINK];
// PINK

// Minimum price breakpoints to style as a certain size
export const PRICE_AUGMENT = 1 / 100;
export const PRICE_EXALT = 1;
export const PRICE_CHANCE = 10;
export const PRICE_DIV = 500; // Exalts per divine

// Character level to impact what ilvl & drop level are deemed usable
export const LEVEL_PLAYER = 1;
export const LEVEL_ITEM = 1;
export const LEVEL_DROP = 1;

export const LEVEL_BIS = 82;

// Maximum price breakpoints for gold piles
export const GOLD_HIDE = 0; // 50
export const GOLD_WISDOM = 100; // 100
export const GOLD_AUGMENT = 500; // 2500
export const GOLD_AUGMENT_EXALT = 1000; // 5000

//TODO add gear & unique hiding price breakpoints
