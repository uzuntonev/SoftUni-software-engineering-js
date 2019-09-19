/* eslint-disable no-undefined */
/* eslint-disable multiline-ternary */
function solve(input) {

    class Hero {
        constructor(name, level, items) {
            this.name = name,
            this.level = level,
            this.items = items;
        }
    }

    const output = input
        .map(e => e.split(' / '))
        .map(e => {
            e[2] === undefined ? e[2] = [] : e[2] = e[2].split(', ');
            return [ e[0], Number(e[1]), e[2] ];
        })
        .reduce((acc, curr) => {
            const hero = new Hero(...curr);
            acc.push(hero);
            return acc;
        },[]);
    console.log(JSON.stringify(output)); 
}


solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara' ]);
