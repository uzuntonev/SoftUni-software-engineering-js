class Organization {
    constructor(name, budget) {
        this.name = name;
        this.budget = budget;
        this.employees = [];
        this.departments = {
            marketing: this.budget * 0.4,
            finance: this.budget * 0.25,
            production: this.budget * 0.35,
        };
    }

    get departmentsBudget() {
        return {
            marketing: this.departments.marketing,
            finance: this.departments.finance,
            production: this.departments.production,
        };
    }

    add(employeeName, department, salary) {
        if (this.departmentsBudget[department] < salary) {
            return `The salary that ${department} department can offer to you Mr./Mrs. ${employeeName} is $${this.departmentsBudget[department]}.`;
        }
        const employee = {
            employeeName,
            department,
            salary,
        };
        this.departments[department] -= salary;
        this.employees.push(employee);
        return `Welcome to the ${department} team Mr./Mrs. ${employeeName}.`;
    }
    
    employeeExists(employeeName) {
        const employee = this.employees.find(x => x.employeeName === employeeName);
        if (employee) {
            return `Mr./Mrs. ${employeeName} is part of the ${employee.department} department.`;
        }
        return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`;
    }
  
    leaveOrganization(employeeName) {
        const employee = this.employees.find(x => x.employeeName === employeeName);
        if (employee) {
        // this.employees.splice(this.employees.indexOf(employee), 1);
            this.departments[employee.department] += employee.salary;
            this.employees = this.employees.filter(x => x.employeeName !== employeeName);

            return `It was pleasure for ${this.name} to work with Mr./Mrs. ${employeeName}.`;
        }

        return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`;
    }

    status() {
        const marketingEmployees = this.employees
            .filter(x => x.department === 'marketing')
            .sort((a, b) => b.salary - a.salary);
        const financeEmployees = this.employees
            .filter(x => x.department === 'finance')
            .sort((a, b) => b.salary - a.salary);
        const productionEmployees = this.employees
            .filter(x => x.department === 'production')
            .sort((a, b) => b.salary - a.salary);

        return `${this.name.toUpperCase()} DEPARTMENTS:
Marketing | Employees: ${marketingEmployees.length}: ${marketingEmployees.map(x => x.employeeName).join(', ')} | Remaining Budget: ${this.departments.marketing}
Finance | Employees: ${financeEmployees.length}: ${financeEmployees.map(x => x.employeeName).join(', ')} | Remaining Budget: ${this.departments.finance}
Production | Employees: ${productionEmployees.length}: ${productionEmployees.map(x => x.employeeName).join(', ')} | Remaining Budget: ${this.departments.production}`;

        // function sortEmployees(d, e){
        //     return e.filter(x => x.department === d)
        //         .sort((a, b) => b.salary - a.salary);
        // }
        // const keys = Object.keys(this.departments);
        // const result = keys.map(x => `${x[0].toLocaleUpperCase() + x.slice(1)} | Employees: ${sortEmployees(x, this.employees).length}: ${sortEmployees(x, this.employees).map(x => x.employeeName).join(', ')} | Remaining Budget: ${this.departments[x]}`);
        // return `${this.name.toUpperCase()} DEPARTMENTS:
        // ${result.join('\n')}`;
    }
}



// const organization = new Organization('SoftUni', 20000);

// console.log(organization.add('Peter', 'marketing', 1200));
// // console.log(organization.add('Robert', 'production', 2000));
// console.log(organization.leaveOrganization('Peter'));


// const organization = new Organization('SBTech', 10000);

// organization.add('Peter', 'marketing', 800);
// organization.add('Robert', 'production', 2000);
// organization.add('Peter', 'production', 2000);

// console.log(organization.status()); 



const organization = new Organization('SoftUni', 20000);

console.log(organization.add('Pesho1', 'marketing', 1200));
console.log(organization.add('Gosho3', 'production', 200));
console.log(organization.add('Tosho3', 'marketing', 120));
console.log(organization.add('Bosho1', 'production', 2220));
console.log(organization.add('Shosho2', 'marketing', 210));
console.log(organization.add('Yosho4', 'production', 20));
console.log(organization.add('Rosho2', 'production', 250));

console.log(JSON.stringify(organization.status()));

