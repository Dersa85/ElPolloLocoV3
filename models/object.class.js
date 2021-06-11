
/** This ist the main object from all gameobjects */

class GameObject {

    /**
     * The parent class of this class
     */
    parent;

    constructor(parent) {
        this.parent = parent;
    }

    /**
     * Controls the logical processing of this object
     * 
     * @param {number} delta - This is duration of the last frame
     */
    process(delta) {}
}