import Player from './scripts/playerCar';
import Competitor from './scripts/competitor';

document.addEventListener('DOMContentLoaded', () => {

    // getiing canvas
    const screen = document.getElementById('screen');
    const context = screen.getContext("2d");

    // creating player car
    const playerCar = new Player(screen, context);

    // creating competitors cars 5 with random positions

    const competitors = [];
    for (let i = 0; i < 5; i++){ // maybe refactor inside for loop for collision logic
        competitors.push(new Competitor(screen, context));
    }

    // set up gameSpeed parameter
    let gameSpeed = 1;

    // increasing gameSpeed by setting up interval
    setInterval(() => {if(gameSpeed < 10) gameSpeed += 1}, 1000);


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


        for(let i = 0; i < competitors.length; i++){
            let currentCar = competitors[i];

            if (currentCar.carY < currentCar.screen.height){
                if ( ((currentCar.carY >= playerCar.carY-90) && (currentCar.carY <= playerCar.carY+90))
                && ((currentCar.carX >= playerCar.carX-55) && (currentCar.carX <= playerCar.carX+55)) ){

                    console.log('Whoops you hit a car!');
                    currentCar.drive();
                } else {
                    currentCar.carY += currentCar.speed + gameSpeed; // speed relationships
                    currentCar.drive();
                }
            } else {
                // change car img
                let randImg = Math.floor(Math.random() * 4);
                currentCar.carImg.src = `resources/car${randImg}.png`; 
                // change position
                currentCar.carX = Math.random() * (screen.width-65 - 10) + 10; 
                currentCar.carY = Math.random() * (-200 - 100) -200;
                // change car speed
                currentCar.speed = Math.floor(Math.random() * 11);
            }
        }

        // draw players car
        playerCar.drive();
    }

    const keys = {};

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

    // logic for main game loop
    function play(){
        // our animation basics
        requestAnimationFrame(play);
        // clear canvas before next frame
        context.clearRect(0, 0, screen.width, screen.height);
        runGame();
    }

    // start of the game
    play();

})