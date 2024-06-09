let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;
let restartPressed = false;
let deathPressed = false;
let slowMotion = false;
let dashPressed = false;
let controlPressed = false;
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
let currentLevelID = 1;
let timeSubmitted = false;
let levelStarted = false;
let invisibleRun = false;
let slowRun = false;
let crazyMode = false;
let flashing = false;
let coyoteTime = 0.02;

document.addEventListener("keydown", function (event) {
  // Music
  document.getElementById("audioelement").volume = 0.0;
  document.getElementById("audioelement").play();
  document.getElementById("audioelement").volume = 0.0;

  // Allows standard keybinds for control clicks
  if (event.keyCode == 17 || event.keyCode == 91) {
    controlPressed = true;
  }

  // Visual flavour
  if (event.keyCode == 220) {
    if (flashing) {
      flashing = false;
    } else {
      flashing = true;
    }
  }

  // Extra hard mode
  if (event.keyCode == 192) {
    if (crazyMode) {
      crazyMode = false;
      canvasRefresh = true;
      upPressed = false;
      downPressed = false;
      leftPressed = false;
      rightPressed = false;
      slowMotion = false;
      dashPressed = false;
      invisibleMode = false;
    } else {
      crazyMode = true;
    }
  }

  // Movement
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

  // Dashes
  if (event.keyCode == 67 || event.keyCode == 74) {
    dashPressed = true;
  }

  // Kills the player
  if (event.keyCode == 86) {
    deathPressed = true;
  }

  // Turns the player invisible
  if (event.keyCode == 78) {
    invisibleModeJustPressed = true;
    if (invisibleMode) {
      invisibleRun = false;
      invisibleMode = false;
    } else {
      invisibleMode = true;
      if (!levelStarted) {
        invisibleRun = true;
      }
    }
  }

  // Disables canvas refresh
  if (event.keyCode == 89) {
    if (canvasRefresh) {
      canvasRefresh = false;
    } else {
      canvasRefresh = true;
    }
  }

  // Restarts
  if (event.keyCode == 82) {
    restartPressed = true;
  }

  // Used to open a leadership server hosted by a friend, now redirects to a rickroll
  if (event.keyCode == 77) {
    window.open(
      "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwigtfK6yJb2AhWZIUQIHRp5AQ4QwqsBegQIBhAB&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdQw4w9WgXcQ&usg=AOvVaw0aHtehaphMhOCAkCydRLZU",
      "blank"
    );
  }

  // Slow motion
  if (event.keyCode == 79) {
    if (slowMotion) {
      slowMotion = false;
    } else {
      slowMotion = true;
      slowRun = true;
    }
  }

  // Pause
  if (event.keyCode == 80) {
    if (paused) {
      paused = false;
    } else {
      paused = true;
    }
  }

  // Enable performance mode
  if (event.keyCode == 85) {
    if (performanceMode) {
      performanceMode = false;
    } else {
      performanceMode = true;
    }
  }

  // Open debug mode
  if (event.keyCode == 71) {
    if (debugOn) {
      document.getElementsByClassName("shownDebugFeatures")[0].className =
        "hiddenDebugFeatures";
      debugOn = false;
    } else {
      document.getElementsByClassName("hiddenDebugFeatures")[0].className =
        "shownDebugFeatures";
      debugOn = true;
    }
  }

  // Switch levels
  if (loadedLevels > 12) {
    if (event.keyCode == 49) {
      currentLevelID = preLoadedLevels[0][0];
      blocks = preLoadedLevels[0].slice(1);
      levelChanged = true;
    }
    if (event.keyCode == 50) {
      currentLevelID = preLoadedLevels[1][0];
      blocks = preLoadedLevels[1].slice(1);
      levelChanged = true;
    }
    if (event.keyCode == 51) {
      currentLevelID = preLoadedLevels[2][0];
      blocks = preLoadedLevels[2].slice(1);
      levelChanged = true;
    }
    if (event.keyCode == 52) {
      currentLevelID = preLoadedLevels[3][0];
      blocks = preLoadedLevels[3].slice(1);
      levelChanged = true;
    }

    if (event.keyCode == 53) {
      currentLevelID = preLoadedLevels[4][0];
      blocks = preLoadedLevels[4].slice(1);
      levelChanged = true;
    }

    if (event.keyCode == 54) {
      currentLevelID = preLoadedLevels[5][0];
      blocks = preLoadedLevels[5].slice(1);
      levelChanged = true;
    }

    if (event.keyCode == 55) {
      currentLevelID = preLoadedLevels[6][0];
      blocks = preLoadedLevels[6].slice(1);
      levelChanged = true;
    }

    if (event.keyCode == 56) {
      currentLevelID = preLoadedLevels[7][0];
      blocks = preLoadedLevels[7].slice(1);
      levelChanged = true;
    }
    if (event.keyCode == 57) {
      currentLevelID = preLoadedLevels[8][0];
      blocks = preLoadedLevels[8].slice(1);
      levelChanged = true;
    }
    if (event.keyCode == 48) {
      currentLevelID = preLoadedLevels[9][0];
      blocks = preLoadedLevels[9].slice(1);
      levelChanged = true;
    }
    if (event.keyCode == 189 && !controlPressed) {
      currentLevelID = preLoadedLevels[10][0];
      blocks = preLoadedLevels[10].slice(1);
      levelChanged = true;
    }
    if (event.keyCode == 187 && !controlPressed) {
      currentLevelID = preLoadedLevels[11][0];
      blocks = preLoadedLevels[11].slice(1);
      levelChanged = true;
    }
    if (event.keyCode == 8) {
      currentLevelID = preLoadedLevels[12][0];
      blocks = preLoadedLevels[12].slice(1);
      levelChanged = true;
    }
  }
  if (event.keyCode == 186) {
    //levelSubmit = true;
  }
});

