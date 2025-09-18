export class Vector {
	x;
	y;

	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	magnitude(magnitude) {
		return new Vector(this.x * magnitude, this.y * magnitude);
	}

	add(other) {
		return new Vector(this.x + other.x, this.y + other.y);
	}
}
