const { assert } = require('chai');
const Warehouse = require('../../Exercise/7.Warehouse');
const { expect } = require('chai');

describe('Test Warehouse', () => {

    let instance;
    beforeEach(() => {
        instance = new Warehouse(10);
    });

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
        assert.property(instance, 'availableProducts');
        assert.equal(instance.capacity, 10);
    }); // OK

    it('addProduct throw error ', () => {
        assert.throws(() => { instance.addProduct('Food', 'kotka', 11); });
    }); // OK

    it('orderProducts => ', () => {
        instance.capacity = 100;
        instance.addProduct('Food', 'banana', 11);
        instance.addProduct('Food', 'apple', 21);
        instance.addProduct('Food', 'orange', 30);
        instance.addProduct('Food', 'grapes', 25);
        const act = Object.keys(instance.orderProducts('Food'));
        assert.equal(act[0], 'orange');
    }); // OK

    it('occupiedCapacity', () => {
        instance.capacity = 100;
        instance.addProduct('Food', 'banana', 11);
        instance.addProduct('Food', 'apple', 21);
        const act = instance.occupiedCapacity();
        assert.equal(act, 32);
    }); // No

    it('revision', () => {
        instance.capacity = 100;
        instance.addProduct('Food', 'banana', 10);
        instance.addProduct('Food', 'kotka', 15);
        instance.addProduct('Food', 'apple', 21);
        const act = instance.revision();
        assert.equal(act, `Product type - [Food]
- banana 10
- kotka 15
- apple 21
Product type - [Drink]`);
    }); // No

    it('revision throw error', () => {
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
        instance.addProduct('Food', 'banana', 9);
        instance.addProduct('Food', 'orange', 1);
        assert.throws(() => {
            instance.scrapeAProduct('kon', 1);
        },'kon do not exists');
    }); // OK

    it('', () => {
        instance.capacity = 100;
        instance.addProduct('Food', 'banana', 10);
        instance.addProduct('Food', 'orange', 10);
        instance.addProduct('Food', 'apple', 10);
        const act = instance.scrapeAProduct('banana', 5);
        assert.equal(act, instance.availableProducts.Food);
    }); // No


});

// 90/ 100 Judge !!!
