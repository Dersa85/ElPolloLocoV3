


class LevelHandler extends Object {

    character;
    enemyHandler;

    pixelPerPrimary = 10000;
    pixelPerSecundary = 1000;

    nextPrimaryStage = 1;
    nextSecundaryStage = 1;

    constructor(parent, character, enemyHandler) {
        super(parent);
        this.character = character;
        this.enemyHandler = enemyHandler;
    }

    process(delta) {
        if (this.pixelPerSecundary * this.nextSecundaryStage < this.character.getX()) {
            if (this.pixelPerPrimary * this.nextPrimaryStage < this.character.getX()) {
                console.log('PRIMARY');
                this.createBoss();
                this.nextPrimaryStage++;
            } else {
                console.log('SECUNDARY');
                this.createChicken();
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
        let x = this.character.getX() + 1000
        let y = 185;
        this.enemyHandler.createBigChicken(x, y);
    }
}