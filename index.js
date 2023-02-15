const superheroes = require('superheroes');
const supervillains = require('supervillains');

var mySuperHeroName = superheroes.random();
var mySuperVillainName = supervillains.random();

console.log(mySuperHeroName);
console.log(mySuperVillainName);


const Quote = require('inspirational-quotes');
var myQuote = Quote.getRandomQuote();
console.log(myQuote);

const movieQuote = require("popular-movie-quotes");
var myMovieQuote = movieQuote.getRandomQuote();
console.log(movieQuote.getRandomQuote(myMovieQuote));

const famousLastWords = require('famous-last-words');
var myLastWords = famousLastWords[10]
console.log(famousLastWords[10]);

const fs = require("fs");
  fs.writeFileSync("file2.txt", "Super Hero: " + mySuperHeroName);

  fs.writeFileSync("file3.txt", "Super Villain: " + mySuperVillainName);

  fs.writeFileSync("file4.txt" ,"Quote of the Day " + myQuote);

  fs.writeFileSync("file5.txt" , "Movie Quote: " + myMovieQuote);

  fs.writeFileSync("file6.txt" , "Famous Last Words: " + myLastWords);

const horoscope = require('horoscope');
const { random } = require('superheroes');
var getSign = require('horoscope').getSign;
var getZodiac = require('horoscope').getZodiac;

console.log(horoscope.getSign({month: 11, day: 1 }))
// 'Capricorn'

console.log(horoscope.getZodiac(1978))
// 'Rabbit'