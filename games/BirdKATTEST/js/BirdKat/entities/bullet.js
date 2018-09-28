/*
    ##########################
    Bullets
    ##########################

    Bullets used by the Player weapon.
*/
function Bullet(x, y) {

	// Image
	var image = loader.getFile("bullet");
	var w, h;

	// Movement
	var currPosX, currPosY;
	var BULLET_SPEED = Math.random() * (0.302 - 0.301) + (0.301);

	// Life time
	var hasHit;

	/*
		Init variables
	*/
	// Init positions
	this.currPosX = x;
	this.currPosY = y;

	// Size
	this.w = image.width;
	this.h = image.height;

	// State
	this.hasHit = false;

	/*
		Update Bullet
	*/
	this.Update = function(delta)
	{
		this.currPosX += BULLET_SPEED * delta;

	    // Remove bullets out of screen
		if(this.currPosX > graph.getWidth())
		{
			this.Hit();
		}
	}

	this.Draw = function ()
	{
		graph.Draw(image, this.currPosX, this.currPosY);

		// DEBUG BOX
		if(debugMode) graph.DrawRect(this.currPosX, this.currPosY, this.w, this.h);
	}

	/*
		Check if already hit
	*/
	this.HasHit = function()
	{
		return this.hasHit;
	}

	this.Hit = function()
	{
		this.hasHit = true;
	}

	/*
		UTIL
	*/
	this.X = function()
	{
		return this.currPosX;
	}

	this.Y = function()
	{
		return this.currPosY;
	}
	this.W = function()
	{
		return this.w;
	}
	this.H = function()
	{
		return this.h;
	}
}
