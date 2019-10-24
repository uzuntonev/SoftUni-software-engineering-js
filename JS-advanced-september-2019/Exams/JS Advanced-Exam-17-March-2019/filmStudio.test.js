const { assert } = require('chai');
const FilmStudio = require('./filmStudio');

describe('Testing FilmStudio', () => {
    let instance;
    beforeEach(() => {
        instance = new FilmStudio('SU-Studio');
    });

    it('makeMovie() ', () => {
        assert.equal(instance.name, 'SU-Studio');
        const act = instance.makeMovie('The Avengers', [ 'Iron-Man', 'Thor', 'Hulk', 'Arrow guy' ]);
        instance.makeMovie('The Avengers', [ 'Iron-Man', 'Thor', 'Hulk', 'Arrow guy' ]);
        
        assert.equal(act.filmName, 'The Avengers');
        assert.equal(instance.films.length, 2);
        assert.equal(instance.films[0].filmName, act.filmName);
        assert.equal(instance.films[1].filmName, 'The Avengers 2');

        assert.throw(
            () => instance.makeMovie('The Avengers'),
            'Invalid arguments count'
        );
        assert.throw(
            () => instance.makeMovie('The Avengers', ''),
            'Invalid arguments'
        );
    });

    it('casting() ', () => {
        const act1 = instance.casting('Test Testov', 'The Avengers');
        assert.equal(
            act1, 
            'There are no films yet in SU-Studio.'
        );
        instance.makeMovie('The Avengers', [ 'Iron-Man', 'Thor', 'Hulk', 'Arrow guy' ]);
        
        const act2 = instance.casting('Test Testov', 'Test');
        assert.equal(
            act2, 
            'Test Testov, we cannot find a Test role...'
        );

        const act3 = instance.casting('Test Testov', 'Iron-Man');
        assert.equal(
            act3, 
            'You got the job! Mr. Test Testov you are next Iron-Man in the The Avengers. Congratz!'
        );
    });

    it('lookForProducer() ', () => {
        assert.throw(
            () => instance.lookForProducer('The Avengers'),
            'The Avengers do not exist yet, but we need the money...'
        );
        instance.makeMovie('The Avengers', [ 'Iron-Man', 'Thor', 'Hulk', 'Arrow guy' ]);
        instance.makeMovie('Test', [ 'Iron-Man', 'Thor', 'Hulk', 'Arrow guy' ]);
        const act = instance.lookForProducer('The Avengers');
        assert.equal(
            act, 
            'Film name: The Avengers\nCast:\nfalse as Iron-Man\nfalse as Thor\nfalse as Hulk\nfalse as Arrow guy\n'
        );
    });
});




describe('AutoService', function () {

    let filmStudio;
    this.beforeEach(function () {
        filmStudio = new FilmStudio('SU-Studio');
    });

    it('1', function () {
        filmStudio.makeMovie('The Avengers', [ 'Iron-Man', 'Hulk', 'Arrow guy', 'Ant-man' ]);
        filmStudio.makeMovie('The New Avengers', [ 'Iron-Man', 'Thor', 'Hulk', 'Arrow guy', 'Black Panther' ]);

        const actual = filmStudio.lookForProducer('The Avengers');
        const expected = 'Film name: The Avengers\nCast:\nfalse as Iron-Man\nfalse as Hulk\nfalse as Arrow guy\nfalse as Ant-man\n';

        assert.deepEqual(actual, expected);
    });

    it('2', function () {
        const actual = filmStudio.makeMovie('The Avengers', [ 'Iron-Man', 'Thor', 'Hulk', 'Arrow guy' ]);
        const expected = {
            filmName: 'The Avengers',
            filmRoles: [
                { role: 'Iron-Man', actor: false },
                { role: 'Thor', actor: false },
                { role: 'Hulk', actor: false },
                { role: 'Arrow guy', actor: false },
            ],
        };

        assert.deepEqual(actual, expected);
    });

    it('3', function () {
        const actual = (filmStudio.casting('Eray', 'Batman'));
        const expected = 'There are no films yet in SU-Studio.';

        assert.deepEqual(actual, expected);
    });

    // it('4', function () {
    //     filmStudio.makeMovie('The Avengers', [ 'Iron-Man', 'Thor', 'Hulk', 'Arrow guy' ]);

    //     const actual = (filmStudio.casting('Eray', 'Hulk'));
    //     const expected = 'You got the job! Mr. Eray you are next Hulk in the The Avengers. Congratz!';

    //     assert.deepEqual(actual, expected);
    // });

    // it('5', function () {
    //     filmStudio.makeMovie('The Avengers', [ 'Iron-Man', 'Thor', 'Hulk', 'Arrow guy' ]);
    //     filmStudio.casting('Eray', 'Hulk');

    //     const actual = filmStudio.casting('Eray', 'Batman');
    //     const expected = 'Eray, we cannot find a Batman role...';

    //     assert.deepEqual(actual, expected);
    // });

    // it('6', function () {
    //     const actual = function () {
    //         filmStudio.makeMovie('The Avengers', 'Batman');
    //     };

    //     const expected = 'Invalid arguments';

    //     assert.throws(actual, expected);
    // });

    it('7', function () {
        const actual = function () {
            filmStudio.makeMovie('The Avengers', [ 'Iron-Man', 'Hulk', 'Arrow guy', 'Ant-man' ], 'JS');
        };

        const expected = 'Invalid arguments count';

        assert.throws(actual, expected);
    });

    it('8', function () {
        filmStudio.makeMovie('The Avengers', [ 'Iron-Man', 'Hulk', 'Arrow guy', 'Ant-man' ]);
        filmStudio.makeMovie('The New Avengers', [ 'Iron-Man', 'Thor', 'Hulk', 'Arrow guy', 'Black Panther' ]);


        const actual = function () {
            filmStudio.lookForProducer('Hulk');
        };

        const expected = 'Hulk do not exist yet, but we need the money...';

        assert.throws(actual, expected);
    });
});
