/*
  ##########
  Touch
  ##########
  
  Touch Input.

*/
function TouchController()
{

  var startX = 0;
  var startY = 0
  var endX = 0;
  var endY = 0;

  // Handle touch TAP, HOLD and RELEASE
  var touchControl = {
    PRESSED: false,
    DOWN: false,
    RELEASED: false
  };
  // Notes: Need to change names

  this.Init = function()
  {
      graph.getCanvas().addEventListener("touchstart", OnTouchStart);
      graph.getCanvas().addEventListener("touchend", OnTouchEnd);

      if(debugMode) console.log("Touch Input Initialized.");
  }

  this.Clear = function()
  {
      // Clean touch presses and releases
      startX = 0;
      startY = 0;

      endX = 0;
      endY = 0;

      touchControl.PRESSED = false;
      touchControl.RELEASED = false;
      // Touch HOLD only clean up when released
  }

  // TOUCH TAP
  this.IsTouchPressed = function()
  {
      return touchControl.PRESSED;
  }
  // TOUCH HOLD
  this.IsTouching = function()
  {
      return touchControl.DOWN;
  }

  // CANVAS INPUT HANDLERS
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
