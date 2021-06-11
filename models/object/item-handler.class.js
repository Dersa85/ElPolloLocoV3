
/** This class is a container and handler for collectable items such as bottles and coins */

class ItemHandler extends GameObject {

    /** all items in game */
    items = [];
    soundVolume = 1;

    constructor(parent) {
        super(parent);
    }

    /**
     * Controls the logical processing of this object
     * 
     * @param {number} delta - This is duration of the last frame
     */
    process(delta) {
        for (let i = 0; i < this.items.length; i++) {
            this.items[i].process(delta);
        }
    }

    /**
     * Create a new coin
     * 
     * @param {number} posX - This is the x position for the new Coin
     */
    createCoin(posX) {
        let coin = new CoinItem(this);
        coin.setX(posX);
        coin.setY(200);
        this.items.push(coin);
    }

    /**
     * Create a new bottle
     * 
     * @param {number} posX - This is the x position for the new Bottle
     */
    createBottle(posX) {
        let coin = new BottleItem(this);
        coin.setX(posX);
        coin.setY(300);
        this.items.push(coin);
    }

    /** Draw all items */
    draw(camera) {
        for (let i = 0; i < this.items.length; i++) {
            this.items[i].draw(camera);
        }
    }

    /**
     * Check items collision with character
     * 
     * @param {Character} character - This is the Character
     */
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

    /** Reset the values */
    reset() {
        this.items = [];
        this.createCoin(500);
    }

    /** Change the sound volume */
    setSoundVolume(value) {
        this.soundVolume = value;
    }
}