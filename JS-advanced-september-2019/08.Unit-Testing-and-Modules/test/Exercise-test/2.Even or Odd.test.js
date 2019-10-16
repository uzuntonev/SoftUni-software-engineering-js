const { assert } = require('chai');
const isOddOrEven = require('../../Exercise/2.Even or Odd');

describe('Even or Odd Testing', () => {
    it('Is Even', () => {
        assert.equal(isOddOrEven('test'),'even');
    });

    it('Is Odd', () => {
        assert.equal(isOddOrEven('tes'),'odd');
    });

    it('Is undefined', () => {
        assert.equal(isOddOrEven(1),undefined);
    });
});
