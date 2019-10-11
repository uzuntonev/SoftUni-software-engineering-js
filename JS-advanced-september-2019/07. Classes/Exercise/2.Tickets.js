/* eslint-disable no-new */

function data(array, criterion) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }
    const sorting = criterion === 'price' 
        ? (a, b) => a[criterion] - b[criterion]
        : (a, b) =>a[criterion].localeCompare(b[criterion]);

    return array
        .map(e => new Ticket(...e.split('|')))
        .sort(sorting);
}

// const DB = data(
//     [ 'Philadelphia|94.20|available',
//         'New York City|95.99|available',
//         'New York City|95.99|sold',
//         'Boston|126.20|departed',
//     ],
//     'destination'
// );
const DB = data(
    [ 'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed' ],
    'price'

);

console.log(DB); 
