class Hammer {
    constructor(x,y,widht,height) {
      var option = {
             'restitution':0.5,
             'friction':1.0,
             'density':2
      }
      this.body = Bodies.rectangle(x,y,200,250);
      this.width = 50;
      this.height = 50;
  
      World.add(world, this.body);
  }
  display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      rect(0,0,200,250);
      pop();
  }
  }