
/**
 * This is the status bar for bottle counter
 * 
 * @extends StatusBar
 */
class BottleBar extends StatusBar {


    constructor(parent) {
        super(parent);
        this.x = 20;
        this.y = 50;
        this.images = this.getImagesArray([
            './img/7.Marcadores/Barra/Marcador_botella/Naranja/0_.png',
            './img/7.Marcadores/Barra/Marcador_botella/Naranja/20_.png',
            './img/7.Marcadores/Barra/Marcador_botella/Naranja/40_.png',
            './img/7.Marcadores/Barra/Marcador_botella/Naranja/60_.png',
            './img/7.Marcadores/Barra/Marcador_botella/Naranja/80_.png',
            './img/7.Marcadores/Barra/Marcador_botella/Naranja/100_.png'
        ])
        this.refreshValue();
    }
}