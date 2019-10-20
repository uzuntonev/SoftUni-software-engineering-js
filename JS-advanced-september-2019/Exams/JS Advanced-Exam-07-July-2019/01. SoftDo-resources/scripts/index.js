function mySolution() {
    const pendingQuest = document.querySelector('#pendingQuestions');
    const openQuest = document.querySelector('#openQuestions');
    const inputSection = document.querySelector('#inputSection');
    const text = inputSection.querySelector('textarea');
    const username = inputSection.querySelector('input');
    const btn = inputSection.querySelector('button');

    function createEl(tag, content, className) {
        const el = document.createElement(tag);
        if (className) {
            el.classList.add(className);
        }
        if (content) {
            el.innerHTML = content;
        } else {
            if (tag === 'span') {
                el.innerHTML = 'Anonymous';
            }
        }
        return el;
    }

    function handlerInput() {
        const div = createEl('div', undefined, 'pendingQuestion');
        const img = document.createElement('img');
        const divAction = createEl('div', undefined, 'actions');
        const btnArchive = createEl('button', 'Archive', 'archive');
        const btnOpen = createEl('button', 'Open', 'open');

        img.src = './images/user.png';
        img.width = '32';
        img.height = '32';
        
        div.appendChild(img);
        div.appendChild(createEl('span', username.value));
        div.appendChild(createEl('p', text.value));
        divAction.appendChild(btnArchive);
        divAction.appendChild(btnOpen);
        div.appendChild(divAction);
        
        pendingQuest.appendChild(div);
        username.value = '';
        text.value = '';

        btnArchive.addEventListener('click', (ev)=>{
            ev.target.parentNode.parentNode.remove(); 
        });

        btnOpen.addEventListener('click', (ev) => {
            ev.target.parentNode.parentNode.classList.remove('pendingQuestion');
            ev.target.parentNode.parentNode.classList.add('openQuestion');
            openQuest.appendChild(ev.target.parentNode.parentNode);

            const divAct = ev.target.parentNode.parentNode.querySelector('div');
            divAct.innerHTML = '';
            const btnReply = createEl('button', 'Reply', 'reply');

            divAct.appendChild(btnReply);

            const divReply = createEl('div', undefined, 'replySection');
            const input = createEl('input', undefined, 'replyInput');
            const btnSendReply = createEl('button', 'Send', 'replyButton');
            const ol = createEl('ol', undefined, 'reply');

            input.type = 'text';
            input.placeholder = 'Reply to this question here...';
            ol.type = '1';
            
            divReply.appendChild(input);
            divReply.appendChild(btnSendReply);
            divReply.appendChild(ol);
            divReply.style.display = 'none';
            divAct.parentNode.appendChild(divReply);
        });
    }

    
    function handler(ev) {
        if (ev.target.innerHTML === 'Reply') {
            ev.target.parentNode.parentNode.querySelector('.replySection').style.display = 'block';
            ev.target.innerHTML = 'Back';
        } else if (ev.target.innerHTML === 'Back') {
            ev.target.parentNode.parentNode.querySelector('.replySection').style.display = 'none';
            ev.target.innerHTML = 'Reply';
        }

        const answer = ev.target.parentNode.querySelector('input');
        if (ev.target.innerHTML === 'Send' && answer.value !== '') {
            ev.target.parentNode.querySelector('ol')
                .appendChild(createEl('li', answer.value));
            answer.value = '';
        }
    }


    btn.addEventListener('click', handlerInput);
    document.addEventListener('click', handler);
}

