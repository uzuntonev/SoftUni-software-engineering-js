const { expect } = require('chai');
const sum = require('../../Lab/4.Sum of Numbers');

describe('Test sum module', () => {
    it('Params is Array', () => {
        expect(sum([ 1, 1 ])).to.be.equal(2);
    });
    it('Params are [ 5, 5, 10, 10 ]', () => {
        expect(sum([ 5, 5, 10, 10 ])).to.be.equal(30);
    });
    it('Params are [ 50, -50, -20, 30, -30 ]', () => {
        expect(sum([ 50, -50, -20, 30, -30 ])).to.be.equal(-20);
    });
});
