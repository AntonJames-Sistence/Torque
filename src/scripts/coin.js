class Coin{
    constructor(canvas, context){
        // canvas connection
        this.canvas = canvas;
        this.context = context;

        // coin Image
        const image = new Image();
        image.src = "resources/coins_img/coin.png";
        this.coinImg = image;

        // coin position
        this.coinX = Math.random() * (canvas.width-65 - 10) + 10; // add randomized x pos
        this.coinY = Math.random() * (-1700 - 100) -1700; // add random y pos

        // coin size
        this.height = 50;
        this.width = 50;
    }

    draw(){
        this.context.drawImage(this.coinImg, this.coinX, this.coinY, this.width, this.height);
    }

    randomizeCoinPos(){
        this.coinX = Math.random() * (this.canvas.width-75 - 20) + 20; // can be calibrated
        this.coinY = Math.random() * (-1700 - 100) -1700;
    }
}

export default Coin;