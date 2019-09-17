function solve(input) {
    function result(func) {
        return function (value) {
            return func(',', '$', true, value);
        };
    }
    const dollar = result(input);
    console.log(dollar(50));
}

solve(function formater(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) {
        return `${symbol} ${result}`;
    }
    return `${result} ${symbol}`;
});
