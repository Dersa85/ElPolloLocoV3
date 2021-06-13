
/**
 * This is the main class for all background objects
 * 
 * @extends Drawable
 */
class Background extends Drawable {

    /** Say how many percent moving the object relative to character */
    paralaxValue = 0;

    constructor(parent, width, height) {
        super(parent, width, height);
    }

    /**
     * Get the paralax value
     * @returns {number}
     */
    getParalaxValue() {
        return this.paralaxValue;
    }

    /**
     * Moving the object with factor of paralax 
     * 
     * @param {number} value - This is the moving (x) direction
     */
    paralaxMoving(value) {
        super.addX(value * this.getParalaxValue());
    }

    /**
     * Set the start x position
     * 
     * @param {number} value - This is the new value of x position
     */
    setStartPosition(value) {
        super.setX(value);
    }

    /**
     * Added a value to current x position
     * 
     * @param {number} value - This value added to x position
     */
    reposition(value) {
        super.addX(value);
    }

}