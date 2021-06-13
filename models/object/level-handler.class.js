

/**
 * The class is a container and handler for character, all enemys and all collectable items
 * 
 * @extends GameObject
 */

class LevelHandler extends GameObject {

    character;
    enemyHandler;
    itemHandler;

    /** The primary value determines in which distance a boss comes */
    pixelPerPrimary = 10000;
    
    /** The secondary value determines in which distance new chickens come */
    pixelPerSecundary = 1000;

    /** This is the next factor for primary */
    nextPrimaryStage = 1;

    /** This is the next factor for secondary */
    nextSecundaryStage = 1;

    constructor(parent, character, enemyHandler, itemHandler) {
        super(parent);
        this.character = character;
        this.enemyHandler = enemyHandler;
        this.itemHandler = itemHandler;
    }

    /**
     * Controls the logical processing of this object
     * 
     * @param {number} delta - This is duration of the last frame
     */
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

    /** Create a new Chicken relative from character and counter relative to {this.nextPrimaryStage} */
    createChicken() {
        for (let i = 0; i < this.nextPrimaryStage; i++) {
            let x = this.character.getX() + 1000 + 100 * i
            let y = 400;
            this.enemyHandler.createChicken(x, y);
        }
    }

    /** Create boss chicken relativ from character */
    createBoss() {
        let x = this.character.getX() + 1000;
        let y = 185;
        this.enemyHandler.createBigChicken(x, y);
    }

    /** Create a bottle wenn the character throw it */
    createBottle() {
        for (let i = 0; i < this.nextPrimaryStage + 1; i++) {
            let x = this.character.getX() + 1000 + Math.random() * 500 + i * 200;
            this.itemHandler.createBottle(x);
        }
    }

    /** Create a coin in the world */
    createCoin() {
        let x = this.character.getX() + 1000;
            this.itemHandler.createCoin(x);
    }

    /** Reset the class */
    reset() {
        this.nextPrimaryStage = 1;
        this.nextSecundaryStage = 1;
    }
}