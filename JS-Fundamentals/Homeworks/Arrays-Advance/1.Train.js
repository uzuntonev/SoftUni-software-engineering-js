function solve(input) {
    let [wagons, capacity, ...commands] = input;
   wagons = wagons.split(' ').map(Number);
    for (let i = 0; i < commands.length; i++) {
        let [command, passengers] = commands[i].split(' ');
        passengers = Number(passengers);
        
        if (command == 'Add') {
            wagons.push(passengers);
        } else {
            for (let i = 0; i < wagons.length; i++) {
                if (wagons[i] + Number(command) <= capacity){
                    wagons[i] += Number(command);
                    break;
                } 
           }
        }
    }
    console.log(wagons.join(' '))
}

solve([
    '32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'
]);