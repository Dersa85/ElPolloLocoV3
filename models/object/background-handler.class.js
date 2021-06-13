
/**
 * This class is a container and handler for all backgrounds
 * 
 * @extends GameObject
 */

class BackgroundHandler extends GameObject {

    character;
    skys = [];
    clouds = [];
    mountains = [];
    hills = [];
    grounds = [];

    constructor(parent, character) {
        super(parent);
        this.character = character;
        this.createNewBackgrounds();
    }

    /**
     * Create all background
     */
    createNewBackgrounds() {
        this.addSky();
        this.addMovablebackgroundInArray(this.clouds, Cloud);
        this.addMovablebackgroundInArray(this.mountains, Mountains);
        this.addMovablebackgroundInArray(this.hills, Hills);
        this.addMovablebackgroundInArray(this.grounds, Ground);
    }

    /**
     * Create 1 sky and push in array
     */
    addSky() {
        this.skys.push(new Sky(this));
    }

    /**
     * Create 3 times the object and position it arround the character
     * 
     * @param {Array} array - The objects are inserted into this array
     * @param {Background} object - The object to create 3 times
     */
    addMovablebackgroundInArray(array, object) {
        for (let i = -1; i < 2; i++) {
            let width = 1600;
            let height = 480;
            let instance = new object(this, width, height);
            instance.setStartPosition(width * i);
            array.push(instance);
        }
    }

    /**
     * Draw all backgrounds objects
     * 
     * @param {Camera} camera - This is the camera object which is responsible for the drawing
     */
    draw(camera) {
        this.drawBGArray(camera, this.skys);
        this.drawBGArray(camera, this.clouds);
        this.drawBGArray(camera, this.mountains);
        this.drawBGArray(camera, this.hills);
        this.drawBGArray(camera, this.grounds);
    }

    /**
     * Controls the logical processing of this object
     * 
     * @param {number} delta - This is duration of the last frame
     */
    process(delta) {
        this.moveRelativToCharacter(this.skys);
        this.moveRelativToCharacter(this.clouds);
        this.moveRelativToCharacter(this.mountains);
        this.moveRelativToCharacter(this.hills);
        this.moveRelativToCharacter(this.grounds);
        

    }

    /**
     * Moving all objects in array with modified speed for a paralax effect
     * 
     * @param {Array} array - This is the array wit background objects
     */
    moveRelativToCharacter(array) {
        for (let i = 0; i < array.length; i++) {
            let movingX = this.character.getAddX();
            array[i].paralaxMoving(movingX);
            this.checkForReposition(array[i]);
        }
    }

    /**
     * Draw all objects in the array
     * 
     * @param {Camera} camera - This is the camera object which is responsible for the drawing
     * @param {Array} array - This is an array with objects which should be drawn
     */
    drawBGArray(camera, array) {
        for (let i = 0; i < array.length; i++) {
            array[i].draw(camera);
        }
    }

    /**
     * If background object to far away then reposition it. 
     * 
     * @param {Background} object - This is a background to check reposition
     */
    checkForReposition(object) {
        let width = object.getWidth();
        let difference =  object.getX() - this.character.getX();
        if (difference < -width*1.5) {
            object.reposition(width*2);
        } else if (difference > width*0.5) {
            object.reposition(-width*2);
        }
    }

    /** Reset all array */
    reset() {
        this.skys = [];
        this.clouds = [];
        this.mountains = [];
        this.hills = [];
        this.grounds = [];
        this.createNewBackgrounds();
    }
}