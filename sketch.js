const Engine= Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine ;
var world;

var ground;
var box1=[];
var ball;
var rope;

function setup() {
  createCanvas(1200, 800);
  engine = Engine.create();
  world= engine.world;

ground= new Ground(600,750,1200,20);
  
for(var i=0; i<=700;i=i+100){
  box1.push(new Box(700,i,70,70));
}
ball = new Ball(200, 200, 80, 80);
  rope = new Rope(ball.body, { x: 500, y: 50 });
}
function draw() {
  background(0,0,0);  
Engine.update(engine);
ground.display();
for(var i=0; i<box1.length;i++){
box1[i].display();
}
ball.display();
rope.display();
}

function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}