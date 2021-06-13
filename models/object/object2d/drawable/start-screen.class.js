

/**
 * This is the start screen of the game.
 * 
 * @extends Drawable
 */

class StartScreen extends Drawable {

    keyboard;
    /** Say is the class aktive or not */
    isActive = true;
    /** delay time for interaction */
    reactionDelay = 500;

    constructor(parent, keyboard) {
        super(parent);
        this.keyboard = keyboard;
        this.loadImage('./img/9.Intro _ Outro Image/Start Screen/Opción 1.png');
        this.width = 800;
        this.height = 480;
    }

    /**
     * Controls the logical processing of this object
     * 
     * @param {number} delta - This is duration of the last frame
     */
    process(delta) {
        this.reactionDelay -= delta;
        if (!this.keyboard.isPressedFire() || this.reactionDelay >= 0) {
            return;
        }
        console.log('START GAME')
        this.parent.newGame();
    }

    /**
     * Drawing the class
     * 
     * @param {Camera} camera - This is the camera object which is responsible for the drawing
     */
    draw(camera) {
        super.draw(camera);
        camera.ctx.font = "40px Georgia";
        camera.ctx.fillStyle = "yellow";
        camera.ctx.fillText('Press "ESC" for the Menu', 190, 70);
        camera.ctx.fillText('or "Space" to start Game', 190, 110);
    }

    /**
     * Show the screen and set new interaction delay
     */
    open() {
        this.isActive = true;
        this.reactionDelay = 500;
    }
}