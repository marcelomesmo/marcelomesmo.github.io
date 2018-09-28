var KEY = {
    SPACE: 32,
    D: 68,
    P: 80,
    X: 88
}

function KeyboardController()
{
    var keyPressed = {
        SPACE: false,
        D: false,
        P: false,
        X: false
    };

    this.Init = function()
    {

        //graph.getCanvas().addEventListener('keydown', OnKeyDown);
        document.addEventListener("keydown", this.OnKeyDown);
        document.addEventListener("keyup", this.OnKeyUp);

        console.log("Keyboard Input Initialized.");
    }

    this.Clear = function()
    {
        keyPressed.SPACE = false;
        keyPressed.D = false;
        keyPressed.P = false;
        keyPressed.X = false;
    }

    this.IsKeyPressed = function(e)
    {
        // Could handle this better with more time
        if(e == KEY.SPACE)
        {
            return keyPressed.SPACE;
        }

        if(e == KEY.D)
        {
            return keyPressed.D;
        }

        if(e == KEY.P)
        {
            return keyPressed.P;
        }

        if(e == KEY.X)
        {
            return keyPressed.X;
        }

        return false;
    }

    this.OnKeyDown = function(e)
    {
        var keyCode = e.keyCode;
        
        if (keyCode == KEY.SPACE) {
            keyPressed.SPACE = true;
        }
        else if (keyCode == KEY.D) {
            keyPressed.D = true;
        }
        else if (keyCode == KEY.P) {
            keyPressed.P = true;
        }
        else if (keyCode == KEY.X) {
            keyPressed.X = true;
        }

        //console.log("Keyboard pressed: " + String.fromCharCode(e.keyCode));
    }

    this.OnKeyUp = function(e)
    {
        var keyCode = e.keyCode;

        if (keyCode == KEY.SPACE) {
            keyPressed.SPACE = false;
        }
        else if (keyCode == KEY.D) {
            keyPressed.D = false;
        }
        else if (keyCode == KEY.P) {
            keyPressed.P = false;
        }
        else if (keyCode == KEY.X) {
            keyPressed.X = false;
        }
        //console.log("Keyboard relased: " + String.fromCharCode(e.keyCode));
    }
}