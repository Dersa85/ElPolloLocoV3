
let world;
let canvas

isFullScreen = false;
upgradeCost = [1, 3, 5];

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



function closeMenu() {
    document.getElementById('shop-menu').classList.add('d-none');
    document.getElementById('options-menu').classList.add('d-none');
    world.resume();
}

function openOptions() {
    document.getElementById('shop-menu').classList.add('d-none');
    document.getElementById('options-menu').classList.remove('d-none');
    refreshShop();
    world.menuOpen();
}

function openShop() {
    document.getElementById('shop-menu').classList.remove('d-none');
    document.getElementById('options-menu').classList.add('d-none');
    refreshShop();
    world.menuOpen();
}

function refreshShop() {
    document.getElementById('coin-label').innerText = world.character.coins;
    refreshUpgrade(world.character.movemetSpeedUpgrade, 'speed')
    refreshUpgrade(world.character.jumpPowerUpgrade, 'jump')
    refreshUpgrade(world.character.throwPowerUpgrade, 'throw')
    refreshUpgradeButton(world.character.movemetSpeedUpgrade, 'speed');
    refreshUpgradeButton(world.character.jumpPowerUpgrade, 'jump');
    refreshUpgradeButton(world.character.throwPowerUpgrade, 'throw');
}

function refreshUpgrade(upgrade, prefixId) {
    for (let i = 0; i < 3; i++) {
        let upgradeField = document.getElementById(`${prefixId}-${i}`);
        if (upgrade > i) {
            upgradeField.classList.add('has-upgrade');
            upgradeField.classList.remove('no-upgrade');
        } else {
            upgradeField.classList.remove('has-upgrade');
            upgradeField.classList.add('no-upgrade');
        }
    }
}

function refreshUpgradeButton(upgrade, buttonId) {
    let coins = world.character.coins;
    document.getElementById(`cost-${buttonId}`).innerText = upgradeCost[upgrade];
    let button = document.getElementById(`upgrade-button-${buttonId}`);
    button.disabled = upgradeCost[upgrade] > coins;
}

function speedUpgrade() {
    let currentUpgrade = world.character.movemetSpeedUpgrade;
    world.character.removeCoin(upgradeCost[currentUpgrade]);
    world.character.movemetSpeedUpgrade++;
    refreshShop();
}

function jumpUpgrade() {
    let currentUpgrade = world.character.jumpPowerUpgrade;
    world.character.removeCoin(upgradeCost[currentUpgrade]);
    world.character.jumpPowerUpgrade++;
    refreshShop();
}

function throwUpgrade() {
    let currentUpgrade = world.character.throwPowerUpgrade;
    world.character.removeCoin(upgradeCost[currentUpgrade]);
    world.character.throwPowerUpgrade++;
    refreshShop();
}

function changeMusikVolume() {
    let volume = document.getElementById('musik-volume').value;
    world.changeBackgroundVolume(volume)
}

function changeSoundVolume() {
    let volume = document.getElementById('sound-volume').value;
    world.changeSoundVolume(volume);
}

addEventListener('keydown', e => {
    
    if (e.code == 'KeyS') {
        if (world.isGameRunning()) {
            openShop();
        }
    } else if (e.code == 'Escape') {
        openOptions()
    }
});



