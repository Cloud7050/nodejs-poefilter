import { StringList } from "./stringList.js";

// https://poe2db.tw/us/Items

//// With rarity
// Witch weapons
const MAIN_CLASS = new StringList("Sceptres");
const OFF_CLASS = new StringList("Foci");
const WEAPON_CLASS =  new StringList(MAIN_CLASS, OFF_CLASS);

// Other weapons
const MAIN_OTHER_CASTER_ONE = new StringList("Wands");
const MAIN_OTHER_CASTER_TWO = new StringList("Staves");
const MAIN_OTHER_CASTER = new StringList(MAIN_OTHER_CASTER_ONE, MAIN_OTHER_CASTER_TWO);
const MAIN_OTHER_ATTACKER_ONE = new StringList("One Hand Maces", "Spears");
const MAIN_OTHER_ATTACKER_TWO = new StringList("Bows", "Crossbows", "Quarterstaves",
	"Two Hand Maces");
const MAIN_OTHER_ATTACKER = new StringList(MAIN_OTHER_ATTACKER_ONE, MAIN_OTHER_ATTACKER_TWO);
const MAIN_OTHER = new StringList(MAIN_OTHER_CASTER, MAIN_OTHER_ATTACKER);
const OFF_OTHER_BLOCK = new StringList("Bucklers", "Shields");
const OFF_OTHER_QUIVER = new StringList("Quivers");
const OFF_OTHER = new StringList(OFF_OTHER_BLOCK, OFF_OTHER_QUIVER);
const WEAPON_OTHER = new StringList(MAIN_OTHER, OFF_OTHER);
const MAIN = new StringList(MAIN_CLASS, MAIN_OTHER);
const OFF = new StringList(OFF_CLASS, OFF_OTHER);
const WEAPON = new StringList(WEAPON_CLASS, WEAPON_OTHER);

const HELMET = new StringList("Helmets");
const BODY = new StringList("Body Armours");
const GLOVE = new StringList("Gloves");
const ARMOUR_TOP = new StringList(HELMET, BODY, GLOVE);
const BOOTS = new StringList("Boots");
const ARMOUR = new StringList(ARMOUR_TOP, BOOTS);
const SOCKET_ONE = new StringList(WEAPON_CLASS, MAIN_OTHER_CASTER_ONE, MAIN_OTHER_ATTACKER_ONE, OFF_OTHER_BLOCK, HELMET, GLOVE, BOOTS);
const SOCKET_TWO = new StringList(MAIN_OTHER_CASTER_TWO, MAIN_OTHER_ATTACKER_TWO, BODY);
const GEAR_COMMON = new StringList(WEAPON, ARMOUR);
const AMULET = new StringList("Amulets");
const RING = new StringList("Rings");
const JEWELLERY = new StringList(AMULET, RING);
const BELT = new StringList("Belts");
const FLASK_LIFE = new StringList("Life Flasks");
const FLASK_MANA = new StringList("Mana Flasks");
const FLASK = new StringList(FLASK_LIFE, FLASK_MANA);
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
const UNCUT_MAIN = new StringList("Uncut Skill Gems", "Uncut Spirit Gems");
const UNCUT_SUPPORT = new StringList("Uncut Support Gems");
const UNCUT = new StringList(UNCUT_MAIN, UNCUT_SUPPORT);
const GEM = new StringList("Skill Gems", "Support Gems");
const AUGMENT = new StringList("Socketable");
const SEKHEMA = new StringList("Trial Coins");
const CHAOS = new StringList("Inscribed Ultimatum");
const LOGBOOK = new StringList("Expedition Logbooks");
const VAULT = new StringList("Vault Keys");
const FRAGMENT = new StringList("Map Fragments", "Pinnacle Keys");
const QUEST = new StringList("Quest Items", "Instance Local Items");
////

export const CATEGORY = {
	MAIN_CLASS,
	OFF_CLASS,
	WEAPON_CLASS,

	MAIN_OTHER_CASTER_ONE,
	MAIN_OTHER_CASTER_TWO,
	MAIN_OTHER_CASTER,
	MAIN_OTHER_ATTACKER_ONE,
	MAIN_OTHER_ATTACKER_TWO,
	MAIN_OTHER_ATTACKER,
	MAIN_OTHER,
	OFF_OTHER_BLOCK,
	OFF_OTHER_QUIVER,
	OFF_OTHER,
	WEAPON_OTHER,
	MAIN,
	OFF,
	WEAPON,

	HELMET,
	BODY,
	GLOVE,
	ARMOUR_TOP,
	BOOTS,
	ARMOUR,
	SOCKET_ONE,
	SOCKET_TWO,
	GEAR_COMMON,
	AMULET,
	RING,
	JEWELLERY,
	BELT,
	FLASK_LIFE,
	FLASK_MANA,
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
	UNCUT_MAIN,
	UNCUT_SUPPORT,
	UNCUT,
	GEM,
	AUGMENT,
	SEKHEMA,
	CHAOS,
	LOGBOOK,
	VAULT,
	FRAGMENT,
	QUEST,
};
