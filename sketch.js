var pinkie



function setup() {
  createCanvas(600,600);
  pinkie = createSprite(300,300,100,100)
}

function draw() 
{
  background("pink");
if (keyIsDown(RIGHT_ARROW)){
pinkie.x =pinkie.x+5


}

if (keyIsDown(LEFT_ARROW)){
  pinkie.x =pinkie.x+-5
  
  
  }


  if (keyIsDown(UP_ARROW)){
    pinkie.y =pinkie.y+-5
    
    
    }
  
if(keyIsDown(DOWN_ARROW)){
pinkie.y=pinkie.y+5

}

















  drawSprites()















}




