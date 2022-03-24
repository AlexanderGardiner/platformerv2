let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;
let restartPressed = false;
let deathPressed = false;
let slowMotion = false;
let dashPressed = false;
let paused = false;
let debugOn = false;
let blocks = [];
let levelChanged = false;
let performanceMode = false;
let preLoadedLevels = [];
let loadedLevels = 0;
let canvasRefresh = true;
let invisibleMode = false;
let invisibleModeJustPressed = false;
let levelSubmit = false;
let currentLevelID=0;
let timeSubmitted = false;
document.addEventListener("keydown", function(event) {
  if (event.keyCode == 87 || event.keyCode == 38) {
    upPressed = true;
  }

  if (event.keyCode == 83 || event.keyCode == 40) {
    downPressed = true;
  }

  if (event.keyCode == 65 || event.keyCode == 37) {
    leftPressed = true;
  }

  if (event.keyCode == 68 || event.keyCode == 39) {
    rightPressed = true;
  }

  if (event.keyCode == 67 || event.keyCode == 74) {
    dashPressed = true;
  }
  if (event.keyCode ==86) {
    deathPressed = true;
  }
  if (event.keyCode ==78) {
    invisibleModeJustPressed = true;
    if (invisibleMode) {
      invisibleMode = false;
    } else {
      invisibleMode = true;
    }
    
  }
  if (event.keyCode ==89) {
    if (canvasRefresh) {
      canvasRefresh = false;
    } else {
      canvasRefresh = true;
    }
    
  }
  if (event.keyCode ==82) {
    restartPressed = true;
  }
  if (event.keyCode ==77) {
    window.open("https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwigtfK6yJb2AhWZIUQIHRp5AQ4QwqsBegQIBhAB&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdQw4w9WgXcQ&usg=AOvVaw0aHtehaphMhOCAkCydRLZU",'blank')
  }
  if (event.keyCode==79) {
    document.getElementById("timer").style.color="red";
    if (slowMotion) {
      slowMotion = false;
    } else {
      slowMotion = true;
    }
    
  }
  if (event.keyCode==80) {
    if (paused) {
      paused = false;
    } else {
      paused = true;
    }
    
  }
  if (event.keyCode==85) {
    if (performanceMode) {
      performanceMode = false;
    } else {
      performanceMode = true;
    }
    
  }
  if (event.keyCode == 71) {
    if (debugOn) {
      document.getElementsByClassName("shownDebugFeatures")[0].className="hiddenDebugFeatures";
      debugOn = false;
    } else {
      document.getElementsByClassName("hiddenDebugFeatures")[0].className="shownDebugFeatures";
      debugOn = true;
    }
    
  }
  if (loadedLevels>10) {
    if (event.keyCode==49) {
      currentLevelID = preLoadedLevels[0][0];
      blocks = preLoadedLevels[0].slice(1,)
      levelChanged = true
    }
    if (event.keyCode==50) {
      currentLevelID = preLoadedLevels[1][0];
      blocks = preLoadedLevels[1].slice(1,)
      levelChanged = true
  
    }
    if (event.keyCode==51) {
      currentLevelID = preLoadedLevels[2][0];
      blocks = preLoadedLevels[2].slice(1,)
      levelChanged = true
  
  
    }
    if (event.keyCode==52) {
      currentLevelID = preLoadedLevels[3][0];
      blocks = preLoadedLevels[3].slice(1,)
      levelChanged = true
    }
    
    if (event.keyCode==53) {
      currentLevelID = preLoadedLevels[4][0];
      blocks = preLoadedLevels[4].slice(1,)
      levelChanged = true
  
    }
  
    if (event.keyCode==54) {
      currentLevelID = preLoadedLevels[5][0];
      blocks = preLoadedLevels[5].slice(1,)
      levelChanged = true
  
    }

    if (event.keyCode==55) {
      currentLevelID = preLoadedLevels[6][0];
      blocks = preLoadedLevels[6].slice(1,)
      levelChanged = true
  
    }

    if (event.keyCode==56) {
      currentLevelID = preLoadedLevels[7][0];
      blocks = preLoadedLevels[7].slice(1,)
      levelChanged = true
  
    }
    if (event.keyCode==57) {
      currentLevelID = preLoadedLevels[8][0];
      blocks = preLoadedLevels[8].slice(1,)
      levelChanged = true
  
    } if (event.keyCode==48) {
      currentLevelID = preLoadedLevels[9][0];
      blocks = preLoadedLevels[9].slice(1,)
      levelChanged = true
  
    } if (event.keyCode==189) {
      currentLevelID = preLoadedLevels[10][0];
      blocks = preLoadedLevels[10].slice(1,)
      levelChanged = true
  
    }

    if (event.keyCode==186) {
      levelSubmit = true;
    
  
    }
  }
  
});

