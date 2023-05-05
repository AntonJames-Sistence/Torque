// import Example from './scripts/exsample';
import PlayerCar from './scripts/playerCar';

document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello from index.js!')

    // getiing canvas
    const screen = document.getElementById('screen');
    const context = screen.getContext("2d");

    const keys = {};

    // creating player car
    const playerCar = new PlayerCar(screen, context);

    // prevent classic bug when we call drawImage before loading img and loading players car
    playerCar.carImg.onload = function() {
        context.drawImage(playerCar.carImg, playerCar.carX, playerCar.carY, 55, 90);
    };

    function updatePlayerCar(){

        if (keys["ArrowRight"] === true) { // right move
            if (playerCar.carX > (playerCar.screen.width - 65)){
                playerCar.carX = playerCar.screen.width - 55;
            } else {
                playerCar.carX += 10;
            }
        }

        if (keys["ArrowLeft"] === true) { // left move
            if (playerCar.carX < 10){
                playerCar.carX = 0;
            } else {
                playerCar.carX -= 10;
            }
        }

        if (keys["ArrowUp"] === true) { // move up
            if (playerCar.carY < 10){
                playerCar.carY = 0;
            } else {
                playerCar.carY -= 10;
            }
        }

        if (keys["ArrowDown"] === true) { // move down
            if (playerCar.carY > playerCar.screen.height-100){
                playerCar.carY = playerCar.screen.height-90;
            } else {
                playerCar.carY += 10;
            }
        }

        playerCar.drive();
    }
    
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
        // debugger
        updatePlayerCar(playerCar);
    }

    // start of the game
    play();

})