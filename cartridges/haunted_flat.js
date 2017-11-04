// === Game Data ===
var gameData = {
	commandCounter : 0,
	gameOver : false,
	introText : 'You are Stepa Likhodeyev, manager of the Variety Theatre, and you are just waking up from a terrible hangover. The flat you share on Sadovaya Street, Moscow, has a curious reputation: its occupants tend to inexplicably vanish. You really ought to get out of bed, although first you should probably put on some trousers.',
	outroText : 'Thanks For playing!',
	player : {
		currentLocation : 'Bedroom',
		inventory : {},
		lightSource : false
	},
	map : {
		'Bedroom' : {
			firstVisit : true,
			displayName : 'Your bedroom',
			description : 'You are lying horizontally across your bed, and the room is dark. ',
			interactables : {
				bed : { look : 'You really don\'t want to get up. To say that you\'re feeling rough is an understatement.' },
				mirror : { look : 'The sign reads "Crooked Gulch Gold Mine" and has a note tacked to the bottom of it.' },
				note : { look : 'Written in an untidy scroll the note reads "Generator blew. Lights out."' }
			},
			items : {
				socks : {
					displayName : 'Miner Helmet',
					description : 'A trusty old miner helmet covered in minor dents. Still seems sturdy and the light works.',
					use : function(){return useLightSource();},
					quantity : 1,
					hidden : true
				}
			},
			exits : {
				hallway : {
					displayName : 'Hallway',
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
