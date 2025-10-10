import { StringList } from "./stringList.js";

// https://poe2db.tw/us/Items

//// With rarity
// Witch weapons
const MAIN_CLASS = new StringList("Sceptres");
const OFF_CLASS = new StringList("Foci");
const WEAPON_CLASS =  new StringList(MAIN_CLASS, OFF_CLASS);

// Other weapons
const MAIN_OTHER = new StringList("Bows", "Claws", "Crossbows", "Daggers", "Flails",
	"One Hand Axes", "One Hand Maces", "One Hand Swords", "Quarterstaves", "Spears", "Staves",
	"Two Hand Axes", "Two Hand Maces", "Two Hand Swords", "Wands");
const OFF_OTHER = new StringList("Bucklers", "Quivers", "Shields");
const WEAPON_OTHER = new StringList(MAIN_OTHER, OFF_OTHER);
const MAIN = new StringList(MAIN_CLASS, MAIN_OTHER);
const OFF = new StringList(OFF_CLASS, OFF_OTHER);
const WEAPON = new StringList(WEAPON_CLASS, WEAPON_OTHER);

const ARMOUR_TOP = new StringList("Body Armours", "Gloves", "Helmets");
const BOOTS = new StringList("Boots");
const ARMOUR = new StringList(ARMOUR_TOP, BOOTS);
const GEAR_COMMON = new StringList(WEAPON, ARMOUR);
const JEWELLERY = new StringList("Amulets", "Rings");
const BELT = new StringList("Belts");
const FLASK = new StringList("Life Flasks", "Mana Flasks");
const CHARM = new StringList("Charms");
const CHARGED = new StringList(FLASK, CHARM);
const GEAR_UNCOMMON = new StringList(JEWELLERY, BELT, CHARGED);
const GEAR = new StringList(GEAR_COMMON, GEAR_UNCOMMON);

const JEWEL = new StringList("Jewels");
const WAYSTONE = new StringList("Waystones");
const TABLET = new StringList("Tablet");
const RELIC = new StringList("Relics");
////

//// No rarity
const CURRENCY = new StringList("Stackable Currency");
const OMEN = new StringList("Omen");
const GEM_UNCUT = new StringList("Uncut Skill Gems", "Uncut Spirit Gems");
const SUPPORT_UNCUT = new StringList("Uncut Support Gems");
const GEM = new StringList("Skill Gems", "Support Gems");
const SOCKETABLE = new StringList("Socketable");
const TICKET = new StringList("Trial Coins", "Inscribed Ultimatum", "Expedition Logbooks");
const VAULT = new StringList("Vault Keys");
const FRAGMENT = new StringList("Map Fragments");
const QUEST = new StringList("Quest Items", "Instance Local Items");
////

export const CATEGORY = {
	MAIN_CLASS,
	OFF_CLASS,
	WEAPON_CLASS,

	MAIN_OTHER,
	OFF_OTHER,
	WEAPON_OTHER,
	MAIN,
	OFF,
	WEAPON,

	ARMOUR_TOP,
	BOOTS,
	ARMOUR,
	GEAR_COMMON,
	JEWELLERY,
	BELT,
	FLASK,
	CHARM,
	CHARGED,
	GEAR_UNCOMMON,
	GEAR,

	JEWEL,
	WAYSTONE,
	TABLET,
	RELIC,

	CURRENCY,
	OMEN,
	GEM_UNCUT,
	SUPPORT_UNCUT,
	GEM,
	SOCKETABLE,
	TICKET,
	VAULT,
	FRAGMENT,
	QUEST,
};
