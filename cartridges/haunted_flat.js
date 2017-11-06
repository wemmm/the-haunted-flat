// === Game Data ===
var gameData = {
	commandCounter : 0,
	gameOver : false,
	introText : '\nYou are Stepa Likhodeyev, manager of the Variety Theatre, and you are just waking up from a terrible hangover. The flat you share on Sadovaya Street, Moscow, has a curious reputation: its occupants tend to inexplicably vanish. \n\nYou really ought to get out of bed and find some aspirin, although first you should probably put on some trousers.\n',
	outroText : 'Thanks for playing!',
	player : {
		currentLocation : 'Bedroom',
		inventory : {},
		metStranger : false
	},
	map : {
		'Bedroom' : {
			firstVisit : true,
			displayName : 'Your bedroom',
			description : 'You are lying horizontally across your bed, and the room is dark. It\'s hard to see, but what little light there is glints on the surface of a full length MIRROR on the opposite wall. For starters, maybe you should GO over to it and take a look at yourself.\n',
			interactables : {
				bed : { look : '\nYou really don\'t want to get up. To say that you\'re feeling rough is an understatement.\n' },
        nightstand : { look : '\nA small table with a lamp standing on it. There is a photo of your wife here.\n' },
        self : { look : '\nYou mentally give yourself a once over. Your head is pounding, your eyes hurt, and you appear to have mislaid your trousers.\n' },
        photo : { look : '\nA photograph of your wife. Your wife, along with Berlioz\'s, disappeared not even a month into your tenancy here, although not without trace.\n' }
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
			description : '\nYou call out for your maid, Grunya. Upon hearing no response, you shout for your flatmate, Berlioz. Still nothing. Won\'t anybody bring you an aspirin? Eventually you haul yourself up and go to look in the mirror.\n\nYour appearance is scruffy, and you are wearing a shirt, tie, underpants and socks. Suddenly you realise that you are not the only person you can see in the mirror. Reflected in its surface, standing behind you, is a stranger. You feel certain that you\'ve never met him before.\n',
			interactables : {
				bed : { look : '\nUnmade.\n' },
        nightstand : { look : '\nA small table with a lamp standing on it. There is a photo of your wife here.\n' },
        self : { look : '\nAre you going mad?\n' },
        photo : { look : '\nA photograph of your wife. Your wife, along with Berlioz\'s, disappeared not even a month into your tenancy here, although not without trace.\n' },
        stranger : {
					look : '\nA well-groomed man in a black suit, paired with a black beret. You don\'t know him and you don\'t know how he got in here.\n',
					talk : '\n PLACEHOLDER\n'
				 }
			},
			exits : {
				hallway : {
					displayName : 'the door to the hallway',
					destination : 'Hallway',
          hidden : true
				}
			},
		},
		'Hallway' : {
			firstVisit : true,
			displayName : 'Hallway',
			description : 'PLACEHOLDER',
			exits : {
				another_place : {
					displayName : '',
					destination : ''
				},
				yet_another_place : {
					displayName : '',
					destination : ''
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
