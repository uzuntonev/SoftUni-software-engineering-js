function solve(input) {
    const init = [
        [false, false, false],
        [false, false, false],
        [false, false, false]];

    for (let i = 0; i < input.length; i++) {
        let [row, position] = input[i].split(' ').map(Number);
        let player = i;
        if (init[row][position] != false) {
            console.log('This place is already taken. Please choose another!');
            player++
            continue
        }
        if (player % 2 == 0) {
            init[row][position] = 'X';
        } else {
            init[row][position] = 'O';

        }
    }
    init.forEach(e => console.log(e))
}

// solve(["0 1",
// "0 0",
// "0 2", 
// "2 0",
// "1 0",
// "1 1",
// "1 2",
// "2 2",
// "2 1",
// "0 0"]
// )

// solve(["0 1",
//     "0 0",
//     "0 2",
//     "2 0",
//     "1 0",
//     "1 2",
//     "1 1",
//     "2 1",
//     "2 2",
//     "0 0"]
// );

solve(["0 0",
"0 0",
"1 1",
"0 1",
"1 2",
"0 2",
"2 2",
"1 2",
"2 2",
"2 1"]
)