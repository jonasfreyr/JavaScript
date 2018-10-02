let canvas = document.getElementById("c");
let ctx = canvas.getContext("2d");
ctx.font = "30px Arial";

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

window.addEventListener('keydown',function(e){
    keyState[e.keyCode || e.which] = true;
},true);    
window.addEventListener('keyup',function(e){
    keyState[e.keyCode || e.which] = false;
},true);

let speed_per_booster = 0.05;
let gravity = 0.02
//let img = document.getElementById("spaceship")

let keyState = {};
let asteroids, booms, ship, repairbox;


function random(min,max) {
  var num = Math.random()*(max-min) + min;
  return num;
}
class Rect{
	constructor(x, y, Width, Height){
		this.x = x;
		this.y = y;
		this.Width = Width;
		this.Height = Height;
	}
}

let screen = new Rect(0, 0, width, height);
let bottom = new Rect(0, height, width, 1);

class Asteroid{
	constructor(x, y, velX, velY, width, height){
		this.x = x;
		this.y = y;
		this.velX = velX;
		this.velY = velY;
		this.Width = width;
		this.Height = height;
		this.date = new Date();

	}
	update(){
		this.x += this.velX;
		this.y += this.velY;
	}

	draw(){
		ctx.beginPath();
		ctx.rect(this.x, this.y, this.Width, this.Height);
		ctx.stroke();
	}
}

class RepairSquare{
	constructor(x){
		this.x = x;
		this.y = height - 5;
		this.Width = 55;
		this.Height = 20;

	}
	draw(){
		ctx.beginPath();
		ctx.fillStyle = "red";
		ctx.fillRect(this.x, this.y, this.Width, this.Height);
	}
}

class Booster{
	constructor(x, y, height, width){
		this.x = x;
		this.y = y;
		this.Height = height;
		this.Width = width;
	}
	draw(){
		ctx.beginPath();
		ctx.rect(this.x, this.y, this.Width, this.Height)
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(this.x, this.y);
		ctx.lineTo(this.x + 5, this.y - 15);
		ctx.lineTo(this.x + this.Width, this.y);
		ctx.stroke();
	}
	drawFlames(){
		ctx.beginPath();
		ctx.moveTo(this.x, this.y + this.Height);
		ctx.lineTo(this.x + 5, this.y + this.Height + 5);
		ctx.lineTo(this.x + this.Width, this.y + this.Height);
		ctx.stroke();

	}
}
class Boom{
	constructor(x, y, size){
		this.x = x;
		this.y = y;
		this.Size = size;
		this.trans = 1;
		
	}
	draw(){
		this.trans -= 0.01 
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.Size, 0, 2*Math.PI);
		let strengur = "rgba(255,69,0," + this.trans + ")"
		ctx.fillStyle = strengur;
		ctx.fill();
	}
}

class Spaceship{
	constructor(x, y, keys){
		this.x = x;
		this.y = y
		this.velX = 0;
		this.velY = 0;
		this.Width = 30;
		this.Height = 60;
		this.keys = keys

		this.Boosters = [new Booster(this.x - 11, this.y + this.Height / 2, this.Height / 2, 10), new Booster(this.x + this.Width + 1, this.y + this.Height / 2, this.Height / 2, 10)]

		let speed = 0;
		this.Boosters.forEach(function(){
			speed += speed_per_booster;
			console.log(speed);
		})
		this.speed = speed;
		
	}

	event(){
	    if(keyState[this.keys["right"]]) { // a
	      this.velX += this.speed;
	    }  
	    if(keyState[this.keys["left"]]) { // d
	      this.velX -= this.speed;
	    }
	    if(keyState[this.keys["up"]]) { // w
	      this.velY -= this.speed;
	      this.Boosters.forEach(function(booster){
	      	booster.drawFlames();
	      })
	    } 
	}

	update(){
		this.velY += gravity;

		if (this.velX > 0){
			if (this.velX - 0.01 < 0){
				this.velX = 0;
			}
			else{
				this.velX -= gravity;
			}

		}

		else if(this.velX < 0){
			if (this.velX + 0.01 > 0){
				this.velX = 0;
			}
			else{
				this.velX += gravity;
			}
		}

		this.x += this.velX;

		let _this_velX = this.velX;
		let _this_velY = this.velY
		this.Boosters.forEach(function(booster){
			booster.x += _this_velX;

			if (booster.y + _this_velY + booster.Height < height){
				booster.y += _this_velY;
			}
			else{
				
				booster.y = height - booster.Height
			}
			
		})

		if (this.y + this.velY + this.Height < height){
			this.y += this.velY;
		}
		else{
			this.y = height - this.Height;
			this.velY = 0;
		}


	}


