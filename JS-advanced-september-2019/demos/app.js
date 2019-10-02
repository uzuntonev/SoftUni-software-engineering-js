function calculator() {
    function sum(arr) {
        if (!Array.isArray(arr)) {
            arr = [ ...arguments ];
        }
        return arr.reduce((a, b) => a + +b, 0);
    }
    const substract = (arr) => arr.reduce((a, b) => a - b, 0);
    return { sum, substract };
}


module.exports = calculator();
