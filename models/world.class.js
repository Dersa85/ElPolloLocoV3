
/**
 * The World class is the main class for the game. The class have the total control of the game procedure
 */

class World {

    canvas;
    camera;
    character;
    backgroundHandler;
    bottleHandler;
    enemyHandler;
    levelHandler;
    itemHandler;
    statusBarHandler;
    startScreen;
    endScreen;
    keyboard;

    /** Set the frame per secounds */
    fps = 60;

    /** If true then deactivate the process function in game objects */
    isStopped = false;

    SOUND_BACKGROUND = new Audio('./sound/background-musik.mp3');

    constructor(canvas) {
        this.canvas = canvas;
        this.keyboard = new Keyboard();
        this.camera = new Camera(this, canvas);
        this.itemHandler = new ItemHandler(this);
        this.bottleHandler = new BottleHandler(this);
        this.statusBarHandler = new StatusbarHandler(this);
        this.character = new Character(this, this.keyboard, this.bottleHandler, this.statusBarHandler);
        this.backgroundHandler = new BackgroundHandler(this, this.character);
        this.enemyHandler = new EnemyHandler(this, this.character);
        this.levelHandler = new LevelHandler(this, this.character, this.enemyHandler, this.itemHandler)
        this.startScreen = new StartScreen(this, this.keyboard);
        this.endScreen = new EndScreen(this, this.keyboard);
        this.itemHandler.createBottle(500);
        this.itemHandler.createCoin(500);

        this.showEndScreen();
    }

    /**
     * Activate the gameloop
     */
    start() {
        this.gameLoop();
    }

    /**
     * The main loop for the game 
     * 
     * @param {number} delta - This is duration of the last frame
     */
    gameLoop(delta = 0) {
        let startTimeStemp = Date.now()

        this.process(delta);
        this.draw();

        let waitTime = this.getWaitTimeForNextFrame(startTimeStemp);
        setTimeout(() => {
            this.gameLoop(Date.now() - startTimeStemp);
        }, waitTime);
    }

    /**
     * Calculate the wait time for the fps
     * 
     * @param {number} startTimeStemp - This is the time stemp of begin from frame
     * @returns {number} - Waiting time not to exceed the fps
     */
    getWaitTimeForNextFrame(startTimeStemp) {
        let timePast = Date.now() - startTimeStemp;
        let waitTime = 1000 / this.fps - timePast;
        if (waitTime < 0) {
            waitTime = 0;
        }
        return waitTime;
    }

    /**
     * Check the collisions
     */
    collisionControll() {
        this.itemHandler.checkCollisionWithCharacter(this.character);
        this.enemyHandler.checkCollisionWithBottles(this.bottleHandler.getBottles());
        this.enemyHandler.checkCollisionWithCharacter();
    }

    /**
     * Controls the logical processing of all objects
     * 
     * @param {number} delta - This is duration of the last frame
     * @returns {null}
     */
    process(delta) {
        this.SOUND_BACKGROUND.play();
        if (this.isStopped) {
            return;
        }
        if (this.endScreen.isActive) {
            this.endScreen.process(delta);
        }else if (this.startScreen.isActive) {
            this.startScreen.process(delta);
        } else {
            this.itemHandler.process(delta);
            this.levelHandler.process(delta);
            this.character.process(delta);
            this.camera.addX(this.character.getAddX());
            this.statusBarHandler.addX(this.character.getAddX());
            this.backgroundHandler.process(delta);
            this.bottleHandler.process(delta);
            this.enemyHandler.process(delta);
            this.collisionControll();
        }
    }

    /**
     * Controls the drawing on canvas of all objects
     */
    draw() {
        this.camera.clear();
        
        this.camera.setDrawingPosition();
        
        this.backgroundHandler.draw(this.camera);
        this.bottleHandler.draw(this.camera);
        this.enemyHandler.draw(this.camera);
        this.itemHandler.draw(this.camera);
        this.character.draw(this.camera);
        this.tutorialText();
        this.statusBarHandler.draw(this.camera);

        this.camera.removeDrawingPosition();

        if (this.endScreen.isActive) {
            this.endScreen.draw(this.camera);
        }
        if (this.startScreen.isActive) {
            this.startScreen.draw(this.camera);
        }
    }

    /**
     * Resume the game
     */
    resume() {
        this.isStopped = false;
    }

    /**
     * Stop the game
     */
    menuOpen() {
        this.isStopped = true;
    }

    /**
     * Reset all objects to default
     */
    newGame() {
        this.itemHandler.reset();
        this.bottleHandler.reset();
        this.character.reset();
        this.backgroundHandler.reset();
        this.enemyHandler.reset();
        this.levelHandler.reset();
        this.camera.reset();
        this.statusBarHandler.reset();
        this.startScreen.isActive = false;
    }

    /**
     * Check is the start screen close.
     * 
     * @returns {boolean}
     */
    isGameRunning() {
        return !this.startScreen.isActive;
    }

    /**
     * Change the background volume in game
     * 
     * @param {number} value - This is the new volume value
     */
    changeBackgroundVolume(value) {
        this.SOUND_BACKGROUND.volume = value;
    }

    /**
     * Change the sound volume in game
     * 
     * @param {number} value - This is the new volume value
     */
    changeSoundVolume(value) {
        this.character.SOUND_WALK.volume = value;
        this.character.SOUND_JUMP.volume = value;
        this.bottleHandler.setSoundVolume(value);
        this.enemyHandler.setSoundVolume(value);
        this.itemHandler.setSoundVolume(value);
    }

    /**
     * Draw the Text information in game for the shop
     */
    tutorialText() {
        this.camera.ctx.font = "20px Georgia";
        this.camera.ctx.fillStyle = "yellow";
        this.camera.ctx.fillText('Collect and press "S" for Shop', 450, 150);
    }

    /**
     * Activate end screen
     */
    showEndScreen() {
        this.endScreen.setDeadCheckpoint(this.levelHandler.nextSecundaryStage -1);
        this.endScreen.isActive = true;
        console.log('Show EndScreen')
    }

    /**
     * Closing the end screen
     */
    endScreenClosed() {
        this.endScreen.isActive = false;
        this.startScreen.open();
    }
}