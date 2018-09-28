/*
    ##########################
    Dash power
    ##########################

    Player Dash.
*/
function Dash() {

	// UI Image icon
	var image = loader.getFile("dash");

	// UI Bar
	var barImage = new Animation("dashBar", 72, 21, 300);

	var barWidth = 60;
	var barHeight = 10;

	// Charges
	var totalCharges = 1;
	var dashCharges = 1;

	var reloadTime = 0;
	var RELOAD_CD = 3000; //ms

	// Movement
	var power = 100;

	this.Update = function(delta)
	{
		reloadTime += delta;

		// Reload charges every RELOAD_CD ms
		if(reloadTime >= RELOAD_CD) 
		{
			dashCharges = 1;
			reloadTime = 0;
		}

		// Update UI
		barImage.Update(delta);
	}

	this.Draw = function(x, y)
	{
		// Draw UI icon
		graph.Draw(image, x, y);

		// Draw UI Bar
		graph.setColor("#41f3fc");
		if(dashCharges == totalCharges) 
		{
			graph.DrawRect(x + image.width + 10, y+8, barWidth, barHeight);

			barImage.Draw(x + image.width + 4, y+2);
		}
		else graph.DrawRect(x + image.width + 10, y+8, barWidth * reloadTime/RELOAD_CD, barHeight);
		graph.setColor("black");
	}

	this.isAvailable = function()
	{
		if(dashCharges > 0) return true;
	}

	this.Use = function()
	{
		// Use dash if available
		if(dashCharges > 0) dashCharges--;

		reloadTime = 0;
	}

	this.Reload = function()
	{
		dashCharges = totalCharges;
	}

	this.getPower = function()
	{
		return power;
	}
}