document.addEventListener("keyup", function (event) {
  // Allows pressing of - and + keys
  if (event.keyCode == 17 || event.keyCode == 91) {
    controlPressed = false;
  }

  // Movement
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

  // Dash
  if (event.keyCode == 67 || event.keyCode == 74) {
    dashPressed = false;
  }

  // Kills the player
  if (event.keyCode == 86) {
    deathPressed = false;
  }

  // Restarts
  if (event.keyCode == 82) {
    restartPressed = false;
  }

  // Submit levle
  if (event.keyCode == 186) {
    levelSubmit = false;
  }
});

// A class to define a single block
class solidBlock {
  constructor(block) {
    this.x = block.x;
    this.y = block.y;
    if (block.type == 2) {
      this.width = 16;
      this.height = 16;
    } else if (block.type == 5) {
      this.width = 16;
      this.height = 2;
    } else {
      this.width = 20;
      this.height = 20;
    }

    this.type = block.type;
  }
}

// The player class
class player {
  constructor(x, y, width, height, velocityX, velocityY, moveSpeed, jumping) {
    // Positions and velocities settings
    this.spawnX = 20;
    this.spawnY = 40;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.moveSpeed = moveSpeed;
    this.jumping = jumping;
    this.xVelocity = velocityX;
    this.yVelocity = velocityY;

    // Holds the objects collided with
    this.collisionTopObjects = [];
    this.collisionBottomObjects = [];
    this.collisionLeftObjects = [];
    this.collisionRightObjects = [];

    // Timer and completion boolean
    this.timer = 0;
    this.levelCompleted = false;

    // Dashing logic
    this.dashing = false;
    this.dashingTimer = 1000;
    this.dashCooldown = 0;
    this.dashingDirection = 1;

    // FPS compensation
    this.previousFPSTime = performance.now();
    this.FPSTime = this.previousFPSTime + 2000;

    // Counting number of deaths
    this.deaths = 0;
    this.levelJustCompleted = false;
  }
}

// Draws the various different block types
function DrawBlock(block, gameCanvas, gameCTX) {
  if (block.type == 1) {
    // Standard block
    gameCTX.fillStyle = "#000000";
  } else if (block.type == 2) {
    // Death block
    gameCTX.fillStyle = "#FF0000";
  } else if (block.type == 3) {
    // Checkpoint block
    gameCTX.fillStyle = "#0000FF";
  } else if (block.type == 4) {
    // Finish block
    gameCTX.fillStyle = "#FF00FF";
  } else if (block.type == 5) {
    // Jump block
    gameCTX.fillStyle = "#00FF00";
  }
  gameCTX.fillRect(
    block.x,
    gameCanvas.height - block.height - block.y,
    block.width,
    block.height
  );
}
// Draws all blocks onto the canvas
function DrawBlocks(blocks, gameCanvas, gameCTX) {
  for (let i = 0; i < blocks.length; i++) {
    if ((blocks[i].type == 3 || blocks[i].type == 4) && invisibleMode) {
      DrawBlock(blocks[i], gameCanvas, gameCTX);
    } else if (!invisibleMode) {
      DrawBlock(blocks[i], gameCanvas, gameCTX);
    }
  }
}

