function solve() {
    let rows = [];
    let matrix = [];
    let cols =[];
    
    // Button Clear
    Array.from(document.querySelectorAll('button'))[1].addEventListener('click', () => {
        Array.from(document.querySelectorAll('input')).forEach(e => e.value = '');
        document.querySelector('table').style.border = ''; 
        document.querySelector('#check p').innerHTML = '';
        rows = [];
        matrix = [];
        cols =[];
    });
    // Button Quick check
    document.querySelectorAll('button')[0].addEventListener('click', () => {
        Array.from(document.querySelectorAll('tr')).slice(2).forEach(e => {
            rows.push(Array.from(e.children)
                .reduce((acc, curr) => acc + Number(curr.children[0].value), 0));
           
            matrix.push(Array.from(e.children)
                .map(x => x.children[0].value)); 
        });

        for (let i = 0; i < matrix.length; i++) {
            cols.push(matrix.map(x => Number(x[i])).reduce((a, b) => a + b, 0));
        }

        const current = rows[0];
        const isColInclude = cols.every(e => e === current);
        const isRowInclude = rows.every(e => e === current);
        if (isColInclude && isRowInclude){
            document.querySelector('table').style.border = '2px solid green'; 
            document.querySelector('#check p').innerHTML = 'You solve it! Congratulations!';
        }else {
            document.querySelector('table').style.border = '2px solid red'; 
            document.querySelector('#check p').innerHTML = 'NOP! You are not done yet...';
        }
    });
}

// judge 30/100 I don't why. Looking like it`s work :/

solve();


// $('tbody td input')[0].value = '1';
// $('tbody td input')[1].value = '1';
// $('tbody td input')[2].value = '1';

// $('tbody td input')[3].value = '2';
// $('tbody td input')[4].value = '2';
// $('tbody td input')[5].value = '2';

// $('tbody td input')[6].value = '3';
// $('tbody td input')[7].value = '3';
// $('tbody td input')[8].value = '3';

// $('button').first().trigger('click');

// const test = $('#check p')[0];
    
// console.log(test.textContent === 'NOP! You are not done yet...'); // True !!
