class Speedometer {
    constructor(canvas, context){
        this.canvas = canvas;
        this.context = context;

        const img = new Image();
        img.src = "resources/stats_bar/speed.png";
        this.speedImg = img;

        this.frame = 0;
    }

    draw(gameSpeed){
        // speedometer animation
        let arrow = new Image();

        if(gameSpeed < 2){
            arrow.src = 'resources/stats_bar/arrow_sprites/frame0.png';
        } else if((gameSpeed >= 2)&&(gameSpeed < 3)){
            arrow.src = 'resources/stats_bar/arrow_sprites/frame1.png';
        } else if((gameSpeed >= 3)&&(gameSpeed < 4)){
            arrow.src = 'resources/stats_bar/arrow_sprites/frame2.png';
        } else if((gameSpeed >= 4)&&(gameSpeed < 5)){
            arrow.src = 'resources/stats_bar/arrow_sprites/frame3.png';
        } else if((gameSpeed >= 5)&&(gameSpeed < 6)){
            arrow.src = 'resources/stats_bar/arrow_sprites/frame4.png';
        } else if((gameSpeed >= 6)&&(gameSpeed < 7)){
            arrow.src = 'resources/stats_bar/arrow_sprites/frame5.png';
        } else if((gameSpeed >= 7)&&(gameSpeed < 8)){
            arrow.src = 'resources/stats_bar/arrow_sprites/frame6.png';
        } else{
            arrow.src = 'resources/stats_bar/arrow_sprites/frame7.png';
        };

        // game speed render and speedometer render
        this.context.drawImage(this.speedImg, 23, 25, 180, 180);
        this.context.drawImage(arrow, 50, 50, 130, 130);
        this.context.fillText(`${gameSpeed * 100 + this.frame}`, 97, 180); // need better speed representation
        // frame counter
        this.frame += 1;
    }
}

export default Speedometer;