

class BottleHandler extends Object {


    bottles = [];
    soundVolume = 1;

    constructor(parent) {
        super(parent);
    }


    createNewBottle(posX, posY, throwLeft, addPower) {
        let bottle = new Bottle(this);
        bottle.SOUND_THROW.volume = this.soundVolume;
        bottle.SOUND_BROKEN.volume = this.soundVolume;
        bottle.setX(posX);
        bottle.setY(posY);
        bottle.speedX += addPower;
        if (throwLeft) {
            bottle.switchFlyDirection();
        }
        this.bottles.push(bottle);
    }

    process(delta) {
        for (let i = 0; i < this.bottles.length; i++) {
            this.bottles[i].process(delta);
        }
        this.checkBottleToDelete();
    }

    draw(camera) {
        for (let i = 0; i < this.bottles.length; i++) {
            this.bottles[i].draw(camera);
        }
    }

    checkBottleToDelete() {
        for (let i = this.bottles.length -1; i >= 0; i--) {
            if (this.bottles[i].canDelete) {
                this.bottles.splice(i, 1);
            }
        }
    }

    getBottles() {
        return this.bottles;
    }

    reset() {
        this.bottles = [];
    }

    setSoundVolume(value) {
        this.soundVolume = value;
        this.bottles.forEach(bottle => {
            bottle.SOUND_THROW.volume = value;
            bottle.SOUND_BROKEN.volume = value;
        });
    }
    
}