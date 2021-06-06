


class EndScreen extends Drawable {


    keyboard;
    isActive = false;

    deadByCheckpoint = 0;

    constructor(parent, keyboard) {
        super(parent);
        this.keyboard = keyboard;
        this.loadImage('./img/9.Intro _ Outro Image/_Game over_ screen/3.Game over.png');
        this.width = 800;
        this.height = 480;
    }

    process(delta) {
        if (!this.keyboard.isPressedFire()) {
            return;
        }
        this.parent.endScreenClosed();
    }

    draw(camera) {
        super.draw(camera);
        camera.ctx.font = "40px Georgia";
        camera.ctx.fillStyle = "yellow";
        camera.ctx.fillText(`Yeah, nice run!`, 260, 75);
        camera.ctx.fillText(`You have ${this.deadByCheckpoint} stages cleared`, 200, 395);
        camera.ctx.fillText(`Press "SPACE" for a new game`, 130, 450);
    }

    setDeadCheckpoint(stage) {
        this.deadByCheckpoint = stage;
    }
}