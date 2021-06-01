

class BottleHandler extends Object {


    bottles = [];

    constructor(parent) {
        super(parent);
    }


    createNewBottle(posX, posY, throwLeft) {
        let bottle = new Bottle(this, 50, 50);
        bottle.setX(posX);
        bottle.setY(posY);
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

}