// === Game Data ===
var gameData = {
	commandCounter : 0,
	gameOver : false,
	introText : '\nYou are Stepan \'Stepa\' Bogdanovich Likhodeyev, manager of the Variety Theatre, and you are just waking up from a terrible hangover. The flat you share on Sadovaya Street, Moscow, has a curious reputation: its occupants tend to inexplicably vanish. \n\nYou really ought to get out of bed and find some aspirin, although first you should probably put on some trousers.\n',
	outroText : 'Thanks for playing!',
	player : {
		currentLocation : 'Bedroom',
		inventory : {},
		ateFood : false,
		drankVodka : false
	},
	map : {
		'Bedroom' : {
			firstVisit : true,
			setup : function(){setups.demo();},
			displayName : 'Your bedroom',
			description : 'You are lying horizontally across your bed, and the room is dark. It\'s hard to see, but what little light there is glints on the surface of a full length MIRROR on the opposite wall. For starters, maybe you should GO over to it and take a look at yourself.\n',
			interactables : {
				room : { look : '\nIt is dark, but you can see the following items: a bed, a nightstand, a chair, a mirror and a table.\n' },
				bed : { look : '\nYou really don\'t want to get up. To say that you\'re feeling rough is an understatement.\n' },
        nightstand : { look : '\nA small table with a lamp standing on it. There is a photo of your wife here.\n' },
        self : { look : '\nYou mentally give yourself a once over. Your head is pounding, your eyes hurt, and you appear to have mislaid your trousers.\n' },
        photo : { look : '\nA photograph of your wife. Your wife, along with Berlioz\'s, disappeared not even a month into your tenancy here, although not without trace.\n' },
				chair : { look : '\nAh. You\'ve located your errant trousers, although you\'re in no state of mind to actually put them back on.\n' },
				table : { look : '\nA small table with two chairs.\n' }
			},
			exits : {
				mirror : {
					displayName : 'mirror',
					destination : 'A Stranger in the Bedroom',
          hidden : true
				}
			},
		},
		'A Stranger in the Bedroom' : {
			firstVisit : true,
			displayName : 'Your bedroom, with a stranger in it.',
			description : 'Generic error message.',
			setup : function(){strangerIntro();},
			interactables : {
				room : { look : '\nIt is still dark, but you can see the following items: a bed, a nightstand, a chair, a mirror, a table and a mysterious man.\n' },
				bed : { look : '\nUnmade.\n' },
				mirror : { look : '\nA floor-length mirror, in which you first spotted this ominous stranger.\n' },
        nightstand : { look : '\nA small table with a lamp standing on it. There is a photo of your wife here.\n' },
        self : { look : '\nAre you going mad?\n' },
        photo : { look : '\nRumour has it that Berlioz\'s wife ran off with the ballet-master, and yours apparently made her way to an orphanage.\n' },
				chair : { look : '\nA chair by the bed that you tend to keep clothes on.\n' },
				table : { look : '\nA small table with two chairs.\n' },
        stranger : {
					look : '\nA well-groomed man in a black suit, paired with a black beret. You don\'t know him and you don\'t know how he got in here.\n',
					talk : 'Something has gone wrong if you can see this.'
				 }
			},
			exits : {
				table : {
					displayName : 'a table',
					destination : 'Table',
          hidden : true
				}
			},
		},
		'Table' : {
			firstVisit : true,
			displayName : 'Table',
			description : '\nYou are sitting at a small table with the stranger. You evidently have matters to TALK about.\n',
			updateLocation : function(){brunchConvo();},
			interactables : {
				table : { look : '\nA small table with two chairs, which you and the stranger now occupy.\n' },
				stranger : {
					look : '\nA well-groomed man in a black suit, paired with a black beret. It seems likely that you met him during last night\'s drunken escapades, and you seem to have gone as far as to arrange a meeting with him for as yet unknown reasons.\n',
					talk: 'If you can see this then you have neither consumed nor not consumed the vodka, which is impossible. Congratulations!.\n'
				}
			},
			items : {
				vodka : {
					displayName : 'vodka',
					description : '\nVodka in an ornate decanter, standing in a bowl of ice. Condensation has formed on its outside.\n',
					use : function(){
						gameData.player.drankVodka = true;
            return "\nYou drink the vodka.\n"
          },
					drink : function(){
						gameData.player.drankVodka = true;
            return "\nYou drink the vodka.\n"
          },
					quantity : 1,
					hidden : false
				},
				bread : {
					displayName : 'bread and butter',
					description : '\nWhite bread with butter spread on it.\n',
					use : function(){
						gameData.player.ateFood = true;
            return "\nYou eat the bread and butter.\n"
          },
					eat : function(){
						gameData.player.ateFood = true;
            return "\nYou eat the bread and butter.\n"
          },
					quantity : 1,
					hidden : false
				},
				caviar : {
					displayName : 'caviar',
					description : '\nCaviar in a glass bowl.\n',
					use : function(){
						gameData.player.ateFood = true;
            return "\nYou eat the caviar. It tastes expensive.\n"
          },
					eat : function(){
						gameData.player.ateFood = true;
            return "\nYou eat the caviar. It tastes expensive.\n"
          },
					quantity : 1,
					hidden : false
				},
				mushrooms : {
					displayName : 'a saucer of pickled mushrooms',
					description : '\nA saucer of pickled mushrooms.\n',
					use : function(){
						gameData.player.ateFood = true;
            return "\nYou eat the pickled mushrooms.\n"
          },
					eat : function(){
						gameData.player.ateFood = true;
            return "\nYou eat the pickled mushrooms.\n"
          },
					quantity : 1,
					hidden : false
				},
				frankfurters : {
					displayName : 'a pan of frankfurters',
					description : '\nA pan of frankfurters in tomato sauce.\n',
					use : function(){
						gameData.player.ateFood = true;
            return "\nYou eat the frankfurters.\n"
          },
					eat : function(){
						gameData.player.ateFood = true;
            return "\nYou eat the frankfurters.\n"
          },
					quantity : 1,
					hidden : false
				},
				contract : {
					displayName : 'a contract',
					description : 'You really shouldn\'t be looking at this yet.',
					quantity : 1,
					hidden : true
				},
			},
			exits : {
				hallway : {
					displayName : 'hallway',
					destination : 'Hallway',
					hidden: true
				}
			}
		},
		'Hallway' : {
			firstVisit : true,
			description : '\nGeneric error message.\n',
			setup : function(){hallSetup();},
			interactables : {
				room : { look : '\nYou can see the following: a telephone, a mirror and the door to Berlioz\'s room, with a wax seal on it.\n' },
				telephone : {
					look : '\nA telephone. You really ought to phone Rimsky and ask for some more details about this ostensible contract with Woland.\n',
					use : '\nI am error.\n',
			  },
        mirror : { look : '\nAnother full length mirror hangs in your hallway.\n' },
        self : { look : '\nYou do feel a little better, at least physically, and you are successfully wearing trousers, which represents something of an improvement to your situation. It\'s a shame about the existential dread you\'re now feeling, but you can\'t have it all.\n' },
				door : { look : '\nThe door to Berlioz\'s room.\n' },
				seal : { look : '\nA wax seal that usually signifies that the owner of the room has \'mysteriously\' vanished, and their assets have been seized for inspection.\n' }
			},
			exits : {
				kitchen : {
					displayName : 'the kitchen',
					destination : 'Actually Your Bedroom Again',
					hidden: true
				}
			}
		},
		'Actually Your Bedroom Again' : {
			firstVisit : true,
			description : '\nGeneric error message.\n',
			setup : function(){bedroomAgainSetup();},
			updateLocation : function(){didYouTakeTheFrankfurters();},
			interactables : {
				room : { look : '\nWoland, a giant black cat and a very thin man are here.\n' },
				cat : {
					look : '\nA huge black cat, sitting on a chair in the manner of a human. There is something annoyingly nonchalant about it.\n',
					talk: '\nError message!\n'
				},
				woland : {
					look : '\nWoland is sitting exactly where he was when you left your bedroom.\n',
					talk: '\nError message!\n'
				},
				assistant : {
					look : '\nA tall, skinny man wearing a pince-nez, as per the spectre you saw in the hall mirror.\n',
					talk: '\nError message!\n'
				},
				azazello : {
					look : '\nA broad-shouldered, red-headed man who just walked out of your bedroom mirror as if it were perfectly natural to do so.\n',
					talk: '\nError message!\n'
				}
			},
			exits : {
				hallway : {
					displayName : 'hallway',
					destination : 'Hallway Again',
					hidden: true
				}
			}
		},
		'Hallway Again' : {
			firstVisit : true,
			description : '\nGeneric error message.\n',
			setup : function(){hallAgainSetup();},
			interactables : {
				room : { look : '\nYou can see the following: a telephone, a mirror and the door to Berlioz\'s room, with a wax seal on it.\n' },
				telephone : { look : '\nA telephone. You can\'t imagine that anybody you could call is going to be able to help you.\n' },
        mirror : { look : '\nThe mirror that you saw Woland\'s associates in. Are you going mad?\n' },
        self : { look : '\nYou are panicking and shaking and sweating.\n' },
				door : { look : '\nThe door to Berlioz\'s room. It\'s locked and you know that Berlioz is not there.\n' },
				seal : { look : '\nA wax seal that usually signifies that the owner of the room has \'mysteriously\' vanished, and their assets have been seized for inspection.\n' }
			},
			exits : {
				kitchen : {
					displayName : 'the kitchen',
					destination : 'Kitchen',
					hidden: true
				},
				door : {
					displayName : 'the door',
					destination : 'Yalta',
					hidden: true
				}
			}
		},
		'Kitchen' : {
			firstVisit : true,
			description : '\nGeneric error message.\n',
			setup : function(){kitchenSetup();},
			interactables : {
				room : { look : '\nThere\'s a stove, some pans and a variety of cupboards here.\n' },
				cupboards : { look : '\nCupboards for storing food and crockery and the like.\n' },
        pans : { look : '\nCooking pans.\n' },
        self : { look : '\nYour nerves are utterly frayed, and you feel an overpowering impulse to try and get out of the flat.\n' },
				stove : { look : '\nThis is really not the time to start cooking.\n' },
			},
			exits : {
				hallway : {
					displayName : 'the hallway',
					destination : 'Yalta',
					hidden: false
				},
			}
		},
		'Yalta' : {
			firstVisit : true,
			description : '\nGeneric error message.\n',
			setup : function(){yaltaSetup();},
			updateLocation : function(){yaltaPartTwo();},
			interactables : {
				self : { look : '\nYour nerves are utterly frayed, and you feel an overpowering impulse to try and get out of the flat.\n' },
				sky : { look : '\nA beautiful blue sky.\n'}
			},
		},
	}
};