// Helper variables for when canvas refresh is disabled
var r = 256;
var ri = 1;
var g = 100;
var gi = 2;
var b = 256;
var bi = 1;
function DrawPlayer(player, gameCanvas, gameCTX) {
  if (player.dashCooldown < 0) {
    if (!canvasRefresh) {
      // The player's color changes each frame so it is possible to see the player's locationn
      if (r == 256) {
        ri = -1;
      }
      if (g == 256) {
        gi = -2;
      }
      if (b == 256) {
        bi = -1;
      }
      if (r == 100) {
        ri = 1;
      }
      if (g == 100) {
        gi = 2;
      }
      if (b == 0) {
        bi = 1;
      }
      gameCTX.fillStyle = "rgba(" + r + ", " + g + ", " + b + ")";
      r += ri;
      g += gi;
      b += bi;
    } else {
      gameCTX.fillStyle = "#9000FF";
    }
  } else {
    gameCTX.fillStyle = "#5000FF";
  }

  // Rounds the player's position for added performance
  if (performanceMode)
    gameCTX.fillRect(
      Math.round(player.x),
      gameCanvas.height - player.height - Math.round(player.y),
      player.width,
      player.height
    );
  // Draws player to canvas
  else {
    gameCTX.fillRect(
      player.x,
      gameCanvas.height - player.height - player.y,
      player.width,
      player.height
    );
  }
  gameCTX.fillStyle = "#000000";
}

// Clears the canvas
function ClearStage(gameCanvas, gameCTX) {
  gameCTX.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
}

// Preloads levels
function PreLoadLevels() {
  // Gets the level data as a json file
  if (loadedLevels == 0) {
    let levelPath = "levels/level3.json";
    fetch(levelPath)
      .then((response) => response.json())
      .then((res) => PreLoadLevel(res));
  } else if (loadedLevels == 1) {
    levelPath = "levels/level8.json";
    fetch(levelPath)
      .then((response) => response.json())
      .then((res) => PreLoadLevel(res));
  } else if (loadedLevels == 2) {
    levelPath = "levels/level6.json";
    fetch(levelPath)
      .then((response) => response.json())
      .then((res) => PreLoadLevel(res));
  } else if (loadedLevels == 3) {
    levelPath = "levels/level1.json";
    fetch(levelPath)
      .then((response) => response.json())
      .then((res) => PreLoadLevel(res));
  } else if (loadedLevels == 4) {
    levelPath = "levels/level4.json";
    fetch(levelPath)
      .then((response) => response.json())
      .then((res) => PreLoadLevel(res));
  } else if (loadedLevels == 5) {
    levelPath = "levels/level7.json";
    fetch(levelPath)
      .then((response) => response.json())
      .then((res) => PreLoadLevel(res));
  } else if (loadedLevels == 6) {
    levelPath = "levels/level2.json";
    fetch(levelPath)
      .then((response) => response.json())
      .then((res) => PreLoadLevel(res));
  } else if (loadedLevels == 7) {
    levelPath = "levels/level5.json";
    fetch(levelPath)
      .then((response) => response.json())
      .then((res) => PreLoadLevel(res));
  } else if (loadedLevels == 8) {
    levelPath = "levels/level9.json";
    fetch(levelPath)
      .then((response) => response.json())
      .then((res) => PreLoadLevel(res));
  } else if (loadedLevels == 9) {
    levelPath = "levels/level10.json";
    fetch(levelPath)
      .then((response) => response.json())
      .then((res) => PreLoadLevel(res));
  } else if (loadedLevels == 10) {
    levelPath = "levels/level11.json";
    fetch(levelPath)
      .then((response) => response.json())
      .then((res) => PreLoadLevel(res));
  } else if (loadedLevels == 11) {
    levelPath = "levels/level12.json";
    fetch(levelPath)
      .then((response) => response.json())
      .then((res) => PreLoadLevel(res));
  } else if (loadedLevels == 12) {
    levelPath = "levels/level13.json";
    fetch(levelPath)
      .then((response) => response.json())
      .then((res) => PreLoadLevel(res));
  }
}

// Parses the json data and creates the block objects
function PreLoadLevel(level) {
  preLoadedLevels.push([]);

  preLoadedLevels[loadedLevels].push(level[0]);
  for (let i = 1; i < level.length; i++) {
    preLoadedLevels[loadedLevels].push(new solidBlock(level[i]));
  }
  if (loadedLevels == 0) {
    blocks = preLoadedLevels[0];
    Initialize();
  }
  loadedLevels += 1;
  PreLoadLevels();
}