document.addEventListener("keyup", function(event) {
  if (event.keyCode == 87 || event.keyCode == 38) {
    upPressed = false;
  }

  if (event.keyCode == 83 || event.keyCode == 40) {
    downPressed = false;
  }

  if (event.keyCode == 65 || event.keyCode == 37) {
    leftPressed = false;
  }

  if (event.keyCode == 68 || event.keyCode == 39) {
    rightPressed = false;
  }
  if (event.keyCode == 67 || event.keyCode == 74) {
    dashPressed = false;
  }
  if (event.keyCode ==86) {
    deathPressed = false;
  }

  if (event.keyCode ==82) {
    restartPressed = false;
  }


});



class solidBlock {
  constructor(block) {
    this.x = block.x;
    this.y = block.y;
    if (block.type == 2) {
      this.width = 16;
      this.height = 16;
    } else if (block.type ==5) {
      this.width = 16;
      this.height = 2;
      
    } else {
      this.width = 20;
      this.height = 20;
    }
    
    this.type = block.type;
  }
}

class player {
  constructor(x,y,width,height,velocityX,velocityY, moveSpeed, jumping) {
    this.spawnX = 20;
    this.spawnY = 40;
    this.x = x;
    this.y = y
    this.width = width;
    this.height = height;
    this.moveSpeed = moveSpeed;
    this.jumping = jumping;
    this.xVelocity = velocityX;
    this.yVelocity = velocityY;
    this.collisionTopObjects = [];
    this.collisionBottomObjects = [];
    this.collisionLeftObjects = [];
    this.collisionRightObjects = [];
    this.timer = 0;
    this.levelCompleted = false;
    this.started = false;
    this.dashing = false;
    this.dashingTimer = 1000;
    this.dashCooldown = 0;
    this.dashingDirection = 1;
    this.previousFPSTime = performance.now();
    this.FPSTime = this.previousFPSTime+2000;
    this.deaths = 0;
    this.levelJustCompleted=false;
    
  }
}
function DrawBlock(block, gameCanvas, gameCTX) {
  if (block.type==1) {
    gameCTX.fillStyle = "#000000"
  } else if (block.type==2) {
    gameCTX.fillStyle = "#FF0000"
  } else if (block.type==3) {
    gameCTX.fillStyle = "#0000FF"
  } else if (block.type==4) {
    gameCTX.fillStyle = "#FF00FF"
  } else if (block.type==5) {
    gameCTX.fillStyle = "#00FF00"
  } 
  gameCTX.fillRect(block.x,gameCanvas.height-block.height-block.y,block.width,block.height);
}

