function solve() {
    return {
        selector: undefined,
        data: [],
        id: 0,

        report: function (author, description, reproducible, severity) {
            const bug = {
                id: this.id++,
                author,
                description,
                reproducible,
                severity,
                status: 'Open',
            };

            this.data.push(bug);
            this.output(this.selector);
        },

        setStatus: function (id, newStatus) {
            const bug = this.data.find(x => x.id === id);
            bug.status = newStatus;
            this.output(this.selector);
        },

        remove: function (id) {
            this.data = this.data.filter(x => x.id !== id);
            this.output(this.selector);
        },

        sort: function (method) {
            method = method.toLowerCase();
            const sortedEntries = [ ...this.data ]
                .sort(function (a, b) {
                    if (method === 'id') {
                        return a.id - b.id;
                    } else if (method === 'severity') {
                        return a.severity - b.severity;
                    } else if (method === 'author') {
                        return a.author.localeCompare(b.author);
                    }
                    return a[0] - b[0];

                });

            this.output(this.selector);

        },

        output: function (selector) {
            this.selector = selector;
            const element = document.querySelector(selector);

            this.data.forEach(e => {
                const div = document.createElement('div');
                div.id = `report_${e.id}`;
                div.classList.add('report');
                const divBody = document.createElement('div');
                divBody.classList.add('body');
                const pBody = document.createElement('p');
                pBody.textContent = e.description;
                divBody.appendChild(pBody);
                div.appendChild(divBody);
                const divTitle = document.createElement('div');
                divTitle.classList.add('title');
                const spanAuthor = document.createElement('span');
                spanAuthor.classList.add('author');
                spanAuthor.textContent = `Submitted by: ${e.author}`;
                const spanStatus = document.createElement('span');
                spanStatus.classList.add('status');
                spanStatus.textContent = `${e.status} | ${e.severity}`;

                divTitle.appendChild(spanAuthor);
                divTitle.appendChild(spanStatus);
                div.appendChild(divTitle);

                element.appendChild(div);
            });

        },
    };
}

// 50 / 100 Judge !!! The problem is in "sort" property 
