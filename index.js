// inquirer npm package
var inquirer = require("inquirer");

//call word.js to check user guess with correct answer
var WordCall = require("./word.js");

//randomly chosen answer word
var keyWord;
var splitWord;

//user guess assigned variable
var character = process.argv[2];


function answerWord() {
    // array of answer words
    var wordBank = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    // word chosen from answer for current game
    var keyWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    var splitWord = new WordCall (keyWord);
    //call function to split answer word into letter objects
    splitWord.splitKey();
    //call function to begin user game prompt
    Guess();
};


// constructor function 
function Guess(character) {
    this.character = character;
    
    // runs inquirer and asks the user a series of questions whose replies are
    // stored within the variable answers inside of the .then statement.w1
    inquirer.prompt([
      {
        name: "letter",
        message: "Guess a letter!"
      }
    ]).then(function() {
      // initializes the variable to be an object which will take
      // the user's answer to the questions above
      var newGuess = new Guess(answers.character);
    });
}

