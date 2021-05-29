

class BackgroundHandler extends Object2D {

    camera;
    level_0 = [];
    level_1 = [];
    level_2 = [];
    level_3 = [];
    level_4 = [];

    constructor(parent) {
        super(parent);
        this.level_0.push(new Sky(this,800, 480));
        this.level_1.push(new Cloud(this,1600, 480));
        this.level_2.push(new Mountains(this,1600, 480));
        this.level_3.push(new Hills(this,1600, 480));
        this.level_4.push(new Ground(this,1600, 480));
    }

    draw(camera) {
        for (let i = 0; i < this.level_0.length; i++) {
            this.level_0[i].draw(camera);
        }
        for (let i = 0; i < this.level_1.length; i++) {
            this.level_1[i].draw(camera);
        }
        for (let i = 0; i < this.level_2.length; i++) {
            this.level_2[i].draw(camera);
        }
        for (let i = 0; i < this.level_3.length; i++) {
            this.level_3[i].draw(camera);
        }
        for (let i = 0; i < this.level_4.length; i++) {
            this.level_4[i].draw(camera);
        }
    }
}