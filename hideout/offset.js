export class Offset {
	valueX = 0;
	valueY = 0;
	unitX;
	unitY;

	constructor(unitX, unitY) {
		this.unitX = unitX;
		this.unitY = unitY;
	}

	times(magnitude) {
		let offset = new Offset(this.unitX, this.unitY);
		offset.valueX = this.valueX + this.unitX * magnitude;
		offset.valueY = this.valueY + this.unitY * magnitude;
		return offset;
	}
}
