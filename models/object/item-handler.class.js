


class ItemHandler extends Object {

    items = [];

    constructor(parent) {
        super(parent);
    }

    process(delta) {
        for (let i = 0; i < this.items.length; i++) {
            this.items[i].process(delta);
        }
    }

    createCoint(posX) {
        let coin = new Coin(this);
        coin.setX(posX);
        coin.setY(100);
        this.items.push(coin);
    }

    draw(camera) {
        for (let i = 0; i < this.items.length; i++) {
            this.items[i].draw(camera);
        }
    }
}