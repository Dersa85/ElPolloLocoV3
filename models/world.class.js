

class World {

    canvas;
    camera;
    character;
    backgroundHandler;
    bottleHandler;
    keyboard;

    fps = 60;

    

    constructor(canvas) {
        this.canvas = canvas;
        this.keyboard = new Keyboard();
        this.camera = new Camera(this, canvas);
        this.bottleHandler = new BottleHandler(this);
        this.character = new Character(this, 150, 250, this.keyboard, this.bottleHandler);
        this.backgroundHandler = new BackgroundHandler(this, this.character);
        //this.bottleHandler.createNewBottle(200, 200); //TEST
    }

    start() {
        this.gameLoop();
    }

    gameLoop(delta = 0) {
        let startTimeStemp = Date.now()

        this.process(delta);
        this.draw();

        let waitTime = this.getWaitTimeForNextFrame(startTimeStemp);
        setTimeout(() => {
            this.gameLoop(Date.now() - startTimeStemp);
        }, waitTime);
    }

    getWaitTimeForNextFrame(startTimeStemp) {
        let timePast = Date.now() - startTimeStemp;
        let waitTime = 1000 / this.fps - timePast;
        if (waitTime < 0) {
            waitTime = 0;
        }
        return waitTime;
    }


    process(delta) {
        this.character.process(delta);
        this.camera.addX(this.character.getAddX());
        this.backgroundHandler.process(delta);
        this.bottleHandler.process(delta);
    }

    draw() {
        this.camera.clear();
        this.camera.setDrawingPosition();
        
        this.backgroundHandler.draw(this.camera);
        this.bottleHandler.draw(this.camera);
        this.character.draw(this.camera);
        
        
        this.camera.removeDrawingPosition();
    }

    

}