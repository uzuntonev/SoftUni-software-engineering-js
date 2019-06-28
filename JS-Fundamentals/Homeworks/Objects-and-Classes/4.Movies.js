function solve(arr) {
    let result = [];
    arr.forEach((element) => {
        if (element.includes('addMovie')) {
            let movie = element.split(' ').slice(1).join(' ');
            result.push({
                name: movie
            });
        } else if (element.includes('directedBy')) {
            const index = element.indexOf('directedBy');
            const movie = element.slice(0, index - 1);
            const director = element.slice(index + 'directedBy'.length + 1);
            result.forEach(element => {
                if (element.name === movie) {
                    element.director = director;
                }
            });
        } else if (element.includes('onDate')) {
            const index = element.indexOf('onDate');
            const movie = element.slice(0, index - 1);
            const date = element.slice(index + 'onDate'.length + 1);
            result.forEach(element => {
                if (element.name === movie) {
                    element.date = date;
                }
            });
        }
    });
    // Object.size = function (obj) {
    //     let size = 0, key;
    //     for (key in obj) {
    //         if (obj.hasOwnProperty(key)) size++;
    //     }
    //     return size;
    // };

    // result.map(element => {
    //     if (Object.size(element) == 3) {
    //         console.log(JSON.stringify(element))
    //     }
    // })
    for (const element of result) {
        let keys = Object.keys(element).length;
        if(keys === 3){
            console.log(JSON.stringify(element))
        }
    }
}

//check is object has 

// result.forEach(e => {
//     if (e.hasOwnProperty("name") && e.hasOwnProperty("date") && e.hasOwnProperty("director")) {
//         console.log(JSON.stringify(e));
//     }
// })
solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen']
);