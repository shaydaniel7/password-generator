//Assignment Code
var generateBtn = document.querySelector("#generate");

alert("Click on ok if you would like to generate a password.");
console.log("Yes, I want to generate a password.")

var passLength = prompt("How many characters should your password have? Choose between 8 and 128.");
console.log("You chose " + passLength)

//this makes sure user follows pw length directions
while (passLength < 8 || passLength > 128) {
    passLength = prompt("Password length must be 8-128 characters. Try again.")
    console.log("Pay attention!")
}

//function to write pw
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

//prompts to user to choose pw components
var confirmSpecialCharacter = confirm("Do you want special characters in your password?");
if (confirmSpecialCharacter === true){
    console.log("You added special characters.")
}
else {
    console.log("You don't want special characters.")
}

var confirmUpperCase = confirm("Do you want uppercase letters in your password?");
if (confirmUpperCase === true) {
    console.log("You added uppercase letters.")
}
else {
    console.log("You don't want uppercase letters.")
}
var confirmLowerCase = confirm("Do you want lowercase letters in your password?");
if (confirmLowerCase === true) {
        console.log("You added lowercase letters.")
}
else {
    console.log("You don't want lowercase letters.")
}
var confirmNumber = confirm("How about numbers, want some numbers?");
if (confirmNumber === true) {
     console.log("You do want numbers.")
}
else {
    console.log("You don't want numbers.")
}
alert("Click on 'Generate Password' to get your new password.  Keep clicking the 'Generate Password' button for more passwords with the same parameters you chose.");
console.log("Click on the blue 'Generate Password' button to display your new password.  Protect it and use it wisely.")

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



