class PlayerCar {
    constructor() { 
        const playerCarImg = new Image();
        playerCarImg.src = "resources/playerCarImage.png";
        this.carImg = playerCarImg;
        this.carX = 320;
        this.carY = 600;
    }

    // eventually I would need to calibrate moving mechanics to look better on canvas size
    moveRight(screen, ctx, distance){
        // clear canvas before next frame
        ctx.clearRect(0, 0, screen.width, screen.height);
        // update position to the right
        
        // draw player car if it is inside canvas borders
        if (this.carX < screen.width-100) { // return here to calibrate later
            this.carX += distance;
            ctx.drawImage(this.carImg, this.carX, this.carY, 55, 90);
        } else {
            ctx.drawImage(this.carImg, 645, this.carY, 55, 90);
        }
    }

    moveLeft(screen, ctx, distance){
        ctx.clearRect(0, 0, screen.width, screen.height);

        if (this.carX >= 10) {
            this.carX -= distance;
            ctx.drawImage(this.carImg, this.carX, this.carY, 55, 90);
        } else {
            ctx.drawImage(this.carImg, 0, this.carY, 55, 90);
        }
        
    }

    moveUp(screen, ctx, distance){
        ctx.clearRect(0, 0, screen.width, screen.height);

        if (this.carY > 0) {
            this.carY -= distance;
            ctx.drawImage(this.carImg, this.carX, this.carY, 55, 90);
        } else {
            ctx.drawImage(this.carImg, this.carX, this.carY, 55, 90);
        }
        
    }

    moveDown(screen, ctx, distance){
        ctx.clearRect(0, 0, screen.width, screen.height);

        if (this.carY < 600) {
            this.carY += distance;
            ctx.drawImage(this.carImg, this.carX, this.carY, 55, 90);
        } else {
            ctx.drawImage(this.carImg, this.carX, this.carY, 55, 90);
        }
        
    }




}

export default PlayerCar;