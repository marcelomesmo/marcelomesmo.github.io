/*
    ##########################
    Player
    ##########################

	Our pretty much awesome BirdKat shooter.
*/
function Bird(imgName, sPosX, sPosY) {

	// Image
	var image = loader.getFile(imgName);

	// Pop-up after Dead
	// Notes: Didn't had time to debug.
	// var imageDead = loader.getFile("birdDead");

	// Fly Animation
	var animFly = new Animation("birdFly", 47, 51, 300);
	// Falling Animation
	var animOff = new Animation("birdOff", 47, 51, 300);

	// Weapon
	var weapon = new Weapon();

	// Dash power
	var dash = new Dash();
	var isDashing;
	var dashTime;

	// Position & Movement
	var startPosX, startPosY;
	var currPosX, currPosY;

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

	// Notes: Will handle this better later.
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

		// Notes: Didn't had time to debug Touch.
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

			// Update Weapon
			weapon.Update(delta);
		}

		// Update Dash
		dash.Update(delta);

		// Update animations
		if(this.velY < 0) animFly.Update(delta);
		else animOff.Update(delta);

		// Update Bounding box
		boundingBox.x = this.currPosX + boundingBox.offsetX;
		boundingBox.y = this.currPosY + boundingBox.offsetY;
	}

	this.Draw = function ()
	{
		// Draw animations
		if(this.velY < 0) animFly.Draw(this.currPosX, this.currPosY);
		else animOff.Draw(this.currPosX, this.currPosY);

		// Draw Weapon UI icon
		weapon.Draw(10, 0);
		// Draw Dash UI icon
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

		// Notes: Didn't had time to finish. Could also replace this with player explosion, change animation, etc...
		//if(this.isDead) graph.draw(imageDead, graph.getWidth()/2 - imageDead.width/2, graph.getHeight()/2 - imageDead.height/2)

		if(debugMode) graph.DrawRect(boundingBox.x, boundingBox.y, boundingBox.w, boundingBox.h);
	}


	/*
		Stop moving on Y
	*/
	this.Hover = function()
	{
		this.velY = 0;
	}

	/*
		FLAP
	*/
	this.Flap = function()
	{
		this.velY = JUMPSTREGHT;
		// SFX
		sfxJump.stop();
		sfxJump.play();
	}

	/*
		Life time
	*/
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

	/*
		Dash Power
	*/
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

	/*
		Weapon Shoot
	*/
	this.Shoot = function()
	{
		weapon.Shoot(this.currPosX, this.currPosY);
	}

	/*
		COLLISIONS
	*/
	this.checkCollision = function(p)
	{
		// Simple straight ahead collision check. 
        // Notes: Create a separate collision(obj, obj) later.
       
        // Reached pipe
        if(boundingBox.x + boundingBox.w > p.X() && !p.HasScored())
        {
            console.log("Cat at: "+ boundingBox.x + " " + boundingBox.y);
            // Is between pipes
            if(boundingBox.y > p.getTopY() + p.getHeight() && boundingBox.y + boundingBox.h < p.getBottomY())
            {
            	// cat ('')(*_*)('') this is a cat
            }
            else
            {
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

            // Mark pipe as scored
            p.Score();
        }
        //return false;
	}

	this.checkWallCollision = function(w)
	{
		// Simple straight ahead collision check. 
        // Notes: Create a separate collision(obj, obj) later.
      
        // Reached wall
        if(boundingBox.x + boundingBox.w > w.X())
        {
        	// Destroy wall if dashing
        	if(this.isDashing) w.DashKill();
            else this.Dead();
            //return true;
        }
        //return false;

        // Check bullet collissions here to avoid calling another method for the wall
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
        // Notes: Create a separate collision(obj, obj) later.
      
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
	            	// Hit pipe
	            	// Mark bullet as hit
	            	b.Hit();
	            	// Damage pipe
	                p.Damage();
	            }
			}
		}
	}

	this.checkBossCollision = function(boss)
	{
		// Simple straight ahead collision check. 
        // Notes: Create a separate collision(obj, obj) later.
       
        // Collided with boss during an atack
        if(boundingBox.x < boss.X() + boss.getWidth())
        {
        	this.Dead();
            //return true;
        }
        //return false;
	}

	/*
		Score
	*/
	this.Score = function(s = 1)
	{
 		this.score += s;
	}
	this.getScore = function()
	{
		return this.score;
	}

	/*
		UTIL
	*/
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

	this.X = function()
	{
		return this.currPosX;
	}
	this.Y = function()
	{
		return this.currPosY;
	}
}