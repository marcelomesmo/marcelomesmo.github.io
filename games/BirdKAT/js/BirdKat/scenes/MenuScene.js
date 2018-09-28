

function MenuScene() {
    this.name = "Menu Scene";

    var bgMenu;
    
    var elapsedTime = 0;

    // Could encapsulate this if I had more time
    var fadeInProgress = 0; // Canvas GlobalAlpha [0 to 1]
    var startFade = false;
    var fadeIncrement = 0.003;

    this.Update = function (delta)
    {
        if(Mouse.IsMouseDown()) startFade = true;

        if(startFade) fadeInProgress += fadeIncrement * delta;

        if(fadeInProgress >= 1) 
        {
            fadeInProgress = 1;
            game.AddScene(new GameScene());
        }

        //console.log("Opacity " + fadeInProgress + " Fade progress " + fadeInProgress*100 + "% at delta "+ delta);

        //if(Keyboard.IsPressed(KEY.SPACE)); //

        //if(Keyboard.IsPressed(KEY.X)); //
    }

    this.Draw = function ()
    {
        graph.setAlpha(1);
        graph.Draw(bgMenu, 0, 0);

        if(startFade)
        {
            graph.setAlpha(fadeInProgress);
            graph.DrawRect(0, 0, graph.getWidth(), graph.getHeight());    
        }
        graph.setAlpha(1);
    }

    this.OnEnter = function()
    {
        bgMenu = loader.getFile("menu");

        musicMenu.play();
    }

    this.OnExit  = function()
    {

    }
}