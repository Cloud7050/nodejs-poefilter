import { Block } from "./classes/block.js";
import { ConditionSet } from "./classes/conditionSet.js";
import { EffectSet } from "./classes/effectSet.js";
import { Saver } from "./saver.js";



let c, e;
let spans = [];

// Default: Show everything on the minimap
c = new ConditionSet().continue();

e = new EffectSet().map();

spans.push(...new Block(c, e).export());

// Ignoreable: Common weapons we don't use
c = new ConditionSet();
c.category = ConditionSet.CATEGORY.WEAPON_UNUSED;
c.rarity = ConditionSet.RARITY.NORMAL;

e = new EffectSet().fade();

spans.push(...new Block(c, e).export());

// Ignoreable: Bad common flasks
c = new ConditionSet();
c.names = '"Lesser Life Flask" "Medium Life Flask" "Lesser Mana Flask" "Medium Mana Flask"';
c.category = ConditionSet.CATEGORY.FLASKS;
c.rarity = ConditionSet.RARITY.NORMAL;

e = new EffectSet().fade();

spans.push(...new Block(c, e).export());

// Save
Saver.save(spans, "./build/Cloud.filter");
console.log("☁");
