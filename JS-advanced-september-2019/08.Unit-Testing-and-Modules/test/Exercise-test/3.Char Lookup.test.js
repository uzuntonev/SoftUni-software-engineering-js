const { assert } = require('chai');
const lookupChar = require('../../Exercise/3.Char Lookup');

describe('Testing look up char', ()=> {
    it('Pass "string", 0 output "s"', ()=> {
        assert.equal(lookupChar('string', 0), 's');
    });

    it('Pass "string", 2 output "r"', ()=> {
        assert.equal(lookupChar('string', 2), 'r');
    });

    it('Pass 1, 0 output undefined', ()=> {
        assert.equal(lookupChar(1, 0), undefined);
    });

    it('Pass [], 0 output undefined', ()=> {
        assert.equal(lookupChar([], 0), undefined);
    });

    it('Pass "string", 1.1 output undefined', ()=> {
        assert.equal(lookupChar('string', 1.1), undefined);
    });  
    
    it('Pass "string", "a" output undefined', ()=> {
        assert.equal(lookupChar('string', 'a'), undefined);
    }); 

    it('Pass "string", 6 output undefined', ()=> {
        assert.equal(lookupChar('string', 6), 'Incorrect index');
    }); 

    it('Pass "string", -1 output "Incorrect index"', ()=> {
        assert.equal(lookupChar('string', -1), 'Incorrect index');
    }); 
    it('Pass "string", 10 output "Incorrect index"', ()=> {
        assert.equal(lookupChar('string', 10), 'Incorrect index');
    }); 
});
