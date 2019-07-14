function arrManipulator(nums, commands){
    for (let i = 0; i < commands.length; i++) {
        let currentCommandArr = commands[i].split(' ');
        let command = currentCommandArr[0];
 
        if (command === 'add') {
            let index = Number(currentCommandArr[1]);
            let element = Number(currentCommandArr[2]);
            nums.splice(index,0,element);
        } else if (command === 'addMany') {
            currentCommandArr.shift()
            let index = Number(currentCommandArr.shift());
            currentCommandArr = currentCommandArr.map(Number);
            nums.splice(index,0, ...currentCommandArr);
        } else if (command === 'contains') {
            let element = Number(currentCommandArr[1]);
            let index = nums.indexOf(element);
            console.log(index);
        } else if (command === 'remove') {
            let index = Number(currentCommandArr[1]);
            nums.splice(index,1);
        } else if (command === 'shift') {
            let positions = Number(currentCommandArr[1]);
            for (let r = 0; r < positions; r++) {
                let element = nums.shift();
                nums.push(element);
            }
        } else if (command === 'sumPairs') {
            for (let p = 0; p < nums.length; p++) {
                nums[p] = nums[p] + nums[p+1];
                nums.splice(p+1,1);
            }
        } else if (command === 'print') {
            console.log(nums);
            break;
        }
       
    }
}
// solve(
//     [1, 2, 4, 5, 6, 7],
//     ['add 1 8', 'contains 1', 'contains 3', 'print']
// );

arrManipulator(
    [1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
);

// solve(
//     [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
//     ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]);


           //botten line is wrong !!
            //   intArr.splice(index, 0, elements.map(Number).join(' '));