// Old level loading function
function LoadLevel(level) {
  blocks = [];
  for (let i = 0; i < level.length; i++) {
    blocks.push(new solidBlock(level[i]));
  }
  levelChanged = true;
}

// Runs at init
function Main() {
  PreLoadLevels();
}

// Initialize scene
function Initialize() {
  // Creates player
  let mainPlayer = new player(0, 100, 15, 15, 0, 0, 3, false);

  // Creates canvas
  let gameCanvas = document.getElementById("gameCanvas");
  let gameCTX = gameCanvas.getContext("2d");

  let debugText = [];
  gameCTX.imageSmoothingEnabled = false;

  // Sets up debug
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

  let gravity = 0.3;

  // Kills player
  mainPlayer = Death(mainPlayer);

  // Draws player
  DrawBlocks(blocks, gameCanvas, gameCTX);
  DrawPlayer(mainPlayer, gameCanvas, gameCTX);

  // Starts main loop
  window.requestAnimationFrame(function () {
    GameLoop(
      performance.now(),
      mainPlayer,
      gravity,
      gameCanvas,
      gameCTX,
      debugText,
      coyoteTime
    );
  });
}

function GameLoop(
  previousTime,
  mainPlayer,
  gravity,
  gameCanvas,
  gameCTX,
  debugText,
  coyoteTime
) {
  // Adds random inputs on top of player's
  if (crazyMode) {
    if (Math.random() * (100 - 0 + 1) + 0 < 10) {
      if (canvasRefresh) {
        canvasRefresh = false;
      } else {
        canvasRefresh = true;
      }
    }
    if (Math.random() * (100 - 0 + 1) + 0 < 10) {
      upPressed = true;
    }
    if (Math.random() * (100 - 0 + 1) + 0 < 10) {
      upPressed = false;
    }
    if (Math.random() * (100 - 0 + 1) + 0 < 10) {
      downPressed = true;
    }
    if (Math.random() * (100 - 0 + 1) + 0 < 10) {
      downPressed = false;
    }
    if (Math.random() * (100 - 0 + 1) + 0 < 10) {
      leftPressed = true;
    }
    if (Math.random() * (100 - 0 + 1) + 0 < 10) {
      leftPressed = false;
    }
    if (Math.random() * (100 - 0 + 1) + 0 < 10) {
      rightPressed = true;
    }
    if (Math.random() * (100 - 0 + 1) + 0 < 10) {
      rightPressed = false;
    }
    if (Math.random() * (100 - 0 + 1) + 0 < 0.5) {
      dashPressed = true;
    }
    if (Math.random() * (100 - 0 + 1) + 0 < 1) {
      slowMotion = true;
    }
    if (Math.random() * (100 - 0 + 1) + 0 < 5) {
      slowMotion = false;
    }
    if (Math.random() * (100 - 0 + 1) + 0 < 15 && flashing) {
      invisibleMode = true;
    }
    if (Math.random() * (100 - 0 + 1) + 0 < 15) {
      invisibleMode = false;
    }
  }

  // Debug logs
  if (slowRun) {
    document.getElementById("SlowRun").style.display = "inline";
  } else {
    document.getElementById("SlowRun").style.display = "none";
  }

  if (invisibleRun) {
    document.getElementById("InvisRun").style.display = "inline";
  } else {
    document.getElementById("InvisRun").style.display = "none";
  }

  // Used to submit time to a leaderboard
  if (mainPlayer.levelCompleted && levelSubmit) {
    SubmitTime(mainPlayer);
  }

  // Refreshes the canvas
  if (canvasRefresh) {
    ClearStage(gameCanvas, gameCTX);
  }

  // Clears canvas on player invisible
  if (invisibleModeJustPressed) {
    ClearStage(gameCanvas, gameCTX);
    invisibleModeJustPressed = false;
  }
  gameCTX.imageSmoothingEnabled = false;
  mainPlayer.FPSTime = performance.now();

  // Updates values if level changed
  if (levelChanged) {
    timeSubmitted = false;
    mainPlayer = Restart(mainPlayer);
    mainPlayer.deaths = 0;
    levelChanged = false;
  }

  // Handles delta time
  let time = performance.now();
  let deltaTime = 0;

  // Turns speed down if slow motion
  if (slowMotion) {
    deltaTime = (time - previousTime) / 1000 / 5;
  } else {
    deltaTime = (time - previousTime) / 1000;
  }

  // Moves player if not paused
  if (!paused) {
    if (
      !levelStarted &&
      (mainPlayer.xVelocity != 0 || mainPlayer.yVelocity != 0)
    ) {
      levelStarted = true;
    }

    if (!mainPlayer.levelCompleted && levelStarted) {
      mainPlayer.timer += deltaTime;
    }

    if (mainPlayer.jumping || mainPlayer.yVelocity < 0) {
      coyoteTime -= 0.1 * deltaTime;
    }

    // Checks for death and restart buttons
    if (deathPressed) {
      mainPlayer = Death(mainPlayer);
    }

    if (restartPressed) {
      mainPlayer = Restart(mainPlayer);
    }

    // Checks for floor collisions
    mainPlayer = DetectFloorDeath(mainPlayer);

    // Moves player down from gravity
    mainPlayer = Gravity(mainPlayer, deltaTime, blocks);

    // Allows jump if touching the floor
    for (let i = 0; i < mainPlayer.collisionBottomObjects.length; i++) {
      if (mainPlayer.collisionBottomObjects[i].type == 1) {
        mainPlayer.jumping = false;
        coyoteTime = 0.02;
      }
    }

    // Handles player input
    mainPlayer = HandleInput(mainPlayer, deltaTime, blocks, coyoteTime);

    // Handles dashing
    if (dashPressed && mainPlayer.dashCooldown < 0) {
      mainPlayer.dashCooldown = 5;
      mainPlayer.dashing = true;
    }

    if (rightPressed) {
      mainPlayer.dashingDirection = 1;
    } else if (leftPressed) {
      mainPlayer.dashingDirection = 0;
    }

    if (mainPlayer.dashing && mainPlayer.dashingTimer > 0) {
      if (mainPlayer.dashingDirection == 1) {
        mainPlayer.xVelocity = 600;
      } else {
        mainPlayer.xVelocity = -600;
      }

      mainPlayer.dashingTimer -= 200 * deltaTime;
      if (mainPlayer.dashingTimer < 0) {
        mainPlayer.xVelocity = 0;
      }

      mainPlayer.dashCooldown = 3;
    } else {
      mainPlayer.dashing = false;
      mainPlayer.dashingTimer = 20;
      mainPlayer.dashCooldown -= 10 * deltaTime;
    }

    // Moves player
    mainPlayer = UpdatePosition(mainPlayer, blocks, deltaTime);

    // Draws blocks and player
    DrawBlocks(blocks, gameCanvas, gameCTX);
    DrawPlayer(mainPlayer, gameCanvas, gameCTX);

    // Lots of logging
    if (mainPlayer.FPSTime >= mainPlayer.previousFPSTime + 100) {
      mainPlayer.previousFPSTime = mainPlayer.FPSTime;

      if (slowMotion) {
        debugText[0].innerHTML = "FPS: " + (1 / deltaTime / 5).toFixed(5);
      } else {
        debugText[0].innerHTML = "FPS: " + (1 / deltaTime).toFixed(5);
      }
    }

    debugText[1].innerHTML =
      "Timer: " + (Math.floor(mainPlayer.timer * 1000) / 1000).toFixed(2);
    debugText[12].innerHTML = "Deaths: " + mainPlayer.deaths;
    if (debugOn) {
      debugText[2].innerHTML =
        "X: " + mainPlayer.x.toFixed(5) + " Y: " + mainPlayer.y.toFixed(5);
      debugText[3].innerHTML =
        "X velocity: " +
        mainPlayer.xVelocity.toFixed(5) +
        " Y velocity: " +
        mainPlayer.yVelocity.toFixed(5);
      debugText[4].innerHTML =
        "Bottom Collision Objects: " + mainPlayer.collisionBottomObjects.length;
      debugText[5].innerHTML =
        "Top Collision Objects: " + mainPlayer.collisionTopObjects.length;
      debugText[6].innerHTML =
        "Right Collision Objects: " + mainPlayer.collisionRightObjects.length;
      debugText[7].innerHTML =
        "Left Collision Objects: " + mainPlayer.collisionLeftObjects.length;

      debugText[8].innerHTML = "Coyote Time: " + coyoteTime;
      debugText[9].innerHTML = "Dash Cooldown: " + mainPlayer.dashCooldown;
      debugText[10].innerHTML =
        "Dash Timer: " + mainPlayer.dashingTimer + mainPlayer.dashing;

      debugText[11].innerHTML = "DeltaTime: " + deltaTime;
    }
  } else {
    DrawBlocks(blocks, gameCanvas, gameCTX);
    DrawPlayer(mainPlayer, gameCanvas, gameCTX);
  }
  previousTime = time;
  requestAnimationFrame(function () {
    GameLoop(
      previousTime,
      mainPlayer,
      gravity,
      gameCanvas,
      gameCTX,
      debugText,
      coyoteTime
    );
  });
}

