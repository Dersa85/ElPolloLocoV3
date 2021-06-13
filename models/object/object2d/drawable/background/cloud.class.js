
/**
 * This is the background for clouds
 * 
 * @extends Background
 */
class Cloud extends Background {

    constructor(parent, width, height) {
        super(parent, width, height);
        this.loadImage('./img/5.Fondo/Capas/4.nubes/Completo.png');
        this.paralaxValue = 0.9;
        this.width = 1600;
        this.height = 480;
    }
}