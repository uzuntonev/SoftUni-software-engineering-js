// const act = {
//     add: (arr, str) => [ ...arr, str ],
//     remove: (arr, str) => arr.filter(x => x !== str),
//     print: (arr, _) => console.log(arr.join(',')), 
// };

function solve(data){
    const map = {
        add: function (arr, str){
            return [ ...arr, str ];
        },
        remove: function (arr, str) {
            return arr.filter(x => x !== str);
        },
        print: function (arr, _){
            console.log(arr.join(','));
            return arr;
        },
    };

    let output = [];
    return data.map(x => {
        const [ command, string ] = x.split(' ');
        output = map[command](output, string);
    });

    // return data
    //     .map(x => x = x.split(' '))
    //     .reduce((acc, [ command, string ]) => map[command](acc, string), []);
}

// solve([ 'add hello', 'add again', 'remove hello', 'add again', 'print' ]); 
// solve([ 'add pesho', 'add george', 'add peter', 'remove peter','print' ]);
solve([ 'add JSFundamentals', 'print', 'add JSAdvanced', 'print','add JSApplications','print' ]);
