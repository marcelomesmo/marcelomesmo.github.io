

function Animation(name, sW, sH, d, l = true)
{
	var image = new Image();
	image = loader.getFile(name);

	// SpriteSheet
	var spriteWidth, spriteHeight;

	var frameIndex, numberOfFrames;
	var elapsedTime, duration;

	// Animation
	var loop;

	// Initialize
	this.spriteWidth = sW;
	this.spriteHeight = sH;

	this.loop = l;

	this.currFrame = 0;
	this.totalFrames = image.width / this.spriteWidth;
	this.elapsedTime = 0;
	this.duration = d;

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

	this.Draw = function(x, y)
	{
		// Draw animation
		// Gonna use Horizontal Strip sprite sheets to avoid calculating Y
		// Could make it dynamic if I had more time
		graph.DrawAnimation(image, 
			this.currFrame * this.spriteWidth, 0, 	// Sprite pos X and Y on Sprite Sheet
			this.spriteWidth, this.spriteHeight, 	// Sprite size
			x, y 									// Sprite pos on screen
		);
	}

}