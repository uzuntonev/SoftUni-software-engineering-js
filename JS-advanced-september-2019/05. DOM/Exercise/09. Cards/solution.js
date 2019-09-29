function solve() {
    const history = document.querySelector('#history');
    const spanL = document.querySelector('#result').firstElementChild;
    const spanR = document.querySelector('#result').lastElementChild;
    let first;
    let second;

    [ ...document.querySelectorAll('img') ].forEach(e => e.addEventListener('click', (ev) => {
        ev.target.src = 'images/whiteCard.jpg';
        if (ev.target.parentElement.id === 'player1Div'){
            spanL.innerHTML = ev.target.name;
            first = ev.target;
        }else if (ev.target.parentElement.id === 'player2Div'){
            spanR.innerHTML = ev.target.name;
            second = ev.target;
        }

        if (spanR.innerHTML !=='' && spanL.innerHTML !== ''){
            if (Number(first.name) > Number(second.name)){
                first.style.border = '2px solid green';
                second.style.border = '2px solid red';

            }else {
                second.style.border = '2px solid green';
                first.style.border = '2px solid red';
            }
            history.innerHTML += `[${first.name} vs ${second.name}] `;
            spanR.innerHTML = '';
            spanL.innerHTML = '';
        }
    }));
}
