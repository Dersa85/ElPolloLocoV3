

class BottleHandler extends Object {


    bottles = [];

    constructor(parent) {
        super(parent);
    }


    createNewBottle(posX, posY) {
        let bottle = new Bottle(this, 50, 50);
        bottle.setX(posX);
        bottle.setY(posY);
        this.bottles.push(bottle);
    }

    process(delta) {
        for (let i = 0; i < this.bottles.length; i++) {
            this.bottles[i].process(delta);
        }
    }

    draw(camera) {
        for (let i = 0; i < this.bottles.length; i++) {
            this.bottles[i].draw(camera);
        }
    }

}