function DrawBlocks(blocks,gameCanvas,gameCTX) {
  for (let i = 0; i < blocks.length; i++) {
    if ((blocks[i].type==3 || blocks[i].type==4)&& invisibleMode) {
      DrawBlock(blocks[i],gameCanvas,gameCTX);
    } else if (!invisibleMode) {
      DrawBlock(blocks[i],gameCanvas,gameCTX);
    }
    
  }
}
var r = 256;
var ri = 1;
var g = 100;
var gi =2;
var b = 256;
var bi=1;
function DrawPlayer(player, gameCanvas, gameCTX) {
  if (player.dashCooldown<0) {
    if (!canvasRefresh) {
      if (r==256) {
        ri=-1;
      }
      if (g==256) {
        gi=-2;
      }
      if (b==256) {
        bi=-1;
      }
      if (r==100) {
        ri=1;
      }
      if (g==100) {
        gi=2;
      }
      if (b==0) {
        bi=1;
      }
      gameCTX.fillStyle = "rgba("+r+", "+g+", "+b+")";
      r+=ri;
      g+=gi;
      b+=bi;
    } else {
      gameCTX.fillStyle = "#9000FF";
    }
  } else {
    gameCTX.fillStyle = "#5000FF";
  }
  
  if (performanceMode)
    gameCTX.fillRect(Math.round(player.x),gameCanvas.height-player.height-Math.round(player.y),player.width,player.height);
  else {
    gameCTX.fillRect(player.x,gameCanvas.height-player.height-player.y,player.width,player.height);
  }
  gameCTX.fillStyle = "#000000";
}

function ClearStage(gameCanvas, gameCTX) {
  gameCTX.clearRect(0, 0, gameCanvas.width, gameCanvas.height);

}

function PreLoadLevels() {
  if (loadedLevels==0) {
    let levelPath = "level3.json"
    fetch(levelPath)
      .then(response => response.json())
      .then(res=> PreLoadLevel(res))
    
    
  } else if (loadedLevels==1) {
    levelPath = "level8.json"
    fetch(levelPath)
      .then(response => response.json())
      .then(res=> PreLoadLevel(res))
  } else if (loadedLevels==2) {
    levelPath = "level6.json"
    fetch(levelPath)
      .then(response => response.json())
      .then(res=> PreLoadLevel(res))
  } else if (loadedLevels==3) {
    levelPath = "level1.json"
    fetch(levelPath)
      .then(response => response.json())
      .then(res=> PreLoadLevel(res))
  } else if (loadedLevels==4) {
    levelPath = "level4.json"
    fetch(levelPath)
      .then(response => response.json())
      .then(res=> PreLoadLevel(res))
  } else if (loadedLevels==5) {
    levelPath = "level7.json"
    fetch(levelPath)
      .then(response => response.json())
      .then(res=> PreLoadLevel(res))
    
  } else if (loadedLevels==6) {
    levelPath = "level2.json"
    fetch(levelPath)
      .then(response => response.json())
      .then(res=> PreLoadLevel(res))
  
  } else if (loadedLevels==7) {
    levelPath = "level5.json"
    fetch(levelPath)
      .then(response => response.json())
      .then(res=> PreLoadLevel(res))
  
  }else if (loadedLevels==8) {
    levelPath = "level9.json"
    fetch(levelPath)
      .then(response => response.json())
      .then(res=> PreLoadLevel(res))
  
  } else if (loadedLevels==9) {
    levelPath = "level10.json"
    fetch(levelPath)
      .then(response => response.json())
      .then(res=> PreLoadLevel(res))
  
  } else if (loadedLevels==10) {
    levelPath = "level11.json"
    fetch(levelPath)
      .then(response => response.json())
      .then(res=> PreLoadLevel(res))
  
  }
  
  
  
  
  
}
function PreLoadLevel(level) {
  preLoadedLevels.push([]);

  preLoadedLevels[loadedLevels].push(level[0]);
  for (let i = 1; i < level.length; i++) {
    preLoadedLevels[loadedLevels].push(new solidBlock(level[i]))
  }
  if (loadedLevels==0) {
    blocks = preLoadedLevels[0];
    Initialize();
  }
  loadedLevels += 1;
  PreLoadLevels();
  
}
function LoadLevel(level) {
  blocks = []
  for (let i = 0; i < level.length; i++) {
    blocks.push(new solidBlock(level[i]))
  }
  levelChanged = true;
}

