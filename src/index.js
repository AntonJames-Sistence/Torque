// import Example from './scripts/exsample';
import PlayerCar from './scripts/playerCar';

document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello from index.js!')

    // getiing canvas
    const screen = document.getElementById('screen');
    const ctx = screen.getContext("2d");

    // creating player car
    const playerCar = new PlayerCar();
    
    // creating starting position for players car
    // let startingPos = [0, 600];

    // function runAnimation(car) {
    //     // clean canvas before each frame
    //     ctx.clearRect(0, 0, screen.width, screen.height);
        
    //     // draw canvas using playercar as img, starting pos as position
    //     ctx.drawImage(car.carImg, startingPos[0], startingPos[1], 55, 90);
    //     // checking if it is still inside field
    //     if (startingPos[0] < 650){
    //         startingPos[0] += 1;
    //     }
    //     // request animation from canvas
    //     requestAnimationFrame(() => runAnimation(car));
    // }
    // runAnimation(playerCar);

})