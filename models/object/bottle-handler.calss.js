
/**
 * 
 * This class is a container and handler for all thrown bottles
 * 
 * @extends GameObject
 */

class BottleHandler extends GameObject {


    bottles = [];
    /** Sound volume for all enemy sounds */
    soundVolume = 1;

    constructor(parent) {
        super(parent);
    }

    /**
     * Create a thrown bottle and set his position, ply direction and speed
     * 
     * @param {number} posX - This is the x position 
     * @param {number} posY - This is the y position 
     * @param {boolean} throwLeft - This parameter set the fly direction to left
     * @param {number} addPower - This modified the flying speed
     */
    createNewBottle(posX, posY, throwLeft, addPower) {
        let bottle = new Bottle(this);
        bottle.SOUND_THROW.volume = this.soundVolume;
        bottle.SOUND_BROKEN.volume = this.soundVolume;
        bottle.setX(posX);
        bottle.setY(posY);
        bottle.speedX += addPower;
        if (throwLeft) {
            bottle.switchFlyDirection();
        }
        this.bottles.push(bottle);
    }

    /**
     * Controls the logical processing of this object
     * 
     * @param {number} delta - This is duration of the last frame
     */
    process(delta) {
        for (let i = 0; i < this.bottles.length; i++) {
            this.bottles[i].process(delta);
        }
        this.checkBottleToDelete();
    }

    /**
     * Give all enemys the draw command
     * 
     * @param {Camera} camera - This is the camera object which is responsible for the drawing
     */
    draw(camera) {
        for (let i = 0; i < this.bottles.length; i++) {
            this.bottles[i].draw(camera);
        }
    }

    /**
     * Check if can delete bottles
     */
    checkBottleToDelete() {
        for (let i = this.bottles.length -1; i >= 0; i--) {
            if (this.bottles[i].canDelete) {
                this.bottles.splice(i, 1);
            }
        }
    }

    /**
     * Get all bottles as array
     * 
     * @returns {Array}
     */
    getBottles() {
        return this.bottles;
    }

    /**
     * Clear the bottles array
     */
    reset() {
        this.bottles = [];
    }

    /**
     * Change the sound volume for all bottles
     * 
     * @param {number} value - This is the new volume
     */
    setSoundVolume(value) {
        this.soundVolume = value;
        this.bottles.forEach(bottle => {
            bottle.SOUND_THROW.volume = value;
            bottle.SOUND_BROKEN.volume = value;
        });
    }
    
}