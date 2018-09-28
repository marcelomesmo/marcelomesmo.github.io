
function Dash() {

	var image = loader.getFile("dash");

	var barImage = new Animation("dashBar", 72, 21, 300);

	var totalCharges = 1;
	var dashCharges = 1;

	var barWidth = 60;
	var barHeight = 10;

	var power = 100;

	var reloadTime = 0;

	var RELOAD_CD = 3000; //ms

	this.Update = function(delta)
	{
		reloadTime += delta;

		if(reloadTime >= RELOAD_CD) 
		{
			dashCharges = 1;
			reloadTime = 0;
		}

		barImage.Update(delta);
	}

	this.Draw = function(x, y)
	{
		graph.Draw(image, x, y);

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