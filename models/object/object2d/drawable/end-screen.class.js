
/**
 * This is the end screen of the game.
 * 
 * @extends Drawable
 */

class EndScreen extends Drawable {


    keyboard;
    /** Say is the class aktive or not */
    isActive = false;
    /** Show how many stages has the player clear */
    deadByCheckpoint = 0;

    constructor(parent, keyboard) {
        super(parent);
        this.keyboard = keyboard;
        this.loadImage('./img/9.Intro _ Outro Image/_Game over_ screen/3.Game over.png');
        this.width = 800;
        this.height = 480;
    }

    /**
     * Controls the logical processing of this object
     * 
     * @param {number} delta - This is duration of the last frame
     */
    process(delta) {
        if (!this.keyboard.isPressedFire()) {
            return;
        }
        this.parent.endScreenClosed();
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
        camera.ctx.fillText(`Yeah, nice run!`, 260, 75);
        camera.ctx.fillText(`You have ${this.deadByCheckpoint} stages cleared`, 200, 395);
        camera.ctx.fillText(`Press "SPACE" for a new game`, 130, 450);
    }

    /**
     * Set how many stage has the player clear
     * 
     * @param {*} stage - This is the stage are clear
     */
    setDeadCheckpoint(stage) {
        this.deadByCheckpoint = stage;
    }
}