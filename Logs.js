class Logs{
    constructor(x,y,width,angle){
        var option={
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
    }
    this.body=Bodies.rectangle(x,y,width,20,option);
    this.width=width;
    Matter.Body.setAngle(this.body,angle);
    World.add(world,this.body);
}
    display(){
        var pos =this.body.position;
          var angle = this.body.angle;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          fill(255);
          strokeWeight(4);
          stroke("green");
          rect(0, 0, this.width,20);
          pop();
        }
    }
