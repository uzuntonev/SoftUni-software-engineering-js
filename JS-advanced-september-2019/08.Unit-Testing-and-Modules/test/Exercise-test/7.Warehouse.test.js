const { assert } = require('chai');
const Warehouse = require('../../Exercise/7.Warehouse');
const { expect } = require('chai');



describe('', () => {
    let instance;
    beforeEach(() => {
        instance = new Warehouse(5);
    });
    it('revision throw error', () => {
        assert.equal(instance.revision(), 'The warehouse is empty');
    }); //OK
});
describe('Test Warehouse', () => {

    it('check init => no params', () => {
        assert.throws(() => {
            new Warehouse('str');
        });
        assert.throws(() => {
            new Warehouse(-1);
        });
        assert.throws(() => {
            new Warehouse(0);
        });
    }); // OK

    it('check init => params 1', () => {
        const instance = new Warehouse(5);
        assert.property(instance, 'availableProducts');
        assert.equal(instance.capacity, 10);
    }); // OK

    it('addProduct throw error ', () => {
        const instance = new Warehouse(5);
        assert.throws(() => { instance.addProduct('Food', 'kotka', 11); });
    }); // OK

    it('orderProducts => ', () => {
        const instance = new Warehouse(5);
        instance.capacity = 100;
        instance.addProduct('Food', 'banana', 11);
        instance.addProduct('Food', 'apple', 21);
        instance.addProduct('Food', 'orange', 30);
        instance.addProduct('Food', 'grapes', 25);
        const act = Object.keys(instance.orderProducts('Food'));
        assert.equal(act[0], 'orange');
    }); // OK

    it('revision throw error', () => {
        const instance = new Warehouse(5);
        assert.equal(instance.revision(), 'The warehouse is empty');
    }); //OK

    it('scrapeAProduct', () => {
        instance.capacity = 100;
        instance.addProduct('Food', 'banana', 10);
        instance.addProduct('Food', 'orange', 10);
        instance.addProduct('Food', 'apple', 10);
        instance.scrapeAProduct('banana', 5);
        const act = instance.availableProducts.Food.banana;
        assert.equal(act, 5);
    }); // OK

    it('scrapeAProduct throw error', () => {
        const instance = new Warehouse(5);
        instance.addProduct('Food', 'banana', 4);
        instance.addProduct('Food', 'orange', 1);
        assert.throws(() => {
            instance.scrapeAProduct('kon', 1);
        }, 'kon do not exists');
    }); // OK


    // it('occupiedCapacity', () => {
    //     instance.capacity = 100;
    //     instance.addProduct('Food', 'banana', 11);
    //     instance.addProduct('Food', 'apple', 21);
    //     const act = instance.occupiedCapacity();
    //     assert.equal(act, 32);
    // }); // No

    // it('revision', () => {
    //     instance.capacity = 100;
    //     instance.addProduct('Food', 'banana', 10);
    //     instance.addProduct('Food', 'kotka', 15);
    //     instance.addProduct('Food', 'apple', 21);
    //     const act = instance.revision();
    //     assert.equal(act, 'Product type - [Food]\n- banana 10\n- kotka 15\n- apple 21\nProduct type - [Drink]');
    // }); // No

});
