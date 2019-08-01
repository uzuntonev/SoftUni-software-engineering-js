function solve(input) {
    const studentList = {};
    const languageList = {};

    function fillLists(name, language, points) {
        points = Number(points);
        if (!(name in studentList)) {
            studentList[name] = points;
        } else {
            points > studentList[name] ? studentList[name] = points : void 0;
        }
        if (!(language in languageList)) {
            languageList[language] = 1;
        } else {
            languageList[language]++
        }
    }

    function deleteStudent(name) {
        delete studentList[name]
    }


    for (const line of input) {
        if (line == 'exam finished') {
            break;
        }
        let [name, languageOrBanned, points] = line.split('-')
        if (languageOrBanned === 'banned') {
            deleteStudent(name)
        } else {
            fillLists(name, languageOrBanned, points)
        }
    }
    console.log(`Results:`)
    Object.entries(studentList)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .sort((a, b) => b[1] - a[1])
        .forEach(e => console.log(`${e[0]} | ${e[1]}`));
    console.log(`Submissions:`)
    Object.entries(languageList)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .sort((a, b) => b[1] - a[1])
        .forEach(e => console.log(`${e[0]} - ${e[1]}`));
}

// solve([ 
// 'Pesho-Java-84',
// 'Gosho-C#-70',
// 'Gosho-C#-84',
// 'Kiro-C#-94',
// 'exam finished' ]
// );
solve([
    'Pesho-Java-91',
    'Gosho-C#-84',
    'Kiro-JavaScript-90',
    'Kiro-C#-50',
    'Kiro-banned',
    'exam finished']
)