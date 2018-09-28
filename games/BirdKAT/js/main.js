
/*
	##########################
			Main.js
	##########################

	Init Game.

	Preload game assets, run first Scene and handle game loop.

*/

/*
	Our new Game
*/
var game = new Game();

var debugMode = false;	// Set Debug Mode

/*
	Game Loop

	(Notes: Should've made this inside game.js.)
*/
var lastFrameTime = 0,
	maxFPS = 60,
	timestep = 1000/60,
	delta = 0;


/*
	Preload Game Assets
*/
var loader = new Preloader();

loader.load(function(progress) 
{
	if(debugMode) console.log("Loading: " + progress + "%");

	// Init Game after Load
	if(progress == 100) Setup();
});

/*
	Init Game
*/
function Setup()
{
	// Init Game
	game.Init();

	// Run First Scene
	game.AddScene(new SplashScene());

	// Start Game after Init
	requestAnimationFrame(MainLoop);
}

/*
	Main Loop
*/
function MainLoop(timestamp)
{
	/*
		//Simple update with no timestep or frame cap.

		delta = timestamp - lastFrameTime; // get the delta time since last frame
    	lastFrameTime = timestamp;
 		
 		console.log("Delta time: ", delta);
    	game.Update(delta);
	*/

	// Give pc a break
    if (timestamp < lastFrameTime + timestep) {
        requestAnimationFrame(MainLoop);
        return;
    }

    delta += timestamp - lastFrameTime;
    lastFrameTime = timestamp;

    // Cap delta
    while(delta >= timestep) {
    	//console.log("Delta time: ", delta);
		game.Update(timestep);
		delta -= timestep;
	}
		
	game.Draw();

	requestAnimationFrame(MainLoop);
}
