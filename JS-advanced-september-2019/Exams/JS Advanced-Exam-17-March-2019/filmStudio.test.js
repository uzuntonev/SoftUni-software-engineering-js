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
