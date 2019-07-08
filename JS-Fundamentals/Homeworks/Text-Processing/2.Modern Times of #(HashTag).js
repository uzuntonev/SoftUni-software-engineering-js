function solve(input) {
    let pattern = /#[A-Za-z]+/g;
    let match = input.match(pattern);
    match.forEach(e => {
        let output = e.replace('#', '');
        console.log(output)
    });
}

time = (sentance) => sentance.match(new RegExp('#[a-z]+\\w', 'gi')).forEach(elem => console.log(elem.slice(1)));

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');

time('Nowadays everyone uses # to tag a #special word in #socialMedia');