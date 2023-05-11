class Player {
    constructor(screen, context) {
        // players car image 
        const playerCarImg = new Image();
        playerCarImg.src = "resources/cars_img/playerCarImage.png";
        this.carImg = playerCarImg;

        // players car starting position and size
        this.carX = 270;
        this.carY = 600;
        this.width = 55;
        this.height = 90;

        // speed
        this.speed = 1;

        // canvas connection
        this.context = context;
        this.screen = screen;

        // lives and invincible status
        this.life = 3;
        this.invincible = false;
        
    }

    // simple reDraw
    drive(){
        this.context.drawImage(this.carImg, this.carX, this.carY, this.width, this.height);
    }

}

export default Player;