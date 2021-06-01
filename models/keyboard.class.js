

class Keyboard {

    RIGHT = false;
    LEFT = false;
    UP = false;
    SPACE = false;

    constructor() {
        addEventListener('keydown', e => {
            if (e.code == 'ArrowRight') {
                this.RIGHT = true;
            } else if (e.code == 'ArrowLeft') {
                this.LEFT = true;
            }
            if (e.code == 'ArrowUp') {
                this.UP = true;
            }
            if (e.code == 'Space') {
                this.SPACE = true;
            }
        });
        addEventListener('keyup', e => {
            if (e.code == 'ArrowRight') {
                this.RIGHT = false;
            } else if (e.code == 'ArrowLeft') {
                this.LEFT = false;
            }
            if (e.code == 'ArrowUp') {
                this.UP = false;
            }
            if (e.code == 'Space') {
                this.SPACE = false;
            }
        });
    }

    isPressedRight() {
        return !this.LEFT && this.RIGHT;
    }
    isPressedLeft() {
        return this.LEFT && !this.RIGHT;
    }
    isNothingPressed() {
        return !(this.RIGHT || this.LEFT || this.SPACE || this.UP);
    }
    isMovingPressed() {
        return this.RIGHT || this.LEFT
    }
    isPressedUp() {
        return this.UP;
    }
    isPressedFire() {
        return this.SPACE;
    }

}