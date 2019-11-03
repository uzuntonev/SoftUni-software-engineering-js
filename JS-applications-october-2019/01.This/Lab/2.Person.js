class Person {
    constructor(first, last) {
        this._first = first;
        this._last = last;
    }
    get firstName(){
        return this._first;
    }

    get lastName() {
        return this._last;
    }

    set firstName(name){
        return this._first = name;
    }

    set lastName(name){
        return this._last = name;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name) {
        const arr = name.split(' ');
        if(arr.length === 2){
            this.firstName = arr[0];
            this.lastName = arr[1];
        }

        return `${this.firstName} ${this.lastName}`;
    }
}


const person = new Person('Peter', 'Ivanov');
console.log(person.fullName);//Peter Ivanov
person.firstName = 'George';
console.log(person.fullName);//George Ivanov
person.lastName = 'Peterson';
console.log(person.fullName);//George Peterson
person.fullName = 'Nikola Tesla';
console.log(person.firstName);//Nikola
console.log(person.lastName);//Tesla
