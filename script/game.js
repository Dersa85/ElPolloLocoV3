
let world;

function init() {
    
    let canvas = document.getElementById('canvas');
    world = new World(canvas);
    world.start();

}