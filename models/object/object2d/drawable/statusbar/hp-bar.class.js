
/**
 * This is the status bar for health points
 * 
 * @extends StatusBar
 */
class HpBar extends StatusBar {


    constructor(parent) {
        super(parent);
        this.x = 20;
        this.y = 10;
        this.images = this.getImagesArray([
            './img/7.Marcadores/Barra/Marcador vida/verde/0_.png',
            './img/7.Marcadores/Barra/Marcador vida/verde/20_.png',
            './img/7.Marcadores/Barra/Marcador vida/verde/40_.png',
            './img/7.Marcadores/Barra/Marcador vida/verde/60_.png',
            './img/7.Marcadores/Barra/Marcador vida/verde/80_.png',
            './img/7.Marcadores/Barra/Marcador vida/verde/100_.png'
        ])
        this.refreshValue();
    }
}