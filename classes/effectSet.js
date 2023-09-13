/* [Exports] */
export class EffectSet {
	static SIZE = {
		SMALL: "2",
		MEDIUM: "1",
		LARGE: "0"
	};

	static COLOUR = {
		WHITE: "White",
		BLUE: "Blue",
		YELLOW: "Yellow",
		ORANGE: "Orange"
	};

	static ICON = {
		CIRCLE: "Circle",
		CROSS: "Cross",
		STAR: "Star",
		DIAMOND: "Diamond"
	};

	static RGB = {
		LIME: "85 255 85",
		AQUAMARINE: "85 255 170",
		CYAN: "85 255 255"
	};

	mapSize = EffectSet.SIZE.SMALL;
	mapColour = null;
	mapIcon = EffectSet.ICON.CIRCLE;
	outlineColour = null;
	beamColour = null;

	export() {
		let lines = [];

		if (this.outlineColour !== null) {
			lines.push(`SetBorderColor ${this.outlineColour}`);
		}

		if (this.mapColour !== null) {
			lines.push(`MinimapIcon ${this.mapSize} ${this.mapColour} ${this.mapIcon}`);
		}

		if (this.beamColour !== null) {
			lines.push(`PlayEffect ${this.beamColour}`);
		}

		return lines;
	}
}
