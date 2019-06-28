function solve(numOne, numTwo, numThree) {
   let output = (a,b,c) => {
       return Math.min(a,b,c);
   } 
   console.log(output(numOne,numTwo,numThree))
}

solve(600,
    342,
    123
    );