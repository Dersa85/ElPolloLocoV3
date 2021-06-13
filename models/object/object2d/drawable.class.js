
/**
 * The basic class for drawing objects on canvas
 * 
 * @extends Object2D
 */

class Drawable extends Object2D {

    img = new Image();
    width = 0;
    height = 0;
    offsetX = 0;
    offsetY = 0;

    isImgFlipped = false;

    constructor(parent) {
        super(parent);
        
    }

    /**
     * Change the image object which should be drawn
     * 
     * @param {Image} newImage - This is a image object
     */
    changeImage(newImage) {
        this.img = newImage;
    }

    /**
     * Function for drawing the object
     * 
     * @param {Camera} camera - This is the camera object which is responsible for the drawing
     */
    draw(camera) {
        if (this.isImgFlipped) {
            this.flipImg(camera);
        }
        camera.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        camera.drawCollisionCircle(this);

        if (this.isImgFlipped) {
            this.flipImgBack(camera);
        }
    }

    /**
     * Turns the drawing around. After drawing flipImgBack() must be used 
     * 
     * @param {Camera} camera - This is the camera object which is responsible for the drawing
     */
    flipImg(camera) {
        camera.ctx.save();
        camera.ctx.translate(this.width, 0);
        camera.ctx.scale(-1, 1);
        this.x *= -1;
    }

    /**
     * Turns the drawing back
     * 
     * @param {Camera} camera - This is the camera object which is responsible for the drawing
     */
    flipImgBack(camera) {
        this.x *= -1;
        camera.ctx.restore();
    }

    /**
     * Create a image from path for drawing
     * 
     * @param {string} path - This is the path from die image
     */
    loadImage(path) {
        let img = new Image()
        img.src = path;
        this.img = img;
    }
    
    /**
     * Create image object and push in array from path array
     * 
     * @param {string} paths - This is the path array from die images
     * @returns {Array}
     */
    getImagesArray(paths) {
        let imagesArray = []
        paths.forEach(path => {
            let img = new Image();
            img.src = path;
            imagesArray.push(img);
        });
        return imagesArray;
    }

    /** Get the width from itself */
    getWidth() {
        return this.width;
    }

    /** Get the height from itself */
    getHeight() {
        return this.height;
    }

    /** Get center world x position from itself */
    getCenterX() {
        return this.getX() + this.getWidth() * 0.5 + this.offsetX;
    }

    /** Get center world y position from itself */
    getCenterY() {
        return this.getY() + this.getHeight() * 0.5 + this.offsetY;
    }

}