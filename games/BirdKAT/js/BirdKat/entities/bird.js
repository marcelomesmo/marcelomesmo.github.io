/*
	Our pretty much awesome BirdKat shooter.

*/
function Bird(imgName, sPosX, sPosY) {

	var image = loader.getFile(imgName);

	//var imageDead = loader.getFile("birdDead");

	var animFly = new Animation("birdFly", 47, 51, 300);
	var animOff = new Animation("birdOff", 47, 51, 300);

	var weapon = new Weapon();

	var dash = new Dash();
	var isDashing;
	var dashTime;

	// Absolute positions
	var startPosX, startPosY;
	var currPosX, currPosY;

	// CONST
	var JUMPSTREGHT = -2;
	var GRAVITY = 0.1;

	var velX;
	var velY;

	// Life time
	var isDead;
	var score;

	/*
		Init variables
	*/
	// Velocity
	this.velX = this.velY = 0;

	// Init positions
	this.startPosX = this.currPosX = sPosX;
	this.startPosY = this.currPosY = sPosY;

	// Size
	this.w = image.width;
	this.h = image.height;

	// Dash
	this.isDashing = false;
	this.dashTime = 0;

	// State
	this.isDead = false;
	this.score = 0;

	// Could handle this better with more time
	var boundingBox =
	{
		x: 0,
		y: 0,
		offsetX: 10,	//	Align box to the middle of image
		offsetY: 5,		//
		w: 25,
		h: 35
	}

	/*
		Update Bird speed and position
	*/
	this.Update = function(delta)
	{
		/*
			#### DASH POWER ####
		*/
		this.velX = 0;

		if(/*Touch.HasTouchSwipe(SWIPE.RIGHT) ||*/ Keyboard.IsKeyPressed(KEY.D))
		{
			this.Dash();
		}

		if(this.isDashing)
		{
			if(this.dashTime > 300) this.velX = -100;
		}

		this.currPosX += this.velX * delta/10;

		// Handle Dash and stop normal movement
		if(this.isDashing)
		{
			if(this.currPosX < this.startPosX) {
				this.currPosX = this.startPosX;
				this.isDashing = false;
				this.dashTime = 0;
	 		}

			this.dashTime += delta;
		}
		// Handle other movements
		else
		{
			/*
			#### JUMP&SHOOT POWER ####
			*/
			this.velY += GRAVITY;

			if(Mouse.IsMousePressed() || Touch.IsTouchPressed() || Keyboard.IsKeyPressed(KEY.SPACE))
			{
				this.Flap();
				this.Shoot();
			}

			this.currPosY += this.velY * delta/10;

		    /*
		    	#### DYING ####
		    */
			if(this.currPosY > graph.getHeight())
			{
				this.Dead();
			}

			/*
				#### HIT THE CEILING ####
			*/
			if(this.currPosY < 0)
			{
				this.currPosY = 0;
				this.Hover();
			}

			weapon.Update(delta);
		}

		dash.Update(delta);

		if(this.velY < 0) animFly.Update(delta);
		else animOff.Update(delta);

		// Bounding box
		boundingBox.x = this.currPosX + boundingBox.offsetX;
		boundingBox.y = this.currPosY + boundingBox.offsetY;
	}

	this.Draw = function ()
	{
		//graph.Draw(image, this.currPosX, this.currPosY);

		if(this.velY < 0) animFly.Draw(this.currPosX, this.currPosY);
		else animOff.Draw(this.currPosX, this.currPosY);

		weapon.Draw(10, 0);
		dash.Draw(10, 28);

		// Dash trail
		if(this.isDashing)
		{
			graph.setAlpha(0.2);
			graph.Draw(image, this.startPosX, this.currPosY);
			graph.Draw(image, this.startPosX+40, this.currPosY);
			graph.Draw(image, this.startPosX+80, this.currPosY);
			graph.Draw(image, this.startPosX+120, this.currPosY);
			graph.Draw(image, this.startPosX+160, this.currPosY);
			graph.setAlpha(1);
		}

		// Could replace this: spawn explosion, change animation, etc...
		//if(this.isDead) graph.draw(imageDead, graph.getWidth()/2 - imageDead.width/2, graph.getHeight()/2 - imageDead.height/2)

		// DEBUG MODE : BOUNDING BOX
		//if(DebugMode) graph.DrawRect(boundingBox.x, boundingBox.y, boundingBox.w, boundingBox.h);
	}


	this.Hover = function()
	{
		this.velY = 0;
	}

	this.Flap = function()
	{
		this.velY = JUMPSTREGHT;
		// SFX
		sfxJump.stop();
		sfxJump.play();
	}

	this.Dead = function()
	{
		if(!this.isDead)
		{
			// SFX
		   	sfxDie.stop();
		   	sfxDie.play();
		   	
		}
		this.isDead = true;

	}

	this.IsDead = function()
	{
		return this.isDead;
	}

	this.Rebirth = function()
	{
		this.velX = this.velY = 0;

		this.currPosX = this.startPosX;
		this.currPosY = this.startPosY;

		this.isDashing = false;
		this.dashTime = 0;

		dash.Reload();
		weapon.Reload();

	   	this.score = 0;
		this.isDead = false;
	}

	this.Dash = function()
	{
		if(dash.isAvailable())
		{
			this.isDashing = true;
			this.velX = dash.getPower();
			dash.Use();
		}
		// SFX
	   	sfxJump.stop();
	   	sfxJump.play();
	}
	this.IsDashing = function()
	{
		return this.isDashing;
	}

	this.Shoot = function()
	{
		weapon.Shoot(this.currPosX, this.currPosY);
	}

	this.getImage = function ()
	{
		return image;
	}

	this.getWidth = function()
	{
		return this.w;
	}

	this.getHeight = function()
	{
		return this.h;
	}

	this.checkCollision = function(p)
	{
		// Simple straight ahead collision check. 
        // Would create a separate collision(bird, pipe) if I had more time.
        // Reached pipe
        if(boundingBox.x + boundingBox.w > p.X() && !p.HasScored())
        {
            console.log("Cat at: "+ boundingBox.x + " " + boundingBox.y);
            // Is between pipes
            if(boundingBox.y > p.getTopY() + p.getHeight() && boundingBox.y + boundingBox.h < p.getBottomY())
            {
            	// cat ('')(*_*)('') this is a cat
            	//console.log("Is between pipes");
            }
            else
            {
            	//console.log("Touched pipe");
                // Isn't between pipes. 
                // Bird touched pipe.
                if(this.isDashing) p.DashKill();
            	else this.Dead();
                //return true;
            }
        }
        // Passed pipe and hasn't scored this pipe yet
        if( (boundingBox.x > p.X() + p.getWidth()) && !p.HasScored() )
        {
            // Score point
            this.Score();

            // Score pipe
            p.Score();
        }

        //return false;
	}

	this.checkWallCollision = function(w)
	{
		// Simple straight ahead collision check. 
        // Would create a separate collision(bird, wall) if I had more time.
        // Reached wall
        if(boundingBox.x + boundingBox.w > w.X())
        {
        	if(this.isDashing) w.DashKill();
            else this.Dead();

            //return true;
        }
        //return false;

        // Check bullet collissions
        // Avoid calling another method
        for(let b of weapon.getBullets())
		{
			if(b.X() + b.W() > w.X() && !b.HasHit())
			{
            	b.Hit();
                w.Damage();
			}
		}
	}

	this.checkBullets = function(p)
	{
		// Simple straight ahead collision check.
        // Would create a separate collision(obj, obj) if I had more time.

		for(let b of weapon.getBullets())
		{
			if(b.X() + b.W() > p.X() && !b.HasHit())
			{
	            if(b.Y() > p.getTopY() + p.getHeight() && b.Y() + b.H() < p.getBottomY())
	            {
	            	// cat ('')(*_*)('') this is a cat
	            }
	            else
	            {
	            	b.Hit();
	                p.Damage();
	            }
			}
		}
	}

	this.checkBossCollision = function(boss)
	{
		// Simple straight ahead collision check. 
        // Would create a separate collision(bird, wall) if I had more time.
        // Reached wall
        if(boundingBox.x < boss.X() + boss.getWidth())
        {
        	this.Dead();
            //return true;
        }
        //return false;
	}

	this.Score = function(s = 1)
	{
 		this.score += s;
	}
	this.getScore = function()
	{
		return this.score;
	}

	this.X = function()
	{
		return this.currPosX;
	}
	this.Y = function()
	{
		return this.currPosY;
	}
}