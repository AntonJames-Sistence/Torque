class Odometer {
    constructor(canvas, context){
        this.canvas = canvas;
        this.context = context;

        const img = new Image();
        img.src = "resources/stats_bar/odometer.png";
        this.speedImg = img;

        this.frame = 0;
    }

    draw(score){
        this.context.drawImage(this.speedImg, 0, 250, 220, 220);

        // game odometer render
        this.context.fillText(`Current score: ${score}`, 20, 450);

        // frame counter
        this.frame++
    }
}

export default Odometer;