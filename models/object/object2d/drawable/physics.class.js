

class Physics extends Drawable {

    speedX = 0;
    speedY = 0;
    

    ground = 0;
    gravityPower = 0.0012;
    
    collisionDiameter = 30;

    constructor(parent, width, height) {
        super(parent, width, height);
    }

    process(delta) {
        this.gravity(delta);
    }

    gravity(delta) {
        this.addSpeedY(this.gravityPower * delta);
        
        let differenceToGround = this.getGround() - this.getY();
        if (differenceToGround < 0 && this.getSpeedY() > 0) {
            if (this.getSpeedY() - differenceToGround > 0) {
                this.setSpeedY(0);
                this.setY(this.getGround())
            }
        }

        super.addY(this.getSpeedY() * delta);

    }

    getGround() {
        return this.ground;
    }

    getSpeedY() {
        return this.speedY;
    }

    setSpeedY(value) {
        this.speedY = value;
    }

    addSpeedY(value) {
        this.speedY += value
    }

    isOnGround() {
        return this.getY() >= this.getGround();
    }

    isCollideWith(object) {
        let distanceX = this.getCenterX() - object.getCenterX();
        let distanceY = this.getCenterY() - object.getCenterY();
        let distanceXPow2 = Math.pow(distanceX, 2);
        let distanceYPow2 = Math.pow(distanceY, 2);
        let directDistance = Math.sqrt(distanceXPow2 + distanceYPow2);
        let neddedDistanceToCollige = this.collisionDiameter + object.collisionDiameter;
        if (directDistance <= neddedDistanceToCollige) {
            return true;
        }
        return false;

    } 
}