class Kitchen {
    constructor(budget) {
        this.budget = budget;
        this.productsInStock = {};
        this.menu = {};
        this.actionsHistory = [];
    }

    loadProducts(products) {
        products.forEach(product => {
            let [ name, quantity, price ] = product.split(' ');
            quantity = Number(quantity);
            price = Number(price);
            if (this.budget >= price) {
                this.budget -= price;
                this.actionsHistory.push(`Successfully loaded ${quantity} ${name}`);

                this.productsInStock.hasOwnProperty(name)
                    ? this.productsInStock[name] += quantity
                    : this.productsInStock[name] = quantity;
            } else {
                this.actionsHistory.push(`There was not enough money to load ${quantity} ${name}`);
            }
        });
        return this.actionsHistory.join('\n');
    }

    addToMenu(meal, products, price) {
        if (this.menu.hasOwnProperty(meal)) {
            return `The ${meal} is already in our menu, try something different.`;
        }
        this.menu[meal] = {
            products,
            price,
        };
        return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
    }

    showTheMenu() {
        if (Object.keys(this.menu).length !== 0) {
            return Object.entries(this.menu)
                .map(meal => `${meal[0]} - $ ${meal[1].price}`)
                .join('\n') + '\n'; // Judge tests Error !!! Need one more new line !!!
        }
        return 'Our menu is not ready yet, please come later...';
    }

    makeTheOrder(meal) {
        const order = Object.keys(this.menu).find(e => e === meal);
        if (!order) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        for (const line of this.menu[meal].products) {
            const [ key, value ] = line.split(' ');
            if (!this.productsInStock[key] || this.productsInStock[key] < value) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
        }

        for (const line of this.menu[meal].products) {
            const [ key, value ] = line.split(' ');
            this.productsInStock[key] -= value;
        }
        this.budget += this.menu[meal].price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
    }
}



const kitchen = new Kitchen(1000);
// console.log(kitchen.loadProducts([ 'Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50' ]));

console.log(kitchen.addToMenu('frozenYogurt', [ 'Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10' ], 9.99));
console.log(kitchen.addToMenu('Pizza', [ 'Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5' ], 15.55));

console.log(kitchen.showTheMenu());

// console.log(kitchen.makeTheOrder('frozenYogurt'));


console.log(kitchen);
