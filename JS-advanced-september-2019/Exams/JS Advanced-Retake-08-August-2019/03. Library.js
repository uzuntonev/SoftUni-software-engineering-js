class Library {
    constructor(libraryName) {
        this.libraryName = libraryName;
        this.subscribers = [];
        this.subscriptionTypes = {
            normal: this.libraryName.length,
            special: this.libraryName.length * 2,
            vip: Number.MAX_SAFE_INTEGER,
        };
    }

    subscribe(name, type) {
        if (!this.subscriptionTypes[type]) {
            throw new Error(`The type ${type} is invalid`);
        }
        let currentPerson = this.subscribers.find(x => x.name === name);
        if (currentPerson) {
            currentPerson.type = type;
            return currentPerson;
        }
        currentPerson = {
            name,
            type,
            books: [],
        };
        this.subscribers.push(currentPerson);
        return currentPerson;
    }

    unsubscribe(name) {
        const currentPerson = this.subscribers.find(x => x.name === name);
        if (!currentPerson) {
            throw new Error(`There is no such subscriber as ${name}`);
        }
        this.subscribers = this.subscribers.filter(x => x.name !== name);
        // this.subscribers.splice(this.subscribers.indexOf(currentPerson), 1);
        return this.subscribers;
    }

    receiveBook(name, title, author) {
        const currentPerson = this.subscribers.find(x => x.name === name);
        if (!currentPerson) {
            throw new Error(`There is no such subscriber as ${name}`);
        }
        const limit = this.subscriptionTypes[currentPerson.type];
        if (limit <= currentPerson.books.length) {
            throw new Error(`You have reached your subscription limit ${limit}!`);
        }
        currentPerson.books.push({
            title,
            author,
        });
        return currentPerson;
    }

    showInfo() {
        if (this.subscribers.length === 0) {
            return `${this.libraryName} has no information about any subscribers`;
        }
        return this.subscribers
            .map(x => `Subscriber: ${x.name}, Type: ${x.type}\nReceived books: ${x.books.map(y => `${y.title} by ${y.author}`).join(', ')}`).join('\n') + '\n';
    }
}

const lib = new Library('Lib');

lib.subscribe('Peter', 'normal');
lib.subscribe('John', 'special');

lib.receiveBook('John', 'A Song of Ice and Fire', 'George R. R. Martin');
lib.receiveBook('Peter', 'Lord of the rings', 'J. R. R. Tolkien');
lib.receiveBook('John', 'Harry Potter', 'J. K. Rowling');
console.log(lib.showInfo());
