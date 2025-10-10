import { CATEGORY } from "../conditions/category.js";
import { Comparison, OPERATOR } from "../conditions/comparison.js";
import { RARITY } from "../conditions/conditionSet.js";

export function sectionHides(filter) {
	filter.multiBlock((c) => { // Normal/magic class mainhands but are wrong skill
		// https://poe2db.tw/us/Sceptres#SceptresItem
		c.names = new Comparison([
			"Stoic Sceptre", // Discipline
			"Omen Sceptre", // Malice
			"Shrine Sceptre", // Purity of Fire/Ice/Lightning
			"Wrath Sceptre", // Fulmination
		]);
		c.category = new Comparison(CATEGORY.MAIN_CLASS);
		c.rarity = new Comparison(RARITY.MAGIC, OPERATOR.LTE);
	}, (c) => { // Normal/magic class offhands but are low bases
		// https://poe2db.tw/us/Foci#FociItem
		c.names = new Comparison([
			"Twig Focus", // 12 ES
			"Woven Focus", // 15 ES, L6
			"Antler Focus", // 17 ES, L10
			"Engraved Focus", // 21 ES, L16
			"Tonal Focus", // 25 ES, L22
			"Crystal Focus", // 28 ES, L26
			"Voodoo Focus", // 32 ES, L33
			"Plumed Focus", // 34 ES, L36
			"Runed Focus", // 40 ES, L45
			"Whorl Focus", // 43 ES, L51
			"Arrayed Focus", // 45 ES, L54
			"Cultist Focus", // 49 ES, L59
			"Hallowed Focus", // 50 ES, L61
			"Druidic Focus", // 52 ES, L65
			"Leyline Focus", // 58 ES, L70
			// "Sacred Focus", // 63 ES, L75
			// "Tasalian Focus", // 68 ES, L80
		]);
		c.category = new Comparison(CATEGORY.OFF_CLASS);
		c.rarity = new Comparison(RARITY.MAGIC, OPERATOR.LTE);
	}, (c) => { // Normal/magic other weapons
		c.category = new Comparison(CATEGORY.WEAPON_OTHER);
		c.rarity = new Comparison(RARITY.MAGIC, OPERATOR.LTE);
	}, (c) => { // Rare other weapons that are low unidentified tier
		c.category = new Comparison(CATEGORY.WEAPON_OTHER);
		c.rarity = new Comparison(RARITY.RARE);
		c.wisdomTier = new Comparison(3, OPERATOR.LTE);
	}, (c) => { // Normal/magic class armour tops but are low bases
		c.names = new Comparison([
			// https://poe2db.tw/us/Helmets
			"Twig Circlet", // 19 ES
			"Wicker Tiara", // 28 ES, L10
			"Beaded Circlet", // 34 ES, L16
			"Chain Tiara", // 44 ES, L26
			"Feathered Tiara", // 51 ES, L33
			"Gold Circlet", // 58 ES, L40
			"Vermeil Circlet", // 63 ES, L45
			"Jade Tiara", // 69 ES, L50
			"Sandsworn Tiara", // 73 ES, L54
			"Jungle Tiara", // 78 ES, L59
			"Skycrown Tiara", // 84 ES, L65
			"Sorcerous Tiara", // 92 ES, L70
			// "Kamasan Tiara", // 101 ES, L75
			// "Ancestral Tiara", // 109 ES, L80

			// https://poe2db.tw/us/Body_Armours#BodyArmoursItem
			"Tattered Robe", // 28 ES
			"Feathered Robe", // 35 ES, L5
			"Hexer's Robe", // 44 ES, L11
			"Bone Raiment", // 52 ES, L16
			"Silk Robe", // 61 ES, L22
			"Keth Raiment", // 70 ES, L28
			"Votive Raiment", // 78 ES, L33
			"Altar Robe", // 89 ES, L40
			"Elementalist Robe", // 97 ES, L45
			"Mystic Raiment", // 103 ES, L49
			"River Raiment", // 111 ES, L54
			"Adherent's Raiment", // 119 ES,  L59
			"Ceremonial Robe", /// 123 ES, L62
			// "Vile Robe", /// 184 ES, L65
			// "Flowing Raiment", /// 153 ES, L70, 40–50% increased Mana Regeneration Rate
			// "Sacramental Robe", /// 153 ES, L75, 40–50% faster start of Energy Shield Recharge
			// "Feathered Raiment", /// 153 ES, L80, 5–10% of Damage is taken from Mana before Life

			// https://poe2db.tw/us/Gloves
			"Torn Gloves", // 9 ES
			"Sombre Gloves", // 15 ES, L12
			"Stitched Gloves", // 17 ES, L16
			"Jewelled Gloves", // 22 ES, L26
			"Intricate Gloves", // 26 ES, L33
			"Pauascale Gloves", // 32 ES, L45
			"Embroidered Gloves", // 35 ES, L52
			"Baroque Gloves", // 36 ES, L54
			"Gold Gloves", // 39 ES, L59
			"Grim Gloves", // 42 ES, L65
			"Opulent Gloves", // 46 ES, L70
			// "Vaal Gloves", // 50 ES, L75
			// "Sirenscale Gloves", // 54 ES, L80
		]);
		c.category = new Comparison(CATEGORY.ARMOUR_TOP);
		c.rarity = new Comparison(RARITY.MAGIC, OPERATOR.LTE);
		c.onlyEnergyShield();
	}, (c) => { // Normal/magic other armour
		c.category = new Comparison(CATEGORY.ARMOUR_TOP);
		c.rarity = new Comparison(RARITY.MAGIC, OPERATOR.LTE);
		c.hasArmour();
	}, (c) => {
		c.category = new Comparison(CATEGORY.ARMOUR_TOP);
		c.rarity = new Comparison(RARITY.MAGIC, OPERATOR.LTE);
		c.hasEvasion();
	}, (c) => {
		// Class doesn't use most boots, it uses unique
		c.category = new Comparison(CATEGORY.BOOTS);
		c.rarity = new Comparison(RARITY.MAGIC, OPERATOR.LTE);
	}, (c) => { // Rare other armour that is low unidentified tier
		c.category = new Comparison(CATEGORY.ARMOUR_TOP);
		c.rarity = new Comparison(RARITY.RARE);
		c.wisdomTier = new Comparison(3, OPERATOR.LTE);
		c.hasArmour();
	}, (c) => {
		c.category = new Comparison(CATEGORY.ARMOUR_TOP);
		c.rarity = new Comparison(RARITY.RARE);
		c.wisdomTier = new Comparison(3, OPERATOR.LTE);
		c.hasEvasion();
	}, (c) => {
		c.category = new Comparison(CATEGORY.BOOTS);
		c.rarity = new Comparison(RARITY.RARE);
		c.wisdomTier = new Comparison(3, OPERATOR.LTE);
	}, (c) => { // Normal/magic other jewellery
		c.names = new Comparison([
			"Crimson Amulet", // 2-4 life regen
			// "Amber Amulet", // Strength
			// "Jade Amulet", // Dexterity

			"Iron Ring", // +1-4 phys damage to attacks
			"Emerald Ring", // Flat accuracy
			"Unset Ring", // Skill slot
		]);
		c.category = new Comparison(CATEGORY.JEWELLERY);
		c.rarity = new Comparison(RARITY.MAGIC, OPERATOR.LTE);
	}, (c) => { // Magic belts
		// Class doesn't use most belts, it uses unique
		c.category = new Comparison(CATEGORY.BELT);
		c.rarity = new Comparison(RARITY.MAGIC);
	}, (c) => { // Rare belts that are low unidentified tier
		c.category = new Comparison(CATEGORY.BELT);
		c.rarity = new Comparison(RARITY.RARE);
		c.wisdomTier = new Comparison(3, OPERATOR.LTE);
	}, (c) => { // Bad normal/magic flasks
		c.names = new Comparison(["Lesser Life Flask", "Lesser Mana Flask", "Medium Life Flask",
			"Medium Mana Flask", "Greater Life Flask", "Greater Mana Flask", "Grand Life Flask",
			"Grand Mana Flask", "Giant Life Flask", "Giant Mana Flask", "Colossal Life Flask",
			"Colossal Mana Flask", "Gargantuan Life Flask", "Gargantuan Mana Flask",
			"Transcendent Life Flask", "Transcendent Mana Flask"]);
		c.category = new Comparison(CATEGORY.FLASK);
		c.rarity = new Comparison(RARITY.MAGIC, OPERATOR.LTE);
	}, (e) => {
		e.hide();
	});
}
