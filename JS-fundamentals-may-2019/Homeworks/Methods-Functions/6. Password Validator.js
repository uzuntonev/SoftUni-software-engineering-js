function solve(password) {

    let isValid = true;

    if (password.length < 6 || password.length > 10) {
        console.log('Password must be between 6 and 10 characters');
        isValid = false;
    }


    let patternSymb = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (patternSymb.test(password)) {
        console.log('Password must consist only of letters and digits');
        isValid = false;
    }


    let counterDigits = 0;
    let patternNums = /[1234567890]/;
    for (let symb of password) {
     //let containsNumber = patternNums.test(symb);
        if (patternNums.test(symb)) {

            counterDigits++;
           // containsNumber = false
        }
    }

    if (counterDigits < 2) {
        isValid = false;
        console.log("Password must have at least 2 digits");
    }



    if (isValid) {
        console.log('Password is valid')

    }

}
solve('Pa$s$s')