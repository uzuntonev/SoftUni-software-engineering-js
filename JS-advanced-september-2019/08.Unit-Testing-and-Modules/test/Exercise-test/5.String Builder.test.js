const { assert } = require('chai');
const StringBuilder = require('../../Exercise/5.String Builder');


describe('Testing StringBuilder', () => {
    let instance;
    beforeEach(() => {
        instance = new StringBuilder();
    });

    describe('Test .append() adds it to the end of the storage', () => {
        it('Add "a"', () => {
            instance.append('a');
            const act = instance.toString();
            assert.equal(act, 'a');
        });

        it('No params', () => {
            instance.append('');
            const act = instance.toString();
            assert.equal(act, '');
        });

        it('Throw TypeError', () => {
            const act = instance.append;
            assert.throw(() => { act(1); }, 'Argument must be string');
        });
    });

    describe('Test .prepend() adds it to the beginning of the storage', () => {
        it('Add "a"', () => {
            instance.prepend('a');
            const act = instance.toString();
            assert.equal(act, 'a');
        });

        it('No params', () => {
            instance.prepend('');
            const act = instance.toString();
            assert.equal(act, '');
        });
        it('Throw TypeError', () => {
            const act = instance.prepend;
            assert.throw(() => { act(1); }, 'Argument must be string');
        });
    });

    describe('Test .insertAt() adds argument at the given index', () => {
        it('Add "a" on index 1)', () => {
            instance.insertAt('a', 1);
            const act = instance.toString();
            assert.equal(act, 'a');
        });

        it('Add "a" on index 10)', () => {
            instance.insertAt('a', 10);
            const act = instance.toString();
            assert.equal(act, 'a');
        });

        it('Add "a" on index -10)', () => {
            instance.insertAt('a', -10);
            const act = instance.toString();
            assert.equal(act, 'a');
        });
    });

    describe('Test .remove()  removes elements from the storage, starting at the given index', () => {
        it('Remove 2 chars from index 1', () => {
            instance = new StringBuilder('test');
            instance.remove(1, 2);
            const act = instance.toString();
            assert(act, 'tt');
        });

    });

    describe('Test toString()', () => {
        it('Is return string representation', () => {
            const act = instance.toString();
            assert.equal(act, '');
        });

        it('Is return string representation', () => {
            instance = new StringBuilder('text');
            const act = instance.toString();
            assert.equal(act, 'text');
        });
    });

    describe('Check instance', () => {
        it('is Object', () => {
            assert.isObject(instance);
        });

        it('is instance of StringBuilder', () => {
            assert.instanceOf(instance, StringBuilder);
        });

        it('method is a function', () => {
            assert.isFunction(instance.append);
            assert.isFunction(instance.prepend);
            assert.isFunction(instance.remove);
            assert.isFunction(instance.insertAt);
            assert.isFunction(instance.toString);
        });

        it('instance is object', () => {
            assert.isObject(instance);
        });

        it('typeof is object', () => {
            assert.typeOf(instance, 'object');

        });

        it('several test',() => {
            instance = new StringBuilder('B');
            instance.append(' Uzuntonev');
            instance.prepend('Georgi ');
            instance.insertAt('orisov', 8);
            instance.remove(7, 8);
            const act = instance.toString();
            assert.equal(act, 'Georgi Uzuntonev');
        });
    });

});


// const instance = new StringBuilder('');
// instance.remove(1, 4);

// console.log(instance.toString()); 
