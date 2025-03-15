const musicCollection = {

    musicAlbums: [
        { title: 'Ten New Songs', artist: 'Leonard Cohen', year: '2001' },
        { title: 'Ultraviolence', artist: 'Lana Del Rey', year: '2012' },
        { title: 'The Price of Tea in China', artist: 'Boldy James and the Alchemist', year: '2020' }
    ],
    [Symbol.iterator]() {
        this.index = 0;
        return this;
    },
    next() {
        return this.index < this.musicAlbums.length ? { done: false, value: this.musicAlbums[this.index++] } : { done: true };
    }
}
for (const album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
}