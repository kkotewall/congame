
//require the letter.js constructor
var letterCall = require("./letter");

//A function that returns a string representing the selected answer word
//keyWord is the correct answer from index.js
//keyLetters is the array of letter objects created in the splitKey function
var Word = function(keyWord) {
	this.keyWord = keyWord;
	this.keyLetters = [];

	// create an array of new Letter objects
	//call the Letter constructyor on each letter object & check the guess
	this.splitKey = function() {
		for (var i = 0; i < keyWord.length; ++i) {
		var letterObject = new letterCall(keyWord[i]);
		this.keyLetters.push(letterObject);
		}
	};
};

module.exports = Word;

