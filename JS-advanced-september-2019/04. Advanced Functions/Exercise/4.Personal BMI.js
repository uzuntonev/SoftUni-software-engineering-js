function solve() {
    function calcBMI(weight, height) {
        height /= 100;
        return Number((weight / (height ** 2)).toFixed());
    }

    function statusBMI(n) {
        let status;

        if (n < 18.5) {

            status = 'underweight';
        } else if (n < 25) {

            status = 'normal';
        } else if (n < 30) {

            status = 'overweight';
        } else if (n >= 30) {

            status = 'obese';
        }
        return status;
    }

    function createPatient(info) {
        const [ name, age, weight, height ] = info;
        const personalInfo = {
            age,
            weight,
            height,
        };

        const person = {
            name: name,
            personalInfo,
            BMI: calcBMI(weight, height),
            status: statusBMI(calcBMI(weight, height)),
        };

        if (person.status === 'obese') {
            person.recommendation = 'admission required';
        }

        return person;
    }

    return createPatient([ ...arguments ]);
}

// solve('Peter', 29, 75, 182);
solve('Honey Boo Boo', 9, 57, 137);

const chart = solve('Honey Boo Boo', 9, 57, 137);
console.log(chart.BMI);
