


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
        },
        'hurt': {
            'infinity': true,
            'current-index': 0,
            'switch-timer': 50,
            'time-left': 50,
            'paths': this.getImagesArray([
                './img/2.Secuencias_Personaje-Pepe-correccion/4.Herido/H-41.png',
                './img/2.Secuencias_Personaje-Pepe-correccion/4.Herido/H-42.png',
                './img/2.Secuencias_Personaje-Pepe-correccion/4.Herido/H-43.png',
                './img/2.Secuencias_Personaje-Pepe-correccion/4.Herido/H-42.png',
                './img/2.Secuencias_Personaje-Pepe-correccion/4.Herido/H-41.png'
            ])
        },
        'dead': {
            'infinity': false,
            'current-index': 0,
            'switch-timer': 70,
            'time-left': 70,
            'paths': this.getImagesArray([
                './img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-51.png',
                './img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-52.png',
                './img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-53.png',
                './img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-54.png',
                './img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-55.png',
                './img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-56.png',
                './img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-57.png'
            ])
        }
    }

    movemetSpeedUpgrade = 0;
    jumpPowerUpgrade = 0;
    throwPowerUpgrade = 0;
    
    jumpPower = -0.6;
    
    showEndScreenTimer = 2000;
    invincibleTimer = 0;
    lastInputTimeStemp;
    state = 'idle';
    
    keyboard;
    
    bottleHandler;
    statusBarHandler;
    
    bottles = 0;
    coins = 0;
    throwCD = 500;
    lastThrow = 0;
    hp = 5;

    alphaWallPosX = -2000;
    SOUND_WALK = new Audio('./sound/foots.mp3');
    SOUND_JUMP = new Audio('./sound/jump.mp3');
    SOUND_HURT = new Audio('./sound/hurt.mp3');
    SOUND_DEAD = new Audio('./sound/dead.mp3');
    
    constructor(parent, keyboard, bottleHandler, statusBarHandler) {
        super(parent);
        this.keyboard = keyboard;
        this.bottleHandler = bottleHandler;
        this.statusBarHandler = statusBarHandler;
        this.y = 180;
        this.x = 150;
        this.speedX = 0.4;
        this.ground = 180;
        this.width = 150;
        this.height = 250;
        this.offsetY = 50;
        this.offsetX = -5;
        this.collisionDiameter = 50;
        this.lastInputTimeStemp = Date.now();
    }

    process(delta) {
        super.process(delta);
        if (!this.keyboard.isNothingPressed()) {
            this.lastInputTimeStemp = Date.now();
        }

        if (this.state != 'dead') {
            this.invincibleTimer -= delta;
            this.checkThrow();
    
            let totalSpeed = this.speedX + this.movemetSpeedUpgrade * 0.1;
            let moveXdirection = this.pressedForMovingHorizontal();
            this.moveToDirection(moveXdirection * totalSpeed * delta);
            this.checkPressedJump();
        } else {
            this.showEndScreenTimer -= delta;
        }

        
        this.playSound();
        this.stateMaschine();
        
        this.playAnimation(delta);
    }

    playSound() {
        if (this.isOnGround() && this.getAddX() != 0) {
            this.SOUND_WALK.play();
        } else if (!this.isOnGround() && this.state != 'jump' && this.state != 'falling') {
            this.SOUND_WALK.pause();
            this.SOUND_JUMP.play();
        }
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
            this.setSpeedY(this.jumpPower - (this.jumpPowerUpgrade * 0.09));
        }
    }

    checkThrow() {
        if(this.keyboard.isPressedFire() && Date.now() - this.lastThrow > this.throwCD) {
            this.throwBottle()
            this.lastThrow = Date.now();
        }
    }

    //##### CHECK STATE #####//

    stateMaschine() {
        if (this.state == 'hurt') {
            this.checkForIdle();
            this.checkForWalk();
            this.checkForJump();
        } else if (this.state == 'idle') {
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
        } else if (this.state == 'dead') {
            this.checkShowEndScreen();
        }

    }

    checkForIdle() {
        if (this.invincibleTimer > 0) {
            return;
        }
        if (!this.keyboard.isMovingPressed()) {
            this.changeStateTo('idle');
        }
    }

    checkForLongIdle() {
        if (Date.now() - this.lastInputTimeStemp >= 5000) { // is no control over 5 secounds
            this.changeStateTo('long-idle');
        }
    }

    checkForWalk() {
        if (this.invincibleTimer > 0) {
            return;
        }
        if (this.getAddX() != 0) {
            this.changeStateTo('walk');
        }
    }

    checkForJump() {
        if (this.invincibleTimer > 0) {
            return;
        }
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

    checkShowEndScreen() {
        if (this.showEndScreenTimer <= 0) {
            this.parent.showEndScreen();
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
        if (value > 0) {
            super.addX(value);
        } else if (this.alphaWallPosX > this.getX()) {
            super.addX(0);
        } else {
            super.addX(value);
        }
        if (this.getX() - this.alphaWallPosX > 2000) {
            this.alphaWallPosX = this.getX() - 2000;
        }
        
    }

    throwBottle() {
        if (this.bottles == 0) {
            return;
        }
        let fromX = this.getX() + 50;
        let fromY = this.getY() + 150;
        let addPower = this.throwPowerUpgrade * 0.2
        this.bottleHandler.createNewBottle(fromX, fromY, this.isImgFlipped, addPower)
        this.bottles--;
        this.statusBarHandler.setBottles(this.bottles);
    }

    addBottle() {
        this.bottles++;
        if (this.bottles > 5) {
            this.bottles = 5
        }
        this.statusBarHandler.setBottles(this.bottles);
    }

    addCoin() {
        this.coins++;
        if (this.coins > 5) {
            this.coins = 5
        }
        this.statusBarHandler.setCoins(this.coins);
    }

    removeCoin(value) {
        this.coins -= value;
        this.statusBarHandler.setCoins(this.coins);
    }

    reset() {
        this.movemetSpeedUpgrade = 0;
        this.jumpPowerUpgrade = 0;
        this.throwPowerUpgrade = 0;
        this.state = 'idle';
        this.lastInputTimeStemp;
        this.bottles = 0;
        this.coins = 0;
        this.hp = 5;
        this.alphaWallPosX = -2000;
        this.setX(150);
        this.lastInputTimeStemp = Date.now();
        this.statusBarHandler.setHp(this.hp);
        this.showEndScreenTimer = 2000;
        this.statusBarHandler.setBottles(this.bottles);
        this.statusBarHandler.setCoins(this.coins);
    }

    damage(value) {
        if (this.invincibleTimer > 0) {
            return;
        }
        this.invincibleTimer = 500;
        this.hp -= value;
        if (this.hp < 0) {
            this.hp = 0;
        }
        this.statusBarHandler.setHp(this.hp);

        if (this.hp > 0) {
            this.changeStateTo('hurt');
            this.SOUND_HURT.play();
        } else {
            this.changeStateTo('dead');
            this.SOUND_DEAD.play();
            super.addX(0);
        }
    }
}