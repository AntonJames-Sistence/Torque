
class LifeBar {
    constructor(canvas, context){
        // canvas and context references
        this.canvas = canvas;
        this.context = context;
        
        // create image object
        const image = new Image();
        image.src = "resources/stats_bar/hp.png";
        this.lifeImg = image;

    }

    // depending on num given render 1 to 3 health bars
    draw(n){
        if (n === 1){
            this.context.drawImage(this.lifeImg, 15, this.canvas.height-100, 60, 60);
        } else if ( n === 2 ){
            this.context.drawImage(this.lifeImg, 15, this.canvas.height-100, 60, 60);
            this.context.drawImage(this.lifeImg, 85, this.canvas.height-100, 60, 60);
        } else if ( n > 2 ){
            this.context.drawImage(this.lifeImg, 15, this.canvas.height-100, 60, 60);
            this.context.drawImage(this.lifeImg, 85, this.canvas.height-100, 60, 60)
            this.context.drawImage(this.lifeImg, 155, this.canvas.height-100, 60, 60)
        } 
    }

}

export default LifeBar;