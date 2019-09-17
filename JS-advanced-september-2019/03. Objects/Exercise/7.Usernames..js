function solve(input) {
    const set = new Set();

    function sortUsers(a, b) {
        if (a.length !== b.length) {
            return (a.length - b.length);
        } 
        return a.localeCompare(b);
    }

    for (const line of input) {
        set.add(line);
    }

    [ ...set ]
        .sort((a, b) => sortUsers(a, b))
        .forEach(e => console.log(e));

}


// solve([
//     'Ashton',
//     'Kutcher',
//     'Ariel',
//     'Lilly',
//     'Keyden',
//     'Aizen',
//     'Billy',
//     'Braston']);

solve([
    'Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot' ]);
