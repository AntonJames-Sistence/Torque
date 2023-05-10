class Odometer {
    constructor(canvas, context){
        this.canvas = canvas;
        this.context = context;

        const img = new Image();
        img.src = "resources/stats_bar/odometer.png";
        this.speedImg = img;

        this.frame = 0;
    }

    draw(score, gameSpeed){
        // arrow animation
        let arrow = new Image();

        if(gameSpeed <= 1){
            arrow.src = 'resources/stats_bar/arrow_sprites/frame1.png';
        } else if((gameSpeed > 1)&&(gameSpeed < 4)){
            arrow.src = 'resources/stats_bar/arrow_sprites/frame1.png';
        } else if((gameSpeed > 3)&&(gameSpeed < 6)){
            arrow.src = 'resources/stats_bar/arrow_sprites/frame2.png';
        } else if((gameSpeed >= 6)&&(gameSpeed < 8)){
            arrow.src = 'resources/stats_bar/arrow_sprites/frame3.png';
        } else if((gameSpeed >= 8)&&(gameSpeed < 9)){
            arrow.src = 'resources/stats_bar/arrow_sprites/frame4.png';
        } else {
            arrow.src = 'resources/stats_bar/arrow_sprites/frame5.png';
        };

        // game odometer and score render
        this.context.drawImage(this.speedImg, 0, 270, 220, 220);
        this.context.drawImage(arrow, 50, 320, 130, 130);
        this.context.fillText(`Score: ${score}`, 50, 460);
        // frame counter
        this.frame += 1;
    }
}

export default Odometer;