function Main(){

  PreLoadLevels();
}

function Initialize() {

  
  let mainPlayer = new player(0,100,15,15,0,0,3,false);
  
  let gameCanvas = document.getElementById("gameCanvas");
  let gameCTX = gameCanvas.getContext("2d");
  
  let debugText = [];
  gameCTX.imageSmoothingEnabled = false;

  debugText.push(document.getElementById("fps"));
  debugText.push(document.getElementById("timer"));
  debugText.push(document.getElementById("position"));
  debugText.push(document.getElementById("velocity"));
  debugText.push(document.getElementById("collisionBottom"));
  debugText.push(document.getElementById("collisionTop"));
  debugText.push(document.getElementById("collisionRight"));
  debugText.push(document.getElementById("collisionLeft"));
  debugText.push(document.getElementById("coyoteTime"));
  debugText.push(document.getElementById("dashCooldown"));
  debugText.push(document.getElementById("dashTimer"));
  debugText.push(document.getElementById("deltaTime"));
  debugText.push(document.getElementById("deaths"));

  //LoadLevel(level);
  let coyoteTime = 0.02;
  
  let gravity = 0.3;

  
  mainPlayer = Death(mainPlayer);
  DrawBlocks(blocks,gameCanvas,gameCTX);
  DrawPlayer(mainPlayer, gameCanvas, gameCTX);
  
  window.requestAnimationFrame(function() {
    GameLoop(performance.now(), mainPlayer, gravity, gameCanvas, gameCTX, debugText, coyoteTime);
  });
}

