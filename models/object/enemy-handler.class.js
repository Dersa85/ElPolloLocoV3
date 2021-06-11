

class EnemyHandler extends GameObject {


    enemys = [];
    character;
    soundVolume = 1;

    constructor(parent, character) {
        super(parent);
        this.character = character;
    }

    createChicken(posX, posY) {
        let enemy = new Chicken(this);
        enemy.setX(posX);
        enemy.setY(posY);
        this.enemys.push(enemy);
    }
    createSmallChicken(posX, posY) {
        let enemy = new SmallChicken(this);
        enemy.setX(posX);
        enemy.setY(posY);
        this.enemys.push(enemy);
    }
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

    draw(camera) {
        for (let i = 0; i < this.enemys.length; i++) {
            this.enemys[i].draw(camera);
        }
    }

    checkEnemyToDelete() {
        for (let i = this.enemys.length -1; i >= 0; i--) {
            if (this.isDead(this.enemys[i]) || this.canDeleteWhenToFarAway(this.enemys[i])) {
                this.enemys.splice(i, 1);
            }
        }
    }

    isDead(enemy) {
        if (!enemy.timeOfDeath) {
            return false;
        }
        if (enemy.timeOfDeath + 1000 > Date.now()) {
            return false;
        }
        return true;
    }

    canDeleteWhenToFarAway(enemy) {
        let distanceToCharacter = 5000;
        if (enemy.x < 0) {
            return true;
        }
        return this.character.getX() - enemy.x > distanceToCharacter;
    }

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

    reset() {
        this.enemys = [];
    }
        
    setSoundVolume(value) {
        this.soundVolume = value;
        this.enemys.forEach(enemy => {
            enemy.setSoundVolume(value);
        });
    }
}