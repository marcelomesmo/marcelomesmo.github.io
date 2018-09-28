var gameImages = [];

function Preloader ()
{

	this.load = function(progressCallback) {
		// Initialise variables	
	    var assetCount = Object.keys(imageList).length;
		var completedCount = 0;
		// Count Assets
		//console.log("Total assets: " + assetCount);	

		for(let i = 0; i < assetCount; i++)
		{
			var path = Object.values(imageList)[i];
			var reference = Object.keys(imageList)[i];
			this.preloadImage(path, reference, function() 
		 	{
				completedCount++;
				//console.log("Asset loaded. Completion: " + (100 / assetCount) * completedCount);
				progressCallback((100 / assetCount) * completedCount);
	    	});
		};
	}


	this.preloadImage = function(path, reference, anImageLoadedCallback){
	    var anImage = new Image();
	    anImage.src = path;
	    anImage.name = reference;
	    	gameImages.push(anImage);
	    	console.log("Curr asset " + gameImages.length + " src: " + anImage.src + " named " + anImage.name);
	    anImage.onload = anImageLoadedCallback;
	}

	this.getFile = function(name) 
	{
		// Load images
		for(let i = 0; i < gameImages.length; i++)
		{
			if(gameImages[i].name == name) 
			{
				//console.log("File found: " + gameImages[i].name);
				return gameImages[i];
			}
		}

		console.log("Error: Invalid asset name " + name);
		return;
	}
}