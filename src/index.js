import Player from './scripts/playerCar';
import Competitor from './scripts/competitor';

document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello from index.js!')

    // getiing canvas
    const screen = document.getElementById('screen');
    const context = screen.getContext("2d");

    // creating player car
    const playerCar = new Player(screen, context);

    // creating competitors cars 5 with random positions

    const competitors = [];
    for (let i = 0; i < 5; i++){
        competitors.push(new Competitor(screen, context));
        let currentCar = competitors[i];
    }


    // prevent classic bug when we call drawImage before loading img and loading players car
    // playerCar.carImg.onload = function() {
    //     this.context.drawImage(playerCar.carImg, playerCar.carX, playerCar.carY, 55, 90);
    // };

    function runGame(){

        if (keys["ArrowRight"] === true) { // right move
            if (playerCar.carX > (playerCar.screen.width - 65)){
                playerCar.carX = playerCar.screen.width - 55;
            } else {
                playerCar.carX += 5;
            }
        }

        if (keys["ArrowLeft"] === true) { // left move
            if (playerCar.carX < 10){
                playerCar.carX = 0;
            } else {
                playerCar.carX -= 5;
            }
        }

        if (keys["ArrowUp"] === true) { // move up
            if (playerCar.carY < 10){
                playerCar.carY = 0;
            } else {
                playerCar.carY -= 5;
            }
        }

        if (keys["ArrowDown"] === true) { // move down
            if (playerCar.carY > playerCar.screen.height-100){
                playerCar.carY = playerCar.screen.height-90;
            } else {
                playerCar.carY += 5;
            }
        }

        // constantly render competitors cars
        if (competitors[0].carY < competitors[0].screen.height){
            competitors[0].carY += 5; // improve later by adding relationship with game speed
            competitors[0].drive();
        } else {   // if competitor car is out of bottom border then it appears on top
            competitors[0].carX = Math.random() * (screen.width-65 - 10) + 10;
            competitors[0].carY = Math.random() * (-200 - 100) -200;
        }
        

        if (competitors[1].carY < competitors[1].screen.height){
            competitors[1].carY += 5;
            competitors[1].drive();
        } else {
            competitors[1].carX = Math.random() * (screen.width-65 - 10) + 10;
            competitors[1].carY = Math.random() * (-200 - 100) -200;
        }

        if (competitors[2].carY < competitors[2].screen.height){
            competitors[2].carY += 5;
            competitors[2].drive();
        } else {
            competitors[2].carX = Math.random() * (screen.width-65 - 10) + 10;
            competitors[2].carY = Math.random() * (-200 - 100) -200;
        }

        if (competitors[3].carY < competitors[3].screen.height){
            competitors[3].carY += 5;
            competitors[3].drive();
        } else {
            competitors[3].carX = Math.random() * (screen.width-65 - 10) + 10;
            competitors[3].carY = Math.random() * (-200 - 100) -200;
        }

        if (competitors[4].carY < competitors[4].screen.height){
            competitors[4].carY += 5;
            competitors[4].drive();
        } else {
            competitors[4].carX = Math.random() * (screen.width-65 - 10) + 10;
            competitors[4].carY = Math.random() * (-200 - 100) -200;
        }

        // render players car
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