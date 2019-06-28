function solve(numOne, numTwo, numThree) {
  let sum = (a ,b) => {
      return a + b;
  }
  let subtract = (a, b) => {
      return a - b;
  }
  console.log(subtract(sum(numOne, numTwo), numThree))
}

solve(1,
    17,
    30
    
    );