function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        comments = [];
        constructor(tittle, content, likes, dislikes) {
            super(tittle, content);
            this.likes = likes;
            this.dislikes = dislikes;
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            const output = `${super.toString()}
Rating: ${this.likes - this.dislikes}`;
            if (this.comments.length === 0) {
                return output;
            }
            return `${output}
Comments:\n${this.comments.map(x => ` * ${x}`).join('\n')}`;
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            return `${super.toString()}\nViews: ${this.views}`;
        }
    }
    return {
        Post,
        SocialMediaPost,
        BlogPost,
    };
}

const a = solve().Post;
const p = new a('dd', 'dd')
;
