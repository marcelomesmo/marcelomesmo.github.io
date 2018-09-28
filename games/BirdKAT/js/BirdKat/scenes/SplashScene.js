/*
    ##########################
    Splash Scene
    ##########################

    Splash screen with company logo.

*/
function SplashScene() {
    this.name = "Splash Scene";

    // Splash Image
    var splashImage;
    var playOnce = true;    // Play sound once
    
    var elapsedTime = 0;

    // Notes: Create a fader
    var fadeInProgress = 0; // Canvas GlobalAlpha [0 to 1]
    var startFade = false;
    var fadeIncrement = 0.003;
    var FADE_START_TIME = 1500; //(ms)

    this.Update = function (delta)
    {
        elapsedTime += delta;

        // Play Splash sound
        // Notes: Noticed that user need to interact with screen first in order to play.
        if(elapsedTime > 600 && playOnce){
            sfxScore.stop();
            sfxScore.play();
            playOnce = false;
        } 

        // Start Fade
        if(elapsedTime > FADE_START_TIME) startFade = true;

        // Run Fade
        if(startFade) fadeInProgress += fadeIncrement * delta;

        // On Fade Finished
        if(fadeInProgress > 1) 
        {
            fadeInProgress = 1;
            game.AddScene(new MenuScene()); // Go to next Scene
        }
    }

    this.Draw = function ()
    {
        // Draw BG
        graph.setAlpha(1);
        graph.DrawRect(0,0, graph.getWidth(), graph.getHeight());

        // Draw Splash image
        if(elapsedTime > 300) graph.Draw(splashImage, graph.getWidth()/2 - splashImage.width/2, graph.getHeight()/2 - splashImage.height/2);

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
        // Load Splash Image
        splashImage = loader.getFile("splash");
    }

    this.OnExit  = function()
    {

    }
}