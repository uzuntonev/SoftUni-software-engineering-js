function solve(input) {
    const set = new Set();
    const pattern = /\w+/g;
    for (const line of input) {
        const words = line.match(pattern);
        for (let word of words) {
            word = word.toLowerCase();
            set.add(word);
        }
    }
    console.log([ ...set ].join(', ')); 
}

solve([
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Pellentesque quis hendrerit dui.',
    'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.',
    'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.',
    'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.',
    'Morbi in ipsum varius, pharetra diam vel, mattis arcu.',
    'Integer ac turpis commodo, varius nulla sed, elementum lectus.',
    'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.' ]);
