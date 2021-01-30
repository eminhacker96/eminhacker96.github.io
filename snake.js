function Snake() {
	// properties
	this.x = 0;
	this.y = 0;
	this.xspeed = 2;
	this.yspeed = 0;
	this.total = 0;
	this.tail = [];
	this.eat = function(pos){
		var d = dist(this.x,this.y, pos.x, pos.y);
		if(d < 1) {
			return true;
		} else {
			return false;
		}
	}
	// methods
	this.dir = function(x, y) {
		this.xspeed = x;
		this.yspeed = y;
	}

	this.update = function() {
			this.x = this.x + this.xspeed;
			this.y = this.y + this.yspeed;
			this.x= constrain(this.x, 0, width - scl);
			this.y= constrain(this.y, 0, height - scl);
	}
	this.show = function() {
			for(var i = 0; i < this.total; i++) {
			rect(tail[i].x, tail[y].y, scl, scl);
			}
		fill(255);
		rect(this.x, this.y, 10, 10);
	}
}