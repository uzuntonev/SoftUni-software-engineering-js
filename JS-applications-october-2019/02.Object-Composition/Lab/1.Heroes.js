function solve(){
    function hero(name){
        return {
            name: name,
            health: 100,
        };
    }

    function cast(spell){
        this.mana -= 1;
        console.log(`${this.name} cast ${spell}`);
    }
    
    function fight(){
        this.stamina -= 1;
        console.log(`${this.name} slashes at the foe!`);
    }
    
    function mage(name) {
        return Object.assign(hero(name), { mana: 100 }, { cast });
    }
    
    function fighter(name) {
        return Object.assign(hero(name), { stamina: 100 }, { fight });
    }

    return{
        fighter,
        mage,
    };
}


const create = solve();
const scorcher = create.mage('Scorcher');
scorcher.cast('fireball');
scorcher.cast('thunder');
scorcher.cast('light');

const scorcher2 = create.fighter('Scorcher 2');
scorcher2.fight();

console.log(scorcher2.stamina);
console.log(scorcher.mana);
