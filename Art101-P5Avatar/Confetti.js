class Confetti{
  constructor(_xpos,_ypos,_size,_speed){
    this.xpos = _xpos;
    this.ypos = _ypos;
    this.size = _size;
    this.speed = _speed;
  }
  
  display(){
    
  //Confetti
  fill(random(255),random(255),random(255));
  rect(this.xpos,this.ypos,10,this.size,30);
    
  } 
  
  move(){
    if(this.ypos <= height){
    this.ypos += this.speed;
    } else {
      this.ypos = -this.size;
    }
  
}
   
  
}