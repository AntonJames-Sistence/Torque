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
    for (let i = 0; i < 5; i++){ // maybe refactor inside for loop for collision logic
        competitors.push(new Competitor(screen, context));
    }
    

    function runGame(){

        if ((keys["ArrowRight"]) && (playerCar.carX < (playerCar.screen.width - 65))) { 
                playerCar.carX += 5; // right move
        }

        if ((keys["ArrowLeft"]) && (playerCar.carX > 10)) { 
                playerCar.carX -= 5; // left move
        }

        if ((keys["ArrowUp"]) && (playerCar.carY > 10)) { 
                playerCar.carY -= 5; // move up with speed 5 for now
        }

        if ((keys["ArrowDown"]) && (playerCar.carY < playerCar.screen.height-90)) { 
            playerCar.carY += 5; // move down
        }


        for(let i = 0; i < competitors.length; i++){
            let currentCar = competitors[i];

            if (currentCar.carY < currentCar.screen.height){
                if ( ((currentCar.carY >= playerCar.carY-90) && (currentCar.carY <= playerCar.carY))
                && ((currentCar.carX >= playerCar.carX-45) && (currentCar.carX <= playerCar.carX+45)) ){

                    console.log('hit another car');
                    currentCar.drive();
                } else {
                    currentCar.carY += 3;
                    currentCar.drive();
                }
            } else {
                let randImg = Math.floor(Math.random() * 4);
                currentCar.carImg.src = `resources/car${randImg}.png`;
                currentCar.carX = Math.random() * (screen.width-65 - 10) + 10;
                currentCar.carY = Math.random() * (-200 - 100) -200;
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