const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber ; 
var stone ;
var iron ; 

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane1 = new Plane(600,height,1200,20)
    hammer1 = new Hammer(100,100);
    iron1 = new Iron (100,100);
    rubber1 = new Rubber (150,250,50);
    stone1= new Stone (250,250);



  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane1.display();
    hammer1.display();
    iron1.display();
    rubber1.display();
    stone1.display();

    



    
 
}