class Ball {
    constructor(x,y,width,height) {
      this.image = loadImage("polygon.png");
  
      var options = {
          restitution : 0.7,
          friction : 100000 ,
          density : 1
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle
      push (); 
      translate (pos.x,pos.y);
      rotate(angle )
      fill("lightblue");
      ellipseMode(CENTER);
      ellipse(0,0, this.width, this.height);
      pop ();
    }
  };
  