function solve() {
    let truthyAnswers = 0;
    const answers = {
        first: 'onclick',
        second: 'JSON.stringify()',
        third: 'A programming API for HTML and XML documents',
    };
    [ ...document.querySelectorAll('.answer-text') ]
        .forEach(e => e.addEventListener('click', takeAnswers));
    const sections = [ ...document.querySelectorAll('section') ];
    const result = document.querySelector('#results');

    sections[0].style.display = 'block';
    function takeAnswers(ev) {
    
        const value = ev.currentTarget.innerHTML;
        if(sections[0].style.display === 'block'){
            if(value === answers.first){
                truthyAnswers++;
            }
            sections[0].style.display = 'none';
            sections[1].style.display = 'block';
            // sections[0].classList.add('hidden');
            // sections[1].classList.remove('hidden');
        }else if (sections[1].style.display === 'block'){
            if(value === answers.second){
                truthyAnswers++;
            }
            sections[1].style.display = 'none';
            sections[2].style.display = 'block';
            // sections[1].classList.add('hidden');
            // sections[2].classList.remove('hidden');
        }else if (sections[2].style.display === 'block'){
            if(value === answers.third){
                truthyAnswers++;
            }
            sections[2].style.display = 'none';
            // sections[2].classList.add('hidden');
        
            truthyAnswers === 3 
                ? result.firstElementChild.firstElementChild.innerHTML = 'You are recognized as top JavaScript fan!'
                : result.firstElementChild.firstElementChild.innerHTML = `You have ${truthyAnswers} right answers`;
            result.style.display = 'block';
        }
    }
}


