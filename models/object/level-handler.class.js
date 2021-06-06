


class LevelHandler extends GameObject {

    character;
    enemyHandler;
    itemHandler;

    pixelPerPrimary = 10000;
    pixelPerSecundary = 1000;

    nextPrimaryStage = 1;
    nextSecundaryStage = 1;

    constructor(parent, character, enemyHandler, itemHandler) {
        super(parent);
        this.character = character;
        this.enemyHandler = enemyHandler;
        this.itemHandler = itemHandler;
    }

    process(delta) {
        if (this.pixelPerSecundary * this.nextSecundaryStage < this.character.getX()) {
            if (this.pixelPerPrimary * this.nextPrimaryStage < this.character.getX()) {
                console.log('PRIMARY');
                this.createBoss();
                this.createCoin();
                this.nextPrimaryStage++;
            } else {
                console.log('SECUNDARY');
                this.createChicken();
                this.createBottle();
            }
            this.nextSecundaryStage++;
        }
    }

    createChicken() {
        for (let i = 0; i < this.nextPrimaryStage; i++) {
            let x = this.character.getX() + 1000 + 100 * i
            let y = 400;
            this.enemyHandler.createChicken(x, y);
        }
    }

    createBoss() {
        let x = this.character.getX() + 1000;
        let y = 185;
        this.enemyHandler.createBigChicken(x, y);
    }

    createBottle() {
        for (let i = 0; i < this.nextPrimaryStage + 1; i++) {
            let x = this.character.getX() + 1000 + Math.random() * 500 + i * 200;
            this.itemHandler.createBottle(x);
        }
    }

    createCoin() {
        let x = this.character.getX() + 1000;
            this.itemHandler.createCoin(x);
    }

    reset() {
        this.nextPrimaryStage = 1;
        this.nextSecundaryStage = 1;
    }
}