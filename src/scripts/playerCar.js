class PlayerCar {
    constructor() { 
        const playerCarImg = new Image();
        playerCarImg.src = "resources/playerCarImage.png";
        this.carImg = playerCarImg;
        this.carX = 0;
        this.carY = 600;
    }

    moveRight(screen, ctx, distance){
        ctx.clearRect(0, 0, screen.width, screen.height);

            // update position to the right
            this.carX += distance;
            // draw player car
            ctx.drawImage(this.carImg, this.carX, this.carY, 55, 90);
    }




}

export default PlayerCar;