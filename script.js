// 1. Import the all three objects (Song, Musician, Playlist) that you created in the MusicData.js module file
import {Song, Musician, Playlist} from "./MusicData.js" ;

// 2. declare a new constant and assign to it a new musician object to describe the musician for the first song.

const eltonJohn = new Musician (
    "Elton John",
     "Piano", 
     "Classic Rock");

// 3. declare a new constant and assign to it a new musician object to describe the musician for the second song.
const johnLennon = new Musician (
    "John Lennon", 
    "Guitar", 
    "Classic Rock");



// 4. declare a new constant and assign to it a new musician object to describe the musician for the third song.
const billyJoel = new Musician(
    "Billy Joel", 
    "Piano", 
    "Piano Rock");


// 5. declare a new constant and assign to it a new Song object to describe the first song
const song1 = new Song (
    "Rocketman", 
    eltonJohn, 
    "Honkey Chateau");
// (make sure to use the Musician object from step 2 in creating this Song object



// 6. declare a new constant and assign to it a new Song object to describe the second song
const song2 = new Song (
    "Hold On",
     johnLennon, 
     "Plastic Ono Band");
// (make sure to use the Musician object from step 3 in creating this Song object


// 7. declare a new constant and assign to it a new Song object to describe the third song
// (make sure to use the Musician object from step 4 in creating this Song object
const song3 = new Song(
    "Vienna",
     billyJoel, 
     "The Stranger");


// 8. declare a new constant called myPlaylist and assign to it a new Playlist object and make sure to use the three Song objects
//from steps 5, 6, & 7 when creating it.
const myPlaylist = new Playlist (
    "myPlaylist",
    song1, 
    song2, 
    song3, )
    myPlaylist.getInfo();
;

//It must be called myPlaylist
//It must be called myPlaylist

//9. call the .getInfo() method on myPlaylist

   
;

//DO NOT EDIT BELOW THIS LINE
//the code below here will insert the Playlist data into the webpage.
const bodyHTML = document.querySelector("body");

bodyHTML.innerHTML += `
    <ol>
        <li><em>${myPlaylist.song1.title}</em> by ${myPlaylist.song1.artist.name}</li>
        <li><em>${myPlaylist.song2.title}</em> by ${myPlaylist.song2.artist.name}</li>
        <li><em>${myPlaylist.song3.title}</em> by ${myPlaylist.song3.artist.name}</li>
    </ol>

`;
