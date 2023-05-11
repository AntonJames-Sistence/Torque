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
        } else if((gameSpeed > 1)&&(gameSpeed < 3)){
            arrow.src = 'resources/stats_bar/arrow_sprites/frame1.png';
        } else if((gameSpeed > 2)&&(gameSpeed < 4)){
            arrow.src = 'resources/stats_bar/arrow_sprites/frame2.png';
        } else if((gameSpeed > 3)&&(gameSpeed < 6)){
            arrow.src = 'resources/stats_bar/arrow_sprites/frame3.png';
        } else if((gameSpeed > 5)&&(gameSpeed < 8)){
            arrow.src = 'resources/stats_bar/arrow_sprites/frame4.png';
        } else if((gameSpeed > 7)&&(gameSpeed < 9)){
            arrow.src = 'resources/stats_bar/arrow_sprites/frame5.png';
        } else if((gameSpeed > 8)&&(gameSpeed < 10)){
            arrow.src = 'resources/stats_bar/arrow_sprites/frame6.png';
        } else{
            arrow.src = 'resources/stats_bar/arrow_sprites/frame7.png';
        };

        // game speed render and speedometer render
        this.context.drawImage(this.speedImg, 23, 50, 180, 180);
        this.context.drawImage(arrow, 50, 75, 130, 130);
        this.context.fillText(`${gameSpeed * 16}`, 97, 205); // need better speed representation
        this.context.fillText("Speed", 78, 40); 
        // frame counter
        this.frame += 1;
    }
}

export default Speedometer;