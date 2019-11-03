function spy(obj, method){
    const original = obj[method];

    const result = { count: 0 };

    obj[method] = function (){
        result.count++;
        original.apply(obj, arguments);
    };
    return result;
}

// function spy(object, method){
//     const result = { count: 0 };
//     object.result = result;
//     return new Proxy(object , {
//         get: function (obj, prop) {
//             if(Reflect.get(obj, prop)){
//                 if(method === prop){
//                     result.count++;
//                 }
//                 return Reflect.get(obj, prop);
//             }
//             console.log(`Prop ${prop} is not found!`);
//             return () => {};
//         },
//     });
// }



const obj = { method: ()=> console.log('invoked') };
const spy1 = spy(obj,'method');

// obj.method();
// obj.method();
// obj.method();

// spy1.method();
// spy1.method();
// spy1.method();


// console.log(spy1.result); // { count: 3 }


const spy2 = spy(console,'log');

console.log(spy2); // { count: 1 }
console.log(spy2); // { count: 2 }
console.log(spy2); // { count: 3 }
