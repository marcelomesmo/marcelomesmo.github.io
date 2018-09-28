

function Wall() {

	// Position and Movement
	var currX;
	var velX;

	// Images
	var image = new Image();
	image = loader.getFile("wall");

	// Life time
	var outScreen;
	var hitpoints;

	/*
		Init variables
	*/
	this.currX = graph.getWidth();
	
	this.velX = -0.1;
	
	this.outScreen = false;
	this.hitpoints = 30;

	this.Update = function(delta)
	{
		this.currX += this.velX * delta;

		if(this.currX < -100) this.outScreen = true;
	}

	this.Draw = function()
	{
		graph.Draw(image, this.currX, 0);
	}

	this.IsDead = function()
	{
		if(this.hitpoints <= 0) return true;
		return false;
	}
	
	this.IsOutScreen = function()
	{
		return this.outScreen;
	}

	this.Damage = function()
	{
		this.hitpoints--;
	}

	this.DashKill = function()
	{
		this.hitpoints = 0;
	}

	this.Score = function()
	{
		this.hasScored = true;
	}

	this.HasScored = function()
	{
		return this.hasScored;
	}

	this.X = function()
	{
		return this.currX;
	}
}