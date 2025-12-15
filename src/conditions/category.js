import { StringList } from "./stringList.js";

// https://poe2db.tw/us/Items

//// With rarity
// Class weapons
const SPEAR = new StringList("Spears");
const MAIN_CLASS = new StringList(SPEAR);
const BUCKLER = new StringList("Bucklers");
const OFF_CLASS = new StringList(BUCKLER);
const WEAPON_CLASS =  new StringList(MAIN_CLASS, OFF_CLASS);

// Other weapons
const SCEPTRE = new StringList("Sceptres");
const WAND = new StringList("Wands");
const MAIN_OTHER_CASTER_ONE = new StringList(SCEPTRE, WAND);
const STAFF = new StringList("Staves");
const MAIN_OTHER_CASTER_TWO = new StringList(STAFF);
const MAIN_OTHER_CASTER = new StringList(MAIN_OTHER_CASTER_ONE, MAIN_OTHER_CASTER_TWO);
const ONE_HANDED_MACE = new StringList("One Hand Maces");
const MAIN_OTHER_ATTACKER_ONE = new StringList(ONE_HANDED_MACE);
const BOW = new StringList("Bows");
const CROSSBOW = new StringList("Crossbows");
const QUARTERSTAFF = new StringList("Quarterstaves");
const TALISMAN = new StringList("Talismans");
const TWO_HANDED_MACE = new StringList("Two Hand Maces");
const MAIN_OTHER_ATTACKER_TWO = new StringList(BOW, CROSSBOW, QUARTERSTAFF, TALISMAN, TWO_HANDED_MACE);
const MAIN_OTHER_ATTACKER = new StringList(MAIN_OTHER_ATTACKER_ONE, MAIN_OTHER_ATTACKER_TWO);
const MAIN_OTHER = new StringList(MAIN_OTHER_CASTER, MAIN_OTHER_ATTACKER);
const SHIELD_AM = new StringList("Shields_TOWER_SHIELD");
const SHIELD_AM_EV = new StringList("Shields_TARGE");
const SHIELD_AM_ES = new StringList("Shields_CREST_SHIELD");
const SHIELD = new StringList("Shields");
const OFF_OTHER_BLOCK = new StringList(SHIELD);
const FOCUS = new StringList("Foci");
const QUIVER = new StringList("Quivers");
const OFF_OTHER = new StringList(OFF_OTHER_BLOCK, FOCUS, QUIVER);
const WEAPON_OTHER = new StringList(MAIN_OTHER, OFF_OTHER);
const MAIN = new StringList(MAIN_CLASS, MAIN_OTHER);
const OFF = new StringList(OFF_CLASS, OFF_OTHER);
const WEAPON = new StringList(WEAPON_CLASS, WEAPON_OTHER);

