
var monkey , monkey_running,invisibleGround;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  backgroundImage = loadImage("jungle.jpg");
 
}



function setup() {
 
  obstaclesGroup=createGroup();
  bananaGroup=createGroup();
  
  background1 = createSprite(290,240)
  background1.addImage("jungle",backgroundImage)
  
  
  monkey = createSprite(80,372,50,50)
  monkey.addAnimation("run",monkey_running)
  monkey.scale=0.2;
  
  invisibleGround = createSprite(290,445,580,20)
  invisibleGround.visible=false;
  
  score=0;
  
}


function draw() {
   createCanvas(580,480)
  background("lightblue")
  
   if (frameCount % 160 === 0){
     stones = createSprite(590,392,20,20);
     stones.addImage("obstacles",obstaceImage)
     stones.scale=0.2
     stones.velocityX=-4
     stones.lifetime=450
     obstaclesGroup.add(stones);
   }
  

 
  

  
  
  if(keyDown("space")) {
        monkey.velocityY = -22;
  }
  monkey.velocityY = monkey.velocityY + 0.9
  


  monkey.collide(invisibleGround)
  
  if(monkey.isTouching(bananaGroup)){
    score=score+1;
    monkey.scale=0.3;
    bananaGroup.destroyEach();
  }
  
  if(monkey.isTouching(obstaclesGroup)){

    monkey.scale=0.2;
  }
  
  
  spawnBanana();
  drawSprites();
  textSize(35);
  fill("red")
  text("Score: "+score,200,50)

}

function spawnBanana(){
if (frameCount % 140 === 0){
  banana = createSprite(590,70,20,20)
  banana.addImage("food",bananaImage)
  banana.velocityX=-4
  banana.scale=0.1
  banana.lifetime=450;
  banana.y=Math.round(random(80,200))
  bananaGroup.add(banana);
}
  
}




