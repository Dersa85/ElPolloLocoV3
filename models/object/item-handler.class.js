


class ItemHandler extends GameObject {

    items = [];
    soundVolume = 1;

    constructor(parent) {
        super(parent);
    }

    process(delta) {
        for (let i = 0; i < this.items.length; i++) {
            this.items[i].process(delta);
        }
    }

    createCoin(posX) {
        let coin = new CoinItem(this);
        coin.setX(posX);
        coin.setY(200);
        this.items.push(coin);
    }

    createBottle(posX) {
        let coin = new BottleItem(this);
        coin.setX(posX);
        coin.setY(300);
        this.items.push(coin);
    }

    draw(camera) {
        for (let i = 0; i < this.items.length; i++) {
            this.items[i].draw(camera);
        }
    }

    checkCollisionWithCharacter(character) {
        for (let i = this.items.length - 1; i >= 0; i--) {
            let item = this.items[i];
            if (item.isCollideWith(character)) {
                if (item instanceof CoinItem) {
                    character.addCoin();
                } else if (item instanceof BottleItem) {
                    character.addBottle();
                }
                item.SOUND_COLLECT.volume = this.soundVolume;
                item.SOUND_COLLECT.play();
                this.items.splice(i, 1);
            }
        }
    }

    reset() {
        this.items = [];
        this.createCoin(500);
    }

    setSoundVolume(value) {
        this.soundVolume = value;
    }
}