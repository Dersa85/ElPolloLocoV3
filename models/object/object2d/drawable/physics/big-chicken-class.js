

/**
 * This object is displayed in the game is provided with a collision and has a simple process
 * 
 * @extends Physics
 */
class BigChicken extends Physics {

    /** All animation callable with the key as state */
    animations = {
        'walk': {
            'infinity': true,
            'current-index': 0,
            'switch-timer': 110,
            'time-left': 110,
            'paths': this.getImagesArray([
                './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G1.png',
                './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G2.png',
                './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G3.png',
                './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G4.png'
            ])
        },
        'alert': {
            'infinity': false,
            'current-index': 0,
            'switch-timer': 200,
            'time-left': 200,
            'paths': this.getImagesArray([
                './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G5.png',
                './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G6.png',
                './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G7.png',
                './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G8.png',
                './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G9.png',
                './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G10.png',
                './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G11.png',
                './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G12.png'
            ])
        },
        'attack': {
            'infinity': true,
            'current-index': 0,
            'switch-timer': 250,
            'time-left': 250,
            'paths': this.getImagesArray([
                './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G13.png',
                './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G14.png',
                './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G15.png',
                './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G16.png',
                './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G17.png',
                './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G18.png',
                './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G19.png',
                './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G20.png'
            ])
        },
        'hit': {
            'infinity': false,
            'current-index': 0,
            'switch-timer': 150,
            'time-left': 150,
            'paths': this.getImagesArray([
                './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G21.png',
                './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G22.png',
                './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G23.png'
            ])
        },
        'dead': {
            'infinity': false,
            'current-index': 0,
            'switch-timer': 150,
            'time-left': 150,
            'paths': this.getImagesArray([
                './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G24.png',
                './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G25.png',
                './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G26.png'
            ])
        }
    }

    /** Current state, is for the animation important */
    state = 'walk';
    /** If setted then can delete after x time */
    timeOfDeath;
    /** Delay time between attacks */
    attackDelay = 500;
    /** Last attack time stamp */
    lastAttack = 0;
    character;
    /** Current hp */
    hp = 2;

    SOUND_ATTACK = new Audio('./sound/big-chicken-attack.mp3');
    SOUND_ANGRY = new Audio('./sound/big-chicken-angry.mp3');

    constructor(parent, character) {
        super(parent);
        this.character = character;
        this.ground = 185;
        this.speedX = -0.2;
        this.width = 250;
        this.height = 250;
        this.collisionDiameter = 110;
    }

    /**
     * Controls the logical processing of this object
     * 
     * @param {number} delta - This is duration of the last frame
     */
    process(delta) {
        super.process(delta);
        if (this.state == 'walk') {
            super.addX(this.speedX * delta);
        }
        
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
            this.checkPlayerInRange();
        } else if (this.state == 'alert') {
            this.checkCanAttack();
        } else if (this.state == 'attack') {
            this.attack();
            this.checkCanAttack();
            this.checkNobodyInNear();
        } else if (this.state == 'hit' && this.animations[this.state]['current-index'] == this.animations[this.state]['paths'].length) {
            this.changeStateTo('walk');
        }
    }

    /** Check if character not in near then walk */
    checkNobodyInNear() {
        if (this.x - this.character.x > 500) {
            this.changeStateTo('walk');
        }
    }

    /** If player in range then change state to 'alert' */
    checkPlayerInRange() {
        if (this.x - this.character.x < 350) {
            this.changeStateTo('alert');
            this.SOUND_ANGRY.play();
        }
    }

    /**
     * Check if player in range and try attack
     * 
     * @returns {void}
     */
    checkCanAttack() {
        let state = this.state;
        let arrayLength = this.animations[state]['paths'].length;
        if (this.animations[state]['current-index'] != arrayLength - 1) {
            return
        }
        this.SOUND_ATTACK.play();
        this.changeStateTo('attack');
    }

    /**
     * Reset current state and set a new state
     * 
     * @param {string} newState - This is the new state
     */
    changeStateTo(newState) {
        this.resetOldAnimation();
        this.state = newState;
    }

    /**
     * Reset current state
     */
    resetOldAnimation() {
        this.animations[this.state]['finished'] = false;
        this.animations[this.state]['current-index'] = 0;
        this.animations[this.state]['time-left'] = this.animations[this.state]['switch-timer'];
    }

    /**
     * Try to attack
     * 
     * @returns {void}
     */
    attack() {
        if (this.animations[this.state]['current-index'] != 5) {
            return;
        }
        if (Date.now() - this.lastAttack > this.attackDelay) {
            this.lastAttack = Date.now();
            let xPosition = this.getX() + 185;
            let yPosition = this.getY() + 145;
            this.parent.createSmallChicken(xPosition, yPosition);
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
        } else {
            this.changeStateTo('hit');
        }
    }

    /**
     * Change the sound volume
     * 
     * @param {number} value - This is the new volume value
     */
    setSoundVolume(value) {
        this.SOUND_ATTACK.volume = value;
        this.SOUND_ANGRY.volume = value;
    }
}
