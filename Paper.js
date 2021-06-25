class Paper {
    constructor(x,y,radius){
      var options = {
        isStatic: false,
        'restitution' :0.3,
        'friction':0,
        'density':1.2
    
    }
    
    this.radius = radius
    this.y=y;
    this.x=x;
    this.image=loadImage("paper.png");
    this.body=Bodies.circle(this.x,this.y,(this.radius-20)/2,options)
    World.add(world,this.body);

    
    
    }
    display(){
      var pos=this.body.position;
      push();
      translate(pos.x,pos.y);
      
      imageMode(CENTER);
      image(this.image,0,0,this.radius,this.radius);
      pop();
    }
    

    
  }
