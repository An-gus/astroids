class Asteroid{
  
    constructor(pos,l,off){
      
      this.vel = createVector(random(-2,2),random(-2,2))
      
      if (pos){
        this.pos = pos.copy()
      } else{
        this.pos = createVector(random(width),random(height))
      }
      
      if (l){
        this.l = l/2
      } else{
        this.l = random(5,35)
      }
      
      if (off){
        this.off = off
        this.tot = this.off.length
        for (var k=0;k<this.tot;k++){
          this.off[k] *= 0.8
        }
      } else{
        this.off = []
        this.tot = random(4,15)
        for (var i=0;i<this.tot;i++){
          this.off.push(random(-this.l/2,this.l/2))
        }
      }
    }
  
    
    
    update(){
      this.pos.add(this.vel)
      
      if (this.pos.y > height/2){this.pos.y = -height/2}
      if (this.pos.y < -height/2){this.pos.y = height/2}
      if (this.pos.x > width/2){this.pos.x = -width/2}
      if (this.pos.x < -width/2){this.pos.x = width/2}
    }
    
    show(){
      push()
      translate(this.pos.x,this.pos.y)
      noFill()
      stroke(255)
      strokeWeight(1)
      beginShape()
      for (let p=0;p<this.tot;p++){
        var r = (this.l + this.off[p])
        var a = map(p,0,this.tot,0,TWO_PI)
        var x = r * cos(a)
        var y = r * sin(a)
        vertex(x,y)
      }
      endShape(CLOSE)
      pop()
    }
    
    brkp(){
      var newa = []
      newa[0] = new Asteroid(this.pos,this.l,this.off)
      newa[1] = new Asteroid(this.pos,this.l,this.off)
      return newa
    }
  }