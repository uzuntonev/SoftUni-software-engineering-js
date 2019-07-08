function solve(input) {
    let obj = {};
    let userList = [];
    for (const line of input) {
        let [userOrArticle, nameOfUserOrArticle] = line.split(' ');
        if (userOrArticle === 'user') {
            userList.push(nameOfUserOrArticle);
        }
        if (userOrArticle == 'article') {
            obj[nameOfUserOrArticle] = [];
        }
    }
    
    let filtered = input.filter(e => e.includes('posts on'));

    for (const line of filtered) {
        let [userAndArticle, comment] = line.split(': ');
        let [user, article] = userAndArticle.split(' posts on ');

        if (article in obj && userList.includes(user)) {
            obj[article].push([user, comment.split(', ').join(' - ')]);
        }
    }

    Object.entries(obj)
        .sort((a, b) => b[1].length - a[1].length)
        .forEach(e => {
            console.log(`Comments on ${e[0]}`);
            e[1]
                .sort((a, b) => a[0].localeCompare(b[0]))
                .forEach(e => console.log(`--- From user ${e[0]}: ${e[1]}`))
        });
}



solve([
    'user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much']);