
/**
 * This class controls all the collision check and gravity
 * 
 * @extends Drawable
 */
class Physics extends Drawable {

    /** The x moveing direction */
    speedX = 0;
    /** The y moveing direction */
    speedY = 0;
    
    /** The y position for gravity */
    ground = 0;
    /** acceleration for the gravity */
    gravityPower = 0.0012;
    /** the radius for collision */
    collisionDiameter = 30;

    constructor(parent) {
        super(parent);
    }

    /**
     * Controls the logical processing of this object
     * 
     * @param {number} delta - This is duration of the last frame
     */
    process(delta) {
        this.gravity(delta);
    }

    /**
     * Pulls the object down to the ground
     * 
     * @param {number} delta - This is duration of the last frame
     */
    gravity(delta) {
        this.addSpeedY(this.gravityPower * delta);
        
        let differenceToGround = this.getGround() - this.getY();
        if (differenceToGround < 0 && this.getSpeedY() > 0) {
            if (this.getSpeedY() - differenceToGround > 0) {
                this.setSpeedY(0);
                this.setY(this.getGround())
            }
        }

        super.addY(this.getSpeedY() * delta);

    }

    /** Get the ground */
    getGround() {
        return this.ground;
    }

    /** Get the move direction y */
    getSpeedY() {
        return this.speedY;
    }

    /**
     * Set the move direction y
     * 
     * @param {number} value - This is the new value for speedY
     */
    setSpeedY(value) {
        this.speedY = value;
    }

    /**
     * Add the move direction y
     * 
     * @param {number} value - This value add to speedY
     */
    addSpeedY(value) {
        this.speedY += value
    }

    /**
     * Check, is the object on ground (y) or not
     * 
     * @returns {boolean}
     */
    isOnGround() {
        return this.getY() >= this.getGround();
    }

    /**
     * Check is this class collide with the object or not
     * 
     * @param {*} object 
     * @returns {boolean}
     */
    isCollideWith(object) {
        let distanceX = this.getCenterX() - object.getCenterX();
        let distanceY = this.getCenterY() - object.getCenterY();
        let distanceXPow2 = Math.pow(distanceX, 2);
        let distanceYPow2 = Math.pow(distanceY, 2);
        let directDistance = Math.sqrt(distanceXPow2 + distanceYPow2);
        let neddedDistanceToCollige = this.collisionDiameter + object.collisionDiameter;
        if (directDistance <= neddedDistanceToCollige) {
            return true;
        }
        return false;

    } 
}