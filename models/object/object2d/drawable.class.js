

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

    changeImage(newImage) {
        this.img = newImage;
    }

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

    flipImg(camera) {
        camera.ctx.save();
        camera.ctx.translate(this.width, 0);
        camera.ctx.scale(-1, 1);
        this.x *= -1;
    }

    flipImgBack(camera) {
        this.x *= -1;
        camera.ctx.restore();
    }

    loadImage(path) {
        let img = new Image()
        img.src = path;
        this.img = img;
    }
    

    getImagesArray(paths) {
        let imagesArray = []
        paths.forEach(path => {
            let img = new Image();
            img.src = path;
            imagesArray.push(img);
        });
        return imagesArray;
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }

    getCenterX() {
        return this.getX() + this.getWidth() * 0.5 + this.offsetX;
    }
    getCenterY() {
        return this.getY() + this.getHeight() * 0.5 + this.offsetY;
    }

}