    // prevent classic bug when we call drawImage before loading img and loading players car
    // playerCar.carImg.onload = function() {
    //     this.context.drawImage(playerCar.carImg, playerCar.carX, playerCar.carY, 55, 90);
    // };

    
    // creating starting position for players car
    // let startingPos = [0, 600];

    // function runAnimation(car) {
    //     // clean canvas before each frame
    //     ctx.clearRect(0, 0, screen.width, screen.height);
        
    //     // draw canvas using playercar as img, starting pos as position
    //     ctx.drawImage(car.carImg, startingPos[0], startingPos[1], 55, 90);
    //     // checking if it is still inside field
    //     if (startingPos[0] < 650){
    //         startingPos[0] += 1;
    //     }
    //     // request animation from canvas
    //     requestAnimationFrame(() => runAnimation(car));
    // }
    // runAnimation(playerCar);
    // debugger




    // if (event.code === "ArrowRight") {
    //     playerCar.moveRight(50);
    // } else if (event.code === "ArrowLeft") {
    //     playerCar.moveLeft(50);
    // } else if (event.code === "ArrowUp") {
    //     playerCar.moveUp(50);
    // } else if (event.code === "ArrowDown") {
    //     playerCar.moveDown(50);
    // };

        // eventually I would need to calibrate moving mechanics to look better on canvas size
    // moveRight(distance){
    //     // clear canvas before next frame
    //     this.context.clearRect(0, 0, screen.width, screen.height);
    //     // update position to the right
        
    //     // draw player car if it is inside canvas borders
    //     if (this.carX < 640) { // return here to calibrate later
    //         // debugger
    //         this.carX += distance;
    //         this.context.drawImage(this.carImg, this.carX, this.carY, this.width, this.height);
    //     } else {
    //         this.context.drawImage(this.carImg, 645, this.carY, this.width, this.height);
    //     }
    // }

    // moveLeft(distance){
    //     this.context.clearRect(0, 0, screen.width, screen.height);

    //     if (this.carX >= 40) {
    //         this.carX -= distance;
    //         this.context.drawImage(this.carImg, this.carX, this.carY, this.width, this.height);
    //     } else {
    //         this.context.drawImage(this.carImg, 0, this.carY, this.width, this.height);
    //     }
        
    // }

    // moveUp(distance){
    //     this.context.clearRect(0, 0, screen.width, screen.height);

    //     if (this.carY > 0) {
    //         this.carY -= distance;
    //         this.context.drawImage(this.carImg, this.carX, this.carY, this.width, this.height);
    //     } else {
    //         this.context.drawImage(this.carImg, this.carX, this.carY, this.width, this.height);
    //     }
        
    // }
    
    // moveDown(distance){
    //     this.context.clearRect(0, 0, screen.width, screen.height);

    //     if (this.carY < 600) {
    //         this.carY += distance;
    //         this.context.drawImage(this.carImg, this.carX, this.carY, this.width, this.height);
    //     } else {
    //         this.context.drawImage(this.carImg, this.carX, this.carY, this.width, this.height);
    //     }
        
    // }


        // // constantly draw competitors cars
        // if (competitors[0].carY < competitors[0].screen.height){
        //     competitors[0].carY += 5; // improve later by adding relationship with game speed
        //     competitors[0].drive();
        // } else {   // if competitor car is out of bottom border then it appears on top
        //     competitors[0].carX = Math.random() * (screen.width-65 - 10) + 10;
        //     competitors[0].carY = Math.random() * (-200 - 100) -200;
        // }
                // if (competitors[2].carY < competitors[2].screen.height){
        //     competitors[2].carY += 5;
        //     competitors[2].drive();
        // } else {
        //     competitors[2].carX = Math.random() * (screen.width-65 - 10) + 10;
        //     competitors[2].carY = Math.random() * (-200 - 100) -200;
        // }

        // if (competitors[3].carY < competitors[3].screen.height){
        //     competitors[3].carY += 5;
        //     competitors[3].drive();
        // } else {
        //     competitors[3].carX = Math.random() * (screen.width-65 - 10) + 10;
        //     competitors[3].carY = Math.random() * (-200 - 100) -200;
        // }

        // if (competitors[4].carY < competitors[4].screen.height){
        //     competitors[4].carY += 5;
        //     competitors[4].drive();
        // } else {
        //     competitors[4].carX = Math.random() * (screen.width-65 - 10) + 10;
        //     competitors[4].carY = Math.random() * (-200 - 100) -200;
        // }