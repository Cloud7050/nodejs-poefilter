export class Name {
	name;
	value;
	category;
	dropLevel;

	isBad = false;
	isClass = false;
	isMapDrop = false;

	constructor(name, value, category = null, dropLevel = null) {
		this.name = name;
		this.value = value;
		this.category = category;
		this.dropLevel = dropLevel;
	}

	bad() {
		this.isBad = true;
		return this;
	}
	class() {
		this.isClass = true;
		return this;
	}
	mapDrop() {
		this.isMapDrop = true;
		return this;
	}

	// compare(other) {
	// 	if (this.value === null && other.value === null) return 0;
	// 	if (this.value === null) return -1;
	// 	if (other.value === null) return 1;
	// 	return this.value - other.value;
	// }
}
