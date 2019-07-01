function solve(input) {
    let list = {};
    let counter = {};

    let langCounter = (lang) => {
        if (counter[lang] == undefined) {
            counter[lang] = 1;
        } else {
            counter[lang]++;
        }
    }
    for (const line of input) {
        let [name, language, points] = line.split('-');
        points = Number(points);

        if (line === 'exam finished') {
            break;
        }

        if(language !== 'banned'){
            langCounter(language);
            if(!(name in list)){
                list[name] =
                {
                    language: language,
                    points: points
                }
            }else {
                if(list[name].points < points){
                    list[name].points = points
                }
            }
        }
        if (language === 'banned') {
            delete list[name]
        }
    }

    let studentsEntries = Object.entries(list).sort((a, b) => a[0].localeCompare(b[0])).sort((a, b) => b[1].points - a[1].points);

    console.log(`Results:`)
    for (let [key, value] of studentsEntries) {
        console.log(`${key} | ${value.points}`)
    }

    console.log(`Submissions:`)
    let entriesCounter = Object.entries(counter).sort((a, b) => a[0].localeCompare(b[0])).sort((a, b) => b[1] - a[1]);
    for (let [key, value] of entriesCounter) {
        console.log(`${key} - ${value}`)
    }
   
}

// solve([
//     'Pesho-Java-84',
//     'Gosho-C#-70',
//     'Gosho-C#-84',
//     'Kiro-C#-94',
//     'exam finished']
// );
solve([
    'Pesho-Java-91',
    'Gosho-C#-84',
    'Kiro-JavaScript-90',
    'Kiro-C#-50',
    'Kiro-banned',
    'exam finished']

)