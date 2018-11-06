var x;
var y;
var w =screen.width;
var h = screen.height - 140;
var count;
var to;

function setup() {
  createCanvas(w,h,WEBGL);
  background(0);
  this.count = 0;
  to = new tor();
  x = 30;
  y = 120;
  to.createnew();
}

function draw() {
  background(0);
  to.update();
}
function tor(){
	this.x = 1;
	this.y = 1;
	this.list = [];
	this.num = 0;

    this.update = function(){
    	// console.log(this.list.length);
    	console.log(y);
    	for (var i = 0; i < this.list.length; i++) {
    		// console.log(x);
    		
    		this.list[i].x += (this.list[i].x/x)
    		this.list[i].y += ((this.list[i].x/y) + .05);
    		if(this.list[i].x >= 10 && this.list[i].x < (10 + (this.list[i].x/x))){
    			this.createnew();
    		}
    		if(this.list[i].x >= 5000){
    			this.list.splice(i,1);
    		}
    		var A = random(0,255);
    		var R = random(0,255);
    		var G = random(0,255);
    		var B = random(0,255);
    		fill(255,0,0,255);
    		torus(this.list[i].x,this.list[i].y);
    	}
    }
    this.createnew = function(){
    	this.list.push(createVector(this.x,this.y));
    }
}

function keyPressed(){
	if(keyCode === LEFT_ARROW){
		if((x-10) <= 0){
			x = 5;
			console.log("Less then 0");
		}else{
			x -= 10;
		}	
	}else if(keyCode === RIGHT_ARROW){
		x+= 10;
	}else if(keyCode === UP_ARROW){
		if((y-10) <= 0){
			console.log("Less then 0");
		}else{
			y -= 10;
		}
	}else if(keyCode === DOWN_ARROW){
		y += 10;
	}
}