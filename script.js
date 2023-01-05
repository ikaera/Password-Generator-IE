'use strict';

// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // Start function to generate password
  function generatePassword() {
    // Variables:     
    let confirmNumb;
    let confirmChar;
    let confirmUpper;
    let confirmLower;        
    let choices = [];

    // Special chars 
    let chars = ["!", "#", "$", "%", "&", "'", "(",")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_","`", "{","|","}", "~"];
    // Numeric chars
    let numbers = [0,1, 2, 3, 4, 5, 6, 7, 8, 9];
    // Alphabetical chars
    let lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    let uppercaseLetters = lowercaseLetters.toUpperCase(); // converts lowercase letters to uppercase

    let lowerCaseLettersArray = lowercaseLetters.split(''); // converts letters in a string to an array with those letters (e.g. ['a', 'b', 'c', ...])

    // console.log(lowerCaseLettersArray);

    let upperCaseLettersArray = uppercaseLetters.split('');
    // console.log(upperCaseLettersArray);

     // Asks for user for the input
    const enter = parseInt(prompt("Please, choose the length of your password between 8 and 128 characters!"));
    // First if statement for user validation 
    if (!enter) {
      alert("Please, enter a value");
    } else if (enter < 8 || enter > 128) {
      // Validates user input
      // Start user input prompts
      enter = parseInt(prompt("You must choose a number between 8 and 128"));

    } else {
      // Continues once user input is validated
      confirmNumb = confirm("Will this include numbers (numeric chars)?");
      confirmChar = confirm("Will this include special chars?");
      confirmUpper = confirm("Will this include Uppercase letters?");
      confirmLower = confirm("Will this include Lowercase letters?");
    };

    // Else if for 4 negative options
    if (!confirmChar && !confirmNumb && !confirmUpper && !confirmLower) {
      choices = alert("You must choose a criteria!");

    }
    //Check if confirmed chars are true
    //if true concatinate special chars array.
    if (confirmChar) {
      choices = choices.concat(chars);
    }

    if (confirmUpper) {
      choices = choices.concat(upperCaseLettersArray);
    }

    if (confirmLower) {
      choices = choices.concat(lowerCaseLettersArray);
    }
    if (confirmNumb) {
      choices = choices.concat(numbers);
    }

    // password variable is an array placeholder for user generated amount of length
    const password = [];    
    
    choices.forEach(function() {
      let randomIndex = Math.floor(Math.random() * choices.length);
      let pickChoices = choices[randomIndex];
      password.push(pickChoices);
    })
    // This joins the password array and converts it to a string    
    let passwordString = password.join("").slice(0, enter);
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