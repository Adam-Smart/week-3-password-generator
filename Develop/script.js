//  A varible for the gennerate 
var generateBtn = document.querySelector("#generate");

// this is a function which will dipslay the random password into the card once its generated
function writePassword() {
  var password = genPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//This is a fuction which will generate a random passowrd
function genPassword(){
// This is multiple of arrays of characters which can be generated
  const uppercase = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
  const lowercase = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
  const number = "0,1,2,3,4,5,6,7,8,9";
  const specialcharacter = "!,£,$,%,^,&,*,(,),_,-,=,+,{,},[,],@,#,~,?,<,>"

  var passwordLength = 0;
var passwordUpper = false;
var passwordLower = false;
var passwordNum = false;
var passwordSpec = false;
// This displays a promt at the top of the page displaying the message below with a box allowing the user to enter the desired length of the password with a confim and cancel button
passwordLength = window.prompt("Enter how many characters are wanted in the password. Must be between 8 and 128! ");
// This displays a alert alerting the user that the password must contain between 8 and 128 characters 
if (passwordLength < 8 ||  passwordLength > 128) {
  window.alert ("Must be between 8 and 128 characters! ");
return;
}
// This is a set of confim promt asking what type of characters the user would like using "OK" or "cancel" button in the promt 
passwordUpper = window.confirm("Confirm for Uppercase");
passwordLower = window.confirm("Confirm for Lowercase");
passwordNum = window.confirm("Confirm for Numbers");
passwordSpec = window.confirm("Confirm for Secial characters")
// This if statement checks to see if the user has at least acepted at least on of the character types and if not will display the message below and close out
if (passwordUpper === false && passwordLower === false && passwordNum === false && passwordSpec === false){
  window.alert("Must enter at least one character type.")
}
// This is a varible which will go through and see what options the user have selected and then add the selected array and push them into one array called "avaliblecharactters" 
var password = "" ;
const avaliblecharacters = [];
// Checks for if the user has used uppercase characters
if(passwordUpper) {
avaliblecharacters.push(uppercase.split(","));
}
// Checks for if the user has used lower characters
if (passwordLower){
avaliblecharacters.push(lowercase.split(","));
}
// Checks for if the user has used number characters
if (passwordNum){
  avaliblecharacters.push(number.split(","));
}
// Checks for if the user has used special characters
if (passwordSpec){
  avaliblecharacters.push(specialcharacter.split(","));
}
// This for loop will go through the "avaliblecharacters" array and select a random character. This will loop until it gets to the end of the passwordlegnth 
for (var i=0; i <passwordLength; i++){
  var randomChar = avaliblecharacters[Math.floor(Math.random() * avaliblecharacters.length)];
  password += randomChar[Math.floor(Math.random() * randomChar.length)];
}
// This then retuns the generated password 
return(password)

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
