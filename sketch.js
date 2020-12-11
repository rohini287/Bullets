var bullet,wall;
var speed,weight,thickness


function setup(){
  createCanvas(1000,400);
  thickness=random(20,83);
  wall=createSprite(800,200,thickness,height/2)
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(10,200,50,10);
  bullet.shapeColor="white";
  bullet.velocityX=speed;
}
function draw() {
  background(0);
if (hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  if (damage>10){
    wall.shapeColor="red"
  }
  if (damage<10){
    wall.shapeColor="green";
  }
}
  drawSprites();
}


function hasCollided(bullet,wall){
  rightEdge=bullet.x+bullet.width;
  leftEdge=wall.x;
  if (rightEdge>=leftEdge){
    return true;
  }
  return false;
}