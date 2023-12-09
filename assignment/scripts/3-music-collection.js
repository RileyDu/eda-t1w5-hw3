console.log("***** Music Collection *****");
// Safe Zone -- Write code below this line
myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
  let newAlbum = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  };
  collection.push(newAlbum);
  return newAlbum;
}
const addedAlbum1 = addToCollection(
  myCollection,
  "The Melodic Blue",
  "Baby Keem",
  "2021"
);
console.log(addedAlbum1);
const addedAlbum2 = addToCollection(
  myCollection,
  "Stadium Arcadium",
  "Red Hot Chili Peppers",
  "2006"
);
console.log(addedAlbum2);
let addedAlbum3 = addToCollection(
  myCollection,
  "The Stranger",
  "Billy Joel",
  "1977"
);
console.log(addedAlbum3);
const addedAlbum4 = addToCollection(
  myCollection,
  "Come Away with ESG",
  "ESG",
  "1983"
);
console.log(addedAlbum4);
const addedAlbum5 = addToCollection(
  myCollection,
  "The Lonesome Crowded West",
  "Modest Mouse",
  "1997"
);
console.log(addedAlbum5);
const addedAlbum6 = addToCollection(
  myCollection,
  "The Sun's Tirade",
  "Isaiah Rashad",
  "2016"
);
console.log(addedAlbum6);
const addedAlbum7 = addToCollection(
  myCollection,
  "Greatest Hits",
  "Red Hot Chili Peppers",
  "2013"
);
console.log(addedAlbum7);

function showCollection(collection) {
  for (let album of collection) {
    console.log(
      `${album.title} by ${album.artist}. Published in ${album.yearPublished}`
    );
  }
  return "Collection has been displayed";
}

showCollection(myCollection);

function findByArtist(collection, artist) {
  let matchArray = [];
  for (let album of collection) {
    if (album.artist === artist) {
      matchArray.push(album);
    }
  }
  return matchArray;
}

const artistCheck1 = "Baby Keem";
const artistMatch1 = findByArtist(this.myCollection, artistCheck1);
console.log(artistMatch1);
const artistCheck2 = "Jack Harlow";
const artistMatch2 = findByArtist(this.myCollection, artistCheck2);
console.log(artistMatch2);
const artistCheck3 = "Red Hot Chili Peppers";
const artistMatch3 = findByArtist(this.myCollection, artistCheck3);
console.log(artistMatch3);

function search(collection, searchCollection){

  return matchArray 
}
searchObject1 ={
  artist: 'Ray Charles',
  yearPublished: 1957
}

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection:
      typeof myCollection !== "undefined" ? myCollection : undefined,
    addToCollection:
      typeof addToCollection !== "undefined" ? addToCollection : undefined,
    showCollection:
      typeof showCollection !== "undefined" ? showCollection : undefined,
    findByArtist:
      typeof findByArtist !== "undefined" ? findByArtist : undefined,
    search: typeof search !== "undefined" ? search : undefined,
  };
} catch (e) {
  // Do nothing
}
