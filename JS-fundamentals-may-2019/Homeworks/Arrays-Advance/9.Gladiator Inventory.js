function solve(input) {
    let inventory = input.shift().split(' ');

    let buy = boughtItem => {
        if (!inventory.includes(boughtItem)) {
            inventory.push(boughtItem);
        }
    }

    let trash = trashedItem => {
        if (inventory.includes(trashedItem)) {
            let index = inventory.indexOf(trashedItem);
            inventory.splice(index, 1);
        }
    }

    let repair = repairItem => {
        if (inventory.includes(repairItem)) {
            let index = inventory.indexOf(repairItem);
            inventory.splice(index, 1);
            inventory.push(repairItem);
        }
    }

    let upgrade = upgradeItem => {
        let [item, upgrade] = upgradeItem.split('-');
        if (inventory.includes(item)) {
            let index = inventory.indexOf(item);
            inventory.splice(index + 1, 0, `${item}:${upgrade}`);
        }
    }

    for (let element of input) {
        let [command, item] = element.split(' ');
        if (command === 'Buy') {
            buy(item);
        } else if (command === 'Trash') {
            trash(item);
        } else if (command === 'Repair') {
            repair(item);
        } else if (command === 'Upgrade') {
            upgrade(item);
        }
    }
    console.log(inventory.join(' '))
}

solve([
    'SWORD Spear Shield',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']
);

solve(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']
);