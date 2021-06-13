

/**
 * This object is displayed in the game is provided with a collision and damaged enemys
 * 
 * @extends Physics
 */
class Bottle extends Physics {

    /** All animation callable with the key as state */
    animations = {
        'fly': {
            'infinity': true,
            'current-index': 0,
            'switch-timer': 50,
            'time-left': 50,
            'paths': this.getImagesArray([
                './img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
                './img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
                './img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
                './img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png'
            ])
        },
        'broken': {
            'infinity': false,
            'current-index': 0,
            'switch-timer': 50,
            'time-left': 50,
            'paths': this.getImagesArray([
                './img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 7.png',
                './img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 8.png',
                './img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 9.png',
                './img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 10.png',
                './img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 11.png',
                './img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 12.png'
            ])
        }
    }

    /** Current state, is for the animation important */
    state = 'fly';

    SOUND_THROW = new Audio('./sound/throw.mp3');
    SOUND_BROKEN = new Audio('./sound/bottle-broken.mp3');

    constructor(parent) {
        super(parent);
        this.ground = 392;
        this.speedX = 0.4;
        this.speedY = -0.1;
        this.width = 50;
        this.height = 50;
        this.collisionDiameter = 20;
        this.SOUND_THROW.play();
    }

    /**
     * Controls the logical processing of this object
     * 
     * @param {number} delta - This is duration of the last frame
     */
    process(delta) {
        super.process(delta);
        super.addX(this.speedX * delta);
        
        this.stateMaschine();
        
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
        
        if (!this.animations[state]['infinity'] && this.animations[state]['current-index'] == arrayLength - 1) {
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

    /**
     * Check if object collide with ground
     */
    checkCollisionWithOnGround() {
        if (this.isOnGround()) {
            this.switshToStateBroken()
        }
    }

    /**
     * Switch the state to 'brocken'
     */
    switshToStateBroken() {
        this.state = 'broken';
        this.speedX = this.speedX * 0.5;
        this.SOUND_BROKEN.play();
    }

    /**
     * Check if can delete
     */
    checkCanDelete() {
        let totalCounter = this.animations[this.state]['paths'].length -1;
        let currentCounter = this.animations[this.state]['current-index']
        
        if (currentCounter == totalCounter) {
            this.canDelete = true;
        }
    }
    
    /** processes the change of animations */
    stateMaschine() {
        if (this.state == 'fly') {
            this.checkCollisionWithOnGround();
        } else if (this.state == 'broken') {
            this.checkCanDelete();
        }
    }

    /** Switch the speedX to negative */
    switchFlyDirection() {
        this.speedX = this.speedX * -1;
    }

    /**
     * Return if state is 'brocken'
     * 
     * @returns {boolean}
     */
    isBroken() {
        return this.state == 'broken';
    }

}