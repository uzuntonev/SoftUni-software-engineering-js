/* eslint-disable no-unused-expressions */
function sortArr(arr, order) {
    const result = arr;
    order === 'asc' 
        ? result.sort((a, b) => a - b) 
        : result.sort((a, b) => b - a);
    return result;
}

const a = sortArr([ 14, 7, 17, 6, 8 ], 'desc');
console.log(a);
