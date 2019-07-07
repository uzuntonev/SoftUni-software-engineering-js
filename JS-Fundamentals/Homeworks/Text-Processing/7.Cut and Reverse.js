function solve(input) {
    let half = input.length / 2;
    let firstHalf = input.substr(0, half);
    let secondHalf = input.substr(half);
    let reversedFirst = firstHalf
        .split('')
        .reverse()
        .join('');
    let reversedSecond = secondHalf
        .split('')
        .reverse()
        .join('')
    console.log(reversedFirst)
    console.log(reversedSecond)
}

solve('tluciffiDsIsihTgnizamAoSsIsihT');