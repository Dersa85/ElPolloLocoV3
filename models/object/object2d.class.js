
/**
 * This class add all function for the moving and positions from objects 
 * 
 * @extends GameObject
 */
class Object2D extends GameObject {

    x = 0;
    y = 0;

    lastAddX = 0;
    lastAddY = 0;

    constructor(parent) {
        super(parent);
    }

    /**
     * Get the x position
     * 
     * @returns {number}
     */
    getX() {
        return this.x;
    }

    /**
     * Get the y position
     * 
     * @returns {number}
     */
    getY() {
        return this.y;
    }

    /**
     * Add x position to current
     * 
     * @param {number} value - This added to current x
     */
    addX(value) {
        this.x += value;
        this.lastAddX = value;
    }

    /**
     * Add y position to current
     * 
     * @param {number} value - This added to current y
     */
    addY(value) {
        this.y += value;
        this.lastAddY = value;
    }

    /**
     * Set new x position
     * 
     * @param {number} value - This is the new x position
     */
    setX(value) {
        this.lastAddX = value - this.x;
        this.x = value;
    }
    
    /**
     * Set new y position
     * 
     * @param {number} value - This is the new y position
     */
    setY(value) {
        this.lastAddY = value - this.y;
        this.y = value;
    }

    /**
     * Get the last added x position
     * 
     * @returns {number}
     */
    getAddX() {
        return this.lastAddX;
    }
    
    /**
     * Get the last added y position
     * 
     * @returns {number}
     */
    getAddY() {
        return this.lastAddY;
    }
}