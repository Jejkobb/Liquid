function Circle(x, y, r, color) {
  var options = {
    friction: 0,
    restitution: 0.5
  }
  this.body = Bodies.circle(x, y, r, options);
  this.r = r;
  World.add(world, this.body);

  this.show = function() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(0);
    stroke(255);
    fill(color);
    ellipse(0, 0, this.r * 2);
    pop();
  }

}
