const { assert } = require('chai');
const AutoService = require('./02. Auto Service');


describe('Testing AutoService', () => {
    // let instance;
    // beforeEach(() => {
    //     instance = new AutoService(100);
    // });

    it('carInfo ', () => {
        instance = new AutoService(100);
        instance.signUpForReview('Gosho', 'BT1234CA', { engine: 'EJRGG23', transmission: 'FF4418ZZ', doors: 'broken' });
        instance.signUpForReview('Peter', 'CA1234CA', { engine: 'MFRGG23', transmission: 'FF4418ZZ', doors: 'broken' });
        const act = instance.carInfo('CA1234CA', 'Peter');
        assert.equal(act.plateNumber, 'CA1234CA',);
    }); // OK

    it('repairCar', () => {
        instance = new AutoService(1);
        instance.signUpForReview('Peter', 'CA1234CA', { engine: 'MFRGG23', transmission: 'FF4418ZZ', doors: 'broken' });
        instance.signUpForReview('Ivan', 'RR1234CA', { engine: 'MFRGG23', transmission: 'FF4418ZZ', doors: 'broken' });
        instance.signUpForReview('Gosho', 'BT1234CA', { engine: 'YTRGG23', transmission: 'FF4318FF', doors: 'broken' });
        const act = instance.repairCar();
        assert.equal(act, 'Your doors were repaired.');
    }); // OK

    it('repairCar "No clients, we are just chilling..."', () => {
        instance = new AutoService(1);
        const act = instance.repairCar();
        assert.equal(act, 'No clients, we are just chilling...');
    }); //Ok

    it('repairCar "Your car was fine, nothing was repaired."', () => {
        instance = new AutoService(1);
        instance.signUpForReview('Peter', 'CA1234CA', { engine: 'MFRGG23', transmission: 'FF4418ZZ' });
        const act = instance.repairCar();
        assert.equal(act, 'Your car was fine, nothing was repaired.');
    }); // OK

    
    // it('init', () => {
    //     assert.equal(instance.garageCapacity, 100);
    // }); // OK

    // it('availableSpace ', () => {
    //     const car = new AutoService(100);
    //     assert.equal(car.availableSpace, 100);
    // }); //OK

    // it('signupForReview - check workInProgress', () => {
    //     instance.signUpForReview('Peter', 'CA1234CA', { engine: 'MFRGG23', transmission: 'FF4418ZZ', doors: 'broken' });
    //     const act1 = instance.workInProgress.length;
    //     const act2 = instance.workInProgress[0].plateNumber;
    //     const act3 = instance.workInProgress[0].carInfo.engine;
    //     assert.equal(act1, 1);
    //     assert.equal(act2, 'CA1234CA');
    //     assert.equal(act3, 'MFRGG23');
    // }); //Ok

    // it('signupForReview - check workInProgress - check backlogWork', () => {
    //     instance = new AutoService(1);
    //     instance.signUpForReview('Peter', 'CA1234CA', { engine: 'MFRGG23', transmission: 'FF4418ZZ', doors: 'broken' });
    //     instance.signUpForReview('Peter', 'CA1234CA', { engine: 'MFRGG23', transmission: 'FF4418ZZ', doors: 'broken' });
    //     const act1 = instance.backlogWork.length;
    //     const act2 = instance.backlogWork[0].clientName;
    //     assert.equal(act1, 1);
    //     assert.equal(act2, 'Peter');
    // }); //OK

    // it('carInfo(clientName, plateNumber) ', () => {
    //     const act = instance.carInfo('Gosho', 'BT1234CA');
    //     assert.equal(act, 'There is no car with platenumber Gosho and owner BT1234CA.');
    // }); //OK
});



// Commented tests are no needed 92 / 100 Judge !!!
