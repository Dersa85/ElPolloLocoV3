
/** The class is a container and handler for all bars in the game */

class StatusbarHandler extends GameObject {

    hpBar;
    bottleBar;
    coinBar;

    constructor(parent) {
        super(parent);
        this.hpBar = new HpBar(this);
        this.bottleBar = new BottleBar(this);
        this.coinBar = new CoinBar(this);
    }

    /**
     * Moving all status bars
     * 
     * @param {number} addedX - This add x position for all bars
     */
    addX(addedX) {
        this.hpBar.addX(addedX);
        this.bottleBar.addX(addedX);
        this.coinBar.addX(addedX);
    }

    /**
     * Draw all bars
     * 
     * @param {Camera} camera - This is the Camera class
     */
    draw(camera) {
        this.hpBar.draw(camera);
        this.bottleBar.draw(camera);
        this.coinBar.draw(camera);
    }

    /**
     * Change the bottle bar value
     * 
     * @param {number} value - This is the new value for the bottle bar
     */
    setBottles(value) {
        this.bottleBar.setValue(value);
    }

    /**
     * Change the coin bar value
     * 
     * @param {number} value - This is the new value for the coin bar
     */
    setCoins(value) {
        this.coinBar.setValue(value);
    }

    /**
     * Change the healt bar value
     * 
     * @param {number} value - This is the new value for the hp bar
     */
    setHp(value) {
        this.hpBar.setValue(value);
    }

    /**
     * Reset the positions of all bars
     */
    reset() {
        this.hpBar.x = 20;
        this.bottleBar.x = 20;
        this.coinBar.x = 20;
    }
}