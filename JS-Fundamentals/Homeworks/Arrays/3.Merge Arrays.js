function solve(firstArr,secondArr) {
    let newArr = [];
    for (let i = 0; i < firstArr.length; i++) {
        if ( i % 2 == 0){
            newArr.push(Number(firstArr[i]) + Number(secondArr[i]))
        }else {
            newArr.push(firstArr[i] + secondArr[i]);
        }
        
    }
    console.log(newArr.join(' - '))
}

solve(["5", "15", "23", "56", "35"],
["17", "22", "87", "36", "11"]
);