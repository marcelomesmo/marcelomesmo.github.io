function MouseController()
{
	// var X = 0;
	// var Y = 0;

	var mouseControl = {
		PRESSED: false,
		DOWN: false,
		RELEASED: false
	};

	//var mousepress = false;

	this.Init = function()
	{
	    graph.getCanvas().addEventListener("mousedown", this.OnMouseDown);
	    graph.getCanvas().addEventListener("mouseup", this.OnMouseUp);

	    console.log("Mouse Input Initialized.");
	}

	this.Clear = function()
	{
		// Clear mouse presses and releases
		mouseControl.PRESSED = false;
		mouseControl.RELEASED = false;
		// mouse DOWN only clean up when released
	}

	this.IsMouseDown = function()
	{
		return mouseControl.DOWN;
	}

	this.IsMousePressed = function()
	{
		return mouseControl.PRESSED;
	}

	this.IsMouseReleased = function()
	{
		return mouseControl.RELEASED;
	}

	this.OnMouseDown = function()
	{
		//$(graph.getCanvas()).trigger('mouseClick');
		mouseControl.PRESSED = true;
		mouseControl.DOWN = true;	
	}

	this.OnMouseUp = function() 
	{
		mouseControl.RELEASED = true;
		mouseControl.DOWN = false;
	}
}
