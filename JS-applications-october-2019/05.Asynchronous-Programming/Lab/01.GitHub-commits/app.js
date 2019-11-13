async function loadCommits() {
    const html = {
        username: document.querySelector('#username'),
        repo: document.querySelector('#repo'),
        commits: document.querySelector('#commits'),
    };

    const url = `https://api.github.com/repos/${html.username.value}/${html.repo.value}/commits`;

    html.commits.innerHTML = '';
    let commits;
    try {
        commits = await fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`${JSON.stringify({ status: res.status, statusText: res.statusText })}`);
                }
                return res;
            })
            .then(res => res.json());
    } catch (err) {
        const { status, statusText } = JSON.parse(err.message);
        commits = [ {
            commit: {
                author: { name: 'Error' },
                message: `${status} (${statusText})`,
            },
        } ];
    }

    commits
        .map(x => `${x.commit.author.name}: ${x.commit.message}`)
        .forEach(x => {
            const li = document.createElement('li');
            li.textContent = x;
            html.commits.appendChild(li);
        });
}




