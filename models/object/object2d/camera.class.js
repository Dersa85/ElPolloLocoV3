

/**
 * This class draw all objects on canvas. Must always pass the draw function
 * 
 * @extends Object2D
 */

class Camera extends Object2D {

    /** The canvas to draw */
    canvas;
    /** The context 2d from canvas */
    ctx;
    /** Activate it to draw collision circle for all objects */
    debugModus = false;

    constructor(parent, canvas) {
        super(parent);
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
    }

    /**
     * Clear canvas
     */
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    /** Reposition for correct drawing */
    setDrawingPosition() {
        this.ctx.translate(-this.getX(), 0);
    }

    /** remove the reposition */
    removeDrawingPosition() {
        this.ctx.translate(this.getX(), 0);
    }

    /**
     * If {debugModus} is true then draw the collisions circle from object
     * 
     * @param {*} object - This is the object with parameter for draw collision circle
     */
    drawCollisionCircle(object) {
        if (this.debugModus == true) {
            this.ctx.beginPath();
            this.ctx.arc(object.getCenterX(), object.getCenterY(), object.collisionDiameter, 0, 2 * Math.PI);
            this.ctx.stroke();
        }
    }

    /** Reset the camera */
    reset() {
        this.x = 0;
    }

}