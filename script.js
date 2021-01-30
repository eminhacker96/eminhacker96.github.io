var s;
var scl = 20;
var food;
function setup() {
  createCanvas(600, 600);
  s = new Snake();
  //frameRate(10);
  //pickLocation();
}
// function pickLocation() {
// 	var cols = floor(width/scl);
// 	var rows = floor(height/scl);
// 	// food = createVector(floor(random(cols))), floor(random(rows));
// 	// food.mult(scl);
// }

function draw() {
  background(0);
  s.update();
  s.show();

  // fill(255,0,100);
  // rect(food.x,food.y,scl,scl);

  // if(s.eat(food)){
  // 	 pickLocation();
  // };
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		s.dir(0,-2);
	}
	else if(keyCode === DOWN_ARROW){
		s.dir(0,2);
	}
	else if(keyCode === RIGHT_ARROW){
		s.dir(2,0);
	}
	else if(keyCode === LEFT_ARROW){
		s.dir(-2,0);
	}

}
