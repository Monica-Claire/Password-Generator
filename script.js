//create global variables to use in the password
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var special = ["!","@","#","$","%","^",]
var numbers =["1","2","3","4","5","6","7","8","9","0"]
var length=undefined;

//create function that asks users what variables they want
function userInput () {
  var isUpper=window.confirm ("do you want to include uppercase letters?")
  var isLower=window.confirm ("do you want to include lowercase letters?")
  var isSpecial=window.confirm ("do you want to include special characters?")
  var isNumber=window.confirm ("do you want to include numbers?")
  var length=prompt ("how many characters would you like? Choose a number bettwen 8 and 32") 

  var chosenCharacters=(passwordSetter(isUpper, isLower, isSpecial, isNumber))
  generatePassword(chosenCharacters, length)
}

//Create an array based on user input
function passwordSetter(isUpper, isLower, isSpecial, isNumber){
  var chosenCharacters = []
  if (isUpper){
    chosenCharacters.push(upper)
  }
   if (isLower){
    chosenCharacters.push(lower)
  }
  if (isSpecial){
    chosenCharacters.push(special)
  }
  if (isNumber){
    chosenCharacters.push(numbers)
  }
  return chosenCharacters
}

//pull random data from arrays to give random password
function randomIndex(data){
  const index= Math.floor(Math.random() *data.length)
  return index
}

//create random password
function generatePassword(chosenCharacters, length) {
  var password=""
  for (let i=0; i<length; i++){
    var charSetIndex = randomIndex(chosenCharacters)
    var charIndex = randomIndex(chosenCharacters[charSetIndex])
    password+=(chosenCharacters[charSetIndex][charIndex])
  }
  //display password on page
  var passwordText = document.querySelector("#password")
  passwordText.value = password;
}

//starter code
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordDetails = userInput();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);