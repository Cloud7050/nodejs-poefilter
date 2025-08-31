export class ConditionSet {
	static ITEM_CLASS = {
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

	itemClass = null;
	rarity = null;

	export() {
		let spans = [];

		if (this.itemClass !== null) spans.push(`Class ${this.itemClass}`);
		if (this.rarity !== null) spans.push(`Rarity ${this.rarity}`);

		return spans;
	}
}
