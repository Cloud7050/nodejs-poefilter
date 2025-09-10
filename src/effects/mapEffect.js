


export class MapEffect {
	static SIZE = {
		SMALL: "2",
		MEDIUM: "1",
		LARGE: "0",
		DISABLE: "-1",
	};
	static ICON = {
		// CIRCLE: "Circle",
		CROSS: "Cross",
		DIAMOND: "Diamond",
		// HEXAGON: "Hexagon",
		HOUSE: "UpsideDownHouse",
		KITE: "Kite",
		// MOON: "Moon",
		// PENTAGON: "Pentagon",
		// RAINDROP: "Raindrop",
		STAR: "Star",
		SQUARE: "Square",
		// TRIANGLE: "Triangle",
	};

	size;
	colour;
	icon;

	constructor(size = null, colour = null, icon = null) {
		this.size = size;
		this.colour = colour;
		this.icon = icon;
	}

	isNull() {
		return this.size === null || this.colour === null || this.icon === null;
	}

	export() {
		if (this.isNull()) {
			return `MinimapIcon ${MapEffect.SIZE.DISABLE}`;
		}

		return `MinimapIcon ${this.size} ${this.colour} ${this.icon}`;
	}
}
