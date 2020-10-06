var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,Rect1,Rect2,Rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	console.log(packageBody);
	Engine.run(engine);
  
	fill("Red");
	Rect1 = new Rect(300,610,20,100);
	Rect2 = new Rect(410,650,200,20);
	Rect3 = new Rect(520,610,20,100);
}


function draw() {
  	rectMode(CENTER);
  	background(0);
  	packageSprite.x= packageBody.position.x 
  	packageSprite.y= packageBody.position.y 
  	drawSprites();
	
	Rect1.display();
	Rect2.display();
	Rect3.display();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Body.setStatic(packageBody, false)
  }
}



