class Player {
    constructor(screen, context) {
        // players car image 
        const playerCarImg = new Image();
        playerCarImg.src = "resources/playerCarImage.png";
        this.carImg = playerCarImg;

        // players car starting position and size
        this.carX = 320;
        this.carY = 600;
        this.width = 55;
        this.height = 90;

        // speed
        this.speed = 3;

        // canvas connection
        this.context = context;
        this.screen = screen;
    }

    // simple reDraw
    drive(){
        this.context.drawImage(this.carImg, this.carX, this.carY, this.width, this.height);
    }

}

export default Player;