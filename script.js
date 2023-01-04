'use strict';

// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // Start function to generate password
  function generatePassword() {
    // User input variables: 
    let enter;
    let confirmNumber;
    let confirmCharacter;
    let confirmUppercase;
    let confirmLowercase;
    // Start Password variable values: 
    // Special characters 
    let characters = ["!", "#", "$", "%", "&", "'", "(",")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_","`", "{","|","}", "~"];
    // Numeric characters
    let numbers = [0,1, 2, 3, 4, 5, 6, 7, 8, 9];
    // Alphabetical characters
    let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    // Space is for the Uppercase conversion
    let choices = [];
    
    // converts letters to uppercase 
    let toUpper = function (x) {
      return x.toUpperCase();
    };
    // creates a variable for uppercase conversion
    let alpha2 = alpha.map(toUpper);

    // Asks for user for the input
    enter = parseInt(prompt("How many characters would you like in your password? (or What would you like the length of your Generated Password to be?)                {Please, choose the length of your password between 8 and 128 characters!}"));
    // First if statement for user validation 
    if (!enter) {
      alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
      // Validates user input
      // Start user input prompts
      enter = parseInt(prompt("You must choose between 8 and 128"));

    } else {
      // Continues once user input is validated
      confirmNumber = confirm("Will this include numbers (numeric characters)?");
      confirmCharacter = confirm("Will this include special characters?");
      confirmUppercase = confirm("Will this include Uppercase letters?");
      confirmLowercase = confirm("Will this include Lowercase letters?");
    };

    // Else if for 4 negative options
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
      choices = alert("You must choose a criteria!");

    }
    //Check if confirmed characters are true
    //if true concatinate special characters array.
    if (confirmCharacter) {
      choices = choices.concat(characters);
    }

    if (confirmUppercase) {
      choices = choices.concat(alpha2);
    }

    if (confirmLowercase) {
      choices = choices.concat(alpha);
    }
    if (confirmNumber) {
      choices = choices.concat(numbers);
    }

    // password variable is an array placeholder for user generated amount of length
    var password = [];

    // Start random selection variables:
    // Random selection for all variables: 
    for (var i = 0; i < enter; i++) {
      var randomIndex = Math.floor(Math.random() * choices.length)
      //or this is other options with Math.round or ~~:
      //var randomIndex = Math.round(Math.random() * choices.length);
      //var randomIndex = ~~(Math.random() * choices.length);
      var pickChoices = choices[randomIndex];
      password.push(pickChoices);
    }
    // This joins the password array and converts it to a string    
    var passwordString = password.join("");
    // UserInput(passwordString);
    // console.log(passwordString)

    return passwordString;
  }
  // Write password to the #password input
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  // or other option useing textcontent
  // passwordText.textContent = password
  // console.log(password);

  //the password is displayed in an alert.
  // alert(`Here is the generated Password:  ${ password}`);
}
// Add event listener to generate button and 
generateBtn.addEventListener("click", writePassword);




    