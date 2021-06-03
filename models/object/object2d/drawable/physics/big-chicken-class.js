


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
            'switch-timer': 100,
            'time-left': 100,
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
        'alert': {
            'infinity': false,
            'current-index': 0,
            'switch-timer': 80,
            'time-left': 80,
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
            'infinity': false,
            'current-index': 0,
            'switch-timer': 80,
            'time-left': 80,
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
        }
    }

    checkIfDead() {

    }

}