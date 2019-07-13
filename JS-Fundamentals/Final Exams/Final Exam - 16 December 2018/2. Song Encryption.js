function solve(input) {
    let output = '';
    for (const line of input) {
        if (line === 'end'){
            break;
        }
        let [name, song] = line.split(':');
        const namePattern = /^[A-Z][a-z'\s]+$/g;
        const songPattern = /^[A-Z\s]+$/g;
        if (name.match(namePattern) && song.match(songPattern)) {
            for (let i = 0; i < line.length; i++) {
                if (line[i] === ' ' || line[i] === '\'' || line[i] === ':') {
                    output += line[i]
                } else {
                    let newSymbol = line[i].charCodeAt() + name.length;
                    if (line[i] === line[i].toUpperCase() && (newSymbol > 90)) {
                        newSymbol = 96 + (newSymbol - 122);
                    } else if (line[i] === line[i].toLowerCase() && (newSymbol > 122)) {
                        newSymbol = 96 + (newSymbol - 122);
                    }
                    output += String.fromCharCode(newSymbol);
                }
            }
            output = output.replace(':', '@')
            console.log(`Successful encryption: ${output}`)
            output = '';
        } else {
            console.log('Invalid input!');
        }
    }
}
solve([
    'Eminem:VENOM',
    'Linkin park:NUMB',
    'Drake:NONSTOP',
    'Adele:HELLO',
    'end']);
console.log('>>>>>>>>>>>>>');
solve([
    'Michael Jackson:ANOTHER PART OF ME',
    'Adele:ONE AND ONLY',
    'Guns n\'roses:NOVEMBER RAIN',
    'Christina Aguilera: HuRt',
    'end']);