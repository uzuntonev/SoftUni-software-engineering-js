function solve() {
    const input = document.querySelector('#input');
    const result = document.querySelector('#resultOutput');
    function binaryDecoding(input) {
        let copyInput = input;
        while(copyInput.length > 1){
            const temp = copyInput
                .split('')
                .map(Number)
                .reduce((a, b) => a + b, 0)
                .toString();
            copyInput = temp;
        }

        const cutedText = input
            .substring(copyInput, input.length - copyInput);
        return cutedText
            .split(/([\d]{8})/) // .match(/......../g)
            .map(x => parseInt(x, 2))
            .map(x => String.fromCharCode(x))
            .filter(x => x.match(/[A-Za-z\s]/g))
            .join('');
    }
    result.textContent = binaryDecoding(input.value);
}

