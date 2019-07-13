function solve(input) {
    let arr = input[0].split(', ');
    const list = {};
    for (const line of arr) {
        if (line.includes('-')){
            let [game, price] = line.split('-');
            if (!(game in list)){
                list[game] = {
                    price: price,
                    dlc: ''
                };
            }
        }else if (line.includes(':')){
            let [game, dlc] = line.split(':');
            if(game in list){
                list[game].dlc = dlc;
                list[game].price *= 1.2;
            }
        }
    }
    for (const key in list) {
        if (list.hasOwnProperty(key)) {
            if (list[key].dlc == ''){
                list[key].price *= 0.8;
            }else {
                list[key].price *= 0.5;
            }
        }
    }
    Object.entries(list)
        .filter(e => e[1].dlc != '')
        .sort((a, b) => a[1].price - b[1].price)
        .forEach(e => console.log(`${e[0]} - ${e[1].dlc} - ${e[1].price.toFixed(2)}`))
    Object.entries(list)
        .filter(e => e[1].dlc == '')
        .sort((a, b) => b[1].price - a[1].price)
        .forEach(e => console.log(`${e[0]} - ${e[1].price.toFixed(2)}`))
}

// solve([ 'WitHer 3-50, FullLife 3-60, WitHer 3:Blood and Beer, Cyberfunk 2077-120, League of Leg Ends-10, League of Leg Ends:DoaT' ]
// );
solve([ 'Center Strike-14.99, FortLite-25, BattleShield 5-64.74, BattleShield 5:CoD edition, Dog of War-45, Dead Red Redemption-100, Dead Red Redemption:no DLC' ]
)