function GameLoop(previousTime, mainPlayer, gravity, gameCanvas, gameCTX, debugText, coyoteTime) {
  if (/*mainPlayer.levelCompleted &&*/ levelSubmit) {
    SubmitTime(mainPlayer);
  }
  if (canvasRefresh) {
    ClearStage(gameCanvas, gameCTX);
  }
  if (invisibleModeJustPressed) {
    ClearStage(gameCanvas, gameCTX);
    invisibleModeJustPressed=false;
  }
  gameCTX.imageSmoothingEnabled = false;
  mainPlayer.FPSTime = performance.now();
  
  if (levelChanged) {
    
    mainPlayer = Restart(mainPlayer);
    mainPlayer.deaths = 0;
    levelChanged = false;
  }

  
  let time = performance.now();
  let deltaTime = 0;
  if (slowMotion) {
    deltaTime = ((time-previousTime)/1000) /5
  } else {
    deltaTime = ((time-previousTime)/1000)
  }
  
  if (!paused) {
    
    
    if (!mainPlayer.started && (mainPlayer.xVelocity!=0 || mainPlayer.yVelocity!=0)) {
      mainPlayer.started=true;
    }
  
    if (!mainPlayer.levelCompleted && mainPlayer.started) {
      mainPlayer.timer += deltaTime; 
    }
    

  
    if (mainPlayer.jumping || mainPlayer.yVelocity<0) {
      coyoteTime-=0.1 * deltaTime;
    }
  
    if (deathPressed) {
      mainPlayer = Death(mainPlayer);
    }
  
    if (restartPressed) {
      mainPlayer = Restart(mainPlayer);
    }
    
    mainPlayer = DetectFloorDeath(mainPlayer);
    mainPlayer = Gravity(mainPlayer,deltaTime, blocks);

    for (let i = 0; i < mainPlayer.collisionBottomObjects.length; i++) {
      if (mainPlayer.collisionBottomObjects[i].type==1) {
        mainPlayer.jumping = false;
        coyoteTime = 0.02;
      } 
    }
    mainPlayer = HandleInput(mainPlayer, deltaTime, blocks, coyoteTime);
    if (dashPressed && mainPlayer.dashCooldown<0) {
      mainPlayer.dashCooldown = 5;
      mainPlayer.dashing = true;
      
    }
    if (rightPressed) {
      mainPlayer.dashingDirection = 1;
    } else if (leftPressed) {
      mainPlayer.dashingDirection = 0;
    }
    
    if (mainPlayer.dashing && mainPlayer.dashingTimer>0) {

      if (mainPlayer.dashingDirection==1) {
        
        mainPlayer.xVelocity = 600

        
      } else {
        mainPlayer.xVelocity = -600
      }
        
      
      mainPlayer.dashingTimer -= 200*(deltaTime);
      if (mainPlayer.dashingTimer<0) {
        mainPlayer.xVelocity = 0;
      }

       
      
        
      mainPlayer.dashCooldown = 3;
      
    } else {
       
      mainPlayer.dashing = false;
      mainPlayer.dashingTimer =20;
      mainPlayer.dashCooldown -= 10*deltaTime;
    }
    mainPlayer = UpdatePosition(mainPlayer, blocks, deltaTime);
    
    DrawBlocks(blocks,gameCanvas,gameCTX);
    
    
    DrawPlayer(mainPlayer,gameCanvas,gameCTX);

    if (mainPlayer.FPSTime>=mainPlayer.previousFPSTime+100) {
      mainPlayer.previousFPSTime = mainPlayer.FPSTime;
      
      if (slowMotion) {
        debugText[0].innerHTML = "FPS: " + (1/deltaTime/5).toFixed(5);
      } else {
        debugText[0].innerHTML = "FPS: " + (1/deltaTime).toFixed(5);
      }
    }
    
    
    debugText[1].innerHTML = "Timer: " + mainPlayer.timer.toFixed(2)
    debugText[12].innerHTML = "Deaths: " + mainPlayer.deaths
    if (debugOn) {
      debugText[2].innerHTML = "X: " + mainPlayer.x.toFixed(5) + " Y: " +mainPlayer.y.toFixed(5);
      debugText[3].innerHTML = "X velocity: " + mainPlayer.xVelocity.toFixed(5) + " Y velocity: " + mainPlayer.yVelocity.toFixed(5);
      debugText[4].innerHTML =  "Bottom Collision Objects: " + mainPlayer.collisionBottomObjects.length;
      debugText[5].innerHTML = "Top Collision Objects: " +mainPlayer.collisionTopObjects.length;
      debugText[6].innerHTML = "Right Collision Objects: " +mainPlayer.collisionRightObjects.length;
      debugText[7].innerHTML = "Left Collision Objects: " +mainPlayer.collisionLeftObjects.length;
      
      debugText[8].innerHTML = "Coyote Time: " + coyoteTime;
      debugText[9].innerHTML = "Dash Cooldown: " + mainPlayer.dashCooldown;
      debugText[10].innerHTML = "Dash Timer: "  + mainPlayer.dashingTimer + mainPlayer.dashing;

      debugText[11].innerHTML = "DeltaTime: "  + deltaTime
    }
  } else {
    DrawBlocks(blocks,gameCanvas,gameCTX);
    DrawPlayer(mainPlayer,gameCanvas,gameCTX);
  }
  previousTime = time;
  requestAnimationFrame(function() {
    GameLoop(previousTime, mainPlayer, gravity, gameCanvas, gameCTX, debugText, coyoteTime)
  });
  
}


