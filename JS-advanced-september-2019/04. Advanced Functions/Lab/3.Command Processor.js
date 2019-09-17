function solve() {
    function solution() {
        let result = '';
        const append = (string) => {
            result += string;
            return result;
        };
        const removeStart = (n) => {
            result = result.substr(n);
            return result;
        };
        const removeEnd = (n) => {
            result = result.substring(0, result.length - n);
            return result;
        };
        const print = () => console.log(result);
        return { append, removeStart, removeEnd, print };
    }

    const secondZeroTest = solution();
    secondZeroTest.append('123');
    secondZeroTest.append('45');
    secondZeroTest.removeStart(2);
    secondZeroTest.removeEnd(1);
    secondZeroTest.print();
}
solve();
