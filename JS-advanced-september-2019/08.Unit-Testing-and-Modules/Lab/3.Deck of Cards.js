function printDeckOfCards(cards) {
    const cardsFaces = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ];
    const cardsSuits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663',
    };

    // Must be console.log for Judge not return !!!
    
    return cards.reduce((acc, curr) => {
        const face = curr.slice(0, curr.length - 1);
        const suit = curr.slice(-1);
        try {
            if (!cardsFaces.includes(face) || !cardsSuits[suit]) {
                throw new Error(`Invalid card: ${curr}`);
            }
            acc.push(`${face}${cardsSuits[suit]}`);
        }catch(error){
            console.log(error.message);
        }
        return acc;
        
    }, []).join(' ');
}

console.log(printDeckOfCards([ 'AS', '10D', 'KH', '2C' ]));

