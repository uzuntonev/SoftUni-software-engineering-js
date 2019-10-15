const { expect } = require('chai');
const createCalculator = require('../../Lab/7.Add - Subtract');


describe('Calculator tests', () => {
    let calc = createCalculator;
    beforeEach(() => {
        calc = createCalculator();
    });

    const addInput = [
        '1',
        [ 1 ],
        1,
    ];

    const subtractInput = [
        '1',
        [ 1 ],
        1,
    ];
    addInput.forEach(x => {
        it(`add ${x}`, () => {
            expect(calc.add(x)).to.be.equal(undefined);
            expect(calc.get()).to.be.equal(1);
        });  
    });

    subtractInput.forEach(x => {
        it(`subtract ${x}`, () => {
            expect(calc.subtract(x)).to.be.equal(undefined);
            expect(calc.get()).to.be.equal(-1);
        });  
    });

    it('add {}', () => {
        expect(calc.add({})).to.be.equal(undefined);
        expect(isNaN(calc.get())).to.be.equal(true);
    });
    it('subtract {}', () => {
        expect(calc.add({})).to.be.equal(undefined);
        expect(isNaN(calc.get())).to.be.equal(true);
    });
});
