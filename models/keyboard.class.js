
/** The Class processes the control of the character*/

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

    /**
     * Check if can move right
     * 
     * @returns {boolean}
     */
    isPressedRight() {
        return !this.LEFT && this.RIGHT;
    }

    /**
     * Check if can move left
     * 
     * @returns {boolean}
     */
    isPressedLeft() {
        return this.LEFT && !this.RIGHT;
    }

    /**
     * Check if nothing pressed
     * 
     * @returns {boolean}
     */
    isNothingPressed() {
        return !(this.RIGHT || this.LEFT || this.SPACE || this.UP);
    }

    /**
     * Check if moving left or right
     * 
     * @returns {boolean}
     */
    isMovingPressed() {
        return this.RIGHT || this.LEFT
    }

    /**
     * Check if want jump
     * 
     * @returns {boolean}
     */
    isPressedUp() {
        return this.UP;
    }

    /**
     * Check if want throt bottle
     * 
     * @returns {boolean}
     */
    isPressedFire() {
        return this.SPACE;
    }

}