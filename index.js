// inquirer npm package
var inquirer = require("inquirer");
// fs package
var fs = require("fs");



// array of words
var wordBank = ["january", "february", "march"];
// word chosen from answer
var keyWord = wordBank[Math.floor(Math.random() * wordBank.length);
// call keyWord splitter function in word.js file
// function WordSplitter ();




var letter = process.argv[2];

// constructor function 
function Guess(letter) {
  this.letter = letter;
}

// runs inquirer and asks the user a series of questions whose replies are
// stored within the variable answers inside of the .then statement.
inquirer.prompt([
  {
    name: "letter",
    message: "Guess a letter!"
  }
]).then(function() {
  // initializes the variable to be an object which will take
  // the user's answer to the questions above
  var newGuess = new Guess(answers.letter);
});
