function solve(input) {
    const board = [
        [ false, false, false ],
        [ false, false, false ],
        [ false, false, false ] ];

    function isWin(arr) {
        for (let i = 0; i < arr.length; i++) {
            const row = arr[i];
            const col = arr.map(e => e[i]);
            const diagonalR = arr.map(e => e[i++]);
            const diagonalL = arr.map(e => e[(arr.length - 1) - 1]);

            return diagonalR.every(e => e === diagonalR[0] && e !== false) ||
                diagonalL.every(e => e === diagonalL[0] && e !== false) ||
                row.every(e => e === row[0] && e !== false) ||
                col.every(e => e === col[0] && e !== false);
        }
    }

    function printBoard() {
        board.forEach(e => console.log(e.join('\t')));
    }

    for (let i = 0; i < input.length; i++) {
        let [ row, position ] = input[i].split(' ').map(Number);
        const first = 'X';
        const second = 'O';
        if (board[row][position] !== false && i < input.length - 1) {
            console.log('This place is already taken. Please choose another!');
            input.splice(i, 1);
            [ row, position ] = input[i].split(' ').map(Number);
        }
        if (i % 2 === 0) {
            board[row][position] = first;
            if (isWin(board)) {
                console.log(`Player ${first} wins!`);
                printBoard();                
                return;
            }
        } else {
            board[row][position] = second;
            if (isWin(board)) {
                console.log(`Player ${second} wins!`);
                printBoard();
                return;
            }
        }

    }
    console.log('The game ended! Nobody wins :(');
    printBoard();
}

// Judge 80/100 !!!

solve([ '0 1',
    '0 0',
    '0 2',
    '2 0',
    '1 0',
    '1 1',
    '1 2',
    '2 2',
    '2 1',
    '0 0' ]);

// solve([ '0 1',
//     '0 0',
//     '0 2',
//     '2 0',
//     '1 0',
//     '1 2',
//     '1 1',
//     '2 1',
//     '2 2',
//     '0 0' ]);

// solve([ '0 0',
//     '0 0',
//     '1 1',
//     '0 1',
//     '1 2',
//     '0 2',
//     '2 2',
//     '1 2',
//     '2 2',
//     '2 1' ]);
