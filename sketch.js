var Engine = Matter.Engine,
  // Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;
var circles = [];
var boundaries = [];
var ground;

let img;
function preload() {
  img = loadImage('assets/blur.png');
}

function setup() {
  createCanvas(800, 600);
  engine = Engine.create();
  world = engine.world;
  // BUCKET
  boundaries.push(new Boundary(width/2, height-25, width, 50, 0));
  boundaries.push(new Boundary(0, height-50, width, 50, 1.57));
  boundaries.push(new Boundary(width, height-50, width, 50, 1.57));
}

function mouseDragged() {
  var c = new Circle(mouseX, mouseY, 20, '#FFF');
  circles.push(c);
}

function draw() {
  background(51);
  Engine.update(engine);
  for (var i = 0; i < circles.length; i++) {
    circles[i].show();
  }
  for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].show();
  }
}
