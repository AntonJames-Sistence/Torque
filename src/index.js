import Player from './scripts/playerCar';
import Competitor from './scripts/competitor';
import Background from './scripts/background';
import LifeBar from './scripts/life';
import Speedometer from './scripts/speedometer';
import Odometer from './scripts/odometer';
import Coin from './scripts/coin';

document.addEventListener('DOMContentLoaded', () => {

    // add prevent to scroll using arrow keys
    window.addEventListener("keydown", function(e) {
        if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
            e.preventDefault();
        }
      }, false);
    
//====================================== Get canvas and context =====================================
    
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
    let gameSpeed;

    // increasing gameSpeed by setting up interval
    setInterval(() => { if(gameSpeed < 10) gameSpeed += 1 }, 4000); // can be calibrated

//======================================== Game Stats Bar ===============================================

    const lifesBar = new LifeBar(statsScreen, statsCtx);
    const spdmtr = new Speedometer(statsScreen, statsCtx);
    const odomtr = new Odometer(statsScreen, statsCtx);

    // updating game stats
    function updateStats(){
        // text styling
        statsCtx.font = "20px Sigmar One";

        // game speed draw
        spdmtr.draw(gameSpeed);

        // current score
        odomtr.draw(score, gameSpeed);

        // current life
        lifesBar.draw(playerCar.life);
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
    const roadBackground1 = new Background(gameScreen, gameCtx, 0, "resources/backgrounds/roadBackground.png");
    const roadBackground2 = new Background(gameScreen, gameCtx, -700, "resources/backgrounds/roadBackground.png");

    // side animation left part
    const leftSideBackground1 = new Background(leftBkgScreen, leftBkgCtx, 0, "resources/backgrounds/leftBackground.jpg")
    const leftSideBackground2 = new Background(leftBkgScreen, leftBkgCtx, -700, "resources/backgrounds/leftBackground.jpg")

    // side animation right part
    const rightSideBackground1 = new Background(rightBkgScreen, rightBkgCtx, 0, "resources/backgrounds/rightBackground.png")
    const rightSideBackground2 = new Background(rightBkgScreen, rightBkgCtx, -700, "resources/backgrounds/rightBackground.png")

// ==================================== Coins Feature ====================================================

    // creating coins
    const coins = [];
    for (let i = 0; i < 4; i++){
        coins.push(new Coin(gameScreen, gameCtx));
    }

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
        
        if ((keys["ArrowRight"]) && (playerCar.carX < (playerCar.canvas.width - 75))) { 
                playerCar.carX += playerCar.speed + (gameSpeed * 0.7); // right move with speed relationship
        }

        if ((keys["ArrowLeft"]) && (playerCar.carX > 20)) { 
                playerCar.carX -= playerCar.speed + (gameSpeed * 0.7); // left move with speed relationship
        }

        if ((keys["ArrowUp"]) && (playerCar.carY > 10)) { 
                playerCar.carY -= playerCar.speed + (gameSpeed * 0.3); // up move with speed relationship
        }

        if ((keys["ArrowDown"]) && (playerCar.carY < playerCar.canvas.height-100)) { 
            playerCar.carY += playerCar.speed + (gameSpeed * 1); // down move with speed relationship
        }

//=================================== Game physics =================================================

        // competetors collision detection and logic
        for(let i = 0; i < competitors.length; i++){
            let currentCar = competitors[i];

            // check if competitor car is inside main screen
            if (currentCar.carY < currentCar.canvas.height){
                // check if competitor car hits player car
                if ( currentCar.carY >= playerCar.carY-85 &&
                    currentCar.carY <= playerCar.carY+85 &&
                    currentCar.carX >= playerCar.carX-50 &&
                    currentCar.carX <= playerCar.carX+50 ){

                    // play crash sound but only if music button was clicked
                    if (soundEffects){
                        crashSound.play();
                    }
                        
                    if ((playerCar.life > 0)){
                        // check if players car is in invincible state
                        if(playerCar.invincible === false){
                            // logic to prevent from loosing all life in the same crash
                            playerCar.invincible = true;
                            // crash restrictments
                            playerCar.life--;
                            if (gameSpeed > 2){
                                gameSpeed -= 2;
                            } else {
                                gameSpeed = 1;
                            }
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
                currentCar.carImg.src = `resources/cars_img/car${randImg}.png`;
                currentCar.crashPointFrame = 0;
                currentCar.destroyed = false; 
                // randomize competitor position
                currentCar.randomizeCarPos();
                // randomize competitor car speed
                currentCar.speed = Math.floor(Math.random() * 5);
            }
        }

        // coin collection logic
        for (let i = 0; i < coins.length; i++){
            let currentCoin = coins[i];

            // check if coins outside main canvas so they can be generated again, optimizing memory use
            if (currentCoin.coinY > currentCoin.canvas.height){
                currentCoin.randomizeCoinPos();
            } else {
                // coins boxes, calibrated to achieve better pixel visualization
                if ( currentCoin.coinY >= playerCar.carY - 55 &&
                    currentCoin.coinY <= playerCar.carY + 55 &&
                    currentCoin.coinX >= playerCar.carX - 55 &&
                    currentCoin.coinX <= playerCar.carX + 55 
                    ){
                        score += 500;
                        currentCoin.randomizeCoinPos();
                        currentCoin.frame = 0;

                } else {
                    currentCoin.coinY += gameSpeed + 3;
                    currentCoin.draw();
                }
            }

        }

        // draw players car
        playerCar.drive();
    }

//========================== Reset parameters for Restarting the game ================================

function resetGameParams() {
    score = 0;
    gameSpeed = 1;
    playerCar.life = 3;
    playerCar.carX = 270;
    playerCar.carY = 600;
    for(let i = 0; i < competitors.length; i++){
        competitors[i].randomizeCarPos();
        competitors[i].speed = 0;
    }
    for(let j = 0; j < coins.length; j++){
        coins[j].randomizeCoinPos();
        coins[j].frame = 0;
    }
}

//===================================== Music Feature ================================================
    
// creating new audio object to play music
let music = new Audio();
music.src = "resources/sounds/hotRoad.ogg";

// crash sound
let crashSound = new Audio();
crashSound.src = "resources/sounds/explosion.mp3";

// sound effects toggler for mute
let soundEffects = false;


// get music buttons
const playMusicBtn = document.getElementById("playMusic");
const pauseMusicBtn = document.getElementById("pauseMusic");

// add event listeners
playMusicBtn.addEventListener(
    'click',
    () => {
        music.play();
        soundEffects = true;
    }
)
pauseMusicBtn.addEventListener(
    'click',
    () => {
        music.pause();
        soundEffects = false;
    }
)

//============================================== Links buttons ===================================================

const linkBtn = document.getElementById("linkedin");
const githubBtn = document.getElementById("github");
const wellfoundBtn = document.getElementById("wellfound");

linkBtn.addEventListener(
    'click',
    () => {
        window.open("https://www.linkedin.com/in/anton-james-ja/", "_blank");
    }
);
githubBtn.addEventListener(
    'click',
    () => {
        window.open("https://github.com/AntonJames-Sistence/", "_blank");
    }
);
wellfoundBtn.addEventListener(
    'click',
    () => {
        window.open("https://wellfound.com/u/anton-james/", "_blank");
    }
);

//====================================== Key up and Key down listeners ============================================

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

//====================================== Recursive call animation frame logic ===================================================
    
    // set animation frameId for purpose of stopping the game
    let frameId;

    // logic for main game loop
    function play(){

        // animation logic, looping recursively
        frameId = requestAnimationFrame(play);

        // check if game paused, useful after final score alert or pause button implementation, maybe freeze time feature in future
        // if (isPaused === false){

        // score increasement based on game speed
        score += (Math.floor(0.5 * gameSpeed))+1;

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
            let fMes = finalMessage.querySelector("h3");
            finalMessage.removeChild(fMes);
            // reStart of the game
            resetGameParams();
            play();
        } else {
            finalMessage.style.display = "block";
            finalMessageContainer.style.display = "block";
            let fMes = document.createElement("h3");
            fMes.textContent = `Thank you for playing! Your score is: `;

            let scoreSpan = document.createElement("span");
            scoreSpan.textContent = score;
            scoreSpan.style.color = "#ebe03c"; 
            scoreSpan.style.fontFamily = "Signar One";

            fMes.appendChild(scoreSpan);
            finalMessage.appendChild(fMes);
        }
    }

    const restartButton = document.getElementById('restartGame');

    restartButton.addEventListener(
        'click',
        finalScoreToggler
    );

})
