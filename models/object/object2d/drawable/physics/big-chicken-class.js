


class BigChicken extends Physics {

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
            'switch-timer': 50,
            'time-left': 50,
            'paths': this.getImagesArray([
                './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G21.png',
                './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G22.png',
                './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G23.png'
            ])
        },
        'dead': {
            'infinity': false,
            'current-index': 0,
            'switch-timer': 50,
            'time-left': 50,
            'paths': this.getImagesArray([
                './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G24.png',
                './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G25.png',
                './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G26.png'
            ])
        }
    }

    state = 'walk';
    canDelete = false;
    attackDelay = 500;
    lastAttack = 0;
    character;

    constructor(parent, character) {
        super(parent);
        this.character = character;
        this.ground = 185;
        this.speedX = -0.2;
        this.width = 250;
        this.height = 250;
    }

    process(delta) {
        super.process(delta);
        if (this.state == 'walk') {
            super.addX(this.speedX * delta);
        }
        
        this.stateMaschine();
        this.playAnimation(delta);
    }

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
        }
    }

    checkIfDead() {

    }

    checkNobodyInNear() {
        if (this.x - this.character.x > 500) {
            this.changeStateTo('walk');
        }
    }

    checkPlayerInRange() {
        if (this.x - this.character.x < 350) {
            this.changeStateTo('alert');
        }
    }

    checkCanAttack() {
        let state = this.state;
        let arrayLength = this.animations[state]['paths'].length;
        if (this.animations[state]['current-index'] != arrayLength - 1) {
            return
        }
        this.changeStateTo('attack');
    }

    changeStateTo(newState) {
        this.resetOldAnimation();
        this.state = newState;
    }

    resetOldAnimation() {
        this.animations[this.state]['finished'] = false;
        this.animations[this.state]['current-index'] = 0;
        this.animations[this.state]['time-left'] = this.animations[this.state]['switch-timer'];
    }

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
}
