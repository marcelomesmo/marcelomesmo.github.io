
function Bullet(x, y) {

	var image = loader.getFile("bullet");

	// Absolute positions
	var currPosX, currPosY;

	var BULLET_SPEED = Math.random() * (0.302 - 0.301) + (0.301);

	var w, h;

	// Life time
	var hasHit;

	/*
		Init variables
	*/
	// Velocity

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

	    /*
	    	#### DYING ####
	    */
		if(this.currPosX > graph.getWidth())
		{
			this.Hit();
		}
	}

	this.Draw = function ()
	{
		graph.Draw(image, this.currPosX, this.currPosY);

		// DEBUG BOX
		// graph.DrawRect(this.currPosX, this.currPosY, this.w, this.h);
	}

	this.HasHit = function()
	{
		return this.hasHit;
	}

	this.Hit = function()
	{
		this.hasHit = true;
	}

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
