function solve(input) {

    let index = input.lastIndexOf('\\');
    let output = input.substring(index + 1);
    let extension = output.substring(output.lastIndexOf('.'))
    output = output.replace(extension, '')
    extension = extension.replace('.', '')
    console.log(`File name: ${output}`);
    console.log(`File extension: ${extension}`);
}

solve('C:\\Internal\\training-internal\\Template.pptx')
solve('C:\\Projects\\Data-Structures\\LinkedList.cs')