/*
	##########################
	Preload Manager
	##########################

	Preload Assets: Images and .

*/
function Preloader ()
{
	// Assets Container
	var gameImages = [];

	/*
		Preload Assets at Start.
	*/
	this.load = function(progressCallback) 
	{
		// Init variables	
	    var assetCount = Object.keys(imageList).length;
		var completedCount = 0;

		if(debugMode) console.log("Total assets: " + assetCount);	

		// Load all Assets from "resources.js: imageList" into container
		// Notes: Add a empty check later.
		for(let i = 0; i < assetCount; i++)
		{
			var path = Object.values(imageList)[i];
			var reference = Object.keys(imageList)[i];
			this.preloadImage(path, reference, function() 
		 	{
				completedCount++;
				progressCallback((100 / assetCount) * completedCount);
	    	});
		};
	}

	// Preload image callback
	this.preloadImage = function(path, reference, anImageLoadedCallback)
	{
		// Create Image
	    var anImage = new Image();
	    anImage.src = path;
	    anImage.name = reference;

	    // Add image to container
    	gameImages.push(anImage);
    	if(debugMode) console.log("Curr asset " + gameImages.length + " src: " + anImage.src + " named " + anImage.name);

    	// Handle Callback
	    anImage.onload = anImageLoadedCallback;
	}

	/*
		Get loaded image from container.
	*/
	this.getFile = function(name) 
	{
		// Find image
		for(let i = 0; i < gameImages.length; i++)
		{
			if(gameImages[i].name == name) 
			{
				return gameImages[i];
			}
		}

		// Notes: Add a better Exception hadling later.
		console.log("ERROR: Invalid asset name " + name);
		return;
	}
}