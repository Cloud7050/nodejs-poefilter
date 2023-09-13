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
			break;
		case ConditionSet.RARITY.UNIQUE:
			permutation.effectSet.textSize = EffectSet.TEXT_SIZE.LARGEST;

			permutation.effectSet.mapColour = EffectSet.COLOUR.ORANGE;
			permutation.effectSet.mapSize = EffectSet.ICON_SIZE.LARGE;

			permutation.effectSet.beamColour = EffectSet.COLOUR.ORANGE;
			break;
	}
}

for (let permutation of permutations) {
	// Outline colour / map icon based on sockets
	if (permutation.conditionSet.isTripleBlueLink) {
		permutation.effectSet.outlineColour = EffectSet.RGB.CYAN;
		permutation.effectSet.mapIcon = EffectSet.ICON.STAR;
		continue;
	} else if (permutation.conditionSet.isRgb) {
		permutation.effectSet.outlineColour = EffectSet.RGB.YELLOW;
		permutation.effectSet.mapIcon = EffectSet.ICON.DIAMOND;
		continue;
	} else if (permutation.conditionSet.isWhite) {
		permutation.effectSet.outlineColour = EffectSet.RGB.CRIMSON;
		permutation.effectSet.mapIcon = EffectSet.ICON.SQUARE;
		continue;
	} else if (permutation.conditionSet.isTripleLink) {
		permutation.effectSet.outlineColour = EffectSet.RGB.LIME;
		permutation.effectSet.mapIcon = EffectSet.ICON.CROSS;
		continue;
	}

	// Outline colour / map icon for mirrored
	if (permutation.conditionSet.isMirrored) {
		permutation.effectSet.outlineColour = EffectSet.RGB.PURPLE;
		permutation.effectSet.mapIcon = EffectSet.ICON.MOON;
		continue;
	}

	// Different default map icon for other types
	if (permutation.conditionSet.type === ConditionSet.TYPE.OTHER) {
		permutation.effectSet.mapIcon = EffectSet.ICON.RAINDROP;
		continue;
	}

	// At this point, the item has no special icon.
	// If it's too common, hide it from map to avoid equipment spam
	if (
		permutation.conditionSet.rarity === ConditionSet.RARITY.NORMAL
		|| permutation.conditionSet.rarity === ConditionSet.RARITY.MAGIC
	) {
		permutation.effectSet.mapColour = null;
	}
}

for (let permutation of permutations) {
	// Shrink & hide from map the meh items

	// For unused weapons, shrink if it isn't RGB
	let unusedWeaponMeh = (
		permutation.conditionSet.type === ConditionSet.TYPE.UNUSED_WEAPON
		&& (
			permutation.conditionSet.rarity === ConditionSet.RARITY.NORMAL
			|| permutation.conditionSet.rarity === ConditionSet.RARITY.MAGIC
		)
		&& !permutation.conditionSet.isRgb
	);
	// For used weapons / armour, shrink if no special sockets
	let usedWeaponArmourMeh = (
		(
			permutation.conditionSet.type === ConditionSet.TYPE.USED_WEAPON
			|| permutation.conditionSet.type === ConditionSet.TYPE.ARMOUR
		)
		&& permutation.conditionSet.rarity === ConditionSet.RARITY.NORMAL
		&& !(
			permutation.conditionSet.isTripleLink
			|| permutation.conditionSet.isWhite
			|| permutation.conditionSet.isRgb
			|| permutation.conditionSet.isTripleBlueLink
		)
	);

	if (unusedWeaponMeh || usedWeaponArmourMeh) {
		// Shrink
		permutation.effectSet.textSize = EffectSet.TEXT_SIZE.SMALLEST;

		// Hide from map
		permutation.effectSet.mapColour = null;

		// Also, undo any outline
		permutation.effectSet.outlineColour = null;
	}
}

// Export all the Permutations
let filterBlocks = "";
for (let permutation of permutations) {
	filterBlocks += "Show\n";

	for (let line of permutation.conditionSet.export()) {
		filterBlocks += `	${line}\n`;
	}

	filterBlocks += "\n";

	for (let line of permutation.effectSet.export()) {
		filterBlocks += `	${line}\n`;
	}

	filterBlocks += "\n";
}

// Save to filter file
fs.writeFileSync("./Cloud.filter", filterBlocks);
fs.writeFileSync("C:/Users/cloud/Documents/My Games/Path of Exile/Cloud.filter", filterBlocks);

console.log("☁");
