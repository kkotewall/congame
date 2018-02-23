//character is the user's guess from index
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
			return "*";
		}
	}
	//check userguess against hidden letter; return Boolean or placeholder
	this.guess = function() {
		if (this.character === this.keyLetter[i]) {
			this.letterGuess = true;
			this.returnCharacter();
		}
		else {
			return "*";
		}
	}
}

//export constructor
module.exports = Letter;
