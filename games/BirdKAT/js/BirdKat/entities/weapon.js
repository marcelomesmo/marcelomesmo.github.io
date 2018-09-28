/*
    ##########################
    Player Weapon
    ##########################

    Shoots (pew pew pew).
*/
function Weapon() {

	// UI Image icon
	var image = loader.getFile("weapon");

	// UI Bar
	var barImage = new Animation("weaponBar", 72, 21, 500);
	
	var barWidth = 60;
	var barHeight = 10;

	// Charges
	var totalCharges = 10;
	var weaponCharges = 10;

	var reloadTime = 0;
	var RELOAD_CD = 700; //ms

	// Bullets
	var bullets = [];

	this.Update = function(delta)
	{
		reloadTime += delta;

		// Reload charges every RELOAD_CD ms
		if(reloadTime > RELOAD_CD) 
		{
			weaponCharges = 10;
			reloadTime = 0;
		}

		// Update Bullets
		for(let b of bullets)
        {
        	b.Update(delta);

        	if(b.HasHit()) 
            {
            	// Remove bullets that has run out of screen or hit a pipe
                var removeBullet = bullets.indexOf(b);
                bullets.splice(removeBullet, 1);
            }
        }

        // Update UI
		barImage.Update(delta);
	}

	this.Draw = function(x, y)
	{
		// Draw UI icon
		graph.Draw(image, x, y);

		// Draw UI Bar
		graph.setColor("#ed5259");
		graph.DrawRect(x + image.width + 10, y + 8, barWidth * weaponCharges/totalCharges, barHeight);
		graph.setColor("black");

		// Draw Bullets
		for(let b of bullets)
        {
        	b.Draw();
        }

        // Draw UI Bar effect when full
        if(weaponCharges == totalCharges) barImage.Draw(x + image.width+7, y+2);
	}

	this.Shoot = function(x, y)
	{
		// Shoot bullets if available
		if(weaponCharges > 0) 
		{
			weaponCharges--;

			reloadTime = 0;

			// Shoot 3 (three) bullets at a time
			var randomSpawn = Math.floor(Math.random() * (5 - (-5) +1)) + (-5);
			var b = new Bullet(x, y);
			bullets.push(b);
			var b = new Bullet(x+30 +randomSpawn, y+randomSpawn);
			bullets.push(b);
			var b = new Bullet(x+60 +randomSpawn, y+randomSpawn*2);
			bullets.push(b);

			// SFX
		   	sfxShoot.stop();
		   	sfxShoot.play();
		}
		else
		{
			// SFX
		   	//sfxNoBullets.stop();
		   	//sfxNoBullets.play();
		}
	}

	this.Reload = function()
	{
		weaponCharges = totalCharges;
	}

	/*
		UTIL
	*/
	this.getBullets = function()
	{
		return bullets;
	}

}