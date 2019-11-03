function solve() {
    function init(a, b, r) {
        this.selector1 = document.querySelector(a);
        this.selector2 = document.querySelector(b);
        this.result = document.querySelector(r);
    }

    function add() {
        this.result.value = Number(this.selector1.value) + Number(this.selector2.value);
    }

    function subtract() {
        this.result.value = -(Number(this.selector2.value) - Number(this.selector1.value));
    }
    const object = {
        init,
        add,
        subtract,
    };
    object.init('#num1', '#num2', '#result');

    document.querySelector('#sumButton').addEventListener('click', add.bind(object));
    document.querySelector('#subtractButton').addEventListener('click', subtract.bind(object));
    
    return object;
}

solve();
