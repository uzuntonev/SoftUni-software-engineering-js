function solve(input) {
    const pattern = /\w+/g;
    const matched = input.match(pattern);

    function toUpperCase(arr) {
        const result = arr.map(word => word.toUpperCase());
        return result;
    }

    const output = toUpperCase(matched).join(', ');
    console.log(output);
}

solve('Hi, how are you?');
