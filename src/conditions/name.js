import { LEVEL_DROP_ANY, LEVEL_DROP_ATTACKER, LEVEL_DROP_BODY, LEVEL_DROP_FLASK, LEVEL_DROP_OFF_ARMOUR } from "../constants.js";
import { CATEGORY } from "./category.js";
import { StringList } from "./stringList.js";

export class Name {
	static FLAG_BAD = "Currency to hide";
	static FLAG_NO_MAP = "Currency to not mark on minimap";
	static FLAG_SPECIAL = "Drops from specific content, like The Fractured Lake unique map or Vessel of Kulemak boss";
	static FLAG_CLASS = "Explicitly mark as class item";

	name;
	value;
	category;
	dropLevel;

	flags = new Set();

	constructor(name, value, category = null, dropLevel = null) {
		this.name = name;
		this.value = value;
		this.category = category;
		this.dropLevel = dropLevel;
	}

	flag(flag) {
		this.flags.add(flag);
		return this;
	}
	isFlag(flag) {
		return this.flags.has(flag);
	}
	bad() {
		this.flag(Name.FLAG_BAD);
		return this;
	}
	noMap() {
		this.flag(Name.FLAG_NO_MAP);
		return this;
	}
	special() {
		this.flag(Name.FLAG_SPECIAL);
		return this;
	}
	class() {
		this.flag(Name.FLAG_CLASS);
		return this;
	}

	isEndgame() {
		if (this.category.containsLoose(
			new StringList(CATEGORY.MAIN_CASTER, CATEGORY.QUIVER, CATEGORY.GEAR_UNCOMMON.subtract(CATEGORY.FLASK))
		)) {
			return this.dropLevel >= LEVEL_DROP_ANY;
		} else if (this.category.containsLoose(
			new StringList(CATEGORY.MAIN_ATTACKER)
		)) {
			return this.dropLevel >= LEVEL_DROP_ATTACKER;
		} else if (this.category.containsLoose(
			new StringList(CATEGORY.OFF, CATEGORY.ARMOUR).subtract(new StringList(CATEGORY.QUIVER, CATEGORY.BODY))
		)) {
			return this.dropLevel >= LEVEL_DROP_OFF_ARMOUR;
		} else if (this.category.containsLoose(
			new StringList(CATEGORY.BODY)
		)) {
			return this.dropLevel >= LEVEL_DROP_BODY;
		} else if (this.category.containsLoose(
			new StringList(CATEGORY.FLASK)
		)) {
			return this.dropLevel >= LEVEL_DROP_FLASK;
		}

		// Nothing else gets whitelisted automatically
		return false;
	}

	compare(other) {
		// Sort by drop level, then alphabetically
		if (this.dropLevel === null && other.dropLevel === null) return this.name.localeCompare(other.name);

		if (this.dropLevel === null) return -1;
		if (other.dropLevel === null) return 1;
		return this.dropLevel - other.dropLevel;
	}
}
