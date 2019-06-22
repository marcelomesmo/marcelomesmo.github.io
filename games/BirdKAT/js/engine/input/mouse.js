/*
	##########
	Mouse
	##########
	
	Mouse Input.

*/
function MouseController()
{
	// Handle mouse PRESS, DOWN and RELEASE
	var mouseControl = {
		PRESSED: false,
		DOWN: false,
		RELEASED: false
	};

	this.Init = function()
	{
	    graph.getCanvas().addEventListener("mousedown", this.OnMouseDown);
	    graph.getCanvas().addEventListener("mouseup", this.OnMouseUp);

	    if(debugMode) console.log("Mouse Input Initialized.");
	}

	this.Clear = function()
	{
		// Clean mouse presses and releases
		mouseControl.PRESSED = false;
		mouseControl.RELEASED = false;
		// mouse DOWN only clean up when released
	}

	// MOUSE DOWN
	this.IsMouseDown = function()
	{
		return mouseControl.DOWN;
	}
	// MOUSE PRESSED
	this.IsMousePressed = function()
	{
		return mouseControl.PRESSED;
	}
	// MOUSE RELEASED
	this.IsMouseReleased = function()
	{
		return mouseControl.RELEASED;
	}

	// CANVAS INPUT HANDLERS
	this.OnMouseDown = function()
	{
		mouseControl.PRESSED = true;
		mouseControl.DOWN = true;	
	}

	this.OnMouseUp = function() 
	{
		mouseControl.RELEASED = true;
		mouseControl.DOWN = false;
	}
}
