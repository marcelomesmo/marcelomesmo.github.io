/*
    ##########################
    Menu Scene
    ##########################

    Menu screen with title and controls.

*/
function MenuScene() {
    this.name = "Menu Scene";

    // Bg Image
    var bgMenu;
    
    var elapsedTime = 0;

    // Notes: Create a fader
    var fadeInProgress = 0; // Canvas GlobalAlpha [0 to 1]
    var startFade = false;
    var fadeIncrement = 0.003;

    this.Update = function (delta)
    {
        // Start Fade on click
        if(Mouse.IsMousePressed() || Touch.IsTouchPressed() || Keyboard.IsKeyPressed(KEY.SPACE)) startFade = true;

        // Run Fade
        if(startFade) fadeInProgress += fadeIncrement * delta;

        // On Fade Finished
        if(fadeInProgress >= 1) 
        {
            fadeInProgress = 1;
            game.AddScene(new GameScene()); // Go to next scene
        }
    }

    this.Draw = function ()
    {
        // Draw BG
        graph.setAlpha(1);
        graph.Draw(bgMenu, 0, 0);

        // Draw Fade
        if(startFade)
        {
            graph.setAlpha(fadeInProgress);
            graph.DrawRect(0, 0, graph.getWidth(), graph.getHeight());    
        }
        graph.setAlpha(1);
    }

    this.OnEnter = function()
    {
        // Load BG
        bgMenu = loader.getFile("menu");

        // Load Menu Music
        musicMenu.play();
    }

    this.OnExit  = function()
    {

    }
}