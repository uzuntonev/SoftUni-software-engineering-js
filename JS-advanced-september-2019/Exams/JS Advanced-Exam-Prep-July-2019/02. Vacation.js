class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }

    registerChild(name, grade, budget){
        if (this.budget > budget){
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
        }
        if(!this.kids[grade]){
            this.kids[grade] = [ `${name}-${budget}` ];
        }else{
            if(this.kids[grade].find(x => x.includes(name))){
                return `${name} is already in the list for this ${this.destination} vacation.`;
            }
            this.kids[grade].push(`${name}-${budget}`);
        }
        return this.kids[grade];
    }

    removeChild(name, grade){
        if(!this.kids[grade]){
            return `We couldn't find ${name} in ${grade} grade.`;

        }
        const currentKid = this.kids[grade].find(x => x.includes(name));

        if(!currentKid){
            return `We couldn't find ${name} in ${grade} grade.`;
        }
        this.kids[grade].splice(this.kids[grade].indexOf(currentKid), 1);
        return this.kids[grade];
    }

    toString(){
        if(Object.keys(this.kids).length === 0){
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        }
        let numberOfChildren = 0;
        Object.entries(this.kids).forEach(e => numberOfChildren += e[1].length);
        return `${this.organizer} will take ${numberOfChildren} children on trip to ${this.destination}
${Object.entries(this.kids).sort((a,b)=> Number(a[0]) - Number(b[0]))
        .map(x => `Grade: ${x[0]}
${x[1].map((e, i) => `${++i}. ${e}`).join('\n')}`).join('\n')}
`;

    }

    get numberOfChildren(){
        let numberOfChildren = 0;
        Object.entries(this.kids).forEach(e => numberOfChildren += e[1].length);
        return numberOfChildren;
    }
}

// const vacation = new Vacation('Mr Pesho', 'San diego', 2000);
// console.log(vacation.registerChild('Gosho', 5, 2000));
// console.log(vacation.registerChild('Lilly', 6, 2100));
// console.log(vacation.registerChild('Pesho', 6, 2400));
// console.log(vacation.registerChild('Gosho', 5, 2000));
// console.log(vacation.registerChild('Tanya', 5, 6000));
// console.log(vacation.registerChild('Mitko', 10, 1590));


// const vacation = new Vacation('Mr Pesho', 'San diego', 2000);
// vacation.registerChild('Gosho', 5, 2000);
// vacation.registerChild('Lilly', 6, 2100);

// console.log(vacation.removeChild('Gosho', 9));

// vacation.registerChild('Pesho', 6, 2400);
// vacation.registerChild('Gosho', 5, 2000);

// console.log(vacation.removeChild('Lilly', 6));
// console.log(vacation.registerChild('Tanya', 5, 6000));

const vacation = new Vacation('Miss Elizabeth', 'Dubai', 2000);
vacation.registerChild('Gosho', 5, 3000);
vacation.registerChild('Lilly', 6, 1500);
vacation.registerChild('Pesho', 7, 4000);
vacation.registerChild('Tanya', 5, 5000);
vacation.registerChild('Mitko', 10, 5500);
console.log(vacation.toString());

'Miss. Elizabeth will take 4 children on trip to The bahamas\nGrade: 11\n1. Skaro-400\n2. Gosho-3444\nGrade: 12\n1. Gosho-3400\n2. Pesho-400'; 
'Miss. Elizabeth will take 4 children on trip to The bahamas\nGrade: 11\n1. Skaro-400\n2. Gosho-3444\nGrade: 12\n1. Gosho-3400\n2. Pesho-400\n'
;
