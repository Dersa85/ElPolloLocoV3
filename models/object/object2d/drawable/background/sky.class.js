

class Sky extends Background {

    constructor(parent, width, height) {
        super(parent, width, height);
        this.loadImage('./img/5.Fondo/Capas/5.cielo_1920-1080px.png');
        this.paralaxValue = 1;
        this.width = 800;
        this.height = 480;
    }
}