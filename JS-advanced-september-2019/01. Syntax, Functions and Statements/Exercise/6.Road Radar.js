function solve(arr) {
    const [ speed, area ] = arr;
    const areaSpeedLimit = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    };

    function speedAlert(value) {
        if (value - areaSpeedLimit[area] <= 0) {
            return '';
        }
        if ((value - areaSpeedLimit[area]) <= 20) {
            return 'speeding';
        } else if (((value - areaSpeedLimit[area]) <= 40)) {
            return 'excessive speeding';
        } 
        return 'reckless driving';
        
    }

    const processing = {
        motorway: speedAlert(speed),
        interstate: speedAlert(speed),
        city: speedAlert(speed),
        residential: speedAlert(speed),
    };

    console.log(processing[area]);
}

solve([ 40, 'city' ]);
