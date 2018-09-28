

function GameScene() {
    this.name = "Game Scene";

    // Bg
    var bgGame;
    // Foreground fire effect
    var fire;
    var fireX = 0;
    var tweenLeft = true;

    // Warning
    var warningSign;
    var WARNING_SPAWN_TIME = 1500;

    // Objects
	var bird;

    var pipes = [];
    var pipeSpawnTime = 0;
    var PIPE_SPAWN_TIME = 1700;

    var wallHolder = [];
    var wallSpawnTime = 0;
    var WALL_SPAWN_TIME = 8000;
    var warningWall = false;

    var boss;
    var bossAtkTime = 0;
    var BOSS_ATK_TIME = 11000;
    var warningBoss = false;

    // Game
    var restartTime = 0;
    var RESPAWN_TIME = 1000; // ms
    var scoreBoard;

    this.Update = function (delta)
    {
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
                pipes.splice(0, pipes.length);    // Clear pipes. Performance is almost the same as pipes.length = 0.
                pipeSpawnTime = 0; 
                
                wallHolder.splice(0, wallHolder.length);    // Clear walls.
                wallSpawnTime = 0;
                warningWall = false;
                
                boss.Restart();
                bossAtkTime = 0;
                warningBoss = false;
                
                bird.Rebirth();
                
                bgGame.Restart();
                
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
            bossAtkTime += delta;
            if(bossAtkTime >= BOSS_ATK_TIME-WARNING_SPAWN_TIME)
            {
                warningBoss = true;
                boss.Prepare();
            }
        }
        else {
            boss.Atack();

            bossAtkTime = 0;
            warningBoss = false;
        }

        boss.Update(delta);

        if(boss.IsAtacking() && !bird.IsDashing()) bird.checkBossCollision(boss);

        /*
            Wall life-cycle
        */
        if(wallSpawnTime < WALL_SPAWN_TIME) 
        {
            wallSpawnTime += delta;
            if(wallSpawnTime >= WALL_SPAWN_TIME-WARNING_SPAWN_TIME) warningWall = true;
        }

        /*
            Pipe life-cycle management
        */
        if(pipeSpawnTime < PIPE_SPAWN_TIME) pipeSpawnTime += delta;
        else
        {
            // Create wall instead of pipe
            if(wallSpawnTime >= WALL_SPAWN_TIME) 
            {
                // Create wall
                var wall = new Wall();

                // Add to list
                wallHolder.push(wall);

                wallSpawnTime = 0;
                warningWall = false;
            }
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

            // Check Dead & Score & Bullets
            bird.checkWallCollision(w);

            // Clean Destroyed wall
            if(w.IsDead()) 
            {
                var removeWall = wallHolder.indexOf(w);
                wallHolder.splice(removeWall, 1);

                bird.Score(5);
            }
        }


        /*
            Pipe Update
        */
        for(let p of pipes)
        {
            p.Update(delta);
            //console.log("Pipe smoke " + pipes.indexOf(p) + " at " + p.X() + "x " + p.Y() + "y");

            // Check Dead & Score
            bird.checkCollision(p);

            // Check bullet colision
            bird.checkBullets(p);

            // Clean Out of Screen or Destroyed pipe
            if(p.IsOutScreen() || p.IsDead()) 
            {
                var removePipe = pipes.indexOf(p);
                //console.log("Should remove pipe "+ removePipe + " at " + p.X());
                pipes.splice(removePipe, 1);

                if(p.IsDead()) bird.Score();
            }
        }

        // Tween Fire image on screen
        if(!tweenLeft) fireX += (0.01) * delta;
        else fireX -= (0.01) * delta;

        if(fireX < -5) tweenLeft = false;
        if(fireX > 5) tweenLeft = true;

        // Warning sign animation
        warningSign.Update(delta);
    }

    this.Draw = function ()
    {
        graph.FillScreen("#0095e9");
        bgGame.Draw();

        for(let p of pipes)
        {
            p.Draw();
        }
        for(let w of wallHolder)
        {
            w.Draw();
        }

        boss.Draw();

        bird.Draw();

        graph.Draw(fire, fireX, graph.getHeight() - fire.height);

        if(warningWall) warningSign.Draw(380, 30);
        if(warningBoss) warningSign.Draw(100, 30);

        graph.Draw(scoreBoard, 170, 0);
        graph.DrawText(bird.getScore(), 180, 30, "white", "20px Verdana");
    }

    this.OnEnter = function()
    {
        musicMenu.stop();
        musicGame.stop();
        musicGame.play();

        bgGame = new ParallaxBg();

        warningSign = new Animation("warning", 64, 64, 300);
        //warningSign = loader.getFile("warning-sheet");

        scoreBoard = new Image();
        scoreBoard = loader.getFile("scoreBoard");

        fire = new Image();
        fire = loader.getFile("fire");

        boss = new Boss();

        bird = new Bird("bird", graph.getWidth() / 4, graph.getHeight() / 2);


    }

    this.OnExit  = function()
    {

    }
}