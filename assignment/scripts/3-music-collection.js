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
  2021
);
console.log(addedAlbum1);
const addedAlbum2 = addToCollection(
  myCollection,
  "Stadium Arcadium",
  "Red Hot Chili Peppers",
  2006
);
console.log(addedAlbum2);
let addedAlbum3 = addToCollection(
  myCollection,
  "The Stranger",
  "Billy Joel",
  1977
);
console.log(addedAlbum3);
const addedAlbum4 = addToCollection(
  myCollection,
  "Come Away with ESG",
  "ESG",
  1983
);
console.log(addedAlbum4);
const addedAlbum5 = addToCollection(
  myCollection,
  "The Lonesome Crowded West",
  "Modest Mouse",
  1997
);
console.log(addedAlbum5);
const addedAlbum6 = addToCollection(
  myCollection,
  "The Sun's Tirade",
  "Isaiah Rashad",
  2016
);
console.log(addedAlbum6);
const addedAlbum7 = addToCollection(
  myCollection,
  "Greatest Hits",
  "Red Hot Chili Peppers",
  2013
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
const artistMatch1 = findByArtist(myCollection, artistCheck1);
console.log("Returns the one album by Baby Keem", artistMatch1);
const artistCheck2 = "Jack Harlow";
const artistMatch2 = findByArtist(myCollection, artistCheck2);
console.log("Jack Harlow is not in the collection, return an empty array", artistMatch2);
const artistCheck3 = "Red Hot Chili Peppers";
const artistMatch3 = findByArtist(myCollection, artistCheck3);
console.log("This should contain two albums by the Peppers", artistMatch3);

function search(collection, searchCriteria) {
  if (
    !searchCriteria ||
    !searchCriteria.artist ||
    !searchCriteria.yearPublished
  ) {
    return collection;
  }
  let searchArray = [];
  for (let entry of collection) {
    if (
      entry.artist === searchCriteria.artist &&
      entry.yearPublished === searchCriteria.yearPublished
    ) {
      searchArray.push(entry);
    }
  }
  return searchArray;
}

searchObject1 = {
  artist: "Ray Charles",
  yearPublished: 1957,
};

searchObject2 = {
  artist: "Baby Keem",
  yearPublished: 2021
}

searchObject3 = {
// left empty to test function, wanting it to return the whole collection
}

find1 = search(myCollection, searchObject1);
console.log(find1)
find2 = search(myCollection, searchObject2);
console.log(find2)
find3 = search(myCollection,searchObject3);
console.log(find3)
// function compareResults(expected, results) {
//   return expected === results ? "👍" : "👎";
// }

// const result1 = search(myCollection,searchObject1)
// console.log(`Test 1. Should show my collection (result: ${searchObject1} ${compareResults(this.myCollection,result1)})`)

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
