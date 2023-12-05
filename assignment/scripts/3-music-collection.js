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
let addedAlbum1 = addToCollection(myCollection, "The Melodic Blue", "Baby Keem", "2021");
console.log(addedAlbum1);
let addedAlbum2 = addToCollection(myCollection, "Stadium Arcadium", "Red Hot Chili Peppers", "2006");
console.log(addedAlbum2);
let addedAlbum3 = addToCollection(myCollection, "The Stranger", "Billy Joel", "1977");
console.log(addedAlbum3);
let addedAlbum4 = addToCollection(myCollection, "Come Away with ESG", "ESG", "1983");
console.log(addedAlbum4);
let addedAlbum5 = addToCollection(myCollection, "The Lonesome Crowded West", "Modest Mouse", "1997");
console.log(addedAlbum5);
let addedAlbum6 = addToCollection(myCollection, "The Sun's Tirade", "Isaiah Rashad", "2016");
console.log(addedAlbum6);

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
