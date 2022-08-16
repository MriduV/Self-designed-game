var firstimage;
var level1,level2,level3,level4,level5;
var boy,boy_running;
var form,game;

function preload() {
firstimage = loadImage("./Images/FirstImage.png");
level1 = loadImage("./Images/Level-1.jpg");
//level2 = loadImage("./Images/Level-2.png");
boy_running = loadAnimation("./Character/1.png","./Character/2.png","./Character/3.png"
,"./Character/4.png","./Character/5.png","./Character/6.png","./Character/7.png"
,"./Character/8.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  boy = createSprite(width/ 2 - 600, height- 230);
  boy.scale=0.7;
  
  boy.addAnimation("running_boy",boy_running);
  
}

function draw() {
  background(level1);
  if (keyDown("left_arrow")) {
    
    boy.x -= 5;
 }
if (keyDown("right_arrow")) {
    
  boy.x += 5;
}
if (keyDown("up_arrow")) {
    
  boy.y -= 5;
}
if (keyDown("down_arrow")) {
    
  boy.y += 5;
}

  
  drawSprites();
}