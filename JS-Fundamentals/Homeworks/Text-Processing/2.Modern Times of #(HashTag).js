function solve(input) {
    let pattern = /#[A-Za-z]+/g;
    let match = input.match(pattern);
    match.forEach(e => {
        let output = e.replace('#', '');
        console.log(output)
    });
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');