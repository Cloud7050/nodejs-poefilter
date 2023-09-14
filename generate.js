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



/* [Main] */
// Generate all possibilities by duplicating ConditionSets
let seed = new ConditionSet();
let conditions = seed.duplicateType();

conditions = conditions.flatMap(
	(conditionSet) => conditionSet.duplicateRarity()
);

conditions = conditions.flatMap(
	(conditionSet) => conditionSet.duplicateTripleLink()
);
conditions = conditions.flatMap(
	(conditionSet) => conditionSet.duplicateWhite()
);
conditions = conditions.flatMap(
	(conditionSet) => conditionSet.duplicateRgb()
);
conditions = conditions.flatMap(
	(conditionSet) => conditionSet.duplicateTripleBlueLink()
);

conditions = conditions.flatMap(
	(conditionSet) => conditionSet.duplicateMirrored()
);
conditions = conditions.flatMap(
	(conditionSet) => conditionSet.duplicateCorrupted()
);

// Convert ConditionSets into blank Permutations, which start with no effects
let permutations = conditions.map((
	(conditionSet) => new Permutation(conditionSet)
));

// Go through ConditionSets, using the power of JS to add effects only to
// specific ones
for (let permutation of permutations) {
	// Map colour/size etc based on rarity
	switch (permutation.conditionSet.rarity) {
		case ConditionSet.RARITY.NORMAL:
			permutation.effectSet.mapColour = EffectSet.COLOUR.WHITE;
			break;
		case ConditionSet.RARITY.MAGIC:
			permutation.effectSet.mapColour = EffectSet.COLOUR.BLUE;
			break;
		case ConditionSet.RARITY.RARE:
			permutation.effectSet.mapColour = EffectSet.COLOUR.YELLOW;
			permutation.effectSet.mapSize = EffectSet.ICON_SIZE.MEDIUM;

			permutation.certifyValue(Permutation.VALUE.HIGH);
			break;
		case ConditionSet.RARITY.UNIQUE:
			permutation.effectSet.textSize = EffectSet.TEXT_SIZE.LARGEST;

			permutation.effectSet.mapColour = EffectSet.COLOUR.ORANGE;
			permutation.effectSet.mapSize = EffectSet.ICON_SIZE.LARGE;

			permutation.effectSet.beamColour = EffectSet.COLOUR.ORANGE;

			permutation.certifyValue(Permutation.VALUE.HIGH);
			break;
	}
}

for (let permutation of permutations) {
	// Outline colour / map icon for special sockets
	if (permutation.conditionSet.isTripleBlueLink) {
		permutation.effectSet.outlineColour = EffectSet.RGB.CYAN;
		permutation.effectSet.mapIcon = EffectSet.ICON.STAR;

		permutation.certifyValue(Permutation.VALUE.MEDIUM);
		continue;
	}
	if (permutation.conditionSet.isRgb) {
		permutation.effectSet.outlineColour = EffectSet.RGB.YELLOW;
		permutation.effectSet.mapIcon = EffectSet.ICON.DIAMOND;

		permutation.certifyValue(Permutation.VALUE.HIGH);
		continue;
	}
	if (permutation.conditionSet.isWhite) {
		permutation.effectSet.outlineColour = EffectSet.RGB.PINK;
		permutation.effectSet.mapIcon = EffectSet.ICON.SQUARE;

		permutation.certifyValue(Permutation.VALUE.MEDIUM);
		continue;
	}
	if (permutation.conditionSet.isTripleLink) {
		permutation.effectSet.outlineColour = EffectSet.RGB.LIME;
		permutation.effectSet.mapIcon = EffectSet.ICON.CROSS;

		permutation.certifyValue(Permutation.VALUE.MEDIUM);
		continue;
	}

	// Outline colour / map icon for mirrored/corrupted
	if (permutation.conditionSet.isCorrupted) {
		permutation.effectSet.outlineColour = EffectSet.RGB.CRIMSON;
		permutation.effectSet.mapIcon = EffectSet.ICON.PENTAGON;

		permutation.certifyValue(Permutation.VALUE.HIGH);
		continue;
	}
	if (permutation.conditionSet.isMirrored) {
		permutation.effectSet.outlineColour = EffectSet.RGB.PURPLE;
		permutation.effectSet.mapIcon = EffectSet.ICON.MOON;

		permutation.certifyValue(Permutation.VALUE.HIGH);
		continue;
	}

	// Different default map icon for other types
	if (permutation.conditionSet.type === ConditionSet.TYPE.GEM) {
		permutation.effectSet.mapIcon = EffectSet.ICON.HOUSE;

		permutation.certifyValue(Permutation.VALUE.HIGH);
		continue;
	}
	if (permutation.conditionSet.type === ConditionSet.TYPE.CURRENCY) {
		permutation.effectSet.mapIcon = EffectSet.ICON.KITE;

		permutation.certifyValue(Permutation.VALUE.HIGH);
		continue;
	}
	if (permutation.conditionSet.type === ConditionSet.TYPE.OTHER) {
		permutation.effectSet.mapIcon = EffectSet.ICON.RAINDROP;

		permutation.certifyValue(Permutation.VALUE.HIGH);
		continue;
	}

	// At this point, the item has no special icon.
	// Unmap low/medium to avoid equipment spam
	if (permutation.value <= Permutation.VALUE.MEDIUM) {
		permutation.effectSet.mapColour = null;
	}
}

for (let permutation of permutations) {
	// Shrink & unmap the meh items

	if (permutation.value >= Permutation.VALUE.HIGH) continue;

	// Shrink/unmap low/medium unused weapons
	let unusedWeaponMeh = permutation.conditionSet.type === ConditionSet.TYPE.UNUSED_WEAPON;
	// Shrink/unmap low used weapons / armour
	let usedWeaponArmourMeh = (
		(
			permutation.conditionSet.type === ConditionSet.TYPE.USED_WEAPON
			|| permutation.conditionSet.type === ConditionSet.TYPE.ARMOUR
		)
		&& permutation.value <= Permutation.VALUE.LOW
	);

	if (unusedWeaponMeh || usedWeaponArmourMeh) {
		// Shrink
		permutation.effectSet.textSize = EffectSet.TEXT_SIZE.SMALLEST;

		// Hide from map
		permutation.effectSet.mapColour = null;
	}
}

// Export all the Permutations
let lines = [];
let blockCount = 0;
for (let permutation of permutations) {
	let effectLines = permutation.effectSet.export();
	if (effectLines.length <= 0) continue;
	let conditionLines = permutation.conditionSet.export();

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

console.log(`Blocks: ${blockCount}`);
console.log(`Lines: ${lines.length}`);
console.log("☁");
