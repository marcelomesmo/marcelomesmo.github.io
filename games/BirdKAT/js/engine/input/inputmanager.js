/*
	##########
	Input Manager
	##########
	
	Init Inputs: Mouse, Touch and Keyboard.

	Clear Inputs to refresh key/mouse/touch presses.
*/

var Mouse = new MouseController();

var Touch = new TouchController();

var Keyboard = new KeyboardController();

var Input = new InputManager();

function InputManager()
{
	this.Init = function()
	{
		Mouse.Init();
		Touch.Init();
		Keyboard.Init();
	}

	this.Clear = function()
	{
		Mouse.Clear();
		Touch.Clear();
		Keyboard.Clear();
	}
}