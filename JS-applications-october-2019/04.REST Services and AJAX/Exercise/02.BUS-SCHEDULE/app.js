function solve() {
    const info = document.querySelector('#info > span');
    const btnDepart = document.querySelector('#depart');
    const btnArrive = document.querySelector('#arrive');

    let currentId = 'depot';
    let currentName;
    function depart() {
        fetch(`https://judgetests.firebaseio.com/schedule/${currentId}.json`)
            .then(res => {
                if(!res.ok){
                    info.textContent = 'Error';
                    throw new Error ('Wrong Id !');
                }
                return res.json();
            })
            .then(data => {
                const { name, next } = data;
                currentId = next;
                currentName = name;
                info.textContent = `Next stop ${currentName}`;
                btnDepart.disabled = true;
                btnArrive.disabled = false;
            })
            .catch(console.error);
    }

    function arrive() {
        info.textContent = `Arriving at ${currentName}`;
        btnDepart.disabled = false;
        btnArrive.disabled = true;
    }

    return {
        depart,
        arrive,
    };
}

const result = solve();