// Updates player's postiiotn and checks collisiosns
function UpdatePosition(mainPlayer, blocks, deltaTime) {
  //mainPlayer.x+=mainPlayer.xVelocity
  //mainPlayer.y+=mainPlayer.yVelocity
  let i = 0;
  if (mainPlayer.xVelocity > 0) {
    while (i < mainPlayer.xVelocity && mainPlayer.xVelocity != 0) {
      mainPlayer = CollisionDetection(blocks, mainPlayer);
      mainPlayer = HandleCollision(mainPlayer);
      if (mainPlayer.xVelocity != 0) {
        mainPlayer.x += 1 * deltaTime;
      }

      i += 1;
    }
  } else {
    while (i > mainPlayer.xVelocity && mainPlayer.xVelocity != 0) {
      mainPlayer = CollisionDetection(blocks, mainPlayer);
      mainPlayer = HandleCollision(mainPlayer);
      if (mainPlayer.xVelocity != 0) {
        mainPlayer.x -= 1 * deltaTime;
      }

      i -= 1;
    }
  }

  let j = 0;
  if (mainPlayer.yVelocity > 0) {
    while (j < mainPlayer.yVelocity && mainPlayer.yVelocity != 0) {
      mainPlayer = CollisionDetection(blocks, mainPlayer);
      mainPlayer = HandleCollision(mainPlayer);
      if (mainPlayer.yVelocity != 0) {
        mainPlayer.y += 1 * deltaTime;
      }

      j += 1;
    }
  } else {
    while (j > mainPlayer.yVelocity && mainPlayer.yVelocity != 0) {
      mainPlayer = CollisionDetection(blocks, mainPlayer);
      mainPlayer = HandleCollision(mainPlayer);
      if (mainPlayer.yVelocity != 0) {
        mainPlayer.y -= 1 * deltaTime;
      }

      j -= 1;
    }
  }

  return mainPlayer;
}

