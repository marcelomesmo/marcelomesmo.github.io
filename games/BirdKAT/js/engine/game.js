function Game()
{
	console.log("Starting game.");
	
	graph = new Graphics();
	graph.Resize();

	var scenes = [];
        
    // Remove the lastest scene
    this.RemoveScene = function () {
		var scene = scenes.CurrScene();
    	console.log("Finished scene " + scene.name);
        scene.onExit();
        return scenes.pop();
    }
    // Add a new scene
    this.AddScene = function (scene) {
    	/*if (!this.Empty()) {
      		this.CurrScene().Pause();
    	}*/

		// Store and init the new scene
        scenes.push(scene);
    	console.log("Added new scene " + scene.name);
        scene.OnEnter();
    }
    // Return current scene
    this.CurrScene = function (){
        return scenes[scenes.length-1];
    }

    this.Empty = function () {
    	return scenes.length == 0;
  	}

	this.Init = function()
	{
		// Init Input
		Input.Init();

		console.log("Game Initialize.");
	}

	this.Update = function(delta)
	{
		var scene = this.CurrScene();
		if(scene)
		{
			scene.Update(delta);
			Input.Clear();
		}
	}

	this.Draw = function()
	{	
		var scene = this.CurrScene();
		if(scene)
		{
			graph.Clear();
			scene.Draw();
		}
	}

	this.Quit = function()
	{
		// Clean Scenes

	}

	/*this.pauseScene = function (){
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
    }*/
}
