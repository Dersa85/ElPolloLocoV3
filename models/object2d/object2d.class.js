

class Object2D extends Object {

    x = 0;
    y = 0;

    lastAddX = 0;
    lastAddY = 0;

    constructor(parent) {
        super(parent);
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    addX(value) {
        this.x += value;
        this.lastAddX = value;
    }

    addY(value) {
        this.y += value;
        this.lastAddY = value;
    }

    setX(value) {
        this.addX = value - this.x;
        this.x = value;
    }
    
    setY(value) {
        this.addY = value - this.y;
        this.y = value;
    }

    getAddX() {
        return this.lastAddX;
    }
    
    getAddY() {
        return this.lastAddY;
    }

}