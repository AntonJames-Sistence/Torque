import Player from './scripts/playerCar';
import Competitor from './scripts/competitor';
import Background from './scripts/background';

document.addEventListener('DOMContentLoaded', () => {
    
//====================================== Get cancas and context =====================================
    
    // get stats canvas
    const statsScreen = document.getElementById('stats');
    const statsCtx = statsScreen.getContext("2d");

    // get main game canvas
    const gameScreen = document.getElementById('screen');
    const gameCtx = gameScreen.getContext("2d");

    //get left and right side background canvas
    const leftBkgScreen = document.getElementById('leftBackgroundPiece');
    const leftBkgCtx = leftBkgScreen.getContext("2d");

    const rightBkgScreen = document.getElementById('rightBackgroundPiece');
    const rightBkgCtx = rightBkgScreen.getContext("2d");

//======================================= Score and Game speed setters ===============================

    // score
    let score = 0;

    // set up gameSpeed parameter
    let gameSpeed = 1;

    // increasing gameSpeed by setting up interval
    setInterval(() => {if(gameSpeed < 10) gameSpeed += 1}, 4000); // can be calibrated

//======================================== Game Stats =================================================

    // updating game stats
    function updateStats(){
        statsCtx.font = "20px Arial";
        // game speed
        statsCtx.fillText(`Current game speed: ${gameSpeed}`, 10, 100);
        // current score
        statsCtx.fillText(`Your score: ${score}`, 10, 200);
        // current lives
        statsCtx.fillText(`Lives: ${playerCar.lives}`, 10, 300);
    }
//====================================== Create Game Objects/Backgrounds ===============================

    // creating player car
    const playerCar = new Player(gameScreen, gameCtx);

    // creating competitors cars 5 with random positions
    const competitors = [];
    for (let i = 0; i < 5; i++){ // maybe refactor inside for loop for collision logic
        competitors.push(new Competitor(gameScreen, gameCtx));
    }

    // main road backgroun
    const roadBackground1 = new Background(gameScreen, gameCtx, 0, "resources/roadBackground.png");
    const roadBackground2 = new Background(gameScreen, gameCtx, -700, "resources/roadBackground.png");

    // side animation left part
    const leftSideBackground1 = new Background(leftBkgScreen, leftBkgCtx, 0, "resources/leftBackground.jpg")
    const leftSideBackground2 = new Background(leftBkgScreen, leftBkgCtx, -700, "resources/leftBackground.jpg")

    // side animation right part
    const rightSideBackground1 = new Background(rightBkgScreen, rightBkgCtx, 0, "resources/rightBackground.png")
    const rightSideBackground2 = new Background(rightBkgScreen, rightBkgCtx, -700, "resources/rightBackground.png")

//====================================== Initial Background ==============================================
// doesnt work
leftSideBackground1.drawBackground();
leftSideBackground2.drawBackground();
rightSideBackground1.drawBackground();
rightSideBackground2.drawBackground();
roadBackground1.drawBackground();
roadBackground2.drawBackground();

// ===================================== Main Game Loop Logic ============================================

    // keys object, allow to store info about what keys are currently pressed
    const keys = {};

    function runGame(){

        // update and draw left side background
        leftSideBackground1.updateBack(gameSpeed);
        leftSideBackground2.updateBackSecondFrame(gameSpeed);
        leftSideBackground1.drawBackground();
        leftSideBackground2.drawBackground();

        // update and draw right side background
        rightSideBackground1.updateBack(gameSpeed);
        rightSideBackground2.updateBackSecondFrame(gameSpeed);
        rightSideBackground1.drawBackground();
        rightSideBackground2.drawBackground();

        // update road frames one and two and draw it
        roadBackground1.updateBackground(gameSpeed);
        roadBackground2.updateBackgroundsecondFrame(gameSpeed);
        roadBackground1.drawBackground();
        roadBackground2.drawBackground();

        if ((keys["ArrowRight"]) && (playerCar.carX < (playerCar.screen.width - 75))) { 
                playerCar.carX += playerCar.speed + (gameSpeed * 0.7); // right move with speed relationship
        }

        if ((keys["ArrowLeft"]) && (playerCar.carX > 20)) { 
                playerCar.carX -= playerCar.speed + (gameSpeed * 0.7); // left move with speed relationship
        }

        if ((keys["ArrowUp"]) && (playerCar.carY > 10)) { 
                playerCar.carY -= playerCar.speed + (gameSpeed * 0.7); // up move with speed relationship
        }

        if ((keys["ArrowDown"]) && (playerCar.carY < playerCar.screen.height-100)) { 
            playerCar.carY += playerCar.speed + (gameSpeed * 0.7); // down move with speed relationship
        }

//=================================== Competitors and physics =================================================

        for(let i = 0; i < competitors.length; i++){
            let currentCar = competitors[i];

            // check if competitor car is inside main screen
            if (currentCar.carY < currentCar.screen.height){
                // check if competitor car hits player car
                if ( currentCar.carY >= playerCar.carY-85 &&
                    currentCar.carY <= playerCar.carY+85 &&
                    currentCar.carX >= playerCar.carX-50 &&
                    currentCar.carX <= playerCar.carX+50 ){

                    if ((playerCar.lives > 0)){
                        // check if players car is in invincible state
                        if(playerCar.invincible === false){
                            // logic to prevent from loosing all lives in the same crash
                            playerCar.invincible = true;
                            playerCar.lives--;
                            gameSpeed = 1;
                            // invincibility timer
                            setTimeout(() => {
                            playerCar.invincible = false;
                            }, 3000);
                        }

                        // logic after crash happens
                        currentCar.destroyed = true;
                        currentCar.carY += currentCar.speed + gameSpeed;
                        currentCar.drive();
                    } else {
                        // stop game
                        cancelAnimationFrame(frameId);
                        // call final message
                        finalScoreToggler();
                    }      
                } else {
                    currentCar.carY += currentCar.speed + gameSpeed; // speed relationships
                    currentCar.drive();
                }
            } else {
                // randomize competitor car img
                let randImg = Math.floor(Math.random() * 6);
                currentCar.carImg.src = `resources/car${randImg}.png`;
                currentCar.crashPointFrame = 0;
                currentCar.destroyed = false; 
                // randomize competitor position
                currentCar.randomizeCarPos();
                // randomize competitor car speed
                currentCar.speed = Math.floor(Math.random() * 5);
            }
        }

        // draw players car
        playerCar.drive();
    }

//========================== Reset parameters for Restarting the game ================================

function resetGameParams() {
    score = 0;
    gameSpeed = 1;
    playerCar.lives = 3;
    playerCar.carX = 270;
    playerCar.carY = 600;
    for(let i = 0; i < competitors.length; i++){
        competitors[i].randomizeCarPos();
        competitors[i].speed = 0;
    }
}

//===================================== Music Feature ================================================
    
// creating new audio object to play music
let music = new Audio();
// source
music.src = "resources/speeding.mp3";

// get music buttons
const playMusicBtn = document.getElementById("playMusic");
const pauseMusicBtn = document.getElementById("stopMusic");

// add event listeners
playMusicBtn.addEventListener(
    'click',
    () => {
        music.play();
    }
)
pauseMusicBtn.addEventListener(
    'click',
    () => {
        music.pause();
    }
)

//====================================================================================================

    // add listener for keyDown process
    document.addEventListener(
        "keydown",
        (event) => {
            keys[event.code] = true; // {ArrowRight: false} or another arrow
        }
    );
    // add listener for keyUp process
    document.addEventListener(
        "keyup",
        (event) => {
            keys[event.code] = false; // {ArrowUp: true}
        }
    );

//====================================================================================================
    
    // set animation frameId for purpose of stopping the game
    let frameId;

    // logic for main game loop
    function play(){

        // animation logic, looping recursively
        frameId = requestAnimationFrame(play);

        // check if game paused, useful after final score alert or pause button implementation, maybe freeze time feature in future
        // if (isPaused === false){

        // score increasement based on game speed
        score += Math.floor(1 * gameSpeed);

        // clear left and right background canvases before next frame
        leftBkgCtx.clearRect(0, 0, leftBkgScreen.width, leftBkgScreen.height)
        rightBkgCtx.clearRect(0, 0, rightBkgScreen.width, rightBkgScreen.height)

        // clear main game canvas before next frame
        gameCtx.clearRect(0, 0, gameScreen.width, gameScreen.height);
        
        // clear stat canvas
        statsCtx.clearRect(0, 0, statsScreen.width, statsScreen.height);

        runGame();
        updateStats();

        // }

    }

    //======================================= Greetin Message / Game Start ============================================

    function greetingToggler() {
        let greetingContainer = document.getElementById("greetings-container");
        let greeting = document.getElementById("greetings");
        if (greeting.style.display === "block"){
            greeting.style.display = "none";
            greetingContainer.style.display = "none";
            // start of the game
            resetGameParams(); // fix bag with speed on background
            play();
        } else {
            greeting.style.display = "block";
            greetingContainer.style.display = "block";
        }
    }

    // get button for starting game by ID
    const startButton = document.getElementById('startGame');

    // add event listener for this button
    startButton.addEventListener(
        'click',
        greetingToggler
    );
    
    // start of the game
    greetingToggler();

    //======================================= Final Score Message / End Game ============================================

    function finalScoreToggler() {
        let finalMessage = document.getElementById("finalMessage");
        let finalMessageContainer = document.getElementById("greetings-container");

        if (finalMessage.style.display === "block"){
            finalMessage.style.display = "none";
            finalMessageContainer.style.display = "none";
            // reStart of the game
            resetGameParams();
            play();
        } else {
            finalMessage.style.display = "block";
            finalMessageContainer.style.display = "block";
            let fMes = document.createElement("h3");
            fMes.textContent = `Game over! Your score is: ${score}`;
            finalMessage.appendChild(fMes);
        }
    }

    const restartButton = document.getElementById('restartGame');

    restartButton.addEventListener(
        'click',
        finalScoreToggler
    );

})