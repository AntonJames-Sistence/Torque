class Coin{
    constructor(canvas, context){
        // canvas connection
        this.canvas = canvas;
        this.context = context;

        // coin position
        this.coinX = Math.random() * (canvas.width-65 - 10) + 10; // add randomized x pos
        this.coinY = Math.random() * (-1700 - 100) -1700; // add random y pos

        // coin size
        this.height = 50;
        this.width = 50;

        // frame count
        this.frame = 0;
    }

    draw(){
        let coinImg = new Image();

        // coin spinning animation
        if(this.frame < 6){
            coinImg.src = 'resources/coins_img/frame0.png';
        } else if((this.frame > 5)&&(this.frame < 11)){
            coinImg.src = 'resources/coins_img/frame1.png';
        } else if((this.frame > 10)&&(this.frame < 16)){
            coinImg.src = 'resources/coins_img/frame2.png';
        } else if((this.frame > 15)&&(this.frame < 21)){
            coinImg.src = 'resources/coins_img/frame3.png';
        } else if((this.frame > 20)&&(this.frame < 26)){
            coinImg.src = 'resources/coins_img/frame4.png';
        } else if((this.frame > 25)&&(this.frame < 31)){
            coinImg.src = 'resources/coins_img/frame5.png';
        } else if((this.frame > 30)&&(this.frame < 36)){
            coinImg.src = 'resources/coins_img/frame6.png';
        } else if((this.frame > 35)&&(this.frame < 41)){
            coinImg.src = 'resources/coins_img/frame7.png';
        };

        // ender coin image acording logic above
        this.context.drawImage(coinImg, this.coinX, this.coinY, this.width, this.height);

        // check if animation made full circle
        if (this.frame >= 40){
            this.frame = 0;
        }
            
        this.frame++;
    }

    randomizeCoinPos(){
        this.coinX = Math.random() * (this.canvas.width-75 - 20) + 20; // can be calibrated
        this.coinY = Math.random() * (-1700 - 100) -1700;
    }
}

export default Coin;