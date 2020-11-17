var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var platform1, platform2, platform3;

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
	textSize(25);
	fill("cyan");
	stroke("black");
	text("Press Down Key To Make The Box Fall Down",300,300);


createCanvas(600, 600);

	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-4, width,10);
	groundSprite.shapeColor="lime";


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.47, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 800, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	platform1 = new Platform(150,566,20,200);
	platform2 = new Platform(250,580,180,20);
	platform3 = new Platform(350,566,20,200);
	Engine.run(engine);


}



function draw() {
  
  rectMode(CENTER);
  background(0);
  packageSprite.x = packageBody.position.x 
  packageSprite.y = packageBody.position.y

 
  platform1.display(); 
  platform2.display(); 
  platform3.display(); 
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody,false);
  } 

 
}





