(function (){
    Array.prototype.last = function () {
        return this[this.length - 1];
    };
    
    Array.prototype.skip = function (n){
        return this.slice(n);
    };
    
    Array.prototype.take = function (n) {
        return this.slice(0, n);
    };
    
    Array.prototype.sum = function () {
        return this.reduce((acc, curr) => acc + curr, 0);
    };
    
    Array.prototype.average = function () {
        return this.sum() / this.length;
    };
    
}());

const test = [ 2, 3, 4, 5, 1 ];
console.log(test.average()); 
