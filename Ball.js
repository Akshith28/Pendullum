class Ball {
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y,50, options);
        this.width = 50;
        this.height = 50;
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        ellipseMode(CENTER);
        ellipse(0,0,this.width,this.height);
        if(keyCode===32){
          this.body.position.y = mouseY;
          this.body.position.x = mouseX;
          }
          
          else if (keyCode === ENTER){
          this.body.position.x = 600;
          
          }
        pop();
      }
}