var ground,paper,bar1,bar2,bar3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinImage= loadImage("dustbin.png")
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,690,800,20);
	bar1  =  new Dustbin(600,640,10,70);
	bar2  = new Dustbin(740,640,10,70);
	bar3 = new Dustbin(670,670,150,10);
	paper  =  new Paper(50,650,20);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  bar1.display();
  bar2.display();
  bar3.display();
  paper.display();
  
 imageMode(CENTER);
 image(dustbinImage,670,610,150,150)
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-65})
	}
}


