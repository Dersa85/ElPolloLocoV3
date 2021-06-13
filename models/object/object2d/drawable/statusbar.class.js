

/**
 * This is the main class for the main
 * 
 * @extends {Drawable}
 */

class StatusBar extends Drawable {

    /** The current value */
    value = 0;
    minValue = 0;
    maxValue = 5;

    /** All images for 1 bar, index of array and {value} is same */
    images = [];

    constructor(parent) {
        super(parent);
        this.width = 200;
        this.height = 50;
    }

    /**
     * Set the new value between minValue and maxValue
     * 
     * @param {number} v - This is the new value
     */
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

    /**
     * Change the image to the value
     */
    refreshValue() {
        let image = this.images[this.value];
        this.changeImage(image);
    }

    
}