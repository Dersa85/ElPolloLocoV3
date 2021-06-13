
/**
 * This is the background for Mounts
 * 
 * @extends Background
 */
class Mountains extends Background {

    constructor(parent, width, height) {
        super(parent, width, height);
        this.loadImage('./img/5.Fondo/Capas/3.Fondo3/Completo.png');
        this.paralaxValue = 0.6;
        this.width = 1600;
        this.height = 480;
    }
}