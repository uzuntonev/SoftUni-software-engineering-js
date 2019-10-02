/* eslint-disable no-unused-expressions */
function sortArr(arr, order) {
    return order === 'asc' 
        ? [ ...arr ].sort((a, b) => a - b) 
        : [ ...arr ].sort((a, b) => b - a);
}

const a = sortArr([ 14, 7, 17, 6, 8 ], 'desc');
console.log(a);
