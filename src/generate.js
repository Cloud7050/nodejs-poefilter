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
import { PermutationMaker } from "./permutation/permutationMaker.js";
import { Logger } from "./logger.js";
import { Saver } from "./saver.js";
import { EffecterEquipment } from "./effect/effecterEquipment.js";
import { EffecterOther } from "./effect/effecterOther.js";



/* [Main] */
let managerOther = new PermutationMaker()
	.generateOther();
new EffecterOther(managerOther)
	.decide();
let lines = managerOther.finalise();

let managerEquipment = new PermutationMaker()
	.generateEquipment();
new EffecterEquipment(managerEquipment)
	.decide();
lines.push(
	...managerEquipment.finalise()
);

Saver.save(lines, "./build/Cloud.filter");
Logger.save();
console.log("☁");
