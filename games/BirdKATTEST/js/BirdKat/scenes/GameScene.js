/*
    ##########################
    Game Scene
    ##########################

    Let's have some fun! :D

*/
function GameScene() {
    this.name = "Game Scene";

    // Bg image
    var bgGame;

    // Foreground fire effect
    var fire;
    var fireX = 0;
    var tweenLeft = true;

    // Warning animation
    var warningSign;
    var WARNING_SPAWN_TIME = 1500;

    // Player
	var bird;

    // Obstacles
    // Pipes
    var pipes = [];
    var pipeSpawnTime = 0;
    var PIPE_SPAWN_TIME = 1700;
    // Wall
    var wallHolder = [];
    var wallSpawnTime = 0;
    var WALL_SPAWN_TIME = 8000;
    var warningWall = false;
    // Boss
    var boss;
    var bossAtkTime = 0;
    var BOSS_ATK_TIME = 11000;
    var warningBoss = false;

    // Game
    var restartTime = 0;
    var RESPAWN_TIME = 1000; // ms

    // Score board image
    var scoreBoard;

    this.Update = function (delta)
    {
        // Turns DEBUG On and Off
        if(Keyboard.IsKeyPressed(KEY.P)) debugMode = !debugMode;

        /*
            Background Update
        */
        bgGame.Update(delta);

        /*
            Bird life-cycle management
        */
        if(bird.IsDead())
        {
            if(restartTime < RESPAWN_TIME) restartTime += delta;
            else 
            {
                // Clear pipes.
                pipes.splice(0, pipes.length); // Performance is almost the same as pipes.length = 0.
                pipeSpawnTime = 0; 
                
                // Clear walls.
                wallHolder.splice(0, wallHolder.length); 
                wallSpawnTime = 0;
                warningWall = false;
                
                // Restart boss.
                boss.Restart();
                bossAtkTime = 0;
                warningBoss = false;
                
                // Restart Player
                bird.Rebirth();
                
                // Restart Bg parallax
                bgGame.Restart();
                
                // Restart Game
                restartTime = 0;
                score = 0;

                musicGame.stop();
                musicGame.play();
            }
        }   
        else bird.Update(delta);

        if(bird.IsDashing()) pipeSpawnTime = 0;     // Stop pipes from spawning while dashing

        /*
            Boss life-cycle
        */
        if(bossAtkTime < BOSS_ATK_TIME) 
        {
            // Atack Player every BOSS_ATK_TIME ms
            bossAtkTime += delta;
            // Show WARNING
            if(bossAtkTime >= BOSS_ATK_TIME-WARNING_SPAWN_TIME)
            {
                // Boss prepares before atacking
                warningBoss = true;
                boss.Prepare();
            }
        }
        else {
            // Boss Atack
            boss.Atack();

            // Restart
            bossAtkTime = 0;
            warningBoss = false;
        }

        // BOSS Update
        boss.Update(delta);

        if(boss.IsAtacking() && !bird.IsDashing()) bird.checkBossCollision(boss); 
        // Player shall time his dash to avoid the boss atack.

        /*
            Wall life-cycle
        */
        if(wallSpawnTime < WALL_SPAWN_TIME) 
        {
            wallSpawnTime += delta;
            // Show WARNING
            if(wallSpawnTime >= WALL_SPAWN_TIME-WARNING_SPAWN_TIME) warningWall = true;
        }

        /*
            Pipe life-cycle management
        */
        if(pipeSpawnTime < PIPE_SPAWN_TIME) pipeSpawnTime += delta;
        else
        {
            // Create wall every WALL_SPAWN_TIME ms
            if(wallSpawnTime >= WALL_SPAWN_TIME) // Create wall instead of pipe
            {
                // Create wall
                var wall = new Wall();

                // Add to list
                wallHolder.push(wall);

                // Restart
                wallSpawnTime = 0;
                warningWall = false;
            }
            // Create pipe every PIPE_SPAWN_TIME ms
            else
            {
                // Create pipe line (top and bottom)
                var pipeLine = new Pipe();

                // Add to list
                pipes.push(pipeLine);
            }

            pipeSpawnTime = 0;
        }

        /*
            Wall Update
        */
        for(let w of wallHolder)
        {
            w.Update(delta);

            // Check Collision with Wall & Score & Bullets
            bird.checkWallCollision(w);

            // Clean Destroyed wall
            if(w.IsDead()) 
            {
                var removeWall = wallHolder.indexOf(w);
                wallHolder.splice(removeWall, 1);

                // Add Player score
                bird.Score(5);
            }
        }

        /*
            Pipe Update
        */
        for(let p of pipes)
        {
            p.Update(delta);

            // Check Collision with Pipes & Score
            bird.checkCollision(p);

            // Check Bullets
            bird.checkBullets(p);

            // Clean Out of Screen or Destroyed pipes
            if(p.IsOutScreen() || p.IsDead()) 
            {
                var removePipe = pipes.indexOf(p);
                pipes.splice(removePipe, 1);

                // Add Player score
                if(p.IsDead()) bird.Score();
            }
        }

        // Tween Fire image on screen
        if(!tweenLeft) fireX += (0.01) * delta;
        else fireX -= (0.01) * delta;

        if(fireX < -5) tweenLeft = false;
        if(fireX > 5) tweenLeft = true;

        // WARNING sign animation
        warningSign.Update(delta);
    }

    this.Draw = function ()
    {
        // Draw BG
        graph.FillScreen("#0095e9");
        bgGame.Draw();

        // Draw Pipes
        for(let p of pipes)
        {
            p.Draw();
        }
        // Draw Walls
        for(let w of wallHolder)
        {
            w.Draw();
        }

        // Draw Boss
        boss.Draw();

        // Draw Bird
        bird.Draw();

        // Draw Fire
        graph.Draw(fire, fireX, graph.getHeight() - fire.height);

        // Draw WARNING signs if triggered
        if(warningWall) warningSign.Draw(380, 30);
        if(warningBoss) warningSign.Draw(100, 30);

        // Draw Score Board & Score
        graph.Draw(scoreBoard, 170, 0);
        graph.DrawText(bird.getScore(), 180, 30, "white", "20px Verdana");
    }

    this.OnEnter = function()
    {
        // Start Game Music
        musicMenu.stop();
        musicGame.stop();
        musicGame.play();

        // Start Parallax BG
        bgGame = new ParallaxBg();

        // Create WARNING sign Animation
        warningSign = new Animation("warning", 64, 64, 300);

        // Create Score Board
        scoreBoard = new Image();
        scoreBoard = loader.getFile("scoreBoard");

        // Create Fire
        fire = new Image();
        fire = loader.getFile("fire");

        // Create Boss
        boss = new Boss();

        // Create Player
        bird = new Bird("bird", graph.getWidth() / 4, graph.getHeight() / 2);
    }

    this.OnExit  = function()
    {

    }
}