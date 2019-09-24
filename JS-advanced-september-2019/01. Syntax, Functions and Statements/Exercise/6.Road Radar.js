function solve(arr) {
    const [ speed, area ] = arr;
    const speedLimit = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    };

    function speedAlert(value) {
        if (value - speedLimit[area] <= 0) {
            return '';
        }
        if ((value - speedLimit[area]) <= 20) {
            return 'speeding';
        } else if (((value - speedLimit[area]) <= 40)) {
            return 'excessive speeding';
        } 
        return 'reckless driving';
    }
    console.log(speedAlert(speed));
}

solve([ 60, 'city' ]);
