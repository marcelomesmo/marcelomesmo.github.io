

/*
	This one is a mess. Please don't look.
*/
function ParallaxBg()
{
	var bg_front = new Image();
	bg_front = loader.getFile("bg_front");
	var frontX = 0;

	var bg_mid = new Image();
	bg_mid = loader.getFile("bg_mid");
	var midX = 0;

	var bg_far = new Image();
	bg_far = loader.getFile("bg_far");
	var farX = 0;

	var BG_SPEED = 0.05;

	var screen_height = graph.getHeight();

	this.Update = function(delta)
	{
		frontX -= BG_SPEED * delta;
		midX -= (BG_SPEED-0.005) * delta;
		farX -= (BG_SPEED-0.0009) * delta;

		if(frontX < -bg_front.width/3) frontX = 0;
		if(midX < -bg_mid.width/3) midX = 0;
		if(farX < -bg_far.width/3) farX = 0;
	}
	this.Draw = function ()
    {
    	graph.Draw(bg_far, farX, 0);
    	graph.Draw(bg_mid, midX, screen_height - bg_mid.height);
    	graph.Draw(bg_front, frontX, screen_height - bg_front.height);
    }

    this.Restart = function()
    {
    	frontX = 0;
    	midX = 0;
    	farX = 0;
    }
}