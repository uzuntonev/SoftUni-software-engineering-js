function createArticle() {
    const title = document.getElementById('createTitle').value;
    const content = document.getElementById('createContent').value;
    const section = document.getElementById('articles');
    function create(t, c) {
        const article = document.createElement('article');
        const heading = document.createElement('h3');
        const paragraph = document.createElement('p');
		
        article.appendChild(heading);
        article.appendChild(paragraph);
		
        heading.textContent = t;
        paragraph.textContent = c;

        return article;
    }
	
    if (title && content){
        const newArticle = create(title, content);
        section.appendChild(newArticle);
        document.getElementById('createTitle').value = '';
        document.getElementById('createContent').value = '';
    }
}




/*
<div id="createArticle">
    <label for="createTitle">Title</label>
    <input id="createTitle"/><br>
    <label for="createContent">Content</label>
    <textarea id="createContent"></textarea>
*/
