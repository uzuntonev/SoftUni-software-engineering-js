// function solve() {
class Employee {
        salary = 0;
        tasks = []
        constructor(name, age) {
            if (new.target === Employee) {
                throw new Error('Cannot instantiate directly');
            }
            this.name = name;
            this.age = age;
        }

        work() {
            const task = this.tasks.shift();
            console.log(`${this.name} ${task}`);
            this.tasks.push(task);
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary} this month.`);
        }
}

class Junior extends Employee {
    constructor(name, age) {
        super(name, age);
        this.tasks.push('is working on a simple task.');
    }
}

class Senior extends Employee {
    constructor(name, age) {
        super(name, age);
        this.tasks.push('is working on a complicated task.');
        this.tasks.push('is taking time off work.');
        this.tasks.push('is supervising junior workers.');
    }
}

class Manager extends Employee {
        dividend = 0;
        constructor(name, age) {
            super(name, age);
            this.tasks.push('scheduled a meeting.');
            this.tasks.push('is preparing a quarterly report.');
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
        }
}

const test = Object.getPrototypeOf(Junior.prototype);
console.log(test); 
