/**
 * Generates PoE filter blocks for every permutation of conditions. Each block
 * has its own specific effects applied. In theory, no item should ever match
 * more than one block.
 *
 * This saves on complications arising from items matching multiple blocks due
 * to Continues, as it's not possible to cleanly "undo" earlier applied effects.
 * Also, trying to conditionally undo only a subset of effects requires
 * condition duplication. Overall, items matching multiple blocks is more
 * complicated.
 *
 * Another upside is being able to split effects, such as minimap colour and
 * icon. When written manually, you would have a lot of condition duplication
 * from having to set them in the same line.
 *
 * The downside is that more blocks means more processing by the game.
 */

/* [Imports] */
import fs from "node:fs";
import { ConditionSet } from "./classes/conditionSet.js";
import { EffectSet } from "./classes/effectSet.js";
import { Permutation } from "./classes/permutation.js";
import { makePermutations } from "./utilities.js";



/* [Main] */
let permutations = makePermutations();

// Go through ConditionSets, using the power of JS to add effects only to
// specific ones
for (let permutation of permutations) {
	// Map colour/size etc based on rarity
	switch (permutation.c.rarity) {
		case ConditionSet.RARITY.NORMAL:
			permutation.e.mapColour = EffectSet.COLOUR.SILVER;
			break;
		case ConditionSet.RARITY.MAGIC:
			permutation.e.mapColour = EffectSet.COLOUR.BLUE;
			break;
		case ConditionSet.RARITY.RARE:
			permutation.e.mapColour = EffectSet.COLOUR.YELLOW;
			permutation.e.mapSize = EffectSet.ICON_SIZE.MEDIUM;

			permutation.certifyValue(Permutation.VALUE.HIGH);
			break;
		case ConditionSet.RARITY.UNIQUE:
			permutation.e.textSize = EffectSet.TEXT_SIZE.LARGEST;

			permutation.e.mapColour = EffectSet.COLOUR.ORANGE;
			permutation.e.mapSize = EffectSet.ICON_SIZE.LARGE;

			permutation.e.beamColour = EffectSet.COLOUR.ORANGE;

			permutation.certifyValue(Permutation.VALUE.HIGH);
			break;
	}
}

for (let permutation of permutations) {
	// Outline colour / map icon for mirrored/corrupted
	if (permutation.c.isCorrupted) {
		permutation.e.outlineColour = EffectSet.RGB.CRIMSON;
		permutation.e.mapIcon = EffectSet.ICON.PENTAGON;

		permutation.certifyValue(Permutation.VALUE.HIGH);
		continue;
	}
	if (permutation.c.isMirrored) {
		permutation.e.outlineColour = EffectSet.RGB.PURPLE;
		permutation.e.mapIcon = EffectSet.ICON.MOON;

		permutation.certifyValue(Permutation.VALUE.HIGH);
		continue;
	}

	// Outline colour / map icon for special sockets
	if (permutation.c.isTripleBlueLink) {
		permutation.e.outlineColour = EffectSet.RGB.CYAN;
		permutation.e.mapIcon = EffectSet.ICON.STAR;

		permutation.certifyValue(Permutation.VALUE.MEDIUM);
		continue;
	}
	if (permutation.c.isRgb) {
		permutation.e.outlineColour = EffectSet.RGB.YELLOW;
		permutation.e.mapIcon = EffectSet.ICON.DIAMOND;

		permutation.certifyValue(Permutation.VALUE.HIGH);
		continue;
	}
	if (permutation.c.isWhite) {
		permutation.e.outlineColour = EffectSet.RGB.PINK;
		permutation.e.mapIcon = EffectSet.ICON.SQUARE;

		permutation.certifyValue(Permutation.VALUE.MEDIUM);
		continue;
	}
	if (permutation.c.isTripleLink) {
		permutation.e.outlineColour = EffectSet.RGB.LIME;
		permutation.e.mapIcon = EffectSet.ICON.CROSS;

		permutation.certifyValue(Permutation.VALUE.MEDIUM);
		continue;
	}

	// Different colour / default map icon for other types
	if (permutation.c.type === ConditionSet.TYPE.GEM) {
		permutation.e.mapColour = EffectSet.COLOUR.CYAN;
		permutation.e.mapIcon = EffectSet.ICON.HOUSE;

		permutation.certifyValue(Permutation.VALUE.HIGH);
		continue;
	}
	if (permutation.c.type === ConditionSet.TYPE.CURRENCY) {
		permutation.e.mapColour = EffectSet.COLOUR.LIME;
		permutation.e.mapIcon = EffectSet.ICON.KITE;

		permutation.certifyValue(Permutation.VALUE.HIGH);
		continue;
	}
	if (permutation.c.type === ConditionSet.TYPE.OTHER) {
		permutation.e.mapColour = EffectSet.COLOUR.PINK;
		permutation.e.mapIcon = EffectSet.ICON.RAINDROP;

		permutation.certifyValue(Permutation.VALUE.HIGH);
		continue;
	}

	// At this point, the item has no special icon.
	// Unmap low/medium to avoid equipment spam
	if (permutation.value <= Permutation.VALUE.MEDIUM) {
		permutation.e.mapColour = null;
	}
}

for (let permutation of permutations) {
	// Shrink & unmap the meh items

	if (permutation.value >= Permutation.VALUE.HIGH) continue;

	// Shrink/unmap low/medium unused weapons
	let unusedWeaponMeh = permutation.c.type === ConditionSet.TYPE.UNUSED_WEAPON;
	// Shrink/unmap low used weapons / armour
	let usedWeaponArmourMeh = (
		(
			permutation.c.type === ConditionSet.TYPE.USED_WEAPON
			|| permutation.c.type === ConditionSet.TYPE.ARMOUR
		)
		&& permutation.value <= Permutation.VALUE.LOW
	);

	if (unusedWeaponMeh || usedWeaponArmourMeh) {
		// Shrink
		permutation.e.textSize = EffectSet.TEXT_SIZE.SMALLEST;

		// Hide from map
		permutation.e.mapColour = null;
	}
}

// Export all the Permutations
let lines = [];
let blockCount = 0;
for (let permutation of permutations) {
	let effectLines = permutation.e.export();
	if (effectLines.length <= 0) continue;
	let conditionLines = permutation.c.export();

	lines.push("Show");

	for (let conditionLine of conditionLines) {
		lines.push(`	${conditionLine}`);
	}

	lines.push("");

	for (let effectLine of effectLines) {
		lines.push(`	${effectLine}`);
	}

	lines.push("");

	blockCount++;
}

// Save to filter file
let filterBlocks = lines.join("\n");
fs.writeFileSync("./Cloud.filter", filterBlocks);
fs.writeFileSync("C:/Users/cloud/Documents/My Games/Path of Exile/Cloud.filter", filterBlocks);

console.log(`Blocks: ${blockCount}/${permutations.length}`);
console.log(`Lines: ${lines.length}`);
console.log("☁");
