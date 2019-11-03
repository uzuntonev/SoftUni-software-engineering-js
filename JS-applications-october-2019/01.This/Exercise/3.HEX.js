class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return `0x${this.value.toString(16).toUpperCase()}`;
    }

    plus(input) {
        return new Hex(this.value + input.valueOf());
    }

    minus(input) {
        return new Hex(this.value - input.valueOf());
    }

    parse(string) {
        return parseInt(string, 16);
    }
}

const FF = new Hex(255);
console.log(FF.toString());
// FF.valueOf() + 1 == 256;
const a = new Hex(10);
const b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
console.log(FF.parse('0xFF')); 
