
/**
 * This is the background for hills
 * 
 * @extends Background
 */
class Hills extends Background {

    constructor(parent, width, height) {
        super(parent, width, height);
        this.loadImage('./img/5.Fondo/Capas/2.Fondo2/completo.png');
        this.paralaxValue = 0.3;
        this.width = 1600;
        this.height = 480;
    }
}