
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
