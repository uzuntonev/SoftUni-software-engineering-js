function solve(input) {
    const board = [
        [ false, false, false ],
        [ false, false, false ],
        [ false, false, false ] ];
    let player = 'X';
    let counter = 0;

    function isWin(arr) {
        for (let i = 0; i < arr.length; i++) {
            const row = arr[i];
            const col = arr.map(e => e[i]);
            const diagonalR = arr.map(e => e[i++]);
            // const diagonalL = arr.map(e => e[(arr.length - 1) - 1]);
            let diagonalL = false;
            if (board[0][2] === player &&
                board[1][1] === player &&
                board[2][0] === player) {
                diagonalL = true;
            }
            return diagonalL ||
                diagonalR.every(e => e === diagonalR[0] && e !== false) ||
                // diagonalL.every(e => e === diagonalL[0] && e !== false) ||
                row.every(e => e === row[0] && e !== false) ||
                col.every(e => e === col[0] && e !== false);
        }
    }

    function printBoard() {
        board.forEach(e => console.log(e.join('\t')));
    }

    for (let i = 0; i < input.length; i++) {
        const [ row, position ] = input[i].split(' ').map(Number);
        if (board[row][position] !== false) {
            console.log('This place is already taken. Please choose another!');
            continue;
        }

        board[row][position] = player;
        if (isWin(board)) {
            console.log(`Player ${player} wins!`);
            printBoard();
            return;
        }

        counter++;
        if (counter === 9) {
            break;
        }
        player = player === 'X' ? 'O' : 'X';
    }
    console.log('The game ended! Nobody wins :(');
    printBoard();
}

// Judge 80/100 !!!

solve([ '0 1',
    '2 0',
    '0 0',
    '0 2',
    '1 1',
    '1 0',
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
