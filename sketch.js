const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,ball;
var constrainedLog,chain;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    ball = new Ball(100,200);

    constrainedLog = new Log(200,100);
    chain = new Chain(ball.body,constrainedLog.body);
}

function draw(){
    background(255);
    Engine.update(engine);
    ground.display();

    ball.display();
    constrainedLog.display();
    chain.display();
}
function mouseDragged() {
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}