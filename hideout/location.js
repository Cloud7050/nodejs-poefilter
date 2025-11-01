// Represents raw config values as understood by the game (not layman)
export class Location {
	vector;
	rotation;

	constructor(vector, rotation) {
		this.vector = vector;
		this.rotation = rotation;
	}
}
