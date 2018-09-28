/*
	##########################
	Game
	##########################

	Our Game.

	Init, Update and Draw Game.
	Handle Scenes.

*/
function Game()
{
	if(debugMode) console.log("Starting game.");
	
	/*
		Init Graphics

		(Notes: Should've made this inside Init())
	*/
	graph = new Graphics();
	// Pixel-perfect resize for larger screens
	graph.Resize();

	/*
		Handle Scenes
	*/
	var scenes = [];
        
    // Remove latest Scene
    this.RemoveScene = function () {
		var scene = scenes.CurrScene();
    	if(debugMode) console.log("Finished scene " + scene.name);
        scene.onExit();
        return scenes.pop();
    }
    // Add new Scene
    this.AddScene = function (scene) {
    	/*if (!this.Empty()) {
      		this.CurrScene().Pause();
    	}*/

		// Store and init the new scene
        scenes.push(scene);
    	console.log("Added new scene " + scene.name);
        scene.OnEnter();
    }
    // Return current Scene
    this.CurrScene = function (){
        return scenes[scenes.length-1];
    }
    // Empty check for handling exceptions
    /*this.Empty = function () {
    	return scenes.length == 0;
  	}*/

	/*
		Init Game

		Init Inputs.
	*/
	this.Init = function()
	{
		// Init Input
		Input.Init();

		if(debugMode) console.log("Game Initialize.");
	}

	/*
		Game Update
	*/
	this.Update = function(delta)
	{
		// Update Input (movement states)
		Input.Update(delta);

		var scene = this.CurrScene();
		if(scene)
		{
			scene.Update(delta);
			Input.Clear();
		}
	}

	/*
		Game Draw
	*/
	this.Draw = function()
	{	
		var scene = this.CurrScene();
		if(scene)
		{
			graph.Clear();
			scene.Draw();
		}
	}

	/*
		Game States

		Clean, Pause and Resume Scenes.
	*/
	/*
	this.Quit = function()
	{
		// Clean Scenes

	}

	this.pauseScene = function (){
        var scene = scenes.CurrScene();
        if (scene.onPause){
                scene.onPause();
        }
    }

    this.resumeScene = function (){
        var scene = scenes.CurrScene();
        if (scene.onResume){
                scene.onResume();
        }
    }
    */
}
