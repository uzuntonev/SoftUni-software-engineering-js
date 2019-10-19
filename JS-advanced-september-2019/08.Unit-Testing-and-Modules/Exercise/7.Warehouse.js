class Warehouse {

    get capacity() {
        return this._capacity;
    }

    set capacity(givenSpace) {

        if (typeof givenSpace === 'number' && givenSpace > 0) {
            return this._capacity = givenSpace;
        } 
        throw 'Invalid given warehouse space';
        
    }

    constructor(capacity) {
        this.capacity = capacity;
        this.availableProducts = { Food: {}, Drink: {} };
    }

    addProduct(type, product, quantity) {

        const addedQuantity = ((this.capacity - this.occupiedCapacity()) - quantity);
        let output;

        if (addedQuantity >= 0) {

            if (this.availableProducts[type].hasOwnProperty(product) === false) {
                this.availableProducts[type][product] = 0;
            }

            this.availableProducts[type][product] += quantity;
            output = this.availableProducts[type];

        } else {
            throw 'There is not enough space or the warehouse is already full';
        }

        return output;
    }

    orderProducts(type) {

        let output;
        const sortedKeys = Object.keys(this.availableProducts[type])
            .sort((a, b) => this.availableProducts[type][b] - this.availableProducts[type][a]);

        const newObj = {};

        for (const product of sortedKeys) {

            if (newObj.hasOwnProperty(product) === false) {
                newObj[product] = 0;
            }

            newObj[product] += this.availableProducts[type][product];
        }

        this.availableProducts[type] = newObj;
        output = this.availableProducts[type];

        return output;
    }

    occupiedCapacity() {

        let output = 0;
        const productsCount = Object.keys(this.availableProducts.Food).length +
            Object.keys(this.availableProducts.Drink).length;

        if (productsCount > 0) {

            let quantityInStock = 0;

            for (const type of Object.keys(this.availableProducts)) {

                for (const product of Object.keys(this.availableProducts[type])) {

                    quantityInStock += this.availableProducts[type][product];
                }
            }

            output = quantityInStock;
        }

        return output;
    }

    revision() {

        let output = '';

        if (this.occupiedCapacity() > 0) {

            for (const type of Object.keys(this.availableProducts)) {
                output += `Product type - [${type}]\n`;
                for (const product of Object.keys(this.availableProducts[type])) {
                    output += `- ${product} ${this.availableProducts[type][product]}\n`;
                }
            }
        } else {
            output = 'The warehouse is empty';
        }

        return output.trim();
    }

    scrapeAProduct(product, quantity) {

        const type = Object.keys(this.availableProducts).find(t => Object.keys(this.availableProducts[t]).includes(product));
        let output;

        if (type !== undefined) {

            if (quantity <= this.availableProducts[type][product]) {
                this.availableProducts[type][product] -= quantity;
            } else {
                this.availableProducts[type][product] = 0;
            }

            output = this.availableProducts[type];

        } else {
            throw `${product} do not exists`;
        }

        return output;
    }
}

module.exports = Warehouse;
