
function solve(data, criteria) {
    function splitByCriteria(string) {
        return string.split('-');
    }

    function filterEmployee(prop, value, el) {
        return el[prop] === value;
    }

    function mapEmployee(el, i) {
        return `${i}. ${el.first_name} ${el.last_name} - ${el.email}`;
    }

    return criteria === 'all'
        ? JSON.parse(data)
            .map(mapEmployee)
            .join('\n')
        : JSON.parse(data)
            .filter(filterEmployee.bind(undefined, ...splitByCriteria(criteria)))
            .map(mapEmployee)
            .join('\n');
}



// function solve(data, criteria) {
//     const [ key, value ] = criteria.split('-');
//     let i = 0;
//     return JSON.parse(data).reduce((acc, curr) => {
//         if(curr[key] === value){
//             acc.push(`${i++}. ${curr.first_name} ${curr.last_name} - ${curr.email}`);
//         }
//         return acc;
//     }, []).join('\n');
// }

console.log(solve(
    `[{
        "id": "1",
        "first_name": "Ardine",
        "last_name": "Bassam",
        "email": "abassam0@cnn.com",
        "gender": "Female"
      }, {
        "id": "2",
        "first_name": "Kizzee",
        "last_name": "Jost",
        "email": "kjost1@forbes.com",
        "gender": "Female"
      },  
    {
        "id": "3",
        "first_name": "Evanne",
        "last_name": "Maldin",
        "email": "emaldin2@hostgator.com",
        "gender": "Male"
      }]`, 
    'gender-Female'
    
));

console.log(solve(
    `[{
        "id": "1",
        "first_name": "Kaylee",
        "last_name": "Johnson",
        "email": "k0@cnn.com",
        "gender": "Female"
      }, {
        "id": "2",
        "first_name": "Kizzee",
        "last_name": "Johnson",
        "email": "kjost1@forbes.com",
        "gender": "Female"
      }, {
        "id": "3",
        "first_name": "Evanne",
        "last_name": "Maldin",
        "email": "emaldin2@hostgator.com",
        "gender": "Male"
      }, {
        "id": "4",
        "first_name": "Evanne",
        "last_name": "Johnson",
        "email": "ev2@hostgator.com",
        "gender": "Male"
      }]`,
    'all'
)); 
