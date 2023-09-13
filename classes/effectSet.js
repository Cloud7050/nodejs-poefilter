/* [Exports] */
export class EffectSet {
	static COLOUR = {
		WHITE: "White",
		BLUE: "Blue",
		YELLOW: "Yellow",
		ORANGE: "Orange"
	};

	mapColour = null;

	export() {
		let strings = [];

		if (this.mapColour !== null) {
			strings.push(`MinimapIcon 2 ${this.mapColour} Circle`);
		}

		return strings;
	}
}
