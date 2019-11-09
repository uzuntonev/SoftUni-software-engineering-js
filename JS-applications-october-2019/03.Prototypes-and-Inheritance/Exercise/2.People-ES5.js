function Employee(name, age) {
    if (new.target === Employee) {
        throw new Error('Cannot instantiate directly');
    }
    this.name = name;
    this.age = age;
    this.salary = 0;
    this.tasks = [];
}

Employee.prototype.work = function () {
    const task = this.tasks.shift();
    console.log(`${this.name} ${task}`);
    this.tasks.push(task);
};
Employee.prototype.collectSalary = function () {
    console.log(`${this.name} received ${this.salary} this month.`);
};

function Junior(name, age) {
    Employee.call(this, name, age);
    this.tasks.push('is working on a simple task.');
}
Junior.prototype = Object.create(Employee.prototype);
// Object.setPrototypeOf(Junior, Employee);
// Object.assign(Junior.prototype, Employee.prototype);

function Senior(name, age) {
    Employee.call(this, name, age);
    this.tasks.push('is working on a complicated task.');
    this.tasks.push('is taking time off work.');
    this.tasks.push('is supervising junior workers.');
}
Senior.prototype = Object.create(Employee.prototype);
// Object.setPrototypeOf(Senior, Employee);
// Object.assign(Senior.prototype, Employee.prototype);

function Manager(name, age) {
    Employee.call(this, name, age);
    this.dividend = 0;
    this.tasks.push('scheduled a meeting.');
    this.tasks.push('is preparing a quarterly report.');
}
Manager.prototype = Object.create(Employee.prototype);
// Object.setPrototypeOf(Manager, Employee);
// Object.assign(Senior.prototype, Employee.prototype);

Manager.prototype.collectSalary = function () {
    console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
};


const junior = new Junior('Pesho', 32); 
junior.work();
junior.work();
junior.salary = 1500;
junior.dividend = 500;
junior.collectSalary();

const test = Object.getPrototypeOf(Junior.prototype);

console.log(test); 
