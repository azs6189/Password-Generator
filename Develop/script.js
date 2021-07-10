// Assignment Code

// Set variables for password criteria
let lowerCaseLetterArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCaseLetterArr = ["A", 'B', "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numericArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let specialChar = ["!", "@", "#", "$", "%", "^", "&", "*"];
let passwordLength;

// Function to determine the length of the password to be generated

function determineLength() {
  passwordLength = prompt("Set the length of your password to be between 8-128 characters");

  if (passwordLength < 8) {
    alert("Password length is too short! Must be between 8-128 characters.");
    determineLength();
  } else if (passwordLength > 128) {
    alert("Password length is too long! Must be between 8-128 caracters.");
  } else {
    alert("Please answer the following prommpts to generate your random password.")
  }
  return passwordLength;
}

// Assign 'Generate Password' button to a variable
const generateBtn = document.querySelector('#generate');


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword() {
})

// Write password to the #password input
function writePassword() {

  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

