var graph;

/*
	##########################
	Graphics
	##########################

	Manage Game Canvas and Context.

	Handle Draw methods.

*/
function Graphics()
{
	// Game Canvas and Context
	var localcanvas;
	var context;
	
	// Target native resolution
	var TARGET_WIDTH = 480;
	var TARGET_HEIGHT = 270;

	// Device resolution
	var deviceWidth = window.innerWidth;  
	var deviceHeight = window.innerHeight;
	// Notes: No browser compatibility check

	if(debugMode) console.log("Graphics initialized.");

	// Init Canvas
	localcanvas = document.getElementById("gamecanvas");
	localcanvas.width = TARGET_WIDTH;
	localcanvas.height = TARGET_HEIGHT;
	// Init Context
	context = localcanvas.getContext("2d");

	/* 
		Pixel-perfect scale 

		Adjust size for larger screens.
	*/
	this.Resize = function()
	{
		// Scale proportion
		var higherScale = Math.floor(Math.min(deviceWidth/TARGET_WIDTH, deviceHeight/TARGET_HEIGHT));
		// Gets the minimum widht/height (integer) proportion between native and device

		var newWidth, newHeight;
		newWidth = TARGET_WIDTH * higherScale;
		newHeight = TARGET_HEIGHT * higherScale;
		// Find new res

		if(debugMode)
		{
			console.log("Device width: ", deviceWidth, " - Device height: ", deviceHeight);
			console.log("Target width: ", TARGET_WIDTH, " - Target height: ", TARGET_HEIGHT);
			console.log("Scale proportion: ", higherScale);
			console.log("New width: ", newWidth, " - New height: ", newHeight);	
		}

		// Adjust Canvas
		localcanvas.style.width = newWidth + "px";
		localcanvas.style.height = newHeight + "px";

		// Center Canvas
		var newX = (deviceWidth - newWidth) / 2;
		var newY = (deviceHeight - newHeight) / 2;

		localcanvas.style.padding = newY + "px " + newY + "px";

		// Disable smoothing to keep pixels pretty (yes, they are)
		context.imageSmoothingEnabled = false;

		/* 
			NOT USED

		Notes: Started doing a stretch approach but ended up not using it. Saving sketch for later reference.

		Stretch scale [not pixel perfect]

		// Scale for portrait
		if(targetHeight / targetWidth > deviceHeight / deviceWidth) // Game is "taller" than device
		{
			newWidth = deviceHeight * targetWidth / targetHeight;
			newHeight = deviceHeight;
		}
		// Scale for portrait (not used in this game)
		else
		{
			newWidth = deviceWidth;
			newHeight = deviceWidth * targetHeight / targetWidth;	
		}

		console.log("New width: ", newWidth, " - New height: ", newHeight);

		localcanvas.style.width = newWidth + "px";
		localcanvas.style.height = newHeight + "px";

		// Center game
		var newX = (deviceWidth - newWidth) / 2;
		var newY = (deviceHeight - newHeight) / 2;

		localcanvas.style.padding = newY + "px " + newY + "px";
		*/
	}

	/*
		Draw Methods
	*/
	// Draw Text on Screen
	this.DrawText = function(text, x, y, color, font)
	{
		context.fillStyle = color;
    	context.font = font;
    	context.fillText(text,x,y);
	}
	// Draw filled Rect
	this.DrawRect = function(x,y, w, h)
	{
		context.fillRect(x, y, w, h);
	}
	// Fill Screen with a colored Rect
	this.FillScreen = function(color)
	{
		context.fillStyle = color;
		context.fillRect(0, 0, localcanvas.width, localcanvas.height);
		context.fillStyle = "black";
	}
	// Draw images
	this.Draw = function(img, x, y)
	{
		context.drawImage(img, x, y);
	}
	// Draw Animations
	this.DrawAnimation = function(img, sx, sy, sw, sh, dx, dy)
	{
		/*	Reminder:
			sx	SpriteSheet x
			sy	SpriteSheet y
			sw	Sprite width
			sh	Sprite height
			dx	Target x
			dy	Target y
		*/
		// Notes: I am not allowing resizing for now. 
		// Target width and target height = sprite width and sprite height
		context.drawImage(img, sx, sy, sw, sh, dx, dy, sw, sh);
	}

	/*
		Change context Color
	*/
	this.setColor = function(color)
	{
		context.fillStyle = color;
	}

	/*
		Change context Alpha
	*/
	this.setAlpha = function(a)
	{
		context.globalAlpha = a;
		context.fillStyle = "black";
	}


	/*
		Clear screen.

		Used on game.js Draw()
	*/
	this.Clear = function()
	{
		context.clearRect(0, 0, localcanvas.width, localcanvas.height);
	}


	/*
		UTIL
	*/
	this.getHeight = function()
	{
		return localcanvas.height;
	}

	this.getWidth = function()
	{
		return localcanvas.width;
	}

	this.getCanvas = function()
	{
		return localcanvas;
	}
}