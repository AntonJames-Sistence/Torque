class Competitor {
    constructor(canvas, context){
        // img paramaters with random generator
        const competitorImg = new Image();
        let randImg = Math.floor(Math.random() * 6);
        competitorImg.src = `resources/cars_img/car${randImg}.png`;
        this.carImg = competitorImg;

        // randomized car position and car size
        this.carX = Math.random() * (canvas.width-65 - 10) + 10; // add randomized x pos
        this.carY = Math.random() * (-200 - 100) -200; // add random y pos
        this.width = 55;
        this.height = 90;

        // randomizer for speed parameter up to 10
        this.speed = 0;

        // canvas parameters 
        this.context = context;
        this.canvas = canvas;

        // crash implementation
        this.destroyed = false;
        this.crashPointFrame = 0;
    }

    // simple draw
    drive(){
        // change img in case of crash
        if (this.destroyed){
            let crashImg = new Image();

            // work with crash animation frames
            if(this.crashPointFrame < 8){
                crashImg.src = 'resources/crashAnimation/crash0.png';
            } else if((this.crashPointFrame > 7)&&(this.crashPointFrame < 15)){
                crashImg.src = 'resources/crashAnimation/crash1.png';
            } else if((this.crashPointFrame > 14)&&(this.crashPointFrame < 22)){
                crashImg.src = 'resources/crashAnimation/crash2.png';
            } else if((this.crashPointFrame > 21)&&(this.crashPointFrame < 29)){
                crashImg.src = 'resources/crashAnimation/crash3.png';
            } else if((this.crashPointFrame > 28)&&(this.crashPointFrame < 36)){
                crashImg.src = 'resources/crashAnimation/crash4.png';
            } else if((this.crashPointFrame > 35)&&(this.crashPointFrame < 43)){
                crashImg.src = 'resources/crashAnimation/crash5.png';
            } else if((this.crashPointFrame > 42)&&(this.crashPointFrame < 50)){
                crashImg.src = 'resources/crashAnimation/crash6.png';
            } else if((this.crashPointFrame > 49)&&(this.crashPointFrame < 57)){
                crashImg.src = 'resources/crashAnimation/crash7.png';
            } else {
                this.carY = 800;
            }
            this.carImg = crashImg;

            // change car image according to logic above
            this.context.drawImage(this.carImg, this.carX-100, this.carY-40, 250, 200); // hardcoded crash image

            this.crashPointFrame += 1;
        } else {
            this.context.drawImage(this.carImg, this.carX, this.carY, this.width, this.height);
        };

    }

    randomizeCarPos(){
        this.carX = Math.random() * (this.canvas.width-75 - 20) + 20; // can be calibrated
        this.carY = Math.random() * (-200 - 100) -200;
    }
}

export default Competitor;