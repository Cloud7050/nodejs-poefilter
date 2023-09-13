/* [Exports] */
export class EffectSet {
	static TEXT_SIZE = {
		SMALLEST: "18",
		DEFAULT: "32",
		LARGEST: "45"
	};
	static RGB = {
		CYAN: "85 255 255",
		YELLOW: "255 255 85",
		LIME: "85 255 85",
		PURPLE: "170 0 170"
	};

	static COLOUR = {
		WHITE: "White",
		BLUE: "Blue",
		YELLOW: "Yellow",
		ORANGE: "Orange"
	};
	static ICON = {
		RAINDROP: "Raindrop",
		CIRCLE: "Circle",
		CROSS: "Cross",
		STAR: "Star",
		DIAMOND: "Diamond",
		MOON: "Moon"
	};
	static ICON_SIZE = {
		SMALL: "2",
		MEDIUM: "1",
		LARGE: "0"
	};

	textSize = null;
	outlineColour = null;

	mapColour = null;
	mapIcon = EffectSet.ICON.CIRCLE;
	mapSize = EffectSet.ICON_SIZE.SMALL;

	beamColour = null;

	export() {
		let lines = [];

		if (this.textSize !== null) {
			lines.push(`SetFontSize ${this.textSize}`);
		}
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
