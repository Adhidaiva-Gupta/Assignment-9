var box;

function setup(){
  background("cyan");
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
}

function draw(){
if(keyIsDown(RIGHT_ARROW)){
  background(220, 20, 60);
}

if(keyIsDown(LEFT_ARROW)){
  background(127, 255, 0);
}

if(keyIsDown(UP_ARROW)){
  background(153, 50, 204);
}

if(keyIsDown(DOWN_ARROW)){
  background(205, 92, 92);
}

drawSprites();
}