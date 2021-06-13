
/**
 * This class is a container and handler for all enemys
 * 
 * @extends GameObject
 */

class EnemyHandler extends GameObject {

    enemys = [];
    character;
    /** Sound volume for all enemy sounds */
    soundVolume = 1;

    constructor(parent, character) {
        super(parent);
        this.character = character;
    }

    /**
     * Create a chicken on position x and y;
     * 
     * @param {number} posX - This is the x position 
     * @param {number} posY - This is the y position 
     */
    createChicken(posX, posY) {
        let enemy = new Chicken(this);
        enemy.setX(posX);
        enemy.setY(posY);
        this.enemys.push(enemy);
    }

    /**
     * Create a small-chicken on position x and y;
     * 
     * @param {number} posX - This is the x position 
     * @param {number} posY - This is the y position 
     */
    createSmallChicken(posX, posY) {
        let enemy = new SmallChicken(this);
        enemy.setX(posX);
        enemy.setY(posY);
        this.enemys.push(enemy);
    }

    /**
     * Create a big-chicken on position x and y;
     * 
     * @param {number} posX - This is the x position 
     * @param {number} posY - This is the y position 
     */
    createBigChicken(posX, posY) {
        let enemy = new BigChicken(this, this.character);
        enemy.setSoundVolume(this.soundVolume);
        enemy.setX(posX);
        enemy.setY(posY);
        this.enemys.push(enemy);
    }

    /**
     * Controls the logical processing of this object
     * 
     * @param {number} delta - This is duration of the last frame
     */
    process(delta) {
        for (let i = 0; i < this.enemys.length; i++) {
            this.enemys[i].process(delta);
        }
        this.checkEnemyToDelete();
    }

    /**
     * Give all enemys the draw command
     * 
     * @param {Camera} camera - This is the camera object which is responsible for the drawing
     */
    draw(camera) {
        for (let i = 0; i < this.enemys.length; i++) {
            this.enemys[i].draw(camera);
        }
    }

    /**
     * Check all enemys and delete it if is to far or has dead tag
     */
    checkEnemyToDelete() {
        for (let i = this.enemys.length -1; i >= 0; i--) {
            if (this.isDead(this.enemys[i]) || this.canDeleteWhenToFarAway(this.enemys[i])) {
                this.enemys.splice(i, 1);
            }
        }
    }

    /**
     * Check the enemy if is longer death as 1 secound
     * 
     * @param {*} enemy - This is the opponent to be controlled
     * @returns {boolean}
     */
    isDead(enemy) {
        if (!enemy.timeOfDeath) {
            return false;
        }
        if (enemy.timeOfDeath + 1000 > Date.now()) {
            return false;
        }
        return true;
    }

    /**
     * Check the enemy if is to far away from charackter
     * 
     * @param {*} enemy - This is the opponent to be controlled
     * @returns {boolean}
     */
    canDeleteWhenToFarAway(enemy) {
        let distanceToCharacter = 5000;
        if (enemy.x < 0) {
            return true;
        }
        return this.character.getX() - enemy.x > distanceToCharacter;
    }

    /**
     * check collision between charackter and enemys
     */
    checkCollisionWithCharacter() {
        for (let i = 0; i < this.enemys.length; i++) {
            let enemy = this.enemys[i];
            if (enemy.hp <= 0) {
                continue;
            }
            if (enemy.isCollideWith(this.character)) {
                if (this.character.hp <= 0) {
                    break;
                }
                this.character.damage(1);
            }
        }
    }

    /**
     * check collision between thrown bottles and enemys
     */
    checkCollisionWithBottles(bottles) {
        for (let j = 0; j < bottles.length; j++) {
            let bottle = bottles[j];
            if (bottle.isBroken()) {
                continue;
            }
            for (let i = 0; i < this.enemys.length; i++) {
                let enemy = this.enemys[i];
                if (enemy.hp <= 0) {
                    continue;
                }
                if (enemy.isCollideWith(bottle)) {
                    bottle.switshToStateBroken();
                    enemy.damage(1);
                }
            }
        }
    }

    /** Delete all enemys */
    reset() {
        this.enemys = [];
    }
    
    /**
     * Change the value of all sound from enemys
     * 
     * @param {*} value - This is the new sound value
     */
    setSoundVolume(value) {
        this.soundVolume = value;
        this.enemys.forEach(enemy => {
            enemy.setSoundVolume(value);
        });
    }
}