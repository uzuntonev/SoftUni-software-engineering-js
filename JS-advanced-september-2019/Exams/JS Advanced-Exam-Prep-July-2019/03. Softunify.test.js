const { assert } = require('chai');
const SoftUniFy = require('./03. Softunify');

describe('Testing SoftUniFy', () => {
    let sofunify;
    beforeEach(() => {
        sofunify = new SoftUniFy;
        sofunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
        sofunify.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
        
    });

    it('downloadSong(artist, song, lyrics)', () => {
        assert.equal(sofunify.allSongs.Eminem.songs[0], 'Venom - Knock, Knock let the devil in...');
        const act = sofunify.downloadSong('Dub Fx', 'Light Me On Fire', 'You can call me a liar.. ');
        assert.equal(act, sofunify);
    });

    it('playSong(song)', () => {
        const act1 = sofunify.playSong('Venom');
        assert.equal(act1, 'Eminem:\nVenom - Knock, Knock let the devil in...\n');
        const act2 = sofunify.playSong('test');
        assert.equal(act2, 'You have not downloaded a test song yet. Use SoftUniFy\'s function downloadSong() to change that!');
    });

    it('getter songsList', () => {
        const act = sofunify.songsList;
        assert.equal(act, 'Venom - Knock, Knock let the devil in...\nPhenomenal - IM PHENOMENAL...');
    });

    it('rateArtist()', () => {
        const act1 = sofunify.rateArtist('Eminem');
        assert.equal(act1, 0);
        const act2 = sofunify.rateArtist('test');
        assert.equal(act2, 'The test is not on your artist list.');
    });
});
