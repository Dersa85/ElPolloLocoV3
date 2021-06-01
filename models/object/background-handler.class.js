

class BackgroundHandler extends Object {

    character;
    skys = [];
    clouds = [];
    mountains = [];
    hills = [];
    grounds = [];

    constructor(parent, character) {
        super(parent);
        this.character = character;
        this.addSky();
        this.addMovablebackgroundInArray(this.clouds, Cloud);
        this.addMovablebackgroundInArray(this.mountains, Mountains);
        this.addMovablebackgroundInArray(this.hills, Hills);
        this.addMovablebackgroundInArray(this.grounds, Ground);
    }

    addSky() {
        this.skys.push(new Sky(this,800, 480));
    }

    addMovablebackgroundInArray(array, object) {
        for (let i = -1; i < 2; i++) {
            let width = 1600;
            let height = 480;
            let instance = new object(this, width, height);
            instance.setStartPosition(width * i);
            array.push(instance);
        }
    }

    draw(camera) {
        this.drawBGArray(camera, this.skys);
        this.drawBGArray(camera, this.clouds);
        this.drawBGArray(camera, this.mountains);
        this.drawBGArray(camera, this.hills);
        this.drawBGArray(camera, this.grounds);
    }

    process(delta) {
        this.moveRelativToCharacter(this.skys);
        this.moveRelativToCharacter(this.clouds);
        this.moveRelativToCharacter(this.mountains);
        this.moveRelativToCharacter(this.hills);
        this.moveRelativToCharacter(this.grounds);
        

    }

    moveRelativToCharacter(array) {
        for (let i = 0; i < array.length; i++) {
            let movingX = this.character.getAddX();
            array[i].paralaxMoving(movingX);
            this.checkForReposition(array[i]);
        }
    }

    drawBGArray(camera, array) {
        for (let i = 0; i < array.length; i++) {
            array[i].draw(camera);
        }
    }

    checkForReposition(object) {
        let width = object.getWidth();
        let difference =  object.getX() - this.character.getX();
        if (difference < -width*1.5) {
            object.reposition(width*2);
        } else if (difference > width*0.5) {
            object.reposition(-width*2);
        }
    }

    
}