const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;

var  slingshot;






function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    //bottom 
    box1= new Box(350, 350, 50,50);
    box2= new Box(400, 350, 50,50);
    box3= new Box(450, 350, 50,50);
    box4= new Box(500, 350, 50,50);

    //second
    box5= new Box(380, 300, 50,50);
    box6= new Box(430, 300, 50,50);
    box7= new Box(490, 300, 50,50);

    //third
    box8= new Box(390, 250, 50,50);
    box9= new Box(440, 250, 50,50);

    //top
    box10= new Box(400, 200, 50,50);


    //bottom 
    box11= new Box(850, 350, 50,50);
    box12= new Box(900, 350, 50,50);
    box13= new Box(950, 350, 50,50);
    box14= new Box(1000, 330, 50,50);

    //second
    box15= new Box(870, 300, 50,50);
    box16= new Box(930, 300, 50,50);
    box17= new Box(980, 300, 50,50);

    //third
    box18= new Box(870, 250, 50,50);
    box19= new Box(930, 250, 50,50);

    //top
    box20= new Box(925, 200, 50,50);

    ball= new Ball(750, 230, 80, 80)

    

    slingshot = new SlingShot(ball.body,{x:650, y:40});
}

function draw(){
    background ("white");
    Engine.update(engine);

    fill ("lightgreen")

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

    fill ("red")
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    fill ("blue")
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();

    box19.display();
    box20.display();
   

    ball.display();

    slingshot.display();

    ground.display();
}
function mouseDragged(){
  
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  
}

function mouseReleased(){
    slingshot.fly();
    
}
function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(ball.body);
       ball.trajectory=[   ]
       Matter.Body.setPosition(ball.body, {x: 650, y: 40});
    }
}