// Checks player collisions with blocks
function CollisionDetection(blocks, mainPlayer) {
  mainPlayer.collisionRightObjects = [];
  mainPlayer.collisionLeftObjects = [];
  mainPlayer.collisionBottomObjects = [];
  mainPlayer.collisionTopObjects = [];
  i = 2;
  for (let i = 0; i < blocks.length; i++) {
    if (
      mainPlayer.x + mainPlayer.width >= blocks[i].x &&
      mainPlayer.x + mainPlayer.width <= blocks[i].x + 5 &&
      mainPlayer.y + mainPlayer.height >= blocks[i].y + 1 &&
      mainPlayer.y <= blocks[i].y + blocks[i].height - 1
    ) {
      mainPlayer.collisionRightObjects.push(blocks[i]);
    }
    if (
      mainPlayer.x <= blocks[i].x + blocks[i].width &&
      mainPlayer.x >= blocks[i].x + (blocks[i].width - 5) &&
      mainPlayer.y + mainPlayer.height >= blocks[i].y + 1 &&
      mainPlayer.y <= blocks[i].y + blocks[i].height - 1
    ) {
      mainPlayer.collisionLeftObjects.push(blocks[i]);
    }

    if (
      mainPlayer.y + mainPlayer.height >= blocks[i].y &&
      mainPlayer.y + mainPlayer.height <= blocks[i].y + 5 &&
      mainPlayer.x + mainPlayer.width >= blocks[i].x + 1 &&
      mainPlayer.x <= blocks[i].x + blocks[i].width - 1
    ) {
      mainPlayer.collisionTopObjects.push(blocks[i]);
    }

    if (
      mainPlayer.y <= blocks[i].y + blocks[i].height &&
      mainPlayer.y >= blocks[i].y + (blocks[i].height - 5) &&
      mainPlayer.x + mainPlayer.width >= blocks[i].x + 1 &&
      mainPlayer.x <= blocks[i].x + blocks[i].width - 1
    ) {
      mainPlayer.collisionBottomObjects.push(blocks[i]);
    }
  }

  return mainPlayer;
}

