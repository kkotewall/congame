//constructor params:
	//takes in a character as an argument
	//display a placeholder or letter
	//boolean value stores if letter is guessed or not
		//function returns character if letter is guessed
		//function returns placeholder if letter is not guessed
	//function checks argument against stored character; updates boolean when true



var Letter = function(character) {
	this.letterGuess = false;
	this.character = character;

	this.returnCharacter = function() {
		if (this.letterGuess) {
			console.log(this.character);
		}
		else {
			console.log("*");
		}
	this.guess = function() {
		if (this.character === this.letterObject) {
			this.letterGuess = true;
			this.returnCharacter();
		}
	}
};

module.exports = Letter;
