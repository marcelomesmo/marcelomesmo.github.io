
// NOT USED

function Sprite(source)
{
	var spriteimage = new Image();
	spriteimage.src = source;

	var width, height;

	this.width = spriteimage.width;
	this.height = spriteimage.height;
	
	this.Draw = function(x, y)
	{
		graph.Draw(spriteimage, x, y);
	}

	this.getImage = function()
	{
		return spriteimage;
	}

	this.getSpriteWidth = function()
	{
		return this.width;
	}

	this.getSpriteHeight = function()
	{
		return this.height;
	}
}
