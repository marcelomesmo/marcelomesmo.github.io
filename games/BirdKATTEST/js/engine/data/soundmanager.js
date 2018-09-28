/*
	##########################
	Sound Manager
	##########################

	Uses Buzz Audio lib (http://buzz.jaysalvat.com) to handle Sounds.

*/

// Init volume
var volume = 30;

/*
	SFX
*/
var sfxJump = new buzz.sound("assets/sounds/sfx_swooshing.ogg", { preload: true, loop: false});
var sfxScore = new buzz.sound("assets/sounds/sfx_point.ogg", { preload: true, loop: false});
var sfxShoot = new buzz.sound("assets/sounds/sfx_shoot.mp3", { preload: true, loop: false});
var sfxDie = new buzz.sound("assets/sounds/sfx_die.ogg", { preload: true, loop: false});
//var sfxPunch = new buzz.sound("assets/sounds/sfx_hit.ogg", { preload: true, loop: false});
//var sfxWing = new buzz.sound("assets/sounds/sfx_wing.ogg", { preload: true, loop: false});

/*
	MUSIC
*/
var musicMenu = new buzz.sound("assets/sounds/10 - The Empire.ogg", { preload: true, loop: true});
var musicGame = new buzz.sound("assets/sounds/BossMain - SketchyLogic.wav", { preload: true, loop: true});

// Regulate volume
buzz.all().setVolume(volume);
