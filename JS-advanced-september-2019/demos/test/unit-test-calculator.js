const { expect } = require('chai');
const { sum, substract } = require('../app');

describe('Calculator sum', () => {
    it ('expect sum(5,5,5) equal to 15', () => {
        //Arrange
        const result = 15;
        //Act
        const act = sum(5, 5, 5);
        //Assert
        expect(act).to.be.eq(result);
    });

    it ('expect sum(3, -5) equal to -2', () => {
        //Arrange
        const result = -2;
        //Act
        const act = sum(3, -5);
        //Assert
        expect(act).to.be.eq(result);
    });

    it ('expect sum([1,2,3,4,5]) equal to 15', () => {
        //Arrange
        const result = 15;
        //Act
        const act = sum([1, 2, 3, 4, 5]);
        //Assert
        expect(act).to.be.eq(result);
    });

    it ('expect sum(0, -5) equal to -5', () => {
        //Arrange
        const result = -5;
        //Act
        const act = sum(-5);
        //Assert
        expect(act).to.be.eq(result);
    });
});