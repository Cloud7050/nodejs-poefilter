import { Name } from "./name.js";
import { StringList } from "./stringList.js";

export class NameManager {
	names;

	constructor (...names) {
		this.names = names.map(
			(name) => name instanceof Name ? name : new Name(name)
		);
	}

	static getFlasksBad() {
		return new NameManager(
			"Lesser Life Flask", "Lesser Mana Flask",
			"Medium Life Flask", "Medium Mana Flask",
			"Greater Life Flask", "Greater Mana Flask",
			"Grand Life Flask", "Grand Mana Flask",
			"Giant Life Flask", "Giant Mana Flask",
			"Colossal Life Flask", "Colossal Mana Flask",
			"Gargantuan Life Flask", "Gargantuan Mana Flask",
			"Transcendent Life Flask", "Transcendent Mana Flask",
		).export();
	}

	export() {
		this.names.sort((a, b) => a.compare(b));
		return new StringList(
			...this.names.map(name => name.name)
		);
	}
}
