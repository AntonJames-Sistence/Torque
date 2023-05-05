// import Example from './scripts/exsample';
import PlayerCar from './scripts/playerCar';

document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello from index.js!')

    // getiing canvas
    const screen = document.getElementById('screen');
    const ctx = screen.getContext("2d");

    // creating player car
    const playerCar = new PlayerCar();
    // prevent classic bug when we call drawImage before loading img and loading players car
    playerCar.carImg.addEventListener(
        "load",
        () => {
            ctx.drawImage(playerCar.carImg, playerCar.carX, playerCar.carY, 55, 90);
        }
    );

    
    // event listener for moving players car
    document.addEventListener(
        "keydown",
        function(event){
            // check for right arrow to move right
            if (event.code === "ArrowRight") {
                playerCar.moveRight(screen, ctx, 50);
            } else if (event.code === "ArrowLeft") {
                playerCar.moveLeft(screen, ctx, 50);
            } else if (event.code === "ArrowUp") {
                playerCar.moveUp(screen, ctx, 50);
            } else if (event.code === "ArrowDown") {
                playerCar.moveDown(screen, ctx, 50);
            };
            
        }
    );

})