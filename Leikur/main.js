let canvas = document.getElementById("c");
let ctx = canvas.getContext("2d");
ctx.font = "30px Arial";

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

let gravity = 0.01
//let img = document.getElementById("spaceship")

let keyState = {};

window.addEventListener('keydown',function(e){
    keyState[e.keyCode || e.which] = true;
},true);    
window.addEventListener('keyup',function(e){
    keyState[e.keyCode || e.which] = false;
},true);

function random(min,max) {
  var num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}

class Asteroid{
	constructor(x, y, velX, velY, size){
		this.x = x;
		this.y = y;
		this.velX = velX;
		this.velY = velY;
		this.Size = size;

	}
	update(){

	}

	draw(){
		ctx.beginPath();
		ctx.rect(this.x, this.y, this.Size, this.Size);
		ctx.stroke();
	}
}

class WinSquare{
	constructor(x){
		this.x = x;
		this.y = height - 5
		this.Size = 55;

	}
	draw(){
		ctx.beginPath();
		ctx.fillStyle = "red";
		ctx.fillRect(this.x, this.y, this.Size, 20);
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

class Spaceship{
	constructor(x, y){
		this.x = x;
		this.y = y
		this.velX = 0;
		this.velY = 0;
		this.Width = 30;
		this.Height = 60;
		this.speed = 0.1

		this.Boosters = [new Booster(this.x - 11, this.y + this.Height / 2, this.Height / 2, 10), new Booster(this.x + this.Width + 1, this.y + this.Height / 2, this.Height / 2, 10)]

		
		
	}

	event(){
	    if(keyState[65]) { // a
	      this.velX -= this.speed;
	    }  
	    if(keyState[68]) { // d
	      this.velX += this.speed;
	    }
	    if(keyState[87]) { // w
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
				this.velX -= 0.01;
			}

		}

		else if(this.velX < 0){
			if (this.velX + 0.01 > 0){
				this.velX = 0;
			}
			else{
				this.velX += 0.01;
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

    	//Left Booster
    	this.Boosters.forEach(function(booster){
    		booster.draw();
    	}) 

		//Right Booster
		
	}
}

function collision(obj1, obj2){
	
}

let winbox = null;
function loop(){
	ctx.fillStyle = 'rgba(255,255,255)';
  	ctx.fillRect(0,0,width,height);

  	ship.event();
	ship.update();
	ship.draw();

	as.draw();

	if (winbox == null){
		winbox = new WinSquare(random(0, width));

	}
	else{
		winbox.draw();
	}

	ctx.fillText("Speed: " + Math.abs(ship.velY.toFixed(2)), 0 , 30);

	requestAnimationFrame(loop);	
}


let ship = new Spaceship(width / 2, 200);
let as = new Asteroid(300, 300, 0, 0, 100)
loop();