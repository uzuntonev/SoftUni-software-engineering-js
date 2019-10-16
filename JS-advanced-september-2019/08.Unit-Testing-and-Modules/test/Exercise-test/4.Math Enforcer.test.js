const { assert } = require('chai');
const mathEnforcer = require('../../Exercise/4.Math Enforcer');


describe('Testing Math Enforcer', () => {
    describe('Testing .addFive(num)', ()=>{
        it('is param NaN / param "text"', ()=>{
            const act = mathEnforcer.addFive('text');
            assert.isUndefined(act);
        });

        it(' / param -5', ()=>{
            const act = mathEnforcer.addFive(-5);
            assert.equal(act, 0);
        });


        it('is method add 5 / param 1.5', ()=>{
            const act = mathEnforcer.addFive(1.5);
            assert.equal(act, 6.5);
        });

        
        it('is method add 5 / param -1.5', ()=>{
            const act = mathEnforcer.addFive(-1.5);
            assert.equal(act, 3.5);
        });

        it('is method add 5 / param 10', ()=>{
            const act = mathEnforcer.addFive(10);
            assert.equal(act, 15);
        });

    });

    describe('Testing .subtractTen(num)', ()=>{
        it('is param NaN / param "text"', ()=>{
            const act = mathEnforcer.subtractTen('text');
            assert.isUndefined(act);
        });

        it('is method substract 10 / param 10', ()=>{
            const act = mathEnforcer.subtractTen(10);
            assert.equal(act, 0);
        });

        it('is method substract 10 / param -1.5', ()=>{
            const act = mathEnforcer.subtractTen(-1.5);
            assert.equal(act, -11.5);
        });

        it('is method substract 10 / param 1.5', ()=>{
            const act = mathEnforcer.subtractTen(1.5);
            assert.equal(act, -8.5);
        });

        it('is method substract 10 / param -10', ()=>{
            const act = mathEnforcer.subtractTen(-10);
            assert.equal(act, -20);
        });
    });

    describe('Testing .sum(num1, num2)', ()=>{
        it('Test num1 is a Number / params "text", 1', ()=>{
            const act = mathEnforcer.sum('text', 1);
            assert.isUndefined(act);
        });

        it('Test num2 is a Number / params 1 , "text"', ()=>{
            const act = mathEnforcer.sum(1, 'text');
            assert.isUndefined(act);
        });

        it('Test sum num1 num2 / params 1, 1', ()=>{
            const act = mathEnforcer.sum(1, 1);
            assert.equal(act, 2);
        });

        it('Test sum num1 num2 / params 2, -2', ()=>{
            const act = mathEnforcer.sum(2, -2);
            assert.equal(act, 0);
        });

        it('Test sum num1 num2 / params -2, -2', ()=>{
            const act = mathEnforcer.sum(-2, -2);
            assert.equal(act, -4);
        });

        
        it('Test sum num1 num2 / params 1.5, 1.5', ()=>{
            const act = mathEnforcer.sum(1.5, 1.5);
            assert.equal(act, 3);
        });
    });
});
