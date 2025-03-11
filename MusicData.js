//In this file you will declare three classes (object templates)


//1. Declare a class called Song, it's constructor should take three parameters: title, artist, album
class Song {
    constructor(someTitle,someArtist, someAlbum)
     {
        this.title = someTitle;
        this.artist = someArtist;
        this.album = someAlbum;
    }
};


//2. Declare a class called Musician, it's constructor should take three parameters: name, instrument, genre
class Musician {
    constructor(someName, someInstrument, someGenre ) {
        this.name = someName;
        this.instrument = someInstrument;
        this.genre = someGenre;
    }
};


//3. Declare a class called Playlist, it's constructor should take four parameters: name, song1, song2, song3, song4

class Playlist {
    constructor ( someName, someSong1, someSong2, someSong3) {
        this.name = someName;
        this.song1 = someSong1;
        this.song2 = someSong2;
        this.song3 = someSong3;
       
}
getInfo() {
    console.log(
        `${this.name} has the following songs 
        ${this.song1.title} by ${this.song1.artist.name}
        ${this.song2.title} by ${this.song2.artist.name}
        ${this.song3.title} by ${this.song3.artist.name}`)
}

};



//4. this class should also define a method called getInfo() that prints text to the console saying
//  The playlist (whatever name you gave it) has the following songs:
//         (Song1 name) by (Song1 Artist Name),
//         (Song2 name) by (Song2 Artist Name),
//         (Song3 name) by (Song3 Artist Name),



//5. export all three classes to make them available to the other JS files.

export {Song, Musician, Playlist};
