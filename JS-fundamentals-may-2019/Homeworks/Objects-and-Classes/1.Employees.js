function solve(arr) {
    class Person {
        constructor (name, num){
            this.name = name,
            this.num = num
        }
    }
    let employeesList = [];
    for (let el of arr) {
        employeesList.push(new Person(el, el.length))
    }
    employeesList.forEach(el => console.log(`Name: ${el.name} -- Personal Number: ${el.num}`))
    
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );