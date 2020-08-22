//Assignment Code
var generateBtn = document.querySelector("#generate");
var passLength = prompt("How many characters should your password have? Choose between 8 and 128.");

//this makes sure user follows pw length directions
while (passLength < 8 || passLength > 128) {
    passLength = prompt("Password length must be 8-128 characters. Try again.")
}

//function to write pw
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

//prompts to user to choose pw components
var confirmSpecialCharacter = confirm("Do you want special characters in your password?");

var confirmUpperCase = confirm("Do you want uppercase letters in your password?");

var confirmLowerCase = confirm("Do you want lowercase letters in your password?");

var confirmNumber = confirm("How about numbers, want some numbers?");

alert("Click on 'Generate Password' to get your new password.  Click again for another one.");

//function to generate pw
function generatePassword() {
    var newPw = "";
    var userChoiceLength = parseInt(passLength);
    output = "";

    //conditions that user wants to make up the pw
    if (confirmSpecialCharacter) {
        newPw += specialChar
    }
    if (confirmUpperCase) {
        newPw += upperCase
    }
    if (confirmLowerCase) {
        newPw += lowerCase
    }
    if (confirmNumber) {
        newPw += number
    }
    //for loop to match choices of characters to the choice of password length to give final output
    for (let i = 0; i < userChoiceLength; i++) {
        output += newPw.charAt(Math.floor(Math.random() * newPw.length));

    }
    return output;
}

//adding event listener to the generate button
generateBtn.addEventListener("click", writePassword);


//variable arrays
var specialChar = "!%&,*-./<>?~"; 11
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWYYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";



