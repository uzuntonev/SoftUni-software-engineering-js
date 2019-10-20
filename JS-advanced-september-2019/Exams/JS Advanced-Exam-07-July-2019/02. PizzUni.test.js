const { assert } = require('chai');
const PizzUni = require('./02. PizzUni');

describe('PizzUni', () => {
    let instance;
    beforeEach(() => {
        instance = new PizzUni();
    });

    it('registerUser({email})', () => {
        instance.registerUser('georgi@georgi.bg');
        const act1 = instance.registeredUsers[0].orderHistory.length;
        const act2 = instance.registeredUsers[0].email;
        assert.equal(act1, 0);
        assert.equal(act2, 'georgi@georgi.bg');
    }); // OK

    it('registerUser({email}) throw error', () => {
        instance.registerUser('georgi@georgi.bg');
        assert.throw(() => { instance.registerUser('georgi@georgi.bg'); }, 'This email address (georgi@georgi.bg) is already being used!');
    }); //No

    it('makeAnOrder', () => {
        instance = new PizzUni();
        instance.registerUser('georgi@georgi.bg');
        instance.registerUser('kotki@georgi.bg');
        instance.registerUser('kuche@georgi.bg');
        instance.registerUser('ivan@georgi.bg');
        
        const act = instance.makeAnOrder('georgi@georgi.bg', 'Italian Style', 'Fanta');
        const act2 = instance.makeAnOrder('ivan@georgi.bg', 'Barbeque Classic');
        assert.equal(act2, 1);
        assert.isUndefined(instance.orders[1].orderedDrink);
        assert.equal(instance.orders[0].orderedPizza, 'Italian Style');
        assert.equal(instance.orders[0].orderedDrink, 'Fanta');
        assert.equal(act, 0);
        assert.equal(instance.orders[0].status, 'pending');
        instance.completeOrder();
        assert.equal(instance.orders[0].status, 'completed');
    });

    it('makeAnOrder throw error must be registered', () => {
        assert.throw(() => { instance.makeAnOrder('georgi@georgi.bg', 'Italian Style', 'Fanta'); }, 'You must be registered to make orders!');
    }); // OK

    it('makeAnOrder throw error order at least 1 Pizza', () => {
        instance.registerUser('georgi@georgi.bg');
        assert.throw(() => { instance.makeAnOrder('georgi@georgi.bg'); }, 'You must order at least 1 Pizza to finish the order.');
    }); // OK

    it('completeOrder', () => {
        instance.registerUser('georgi@georgi.bg');
        instance.makeAnOrder('georgi@georgi.bg', 'Italian Style', 'Fanta');
        instance.completeOrder();
        assert.equal(instance.orders[0].status, 'completed');
    }); // OK

    it('detailsAboutMyOrder({id})', () => {
        instance = new PizzUni();
        instance.registerUser('georgi@georgi.bg');
        instance.makeAnOrder('georgi@georgi.bg', 'Italian Style', 'Fanta');
        instance.completeOrder();
        const act = instance.detailsAboutMyOrder(0);
        assert.equal(act, 'Status of your order: completed');
    }); // OK

    it('doesTheUserExist', () => {
        instance = new PizzUni();
        instance.registerUser('georgi@georgi.bg');
        instance.makeAnOrder('georgi@georgi.bg', 'Italian Style', 'Fanta');
        instance.completeOrder();
        const act = instance.doesTheUserExist('georgi@');
        assert.isUndefined(act);
    }); // No

});


// 80 / 100 Judge !!!
