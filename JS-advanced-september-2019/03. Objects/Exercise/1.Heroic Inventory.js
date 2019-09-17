function solve(input) {

    class Hero {
        constructor(name, level, items) {
            this.name = name,
            this.level = level,
            this.items = items;
        }
    }

    const output = [];

    for (const line of input) {
        let [ name, level, items ] = line.split(' / ');
        level = Number(level);
        items === undefined
            ? items = []
            : items = items.split(', ');

        const hero = new Hero(name, level, items);
        // const obj = {
        //     name: name,
        //     level: level,
        //     items: items
        // };
        output.push(hero);
    }
    console.log(JSON.stringify(output));
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara' ]);
