function solve(data) {
    function area(){
        return this.width * this.height;
    }

    function compareTo(obj){
        return obj.area() - this.area() || obj.width - this.width;
    }

    return data
        .map(x => ({
            width: x[0],
            height: x[1],
            area,
            compareTo,
        }))
        .sort((a, b) => a.compareTo(b));

    // const template = {
    //     width: 0,
    //     height: 0,
    //     area,
    //     compareTo,
    // };
    
    // return data.map(x => Object.assign(Object.create(template), { width: x[0], height: x[1] }));
}

// console.log(solve([ [ 10,5 ],[ 5,12 ] ])); 
console.log(solve([ [ 1,20 ],[ 20,1 ],[ 5,3 ],[ 5,3 ] ])); 
