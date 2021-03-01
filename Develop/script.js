// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = ""
  var upperCasedCharacters = [
        'A', 'B', "C", "D", "E","F", "G", "H", "I", "J","K","L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var specialCharacters = [
        '@','%', "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":",",",")","(", "{","}", "[","]", "~", "-", "_", "."]
        
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        
  var lowerCasedCharacters = [ 
        'a',"b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q","r", "s", "t", "u", "v", "w", "x", "y", "z"]
    
  master = []
  // var ruCharacters =  master[Math.floor(Math.random() * upperCasedCharacters.length)];
  // var rlCharacters =  lowerCasedCharacters[Math.floor(Math.random() * lowerCasedCharacters.length)];
  // var sCharacters =  specialCharacters [Math.floor(Math.random() * specialCharacters.length)];
  // var nCharacters = numericCharacters [Math.floor(Math.random() * numericCharacters.length)];
  
  
    var passlength = prompt("How many characters do you want your password to be?")
  
    if(!(passlength >=8 && passlength <=128) ){
      alert("Must choose password between 8-128")
      return
    }
    
      var uppersCheck = confirm("Would you like to use uppercase letters?")
      if (uppersCheck){
         master = master.concat(upperCasedCharacters)
      }
      var lowersChecks = confirm("Would you like to use lowercase letters?")
      if (lowersChecks){
         master = master.concat(lowerCasedCharacters)
      }
      var specialCheck = confirm("Would you like to use special characters?")
      if (specialCheck){
         master = master.concat(specialCharacters)
      }
      var numericCheck = confirm("Would you like to use numeric characters?")
      if (numericCheck){
        master = master.concat(numericCharacters)
      }
    
    if(master.length == 0){
      alert("You need to choose a character")
      return 
    }
  
    for (var i = 0; i < passlength; i++) {
      password = password.concat(master[Math.floor(Math.random() * master.length)])
    }
    var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

//function generatePassword(){
//return "Password should go here"



  generateBtn.addEventListener("click", writePassword);
  // if (ruCharacters = !true && rlCharacters = !true && sCharacters = !true && nCharacters = true){
  //   return password
  // }















  
  
