
var game = new Game();

var lastFrameTime = 0,
	maxFPS = 60,
	timestep = 1000/60,
	delta = 0;

var initGame = false;

var loader = new Preloader();

// Load Game assets
loader.load(function(progress) {
	console.log("Loading: " + progress + "%");

	// Init Game after Load
	if(progress == 100) Setup();
});

function Setup()
{
	game.Init();

	// First Scene
	game.AddScene(new SplashScene());
	// Debug
	//game.AddScene(new GameScene());

	// Start Game after Init
	requestAnimationFrame(MainLoop);
}


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

    // cap delta
    while(delta >= timestep) {
    	//console.log("Delta time: ", delta);
		game.Update(timestep);
		delta -= timestep;
	}
		
	game.Draw();

	requestAnimationFrame(MainLoop);
}

// Start
//if(startGame) requestAnimationFrame(MainLoop);
