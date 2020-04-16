const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var sun;
var ground;
var bg;

function preload(){
    bg = loadImage("space7.png.png");
 }

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)

    sun = new Sun(700,320,70,70);
    
}

function draw(){
    background(bg);
    Engine.update(engine);
    console.log(Sun.body.position.x);
    console.log(Sun.body.position.y);
    console.log(Sun.body.angle);

}