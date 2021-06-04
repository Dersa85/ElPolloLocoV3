



class StatusBar extends Drawable {


    value = 0;
    minValue = 0;
    maxValue = 5;

    images = [];

    constructor(parent) {
        super(parent);
        this.width = 200;
        this.height = 50;
    }

    setValue(v) {
        if (v > 5) {
            this.value = 5;
        } else if (v < 0) {
            this.value = 0;
        } else {
            this.value = v;
        }
        this.refreshValue();
    }

    refreshValue() {
        let image = this.images[this.value];
        this.changeImage(image);
    }

    
}