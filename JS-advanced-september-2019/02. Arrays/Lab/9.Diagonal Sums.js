function solve(input) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    for (let i = 0; i < input.length; i++) {
        firstDiagonal += input[i][i];
        secondDiagonal += input[i][input.length - 1 - i];
    }
    console.log(firstDiagonal, secondDiagonal) 
}

solve(
    [[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   
   );