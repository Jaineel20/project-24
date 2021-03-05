
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer ;
var ground ;
var Iron;
var rubber;
var sand1,sand2,sand3,sand4;
var stone;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  hammer = new Hammer(100,200);
	ground = new Ground(600,height,1200,20);
  Iron =new Iron(600,600);
  sand1 = new Sand(500,500);
  sand2 = new Sand(510,500);
  sand3 = new Sand(520,500);
  sand4 = new Sand(540,500);
  rubber = new Rubber(700,700);
  stone = new stone(300,300);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  hammer.display();
  ground.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  Iron.display();
  rubber.display();
  stone.display();
   
  drawSprites();
}



