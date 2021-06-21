const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function preload(){
    
}

function setup(){
   createCanvas(400,500);
   engine = Engine.create;
   world = engine.world;
   umbrella = new Umbrella(200,200);
}

function draw(){
    background("black");
    Engine.update(engine);

   umbrella.display();
}   

