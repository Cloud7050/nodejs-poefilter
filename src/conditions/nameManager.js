import { DIV, Name } from "./name.js";
import { StringList } from "./stringList.js";

export class NameManager {
	names;

	constructor (...names) {
		this.names = names.map(
			(name) => name instanceof Name ? name : new Name(name)
		);
	}

	static getCurrenciesBad(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Transmutation Shard", 1 / 30000),
			new Name("Regal Shard", 1 / 7500),
			new Name("Artificer's Shard", 1 / 5000),
			new Name("Blacksmith's Whetstone", 1 / 500),
			new Name("Lesser Jeweller's Orb", 1 / 400),
		).filter(min, max);
	}
	static getCurrencies(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Greater Orb of Transmutation", 1 / 4000),
			new Name("Orb of Transmutation", 1 / 3000),
			new Name("Greater Orb of Augmentation", 1 / 1000),
			new Name("Regal Orb", 1 / 750),
			new Name("Artificer's Orb", 1 / 500),
			new Name("Greater Jeweller's Orb", 1 / 250),
			new Name("Scroll of Wisdom", 1 / 200),
			new Name("Orb of Augmentation", 1 / 200),

			new Name("Orb of Alchemy", 1 / 100),
			new Name("Glassblower's Bauble", 1 / 100),
			new Name("Perfect Orb of Transmutation", 1 / 80),
			new Name("Greater Regal Orb", 1 / 79),
			new Name("Armourer's Scrap", 1 / 50),
			new Name("Gemcutter's Prism", 1 / 20),
			new Name("Arcanist's Etcher", 1 / 7.5),
			new Name("Chance Shard", 1 / 5),
			new Name("Vaal Orb", 1 / 4),

			new Name("Exalted Orb", 1),
			new Name("Perfect Orb of Augmentation", 1),
			new Name("Greater Exalted Orb", 2.7),
			new Name("Orb of Chance", 5),
			new Name("Perfect Regal Orb", 13),
			new Name("Perfect Jeweller's Orb", 16),

			new Name("Chaos Orb", 22.5),
			new Name("Greater Chaos Orb", 61),
			new Name("Fracturing Orb", 230),
			new Name("Orb of Annulment", 1 / 2.36 * DIV),

			new Name("Divine Orb", DIV),
			new Name("Perfect Exalted Orb", 1.67 * DIV),
			new Name("Perfect Chaos Orb", 2.25 * DIV),
			new Name("Hinekora's Lock", 475 * DIV),
			new Name("Mirror of Kalandra", 1361 * DIV),
		).filter(min, max);
	}

	static getAbyss1(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Gnawed Jawbone", 1 / 20),
			new Name("Gnawed Rib", 1 / 20),
			new Name("Gnawed Collarbone", 1 / 2),
		).filter(min, max);
	}
	static getAbyss2(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Preserved Jawbone", 1 / 100),
			new Name("Preserved Rib", 1 / 50),

			new Name("Preserved Collarbone", 1.4),
		).filter(min, max);
	}
	static getAbyss3(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Preserved Vertebrae", 3.6),
			new Name("Preserved Cranium", 10),

			new Name("Ancient Rib", 1.5 * DIV),
			new Name("Ancient Jawbone", 3 * DIV),
			new Name("Ancient Collarbone", 6 * DIV),
		).filter(min, max);
	}

	static getEmotions1(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Diluted Liquid Ire", 1 / 3),

			new Name("Diluted Liquid Greed", 1.5),
			new Name("Diluted Liquid Guilt", 4.17),
		).filter(min, max);
	}
	static getEmotions2(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Liquid Envy", 2.57),
			new Name("Liquid Paranoia", 4.1),
			new Name("Liquid Despair", 4.17),
			new Name("Liquid Disgust", 15.56),
		).filter(min, max);
	}
	static getEmotions3(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Concentrated Liquid Suffering", 30),
			new Name("Concentrated Liquid Fear", 40),
			new Name("Concentrated Liquid Isolation", 85),
		).filter(min, max);
	}

	static getCatalysts(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Skittering Catalyst", 1 / 30), // Speed
			new Name("Adaptive Catalyst", 1 / 25), // Attribute
			new Name("Uul-Netol's Catalyst", 1 / 17), // Physical
			new Name("Sibilant Catalyst", 1 / 15), // Caster
			new Name("Carapace Catalyst", 1 / 12.6), // Defence
			new Name("Xoph's Catalyst", 1 / 12), // Fire
			new Name("Neural Catalyst", 1 / 11), // Mana

			new Name("Tul's Catalyst", 1 / 8), // Cold
			new Name("Chayula's Catalyst", 1 / 7), // Chaos

			new Name("Flesh Catalyst", 2), // Life
			new Name("Esh's Catalyst", 5), // Lightning

			new Name("Reaver Catalyst", 13), // Attack
		).filter(min, max);
	}

	static getSplinters(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Breach Splinter", 1 / 9),

			new Name("Petition Splinter", 1.29),
			new Name("Simulacrum Splinter", 1.85),
			new Name("Runic Splinter", 6.7),
		).filter(min, max);
	}

	static getArtifacts(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Order Artifact", 1 / 40), // Armour
			new Name("Broken Circle Artifact", 1 / 38), // Weapons

			new Name("Black Scythe Artifact", 1 / 4), // Jewellery/belts
			new Name("Sun Artifact", 1 / 4), // Wildcard
		).filter(min, max);
	}
	static getCoinage(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Exotic Coinage", 2),
		).filter(min, max);
	}

	static getOmens(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Omen of Gambling", 1 / 800),

			new Name("Omen of Refreshment", 1 / 20),
			new Name("Omen of the Ancients", 1 / 3),
			new Name("Omen of Greater Exaltation", 1 / 3),

			new Name("Omen of Dextral Exaltation", 3),
			new Name("Omen of Homogenising Coronation", 3.5),
			new Name("Omen of Resurgence", 4),
			new Name("Omen of Sinistral Exaltation", 4),
			new Name("Omen of Chaotic Quantity", 7),
			new Name("Omen of Bartering", 7.2),
			new Name("Omen of Answered Prayers", 9),
			new Name("Omen of the Blessed", 10),
			new Name("Omen of Amelioration", 10),
			new Name("Omen of Catalysing Exaltation", 11),
			new Name("Omen of Chaotic Monsters", 13),
			new Name("Omen of Secret Compartments", 16),
			new Name("Omen of Corruption", 18.33),

			new Name("Omen of Dextral Crystallisation", 20),
			new Name("Omen of the Hunt", 23),
			new Name("Omen of Chaotic Rarity", 25),
			new Name("Omen of Recombination", 28),
			new Name("Omen of Reinforcements", 77),
			new Name("Omen of Homogenising Exaltation", 80),
			new Name("Omen of Sinistral Crystallisation", 101),
			new Name("Omen of Sanctification", 334),

			new Name("Omen of Dextral Erasure", 2.18 * DIV),
			new Name("Omen of Whittling", 2.5 * DIV),
			new Name("Omen of Dextral Annulment", 3.5 * DIV),
			new Name("Omen of Sinistral Erasure", 4 * DIV),
			new Name("Omen of Sinistral Annulment", 5.33 * DIV),
			new Name("Omen of Chance", 6 * DIV),
		).filter(min, max);
	}
	static getOmensAbyss(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Omen of the Liege", 1 / 90), // Amanamu
			new Name("Omen of Putrefaction", 1 / 14),
			new Name("Omen of Dextral Necromancy", 1 / 12),
			new Name("Omen of the Sovereign", 1 / 10), // Ulaman
			new Name("Omen of the Blackblooded", 1 / 8), // Kurgal

			new Name("Omen of Sinistral Necromancy", 26.5),
			new Name("Omen of Abyssal Echoes", 68),

			new Name("Omen of Light", 3.33 * DIV),
		).filter(min, max);
	}

	static getGems(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Tacati's Ire", 1 / 9),
			new Name("Daresso's Passion", 1 / 8),
			new Name("Romira's Requital", 1 / 7),
			new Name("Kurgal's Leash", 1 / 6),
			new Name("Vilenta's Propulsion", 1 / 4),
			new Name("Arakaali's Lust", 1 / 3),
			new Name("Uruk's Smelting", 1 / 2),
			new Name("Varashta's Blessing", 1 / 2),
			new Name("Tawhoa's Tending", 1 / 2),
			new Name("Sione's Temper", 1 / 2),
			new Name("Ahn's Citadel", 1 / 2),

			new Name("Paquate's Pact", 1),
			new Name("Kaom's Madness", 1),
			new Name("Tecrod's Revenge", 1),
			new Name("Kalisa's Crescendo", 1),
			new Name("Zarokh's Refrain", 1),
			new Name("Doedre's Undoing", 1),
			new Name("Kulemak's Dominion", 1),
			new Name("Einhar's Beastrite", 1),
			new Name("Atziri's Allure", 1),
			new Name("Brutus' Brain", 2),
			new Name("Xoph's Pyre", 2),
			new Name("Arbiter's Ignition", 2.5),
			new Name("Piety's Mercy", 5),
			new Name("Ailith's Chimes", 6),
			new Name("Garukhan's Resolve", 14),
			new Name("Uhtred's Exodus", 16),

			new Name("Tul's Stillness", 60),
			new Name("Esh's Radiance", 65),
			new Name("Rigwald's Ferocity", 90),
			new Name("Ixchel's Torment", 225),

			new Name("Uhtred's Omen", 6 * DIV),
			new Name("Ratha's Assault", 6 * DIV),
			new Name("Uul-Netol's Embrace", 11 * DIV),
			new Name("Atalui's Bloodletting", 16 * DIV),
			new Name("Rakiata's Flow", 20 * DIV),
			new Name("Dialla's Desire", 30 * DIV),
			new Name("Arjun's Medal", 41 * DIV),
			new Name("Uhtred's Augury", 50 * DIV),
		).filter(min, max);
	}

	static getSocketables(min = undefined, max = undefined) {
		return new NameManager(
			new Name("Soul Core of Xopec", 34),
			new Name("Soul Core of Puhuarte", 35),
			new Name("Soul Core of Atmohua", 36),
			new Name("Soul Core of Zalatl", 40),
			new Name("Soul Core of Zantipi", 42),
			new Name("Soul Core of Quipolatl", 44),
			new Name("Soul Core of Ticaba", 47),
			new Name("Soul Core of Tzamoto", 52),
			new Name("Soul Core of Citaqualotl", 53),
			new Name("Soul Core of Cholotl", 60),
			new Name("Soul Core of Opiloti", 65),
			new Name("Soul Core of Topotante", 66),
			new Name("Soul Core of Tacati", 84),
			new Name("Soul Core of Azcapa", 125),

			new Name("Soul Core of Jiquani", 6 * DIV),
		).filter(min, max);
	}

	// static getFlasksGood() {
	// 	return new NameManager(
	// 		"Ultimate Life Flask", "Ultimate Mana Flask",
	// 	);
	// }
	static getFlasksBad() {
		return new NameManager(
			"Lesser Life Flask", "Lesser Mana Flask",
			"Medium Life Flask", "Medium Mana Flask",
			"Greater Life Flask", "Greater Mana Flask",
			"Grand Life Flask", "Grand Mana Flask",
			"Giant Life Flask", "Giant Mana Flask",
			"Colossal Life Flask", "Colossal Mana Flask",
			"Gargantuan Life Flask", "Gargantuan Mana Flask",
			"Transcendent Life Flask", "Transcendent Mana Flask",
		);
	}

	static getMainClassLow() {
		return new NameManager(
			// https://poe2db.tw/us/Sceptres#SceptresItem
			"Stoic Sceptre", // Discipline
			"Omen Sceptre", // Malice
			"Shrine Sceptre", // Purity of Fire/Ice/Lightning
			"Wrath Sceptre", // Fulmination
		);
	}
	static getOffClassLow() {
		return new NameManager(
			// https://poe2db.tw/us/Foci#FociItem
			"Twig Focus", // 12 ES
			"Woven Focus", // 15 ES, L6
			"Antler Focus", // 17 ES, L10
			"Engraved Focus", // 21 ES, L16
			"Tonal Focus", // 25 ES, L22
			"Crystal Focus", // 28 ES, L26
			"Voodoo Focus", // 32 ES, L33
			"Plumed Focus", // 34 ES, L36
			"Runed Focus", // 40 ES, L45
			"Whorl Focus", // 43 ES, L51
			"Arrayed Focus", // 45 ES, L54
			"Cultist Focus", // 49 ES, L59
			"Hallowed Focus", // 50 ES, L61
			"Druidic Focus", // 52 ES, L65
			"Leyline Focus", // 58 ES, L70
			// "Sacred Focus", // 63 ES, L75
			// "Tasalian Focus", // 68 ES, L80
		);
	}
	static getArmourClassLow() {
		return new NameManager(
			// https://poe2db.tw/us/Helmets
			"Twig Circlet", // 19 ES
			"Wicker Tiara", // 28 ES, L10
			"Beaded Circlet", // 34 ES, L16
			"Chain Tiara", // 44 ES, L26
			"Feathered Tiara", // 51 ES, L33
			"Gold Circlet", // 58 ES, L40
			"Vermeil Circlet", // 63 ES, L45
			"Jade Tiara", // 69 ES, L50
			"Sandsworn Tiara", // 73 ES, L54
			"Jungle Tiara", // 78 ES, L59
			"Skycrown Tiara", // 84 ES, L65
			"Sorcerous Tiara", // 92 ES, L70
			// "Kamasan Tiara", // 101 ES, L75
			// "Ancestral Tiara", // 109 ES, L80

			// https://poe2db.tw/us/Body_Armours#BodyArmoursItem
			"Tattered Robe", // 28 ES
			"Feathered Robe", // 35 ES, L5
			"Hexer's Robe", // 44 ES, L11
			"Bone Raiment", // 52 ES, L16
			"Silk Robe", // 61 ES, L22
			"Keth Raiment", // 70 ES, L28
			"Votive Raiment", // 78 ES, L33
			"Altar Robe", // 89 ES, L40
			"Elementalist Robe", // 97 ES, L45
			"Mystic Raiment", // 103 ES, L49
			"River Raiment", // 111 ES, L54
			"Adherent's Raiment", // 119 ES,  L59
			"Ceremonial Robe", /// 123 ES, L62
			// "Vile Robe", /// 184 ES, L65
			// "Flowing Raiment", /// 153 ES, L70, 40–50% increased Mana Regeneration Rate
			// "Sacramental Robe", /// 153 ES, L75, 40–50% faster start of Energy Shield Recharge
			// "Feathered Raiment", /// 153 ES, L80, 5–10% of Damage is taken from Mana before Life

			// https://poe2db.tw/us/Gloves
			"Torn Gloves", // 9 ES
			"Sombre Gloves", // 15 ES, L12
			"Stitched Gloves", // 17 ES, L16
			"Jewelled Gloves", // 22 ES, L26
			"Intricate Gloves", // 26 ES, L33
			"Pauascale Gloves", // 32 ES, L45
			"Embroidered Gloves", // 35 ES, L52
			"Baroque Gloves", // 36 ES, L54
			"Gold Gloves", // 39 ES, L59
			"Grim Gloves", // 42 ES, L65
			"Opulent Gloves", // 46 ES, L70
			// "Vaal Gloves", // 50 ES, L75
			// "Sirenscale Gloves", // 54 ES, L80
		);
	}
	static getJewelleryOther() {
		return new NameManager(
			"Crimson Amulet", // 2-4 life regen
			// "Amber Amulet", // Strength
			// "Jade Amulet", // Dexterity

			"Iron Ring", // +1-4 phys damage to attacks
			"Emerald Ring", // Flat accuracy
			"Unset Ring", // Skill slot
		);
	}

	// Inclusive of min, exclusive of max
	filter(min = null, max = null) {
		let names = this.names.filter((name) => {
			let passMin = true;
			if (min !== null) passMin = name.value === null || name.value >= min;

			let passMax = true;
			if (max !== null) passMax = name.value === null || name.value < max;

			return passMin && passMax;
		});
		return new NameManager(...names);
	}

	export() {
		this.names.sort((a, b) => a.compare(b));
		return new StringList(
			...this.names.map(name => name.name)
		);
	}
}
