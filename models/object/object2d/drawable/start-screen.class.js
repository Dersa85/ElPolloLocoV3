


class StartScreen extends Drawable {


    keyboard;
    isActive = true;
    reactionDelay = 500;

    constructor(parent, keyboard) {
        super(parent);
        this.keyboard = keyboard;
        this.loadImage('./img/9.Intro _ Outro Image/Start Screen/Opción 1.png');
        this.width = 800;
        this.height = 480;
    }

    process(delta) {
        this.reactionDelay -= delta;
        if (!this.keyboard.isPressedFire() || this.reactionDelay >= 0) {
            return;
        }
        console.log('START GAME')
        this.parent.newGame();
    }

    draw(camera) {
        super.draw(camera);
        camera.ctx.font = "40px Georgia";
        camera.ctx.fillStyle = "yellow";
        camera.ctx.fillText('Press "ESC" for the Menu', 190, 70);
        camera.ctx.fillText('or "Space" to start Game', 190, 110);
    }

    open() {
        this.isActive = true;
        this.reactionDelay = 500;
    }
}