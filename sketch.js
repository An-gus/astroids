let ship
let parts = []
let pl
let ast = []
let nd = -3
let score = 0

function preload(){
  font = loadFont('font.otf');
}

function setup() {
  textFont(font);
  textSize(16);
  createCanvas(400, 400);
  ship = new Ship(0,0,-PI/2,10)
  for (i=0;i<6;i++){
    append(ast,new Asteroid())
  }
}


function keyPressed(){
  if (keyCode == 68){
    ship.turn(0.1)
  }
  if (keyCode == 65){
    ship.turn(-0.1)
  }
  if (keyCode == 87){
    ship.boosting(true)
  }
}

function keyReleased(){
  ship.turn(0)
  ship.boosting(false)
}

function mousePressed(){
  ship.shoot(parts)
}


function draw() {
  background(45);
  translate(width/2,height/2)
  pl = parts.length
                             
  
  
  for (var p=pl-1; p>=0;p--){
    var pnt = parts[p]
    pnt.update()
    pnt.show()
        
    for (j=ast.length-1;j>-1;j--){
       if (pnt.hit(ast[j])){
         if (ast[j].l >= 10){
           var nasts = ast[j].brkp()
           ast = ast.concat(nasts)
           score ++
         } else{
           score += 10
           nd ++
           if (nd % 3 == 0){
             append(ast,new Asteroid())
             score += 100
           }
         }
         ast.splice(j,1)
         parts.splice(p,1)
         break
       }
         
    if (pnt.pos.y > height/2){parts.splice(p,1);break}
    if (pnt.pos.y < -height/2){parts.splice(p,1);break}
    if (pnt.pos.x > width/2){parts.splice(p,1);break}
    if (pnt.pos.x < -width/2){parts.splice(p,1);break}
         
    }
  }
  
  
  
  ship.update()
  ship.show()
  txt = 'score ' + str(score)
                               
  for (i=0;i<ast.length;i++){
    ast[i].update()
    ast[i].show()
  }  
                               
                               
  text(txt,-width/2 + 10, height/2-10)
}