const SkiResort = require('./02.SkiResort');
const { assert } = require('chai');

describe('SkiResort', function () {
    let instance;
    beforeEach(() => {
        instance = new SkiResort('Test');
    });

    it('Testing getter bestHotel()', () =>{
        assert.equal(instance.bestHotel, 'No votes yet');
        instance.build('Sun', 10);
        instance.voters++;
        assert.equal(instance.bestHotel, 'Best hotel is Sun with grade 0. Available beds: 10');
    });

    it('Testing method build(name, beds)', () =>{
        assert.throw(() => instance.build('', 10),'Invalid input');
        assert.throw(() => instance.build('Sun', -1),'Invalid input');

        const act = instance.build('Sun', 10);
        assert.equal(act, 'Successfully built new hotel - Sun');
        assert.equal(instance.hotels.length, 1);
    });

    it('Testing method book(name, beds)', () =>{
        assert.throw(() => instance.book('', 10),'Invalid input');
        assert.throw(() => instance.book('Sun', -1),'Invalid input');
        assert.throw(() => instance.book('test', 10), 'There is no such hotel');

        instance.build('Sun', 10);
        const act = instance.book('Sun', 5);
        assert.throw(() => instance.book('Sun', 10), 'There is no free space'); 
        assert.equal(act, 'Successfully booked');
        assert.equal(instance.hotels[0].beds, 5);
    });

    it('Testing method leave(name, beds, points)', () =>{
        assert.throw(() => instance.leave('', 10, 1),'Invalid input');
        assert.throw(() => instance.leave('Sun', -1, 1),'Invalid input');
        assert.throw(() => instance.leave('test', 10, 1), 'There is no such hotel');

        instance.build('Sun', 10);
        instance.book('Sun', 5);

        const act1 = instance.leave('Sun', 5, 1);
        const act2 = instance.voters;
        assert.equal(act1, '5 people left Sun hotel');
        assert.equal(act2, 5);

        const act3 = instance.hotels[0].points;
        const act4 = instance.hotels[0].beds;
        assert.equal(act3, 5);
        assert.equal(act4, 10);
    });

    it('Testing method averageGrade()', () =>{
        const act = instance.averageGrade();
        assert.equal(act, 'No votes yet');

        instance.build('Sun', 10);
        instance.build('Avenue',5);
        instance.leave('Sun', 3, 2);
        instance.leave('Avenue', 3, 3);

        const act2 = instance.averageGrade();
        assert.equal(act2, 'Average grade: 2.50');
    });
});

