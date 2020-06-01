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

    ball = new Ball(600,200);

    constrainedLog = new Log(600,150);
    chain = new Chain(ball.body,constrainedLog.body);
}

function draw(){
    background(255);
    Engine.update(engine);

    text("Press space bar to oscillate the pendulam to left and right with mouse",10,20);
    text("Press Enter to stop the Pendulum from oscillating",100,50);

    

    ground.display();

    ball.display();
    constrainedLog.display();
    chain.display();
}
