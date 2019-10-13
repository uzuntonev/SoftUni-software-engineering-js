class List {
    constructor() {
        this.list = [];
        this.size = 0;
    }

    add(value) {
        this.list.push(value);
        this.list.sort((a, b) => a - b);
        this.size = this.list.length;
    }

    remove(index) {
        if (index > this.list.length || index < 0) {
            throw new Error('Index is out of range');
        }
        this.list.splice(index, 1);
        this.size = this.list.length;
    }

    get(index) {
        if (index > this.list.length || index < 0) {
            throw new Error('Index is out of range');
        }
        return this.list[index];
    }

}


const list = new List();
list.add(5);
list.add(6);
list.add(7);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size); 
