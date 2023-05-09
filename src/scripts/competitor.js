class Competitor {
    constructor(screen, context){
        // img paramaters with random generator
        const competitorImg = new Image();
        let randImg = Math.floor(Math.random() * 6);
        competitorImg.src = `resources/car${randImg}.png`;
        this.carImg = competitorImg;

        // randomized car position and car size
        this.carX = Math.random() * (screen.width-65 - 10) + 10; // add randomized x pos
        this.carY = Math.random() * (-200 - 100) -200; // add random y pos
        this.width = 55;
        this.height = 90;

        // randomizer for speed parameter up to 10
        this.speed = 0;

        // canvas parameters 
        this.context = context;
        this.screen = screen;

        // crash implementation
        this.frame = 0;
        this.destroyed = false;
    }

    // simple draw
    drive(){
        // change img in case of crash
        if (this.destroyed){
            let crashImg = new Image();
            crashImg.src = 'resources/crashAnimation/crash2.png';
            this.carImg = crashImg;
            // change car image
            this.context.drawImage(this.carImg, this.carX-20, this.carY, 100, 100); // hardcoded crash image
        } else {
            this.context.drawImage(this.carImg, this.carX, this.carY, this.width, this.height);
        };
        // keeping track of frames
        this.frame += 1;
    }

    randomizeCarPos(){
        this.carX = Math.random() * (this.screen.width-75 - 20) + 20; // can be calibrated
        this.carY = Math.random() * (-200 - 100) -200;
    }
}

export default Competitor;