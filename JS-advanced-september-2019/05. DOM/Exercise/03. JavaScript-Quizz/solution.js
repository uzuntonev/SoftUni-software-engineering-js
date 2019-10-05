// function solve() {
//     let countAnswers = 0;
//     const answers = {
//         first: 'onclick',
//         second: 'JSON.stringify()',
//         third: 'A programming API for HTML and XML documents',
//     };
//     [ ...document.querySelectorAll('.answer-text') ]
//         .forEach(e => e.addEventListener('click', takeAnswers));
//     const sections = [ ...document.querySelectorAll('section') ];
//     const result = document.querySelector('#results');

//     sections[0].style.display = 'block';
//     function takeAnswers(ev) {
//         const value = ev.target.innerHTML;
//         if(sections[0].style.display === 'block'){
//             if(value === answers.first){
//                 countAnswers++;
//             }
//             sections[0].style.display = 'none';
//             sections[1].style.display = 'block';
//         }else if (sections[1].style.display === 'block'){
//             if(value === answers.second){
//                 countAnswers++;
//             }
//             sections[1].style.display = 'none';
//             sections[2].style.display = 'block';
//         }else if (sections[2].style.display === 'block'){
//             if(value === answers.third){
//                 countAnswers++;
//             }
//             sections[2].style.display = 'none';
        
//             countAnswers === 3 
//                 ? result.firstElementChild.firstElementChild.innerHTML = 'You are recognized as top JavaScript fan!'
//                 : result.firstElementChild.firstElementChild.innerHTML = `You have ${countAnswers} right answers`;
//             result.style.display = 'block';
//         }
//     }
// }


function solve() {
    let clicked = 0;
    let rightAnswers = 0;
    const result = document.getElementById('results');
    const section = document.getElementsByTagName('section');

    const answers = {
        0: 'onclick',
        1: 'JSON.stringify()',
        2: 'A programming API for HTML and XML documents',
    };
    const lastQuestion = Object.keys(answers).length - 1;
 
    const handler = e => {
        const answer = e.target.textContent.trim();
        console.log(answer);
        if (answers[clicked] === answer) {
            rightAnswers++;
        }
 
        if (clicked < lastQuestion) {
            section[clicked].style.display = 'none';
            section[clicked + 1].style.display = 'block';
            clicked++;
        } else {
            section[lastQuestion].style.display = 'none';
            result.style.display = 'block';
            document.getElementsByClassName('results-inner')[0].firstElementChild.textContent =
        rightAnswers === 3 ? 'You are recognized as top JavaScript fan!' : `You have ${rightAnswers} right answers`;
        }
    };
    document.addEventListener('click', handler);
}
