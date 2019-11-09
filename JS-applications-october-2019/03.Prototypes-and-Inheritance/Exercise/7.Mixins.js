// const { Keyboard, Monitor, Desktop } = require('./6.Computer');
function createMixins() {
    function computerQualityMixin(classToExtend) {
        classToExtend.prototype.getQuality = function () {
            return (this.processorSpeed + this.ram + this.hardDiskSpace) / 3;
        };
        classToExtend.prototype.isFast = function () {
            if (this.processorSpeed > this.ram / 4) {
                return true;
            }
            return false;
        };
        classToExtend.prototype.isRoomy = function () {
            if (this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed)) {
                return true;
            }
            return false;
        };
    }

    function styleMixin(classToExtend) {
        classToExtend.prototype.isFullSet = function () {
            return this.manufacturer === this.keyboard.manufacturer &&
            this.manufacturer === this.monitor.manufacturer;
        };
        classToExtend.prototype.isClassy = function () {
            return this.battery.expectedLife >= 3 &&
            (this.color === 'Silver' || this.color === 'Black') &&
            this.weight < 3;
        };
    }
    return {
        computerQualityMixin,
        styleMixin,
    };
}

// computerQualityMixin(Desktop);
// styleMixin(Desktop);
// const keyboard = new Keyboard('Logitech', 70);
// const keyboard2 = new Keyboard('A-4', 70);
// const monitor = new Monitor('Logitech', 28, 18);
// const desktop = new Desktop('Logitech', 3.3, 8, 1, keyboard, monitor);
// const desktop2 = new Desktop('Logitech', 1.3, 8, 10, keyboard2, monitor);

// console.log(desktop2.isFullSet()); 
