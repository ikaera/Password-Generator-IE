'use strict';

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // passwordText.value = password;
  // passwordText.textContent = password;
  // console.log(password);


  // Start function to generate password
  function generatePassword() {
    // User input variables: 
    var enter;
    var confirmNumber;
    var confirmCharacter;
    var confirmUppercase;
    var confirmLowercase;
    // Start Password variable values: 
    // Special characters 
    var characters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
    // Numeric characters
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // Alphabetical characters
    var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    // Space is for the Uppercase conversion
    var space = [];
    // Choices declared outside the if statement so they can be concatenated upon condition
    var choices;
    // converts letters to uppercase 
    var toUpper = function (x) {
      return x.toUpperCase();
    };
    // creates a variable for uppercase conversion
    var alpha2 = alpha.map(toUpper);

    // Asks for user input
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
    // First if statement that uses user input prompts to determine choices
    // Else if for 4 positive options
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

      choices = characters.concat(numbers, alpha, alpha2);
    }
    // Else if for 3 positive options
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
      choices = characters.concat(numbers, alpha2);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
      choices = characters.concat(numbers, alpha);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
      choices = characters.concat(alpha, alpha2);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
      choices = numbers.concat(alpha, alpha2);
    }
    // Else if for 2 positive options 
    else if (confirmCharacter && confirmNumber) {
      choices = characters.concat(numbers);

    } else if (confirmCharacter && confirmLowercase) {
      choices = characters.concat(alpha);

    } else if (confirmCharacter && confirmUppercase) {
      choices = characters.concat(alpha2);
    }
    else if (confirmLowercase && confirmNumber) {
      choices = alpha.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
      choices = alpha.concat(alpha2);

    } else if (confirmNumber && confirmUppercase) {
      choices = number.concat(alpha2);
    }
    // Else if for 1 positive option
    else if (confirmCharacter) {
      choices = characters;
    }
    else if (confirmNumber) {
      choices = numbers;
    }
    else if (confirmLowercase) {
      choices = alpha;
    }
    // Created space variable to fill uppercase conversion
    else if (confirmUppercase) {
      choices = space.concat(alpha2);
    };

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
    UserInput( passwordString);
    console.log( passwordString)

    return  passwordString;
  }

  // This puts the password value into the textbox
  // Changed function input to use textcontent
  function UserInput(passwordString) {
    document.querySelector("#password").textContent = passwordString;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
