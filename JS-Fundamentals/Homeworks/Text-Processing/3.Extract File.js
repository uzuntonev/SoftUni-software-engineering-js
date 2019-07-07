function solve(input) {
    // let pattern = /[A-Za-z]+[.][A-Za-z]+/g;
    // let match = input.match(pattern);
    // let arr = match[0].split('.');
    let index = input.lastIndexOf('\\');
    let substring = input.substring(index + 1);
    let arr = substring.split('.')
    console.log(`File name: ${arr[0]}`)
    console.log(`File extension: ${arr[1]}`)

}

solve('C:\\Internal\\training-internal\\Template.pptx')
solve('C:\\Projects\\Data-Structures\\LinkedList.cs')