// === Game Actions ===
var gameActions = {

}

// === Necessary Exports ===
module.exports.gameData = gameData;
module.exports.gameActions = gameActions;

// === Helper Functions ===
function strangerIntro(){
	gameData.map['A Stranger in the Bedroom'].description = dialogue.strangerIntroScene
	gameData.map['A Stranger in the Bedroom'].interactables.stranger.talk = dialogue.hereIAm
}

function brunchConvo(){
	if(gameData.player.drankVodka){
		gameData.map['Table'].items.contract.hidden = false;
		gameData.map['Table'].items.contract.description = dialogue.contract;
		gameData.map['Table'].interactables.stranger.talk = dialogue.brunch1;
	} else {
		gameData.map['Table'].interactables.stranger.talk = dialogue.brunch2
	}
}

function hallSetup() {
	gameData.map['Hallway'].description = dialogue.hallSetup;
	gameData.map['Hallway'].interactables.telephone.use = dialogue.rimskyCall;
	gameData.map['Hallway'].interactables.door.look = dialogue.politicalConcerns
}

function bedroomAgainSetup() {
	gameData.map['Actually Your Bedroom Again'].description = dialogue.bedroomAgainSetup
	gameData.map['Actually Your Bedroom Again'].interactables.woland.talk = dialogue.wolandIntroducesHisAssistants
	gameData.map['Actually Your Bedroom Again'].interactables.azazello.talk = dialogue.azazelloSpeaks
	gameData.map['Actually Your Bedroom Again'].interactables.assistant.talk = dialogue.tallManSpeaks
}

function didYouTakeTheFrankfurters() {
  if(gameData.map['Table'].items.frankfurters){
		gameData.map['Actually Your Bedroom Again'].interactables.cat.talk = dialogue.noIDidNot
	} else {
		gameData.map['Actually Your Bedroom Again'].interactables.cat.talk = dialogue.yesIDid
	}
}

function hallAgainSetup() {
	gameData.map['Hallway Again'].description = dialogue.hallAgainSetup
}

function kitchenSetup() {
	gameData.map['Kitchen'].description = dialogue.kitchenSetup
}

function yaltaSetup() {
	gameData.map['Yalta'].description = dialogue.yaltaSetup
}

function yaltaPartTwo() {
	gameData.map['Yalta'].description = dialogue.yaltaPartTwo
}

dialogue = require('./haunted_assets/copiouslyLongDialogue.js')
