var fixedRect, movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(600, 200, 50, 50);
  movingRect.shapeColor = "red";

}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  textSize(15);
  text(movingRect.x,100,100);

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
    fixedRect.y -  movingRect.y < fixedRect.height/2 + movingRect.height/2 
    )  {
      fixedRect.shapeColor = "blue";
      movingRect.shapeColor = "blue";   
  }else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "red"; 
  }

  drawSprites();
}