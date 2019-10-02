'use strict';

/**
 * 
 * @param {Array} a 
 * @param {Number} b 
 * @param  {Function} someFunc 
 */


function solve(a, b, ...params) {
    // console.log(arguments.length) 
    console.log(params.length);
    console.log(a);
}

// solve(1, {}, [1,2,3], 'pesho');


const data = [
    {
        id: 1224,
        name: 'kotka',
    },
    {
        id: 3213,
        name: 'mishka',
    },
    {
        id: 53453,
        name: 'kuche',
    },
    {
        id: 9766,
        name: 'slon',
    },
    {
        id: 43677,
        name: 'kon',
    },
    {
        id: 97875,
        name: 'tigar',
    },
];

const obj = data.reduce((acc, curr) => {
    acc[curr.id] = curr;
    return acc;
}, {});

// console.log(obj[9766]) 

function counter() {
    let x = 0;

    return function () {
        console.log(x++);
    };
}

// const f = counter();
// f();
// f();
// f();
// f();

// const g = counter();
// g();


function creatPerson(name, age) {
    return {
        getName: () => name,
        getAge: () => age,
        setName: (value) => name = value,
        setAge: (value) => age = value,
    };
}

const person = creatPerson('Pesho', 25);

// console.log(person.getName());
// console.log(person.setName('Kotka'));
// console.log(person.getName()); 


const arrData = [
    [ 1, 2, 3, 4 ],
    [ 6, 7, 8, 5, 32 ],
    [ 24, 64, 7, 7, 3, 13 ],
    [ 33, 56, 31 ],
];

const result = arrData.reduce((acc, curr) => acc.concat(curr.reduce((acc, curr) => acc + curr, 0)), []);

// console.log(result) 

// Binary Search Implementation
const list = [ 2, 3, 5, 7, 8, 10, 12, 15, 18, 20 ];

function binarySearch(list, item, leftIndex, rightIndex) {
    const middle = parseInt(leftIndex + (rightIndex - leftIndex) / 2);

    if (rightIndex < leftIndex) {
        return -1;
    }

    if (list[middle] === item) {
        return middle;
    }

    if (list[middle] > item) {
        return binarySearch(list, item, leftIndex, middle - 1);
    }

    return binarySearch(list, item, middle + 1, rightIndex);
}

const a = binarySearch(list, 12, 0, list.length - 1);

// console.log(list[a]) 

const func = function () {
    const error = new Error('My error');
    error.length = 3;
    error.color = 'red';
    throw error;

};

try {
    func();
} catch (ex) {
    console.log(ex.stack); 
}
