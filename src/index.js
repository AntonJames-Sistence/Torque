import Player from './scripts/playerCar';
import Competitor from './scripts/competitor';

document.addEventListener('DOMContentLoaded', () => {
    // get stats canvas
    const statsScreen = document.getElementById('stats');
    const statsCtx = statsScreen.getContext("2d");

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
//====================================================================================================

    // get main game canvas
    const gameScreen = document.getElementById('screen');
    const gameCtx = gameScreen.getContext("2d");

    // creating player car
    const playerCar = new Player(gameScreen, gameCtx);

    // creating competitors cars 5 with random positions
    const competitors = [];
    for (let i = 0; i < 5; i++){ // maybe refactor inside for loop for collision logic
        competitors.push(new Competitor(gameScreen, gameCtx));
    }

//====================================================================================================

    // score
    let score = 0;

    // set up gameSpeed parameter
    let gameSpeed = 0;

    // increasing gameSpeed by setting up interval
    setInterval(() => {if(gameSpeed < 10) gameSpeed += 1}, 5000);

//====================================================================================================

    // keys object, allow to store info about what keys are currently pressed
    const keys = {};

    function runGame(){

        if ((keys["ArrowRight"]) && (playerCar.carX < (playerCar.screen.width - 65))) { 
                playerCar.carX += playerCar.speed + gameSpeed; // right move with speed relationship
        }

        if ((keys["ArrowLeft"]) && (playerCar.carX > 10)) { 
                playerCar.carX -= playerCar.speed + gameSpeed; // left move with speed relationship
        }

        if ((keys["ArrowUp"]) && (playerCar.carY > 10)) { 
                playerCar.carY -= playerCar.speed + gameSpeed; // up move with speed relationship
        }

        if ((keys["ArrowDown"]) && (playerCar.carY < playerCar.screen.height-90)) { 
            playerCar.carY += playerCar.speed + gameSpeed; // down move with speed relationship
        }

//====================================================================================================

        for(let i = 0; i < competitors.length; i++){
            let currentCar = competitors[i];

            if (currentCar.carY < currentCar.screen.height){
                if ( ((currentCar.carY >= playerCar.carY-90) && (currentCar.carY <= playerCar.carY+90))
                && ((currentCar.carX >= playerCar.carX-55) && (currentCar.carX <= playerCar.carX+55)) ){

                    if (playerCar.lives > 0){
                        playerCar.lives -= 1;
                        currentCar.drive();
                    } else {
                        alert(`Game over, your final score: ${score}`);
                    }      
                } else {
                    currentCar.carY += currentCar.speed + gameSpeed; // speed relationships
                    currentCar.drive();
                }
            } else {
                // randomize competitor car img
                let randImg = Math.floor(Math.random() * 4);
                currentCar.carImg.src = `resources/car${randImg}.png`; 
                // randomize competitor position
                currentCar.carX = Math.random() * (currentCar.screen.width-65 - 10) + 10; 
                currentCar.carY = Math.random() * (-200 - 100) -200;
                // randomize competitor car speed
                currentCar.speed = Math.floor(Math.random() * 11);
            }
        }

        // draw players car
        playerCar.drive();
    }

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

    // logic for main game loop
    function play(){
        // animation logic
        requestAnimationFrame(play);
        // score increasement based on game speed
        score += (1 * gameSpeed);
        // clear canvas before next frame
        gameCtx.clearRect(0, 0, gameScreen.width, gameScreen.height);
        runGame();
        statsCtx.clearRect(0, 0, statsScreen.width, statsScreen.height);
        updateStats();
    }

    // start of the game
    play();

})