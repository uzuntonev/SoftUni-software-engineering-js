function arrayMap(arr, func) {
    return arr.reduce((acc, curr) => [ ...acc, func(curr) ] , []);
}


const nums = [ 1,2,3,4,5 ];
console.log(arrayMap(nums,(item)=> item * 2)); // [ 2, 4, 6, 8, 10 ]

const letters = [ 'a','b','c' ];
console.log(arrayMap(letters,(l)=>l.toLocaleUpperCase())); // [ 'A', 'B', 'C' ]

