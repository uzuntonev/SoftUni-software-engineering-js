const expect = require('chai').expect;

describe('calculator test', () => {
    it ('Expect 2 + 1 be equal to 3', () => {
        //Arrange
        const expected = 3;
        //Act
        const result = 2 + 1;
        //Assert
        expect(result).to.be.equal(expected);
    });
});
