


class Coin extends Physics {

    animations = {
        'idle': {
            'infinity': true,
            'current-index': 0,
            'switch-timer': 100,
            'time-left': 100,
            'paths': this.getImagesArray([
                './img/8.Coin/Moneda2.png'
            ])
        },
    }

    state = 'idle';
    canDelete = false;

    constructor(parent) {
        super(parent);
        this.width = 150;
        this.height = 150;
        this.gravityPower = 0;
        
    }

    process(delta) {
        super.process(delta);
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