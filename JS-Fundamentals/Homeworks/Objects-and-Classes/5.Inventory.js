function solve(arr) {
    let heros = [];
    for (let el of arr) {
        let [name, level, items] = el.split(' / ');
        let hero = {};
        hero.name = name;
        hero.level = Number(level); 
        hero.items = items.split(', ').sort((a, b) => a.localeCompare(b));
        heros.push(hero);
    }
    heros.sort((a, b) => a.level - b.level);
    for (let i = 0; i < heros.length; i++) {
        console.log(`Hero: ${heros[i].name}`);
        console.log(`level => ${heros[i].level}`);
        console.log(`items => ${heros[i].items.join(', ')}`);    
    }
}

solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]);