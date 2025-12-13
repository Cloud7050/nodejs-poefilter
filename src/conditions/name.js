export class Name {
	name;
	value;
	category;
	dropLevel;

	isBad;
	isClass;
	isMapDrop;

	constructor(name, value, category = null, dropLevel = null) {
		this.name = name;
		this.value = value;
		this.category = category;
		this.dropLevel = dropLevel;
	}

	isBad() {
		this.isBad = true;
	}
	isClass() {
		this.isClass = true;
	}
	isMapDrop() {
		this.isMapDrop = true;
	}

	// compare(other) {
	// 	if (this.value === null && other.value === null) return 0;
	// 	if (this.value === null) return -1;
	// 	if (other.value === null) return 1;
	// 	return this.value - other.value;
	// }
}
