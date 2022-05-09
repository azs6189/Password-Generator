// Set variables for password criteria

// Connects script.js file to button in HTML
var generateBtn = document.querySelector("#generate");

// Arrays of password character options
var lowerCaseLetterArr = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];
var upperCaseLetterArr = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
];
var numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "@", "$", "%", "^", "&", "*"];

// Holder variables
var passwordLength;
var upperCaseQuery;
var numberQuery;
var specialQuery;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to determine the length of the password to be generated
function determineLength() {
	passwordLength = prompt(
		"Set the length of your password to be between 8-128 characters"
	);

	if (passwordLength < 8) {
		alert("Password length is too short! Must be between 8-128 characters.");
		determineLength();
	} else if (passwordLength > 128) {
		alert("Password length is too long! Must be between 8-128 caracters.");
		determineLength();
	} else {
		alert(
			"Please answer the following prompts to generate your random password."
		);
	}
	return passwordLength;
}

//Function used to determine whether the user wants to include uppercase characters in the password
function determineUpperCase() {
	upperCaseQuery = prompt(
		"Do you want to include uppercase letters in your password? \n(Yes or No)"
	);
	upperCaseQuery = upperCaseQuery.toLowerCase();

	if (upperCaseQuery === null || upperCaseQuery === "") {
		alert("Please answer Yes or No");
		determineUpperCase();
	} else if (upperCaseQuery === "yes" || upperCaseQuery === "y") {
		upperCaseQuery = true;
		return upperCaseQuery;
	} else if (upperCaseQuery === "no" || upperCaseQuery === "n") {
		upperCaseQuery = false;
		return upperCaseQuery;
	} else {
		alert("Please answer Yes or No");
		determineUpperCase();
	}
	return upperCaseQuery;
}

//Function used to determine whether the user wants to include numbers in the password
function determineNumbers() {
	numberQuery = prompt(
		"Do you want to include numbers in your password? \n(Yes or No)"
	);
	numberQuery = numberQuery.toLowerCase();

	if (numberQuery === null || numberQuery === "") {
		alert("Please answer Yes or No");
		determineNumbers();
	} else if (numberQuery === "yes" || numberQuery === "y") {
		numberQuery = true;
		return numberQuery;
	} else if (numberQuery === "no" || numberQuery === "n") {
		numberQuery = false;
		return numberQuery;
	} else {
		alert("Please answer Yes or No");
		determineNumbers();
	}
	return numberQuery;
}

//Function used to determine whether the user wants to include special characters in the password
function determineSpecial() {
	specialQuery = prompt(
		"Do you want to include special characters in your password? \n(Yes or No)"
	);
	specialQuery = specialQuery.toLowerCase();

	if (specialQuery === null || specialQuery === "") {
		alert("Please answer Yes or No");
		determineSpecial();
	} else if (specialQuery === "yes" || specialQuery === "y") {
		specialQuery = true;
		return specialQuery;
	} else if (specialQuery === "no" || specialQuery === "n") {
		specialQuery = false;
		return specialQuery;
	} else {
		alert("Please answer Yes or No");
		determineSpecial();
	}
	return specialQuery;
}

//Function used to take all the input from the previous functions and generate a password using a random number generator and
//the charAt method
function generatePassword() {
	determineLength();
	console.log(passwordLength);
	determineUpperCase();
	console.log(upperCaseQuery);
	determineNumbers();
	console.log(numberQuery);
	determineSpecial();
	console.log(specialQuery);

	var characters = lowerCaseLetterArr;
	var password = "";
	if (upperCaseQuery && numberQuery && specialQuery) {
		characters += upperCaseLetterArr + numberArr + specialCharacter;
	} else if (upperCaseQuery && numberQuery) {
		characters += upperCaseLetterArr + numberArr;
	} else if (numberQuery && specialQuery) {
		characters += numberArr + specialCharacter;
	} else if (upperCaseQuery && specialQuery) {
		characters += upperCaseLetterArr + specialCharacter;
	} else if (upperCaseQuery) {
		characters += upperCaseLetterArr;
	} else if (numberQuery) {
		characters += numberArr;
	} else if (specialQuery) {
		characters += specialCharacter;
	} else {
		characters === lowerCaseLetterArr;
	}

	for (var i = 0; i < passwordLength; i++) {
		password += characters.charAt(
			Math.floor(Math.random() * characters.length)
		);
	}
	return password;
}

// Write password for the #password input
function writePassword() {
	var password1 = [];
	password1 = generatePassword();
	var passwordText = document.querySelector("#password");
	passwordText.value = password1;
}
