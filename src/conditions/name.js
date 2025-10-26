export class Name {
	static DIV = 1440; // Exalts per divine

	name;
	value;

	constructor(name, value = null) {
		this.name = name;
		this.value = value;
	}

	compare(other) {
		if (this.value === null && other.value === null) return 0;
		if (this.value === null) return -1;
		if (other.value === null) return 1;
		return this.value - other.value;
	}
}
export const DIV = Name.DIV;
