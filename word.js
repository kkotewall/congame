// Word.js: Contains a constructor, Word that depends on the Letter constructor. 
// This is used to create an object representing the current word the user is attempting to guess. 
// That means the constructor should define:

// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word. This should call the function on each letter object
//  (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
// A function that takes a character as an argument and calls the guess function on each letter object 
// (the second function defined in Letter.js)

//require the letter.js constructor
var letterCon = require("./letter");

//constructor
var word = function(keyWord) {
	this.keyWord = keyWord;
	this.keyLetters = [];
	this.placeholders= [];

	this.
};




//A function that returns a string representing the word. 
//This should call the function on each letter object (the first function defined in Letter.js)
 function CallFirstFunction() {
 	firstFunction();
 	console.log(stringRepresentingKeyword);
 }

//A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
function CallSecondConstructor(character) {
 	var guessFunction();
 }








var Letter = function(character) {
	//intial Boolean value; function takes character as argument
	this.letterGuess = false;
	this.character = character;

	//return hidden letter if userguess is correct (Boolean)
	this.returnCharacter = function() {
		if (this.letterGuess) {
			console.log(this.character);
		}
		else {
			console.log("Try a different letter.");
		}
	//check userguess against hidden letter; return Boolean or placeholder
	this.guess = function() {
		if (this.character === this.letterObject) {
			this.letterGuess = true;
			this.returnCharacter();
		}
		else {
			return "*";
		}
	}
};

//export constructor
module.exports = Letter;



