function solve(steps, footprint, speedKmPerH) {

    const tens = (n) => n < 10 ? `0${n}` : n;
    const distanceInMeters = steps * footprint;
    const distanceInKm = distanceInMeters / 1000;
    const rest = Math.floor(distanceInMeters / 500);

    let seconds = distanceInKm / speedKmPerH * 3600 + rest * 60;
    let minutes = Math.floor(seconds / 60);
    const hours = Math.floor(seconds / 3600);
    
    if (minutes >= 60) {
        minutes -= hours * 60;
    }
    
    seconds -= (minutes * 60) + (hours * 3600);

    console.log(`${tens(hours)}:${tens(minutes)}:${Math.ceil(tens(seconds))}`);
}

solve(7300, 0.60, 5);
solve(2564, 0.70, 5.5);
