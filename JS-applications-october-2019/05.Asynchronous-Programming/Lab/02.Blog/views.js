import { fetchData } from './fetchData.js';
// import { cacheData } from './cacheData.js';

// const fetchWithCache = cacheData(fetchData.bind(window));
export async function getPosts(html) {
    let postsData;
    try {
        postsData = await fetchData('posts');
    } catch(err) {
        html.postBody.innerHTML = err;
        console.error(err); 
    }
    html.posts.innerHTML = ''; 
    const fragment = document.createDocumentFragment();
    Object.keys(postsData)
        .forEach(x => {
            const option = document.createElement('option');
            option.value = x;
            option.textContent = postsData[x].title;
            fragment.appendChild(option);
        });
    html.posts.appendChild(fragment);
}

export async function displayPost(html) {
    let post;
    let commentsData;
    try{
        post = await fetchData(`posts/${html.posts.value}`);
        commentsData = await fetchData('comments');
    }catch (err) {
        html.postComments.innerHTML = err;
        console.error(err);
    }

    html.postComments.innerHTML = '';
    Object.values(commentsData)
        .filter(x => x.postId === post.id)
        .map(x => x.text)
        .forEach(x => {
            const li = document.createElement('li');
            li.textContent = x;
            html.postComments.appendChild(li);
        });
    html.postBody.innerHTML = post.body;
    html.postTitle.innerHTML = post.title;
}