const HELMET_AM = new StringList("Helmets_GREATHELM");
const HELMET_EV = new StringList("Helmets_HOOD_CAP");
const HELMET_ES = new StringList("Helmets_CIRCLET_TIARA");
const HELMET_AM_EV = new StringList("Helmets_HELM");
const HELMET_AM_ES = new StringList("Helmets_CROWN");
const HELMET_EV_ES = new StringList("Helmets_MASK");
const HELMET_ALL = new StringList(HELMET_AM, HELMET_EV, HELMET_ES, HELMET_AM_EV, HELMET_AM_ES, HELMET_EV_ES);
const HELMET = new StringList("Helmets");
const BODY_AM = new StringList("Body Armours_CUIRASS_PLATE");
const BODY_EV = new StringList("Body Armours_VEST_COAT");
const BODY_ES = new StringList("Body Armours_ROBE_RAIMENT");
const BODY_AM_EV = new StringList("Body Armours_MAIL_ARMOUR");
const BODY_AM_ES = new StringList("Body Armours_VESTMENTS_MANTLE");
const BODY_EV_ES = new StringList("Body Armours_GARB_JACKET");
const BODY_ALL = new StringList(BODY_AM, BODY_EV, BODY_ES, BODY_AM_EV, BODY_AM_ES, BODY_EV_ES);
const BODY = new StringList("Body Armours");
const GLOVES_AM = new StringList("Gloves_MITTS");
const GLOVES_EV = new StringList("Gloves_BRACERS");
const GLOVES_ES = new StringList("Gloves_GLOVES");
const GLOVES_AM_EV = new StringList("Gloves_GAUNTLETS");
const GLOVES_AM_ES = new StringList("Gloves_CUFFS");
const GLOVES_EV_ES = new StringList("Gloves_WRAPS");
const GLOVES_ALL = new StringList(GLOVES_AM, GLOVES_EV, GLOVES_ES, GLOVES_AM_EV, GLOVES_AM_ES, GLOVES_EV_ES);
const GLOVES = new StringList("Gloves");
const BOOTS_AM = new StringList("Boots_GREAVES");
const BOOTS_EV = new StringList("Boots_BOOTS");
const BOOTS_ES = new StringList("Boots_SANDALS_SLIPPERS");
const BOOTS_AM_EV = new StringList("Boots_SABATONS");
const BOOTS_AM_ES = new StringList("Boots_LEGGINGS");
const BOOTS_EV_ES = new StringList("Boots_SHOES");
const BOOTS_ALL = new StringList(BOOTS_AM, BOOTS_EV, BOOTS_ES, BOOTS_AM_EV, BOOTS_AM_ES, BOOTS_EV_ES);
const BOOTS = new StringList("Boots");
const ARMOUR_AM = new StringList(HELMET_AM, BODY_AM, GLOVES_AM, BOOTS_AM);
const ARMOUR_EV = new StringList(HELMET_EV, BODY_EV, GLOVES_EV, BOOTS_EV);
const ARMOUR_ES = new StringList(HELMET_ES, BODY_ES, GLOVES_ES, BOOTS_ES);
const ARMOUR_AM_EV = new StringList(HELMET_AM_EV, BODY_AM_EV, GLOVES_AM_EV, BOOTS_AM_EV);
const ARMOUR_AM_ES = new StringList(HELMET_AM_ES, BODY_AM_ES, GLOVES_AM_ES, BOOTS_AM_ES);
const ARMOUR_EV_ES = new StringList(HELMET_EV_ES, BODY_EV_ES, GLOVES_EV_ES, BOOTS_EV_ES);
const ARMOUR_ALL = new StringList(HELMET_ALL, BODY_ALL, GLOVES_ALL, BOOTS_ALL);
const ARMOUR = new StringList(HELMET, BODY, GLOVES, BOOTS);
const SOCKET_ONE = new StringList(WEAPON_CLASS, MAIN_OTHER_CASTER_ONE, MAIN_OTHER_ATTACKER_ONE, FOCUS, OFF_OTHER_BLOCK, HELMET, GLOVES, BOOTS);
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
const AUGMENT = new StringList("Augment");
const QUEST = new StringList("Quest Items", "Instance Local Items");

const SEKHEMA = new StringList("Trial Coins");
const CHAOS = new StringList("Inscribed Ultimatum");
const MAP = new StringList("Map Fragments");
const VAULT = new StringList("Vault Keys");
const LOGBOOK = new StringList("Expedition Logbooks");
const PINNACLE = new StringList("Pinnacle Keys");
////

export const CATEGORY = {
	SPEAR,
	MAIN_CLASS,
	BUCKLER,
	OFF_CLASS,
	WEAPON_CLASS,

	SCEPTRE,
	WAND,
	MAIN_OTHER_CASTER_ONE,
	STAFF,
	MAIN_OTHER_CASTER_TWO,
	MAIN_OTHER_CASTER,
	ONE_HANDED_MACE,
	MAIN_OTHER_ATTACKER_ONE,
	BOW,
	CROSSBOW,
	QUARTERSTAFF,
	TALISMAN,
	TWO_HANDED_MACE,
	MAIN_OTHER_ATTACKER_TWO,
	MAIN_OTHER_ATTACKER,
	MAIN_OTHER,
	SHIELD_AM,
	SHIELD_AM_EV,
	SHIELD_AM_ES,
	SHIELD,
	OFF_OTHER_BLOCK,
	FOCUS,
	QUIVER,
	OFF_OTHER,
	WEAPON_OTHER,
	MAIN,
	OFF,
	WEAPON,

	HELMET_AM,
	HELMET_EV,
	HELMET_ES,
	HELMET_AM_EV,
	HELMET_AM_ES,
	HELMET_EV_ES,
	HELMET_ALL,
	HELMET,
	BODY_AM,
	BODY_EV,
	BODY_ES,
	BODY_AM_EV,
	BODY_AM_ES,
	BODY_EV_ES,
	BODY_ALL,
	BODY,
	GLOVES_AM,
	GLOVES_EV,
	GLOVES_ES,
	GLOVES_AM_EV,
	GLOVES_AM_ES,
	GLOVES_EV_ES,
	GLOVES_ALL,
	GLOVES,
	BOOTS_AM,
	BOOTS_EV,
	BOOTS_ES,
	BOOTS_AM_EV,
	BOOTS_AM_ES,
	BOOTS_EV_ES,
	BOOTS_ALL,
	BOOTS,
	ARMOUR_AM,
	ARMOUR_EV,
	ARMOUR_ES,
	ARMOUR_AM_EV,
	ARMOUR_AM_ES,
	ARMOUR_EV_ES,
	ARMOUR_ALL,
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
	QUEST,

	SEKHEMA,
	CHAOS,
	MAP,
	VAULT,
	LOGBOOK,
	PINNACLE,
};
