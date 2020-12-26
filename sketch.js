const Engine= Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var engine,mybody,world;
var Box1;
var Box2;
var Box3,Box4;
var ground;
var bird;
var pig1,pig2;
var log1,log2,log3,log4;

function setup() {
  createCanvas(800,600);
engine=Engine.create();
world=engine.world;

Box1=new Box(450,350,50,50);
Box2=new Box(300,350,50,50);
Box3=new Box(300,315,50,50);
Box4=new Box(450,315,50,50);

ground=new Ground(400,400,800,20);
bird=new Bird(100,100);
pig1=new Pigs(380,350);
pig2=new Pigs(380,315);
log1=new Logs(380,325,250,PI);
log2=new Logs(380,305,250,PI);
  
}

function draw() {
  background(0);
  Engine.update(engine);
  Box1.display();
  pig1.display();
  Box2.display();
  log1.display();

  Box3.display();
  pig2.display();
  Box4.display();
  log2.display();
  ground.display();
  bird.display();
}
