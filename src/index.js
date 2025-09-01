import { Block } from "./classes/block.js";
import { ConditionSet } from "./classes/conditionSet.js";
import { EffectSet } from "./classes/effectSet.js";
import { Saver } from "./saver.js";



let c, e;
let spans = [];

// By default, show everything on the minimap
c = new ConditionSet().continue();

e = new EffectSet().map();

spans.push(...new Block(c, e).export());

// Make weapons we don't use smaller, if they are common
c = new ConditionSet();
c.category = ConditionSet.CATEGORY.WEAPON_UNUSED;
c.rarity = ConditionSet.RARITY.NORMAL;

e = new EffectSet().fade();

spans.push(...new Block(c, e).export());

// Save
Saver.save(spans, "./build/Cloud.filter");
console.log("☁");
