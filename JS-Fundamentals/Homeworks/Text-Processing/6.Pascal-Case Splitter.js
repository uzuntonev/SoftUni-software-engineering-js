function solve(input) {
    let pattern = /(?=[A-Z])/g;
    // let match = input.match(pattern);
    // console.log(match.join(', '))
  
    let a = input.split(pattern)
    console.log(a.join(', '))
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');