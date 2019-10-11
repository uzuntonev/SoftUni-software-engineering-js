/* eslint-disable no-shadow */
const Extensible = (function (params) {
    let id = 0;
    return class Extensible {
        constructor() {
            this.id = id++;
        }
        extend(obj){
            Object.entries(obj).forEach(([ key, value ]) => {
                if (typeof value === 'function'){
                    Object.getPrototypeOf(this)[key] = value;
                }else {
                    this[key] = value;
                }
            });
        }
    };
}());

const obj1 = new Extensible();
const obj2 = new Extensible();
const obj3 = new Extensible();
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);	
obj1.extend({
    extensionMethod: function () {},
    extensionProperty: 'someString',
});
console.log(obj1.extensionMethod); 
