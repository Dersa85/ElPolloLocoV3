


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

    addX(addedX) {
        this.hpBar.addX(addedX);
        this.bottleBar.addX(addedX);
        this.coinBar.addX(addedX);
    }

    draw(camera) {
        this.hpBar.draw(camera);
        this.bottleBar.draw(camera);
        this.coinBar.draw(camera);
    }

    setBottles(value) {
        this.bottleBar.setValue(value);
    }

    setCoins(value) {
        this.coinBar.setValue(value);
    }

    setHp(value) {
        this.hpBar.setValue(value);
    }

    reset() {
        this.hpBar.x = 20;
        this.bottleBar.x = 20;
        this.coinBar.x = 20;
    }
}