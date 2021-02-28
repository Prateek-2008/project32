const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Constraint=Matter.Constraint;

var engine,world;

var ground;
var block1;

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

    ground=new Ground(500,650,1300,20);
	block1=new Block(200,200,30,50);
    
	Engine.run(engine);

}

function draw() {

  background(150);
 
  ground.display();
  block1.display();
  
}