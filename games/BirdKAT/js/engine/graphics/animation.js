/*
	##########################
	Animations
	##########################

	Game Animations.

	Load SpriteSheet and handle animation Draw and Update.

	name  	SpriteSheet file name
	sW  	Sprite width
	sH  	Sprite Height
	d 		Duration (ms)
	l 		Loop (True by default)
*/
function Animation(name, sW, sH, d, l = true)
{
	/*
		Sprite Sheet
	*/
	// Image
	var image = new Image();
	image = loader.getFile(name);
	// Size
	var spriteWidth, spriteHeight;
	// Animation Update
	var frameIndex, numberOfFrames;
	var elapsedTime, duration;
	// Animation Loop
	var loop;

	/*
		Init variables
	*/
	this.spriteWidth = sW;
	this.spriteHeight = sH;

	this.loop = l;

	this.currFrame = 0;
	this.totalFrames = image.width / this.spriteWidth;
	this.elapsedTime = 0;
	this.duration = d;

	/*
		Update Animation
	*/
	this.Update = function(delta) 
	{
		this.elapsedTime += delta;
		
		// Go to the next frame
        if (this.elapsedTime > this.duration) { 
            // If the current frame index is in range
            if (this.currFrame < this.totalFrames - 1) this.currFrame += 1;
           	else if (this.loop) this.currFrame = 0;

            this.elapsedTime = 0;
        }
	}

	/*
		Draw Animation
	*/
	this.Draw = function(x, y)
	{
		// Gonna use Horizontal Strip sprite sheets to avoid calculating Y
		// Notes: Make this dynamic later and add vertical support.
		graph.DrawAnimation(image, 
			this.currFrame * this.spriteWidth, 0, 	// Sprite pos on Sprite Sheet
			this.spriteWidth, this.spriteHeight, 	// Sprite size
			x, y 									// Sprite pos on screen
		);
		// Notes: Not using Target sprite width and height 'cause it ain't supporting resize yet.
	}

}