// Handles collisions based on type and location
function HandleCollision(mainPlayer) {
  let collidedWithBounce = false;
  for (let i = 0; i < mainPlayer.collisionRightObjects.length; i++) {
    if (mainPlayer.collisionRightObjects[i].type == 1) {
      if (mainPlayer.collisionRightObjects.length != 0) {
        if (mainPlayer.xVelocity >= 0) {
          mainPlayer.xVelocity = 0;
        }
      }
    } else if (mainPlayer.collisionRightObjects[i].type == 2) {
      mainPlayer = Death(mainPlayer);
    } else if (mainPlayer.collisionRightObjects[i].type == 3) {
      mainPlayer.spawnX = mainPlayer.collisionRightObjects[i].x;
      mainPlayer.spawnY = mainPlayer.collisionRightObjects[i].y;
    } else if (mainPlayer.collisionRightObjects[i].type == 4) {
      LevelCompleted(mainPlayer);
    } else if (
      mainPlayer.collisionRightObjects[i].type == 5 &&
      !collidedWithBounce
    ) {
      collidedWithBounce = true;
      mainPlayer.y += 3;
      mainPlayer.jumping = true;
      coyoteTime = 0;
      if (mainPlayer.yVelocity < -300) {
        mainPlayer.yVelocity = mainPlayer.yVelocity * -1 - 2;
      } else {
        mainPlayer.yVelocity = 300;
      }
    }
  }
  for (let i = 0; i < mainPlayer.collisionLeftObjects.length; i++) {
    if (mainPlayer.collisionLeftObjects[i].type == 1) {
      if (mainPlayer.collisionLeftObjects.length != 0) {
        if (mainPlayer.xVelocity <= 0) {
          mainPlayer.xVelocity = 0;
        }
      }
    } else if (mainPlayer.collisionLeftObjects[i].type == 2) {
      mainPlayer = Death(mainPlayer);
    } else if (mainPlayer.collisionLeftObjects[i].type == 3) {
      mainPlayer.spawnX = mainPlayer.collisionLeftObjects[i].x;
      mainPlayer.spawnY = mainPlayer.collisionLeftObjects[i].y;
    } else if (mainPlayer.collisionLeftObjects[i].type == 4) {
      LevelCompleted(mainPlayer);
    } else if (
      mainPlayer.collisionLeftObjects[i].type == 5 &&
      !collidedWithBounce
    ) {
      collidedWithBounce = true;
      mainPlayer.y += 3;
      coyoteTime = 0;
      mainPlayer.jumping = true;
      if (mainPlayer.yVelocity < -300) {
        mainPlayer.yVelocity = mainPlayer.yVelocity * -1 - 2;
      } else {
        mainPlayer.yVelocity = 300;
      }
    }
  }
  for (let i = 0; i < mainPlayer.collisionBottomObjects.length; i++) {
    if (mainPlayer.collisionBottomObjects[i].type == 1) {
      if (mainPlayer.collisionBottomObjects.length != 0) {
        if (mainPlayer.yVelocity <= 0) {
          mainPlayer.yVelocity = 0;
        }
      }
    } else if (mainPlayer.collisionBottomObjects[i].type == 2) {
      mainPlayer = Death(mainPlayer);
    } else if (mainPlayer.collisionBottomObjects[i].type == 3) {
      mainPlayer.spawnX = mainPlayer.collisionBottomObjects[i].x;
      mainPlayer.spawnY = mainPlayer.collisionBottomObjects[i].y;
    } else if (mainPlayer.collisionBottomObjects[i].type == 4) {
      LevelCompleted(mainPlayer);
    } else if (
      mainPlayer.collisionBottomObjects[i].type == 5 &&
      !collidedWithBounce
    ) {
      collidedWithBounce = true;
      mainPlayer.y += 3;
      coyoteTime = 0;
      mainPlayer.jumping = true;
      if (mainPlayer.yVelocity < -300) {
        mainPlayer.yVelocity = mainPlayer.yVelocity * -1 - 2;
      } else {
        mainPlayer.yVelocity = 300;
      }
    }
  }
  for (let i = 0; i < mainPlayer.collisionTopObjects.length; i++) {
    if (mainPlayer.collisionTopObjects[i].type == 1) {
      if (mainPlayer.collisionTopObjects.length != 0) {
        if (mainPlayer.yVelocity >= 0) {
          mainPlayer.yVelocity = 0;
        }
      }
    } else if (mainPlayer.collisionTopObjects[i].type == 2) {
      mainPlayer = Death(mainPlayer);
    } else if (mainPlayer.collisionTopObjects[i].type == 3) {
      mainPlayer.spawnX = mainPlayer.collisionTopObjects[i].x;
      mainPlayer.spawnY = mainPlayer.collisionTopObjects[i].y;
    } else if (mainPlayer.collisionTopObjects[i].type == 4) {
      LevelCompleted(mainPlayer);
    } else if (
      mainPlayer.collisionTopObjects[i].type == 5 &&
      !collidedWithBounce
    ) {
      collidedWithBounce = true;
      mainPlayer.y += 3;
      coyoteTime = 0;
      mainPlayer.jumping = true;
      if (mainPlayer.yVelocity < -300) {
        mainPlayer.yVelocity = mainPlayer.yVelocity * -1 - 2;
      } else {
        mainPlayer.yVelocity = 300;
      }
    }
  }
  return mainPlayer;
}

