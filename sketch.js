//making variables
var binIMG, paperSprite,paperIMG;
var paperBody,ground;
//var binSprite;

//creating constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	//loading Images
	binIMG = loadImage("dustbingreen.png");
	paperIMG = loadImage("paper.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	//creating paper sprite
	paperSprite = createSprite(50, 200, 10,10);
	paperSprite.addImage(paperIMG);
	paperSprite.scale = 0.2;

	//making bin
/*	binSprite = createSprite(500, height-35, 10,10);
	binSprite.addImage(binIMG);
	binSprite.scale = 0.6;
*/
	//making ground
	groundSprite = createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor = color(255);

	// making engine
	engine = Engine.create();
	world = engine.world;
	//making paper
	paperBody = Bodies.circle(30 , 600 , 1 , {restitution:0.4, isStatic:false});
	World.add(world, paperBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	//defining box's position
 	boxPosition = 600;
 	boxY = 610;

	//building box
	//left side
 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);
 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);
	//base
 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);
 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);
	//left sprite
 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);
	//right side
 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);

	//running engine
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("grey");
  //packing paper
  paperSprite.x= paperBody.position.x;
  paperSprite.y= paperBody.position.y;
 
  move();
  drawSprites(); 
}

function move() {
  if (keyCode === UP_ARROW) {
	//Matter.Body.applyForce(body, position, force)
	Matter.Body.applyForce(paper.body, paper.body.position,{x:85, y:-85})
  }
}