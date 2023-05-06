class Competitor {
    constructor(screen, context){
        const competitorImg = new Image();
        let randImg = Math.floor(Math.random() * 4);
        competitorImg.src = `resources/car${randImg}.png`;
        this.carImg = competitorImg;

        this.carX = Math.random() * (screen.width-65 - 10) + 10; // add randomized starting x pos
        this.carY = Math.random() * (-200 - 100) -200; // add random y pos
        this.width = 55;
        this.height = 90;

        this.context = context;
        this.screen = screen;
    }

    drive(){
        this.context.drawImage(this.carImg, this.carX, this.carY, this.width, this.height);
    }
}

export default Competitor;