// if n = 64 that game call tower of Bahra and to be complete need 585 billona years !
function towerOfHanoi(n) {
    if (n === 0) {
        return 0;
    } 
    return 1 + (2 * towerOfHanoi(n - 1));
    
}

const output = towerOfHanoi(64);
const hours = output/60/60;
const days = hours / 24;
const years = days / 365;
console.log(); 
