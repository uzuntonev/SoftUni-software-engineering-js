function solve(num) {
    let output = a => {
        let strOfNums = a.toString();
        let evenSum = 0;
        let oddSum = 0;
        for (let i = 0; i < strOfNums.length; i++) {

            if (strOfNums[i] % 2 == 0) {
                evenSum += Number(strOfNums[i]);
            } else {
                oddSum += Number(strOfNums[i]);
            }
        }
        return `Odd sum = ${oddSum}, Even sum = ${evenSum}`
    }
    console.log(output(num))
}

solve(3495892137259234);