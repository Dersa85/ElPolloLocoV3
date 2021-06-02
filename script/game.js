
let world;
let canvas

isFullScreen = false;

function init() {
    
    canvas = document.getElementById('canvas');
    world = new World(canvas);
    world.start();
}

function changeScreenMode() {
    if (isFullScreen) {
        canvas.classList.remove('full-screen');
        document.getElementById('titel').classList.remove('d-none');
    } else {
        canvas.classList.add('full-screen');
        document.getElementById('titel').classList.add('d-none');
    }
    isFullScreen = !isFullScreen;
}
