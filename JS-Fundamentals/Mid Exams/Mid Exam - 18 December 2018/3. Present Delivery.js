function solve(input) {
    let houses = input.shift().split('@').map(Number);
    let santaPosition = 0;
    while (true) {
        let [command, steps] = input.shift().split(' ');
        steps = Number(steps);
        if (command === 'Merry') {
            break;
        }
        // Calculate on which position santa stop
        let position = (startPosition, jump) => {
            if ((startPosition + jump) >= houses.length) {
                return startPosition = (startPosition + jump) % houses.length;
            } else {
                return startPosition += jump;
            }

        }

        // Assignment santa position with returned value from function position()
        santaPosition = position(santaPosition, steps)

        // Substract each house where is stop sant with 2 and check is it under 0
        houses[santaPosition] -= 2;
        if (houses[santaPosition] < 0) {
            houses[santaPosition] = 0;
            console.log(`House ${santaPosition} will have a Merry Christmas.`);
        }

    }
    let failedHouse = (houses.filter(e => e > 0)).length
    if (failedHouse == 0) {
       
        console.log(`Santa's last position was ${santaPosition}.`);
        console.log(`Mission was successful.`);
    } else {
        console.log(`Santa's last position was ${santaPosition}.`);
        console.log(`Santa has failed ${failedHouse} houses.`);

    }
}

// solve(['10@10@10@2',
//     'Jump 1',
//     'Jump 2',
//     'Merry Xmas!'

// ]);
solve(['2@4@2',
    'Jump 2',
    'Jump 2',
    'Jump 8',
    'Jump 3',
    'Jump 1',
    'Merry Xmas!'
]);