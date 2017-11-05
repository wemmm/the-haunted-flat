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
		'A Stranger in the Bedroom' : {
			firstVisit : true,
			displayName : 'Your bedroom, with a stranger in it.',
			description : '\nYou call out for your maid, Grunya. Upon hearing no response, you shout for your flatmate, Berlioz. Still nothing. Won\'t anybody bring you an aspirin? Eventually you haul yourself up and go to look in the mirror.\n\nYour appearance is scruffy, and you are wearing a shirt, tie, underpants and socks. Suddenly you realise that you are not the only person you can see in the mirror. Reflected in its surface, standing behind you, is a stranger. You feel certain that you\'ve never met him before.',
			interactables : {
				bed : { look : 'Unmade.' },
        nightstand : { look : 'A small table with a lamp standing on it. There is a photo of your wife here.' },
        self : { look : 'Are you going mad?' },
        photo : { look : 'A photograph of your wife.' },
        stranger : { look : 'A well-groomed man in a black suit, paired with a black beret.' }
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
    'Bedroom' : {
			firstVisit : true,
			displayName : 'Your bedroom',
			description : 'You are lying horizontally across your bed, and the room is dark. It\'s hard to see, but what little light there is glints on the surface of a full length MIRROR on the opposite wall. For starters, maybe you should GO over to it and take a look at yourself.',
			interactables : {
				bed : { look : 'You really don\'t want to get up. To say that you\'re feeling rough is an understatement.' },
        nightstand : { look : 'A small table with a lamp standing on it. There is a photo of your wife here.' },
        self : { look : 'You mentally give yourself a once over. Your head is pounding, your eyes hurt, and you appear to have mislaid your trousers.' },
        photo : { look : 'A photograph of your wife.' }
			},
			exits : {
				mirror : {
					displayName : 'mirror',
					destination : 'A Stranger in the Bedroom',
          hidden : true
				}
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
function meetTheStranger(){
	gameData.player.metStranger = true;
	return 'You\'re not the only person you can see in the mirror.'
  game.player.currentLocation = 'A Stranger in the Bedroom';
}
