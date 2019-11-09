function solve(){
    class Melon {
        constructor(weight, melonSort) {
            if(new.target === Melon){
                throw new Error ('Abstract class cannot be instantiated directly');
            }
            this.weight = weight;
            this.melonSort = melonSort;
            this.element = this.constructor.name.slice(0, -5);
        }

        get elementIndex(){
            return this.weight * this.melonSort.length;
        }

        toString(){
            return `Element: ${this.element}
Sort: ${this.melonSort}
Element Index: ${this.elementIndex}`;
        }
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }

    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }

    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }

    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }

    class Melolemonmelon extends Watermelon{
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = 'Water';
            this.elements = [ 'Fire', 'Earth', 'Air', 'Water' ];
            this.index = 0;
        }
        morph(){
            if(this.index >= this.elements.length){
                this.index = 0;
            }
            this.element = this.elements[this.index++];
        }
    }

    return {
        Melon,
        Watermelon,
        Firemelon,
        Earthmelon,
        Airmelon,
        Melolemonmelon,
    };
}
const Melolemonmelon = solve().Melolemonmelon;
const watermelon = new Melolemonmelon(12.5, 'Kingsize');
watermelon.morph();
watermelon.morph();





console.log(watermelon.toString());

