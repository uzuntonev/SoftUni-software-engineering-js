const expect = require('chai').expect;
const sum = require('../../Lab/1.Sub Sum');

describe('Tests for calculate', ()=>{
    it('sum', ()=>{
        expect(sum([ 1 , 1 ],0 , 1)).to.be.equal(2);
    });
    it('isArray', ()=>{
        expect(isNaN(sum(1,0 , 1))).to.be.equal(true);
    });
    it('minus start', ()=>{
        expect(sum([ 1 , 1 ], -1, 1)).to.be.equal(2);
    });
});

