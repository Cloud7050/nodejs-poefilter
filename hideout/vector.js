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

	getAngle() {
		// Angle in degrees, measured from Y axis (positive clockwise or negative anti-clockwise)
		let angle = Math.atan2(this.x, this.y) / Math.PI * 180;

		let positiveAngle = (angle + 360) % 360;
		return positiveAngle;
	}

	toString() {
		return `(${this.x}, ${this.y})`;
	}
}
