function solve(input) {
    const first = [ Number(input[0]), Number(input[1]) ];
    const second = [ Number(input[2]), Number(input[3]) ];

    function distance(x1, y1, x2, y2) {

        const firstDistance = x1 - x2;
        const secondDistance = y1 - y2;

        const result = Math.sqrt(Math.pow(firstDistance, 2) + Math.pow(secondDistance, 2));
        return result;
    }

    function print(n, param1, param2) {
        param1 = param1.join(', ');
        param2 = param2.join(', ');
        if (n === parseInt(n)) {
            console.log(`{${param1}} to {${param2}} is valid`);
        } else {
            console.log(`{${param1}} to {${param2}} is invalid`);            
        }
    }

    const a = Number(distance(...first, 0, 0));
    const b = Number(distance(...second, 0, 0));
    const c = Number(distance(...first, ...second));
    print(a, first, [ 0, 0 ]);
    print(b, second, [ 0, 0 ]);
    print(c, first, second); 


}
// solve([ 3, 0, 0, 4 ]);
solve([ 2, 1, 1, 1 ]);


// function distance(x1, y1, x2, y2) {

//     const distX = x1 - x2;
//     const distY = y1 - y2;

//     const result = Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2));
//     return result;
// }

// const a = distance(2, 1, 0, 0);

// console.log(a); 