// Sets the level completed
function LevelCompleted(mainPlayer) {
  mainPlayer.levelCompleted = true;

  document.getElementById("timer").style.color = "blue";

  mainPlayer.levelJustCompleted = true;
  return mainPlayer;
}

// Used to submit a time to a leaderboard
function SubmitTime(mainPlayer) {
  levelSubmit = false;
  let modifiers = 0;
  if (invisibleRun) {
    modifiers = 1;
  }
  if (slowRun) {
    modifiers = 2;
  }
  if (slowRun && invisibleRun) {
    modifiers = 3;
  }
  if (!timeSubmitted) {
    timeSubmitted = true;
    let name = prompt("Input name");
    if (name != null) {
      SendSpeedrunTime(
        name,
        currentLevelID,
        mainPlayer.timer * 1000,
        modifiers
      );
    } else {
      timeSubmitted = false;
    }
  }
}

// Moves the player down
function Gravity(mainPlayer, deltaTime, blocks) {
  let gravity = 700;
  mainPlayer.yVelocity -= gravity * deltaTime;
  mainPlayer = CollisionDetection(blocks, mainPlayer);
  mainPlayer = HandleCollision(mainPlayer);

  return mainPlayer;
}

// Handles the player's input
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
  if (mainPlayer.jumping) {
    coyoteTime = 0;
  }
  if (
    upPressed &&
    coyoteTime > 0 &&
    !mainPlayer.jumping &&
    mainPlayer.yVelocity <= 0
  ) {
    mainPlayer.jumping = true;
    mainPlayer.yVelocity = 290;
    mainPlayer = CollisionDetection(blocks, mainPlayer);
    mainPlayer = HandleCollision(mainPlayer);
  }
  return mainPlayer;
}

// Detects player collision with the floor
function DetectFloorDeath(mainPlayer) {
  if (mainPlayer.y < 0) {
    mainPlayer = Death(mainPlayer);
  }
  return mainPlayer;
}

// Kills the player and resets values
function Death(mainPlayer) {
  //alert("test")
  if (mainPlayer.spawnX == 20 && mainPlayer.spawnY == 40) {
    if (slowMotion) {
      slowRun = true;
    } else {
      slowRun = false;
    }

    mainPlayer.timer = 0;
    timeSubmitted = false;
    levelStarted = false;
  } else {
    mainPlayer.deaths += 1;
  }
  mainPlayer.dashing = false;
  mainPlayer.dashCooldown = 0;
  mainPlayer.dashingTimer = 1000;
  mainPlayer.dashingDirection = 1;
  mainPlayer.xVelocity = 0;
  mainPlayer.yVelocity = 0;
  mainPlayer.x = mainPlayer.spawnX;
  mainPlayer.y = mainPlayer.spawnY;

  return mainPlayer;
}

// Restarts the level and sets values
function Restart(mainPlayer) {
  timeSubmitted = false;
  mainPlayer.deaths = 0;

  document.getElementById("timer").style.color = "black";
  mainPlayer.dashing = false;
  mainPlayer.dashCooldown = 0;
  mainPlayer.dashingTimer = 1000;
  mainPlayer.spawnX = 20;
  mainPlayer.spawnY = 40;
  mainPlayer.levelCompleted = false;
  mainPlayer.dashingDirection = 1;
  mainPlayer = Death(mainPlayer);
  return mainPlayer;
}

// Starts the game
window.onload = Main();
