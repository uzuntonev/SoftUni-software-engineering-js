const { assert } = require('chai');
const BookStore = require('./02. Book Store');
const { expect } = require('chai');

describe('Testing', () => {
    let instance;
    beforeEach(() => {
        instance = new BookStore('book');
        instance.stockBooks([ 'Harry Potter-J.Rowling', 'Inferno-Dan Braun' ]);
    });

    it('Testing init', () => {
        assert.equal(instance.name, 'book');
        assert.property(instance, 'books');
        assert.property(instance, 'workers');
        assert.equal(instance.workers.length, 0);
    });

    it('stockBooks()', () => {
        const act = instance.stockBooks([ 'Harry Potter-J.Rowling' ]);
        assert.equal(instance.books.length, 3);
        assert.equal(act[0].title, 'Harry Potter');
    });

    it('hire()', () => {
        const act = instance.hire('George', 'seller');
        assert.throw(() => { instance.hire('George', 'seller');});
        assert.equal(act, 'George started work at book as seller');
        assert.throw(() => { instance.hire('George', 'seller'); });
    });

    it('fire()', () => {
        instance.hire('George', 'seller');
        const act = instance.fire('George');
        assert.equal(act, 'George is fired');
        assert.throws(() => { instance.fire('George'); }, 'George doesn\'t work here');
    });

    it('sellBook()', () => {
        instance.hire('Ina', 'seller');
        const act = instance.sellBook('Inferno', 'Ina');
        assert.equal(instance.workers[0].booksSold, 1);
        assert.throw(() => { instance.sellBook('In', 'Ina'); });
        assert.throw(() => { instance.sellBook('Inferno', 'Inaaaa'); });
    });

    it('printWorkers()', () => {
        instance.stockBooks([ 'Cabin-Hariet Stow', 'The Jungle-Upton Sinclear' ]);
        instance.hire('Ina', 'seller');
        instance.hire('George', 'seller');
        instance.fire('George');
        instance.sellBook('Inferno', 'Ina');
        const act = instance.printWorkers();
        assert.equal(act, 'Name:Ina Position:seller BooksSold:1');
    });
});
