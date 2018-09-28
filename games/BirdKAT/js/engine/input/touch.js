function TouchController()
{
  var startX = 0;
  var startY = 0
  var endX = 0;
  var endY = 0;

  var touchControl = {
    PRESSED: false,
    DOWN: false,
    RELEASED: false
  };

  this.Init = function()
  {
      graph.getCanvas().addEventListener("touchstart", OnTouchStart);
      graph.getCanvas().addEventListener("touchend", OnTouchEnd);

      console.log("Touch Input Initialized.");
  }

  this.Clear = function()
  {
      startX = 0;
      startY = 0;

      endX = 0;
      endY = 0;

      touchControl.PRESSED = false;
      touchControl.RELEASED = false;
  }

  this.IsTouchPressed = function()
  {
      return touchControl.PRESSED;
  }

  this.IsTouching = function()
  {
      return touchControl.DOWN;
  }

  OnTouchStart = function()
  {
      // X = event.touchX;
      // Y = event.touchY;
      touchControl.PRESSED = true;
      touchControl.DOWN = true; 
  }

  OnTouchEnd = function() 
  {
      touchControl.RELEASED = true;
      touchControl.DOWN = false;
  }
}
