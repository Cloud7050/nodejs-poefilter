export class Name {
	name;
	value;
	category;
	dropLevel;

	constructor(name, value = null, category = null, dropLevel = null) {
		this.name = name;
		this.value = value;
		this.category = category;
		this.dropLevel = dropLevel;
	}

	// compare(other) {
	// 	if (this.value === null && other.value === null) return 0;
	// 	if (this.value === null) return -1;
	// 	if (other.value === null) return 1;
	// 	return this.value - other.value;
	// }
}
