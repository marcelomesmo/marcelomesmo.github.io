

function Boss() {

	// Position and Movement
	var currX;
	var currY;
	var velX;

	// Images
	var image = new Image();
	image = loader.getFile("boss");

	var tweenUp;

	var isAtacking;
	var retreat;

	/*
		Init variables
	*/
	this.currX = -image.width/2;
	this.currY = 0;
	
	this.velX = 0.1;

	this.tweenUp = false;

	this.isAtacking = false;
	this.retreat = false;

	this.Update = function(delta)
	{
        // Tween Boss image on screen
        if(!this.tweenUp) this.currY += (0.01) * delta;
        else this.currY -= (0.01) * delta;

        if(this.currY < -5) this.tweenUp = false;
        if(this.currY > 5) this.tweenUp = true;

        // Atack
        if(this.isAtacking) 
    	{
        	this.currX += this.velX * delta;

	        if(this.currX >= -5) 
	        {
	        	this.currX = -5;	// Cap movement
	        	this.isAtacking = false;
	        	this.retreat = true;
				image = loader.getFile("boss");
	        }
	    }

	    // Retreat
	    if(this.retreat)
	    {
        	this.currX -= (this.velX-0.05) * delta;
			
			if(this.currX <= -image.width/2) 
	        {
	        	this.currX = -image.width/2;	// Cap retreat
	        	this.retreat = false;
	        }
	    }
	}

	this.Restart = function()
	{
		this.currX = -image.width/2;
		this.currY = 0;
		
		this.velX = 0.1;

		this.tweenUp = false;

		this.isAtacking = false;
		this.retreat = false;
		image = loader.getFile("boss");
	}

	this.Draw = function()
	{
		graph.Draw(image, this.currX, this.currY);

		if(debugMode) graph.DrawRect(this.currX, this.currY, image.width, image.height);
	}

	this.IsAtacking = function()
	{
		return this.isAtacking;
	}

	this.Atack = function()
	{
		this.isAtacking = true;
	}

	this.Prepare = function()
	{
		image = loader.getFile("bossAtk");
	}

	this.X = function()
	{
		return this.currX;
	}

	this.getWidth = function()
	{
		return image.width;
	}
}