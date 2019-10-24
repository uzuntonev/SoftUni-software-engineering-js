const { assert } = require('chai');
const PizzUni = require('./02. PizzUni');

describe('Testitn PizzUni', () => {
    let pizzeria;
    beforeEach(() => {
        pizzeria = new PizzUni();
    });

    it('registerUser({email})', () => {
        const act1 = pizzeria.registerUser('test2@test2');
        assert.equal(act1.email, 'test2@test2');
        assert.equal(pizzeria.registerUser.length, 1);
        assert.throw(() => pizzeria.registerUser('test2@test2'));
    });

    it('makeAnOrder()', () => {
        pizzeria = new PizzUni();
        pizzeria.registerUser('test@test');
        pizzeria.registerUser('testov@testov');
        const act = pizzeria.makeAnOrder('test@test', 'Italian Style', 'Fanta');
        const act2 = pizzeria.makeAnOrder('testov@testov', 'Italian Style');
        assert.isUndefined(pizzeria.orders[1].orderedDrink);
        assert.equal(act2, 1);
        assert.equal(pizzeria.orders.length, 2);
        assert.equal(pizzeria.orders[0].orderedDrink, 'Fanta');
        assert.equal(pizzeria.orders[0].orderedPizza, 'Italian Style');
        assert.equal(pizzeria.registeredUsers[0].orderHistory.length, 1);
    });

    it('Testing makeAnOrder() with wrong params', () => {
        assert.throw(() => pizzeria.makeAnOrder('test@', 'Italian Style', 'Fanta'));
        pizzeria.registerUser('test@test');
        assert.throw(() => pizzeria.makeAnOrder('test@test', 'test', 'Fanta'));
    });

    it('detailsAboutMyOrder({id})', () => {
        pizzeria.registerUser('test@test');
        pizzeria.makeAnOrder('test@test', 'Italian Style', 'Fanta');
        const act1 = pizzeria.detailsAboutMyOrder(0);
        assert.equal(act1, 'Status of your order: pending');
        const act2 = pizzeria.detailsAboutMyOrder(10);
        assert.isUndefined(act2);
    });

    it('doesTheUserExist({email})', () => {
        pizzeria.registerUser('test@test');
        const act = pizzeria.doesTheUserExist('test@test');
        assert.equal(act.email, 'test@test');
        const act2 = pizzeria.doesTheUserExist('test@');
        assert.isUndefined(act2);
    });

    it('completeOrder()', () => {
        pizzeria.registerUser('test@test');
        pizzeria.makeAnOrder('test@test', 'Italian Style', 'Fanta');
        const act = pizzeria.completeOrder();
        assert.equal(act.status, 'completed');
    });
});

