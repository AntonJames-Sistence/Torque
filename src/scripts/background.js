class Background {
    constructor(screen, context, bkgY, source){
        // main canvas
        this.screen = screen;
        this.ctx = context;

        // background position
        this.bkgX = 0;
        this.bkgY = bkgY;

        // road image
        let backgroundImage = new Image();
        backgroundImage.src = source;
        this.background = backgroundImage;

    }

    //============================== Main Road Frame Methods ===============================================

    // update image for main road first frame
    updateBackground(gameSpeed){
        this.bkgY += gameSpeed * 3;
        if (this.bkgY >= 700){
            this.bkgY = 0;
        };
    }

    // update image for main road second frame
    updateBackgroundsecondFrame(gameSpeed){
        this.bkgY += gameSpeed * 3;
        if (this.bkgY >= 0){
            this.bkgY = -700;
        };
    }

    drawBackground(){
        this.ctx.drawImage(this.background, this.bkgX, this.bkgY, this.screen.width, 700);
    }

    //================================= Side Background Frames Methods ======================================

    updateBack(){
        this.bkgY += 0.3;
        if (this.bkgY >= 700) {
            this.bkgY = 0;
        };
    }

    updateBackSecondFrame(){
        this.bkgY += 0.3;
        if (this.bkgY >= 0) {
            this.bkgY = -700;
        };
    }


}

export default Background;