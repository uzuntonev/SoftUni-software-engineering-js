const { assert } = require('chai');
const PaymentPackage = require('../../Exercise/6.Payment Package');

describe('Testing PaymentPackage', () => {
    let instance;
    beforeEach(() => {
        instance = new PaymentPackage('test', 10);
    });

    it('is instance of PaymentPackage', () => {
        assert.instanceOf(instance, PaymentPackage);
    });

    it('init currently', () => {
        instance = new PaymentPackage('testtest', 20);
        const act1 = instance.name;
        const act2 = instance.value;
        assert.equal(act1, 'testtest');
        assert.equal(act2, 20);
    });

    it('init with wrong name', () => {
        assert.throw(() => { new PaymentPackage(1, 1); }, 'Name must be a non-empty string');
    });

    it('init with wrong value', () => {
        assert.throw(() => { new PaymentPackage('test', 'test'); }, 'Value must be a non-negative number');
        assert.throw(() => { new PaymentPackage('test', -1); }, 'Value must be a non-negative number');
    });

    it('check VAT', () => {
        assert.throw(() => { instance.VAT = -1; }, 'VAT must be a non-negative number');
        assert.throw(() => { instance.VAT = 'test'; }, 'VAT must be a non-negative number');
        instance.VAT = 10;
        assert.equal(instance.VAT, 10);
    });

    it('check active', () => {
        assert.throw(() => { instance.active = 'test'; }, 'Active status must be a boolean');
        assert.throw(() => { instance.active = -1; }, 'Active status must be a boolean');
        assert.equal(instance.active, true);

    });

    it('cheack toString()', () => {
        instance = new PaymentPackage('HR Services', 1500);
        const act = instance.toString();
        assert.equal(act, 'Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800');
    });

    it('change active prop', () => {
        instance = new PaymentPackage('HR Services', 1500);
        instance.active = false;
        const act = instance.toString();
        assert.equal(act, 'Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800');
    });

    it('change VAT prop', () => {
        instance = new PaymentPackage('HR Services', 1500);
        instance.VAT = 0;
        const act = instance.toString();
        assert.equal(act, 'Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 0%): 1500');
    });


    it('change VAT prop', () => {
        instance = new PaymentPackage('HR Services', 0);
        instance.VAT = 0;
        const act = instance.toString();
        assert.equal(act, 'Package: HR Services\n- Value (excl. VAT): 0\n- Value (VAT 0%): 0');
    });
});
