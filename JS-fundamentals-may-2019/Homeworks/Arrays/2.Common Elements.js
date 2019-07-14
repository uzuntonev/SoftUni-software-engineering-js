function solve(firstArr,secondArr) {
    let commonElement;
    for (let i = 0; i < firstArr.length; i++) {
        if(secondArr.includes(firstArr[i])){
            console.log(firstArr[i])
        }   
    }
}

solve(["Hey", "hello", 2, 4, "Pesho", "e"], ["Pecho", 10, "hey", 4, "hello", "2"]);