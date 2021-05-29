

class World {

    camera;
    character;
    backgroundHandler;

    fps = 60;

    constructor(canvas) {
        this.camera = new Camera(this, canvas);
        this.backgroundHandler = new BackgroundHandler(this);
        this.character = new Character(this, 150, 250);

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

    }

    draw() {
        this.camera.clear();
        this.backgroundHandler.draw(this.camera);
        this.character.draw(this.camera);
    }

}