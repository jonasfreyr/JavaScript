let canvas = document.getElementById("c");
let ctx = canvas.getContext("2d");

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

let gravity = 0.01
//let img = document.getElementById("spaceship")

function random(min,max) {
  var num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}

class Spaceship{
	constructor(x, y){
		this.x = x;
		this.y = y
		this.velX = 0;
		this.velY = 0;
		this.Width = 30;
		this.Height = 60;
		this.speed = 1
	}

	event(){
	  let _this = this;
	  window.onkeydown = function(e) {
	    if(e.keyCode === 65) { // a
	      _this.velX -= _this.speed;
	    } else if(e.keyCode === 68) { // d
	      _this.velX += _this.speed;
	    } else if(e.keyCode === 87) { // w
	      _this.velY -= _this.speed;
	    } 
	  };
	}

	update(){
		this.velY += gravity;



		if (this.y + this.velY + this.Height < height){
			this.y += this.velY;
		}
		else{
			this.y = height - this.Height;
			this.velY = 0
		}

		this.x += this.velX;
	}

	draw(){
		ctx.beginPath();
		//ctx.drawImage(this.img, this.x, this.y, this.Width, this.Height);
		ctx.rect(this.x, this.y, this.Width, this.Height)
		ctx.stroke();
	}
}


function loop(){
	ctx.fillStyle = 'rgba(255,255,255)';
  	ctx.fillRect(0,0,width,height);

	ship.update();
	ship.draw();

	requestAnimationFrame(loop);	
}


let ship = new Spaceship(width / 2, 0);
ship.event();
loop(); 