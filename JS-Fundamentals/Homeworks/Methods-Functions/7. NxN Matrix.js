function solve(num) {
    let output = a => {
        return `${a} `.toString().repeat(a);
    }
    for (let i = 0; i < num; i++) {
    console.log(output(num))
  
    }
}

solve(7);