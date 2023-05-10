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
        this.context.drawImage(this.speedImg, 23, 25, 180, 180);

        // game speed render
        this.context.fillText(`${gameSpeed * 100}`, 97, 180);

        // frame counter
        this.frame++
    }
}

export default Speedometer;