class Paper{
    
        constructor(x, y, radius) {
          var options = {
              isStatic: false,
              restitution: 0.3,
              friction: 0.5,
              density: 1.2
          }
          this.body = Bodies.circle(x, y, radius, options);
          this.radius = radius;
          this.image = loadImage("paper/paper.png"); 
          World.add(world, this.body);
        }
        display(){
          var pos =this.body.position;
         
          strokeWeight(0);
          fill("white");
          circle(pos.x, pos.y, this.radius);

          imageMode(CENTER);
          image(this.image, pos.x, pos.y, 100, 100);
         
        }
      

        
};
