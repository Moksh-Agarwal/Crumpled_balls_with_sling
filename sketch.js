const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const constraint=Matter.Constraint;
var engine, world;
var box1;
var slingshot;
var ball;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,395,1200,20);
    box1 = new Box(1000,300,150,190);
    ball = new Paper(100,300,70);
    slingshot= new SlingShot(ball.body,{x:200,y:100});
}

function draw(){
    background("white");
    fill("green");
    
    Engine.update(engine);
   
    ground.display();
    
    box1.display();
    
    ball.display();

slingshot.display();    
}
function mouseDragged()
{
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
function mouseReleased()
{
    slingshot.fly();
}
