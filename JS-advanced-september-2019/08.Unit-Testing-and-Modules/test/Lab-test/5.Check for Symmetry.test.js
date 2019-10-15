const { expect } = require('chai');
const isSymmetric = require('../../Lab/5.Check for Symmetry');

describe('Testing is a Symmetric', () => {
    it('Pass number (1) and check params is a Array', () => {
        expect(isSymmetric(1)).to.equal(false);
    });
    it('Pass string ("string") and check params is a Array', () => {
        expect(isSymmetric('string')).to.equal(false);
    });
    it('Pass string ("object") and check params is a Array', () => {
        expect(isSymmetric({})).to.equal(false);
    });
    it('Input ([ 1, 2, 3 ]) is symmetric', () => {
        expect(isSymmetric([ 1, 2, 3 ])).equal(false);
    });
    it('Input ([ 1, 1, 1 ]) is symmetric', () => {
        expect(isSymmetric([ 1, 1, 1 ])).equal(true);
    });
    it('Input ([ 1, 2, 2, 1 ]) is symmetric', () => {
        expect(isSymmetric([ 1, 2, 2, 1 ])).equal(true);
    });
    it('Input ([ a, b, c ]) is symmetric', () => {
        expect(isSymmetric([ 'a', 'b', 'c' ])).equal(false);
    });
    it('Input ([ a ]) is symmetric', () => {
        expect(isSymmetric([ 'a' ])).be.equal(true);
    });
    it('Input ([ a, 1, {name: "pesho"}, [1, 2] ]) is symmetric', () => {
        expect(isSymmetric([ 'a', 1, { name: 'pesho' }, [ 1, 2 ] ])).equal(false);
    });
    it('Input ([ a, 1, {name: "pesho"}, 1, a ]) is symmetric', () => {
        expect(isSymmetric([ 'a', 1, { name: 'pesho' }, 1, 'a' ])).equal(true);
    });
    it('Input (1, 2, 3) is symmetric', () => {
        expect(isSymmetric(1, 2, 3)).be.equal(false);
    });
});



 

