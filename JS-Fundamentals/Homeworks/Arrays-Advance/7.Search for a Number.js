function solve(firstArr, secondArr) {
    let [takedElements, deletedElements, searchingElement] = secondArr;
    let counter = 0;
    let newArr = firstArr.slice(0, takedElements);

    newArr.splice(0, deletedElements);
    // for (let i = 0; i < newArr.length; i++) {

    //     if (newArr.includes(searchingElement)) {
    //         newArr.splice(newArr.indexOf(searchingElement), 1);
    //         counter++;
    //     }
    // }
    let filtered = newArr.filter(el => el == searchingElement);
    
    console.log(`Number ${searchingElement} occurs ${filtered.length} times.`)



}

solve([5, 2, 3,3, 4, 1, 6],
    [5, 2, 3]
);