	draw(){
		//ctx.drawImage(this.img, this.x, this.y, this.Width, this.Height);

		//Drawing Ship
		ctx.beginPath();
		ctx.rect(this.x, this.y, this.Width, this.Height)
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(this.x, this.y);
		ctx.lineTo(this.x + this.Width / 2, this.y - 40);
    	ctx.lineTo(this.x + this.Width, this.y);
    	ctx.stroke();

    	ctx.beginPath();
    	ctx.arc(this.x + this.Width / 2, this.y + 40, 4, 0, 2*Math.PI)
    	ctx.stroke();

    	ctx.beginPath();
    	ctx.arc(this.x + this.Width / 2, this.y + 20, 4, 0, 2*Math.PI)
    	ctx.stroke();

    	//Drawing Boosters
    	this.Boosters.forEach(function(booster){
    		booster.draw();
    	}) 
		
	}
}

function collision(rect1, rect2){
	if (rect1.x < rect2.x + rect2.Width &&
   rect1.x + rect1.Width > rect2.x &&
   rect1.y < rect2.y + rect2.Height &&
   rect1.Height + rect1.y > rect2.y){
		return true;

	}
	else{
		return false;
	}
}

function new_astroid(){
let side = Math.floor(random(1,4));
if (side === 1){
// x, y, velX, velY, width, height
asteroids.push(new Asteroid(-random(50, 300), random(0, height), random(1, 3), random(-3, 3), 50, 50));
}
else if (side === 2){
asteroids.push(new Asteroid(random(0, width), -random(50, 300), random(-3, 3), random(1, 3), 50, 50));
}
else if (side === 3){
asteroids.push(new Asteroid(random(width + 50, width + 300), random(0, height), random(-3, -1), random(-3, 3), 50, 50));}
}

let winbox = null;
function loop(){
	ctx.fillStyle = 'rgba(255,255,255)';
  	ctx.fillRect(0,0,width,height);

  	repairbox.draw();

  
  	spaceships.forEach(function(ship){
  		ship.event();
		ship.update();
		ship.draw();

		ctx.fillText("Horizontal Speed: " + Math.abs(ship.velY.toFixed(2)), 0 , 30);
		ctx.fillText("Vertical Speed: " + Math.abs(ship.velX.toFixed(2)), 0 , 40);
  	});
  	

	
	
	asteroids.forEach(function(asteroid, index){
		asteroid.update();
		asteroid.draw();

		let date = new Date();
		if (!collision(asteroid, screen) && date - asteroid.date > 10000){
			asteroids.splice(index, 1);

		}

		if (collision(asteroid, bottom)){
			booms.push(new Boom(asteroid.x + asteroid.Width / 2, asteroid.y + asteroid.Height, 40))
			asteroids.splice(index, 1)
		}

	})

	booms.forEach(function(boom, index){
		if (boom.trans <= 0){
			booms.splice(index, 1)
		
		}
		else{
			boom.draw();
		}
	})

	if (1 == 0){
	asteroids.forEach(function(asteroid, index){
		asteroids.forEach(function(asteroid2, index2){
			if (collision(asteroid, asteroid2) && asteroid != asteroid2){
				booms.push(new Boom(asteroid.x + asteroid.Width / 2, asteroid.y + asteroid.Height / 2, 40));
				booms.push(new Boom(asteroid2.x + asteroid.Width / 2, asteroid2.y + asteroid2.Height / 2, 40));

				asteroids.splice(index, 1);

				del = asteroids.indexOf(asteroid2);
				asteroids.splice(del, 1);
			}
		});
	});
}
	spaceships.forEach(function(ship){
		if (collision(repairbox, ship)){
		console.log("yuo ween!");
	}
	});
	

	spaceships.forEach(function(ship){
		ship.Boosters.forEach(function(booster, index){
			asteroids.forEach(function(asteroid, index2){
				if (collision(booster, asteroid)){
					ship.Boosters.splice(index, 1);
					ship.speed -= speed_per_booster;
					booms.push(new Boom(booster.x, booster.y, 30))
					booms.push(new Boom(asteroid.x + asteroid.Width / 2, asteroid.y + asteroid.Height / 2, 40))

					asteroids.splice(index2, 1)

				}

			});
		
		});
	});
	


	for (let a in asteroids){
		for (let b in spaceships){
			if (collision(spaceships[b], asteroids[a])){
				booms.push(new Boom(spaceships[b].x, spaceships[b].y, 50))
				booms.push(new Boom(asteroids[a].x + asteroids[a].Width / 2, asteroids[a].y + asteroids[a].Height / 2, 40))

				asteroids.splice(a, 1);
				spaceships.splice(b, 1)
			}
		}
	}
	
	console.log(keyState);
	if (keyState[82]){
		New();
	}
	requestAnimationFrame(loop);	
}

function New(){
	spaceships = []
	repairbox = new RepairSquare(random(0, width - 55))

	spaceships.push(new Spaceship(repairbox.x, height, {"left": 65, "right": 68, "up": 87}));
	spaceships.push(new Spaceship(repairbox.x , height, {"left": 37, "right": 39, "up": 38}));

	asteroids = [];
	booms = [];

}

//asteroids.push(new Asteroid(300, 300, 0, 0, 50, 50))
New()
setInterval(new_astroid, 100);
loop(); 