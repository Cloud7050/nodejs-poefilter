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
let conditions = new ConditionSet();
conditions = conditions.duplicateRarity();

conditions = conditions.flatMap(
	(conditionSet) => conditionSet.duplicateTripleLink()
);
conditions = conditions.flatMap(
	(conditionSet) => conditionSet.duplicateRgb()
);
conditions = conditions.flatMap(
	(conditionSet) => conditionSet.duplicateTripleBlueLink()
);

// Convert ConditionSets into blank Permutations, which start with no effects
let permutations = conditions.map((
	(conditionSet) => new Permutation(conditionSet)
));

// Go through ConditionSets, using the power of JS to add effects only to
// specific ones
for (let permutation of permutations) {
	// Map colour/size based on rarity
	switch (permutation.conditionSet.rarity) {
		case ConditionSet.RARITY.NORMAL:
			permutation.effectSet.mapColour = EffectSet.COLOUR.WHITE;
			break;
		case ConditionSet.RARITY.MAGIC:
			permutation.effectSet.mapColour = EffectSet.COLOUR.BLUE;
			break;
		case ConditionSet.RARITY.RARE:
			permutation.effectSet.mapColour = EffectSet.COLOUR.YELLOW;
			permutation.effectSet.mapSize = EffectSet.SIZE.MEDIUM;
			break;
		case ConditionSet.RARITY.UNIQUE:
			permutation.effectSet.mapColour = EffectSet.COLOUR.ORANGE;
			permutation.effectSet.mapSize = EffectSet.SIZE.LARGE;
			permutation.effectSet.beamColour = EffectSet.COLOUR.ORANGE;
			break;
	}
}

for (let permutation of permutations) {
	// Outline colour / map icon based on sockets
	if (permutation.conditionSet.isTripleBlueLink) {
		permutation.effectSet.outlineColour = EffectSet.RGB.LIME;
		permutation.effectSet.mapIcon = EffectSet.ICON.STAR;
	} else if (permutation.conditionSet.isRgb) {
		permutation.effectSet.outlineColour = EffectSet.RGB.AQUAMARINE;
		permutation.effectSet.mapIcon = EffectSet.ICON.DIAMOND;
	} else if (permutation.conditionSet.isTripleLink) {
		permutation.effectSet.outlineColour = EffectSet.RGB.CYAN;
		permutation.effectSet.mapIcon = EffectSet.ICON.CROSS;
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

console.log("☁");
