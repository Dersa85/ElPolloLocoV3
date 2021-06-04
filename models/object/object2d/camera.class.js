

class Camera extends Object2D {

    canvas;
    ctx;

    constructor(parent, canvas) {
        super(parent);
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    setDrawingPosition() {
        this.ctx.translate(-this.getX(), 0);
    }

    removeDrawingPosition() {
        this.ctx.translate(this.getX(), 0);
    }

    drawCollisionCircle(object) {
        this.ctx.beginPath();
        this.ctx.arc(object.getCenterX(), object.getCenterY(), object.collisionDiameter, 0, 2 * Math.PI);
        this.ctx.stroke();
    }

}