function UpdatePosition(mainPlayer, blocks, deltaTime) {
  //mainPlayer.x+=mainPlayer.xVelocity
  //mainPlayer.y+=mainPlayer.yVelocity
  let i=0;
  if (mainPlayer.xVelocity>0) {
    while (i<mainPlayer.xVelocity && mainPlayer.xVelocity != 0) {
      mainPlayer = CollisionDetection(blocks, mainPlayer);
      mainPlayer = HandleCollision(mainPlayer);
      if (mainPlayer.xVelocity!=0) {
        mainPlayer.x += 1 * deltaTime;
      }

      
      
      i+=1;
    }
  } else {
    while (i>mainPlayer.xVelocity && mainPlayer.xVelocity != 0) {
      mainPlayer = CollisionDetection(blocks, mainPlayer);
      mainPlayer = HandleCollision(mainPlayer);
      if (mainPlayer.xVelocity!=0) {
        mainPlayer.x -= 1 * deltaTime;
      }
      
      
      
      i-=1;
    }
  }
  
  

  let j=0;
  if (mainPlayer.yVelocity>0) {
    while (j<mainPlayer.yVelocity && mainPlayer.yVelocity != 0) {
      mainPlayer = CollisionDetection(blocks, mainPlayer);
      mainPlayer = HandleCollision(mainPlayer);
      if (mainPlayer.yVelocity!=0) {
        mainPlayer.y += 1 * deltaTime;
      }
      
      j+=1;
    }
  } else {
    while (j>mainPlayer.yVelocity && mainPlayer.yVelocity != 0) {
      mainPlayer = CollisionDetection(blocks, mainPlayer);
      mainPlayer = HandleCollision(mainPlayer);
      if (mainPlayer.yVelocity!=0) {
        mainPlayer.y -= 1 * deltaTime;
      }
      
      
      j-=1;
    }
  }
  


  return mainPlayer
}

function CollisionDetection(blocks, mainPlayer) {
  
  mainPlayer.collisionRightObjects = [];
  mainPlayer.collisionLeftObjects = [];
  mainPlayer.collisionBottomObjects = [];
  mainPlayer.collisionTopObjects = [];
  i=2
  for (let i = 0; i < blocks.length; i++) {
    if (mainPlayer.x + mainPlayer.width >= blocks[i].x && mainPlayer.x + mainPlayer.width <= blocks[i].x + 5 && mainPlayer.y + mainPlayer.height >= blocks[i].y+1 && mainPlayer.y <= blocks[i].y + blocks[i].height-1) {
      mainPlayer.collisionRightObjects.push(blocks[i]);
    } 
    if (mainPlayer.x <= blocks[i].x + blocks[i].width && mainPlayer.x >= blocks[i].x + (blocks[i].width - 5) && mainPlayer.y + mainPlayer.height >= blocks[i].y+1 && mainPlayer.y <= blocks[i].y + blocks[i].height-1) {
      mainPlayer.collisionLeftObjects.push(blocks[i]);
    }

    if (mainPlayer.y + mainPlayer.height >= blocks[i].y && mainPlayer.y + mainPlayer.height<= blocks[i].y + 5 && mainPlayer.x + mainPlayer.width >= blocks[i].x+1 && mainPlayer.x <= blocks[i].x + blocks[i].width -1) {
      mainPlayer.collisionTopObjects.push(blocks[i]);
    }

    if (mainPlayer.y <= blocks[i].y + blocks[i].height && mainPlayer.y >= blocks[i].y + (blocks[i].height-5) && mainPlayer.x + mainPlayer.width >= blocks[i].x+1 && mainPlayer.x <= blocks[i].x + blocks[i].width-1) {
      mainPlayer.collisionBottomObjects.push(blocks[i]);

    }
    
  }

  return mainPlayer;
}

