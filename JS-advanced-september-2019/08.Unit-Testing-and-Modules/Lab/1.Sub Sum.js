function sum(arr, start, end) {
    if (!Array.isArray(arr)) {
        return NaN;
    }

    if (start < 0) {
        start = 0;
    }

    if (end > arr.length) {
        end = arr.length;
    }

    return arr
        .slice(start, end + 1)
        .map(Number)
        .reduce((acc, curr) => acc + curr, 0);

}


module.exports = sum;

