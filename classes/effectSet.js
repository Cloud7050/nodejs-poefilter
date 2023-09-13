/* [Exports] */
export class EffectSet {
	static COLOUR = {
		WHITE: "White",
		BLUE: "Blue",
		YELLOW: "Yellow",
		ORANGE: "Orange"
	};

	mapColour = null;
	outlineColour = null;

	export() {
		let lines = [];

		if (this.outlineColour !== null) {
			lines.push(`SetBorderColor ${this.outlineColour}`);
		}

		if (this.mapColour !== null) {
			lines.push(`MinimapIcon 2 ${this.mapColour} Circle`);
		}

		return lines;
	}
}
