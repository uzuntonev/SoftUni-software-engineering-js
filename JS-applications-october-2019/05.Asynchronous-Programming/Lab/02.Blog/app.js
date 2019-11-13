import { getPosts, displayPost } from './views.js';

const html = {
    loadPosts: document.querySelector('#btnLoadPosts'),
    posts: document.querySelector('#posts'),
    viewPost: document.querySelector('#btnViewPost'),
    postTitle: document.querySelector('#post-title'),
    postBody: document.querySelector('#post-body'),
    postComments: document.querySelector('#post-comments'),
};

function attachEvents() {
    html.loadPosts.addEventListener('click',getPosts.bind(undefined, html));
    html.viewPost.addEventListener('click', displayPost.bind(undefined, html));
}

attachEvents();