function HandleCollision(mainPlayer) {
  let collidedWithBounce = false;
  for (let i = 0; i < mainPlayer.collisionRightObjects.length; i++) {
    if (mainPlayer.collisionRightObjects[i].type==1) {
      if (mainPlayer.collisionRightObjects.length != 0) {
        if (mainPlayer.xVelocity>=0) {
          mainPlayer.xVelocity = 0;
        }
    
      }
    } else if (mainPlayer.collisionRightObjects[i].type==2) {
      mainPlayer = Death(mainPlayer);
    } else if (mainPlayer.collisionRightObjects[i].type==3) {
      mainPlayer.spawnX = mainPlayer.collisionRightObjects[i].x;
      mainPlayer.spawnY = mainPlayer.collisionRightObjects[i].y;
    } else if (mainPlayer.collisionRightObjects[i].type==4) {
      LevelCompleted(mainPlayer);
    } else if (mainPlayer.collisionRightObjects[i].type==5 && !collidedWithBounce) {
      
      collidedWithBounce = true;
      mainPlayer.y+=3;
      if (mainPlayer.yVelocity<-300) {
        mainPlayer.yVelocity = (mainPlayer.yVelocity*-1)-2;
      } else {
        mainPlayer.yVelocity = 300;
      }
      
    }
    
  }
  for (let i = 0; i < mainPlayer.collisionLeftObjects.length; i++) {
    if (mainPlayer.collisionLeftObjects[i].type==1) {
      if (mainPlayer.collisionLeftObjects.length != 0) {
        if (mainPlayer.xVelocity<=0) {
          mainPlayer.xVelocity = 0;
        }
      }
    } else if (mainPlayer.collisionLeftObjects[i].type==2) {
      mainPlayer = Death(mainPlayer);
    } else if (mainPlayer.collisionLeftObjects[i].type==3) {
      mainPlayer.spawnX = mainPlayer.collisionLeftObjects[i].x;
      mainPlayer.spawnY = mainPlayer.collisionLeftObjects[i].y;
    } else if (mainPlayer.collisionLeftObjects[i].type==4) {
      LevelCompleted(mainPlayer);
    } else if (mainPlayer.collisionLeftObjects[i].type==5 && !collidedWithBounce) {
      collidedWithBounce = true;
      mainPlayer.y+=3;
      if (mainPlayer.yVelocity<-300) {
        mainPlayer.yVelocity = (mainPlayer.yVelocity*-1)-2;
      } else {
        mainPlayer.yVelocity = 300;
      }
    }
  }
  for (let i = 0; i < mainPlayer.collisionBottomObjects.length; i++) {
    if (mainPlayer.collisionBottomObjects[i].type==1) {
      
      if (mainPlayer.collisionBottomObjects.length != 0) {
        if (mainPlayer.yVelocity<=0) {
          mainPlayer.yVelocity = 0;
        }
      
      }
    } else if (mainPlayer.collisionBottomObjects[i].type==2) {
      mainPlayer = Death(mainPlayer);
    } else if (mainPlayer.collisionBottomObjects[i].type==3) {
      mainPlayer.spawnX = mainPlayer.collisionBottomObjects[i].x;
      mainPlayer.spawnY = mainPlayer.collisionBottomObjects[i].y;
    } else if (mainPlayer.collisionBottomObjects[i].type==4) {
      LevelCompleted(mainPlayer);
    } else if (mainPlayer.collisionBottomObjects[i].type==5 && !collidedWithBounce) {
      collidedWithBounce = true;
      mainPlayer.y+=3;
      if (mainPlayer.yVelocity<-300) {
        mainPlayer.yVelocity = (mainPlayer.yVelocity*-1)-2;
      } else {
        mainPlayer.yVelocity = 300;
      }
    }
  }
  for (let i = 0; i < mainPlayer.collisionTopObjects.length; i++) {
    if (mainPlayer.collisionTopObjects[i].type==1) {
      if (mainPlayer.collisionTopObjects.length != 0) {
        if (mainPlayer.yVelocity>=0) {
          mainPlayer.yVelocity = 0;
        }
    
      }
    } else if (mainPlayer.collisionTopObjects[i].type==2) {
      mainPlayer = Death(mainPlayer);
    } else if (mainPlayer.collisionTopObjects[i].type==3) {
      mainPlayer.spawnX = mainPlayer.collisionTopObjects[i].x;
      mainPlayer.spawnY = mainPlayer.collisionTopObjects[i].y;
    } else if (mainPlayer.collisionTopObjects[i].type==4) {
      LevelCompleted(mainPlayer);
    } else if (mainPlayer.collisionTopObjects[i].type==5 && !collidedWithBounce) {
      collidedWithBounce = true;
      mainPlayer.y+=3;
      if (mainPlayer.yVelocity<-300) {
        mainPlayer.yVelocity = (mainPlayer.yVelocity*-1)-2;
      } else {
        mainPlayer.yVelocity = 300;
      }
    }
  }
  return mainPlayer
}

