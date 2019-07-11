function solve(input) {
    let text = input.shift();
    let output = text.split(' ');
    const arrOfWords = input.shift();
    for (const word of output) {
        if (word.includes('_')) {
            let length = word.length;
            if (word.match(/[.,!?]/g)){
                length -= 1;
            }
            for (const el of arrOfWords) {
                if (el.length === length) {
                   text = text.replace(word, el);
                }
            }
        }
    }
    console.log(text)
}

solve([
    'Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
);