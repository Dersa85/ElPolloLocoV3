

/**
 * This object is displayed in the game is provided with a collision and has a simple process
 * 
 * @extends Physics
 */
class Chicken extends Physics {

    /** All animation callable with the key as state */
    animations = {
        'walk': {
            'infinity': true,
            'current-index': 0,
            'switch-timer': 100,
            'time-left': 100,
            'paths': this.getImagesArray([
                './img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
                './img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
                './img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png',
            ])
        },
        'dead': {
            'infinity': false,
            'current-index': 0,
            'switch-timer': 100,
            'time-left': 100,
            'paths': this.getImagesArray([
                './img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png',
            ])
        }
    }

    /** Current state, is for the animation important */
    state = 'walk';
    /** If setted then can delete after x time */
    timeOfDeath;
    /** Current hp */
    hp = 1;
    
    SOUND_WALK = new Audio('./sound/chicken-normal.mp3');
    SOUND_DEAD = new Audio('./sound/small-dead.mp3');
    /** Prevents the playback of sound loops */
    waitTimeForSound = 0;

    constructor(parent) {
        super(parent);
        this.ground = 363;
        this.speedX = -0.2 + Math.random() * 0.1;
        this.width = 60;
        this.height = 60;
        this.collisionDiameter = 27;
        this.generateRandomSoundTimer();
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
        this.randomSoundPlayer(delta);
    }
    
    /**
     * Play the walk sound with random delay time
     * 
     * @param {number} delta - This is the duration of the last frame
     * @returns {void}
     */
    randomSoundPlayer(delta) {
        if (this.state == 'dead') {
            return;
        }
        
        this.waitTimeForSound -= delta;
    
        if (this.waitTimeForSound <= 0) {
            if (this.SOUND_WALK.paused) {
                this.SOUND_WALK.play();
            }
            this.generateRandomSoundTimer();
        }
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

    /**
     * Generate random number for the delay walk sound
     */
    generateRandomSoundTimer() {
        this.waitTimeForSound = 300 + Math.random() * 5000;
    }

    /**
     * Change the sound volume
     * 
     * @param {number} value - This is the new volume value
     */
    setSoundVolume(value) {
        this.SOUND_DEAD.volume = value;
        this.SOUND_WALK.volume = value;
    }
}