// === Game Data ===
var gameData = {
	commandCounter : 0,
	gameOver : false,
	introText : '\nYou are Stepa Likhodeyev, manager of the Variety Theatre, and you are just waking up from a terrible hangover. The flat you share on Sadovaya Street, Moscow, has a curious reputation: its occupants tend to inexplicably vanish. \n\nYou really ought to get out of bed and find some aspirin, although first you should probably put on some trousers.\n\n',
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
			description : 'You are lying horizontally across your bed, and the room is dark. It\'s hard to see, but what little light there is glints on the surface of a small mirror on the nightstand next to you.',
			interactables : {
				bed : { look : 'You really don\'t want to get up. To say that you\'re feeling rough is an understatement.' },
        nightstand : { look : 'A small table with a lamp and a mirror standing on it.' },
        self : { look : 'You mentally give yourself a once over. Your head is pounding, your eyes hurt, and you appear to have mislaid your trousers.' },
			},
			items : {
				mirror : {
					displayName : 'Mirror',
					description : 'A small mirror, just about visible in the gloom.',
					use : function(){return meetTheStranger();},
					quantity : 1,
					hidden : true
				}
			},
			exits : {
				hallway : {
					displayName : 'the door to the hallway',
					destination : 'Hallway'
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
		}
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
}
