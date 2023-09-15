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
import { Effecter } from "./classes/effectSet.js";
import { PermutationMaker } from "./classes/permutation.js";



/* [Main] */
let permutations = new PermutationMaker()
	.generate();

new Effecter(permutations)
	.decide();

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
