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

  var swipeDir =
  {
    LEFT: false,
    RIGHT: false//,
    //UP: false,
    //DOWN: false
  };
  var MIN_SWIPE_TRAVEL = 100; // Minimun distance traveled
  var MAX_SWIPE_TRAVEL = 100; // Maximun distance in Y (check if vertical or horizontal)
  var travelTime = 0;
  //var MAX_TRAVEL_TIME = 500;

  // Handle touch TAP, HOLD and RELEASE
  var touchControl = {
    PRESSED: false,
    DOWN: false,
    RELEASED: false
  };
  // Notes: Need to change names

  this.Init = function()
  {
      graph.getCanvas().addEventListener("touchstart", function(e)
        {
            var touchPos = e.changedTouches[0];
            startX = touchPos.pageX;
            startY = touchPos.pageY;

            if(debugMode) console.log("touch " + startX + " " + startY);

            touchControl.PRESSED = true;
            touchControl.DOWN = true; 
        }
      );

      graph.getCanvas().addEventListener("touchend", function(e) 
        {
            var touchPos = e.changedTouches[0];
            endX = touchPos.pageX;
            endY = touchPos.pageY;

            if(debugMode) console.log("release " + endX + " " + endY);

            if (Math.abs(endX) >= MIN_SWIPE_TRAVEL && Math.abs(endY) <= MAX_SWIPE_TRAVEL)
            { 
              if(endX < 0) swipeDir.LEFT = true;
              else swipeDir.RIGHT = true;
            }

            touchControl.RELEASED = true;
            touchControl.DOWN = false;
        }
      );

      if(debugMode) console.log("Touch Input Initialized.");
  }

  this.Update = function(delta)
  {
      if(touchControl.DOWN) travelTime += delta;

      //if(travelTime >= MAX_TRAVEL_TIME) travelTime = 0;
  }

  this.Clear = function()
  {
      // Clean touch presses and releases
      startX = 0;
      startY = 0;

      endX = 0;
      endY = 0;

      swipeDir.RIGHT = false;
      travelTime = 0;

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
  /*OnTouchStart = function(e)
  {
      var touchPos = e.changedTouches[0];
      startX = touchPos.pageX;
      startY = touchPos.pageY;

      touchControl.PRESSED = true;
      touchControl.DOWN = true; 
  }

  OnTouchEnd = function(e) 
  {
      var touchPos = e.changedTouches[0];
      endX = touchPos.pageX;
      endY = touchPos.pageY;

      if (Math.abs(endX) >= MIN_SWIPE_TRAVEL && Math.abs(endY) <= MAX_SWIPE_TRAVEL)
      { 
        if(endX < 0) swipeDir.LEFT = true;
        else swipeDir.RIGHT = true;
      }

      touchControl.RELEASED = true;
      touchControl.DOWN = false;
  }*/
}
