(function (){
    String.prototype.ensureStart = function (str) {
        if(!this.startsWith(str)){
            return `${str}${this}`;
        }
        return this.toString();
    };
    
    String.prototype.ensureEnd = function (str) {
        if(!this.endsWith(str)){
            return `${this}${str}`;
        }
        return this.toString();
    };
    
    String.prototype.isEmpty = function (){
        return this.length === 0;
    };
    
    String.prototype.truncate = function (n) {
        if(n < 4){
            return '.'.repeat(n);
        }
        if(this.length <= n){
            return this.toString();
        }
        const index = this.substr(0, n - 2).lastIndexOf(' ');
        if(index === - 1){
            return `${this.substr(0, n - 3)}...`;
        }
        return `${this.substr(0, index)}...`;
    };
    
    String.format = function (string, ...arr){
        return arr.reduce((acc, curr, i) => acc.replace(`{${i}}`, curr), string);
    };
}());


let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format(
    'The {0} {1} fox',
    'quick', 'brown'
);
console.log(str); 

str = String.format(
    'jumps {0} {1}',
    'dog'
);

console.log(str); 
