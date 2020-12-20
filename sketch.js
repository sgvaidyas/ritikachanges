const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var trash1,trash2,trash3,paper,ground;


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	trash1=new Dustbin(500,610,20,100);
	trash2=new Dustbin(610,650,200,20);
	trash3=new Dustbin(720,610,20,100);
	paper=new Paper(50,650,30)
	ground=new Ground(400,680,800,20)
	

	
}


function draw() {
  rectMode(CENTER);
  background("black");
Engine.update(engine);
  
  trash1.display();
  trash2.display();
  trash3.display();
  paper.display();
  ground.display();
 console.log(paper.body.position.x)
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paper.body,paper.body.position,{x:83,y:-83});
    
  	}
}


