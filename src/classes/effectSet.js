/* [Exports] */
export class EffectSet {
	static VISIBILITY = {
		HIDE: "Hide",
		SHOW: "Show"
	};
	static TEXT_SIZE = {
		SMALLEST: "18",
		DEFAULT: "32",
		LARGEST: "45"
	};

	visibility = EffectSet.VISIBILITY.SHOW;
	textSize = null;

	getBlockStart() {
		return this.visibility;
	}

	export() {
		let spans = [];

		if (this.textSize !== null) {
			spans.push(`SetFontSize ${this.textSize}`);
		}

		return spans;
	}
}
