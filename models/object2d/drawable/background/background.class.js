

class Background extends Drawable {

    paralaxValue = 0;

    constructor(parent, width, height) {
        super(parent, width, height);
    }

    getParalaxValue() {
        return this.paralaxValue;
    }

    paralaxMoving(value) {
        super.addX(value * this.getParalaxValue());
    }

    setStartPosition(value) {
        super.setX(value);
    }

    reposition(value) {
        super.addX(value);
    }

}