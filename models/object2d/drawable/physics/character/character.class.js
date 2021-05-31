


class Character extends Physics {

    animations = {
        'idle': {
            'infinity': true,
            'current-index': 0,
            'switch-timer': 150,
            'time-left': 150,
            'paths': this.getImagesArray([
                './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-1.png',
                './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-2.png',
                './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-3.png',
                './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-4.png',
                './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-5.png',
                './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-6.png',
                './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-7.png',
                './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-8.png',
                './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-9.png',
                './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-10.png'
            ])
        },
        'long-idle': {
            'infinity': true,
            'current-index': 0,
            'switch-timer': 150,
            'time-left': 150,
            'paths': this.getImagesArray([
                './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-11.png',
                './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-12.png',
                './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-13.png',
                './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-14.png',
                './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-15.png',
                './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-16.png',
                './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-17.png',
                './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-18.png',
                './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-19.png',
                './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-20.png'
            ])
        },
        'walk': {
            'infinity': true,
            'current-index': 0,
            'switch-timer': 130,
            'time-left': 130,
            'paths': this.getImagesArray([
                './img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-21.png',
                './img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-22.png',
                './img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-23.png',
                './img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-24.png',
                './img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-25.png',
                './img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-26.png'
            ])
        },
        'jump': {
            'infinity': false,
            'current-index': 0,
            'switch-timer': 50,
            'time-left': 50,
            'paths': this.getImagesArray([
                './img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-31.png',
                './img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-32.png',
                './img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-33.png',
                './img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-34.png'
            ])
        },
        'falling': {
            'infinity': false,
            'current-index': 0,
            'switch-timer': 50,
            'time-left': 50,
            'paths': this.getImagesArray([
                './img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-35.png',
                './img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-36.png',
                './img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-37.png',
            ])
        },
        'landing': {
            'infinity': false,
            'current-index': 0,
            'switch-timer': 100,
            'time-left': 100,
            'paths': this.getImagesArray([
                './img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-38.png',
                './img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-39.png'
            ])
        }
    }

    lastInputTimeStemp;
    state = 'idle';
    keyboard;
    
    
    constructor(parent, width, height, keyboard) {
        super(parent, width, height);
        this.keyboard = keyboard;
        this.y = 180;
        this.x = 150;
        this.speedX = 0.9;
        this.ground = 180;
        this.lastInputTimeStemp = Date.now();
    }

    process(delta) {
        super.process(delta);
        if (!this.keyboard.isNothingPressed()) {
            this.lastInputTimeStemp = Date.now();
        }

        let moveXdirection = this.pressedForMovingHorizontal();
        this.moveToDirection(moveXdirection * this.speedX * delta);
        this.checkPressedJump();
        
        this.stateMaschine();
        
        
        this.playAnimation(delta);
    }

    //##### ANIMATION #####//
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

    resetOldAnimation() {
        this.animations[this.state]['finished'] = false;
        this.animations[this.state]['current-index'] = 0;
        this.animations[this.state]['time-left'] = this.animations[this.state]['switch-timer'];
    }
    
    //##### CHECK KEYBOARD #####//
    isSomeonePressed() {
        return !this.keyboard.isNothingPressed();
    }

    pressedForMovingHorizontal() {
        if (this.keyboard.isPressedRight()) {
            return 1;
        } else if (this.keyboard.isPressedLeft()) {
            return -1;
        }
        return 0;
    }

    checkPressedJump() {
        if (this.isOnGround() && this.keyboard.isPressedUp()) {
            this.setSpeedY(this.jumpPower);
        }
    }

    //##### CHECK STATE #####//

    stateMaschine() {
        if (this.state == 'idle') {
            this.checkForLongIdle();
            this.checkForWalk();
            this.checkForJump();
        } else if (this.state == 'walk') {
            this.checkForIdle();
            this.checkForJump();
        } else if (this.state == 'jump') {
            this.checkForFalling();
        } else if (this.state == 'falling') {
            this.checkForLanding();
        } else if (this.state == 'landing') {
            this.checkForIdle();
            this.checkForJump();
            this.checkForWalk();
        } else if (this.state == 'long-idle') {
            this.checkForWalk();
            this.checkForJump();
        }

    }

    checkForIdle() {
        if (this.keyboard.isNothingPressed()) {
            this.changeStateTo('idle');
        }
    }

    checkForLongIdle() {
        if (Date.now() - this.lastInputTimeStemp >= 5000) { // is no control over 5 secounds
            this.changeStateTo('long-idle');
        }
    }

    checkForWalk() {
        if (this.getAddX() != 0) {
            this.changeStateTo('walk');
        }
    }

    checkForJump() {
        if (!this.isOnGround()) {
            this.changeStateTo('jump');
        }
    }

    checkForFalling() {
        if (!this.isOnGround() && this.getSpeedY() > 0) {
            this.changeStateTo('falling');
        }
    }

    checkForLanding() {
        if (this.isOnGround()) {
            this.changeStateTo('landing');
        }
    }


    changeStateTo(newState) {
        this.resetOldAnimation();
        this.state = newState;
    }

    moveToDirection(value) {
        if (value < 0) {
            this.isImgFlipped = true;
        } else if (value > 0) {
            this.isImgFlipped = false;
        }
        super.addX(value);
    }
}