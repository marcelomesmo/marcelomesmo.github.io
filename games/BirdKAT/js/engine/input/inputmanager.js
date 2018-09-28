var Mouse = new MouseController();

var Touch = new TouchController();

var Keyboard = new KeyboardController();

var Input = new InputManager();

// Just to encapsulate input
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