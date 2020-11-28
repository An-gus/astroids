class Ship{
  
    constructor(x,y,heading,size){
      this.pos = createVector(x,y);
      this.vel = createVector(0,0);
      this.acc = createVector(0,0);
      this.l = size;
      this.ang = heading;
      this.rot = 0;
      this.isbst = false
    }
    
    thrust(){
      var frc = p5.Vector.fromAngle(this.ang)
      frc.mult(0.1)
      //this.vel.add(frc)
      this.acc.add(frc)
    }
    
    update(){
      
      if (this.isbst){this.thrust()}
      
      this.ang += this.rot
      this.vel.add(this.acc);
      this.vel.limit(10)
      this.pos.add(this.vel);
      this.vel.mult(0.99)
      this.acc.mult(0);
  
      
      if (this.pos.y > height/2){this.pos.y = -height/2}
      if (this.pos.y < -height/2){this.pos.y = height/2}
      if (this.pos.x > width/2){this.pos.x = -width/2}
      if (this.pos.x < -width/2){this.pos.x = width/2}
    }
    
    
    turn(a){
     this.rot = a;
    }
    
    
    boosting(b){
      this.isbst = b
    }
    
    
    show(){
      push()
      translate(this.pos.x,this.pos.y)
      rotate(this.ang + PI/2)
      stroke(255,0,0)
      fill(45)
      triangle(-this.l,this.l,this.l,this.l,0,-this.l*1.5)
      pop()
    }
    
    shoot(array){
      var d = p5.Vector.fromAngle(this.ang)
      d.mult(10 + this.vel.mag())
      append(array, new Particle(this.pos.x,this.pos.y,d))
    }
    
  }