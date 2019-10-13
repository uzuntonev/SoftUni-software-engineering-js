function solve() {
    const history = document.querySelector('#history');
    const spanL = document.querySelector('#result').firstElementChild;
    const spanR = document.querySelector('#result').lastElementChild;
    let firstCard;
    let secondCard;

    const playerIDs = {
        player1Div: (target) => {
            spanL.innerHTML = target.name;
            firstCard = target;
        },
        player2Div: (target) => {
            spanR.innerHTML = target.name;
            secondCard = target;
        },
    };

    function battle(a, b) {
        if (Number(a.name) > Number(b.name)) {
            return [ a, b ];
        }
        return [ b, a ];
    }

    function setBorder(a, b) {
        a.style.border = '2px solid green';
        b.style.border = '2px solid red';
    }

    function addToHistory(firstCard, secondCard){
        history.innerHTML += `[${firstCard.name} vs ${secondCard.name}] `;
        spanR.innerHTML = '';
        spanL.innerHTML = '';
    }

    function handler(ev) {
        ev.target.src = 'images/whiteCard.jpg';
        playerIDs[ev.target.parentElement.id](ev.target);

        if (spanR.innerHTML !== '' && spanL.innerHTML !== '') {
            setBorder(...battle(firstCard, secondCard));
            addToHistory(firstCard, secondCard);
        }
        
    }

    document.addEventListener('click', handler);
}
