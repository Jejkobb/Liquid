function Circle(x, y, r, color) {
  var options = {
    friction: 0,
    restitution: 0
  }
  this.body = Bodies.circle(x, y, r, options);
  this.r = r;
  World.add(world, this.body);

  this.show = function() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    //fill(255, 255, 255, 50);
    //ellipse(0, 0, this.r * 5);
    noStroke();
    image(img, -50, -50, 100, 100);
    pop();
  }
}
