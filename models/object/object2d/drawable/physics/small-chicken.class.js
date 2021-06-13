

/**
 * This object is displayed in the game is provided with a collision and has a simple process
 * 
 * @extends Physics
 */
class SmallChicken extends Physics {

    /** All animation callable with the key as state */
    animations = {
        'walk': {
            'infinity': true,
            'current-index': 0,
            'switch-timer': 100,
            'time-left': 100,
            'paths': this.getImagesArray([
                './img/3.Secuencias_Enemy_básico/Versión_pollito/1.Paso_derecho.png',
                './img/3.Secuencias_Enemy_básico/Versión_pollito/2.Centro.png',
                './img/3.Secuencias_Enemy_básico/Versión_pollito/3.Paso_izquierdo.png',
            ])
        },
        'dead': {
            'infinity': false,
            'current-index': 0,
            'switch-timer': 1,
            'time-left': 1,
            'paths': this.getImagesArray([
                './img/3.Secuencias_Enemy_básico/Versión_pollito/4.Muerte.png',
            ])
        }
    }
    
    /** Current state, is for the animation important */
    state = 'walk';
    /** If setted then can delete after x time */
    timeOfDeath;
    /** Current hp */
    hp = 1;

    SOUND_DEAD = new Audio('./sound/small-dead.mp3');

    constructor(parent, width, height) {
        super(parent, width, height);
        this.ground = 380;
        this.speedX = -0.10;
        this.width = 40;
        this.height = 40;
        this.collisionDiameter = 18;
    }

    /**
     * Controls the logical processing of this object
     * 
     * @param {number} delta - This is duration of the last frame
     */
    process(delta) {
        super.process(delta);
        super.addX(this.speedX * delta);
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

    /** processes the change of animations */
    stateMaschine() {
        if (this.state == 'walk') {
            this.checkIfDead();
        }
    }

    /**
     * This reduce the current hp and switch the current state if needed
     * 
     * @param {number} value - This value reduce the hp
     */
    damage(value) {
        this.hp -= value;
        if (this.hp <= 0) {
            this.state = 'dead';
            this.timeOfDeath = Date.now();
            this.speedX = 0;
            this.SOUND_DEAD.play();
        }
    }
}