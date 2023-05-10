
class LifeBar {
    constructor(canvas, context){
        // canvas and context references
        this.canvas = canvas;
        this.context = context;
        
        // create image object
        const image = new Image();
        image.src = "resources/hp.png";
        this.lifeImg = image;

    }

    // depending on num given render 1 to 3 health bars
    draw(n){
        if (n === 1){
            this.context.drawImage(this.lifeImg, 10, this.canvas.height-100, 70, 70);
        } else if ( n === 2 ){
            this.context.drawImage(this.lifeImg, 10, this.canvas.height-100, 70, 70);
            this.context.drawImage(this.lifeImg, 80, this.canvas.height-100, 70, 70);
        } else if ( n > 2 ){
            this.context.drawImage(this.lifeImg, 10, this.canvas.height-100, 70, 70);
            this.context.drawImage(this.lifeImg, 80, this.canvas.height-100, 70, 70)
            this.context.drawImage(this.lifeImg, 150, this.canvas.height-100, 70, 70)
        } 
    }

}

export default LifeBar;