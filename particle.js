class Particle{
  
  constructor(x,y,v){
    this.pos = createVector(x,y);
    this.vel = v
  }
  
  
  update(i){

    this.pos.add(this.vel);
  }
  
  show(){
    push()
    stroke(255)
    strokeWeight(4)
    point(this.pos.x,this.pos.y)
    pop()
  }
  
  hit(astr){
    return (dist(this.pos.x,this.pos.y,astr.pos.x,astr.pos.y) < astr.l)
  }
}