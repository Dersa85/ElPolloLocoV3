

/**
 * This object is displayed in the game is provided with a collision and added the bottle counter to character
 * 
 * @extends Physics
 */
class BottleItem extends Physics {

    /** All animation callable with the key as state */
    animations = {
        'idle1': {
            'infinity': false,
            'current-index': 0,
            'switch-timer': 100,
            'time-left': 100,
            'paths': this.getImagesArray([
                './img/6.botella/2.Botella_enterrada1.png'
            ])
        },
        'idle2': {
            'infinity': false,
            'current-index': 0,
            'switch-timer': 100,
            'time-left': 100,
            'paths': this.getImagesArray([
                './img/6.botella/2.Botella_enterrada2.png'
            ])
        }
    }

    /** Current state, is for the animation important */
    state = 'idle1';
    SOUND_COLLECT = new Audio('./sound/bottle-collected.mp3');

    constructor(parent) {
        super(parent);
        this.width = 50;
        this.height = 50;
        this.ground = 370;
        this.collisionDiameter = 20;
        if (Math.random() < 0.5) {
            this.state = 'idle2';
        }
        
    }

    /**
     * Controls the logical processing of this object
     * 
     * @param {number} delta - This is duration of the last frame
     */
    process(delta) {
        super.process(delta);
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