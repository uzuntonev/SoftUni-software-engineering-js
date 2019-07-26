function solve(input) {
    const text = input.shift();
    const pattern = /(?<=\s)([a-z\d]+)([\d\w\.\-]+)([a-z\d])\@[a-z]+\-?[a-z]+\.[a-z]+(\.[a-z]+)?/g;
    let result;

    while (result = pattern.exec(text)) {
        console.log(result[0])
    }
}

solve(['Please contact us at: support@github.com.', 'end']);
solve(['Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.', 'end']);
solve(['Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.', 'end']);


