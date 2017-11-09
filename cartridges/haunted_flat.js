// === Game Data ===
var gameData = {
	commandCounter : 0,
	gameOver : false,
	introText : '\nYou are Stepa Likhodeyev, manager of the Variety Theatre, and you are just waking up from a terrible hangover. The flat you share on Sadovaya Street, Moscow, has a curious reputation: its occupants tend to inexplicably vanish. \n\nYou really ought to get out of bed and find some aspirin, although first you should probably put on some trousers.\n',
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
			description : '\nYou call out for your maid, Grunya. Upon hearing no response, you shout for your flatmate, Berlioz. Still nothing. Won\'t anybody bring you an aspirin? Eventually you haul yourself up and go to look in the mirror.\n\nYour appearance is scruffy, and you are wearing a shirt, tie, underpants and socks. Suddenly you realise that you are not the only person you can see in the mirror. Reflected in its surface, standing behind you, is a STRANGER. You feel certain that you\'ve never met him before.\n\nIs it a good idea to TALK to strangers?\n',
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
					talk : '\n\"Good morning, my dear Stepan Bogdanovich!\"\n\nStuttering, you ask the mysterious man what he wants while he checks his pocket watch.\n\nSmiling, he replies:\"Eleven. I have been waiting exactly an hour for you to wake up. Our appointment was at ten!\"\n\nYou feel suddenly underdressed and clumsily start to put on your trousers, having spotted them on the chair by the bed. Appointment? You\'ve only just met this man.\n\n\"Have you forgotten my name?\" asks the man. \"No matter. Come over to the TABLE. Something sharp and peppery to eat - and a little hair of the dog - will bring you back to life.\"\n'
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
					quantity : 1,
					hidden : false
				},
				contract : {
					displayName : 'a contract',
					description : '\nA contract for Woland to perform at the Variety Theatre, of which you are the manager.\n',
					quantity : 1,
					hidden : true
				},
			},
			exits : {
				another_place : {
					displayName : '',
					destination : '',
					hidden: true
				}
			}
		},
		'End' : {
			firstVisit : true,
			description : 'placeholder',
			setup : function(){end();}
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
function brunchConvo(){
	if(gameData.player.drankVodka){
		gameData.map['Table'].items.contract.hidden = false
		gameData.map['Table'].interactables.stranger.talk = '\nThe vodka does help slightly, and you can feel your headache receding. Unfortunately, your memory has not substantially improved as you\'re still unclear as to who this man is. Your confusion must show on your face, and the stranger says gravely:\n\n\"Woland, professor of black magic\. I offered myself as a guest artiste at the Variety, which you accepted - and signed a contract for seven perfomances.\"\n\nYou gasp audibly, but Woland continues.\"You invited me here at ten o\'clock to conclude the details, but when I arrived your maid, Grunya, told me what a state you were in, so I sent her to get some vodka and food. No, no, put your wallet away, Stepan, what nonsense!\"\n\nYou take a few moments to take this new information in. It does at least explain Woland\'s presence in your room, as well as the food. One thing is still bothering you, though.\n\n\"Would you mind showing me the contract, Woland?\"\n';
	} else {
		gameData.map['Table'].interactables.stranger.talk = '\nYou ask the stranger if he intends to dine with you.\n\n\"I never eat when I\'m drinking\", he says, and pours out two glasses of vodka from the decanter.\"Have you remembered my name yet?\"\n\nYou can only grin sheepishly and shrug your shoulders. Some dim memories, including attempting to kiss a woman who worked for the radio, and going to the dacha, have returned to you, but they seem uninteresting in comparison to the situation you\'re currently in.\n\nThe stranger pushes a glass towards you. \"Better DRINK some VODKA, Stepan, then we can continue our TALK.\"\n';
	}
}

console.log()
