var config = {};

// Card config
config.ALLOW_CARDS = true;
config.CARD_LIMIT = 4; // max cards to print from one message
config.CARD_LENGTH_MIN = 3; // minimum card string length to search
config.COLLECTIBLE_ONLY = true; // only show collectible cards
config.PRINT_CARD_DETAILS = true; // print details instead of the card image
config.ALLOW_CARD_ONLY = true; // allow suffix to only show card
config.CARD_ONLY_SUFFIX = "+c"; // suffix to only show card
config.KEYWORDS = [ // keywords to bold
	"Adapt",
	"Battlecry",
	"Charge",
	"Choose One",
	"Combo",
	"Counter",
	"Deathrattle",
	"Discover",
	"Divine Shield",
	"Enrage",
	"Freeze",
	"Immune",
	"Inspire",
	"Lifesteal",
	"Mega-Windury",
	"Overload",
	"Poisonous",
	"Quest",
	"Recruit",
	"Secret",
	"Silence",
	"Stealth",
	"Spell Damage",
	"Taunt",
	"Windfury"
]

// Deck config
config.ALLOW_DECKS = true;
config.DECK_LIMIT = 1; // max decks to print from one message

// Misc Settings

// only use whitelist OR blacklist
config.CHANNEL_WHITELIST = [];
config.CHANNEL_BLACKLIST = [
	"377296505096110080",
	"301092519981088771"
];

// Emoji Settings
config.ATTACK_EMOJI = "<:attack:385274433830649869>";
config.HEALTH_EMOJI = "<:health:385274434203680788>";
config.WEAPON_ATTACK_EMOJI = "<:weapon_attack:385567336272363530>";
config.WEAPON_HEALTH_EMOJI = "<:weapon_dur:385567315330072586>";
config.MANA_EMOJI = {
	0: "<:mana0:385569268764377089>",
	1: "<:mana1:385569274783334400>",
	2: "<:mana2:385569281343094785>",
	3: "<:mana3:385569286883901441>",
	4: "<:mana4:385569292424445952>",
	5: "<:mana5:385569298304991242>",
	6: "<:mana6:385569303916707850>",
	7: "<:mana7:385569309855973377>",
	8: "<:mana8:385569314431827981>",
	9: "<:mana9:385569321126068235>",
	10: "<:mana10:385569326935310366>",
	11: "<:mana11:385569332836433921>",
	12: "<:mana12:385569338780024832>",
	25: "<:mana25:385569346229108737>"
}

config.FORMATS = {
	"1": "Wild",
	"2": "Standard"
};

config.RARITIES = {
	"Legendary": {
		"color": 0xFDB90E,
		"emoji": ":legendary-gem:",
		"dust": "1600",
	},
	"Epic": {
		"color": 0x893BA0,
		"emoji": ":epic-gem:",
		"dust": "400",
	},
	"Rare": {
		"color": 0x337FDF,
		"emoji": ":rare-gem:",
		"dust": "100",
	},
	"Common": {
		"color": 0x8D9695,
		"emoji": ":common-gem:",
		"dust": "40",
	},
	"Free": {
		"color": 0x8D9695,
		"emoji": ":common-gem:",
		"dust": "0",
	}
};

config.CLASSES = {
	"Druid": {
		"color": 0x7A4929,
		"icon": "https://jjdev.io/hearthbot/img/Druid.png"
	},
	"Hunter": {
		"color": 0x027c00,
		"icon": "https://jjdev.io/hearthbot/img/Hunter.png"
	},
	"Mage": {
		"color": 0x006eff,
		"icon": "https://jjdev.io/hearthbot/img/Mage.png"
	},
	"Paladin": {
		"color": 0xcec400,
		"icon": "https://jjdev.io/hearthbot/img/Paladin.png"
	},
	"Priest": {
		"color": 0xc9c9c9,
		"icon": "https://jjdev.io/hearthbot/img/Priest.png"
	},
	"Rogue": {
		"color": 0x474747,
		"icon": "https://jjdev.io/hearthbot/img/Rogue.png"
	},
	"Shaman": {
		"color": 0x42ffe5,
		"icon": "https://jjdev.io/hearthbot/img/Shaman.png"
	},
	"Warlock": {
		"color": 0x8855b2,
		"icon": "https://jjdev.io/hearthbot/img/Warlock.png"
	},
	"Warrior": {
		"color": 0xa80000,
		"icon": "https://jjdev.io/hearthbot/img/Warrior.png"
	},
	"Neutral": {
		"color": 0x34363B,
		"icon": ""
	}
};

config.API_URL = "http://jjdev.io/hearthbot/data.php?";

module.exports = config;
