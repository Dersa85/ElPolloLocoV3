

class EnemyHandler extends Object {


    enemys = [];
    character;

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
        enemy.setX(posX);
        enemy.setY(posY);
        this.enemys.push(enemy);
    }

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
            if (this.enemys[i].canDelete || this.canDeleteWhenToFarAway(this.enemys[i])) {
                this.enemys.splice(i, 1);
            }
        }
    }

    canDeleteWhenToFarAway(enemy) {
        let distanceToCharacter = 5000;
        if (enemy.x < 0) {
            return true;
        }
        return this.character.getX() - enemy.x > distanceToCharacter;
    }
}