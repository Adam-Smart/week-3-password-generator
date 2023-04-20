// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = genPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function genPassword(){

  const uppercase = "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z";
  const lowercase = "a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z";
  const number = "0, 1, 2, 3, 4, 5, 6, 7, 8, 9";
  const specialcharacter = "!, £, $, %, ^, &, *, (, ), _, -, =, +, {, }, [, ], @, #, ~, ?, <, >"

  var passwordLength = 0;
var passwordUpper = false;
var passwordLower = false;
var passwordNum = false;
var passwordSpec = false;

passwordLength = window.prompt("Enter how many characters are wanted in the password. Must be between 8 and 128! ");

if (passwordLength < 8 ||  passwordLength > 128) {
  window.alert ("Must be between 8 and 128 characters! ");
return;
}
passwordUpper = window.confirm("Confirm for Uppercase");
passwordLower = window.confirm("Confirm for Lowercase");
passwordNum = window.confirm("Confirm for Numbers");
passwordSpec = window.confirm("Confirm for Secial characters")

if (passwordUpper === false && passwordLower === false && passwordNum === false && passwordSpec === false){
  window.alert("Must enter at least one character type.")
}

var password = "" ;
const avaliblecharacters = [];

if(passwordUpper) {
avaliblecharacters.push(uppercase.split(","));
}
if (passwordLower){
avaliblecharacters.push(lowercase.split(","));
}
if (passwordNum){
  avaliblecharacters.push(number.split(","));
}
if (passwordSpec){
  avaliblecharacters.push(specialcharacter.split(","));
}
for (var i=0; i <passwordLength; i++){
  var randomChar = avaliblecharacters[Math.floor(Math.random() * avaliblecharacters.length)];
  password += randomChar[Math.floor(Math.random() * randomChar.length)];
}

return(password)

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
