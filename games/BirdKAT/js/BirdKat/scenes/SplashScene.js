

function SplashScene() {
    this.name = "Splash Scene";

    var splashImage;
    var playOnce = true;
    
    var elapsedTime = 0;

    // Could encapsulate this if I had more time
    var fadeInProgress = 0; // Canvas GlobalAlpha [0 to 1]
    var startFade = false;
    var fadeIncrement = 0.003;

    this.Update = function (delta)
    {
        elapsedTime += delta;

        if(elapsedTime > 600 && playOnce){
            sfxScore.stop();
            sfxScore.play();
            playOnce = false;
        } 

        if(elapsedTime > 1500) startFade = true;

        if(startFade) fadeInProgress += fadeIncrement * delta;

        if(fadeInProgress > 1) 
        {
            fadeInProgress = 1;
            game.AddScene(new MenuScene());
        }
    }

    this.Draw = function ()
    {
        graph.setAlpha(1);
        graph.DrawRect(0,0, graph.getWidth(), graph.getHeight());
        if(elapsedTime > 300) graph.Draw(splashImage, graph.getWidth()/2 - splashImage.width/2, graph.getHeight()/2 - splashImage.height/2);

        if(startFade)
        {
            graph.setAlpha(fadeInProgress);
            graph.DrawRect(0, 0, graph.getWidth(), graph.getHeight());    
        }
        graph.setAlpha(1);
    }

    this.OnEnter = function()
    {
        splashImage = loader.getFile("splash");
    }

    this.OnExit  = function()
    {

    }
}