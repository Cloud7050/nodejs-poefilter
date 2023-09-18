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
import { Effecter } from "./classes/effectSet.js";
import { PermutationMaker } from "./classes/permutation.js";
import { Logger } from "./logger.js";



/* [Main] */
let permutationManager = new PermutationMaker()
	.generate();

new Effecter(permutationManager)
	.decide();

permutationManager.optimise();
permutationManager.sort();
permutationManager.save();

Logger.save();
console.log("☁");
