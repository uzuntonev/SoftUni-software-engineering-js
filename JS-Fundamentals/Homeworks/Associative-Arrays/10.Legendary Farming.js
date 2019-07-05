function solve(input) {
    let arr = input.split(' ');
    let list = {
        shards: 0,
        motes: 0,
        fragments: 0
    };

    for (let i = 0; i < arr.length; i += 2) {
        let item = arr[i + 1].toLowerCase();
        if (!(item in list)) {
            list[item] = Number(arr[i]);
        } else {
            list[item] += Number(arr[i]);
        }
        if (list.motes >= 250) {
            console.log(`Dragonwrath obtained!`);
            list.motes -= 250;
            break;
        }
        if (list.fragments >= 250) {
            console.log(`Valanyr obtained!`);
            list.fragments -= 250;
            break;
        }
        if (list.shards >= 250) {
            console.log(`Shadowmourne obtained!`);
            list.shards -= 250;
            break;
        }
    }

    let materials = [];
    let junk = [];
    Object.entries(list)
        .forEach(e => {
            if (e[0] === 'motes' || e[0] === "fragments" || e[0] === 'shards') {
                materials.push([e[0], e[1]]);
            } else {
                junk.push([e[0], e[1]]);
            }
        });
    materials
        .sort((a, b) => a[0].localeCompare(b[0]))
        .sort((a, b) => b[1] - a[1])
        .forEach(e => console.log(`${e[0]}: ${e[1]}`));
    junk
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(e => console.log(`${e[0]}: ${e[1]}`))
}

// solve('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
solve('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')