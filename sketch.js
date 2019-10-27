var Engine = Matter.Engine,
  // Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;
var circles = [];
var boundaries = [];
var ground;

var socket;

var oldPrice = 0;

function setup() {
  createCanvas(800, 600);
  engine = Engine.create();
  world = engine.world;
  //Engine.run(engine);
  boundaries.push(new Boundary(150, 100, width * 0.7, 20, 0.3));
  boundaries.push(new Boundary(width-200, 300, width * 0.6, 20, -0.3));

  // BUCKET
  //boundaries.push(new Boundary(width/2, height-25, width, 50, 0));
  //boundaries.push(new Boundary(0, height-50, width, 50, 1.57));
  //boundaries.push(new Boundary(width, height-50, width, 50, 1.57));

  socket = io.connect('http://localhost:3000/');
  socket.on('bitcoin', newPrice);
}

function newPrice(data){
  if(oldPrice == 0){
    oldPrice = data.val;
  }
  var dif = data.val - oldPrice;
  var hex;
  if(dif < 0){
    hex = "#fc0f03";
    dif = -dif;
  }else{
    hex = "#5efc03";
  }
  if(dif > 1){
    circles.push(new Circle(100, 50, dif, hex));
  }
  oldPrice = data.val;
}

function mouseDragged() {
  //var c = new Circle(mouseX, mouseY, random(5, 10), );
  //circles.push(c);
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
  textSize(50);
  textAlign(CENTER);
  text(""+(parseInt(oldPrice*100)/100), width/2, height/2+150);
  fill(0, 102, 153);
}
