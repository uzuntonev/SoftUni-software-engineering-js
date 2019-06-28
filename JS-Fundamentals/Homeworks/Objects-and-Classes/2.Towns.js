function solve(arr) {
    // class Town {
    //     constructor(town, latitude, longitude) {
    //         this.town = town,
    //             this.latitude = Number(latitude).toFixed(2),
    //             this.longitude = Number(longitude).toFixed(2)
    //     }
    // }
let obj = {};
    for (let el of arr) {
        let [town, latitude, longitude] = el.split(' | ');

        obj.town = town;
        obj.latitude = Number(latitude).toFixed(2);
        obj.longitude = Number(longitude).toFixed(2);
        console.log(obj)
    }
   
}

solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);