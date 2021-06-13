
/**
 * This is the status bar for coins
 * 
 * @extends StatusBar
 */
class CoinBar extends StatusBar {


    constructor(parent) {
        super(parent);
        this.x = 20;
        this.y = 90;
        this.images = this.getImagesArray([
            './img/7.Marcadores/Barra/Marcador moneda/azul/0_.png',
            './img/7.Marcadores/Barra/Marcador moneda/azul/20_.png',
            './img/7.Marcadores/Barra/Marcador moneda/azul/40_.png',
            './img/7.Marcadores/Barra/Marcador moneda/azul/60_.png',
            './img/7.Marcadores/Barra/Marcador moneda/azul/80_.png',
            './img/7.Marcadores/Barra/Marcador moneda/azul/100_.png'
        ])
        this.refreshValue();
    }
}