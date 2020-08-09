
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var boxSide1, boxSide2, boxSide3;
var box, img;

function preload()
{
	img = loadImage("paper/dustbingreen.png") ;	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(100, 300, 30);

	ground = new Ground(600, 550, 1200, 20);

	box = createSprite(1000, 420, 20, 30);
	box.addImage(img);
	box.scale = 0.7;
	
	boxSide1 = new Dustbin(1100, 420, 20, 220);
	boxSide2 = new Dustbin(900, 420, 20, 220);
	boxSide3 = new Dustbin(1000, 540, 200, 10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  


  ball.display();
  ground.display();
  boxSide1.display();
  boxSide2.display();
  boxSide3.display();
 
  drawSprites();

  keyPressed();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:3, y:-9})
	}

}

