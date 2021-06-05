


class SmallChicken extends Physics {

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

    state = 'walk';
    timeOfDeath;
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

    process(delta) {
        super.process(delta);
        super.addX(this.speedX * delta);
        this.playAnimation(delta);
    }

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

    stateMaschine() {
        if (this.state == 'walk') {
            this.checkIfDead();
        }
    }

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