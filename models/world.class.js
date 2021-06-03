

class World {

    canvas;
    camera;
    character;
    backgroundHandler;
    bottleHandler;
    enemyHandler;
    keyboard;

    fps = 60;

    

    constructor(canvas) {
        this.canvas = canvas;
        this.keyboard = new Keyboard();
        this.camera = new Camera(this, canvas);
        this.bottleHandler = new BottleHandler(this);
        this.character = new Character(this, this.keyboard, this.bottleHandler);
        this.backgroundHandler = new BackgroundHandler(this, this.character);
        this.enemyHandler = new EnemyHandler(this, this.character);
        //this.enemyHandler.createBigChicken(2000, 400);
        //this.enemyHandler.createSmallChicken(400, 400);
        //this.enemyHandler.createChicken(400, 400);
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
        this.enemyHandler.process(delta);
    }

    draw() {
        this.camera.clear();
        this.camera.setDrawingPosition();
        
        this.backgroundHandler.draw(this.camera);
        this.bottleHandler.draw(this.camera);
        this.enemyHandler.draw(this.camera);
        this.character.draw(this.camera);
        
        
        this.camera.removeDrawingPosition();
    }

}