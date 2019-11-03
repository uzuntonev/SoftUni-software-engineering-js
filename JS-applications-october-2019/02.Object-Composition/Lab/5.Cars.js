function solve(input){
    const factory = new Map();
    
    function create(name, _, parent) {
        parent = factory.get(parent) || null;
        const obj = Object.create(parent);
        factory.set(name, obj);
    }

    function set(name, prop, val) {
        const obj = factory.get(name);
        obj[prop] = val;
    }

    function print(name){
        const obj = factory.get(name);
        const output = [];
        for (const key in obj) {
            output.push(`${key}:${obj[key]}`); 
        }
        console.log(output.join(', '));
    }

    const map = {
        create,
        set,
        print,
    };

    input.forEach(e => {
        const [ command, ...params ] = e.split(' ');
        map[command](...params);  

    });
}



// function processCommands(commands) {

//     const map = new Map();

//     const cmdExecutor = {
//         create: function ([ objName, inherits, parent ]) {
//             parent = parent ? map.get(parent) : null;

//             const newObj = Object.create(parent);
//             map.set(objName, newObj);

//             return newObj;
//         },

//         set: function ([ objName, key, value ]) {
//             const obj = map.get(objName);
//             obj[key] = value;
//         },

//         print: function ([ objName ]) {
//             const obj = map.get(objName), objects = [];
//             for (const key in obj) {
//                 objects.push(`${key}:${obj[key]}`);
//             }
//             console.log(objects.join(', '));
//         },
//     };

//     for (const command of commands) {
//         const commandParameters = command.split(' ');
//         const action = commandParameters.shift();
//         cmdExecutor[action](commandParameters);
//     }

// }


solve([ 'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2' ]); 
