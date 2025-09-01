import { Block } from "./classes/block.js";
import { Comparison } from "./classes/comparison.js";
import { ConditionSet } from "./classes/conditionSet.js";
import { EffectSet } from "./classes/effectSet.js";
import { Saver } from "./saver.js";



let c, e;
let spans = [];

// Default: Show everything on the minimap
c = new ConditionSet().continue();

e = new EffectSet().mapDefault();

spans.push(...new Block(c, e).export());

// Currencies - gold
c = new ConditionSet();
c.names = "Gold";
c.category = ConditionSet.CATEGORY.CURRENCY;

e = new EffectSet().mapGold();

spans.push(...new Block(c, e).export());

// Currencies - other
c = new ConditionSet();
c.category = ConditionSet.CATEGORY.CURRENCY;

e = new EffectSet().mapCurrency();

spans.push(...new Block(c, e).export());

// Ignoreable: Any normal weapons/armour, with no quality/sockets
c = new ConditionSet();
c.category = `${ConditionSet.CATEGORY.WEAPON_USED} ${ConditionSet.CATEGORY.WEAPON_UNUSED} ${ConditionSet.CATEGORY.ARMOUR}`;
c.rarity = new Comparison(Comparison.OPERATOR.EQUAL, ConditionSet.RARITY.NORMAL);
c.noQualitySocketless();

e = new EffectSet().fade();

spans.push(...new Block(c, e).export());

// Ignoreable: Magic weapons we don't use, with no quality/sockets
c = new ConditionSet();
c.category = ConditionSet.CATEGORY.WEAPON_UNUSED;
c.rarity = new Comparison(Comparison.OPERATOR.EQUAL, ConditionSet.RARITY.MAGIC);
c.noQualitySocketless();

e = new EffectSet().fade();

spans.push(...new Block(c, e).export());

// Ignoreable: Magic armour we don't use (no energy shield), with no quality/sockets
c = new ConditionSet();
c.category = ConditionSet.CATEGORY.ARMOUR;
c.rarity = new Comparison(Comparison.OPERATOR.EQUAL, ConditionSet.RARITY.MAGIC);
c.noQualitySocketless();
c.energyShield = new Comparison(Comparison.OPERATOR.EQUAL, 0);

e = new EffectSet().fade();

spans.push(...new Block(c, e).export());

// Ignoreable: Bad normal/magic flasks, with no quality
c = new ConditionSet();
c.names = '"Lesser Life Flask" "Medium Life Flask" "Lesser Mana Flask" "Medium Mana Flask"';
c.category = ConditionSet.CATEGORY.FLASKS;
c.rarity = new Comparison(Comparison.OPERATOR.LTE, ConditionSet.RARITY.MAGIC);
c.noQuality();

e = new EffectSet().fade();

spans.push(...new Block(c, e).export());

// Save
Saver.save(spans, "./build/Cloud.filter");
console.log("☁");
