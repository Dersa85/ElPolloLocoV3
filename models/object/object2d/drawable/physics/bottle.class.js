


class Bottle extends Physics {

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
        }
    }

    state = 'fly';

    constructor(parent, width, height) {
        super(parent, width, height);
        this.ground = 392;
        this.speedX = 0.9;
        this.speedY = -0.3;
    }

    process(delta) {
        super.process(delta);
        super.addX(this.speedX * delta);
        
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

}