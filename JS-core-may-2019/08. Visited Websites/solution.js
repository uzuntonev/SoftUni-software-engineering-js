function solve() {
let items = document.querySelectorAll('.link-1');
for (const item of items) {
  item.addEventListener('click', (e) => {
currentTarget = e.currentTarget;
let paragraph = currentTarget.getElementsByTagName('p')[0];
let text = paragraph.textContent;
let arrText = text.split(' ')
let clicks = Number(arrText[1]);
clicks++
arrText[1] = clicks;
paragraph.textContent = arrText.join(' ')

  });
}

}