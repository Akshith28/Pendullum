class Chain {
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB:bodyB,
            stiffness: 0.04,
            length: 50
        }
        
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly() {
        this.sling.bodyA = null;
    }

    display(){
        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.bodyB.position;
            strokeWeight(3);
            line(pointA.x, pointA.y, pointB.x, pointB.y);  
        }
        
    }
}