function LevelCompleted(mainPlayer) {
  mainPlayer.levelCompleted = true;
  
  document.getElementById("timer").style.color="blue";
  
    

  
    
  
  mainPlayer.levelJustCompleted=true;
  return mainPlayer
}

function SubmitTime(mainPlayer) {
  if (!timeSubmitted) {
    timeSubmitted = true;
    let name = prompt("Input name")
    SendSpeedrunTime(name,currentLevelID,mainPlayer.timer*1000,2)
  }
  
}
function Gravity(mainPlayer,deltaTime, blocks) {

  let gravity = 700;
  mainPlayer.yVelocity -= gravity * deltaTime;
  mainPlayer = CollisionDetection(blocks, mainPlayer);
  mainPlayer = HandleCollision(mainPlayer);

  
  
  
  

  return mainPlayer;
}

function HandleInput(mainPlayer, deltaTime, blocks, coyoteTime) {
  
  if (leftPressed && !mainPlayer.dashing) {
    mainPlayer.xVelocity = -200;
  }
  if (rightPressed && !mainPlayer.dashing) {
    mainPlayer.xVelocity = 200;
  }

  if (!leftPressed && !rightPressed && !mainPlayer.dashing) {
    mainPlayer.xVelocity = 0;
  }

  if (upPressed && coyoteTime>0 && !mainPlayer.jumping && mainPlayer.yVelocity<=0) {
    mainPlayer.jumping = true;
    mainPlayer.yVelocity = 290;
    mainPlayer = CollisionDetection(blocks, mainPlayer);
    mainPlayer = HandleCollision(mainPlayer);
    
  }
  return mainPlayer;
}

function DetectFloorDeath(mainPlayer) {
  if (mainPlayer.y<0) {
    mainPlayer = Death(mainPlayer);
  }
  return mainPlayer
}

function Death(mainPlayer) {
  //alert("test")
  if (mainPlayer.spawnX == 20 && mainPlayer.spawnY == 40) {
    if (slowMotion) {
      document.getElementById("timer").style.color="red";
    } else {
      document.getElementById("timer").style.color="black";
    }
    
    mainPlayer.timer = 0;
    mainPlayer.started = false;
  } else {
    mainPlayer.deaths+=1;
  }
  mainPlayer.dashing = false;
  mainPlayer.dashCooldown = 0;
  mainPlayer.dashingTimer = 1000;
  mainPlayer.xVelocity = 0;
  mainPlayer.yVelocity = 0;
  mainPlayer.x = mainPlayer.spawnX;
  mainPlayer.y = mainPlayer.spawnY;

  return mainPlayer;
}

function Restart(mainPlayer) {
  mainPlayer.deaths=0;
  document.getElementById("timer").style.color="black";
  mainPlayer.dashing = false;
  mainPlayer.dashCooldown = 0;
  mainPlayer.dashingTimer = 1000;
  mainPlayer.spawnX = 20;
  mainPlayer.spawnY = 40;
  mainPlayer.levelCompleted = false;
  mainPlayer = Death(mainPlayer);
  return mainPlayer
}

function SendSpeedrunTime(name,level,time,modifiers) {
  

  const form = document.createElement('form');
  form.target ="_blank"
  form.method = "post";
  form.action = "http://leaderboard.draqonboy.com/uploadrun.php";
  document.body.appendChild(form);

  
  const formField = document.createElement('input');
  formField.type = 'hidden';
  formField.name = "json";
  formField.value ='{"name":"'+String(name)+'","level":'+String(level)+',"time":'+String(time)+',"modifiers":'+String(modifiers)+',"secret":"BCEq7@48*Vsi#wgw"}';
  alert(formField.value)
  formField.onclick="https://platformerv2.alexgardiner.repl.co"
  form.appendChild(formField);
  form.submit();
  
}

window.onload = Main();