import { Block } from "./classes/block.js";
import { ConditionSet } from "./classes/conditionSet.js";
import { EffectSet } from "./classes/effectSet.js";
import { Saver } from "./saver.js";



// Make weapons we don't use smaller, if they are common
let c = new ConditionSet();
c.itemClass = ConditionSet.ITEM_CLASS.WEAPON_UNUSED;
c.rarity = ConditionSet.RARITY.NORMAL;

let e = new EffectSet().fade();

let block = new Block(c, e);
let lines = block.export();

// Save
Saver.save(lines, "./build/Cloud.filter");
console.log("☁");
