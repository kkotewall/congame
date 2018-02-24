//character is the user's guess from index
var Letter = function(character) {
	//intial Boolean value; function takes character as argument
	this.letterGuess = false;
	this.character = character;

	//return letter for correct guess (Boolean) or a placeholder
	this.returnCharacter = function() {
		if (this.letterGuess) {
			console.log(this.character);
		}
		else {
			return "*";
		}
	}
	//check userguess against correct letter; return Boolean or placeholder
	this.checkLetter = function() {
		if (this.character === this.keyLetter[i]) {
			this.letterGuess = true;
			console.log("Correct!");
			this.returnCharacter();
		}
		else {
			console.log("Incorrect. Guess another letter.");
		}
	}
}

//export constructor
module.exports = Letter;
