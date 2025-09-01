export class ConditionSet {
	static CATEGORY = {
		// Witch weapons
		WEAPON_USED: '"Fishing Rods" Sceptres Wands',
		WEAPON_UNUSED: 'Bows Bucklers Claws Crossbows Daggers Flails Foci "One Hand Axes" "One Hand Maces" "One Hand Swords" Quarterstaves Quivers Shields Spears Staves Traps "Two Hand Axes" "Two Hand Maces" "Two Hand Swords"'
	};
	static RARITY = {
		NORMAL: "Normal",
		MAGIC: "Magic",
		RARE: "Rare",
		UNIQUE: "Unique"
	};

	isContinue = false;

	category = null;
	rarity = null;

	getBlockEnd() {
		return this.isContinue ? "Continue" : null;
	}

	export() {
		let spans = [];

		if (this.category !== null) spans.push(`Class ${this.category}`);
		if (this.rarity !== null) spans.push(`Rarity ${this.rarity}`);

		// Force a blank line to represent where the set goes
		if (spans.length === 0) return [""];
		return spans;
	}

	continue() {
		this.isContinue = true;
		return this;
	}
}
