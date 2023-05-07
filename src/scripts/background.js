class Background {
    constructor(screen, context, bkgY){
        // main canvas
        this.screen = screen;
        this.ctx = context;

        // background position
        this.bkgX = 0;
        this. bkgY = bkgY;

        // road image
        let backgroundImage = new Image();
        backgroundImage.src = "resources/roadBackground.png";
        this.background = backgroundImage;

    }

    // update image for first frame
    updateBackground(gameSpeed){
        this.bkgY += gameSpeed * 3;
        if (this.bkgY >= 700){
            this.bkgY = 0;
        }
    }

    // update image for second frame
    updateBackgroundsecondFrame(gameSpeed){
        this.bkgY += gameSpeed * 3;
        if (this.bkgY >= 0){
            this.bkgY = -700;
        }
    }

    drawBackground(){
        this.ctx.drawImage(this.background, this.bkgX, this.bkgY, this.screen.width, 700);
        // this.ctx.drawImage(this.background, this.bkgX, this.bkgY + this.screen.height, this.screen.width, this.screen.height);
    }

}

export default Background;