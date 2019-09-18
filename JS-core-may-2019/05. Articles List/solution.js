function createArticle() {
	let titleValue = document.getElementById('createTitle').value;
	let contentValue = document.getElementById('createContent').value;
console.log(contentValue)

	if (titleValue != '' && contentValue != '') {
		document.getElementById('createTitle').value = '';
		document.getElementById('createContent').value = '';

		let article = document.createElement('article');
		let title = document.createElement('h3');
		let content = document.createElement('p');
		
		title.innerHTML = titleValue;
		article.appendChild(title);

		content.innerHTML = contentValue;
		article.appendChild(content);
		document.getElementById('articles').appendChild(article);
	}
}


