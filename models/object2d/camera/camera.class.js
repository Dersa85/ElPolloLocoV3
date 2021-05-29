

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

}