let canvas = document.getElementById("c");
let ctx = canvas.getContext("2d");

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



class Spaceship{
	constructor(x, y){
		this.x = x;
		this.y = y
		this.velX = 0;
		this.velY = 0;
		this.Width = 30;
		this.Height = 60;
		this.speed = 0.1
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
	    } 
	}

	update(){
		this.velY += gravity;

		console.log(this.velX)

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
			this.velX += 0.01;
		}


		if (this.y + this.velY + this.Height < height){
			this.y += this.velY;
		}
		else{
			this.y = height - this.Height;
			this.velY = 0;
		}

		this.x += this.velX;
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
    	ctx.beginPath();
		ctx.rect(this.x - 11, this.y + this.Height / 2, 10, this.Height / 2)
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(this.x - 11, this.y + this.Height / 2);
		ctx.lineTo(this.x - 5, this.y + 15);
		ctx.lineTo(this.x, this.y + this.Height / 2);
		ctx.stroke();

		//Right Booster
		ctx.beginPath();
		ctx.rect(this.x + this.Width + 1, this.y + this.Height / 2, 10, this.Height / 2)
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(this.x + this.Width + 1, this.y + this.Height / 2);
		ctx.lineTo(this.x + this.Width + 6, this.y + 15);
		ctx.lineTo(this.x + this.Width + 11, this.y + this.Height / 2);
		ctx.stroke();
	}
}


function loop(){
	ctx.fillStyle = 'rgba(255,255,255)';
  	ctx.fillRect(0,0,width,height);

  	ship.event();
	ship.update();
	ship.draw();

	requestAnimationFrame(loop);	
}


let ship = new Spaceship(width / 2, 0);
loop(); 