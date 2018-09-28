

function Weapon() {

	var image = loader.getFile("weapon");

	var barImage = new Animation("weaponBar", 72, 21, 500);

	var totalCharges = 10;
	var weaponCharges = 10;

	var barWidth = 60;
	var barHeight = 10;

	var reloadTime = 0;

	var RELOAD_CD = 700; //ms

	var bullets = [];

	this.Update = function(delta)
	{
		reloadTime += delta;

		if(reloadTime > RELOAD_CD) 
		{
			weaponCharges = 10;
			reloadTime = 0;
		}

		for(let b of bullets)
        {
        	b.Update(delta);

        	if(b.HasHit()) 
            {
                var removeBullet = bullets.indexOf(b);
                //console.log("Should remove pipe "+ removePipe + " at " + p.X());
                bullets.splice(removeBullet, 1);
            }
        }

		barImage.Update(delta);
	}

	this.Draw = function(x, y)
	{
		graph.Draw(image, x, y);

		graph.setColor("#ed5259");
		graph.DrawRect(x + image.width + 10, y + 8, barWidth * weaponCharges/totalCharges, barHeight);
		graph.setColor("black");

		for(let b of bullets)
        {
        	b.Draw();
        }

        if(weaponCharges == totalCharges) barImage.Draw(x + image.width+7, y+2);
	}

	this.Shoot = function(x, y)
	{
		if(weaponCharges > 0) 
		{
			weaponCharges--;

			reloadTime = 0;

			var randomSpawn = Math.floor(Math.random() * (5 - (-5) +1)) + (-5);
			var b = new Bullet(x, y);
			bullets.push(b);
			var b = new Bullet(x+30 +randomSpawn, y+randomSpawn);
			bullets.push(b);
			var b = new Bullet(x+60 +randomSpawn, y+randomSpawn*2);
			bullets.push(b);

			// SFX
		   	sfxHit.stop();
		   	sfxHit.play();
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

	this.getBullets = function()
	{
		return bullets;
	}

}