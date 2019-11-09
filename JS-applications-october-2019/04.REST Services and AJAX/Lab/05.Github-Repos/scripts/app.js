function loadRepos() {
    const username = document.querySelector('#username');
    const list = document.querySelector('#repos');
    const url = `https://api.github.com/users/${username.value}/repos`;
    fetch(url)
        .then(res => res.json())
        // .then(data => console.log(data));
        .then(data => {
            console.log(data); 
            data.forEach(e => {

                const li = document.createElement('li');
                const a = document.createElement('a');
                a.textContent = e.full_name;
                a.href = e.owner.html_url;
                li.appendChild(a);
                list.appendChild(li);
            });
        });
}
