

class Drawable extends Object2D {

    img = new Image();
    width = 0;
    height = 0;

    constructor(parent, width, height) {
        super(parent);
        this.width = width;
        this.height = height;
    }

    changeImage(newImage) {
        this.img = newImage;
    }

    draw(camera) {
        camera.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
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

}