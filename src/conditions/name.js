import { LEVEL_DROP_ATTACKER, LEVEL_DROP_BODY, LEVEL_DROP_CASTER_QUIVER } from "../constants.js";
import { CATEGORY } from "./category.js";
import { StringList } from "./stringList.js";

export class Name {
	static FLAG_BAD = "Currency to hide";
	static FLAG_MAP = "The Fractured Lake unique map drop";
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
	mapDrop() {
		this.flag(Name.FLAG_MAP);
		return this;
	}
	class() {
		this.flag(Name.FLAG_CLASS);
		return this;
	}

	isEndgame() {
		if (this.category.containsLoose(
			new StringList(CATEGORY.MAIN_CASTER, CATEGORY.QUIVER)
		)) {
			return this.dropLevel >= LEVEL_DROP_CASTER_QUIVER;
		} else if (this.category.containsLoose(
			new StringList(CATEGORY.MAIN_ATTACKER)
		)) {
			return this.dropLevel >= LEVEL_DROP_ATTACKER;
		} else if (this.category.containsLoose(
			new StringList(CATEGORY.BODY)
		)) {
			return this.dropLevel >= LEVEL_DROP_BODY;
		}

		// Nothing else gets whitelisted automatically
		return false;
	}

	// compare(other) {
	// 	if (this.value === null && other.value === null) return 0;
	// 	if (this.value === null) return -1;
	// 	if (other.value === null) return 1;
	// 	return this.value - other.value;
	// }
}
