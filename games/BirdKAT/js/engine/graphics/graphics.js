var graph;

var localcanvas;
var context;

/* 

	Pixel perfect scale 

*/
// Target native resolution
var TARGET_WIDTH = 480;
var TARGET_HEIGHT = 270;

// Device resolution
var deviceWidth = window.innerWidth;  
var deviceHeight = window.innerHeight;
// DEBUG: No browser compatibility check

function Graphics()
{
	console.log("Graphics initialized.");

	localcanvas = document.getElementById("gamecanvas");
	localcanvas.width = TARGET_WIDTH;
	localcanvas.height = TARGET_HEIGHT;

	context = localcanvas.getContext("2d");

	this.Resize = function()
	{
		// Scale proportion
		var higherScale = Math.floor(Math.min(deviceWidth/TARGET_WIDTH, deviceHeight/TARGET_HEIGHT));
		// Gets the minimum widht/height proportion between native and device

		var newWidth, newHeight;
		newWidth = TARGET_WIDTH * higherScale;
		newHeight = TARGET_HEIGHT * higherScale;

		console.log("Device width: ", deviceWidth, " - Device height: ", deviceHeight);
		console.log("Target width: ", TARGET_WIDTH, " - Target height: ", TARGET_HEIGHT);
		console.log("Scale proportion: ", higherScale);
		console.log("New width: ", newWidth, " - New height: ", newHeight);

		localcanvas.style.width = newWidth + "px";
		localcanvas.style.height = newHeight + "px";

		// Center game
		var newX = (deviceWidth - newWidth) / 2;
		var newY = (deviceHeight - newHeight) / 2;

		localcanvas.style.padding = newY + "px " + newY + "px";

		// Disable smoothing to keep pixels pretty (yes, they are)
		context.imageSmoothingEnabled = false;

		/* 
				NOT USED

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

		context.imageSmoothingEnabled = false;
		*/
	}

	this.DrawText = function(text, x, y, color, font)
	{
		context.fillStyle = color;
    	context.font = font;
    	context.fillText(text,x,y);
	}

	this.setColor = function(color)
	{
		context.fillStyle = color;
	}

	this.setAlpha = function(a)
	{
		context.globalAlpha = a;
		context.fillStyle = "black";
	}

	this.Clear = function()
	{
		context.clearRect(0, 0, localcanvas.width, localcanvas.height);
	}

	this.DrawRect = function(x,y, w, h)
	{
		context.fillRect(x, y, w, h);
	}

	this.FillScreen = function(color)
	{
		context.fillStyle = color;
		context.fillRect(0, 0, localcanvas.width, localcanvas.height);
		context.fillStyle = "black";
	}

	this.Draw = function(img, x, y)
	{
		context.drawImage(img, x, y);
	}

	// Context drawImage
	/*
		sx	SpriteSheet x
		sy	SpriteSheet y
		sw	Sprite width
		sh	Sprite height
		dx	Target x
		dy	Target y
	*/
	// Could use the same Draw
	this.DrawAnimation = function(img, sx, sy, sw, sh, dx, dy)
	{
		// I am not allowing resizing for now. Target width and target height = sprite width and sprite height
		context.drawImage(img, sx, sy, sw, sh, dx, dy, sw, sh);
	}

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