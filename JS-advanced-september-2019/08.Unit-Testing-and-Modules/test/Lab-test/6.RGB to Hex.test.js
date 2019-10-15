const { expect } = require('chai');
const rgbToHexColor = require('../../Lab/6.RGB to Hex');

describe('Testing RGB to Hex', () => {
    it('red, blue or green grater 0 ', () => {
        expect(rgbToHexColor(-1, 1, 1)).to.be.equal(undefined);
        expect(rgbToHexColor(1, -1, 1)).to.be.equal(undefined);
        expect(rgbToHexColor(1, 1, -1)).to.be.equal(undefined);
    });
    it('red, blue or green less 255 ', () => {
        expect(rgbToHexColor(256, 1, 1)).to.be.equal(undefined);
        expect(rgbToHexColor(1, 256, 1)).to.be.equal(undefined);
        expect(rgbToHexColor(1, 1, 256)).to.be.equal(undefined);
    });
    it('red, blue or green is a string ', () => {
        expect(rgbToHexColor('a', 1, 1)).to.be.equal(undefined);
        expect(rgbToHexColor(1, 'a', 1)).to.be.equal(undefined);
        expect(rgbToHexColor(1, 1, 'a')).to.be.equal(undefined);
    });
    it('first color in rgb is equal first color in hex', () => {
        expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
        expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
        expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
    });
    it('last color in rgb is equal last color in hex', () => {
        expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF');
        expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF');
        expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF');
    });
});
