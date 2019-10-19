function solve() {
    const string = document.querySelector('#string');
    const text = document.querySelector('#text');
    const result = document.querySelector('#result');

    function findCoordinates(text, direction) {
        const pattern = /(north|east)[\s\S]*?([0-9]{2})[^,]*?,[^,]*?([0-9]{6})/gim;
        let north;
        let east;
        while ((valid = pattern.exec(text)) !== null) {
            const northOrEast = valid[1];

            if (northOrEast.toLowerCase() === 'north') {
                north = `${valid[2]}.${valid[3]} N`;
            } else if (northOrEast.toLowerCase() === 'east') {
                east = `${valid[2]}.${valid[3]} E`;
            }
        }
        return [ north, east ];
    }

    function findMsg(text, str) {
        const msg = text.slice(text.indexOf(str) + str.length, text.lastIndexOf(str));
        return [ `Message: ${msg}` ];
    }
    function creatP(content) {
        const p = document.createElement('p');
        p.innerHTML = content;
        return p;
    }

    [ ...findCoordinates(text.value), ...findMsg(text.value, string.value) ].forEach(e => {
        result.appendChild(creatP(e));
    });
}
