class LifeBar {
    constructor(canvas, context){
        // canvas and context references
        this.canvas = canvas;
        this.context = context;
        
        // create image object
        const image = new Image();
        image.src = "resources/life.png";
        this.lifeImg = image;

        // life 
        this.livesCount = 3;
    }

    draw(){
        this.context.drawImage(this.lifeImg, 10, this.canvas.height-100, 50, 50)
        this.context.drawImage(this.lifeImg, 60, this.canvas.height-100, 50, 50)
        this.context.drawImage(this.lifeImg, 110, this.canvas.height-100, 50, 50)
    }
}

export default LifeBar;