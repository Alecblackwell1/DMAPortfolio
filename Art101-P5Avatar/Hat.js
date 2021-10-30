class Hat{
  constructor(_xpos,_ypos,_rot,_size,_speed){
    this.xpos = _xpos;
    this.ypos = _ypos;
    this.rot = _rot;
    this.size = _size;
    this.speed = _speed;
}
  
  display(){
    
  //Triangle Hat :D
  // translate(width/2, width/2)
  // rotate(0);
  // translate(width*-0.3, height*-0.5);
  fill(200,75,80,200)    
  stroke(0,0,0);
  beginShape();
  vertex(width*.45,height*.2)
  vertex(width*.5,height*.3)
  vertex(width*.40,height*.3)
  endShape(CLOSE);
    
  } 
}