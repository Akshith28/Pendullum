class Log {
  constructor(x,y,height,angle){
    var options = {
      isStatic: true
  }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = 100;
    this.height = 20;
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    rectMode(CENTER);
    fill("gray");
    rect(400,100, this.width, this.height);
  }
}