
let world;
let canvas

/**
 * Shows the current status of the full screen
 */
isFullScreen = false;

/**
 * Reflects the cost of upgrade 1, 2 and 3
 */
upgradeCost = [1, 2, 3];

/**
 * The function for onload the body
 */
function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas);
    world.start();
}

/**
 * Switch between full screnn and window mode
 */
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

/**
 * Close the menu option and shop
 */
function closeMenu() {
    document.getElementById('shop-menu').classList.add('d-none');
    document.getElementById('options-menu').classList.add('d-none');
    world.resume();
}

/**
 * Open the option menu
 */
function openOptions() {
    document.getElementById('shop-menu').classList.add('d-none');
    document.getElementById('options-menu').classList.remove('d-none');
    refreshShop();
    world.menuOpen();
}

/**
 * open the open menu
 */
function openShop() {
    document.getElementById('shop-menu').classList.remove('d-none');
    document.getElementById('options-menu').classList.add('d-none');
    refreshShop();
    world.menuOpen();
}

/**
 * Refresh the shop menu after upgrade
 */
function refreshShop() {
    document.getElementById('coin-label').innerText = world.character.coins;
    refreshUpgrade(world.character.movemetSpeedUpgrade, 'speed')
    refreshUpgrade(world.character.jumpPowerUpgrade, 'jump')
    refreshUpgrade(world.character.throwPowerUpgrade, 'throw')
    refreshUpgradeButton(world.character.movemetSpeedUpgrade, 'speed');
    refreshUpgradeButton(world.character.jumpPowerUpgrade, 'jump');
    refreshUpgradeButton(world.character.throwPowerUpgrade, 'throw');
}

/**
 * The function show the skill level as circles
 * 
 * @param {number} upgrade - This is the current value
 * @param {string} prefixId - This is the upgrade name
 */
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

/**
 * Show the upgrade cost. deactivate the button if not enought coins left
 * 
 * @param {number} upgrade - This is the current value
 * @param {string} buttonId - This is the upgrade name
 */
function refreshUpgradeButton(upgrade, buttonId) {
    let coins = world.character.coins;
    document.getElementById(`cost-${buttonId}`).innerText = upgradeCost[upgrade];
    let button = document.getElementById(`upgrade-button-${buttonId}`);
    button.disabled = upgradeCost[upgrade] > coins;
}

/**
 * Upgrade the speed skill
 */
function speedUpgrade() {
    let currentUpgrade = world.character.movemetSpeedUpgrade;
    world.character.removeCoin(upgradeCost[currentUpgrade]);
    world.character.movemetSpeedUpgrade++;
    refreshShop();
}

/**
 * Upgrade the jump skill
 */
function jumpUpgrade() {
    let currentUpgrade = world.character.jumpPowerUpgrade;
    world.character.removeCoin(upgradeCost[currentUpgrade]);
    world.character.jumpPowerUpgrade++;
    refreshShop();
}

/**
 * Upgrade the throw skill
 */
function throwUpgrade() {
    let currentUpgrade = world.character.throwPowerUpgrade;
    world.character.removeCoin(upgradeCost[currentUpgrade]);
    world.character.throwPowerUpgrade++;
    refreshShop();
}

/**
 * Change the volume from the background musik
 */
function changeMusikVolume() {
    let volume = document.getElementById('musik-volume').value;
    world.changeBackgroundVolume(volume)
}

/**
 * Change the valume from all sounds
 */
function changeSoundVolume() {
    let volume = document.getElementById('sound-volume').value;
    world.changeSoundVolume(volume);
}

/**
 * Check the keys for the shop and menu
 */
addEventListener('keydown', e => {
    
    if (e.code == 'KeyS') {
        if (world.isGameRunning()) {
            openShop();
        }
    } else if (e.code == 'Escape') {
        openOptions()
    }
});



