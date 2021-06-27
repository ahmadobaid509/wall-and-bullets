var wall,thickness;
var bullet,speed,weight;
var damage;
var bulletR;
var wallL;
function setup() {
  createCanvas(900,400);
  bullet=createSprite(100,200, 50, 10);
  bullet.shapeColor="brown";

  wall=createSprite(800,200, thickness,400);
  wall.shapeColor="white";
  thickness=random(22,83);

  speed=random(223.321);
  weight=random(30,52);

  bullet.velocityX=speed;

}

function draw() {
  background("black");  

if (hasCollided(bullet,wall))
{
 bullet.velocityX=0;
   damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
if(damage>10){
  wall.shapeColor="green";

}

if(damage<10){
  wall.shapeColor="red";
}

}



drawSprites();

}

function hasCollided(bullet,wall)
{
 bulletR=bullet.x+bullet.width;
 wallL=wall.x;
 if (bulletR>=wallL)
 {
   return true;
 }
return false;
}
