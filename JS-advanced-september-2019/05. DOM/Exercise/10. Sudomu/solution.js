function solve() {
    let rows = [];
    let matrix = [];
    let cols =[];
    [ ...document.querySelectorAll('button') ][1].addEventListener('click', () => {
        [ ...document.querySelectorAll('input') ].forEach(e => e.value = '');
        document.querySelector('table').style.border = ''; 
        document.querySelector('#check').innerHTML = '';
        rows = [];
        matrix = [];
        cols =[];
    });
    document.querySelectorAll('button')[0].addEventListener('click', () => {
        [ ...document.querySelectorAll('tr') ].slice(2).forEach(e => {
            rows.push([ ...e.children ]
                .reduce((acc, curr) => acc + Number(curr.children[0].value), 0));
           
            matrix.push([ ...e.children ]
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
            document.querySelector('#check p').textContent = 'You solve it! Congratulations!';
        }else {
            document.querySelector('table').style.border = '2px solid red'; 
            document.querySelector('#check p').textContent = 'NOP! You are not done yet...';
        }
    });

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
}

// judge 7/100 I don't why. Looking like it`s work :/
