

/**
 * This object is displayed in the game is provided with a collision and has a simple process
 * 
 * @extends Physics
 */
class CoinItem extends Physics {

    /** All animation callable with the key as state */
    animations = {
        'idle': {
            'infinity': false,
            'current-index': 0,
            'switch-timer': 100,
            'time-left': 100,
            'paths': this.getImagesArray([
                './img/8.Coin/Moneda2.png'
            ])
        },
    }

    /** Current state, is for the animation important */
    state = 'idle';
    
    SOUND_COLLECT = new Audio('./sound/coin-collected.mp3');

    constructor(parent) {
        super(parent);
        this.width = 150;
        this.height = 150;
        this.ground = 150;
        this.collisionDiameter = 25;
        
    }

    /**
     * Controls the logical processing of this object
     * 
     * @param {number} delta - This is duration of the last frame
     */
    process(delta) {
        super.process(delta);
        if (this.isOnGround()) {
            this.setSpeedY(-0.3);
        }
        this.playAnimation(delta);
    }

    /**
     * This play the current animation and switch the image if time is over
     * 
     * @param {number} delta - This is duration of the last frame
     * @returns {void}
     */
    playAnimation(delta) {
        let state = this.state;
        let arrayLength = this.animations[state]['paths'].length;
        
        if (!this.animations[state]['infinity'] && this.animations[state]['current-index'] == arrayLength) {
            return;
        }

        this.animations[state]['time-left'] -= delta;
        if (this.animations[state]['time-left'] <= 0) {
            this.animations[state]['time-left'] += this.animations[state]['switch-timer'];
            this.animations[state]['current-index'] += 1;
            let pathIndex = this.animations[state]['current-index'] % arrayLength;
            this.changeImage(this.animations[state]['paths'][pathIndex]);
        }
    }

}