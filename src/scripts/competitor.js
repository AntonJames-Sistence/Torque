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
    }

    // simple draw
    drive(){
        this.context.drawImage(this.carImg, this.carX, this.carY, this.width, this.height);
    }

    randomizeCarPos(){
        this.carX = Math.random() * (this.screen.width-65 - 10) + 10; 
        this.carY = Math.random() * (-200 - 100) -200;
    }
}

export default Competitor;